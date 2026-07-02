/* Conecta la lista de lecciones, el playground, el progreso y el panel
 * de solución sugerida. */

let leccionActualId = LECCIONES[0].id;

document.addEventListener('DOMContentLoaded', () => {
  renderListaLecciones();
  cargarLeccion(leccionActualId);

  document.getElementById('btn-ejecutar').addEventListener('click', ejecutarCodigoActual);
  document.getElementById('btn-reiniciar-codigo').addEventListener('click', reiniciarCodigoLeccion);
  document.getElementById('btn-cargar-solucion').addEventListener('click', cargarSolucionEnEditor);

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
 * que es lo esperable en cualquier editor de código. */
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

function renderListaLecciones() {
  const contenedor = document.getElementById('lista-lecciones');
  let categoriaAnterior = null;
  let html = '';

  LECCIONES.forEach((leccion) => {
    if (leccion.categoria !== categoriaAnterior) {
      html += `<li class="titulo-categoria">${leccion.categoria}</li>`;
      categoriaAnterior = leccion.categoria;
    }
    html += `
      <li>
        <button class="item-leccion ${leccion.id === leccionActualId ? 'activa' : ''}" data-id="${leccion.id}">
          <span class="marca ${Progreso.estaCompletada(leccion.id) ? 'completa' : ''}"></span>
          ${leccion.titulo}
        </button>
      </li>
    `;
  });

  contenedor.innerHTML = html;

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

  document.getElementById('explicacion-solucion').textContent = leccion.explicacionSolucion;
  document.getElementById('solucion-html').textContent = leccion.solucion.html;
  document.getElementById('solucion-css').textContent = leccion.solucion.css;
  document.getElementById('solucion-js').textContent = leccion.solucion.js;
  document.getElementById('detalle-solucion').removeAttribute('open');

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
  boton.textContent = completada ? 'Marcada como completada ✓ (click para desmarcar)' : 'Marcar lección como completada';
  boton.classList.toggle('completada', completada);
}

function actualizarBarraProgreso() {
  const total = LECCIONES.length;
  const completadas = Progreso.obtenerCompletadas().length;
  document.getElementById('texto-progreso').textContent = `${completadas} / ${total} lecciones completadas`;
  document.getElementById('barra-progreso-relleno').style.width = `${(completadas / total) * 100}%`;
}
