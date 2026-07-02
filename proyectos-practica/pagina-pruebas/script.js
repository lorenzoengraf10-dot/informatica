/* Lista de tareas simple: sirve para practicar manipulación del DOM
 * y localStorage antes de tocar el panel de gestión real. */

const CLAVE_STORAGE = 'pagina_pruebas_tareas';

function obtenerTareas() {
  const guardadas = localStorage.getItem(CLAVE_STORAGE);
  return guardadas ? JSON.parse(guardadas) : [];
}

function guardarTareas(tareas) {
  localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
}

function renderizar() {
  const tareas = obtenerTareas();
  const lista = document.getElementById('lista-tareas');

  lista.innerHTML = tareas.map((tarea, indice) => `
    <li class="${tarea.completada ? 'completada' : ''}">
      <span>${tarea.texto}</span>
      <button data-accion="completar" data-indice="${indice}">
        ${tarea.completada ? 'Deshacer' : 'Completar'}
      </button>
      <button data-accion="borrar" data-indice="${indice}">Borrar</button>
    </li>
  `).join('') || '<li>No hay tareas cargadas todavía</li>';

  const pendientes = tareas.filter((t) => !t.completada).length;
  document.getElementById('contador-tareas').textContent =
    `${pendientes} tarea(s) pendiente(s) de ${tareas.length} en total`;
}

document.getElementById('form-tarea').addEventListener('submit', (evento) => {
  evento.preventDefault();
  const input = document.getElementById('input-tarea');
  const texto = input.value.trim();
  if (!texto) return;

  const tareas = obtenerTareas();
  tareas.push({ texto, completada: false });
  guardarTareas(tareas);

  input.value = '';
  renderizar();
});

document.getElementById('lista-tareas').addEventListener('click', (evento) => {
  const boton = evento.target.closest('button');
  if (!boton) return;

  const indice = Number(boton.dataset.indice);
  const tareas = obtenerTareas();

  if (boton.dataset.accion === 'completar') {
    tareas[indice].completada = !tareas[indice].completada;
  } else if (boton.dataset.accion === 'borrar') {
    tareas.splice(indice, 1);
  }

  guardarTareas(tareas);
  renderizar();
});

renderizar();
