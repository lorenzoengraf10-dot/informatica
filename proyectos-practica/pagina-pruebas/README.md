# Página de pruebas — lista de tareas

Proyecto mínimo para practicar HTML, CSS y JavaScript sin depender de datos reales
del negocio. Es una lista de tareas simple con persistencia en `localStorage`.

## Qué se practica acá

- **HTML semántico**: `header`, `main`, `section`, `footer`, `form`, `label`.
- **CSS**: variables (`:root`), flexbox, estados (`:hover`, clase `.completada`).
- **JavaScript / DOM**:
  - Leer el valor de un `input` y reaccionar al evento `submit` de un formulario.
  - Generar HTML dinámicamente a partir de un array (`.map().join('')`).
  - Delegación de eventos: un solo `addEventListener` en la lista, en vez de uno
    por cada botón, usando `data-accion` y `data-indice` para saber qué tocaron.
  - `localStorage` para que las tareas no se pierdan al recargar la página.

## Cómo probarlo

Abrir `index.html` en el navegador. No requiere ningún servidor ni instalación.

## Ideas para seguir practicando acá

- Agregar una fecha límite a cada tarea.
- Ordenar las tareas por estado (pendientes primero).
- Agregar validación para no permitir tareas vacías o duplicadas.
- Migrar el `localStorage` a un archivo JSON servido por un backend PHP simple
  (ver Fase 3 del `ROADMAP.md` general del repositorio).
