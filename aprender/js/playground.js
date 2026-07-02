/* Arma el srcdoc del iframe de vista previa a partir del HTML/CSS/JS
 * que el alumno está editando, y lo actualiza con un pequeño retraso
 * (debounce) para no re-renderizar en cada tecla. */

const Playground = (() => {
  let temporizador = null;

  function armarDocumento({ html, css, js }) {
    return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  body { font-family: system-ui, sans-serif; padding: 12px; }
  ${css}
</style>
</head>
<body>
${html}
<script>
try {
${js}
} catch (error) {
  document.body.insertAdjacentHTML(
    'beforeend',
    '<pre style="color:#a83232;background:#fdecea;padding:8px;border-radius:4px;margin-top:12px;">Error en el código: ' + error.message + '</pre>'
  );
}
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
