# Aprender a programar — lecciones interactivas

Esta es la aplicación central del repositorio: un curso interactivo de HTML,
CSS y JavaScript con editor de código en vivo, directamente en el navegador,
sin instalar nada. Tiene **18 lecciones** organizadas en tres categorías (HTML,
CSS, JavaScript), cada una con una solución sugerida para comparar cómo se
resuelve el desafío.

## Cómo usarla

Abrí `aprender/index.html` en el navegador (local o publicado con GitHub Pages).

1. Elegí una lección de la barra lateral (agrupadas por HTML / CSS / JavaScript).
2. Leé la explicación y el desafío.
3. Editá el HTML, el CSS y el JavaScript en los tres editores. La tecla Tab
   inserta indentación en vez de saltar de campo, como en un editor de código real.
4. El resultado se actualiza solo abajo, en el recuadro "Resultado" (o con el
   botón "Ejecutar ahora" si preferís no esperar).
5. Resolvé el desafío modificando el código de partida.
6. Si te trabás, abrí "¿Te trabaste? Ver una solución sugerida": muestra el
   código resuelto, una explicación de qué cambió y por qué, y un botón para
   cargar esa solución directamente en el editor (pisa lo que tenías escrito,
   así que primero pregunta si estás seguro).
7. Anotá lo que aprendiste en "Mis notas de esta lección".
8. Marcá la lección como completada cuando te sientas cómodo con el tema.

Todo (tu código editado, tus notas, qué lecciones completaste) se guarda solo
en tu navegador, con `localStorage`. Si limpiás el caché del navegador se
pierde, así que no hace falta preocuparse por privacidad de terceros, pero sí
tener en cuenta que no se sincroniza entre dispositivos.

## Temario

**HTML**: estructura básica · listas y tablas · formularios completos ·
imágenes y accesibilidad.

**CSS**: selectores y modelo de caja · Flexbox · Grid · diseño responsive
(media queries) · transiciones y estados (`:hover`).

**JavaScript**: variables y funciones · condicionales y comparaciones ·
arrays y sus métodos (`forEach`, `filter`) · objetos · manipular el DOM ·
eventos y formularios · JSON · `localStorage` · manejo de errores (`try/catch`).

## Cómo está armada

```
aprender/
  index.html          estructura: barra lateral + contenido + editores + vista previa + solución
  css/estilo.css       estilos
  js/lecciones.js       contenido de cada lección (texto + código de partida + solución)
  js/progreso.js        guarda progreso, código editado y notas en localStorage
  js/playground.js      arma el HTML final y lo mete en un <iframe> vía srcdoc
  js/app.js             conecta todo: navegación, editores, botones, tecla Tab
```

El truco técnico central está en `playground.js`: cada vez que el alumno edita
código, se arma un documento HTML completo (con el CSS metido en un `<style>`
y el JS en un `<script>`) y se lo asigna a `iframe.srcdoc`. Eso hace que el
resultado se vea al instante, como en un CodePen, sin backend ni librerías
externas.

**Manejo de errores**: el iframe usa `window.onerror` para atrapar cualquier
error no controlado, en vez de envolver el código del alumno en un
`try/catch`. La diferencia importa: un `try/catch` alrededor del script solo
cubre lo que se ejecuta de forma inmediata al cargar la página. Si el error
ocurre después —por ejemplo, dentro de la función que responde al clic de un
botón, que es el caso de varias lecciones—, un `try/catch` no lo atraparía y
el alumno vería la vista previa "no hacer nada" sin ninguna pista de qué
pasó. `window.onerror` atrapa el error ocurra cuando ocurra y lo muestra en
un recuadro rojo dentro del propio resultado.

## Cómo agregar una lección nueva

1. Copiar un objeto de `js/lecciones.js` y darle un `id` único y una `categoria`
   (`HTML`, `CSS` o `JavaScript`; si se usa una categoría nueva, aparece sola
   como una sección más en la barra lateral).
2. Completar `titulo`, `resumen`, `reto`, el código de partida (`html`, `css`,
   `js`) y el objeto `solucion` con el mismo formato, más `explicacionSolucion`.
3. Se agrega sola a la lista: no hace falta tocar `app.js` ni el HTML.

## Por qué está separada del panel de gestión de Productos Patagónicos

Esta app es el "aula", el panel de gestión (en el otro repositorio) es el
"trabajo real". Acá se puede romper cualquier cosa sin consecuencias; ahí no.
