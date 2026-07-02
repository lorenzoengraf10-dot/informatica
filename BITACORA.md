# Bitácora de aprendizaje

Registro personal de qué se prueba, qué se aprende y qué queda pendiente. Una
entrada nueva por sesión de trabajo (no hace falta que sea larga). Formato
sugerido:

```
## AAAA-MM-DD
- Qué probé:
- Qué funcionó / qué no:
- Qué aprendí:
- Qué me quedó pendiente o quiero investigar después:
```

## 2026-07-02

- Qué probé: arranqué este repositorio como centro de aprendizaje, separado del
  repositorio `productosoatagonicos` (que es el negocio real de uso interno).
- Qué funcionó: quedó claro el rol de cada repositorio: acá se prueban ideas
  sueltas y proyectos chicos (página de pruebas, blog), allá vive la herramienta
  de trabajo real (panel de gestión) con datos del negocio.
- Qué aprendí: separar "el negocio" de "el laboratorio de pruebas" evita romper
  algo importante mientras se está aprendiendo, y de paso enseña a organizar
  varios repositorios con propósitos distintos.
- Pendiente: empezar a completar `proyectos-practica/pagina-pruebas/` y anotar acá
  cada función de HTML/CSS/JS nueva que se entienda.

## 2026-07-02 (segunda entrada) — app de lecciones interactivas

- Qué probé: armé `aprender/`, una app de lecciones de HTML/CSS/JS con editor de
  código en vivo (vista previa en un `<iframe>`), arrancando con 7 lecciones.
- Qué funcionó: el truco de usar `iframe.srcdoc` para mostrar el resultado sin
  backend ni librerías externas.
- Qué encontré (y corregí) como error: el manejo de errores usaba un `try/catch`
  alrededor del código del alumno, pero eso solo cubre lo que se ejecuta de forma
  inmediata al cargar la página. Un error que ocurre después —por ejemplo, adentro
  de la función que responde al clic de un botón— no quedaba atrapado, y la vista
  previa simplemente "no hacía nada" sin ninguna pista de qué había fallado. Lo
  cambié por `window.onerror`, que atrapa cualquier error no controlado ocurra
  cuando ocurra (sea en la carga inicial o en un evento posterior), y lo probé a
  propósito forzando un error dentro de un `addEventListener` para confirmar que
  ahora sí se muestra.
- Qué agregué: expandí de 7 a 18 lecciones (4 de HTML, 5 de CSS, 9 de JavaScript),
  agrupadas por categoría en la barra lateral. Cada lección ahora tiene una
  "solución sugerida" con el código resuelto y una explicación de qué cambió y
  por qué, para poder comparar el propio intento sin quedar trabado. También
  agregué soporte para la tecla Tab dentro de los editores (antes saltaba de
  campo en vez de indentar, que es el comportamiento esperable en un editor de
  código).
- Pendiente: resolver los 18 desafíos sin mirar la solución antes de intentarlo,
  y considerar agregar más lecciones de JavaScript intermedio (funciones flecha,
  `async`/`fetch`) cuando se llegue a la Fase 3 del roadmap (backend).
