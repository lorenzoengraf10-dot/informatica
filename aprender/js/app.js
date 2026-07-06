/* Conecta la navegación (desplegable + flechas), el playground, el progreso,
 * las pestañas de editor y el panel de solución sugerida.
 * La app está pensada primero para el celular: navegación por desplegable y
 * botones de anterior/siguiente, y un editor a la vez con pestañas. */

let leccionActualId = LECCIONES[0].id;

document.addEventListener('DOMContentLoaded', () => {
  construirSelector();
  configurarNavegacion();
  configurarPestanasEditor();
  cargarLeccion(leccionActualId);

  document.getElementById('btn-ejecutar').addEventListener('click', ejecutarCodigoActual);
  document.getElementById('btn-reiniciar-codigo').addEventListener('click', reiniciarCodigoLeccion);
  document.getElementById('btn-cargar-solucion').addEventListener('click', cargarSolucionEnEditor);

  document.getElementById('btn-completada').addEventListener('click', () => {
    Progreso.alternarCompletada(leccionActualId);
    actualizarBotonCompletada();
    actualizarBarraProgreso();
    actualizarEtiquetasSelector();
  });

  document.getElementById('btn-reiniciar-todo').addEventListener('click', () => {
    if (!confirm('Esto borra tu progreso, tu código editado y tus notas de todas las lecciones. ¿Continuar?')) return;
    Progreso.reiniciarTodo();
    cargarLeccion(leccionActualId);
    actualizarBarraProgreso();
    actualizarEtiquetasSelector();
  });

  ['editor-html', 'editor-css', 'editor-js'].forEach((idCampo) => {
    const campo = document.getElementById(idCampo);
    campo.addEventListener('input', () => {
      guardarCodigoActual();
      ejecutarCodigoActualConRetraso();
    });
    habilitarTab(campo);
  });

  document.getElementById('campo-notas').addEventListener('input', (evento) => {
    Progreso.guardarNotas(leccionActualId, evento.target.value);
  });

  actualizarBarraProgreso();
});

/* Sin esto, tocar Tab dentro de un editor mueve el foco a otro campo (el
 * comportamiento normal del navegador) en vez de insertar una indentación,
 * que es lo esperable en cualquier editor de código. En el celular no molesta
 * porque el teclado táctil no suele tener Tab. */
function habilitarTab(campo) {
  campo.addEventListener('keydown', (evento) => {
    if (evento.key !== 'Tab') return;
    evento.preventDefault();

    const inicio = campo.selectionStart;
    const fin = campo.selectionEnd;
    campo.value = campo.value.slice(0, inicio) + '  ' + campo.value.slice(fin);
    campo.selectionStart = campo.selectionEnd = inicio + 2;
    campo.dispatchEvent(new Event('input'));
  });
}

/* ---------- Navegación por desplegable ---------- */

function construirSelector() {
  const select = document.getElementById('selector-leccion');
  let categoriaAnterior = null;
  let grupo = null;
  select.innerHTML = '';

  LECCIONES.forEach((leccion, indice) => {
    if (leccion.categoria !== categoriaAnterior) {
      grupo = document.createElement('optgroup');
      grupo.label = leccion.categoria;
      select.appendChild(grupo);
      categoriaAnterior = leccion.categoria;
    }
    const opcion = document.createElement('option');
    opcion.value = leccion.id;
    opcion.dataset.titulo = `${indice + 1}. ${leccion.titulo}`;
    grupo.appendChild(opcion);
  });

  actualizarEtiquetasSelector();

  select.addEventListener('change', () => cargarLeccion(select.value));
}

/* Refresca el texto de cada opción para mostrar un tilde en las completadas. */
function actualizarEtiquetasSelector() {
  const select = document.getElementById('selector-leccion');
  select.querySelectorAll('option').forEach((opcion) => {
    const completa = Progreso.estaCompletada(opcion.value);
    opcion.textContent = (completa ? '✓ ' : '') + opcion.dataset.titulo;
  });
  select.value = leccionActualId;
}

function configurarNavegacion() {
  document.getElementById('btn-anterior').addEventListener('click', () => irRelativo(-1));
  document.getElementById('btn-siguiente').addEventListener('click', () => irRelativo(1));
}

function irRelativo(paso) {
  const indice = LECCIONES.findIndex((l) => l.id === leccionActualId);
  const nuevo = indice + paso;
  if (nuevo < 0 || nuevo >= LECCIONES.length) return;
  cargarLeccion(LECCIONES[nuevo].id);
}

/* ---------- Pestañas de editor (celular: uno a la vez) ---------- */

function configurarPestanasEditor() {
  document.querySelectorAll('.editor-tab').forEach((tab) => {
    tab.addEventListener('click', () => activarEditor(tab.dataset.editor));
  });
}

function activarEditor(cual) {
  document.querySelectorAll('.editor-tab').forEach((t) => {
    t.classList.toggle('activo', t.dataset.editor === cual);
  });
  document.querySelectorAll('.editor-panel').forEach((p) => {
    p.classList.toggle('activo', p.dataset.editor === cual);
  });
}

/* ---------- Cargar una lección ---------- */

function cargarLeccion(id) {
  leccionActualId = id;
  const leccion = LECCIONES.find((l) => l.id === id);
  const indice = LECCIONES.findIndex((l) => l.id === id);

  document.getElementById('categoria-leccion').textContent = leccion.categoria;
  document.getElementById('titulo-leccion').textContent = leccion.titulo;
  document.getElementById('resumen-leccion').textContent = leccion.resumen;
  document.getElementById('reto-leccion').textContent = leccion.reto;

  const codigoGuardado = Progreso.obtenerCodigoGuardado(id);
  const codigo = codigoGuardado || { html: leccion.html, css: leccion.css, js: leccion.js };

  document.getElementById('editor-html').value = codigo.html;
  document.getElementById('editor-css').value = codigo.css;
  document.getElementById('editor-js').value = codigo.js;

  document.getElementById('campo-notas').value = Progreso.obtenerNotas(id);

  document.getElementById('explicacion-solucion').textContent = leccion.explicacionSolucion;
  document.getElementById('solucion-html').textContent = leccion.solucion.html;
  document.getElementById('solucion-css').textContent = leccion.solucion.css;
  document.getElementById('solucion-js').textContent = leccion.solucion.js;
  document.getElementById('detalle-solucion').removeAttribute('open');

  // Navegación
  document.getElementById('selector-leccion').value = id;
  document.getElementById('contador-leccion').textContent = `${indice + 1} / ${LECCIONES.length}`;
  document.getElementById('btn-anterior').disabled = indice === 0;
  document.getElementById('btn-siguiente').disabled = indice === LECCIONES.length - 1;

  // Volver a la pestaña de HTML al cambiar de lección (empezás por el HTML)
  activarEditor('html');

  actualizarBotonCompletada();
  ejecutarCodigoActual();

  // Al cambiar de lección, subir para ver el enunciado desde arriba
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function obtenerCodigoDeEditores() {
  return {
    html: document.getElementById('editor-html').value,
    css: document.getElementById('editor-css').value,
    js: document.getElementById('editor-js').value
  };
}

function ejecutarCodigoActual() {
  const iframe = document.getElementById('vista-previa');
  Playground.ejecutar(iframe, obtenerCodigoDeEditores());
}

function ejecutarCodigoActualConRetraso() {
  const iframe = document.getElementById('vista-previa');
  Playground.ejecutarConRetraso(iframe, obtenerCodigoDeEditores());
}

function guardarCodigoActual() {
  Progreso.guardarCodigo(leccionActualId, obtenerCodigoDeEditores());
}

function reiniciarCodigoLeccion() {
  if (!confirm('Esto descarta tus cambios en el código de esta lección y vuelve al código original. ¿Continuar?')) return;
  Progreso.borrarCodigoGuardado(leccionActualId);
  cargarLeccion(leccionActualId);
}

function cargarSolucionEnEditor() {
  if (!confirm('Esto reemplaza el código que tenías escrito en esta lección por la solución sugerida. ¿Continuar?')) return;
  const leccion = LECCIONES.find((l) => l.id === leccionActualId);

  document.getElementById('editor-html').value = leccion.solucion.html;
  document.getElementById('editor-css').value = leccion.solucion.css;
  document.getElementById('editor-js').value = leccion.solucion.js;

  guardarCodigoActual();
  ejecutarCodigoActual();
}

function actualizarBotonCompletada() {
  const boton = document.getElementById('btn-completada');
  const completada = Progreso.estaCompletada(leccionActualId);
  boton.textContent = completada ? 'Completada ✓ (tocá para desmarcar)' : 'Marcar como completada';
  boton.classList.toggle('completada', completada);
}

function actualizarBarraProgreso() {
  const total = LECCIONES.length;
  const completadas = Progreso.obtenerCompletadas().length;
  document.getElementById('texto-progreso').textContent = `${completadas} / ${total} lecciones completadas`;
  document.getElementById('barra-progreso-relleno').style.width = `${(completadas / total) * 100}%`;
}
