/* Arma el srcdoc del iframe de vista previa a partir del HTML/CSS/JS
 * que el alumno está editando, y lo actualiza con un pequeño retraso
 * (debounce) para no re-renderizar en cada tecla.
 *
 * El manejo de errores usa window.onerror en vez de un try/catch alrededor
 * del código del alumno: un try/catch solo cubre lo que se ejecuta de forma
 * inmediata, así que un error que ocurre después (por ejemplo, adentro de un
 * addEventListener de un botón, al hacer clic) no lo atraparía y quedaría
 * fallando en silencio. window.onerror atrapa cualquier error no controlado
 * en la página, ocurra cuando ocurra. */

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
window.onerror = function (mensaje) {
  var pre = document.createElement('pre');
  pre.className = 'error-en-vivo';
  pre.textContent = 'Error en el código: ' + mensaje;
  document.body.appendChild(pre);
  return false;
};
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
