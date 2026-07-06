/* Arma el srcdoc del iframe de vista previa a partir del HTML/CSS/JS
 * que el alumno está editando, y lo actualiza con un pequeño retraso
 * (debounce) para no re-renderizar en cada tecla.
 *
 * El manejo de errores usa window.onerror en vez de un try/catch alrededor
 * del código del alumno: un try/catch solo cubre lo que se ejecuta de forma
 * inmediata, así que un error que ocurre después (por ejemplo, adentro de un
 * addEventListener de un botón, al hacer clic) no lo atraparía y quedaría
 * fallando en silencio. window.onerror atrapa cualquier error no controlado
 * en la página, ocurra cuando ocurra.
 *
 * Un <iframe> con srcdoc y sin atributo sandbox comparte el mismo origen (y
 * por lo tanto el mismo localStorage) que esta página. Eso es un problema
 * real, no teórico: si un alumno prueba localStorage.clear() en CUALQUIER
 * lección, para "ver qué pasa" (algo esperable al estar aprendiendo), borra
 * de golpe todo su progreso guardado, sin ningún aviso. Por eso se reemplaza
 * window.localStorage, dentro del iframe, por una versión aislada que graba
 * los mismos datos bajo el prefijo "ap_demo_" en el localStorage real: el
 * alumno sigue viendo que sus datos persisten entre ejecuciones (que es lo
 * que la lección de localStorage necesita demostrar), pero no puede leer,
 * pisar ni borrar el progreso real de la app. Como el prefijo empieza con
 * "ap_", "Reiniciar todo mi progreso" también limpia estos datos de prueba. */

const Playground = (() => {
  let temporizador = null;

  function armarDocumento({ html, css, js }) {
    return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  body { font-family: system-ui, sans-serif; padding: 12px; }
  .error-en-vivo {
    color: #a83232;
    background-color: #fdecea;
    padding: 8px;
    border-radius: 4px;
    margin-top: 12px;
    white-space: pre-wrap;
    font-family: 'Courier New', monospace;
    font-size: 0.85rem;
  }
  ${css}
</style>
</head>
<body>
${html}
<script>
function mostrarErrorEnVivo(mensaje) {
  var pre = document.createElement('pre');
  pre.className = 'error-en-vivo';
  pre.textContent = 'Error en el código: ' + mensaje;
  document.body.appendChild(pre);
}

window.onerror = function (mensaje) {
  mostrarErrorEnVivo(mensaje);
  return false;
};

window.addEventListener('unhandledrejection', function (evento) {
  var razon = evento.reason;
  mostrarErrorEnVivo(razon && razon.message ? razon.message : String(razon));
});

(function () {
  var real = window.localStorage;
  var PREFIJO = 'ap_demo_';

  function clavesDeDemo() {
    var resultado = [];
    for (var i = 0; i < real.length; i++) {
      var clave = real.key(i);
      if (clave && clave.indexOf(PREFIJO) === 0) resultado.push(clave);
    }
    return resultado;
  }

  var storageAislado = {
    getItem: function (clave) { return real.getItem(PREFIJO + clave); },
    setItem: function (clave, valor) { real.setItem(PREFIJO + clave, valor); },
    removeItem: function (clave) { real.removeItem(PREFIJO + clave); },
    clear: function () { clavesDeDemo().forEach(function (c) { real.removeItem(c); }); },
    key: function (indice) {
      var clave = clavesDeDemo()[indice];
      return clave ? clave.slice(PREFIJO.length) : null;
    }
  };
  Object.defineProperty(storageAislado, 'length', {
    get: function () { return clavesDeDemo().length; }
  });
  Object.defineProperty(window, 'localStorage', { value: storageAislado, configurable: true });
})();
<\/script>
<script>
${js}
<\/script>
</body>
</html>`;
  }

  function ejecutar(iframe, codigo) {
    iframe.srcdoc = armarDocumento(codigo);
  }

  function ejecutarConRetraso(iframe, codigo, esperaMs = 400) {
    clearTimeout(temporizador);
    temporizador = setTimeout(() => ejecutar(iframe, codigo), esperaMs);
  }

  return { ejecutar, ejecutarConRetraso };
})();
