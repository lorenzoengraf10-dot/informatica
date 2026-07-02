/* Conecta la lista de lecciones, el playground y el progreso. */

let leccionActualId = LECCIONES[0].id;

document.addEventListener('DOMContentLoaded', () => {
  renderListaLecciones();
  cargarLeccion(leccionActualId);

  document.getElementById('btn-ejecutar').addEventListener('click', ejecutarCodigoActual);
  document.getElementById('btn-reiniciar-codigo').addEventListener('click', reiniciarCodigoLeccion);
  document.getElementById('btn-completada').addEventListener('click', () => {
    Progreso.alternarCompletada(leccionActualId);
    renderListaLecciones();
    actualizarBotonCompletada();
    actualizarBarraProgreso();
  });

  document.getElementById('btn-reiniciar-todo').addEventListener('click', () => {
    if (!confirm('Esto borra tu progreso, tu código editado y tus notas de todas las lecciones. ¿Continuar?')) return;
    Progreso.reiniciarTodo();
    renderListaLecciones();
    cargarLeccion(leccionActualId);
    actualizarBarraProgreso();
  });

  ['editor-html', 'editor-css', 'editor-js'].forEach((idCampo) => {
    document.getElementById(idCampo).addEventListener('input', () => {
      guardarCodigoActual();
      ejecutarCodigoActualConRetraso();
    });
  });

  document.getElementById('campo-notas').addEventListener('input', (evento) => {
    Progreso.guardarNotas(leccionActualId, evento.target.value);
  });

  actualizarBarraProgreso();
});

function renderListaLecciones() {
  const contenedor = document.getElementById('lista-lecciones');
  contenedor.innerHTML = LECCIONES.map((leccion) => `
    <li>
      <button class="item-leccion ${leccion.id === leccionActualId ? 'activa' : ''}" data-id="${leccion.id}">
        <span class="marca ${Progreso.estaCompletada(leccion.id) ? 'completa' : ''}"></span>
        ${leccion.titulo}
      </button>
    </li>
  `).join('');

  contenedor.querySelectorAll('.item-leccion').forEach((boton) => {
    boton.addEventListener('click', () => cargarLeccion(boton.dataset.id));
  });
}

function cargarLeccion(id) {
  leccionActualId = id;
  const leccion = LECCIONES.find((l) => l.id === id);

  document.getElementById('titulo-leccion').textContent = leccion.titulo;
  document.getElementById('resumen-leccion').textContent = leccion.resumen;
  document.getElementById('reto-leccion').textContent = leccion.reto;

  const codigoGuardado = Progreso.obtenerCodigoGuardado(id);
  const codigo = codigoGuardado || { html: leccion.html, css: leccion.css, js: leccion.js };

  document.getElementById('editor-html').value = codigo.html;
  document.getElementById('editor-css').value = codigo.css;
  document.getElementById('editor-js').value = codigo.js;

  document.getElementById('campo-notas').value = Progreso.obtenerNotas(id);

  actualizarBotonCompletada();
  renderListaLecciones();
  ejecutarCodigoActual();
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

function actualizarBotonCompletada() {
  const boton = document.getElementById('btn-completada');
  const completada = Progreso.estaCompletada(leccionActualId);
  boton.textContent = completada ? 'Marcada como completada ✓ (click para desmarcar)' : 'Marcar lección como completada';
  boton.classList.toggle('completada', completada);
}

function actualizarBarraProgreso() {
  const total = LECCIONES.length;
  const completadas = Progreso.obtenerCompletadas().length;
  document.getElementById('texto-progreso').textContent = `${completadas} / ${total} lecciones completadas`;
  document.getElementById('barra-progreso-relleno').style.width = `${(completadas / total) * 100}%`;
}
