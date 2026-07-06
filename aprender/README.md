# Aprender a programar — lecciones interactivas

Esta es la aplicación central del repositorio: un curso interactivo de HTML,
CSS y JavaScript con editor de código en vivo, directamente en el navegador,
sin instalar nada. Tiene **27 lecciones** organizadas en tres categorías
(9 de HTML, 9 de CSS, 9 de JavaScript), cada una con una solución sugerida para
comparar cómo se resuelve el desafío.

**Está pensada primero para el celular** (mobile-first): navegación con un
desplegable y botones grandes de anterior/siguiente, un editor a la vez con
pestañas para no scrollear de más, campos con letra de 16px para que el celular
no haga zoom al tocarlos, y se puede **instalar como una app** en la pantalla de
inicio del teléfono y usar sin internet (ver "App instalable" más abajo). En una
computadora aprovecha el ancho y muestra los tres editores a la vez.

## Cómo usarla

Abrí `aprender/index.html` en el navegador (local o publicado con GitHub Pages).

1. Elegí una lección en el desplegable de arriba (agrupado por HTML / CSS /
   JavaScript), o movete con los botones **◀ Anterior** / **Siguiente ▶**.
2. Leé la explicación y el desafío.
3. Editá el HTML, el CSS y el JavaScript. En el celular tocás las pestañas
   **HTML / CSS / JS** para cambiar de editor; en la computadora se ven los tres
   a la vez. La tecla Tab inserta indentación en vez de saltar de campo.
4. El resultado se actualiza solo abajo, en el recuadro "Resultado" (o con el
   botón "Ejecutar ahora" si preferís no esperar).
5. Resolvé el desafío modificando el código de partida.
6. Si te trabás, abrí "¿Te trabaste? Ver una solución sugerida": muestra el
   código resuelto, una explicación de qué cambió y por qué, y un botón para
   cargar esa solución directamente en el editor (pisa lo que tenías escrito,
   así que primero pregunta si estás seguro).
7. Anotá lo que aprendiste en "Mis notas de esta lección".
8. Marcá la lección como completada; en el desplegable aparece con un ✓.

Todo (tu código editado, tus notas, qué lecciones completaste) se guarda solo
en tu navegador, con `localStorage`. Si limpiás el caché del navegador se
pierde, así que no se sincroniza entre dispositivos.

## Temario

**HTML** (9): estructura básica · listas y tablas · formularios completos ·
imágenes y accesibilidad · dar formato al texto · enlaces y navegación ·
secciones con significado (semántica) · contenido desplegable y símbolos ·
formularios pensados para el celular (tipos de input y el teclado del teléfono).

**CSS** (9): selectores y modelo de caja · Flexbox · Grid · diseño responsive
(media queries) · transiciones y estados (`:hover`) · colores y unidades
(hex/rgb/hsl, rem/vw/vh) · tipografía y legibilidad · posición y barras fijas
(`sticky`) · sombras y profundidad.

**JavaScript** (9): variables y funciones · condicionales y comparaciones ·
arrays y sus métodos (`forEach`, `filter`) · objetos · manipular el DOM ·
eventos y formularios · JSON · `localStorage` · manejo de errores (`try/catch`).

## App instalable (PWA) y uso sin internet

La app trae un `manifest.json`, un ícono (`icono.svg`) y un service worker
(`sw.js`). Cuando se sirve por HTTPS (por ejemplo con GitHub Pages), el celular
ofrece "Agregar a la pantalla de inicio": queda como una app más, abre a pantalla
completa y **funciona sin conexión** porque el service worker guarda una copia.

- Abierta como archivo local (`file://`) esto no se activa, pero la app funciona
  igual: la instalación offline es un extra, no un requisito.
- **Importante para quien la edite:** al cambiar cualquier archivo de la app, hay
  que subir el número de versión (`CACHE`) en `sw.js` para que los celulares
  descarten la copia vieja y bajen la nueva.

## Cómo está armada

```
aprender/
  index.html          estructura: navegación + contenido + editores + vista previa + solución
  css/estilo.css       estilos mobile-first (+ una media query para pantalla ancha)
  js/lecciones.js       contenido de cada lección (texto + código de partida + solución)
  js/progreso.js        guarda progreso, código editado y notas en localStorage
  js/playground.js      arma el HTML final y lo mete en un <iframe> vía srcdoc
  js/app.js             conecta todo: navegación, pestañas de editor, botones, tecla Tab
  manifest.json         datos para instalar la app en el celular
  sw.js                 service worker: copia offline de la app
  icono.svg             ícono de la app
```

El truco técnico central está en `playground.js`: cada vez que el alumno edita
código, se arma un documento HTML completo (con el CSS metido en un `<style>`
y el JS en un `<script>`) y se lo asigna a `iframe.srcdoc`. Eso hace que el
resultado se vea al instante, como en un CodePen, sin backend ni librerías
externas.

**Manejo de errores**: el iframe usa `window.onerror` (y `unhandledrejection`)
para atrapar cualquier error no controlado, en vez de envolver el código del
alumno en un `try/catch`. La diferencia importa: un `try/catch` alrededor del
script solo cubre lo que se ejecuta de forma inmediata al cargar la página. Si
el error ocurre después —por ejemplo, dentro de la función que responde al clic
de un botón, que es el caso de varias lecciones—, un `try/catch` no lo atraparía
y el alumno vería la vista previa "no hacer nada" sin ninguna pista. Además, el
iframe usa un `localStorage` aislado (prefijo `ap_demo_`): así el código de una
lección no puede borrar el progreso real de la app.

## Cómo agregar una lección nueva

1. Copiar un objeto de `js/lecciones.js` y darle un `id` único y una `categoria`
   (`HTML`, `CSS` o `JavaScript`; si se usa una categoría nueva, aparece sola
   como un grupo más en el desplegable).
2. Completar `titulo`, `resumen`, `reto`, el código de partida (`html`, `css`,
   `js`) y el objeto `solucion` con el mismo formato, más `explicacionSolucion`.
3. Se agrega sola: no hace falta tocar `app.js` ni el HTML.

## Por qué está separada del panel de gestión de Productos Patagónicos

Esta app es el "aula", el panel de gestión (en el otro repositorio) es el
"trabajo real". Acá se puede romper cualquier cosa sin consecuencias; ahí no.
