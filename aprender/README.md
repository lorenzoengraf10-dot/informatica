# Aprender a programar — lecciones interactivas

Esta es la aplicación central del repositorio: un curso interactivo de HTML,
CSS y JavaScript con editor de código en vivo, directamente en el navegador,
sin instalar nada.

## Cómo usarla

Abrí `aprender/index.html` en el navegador (local o publicado con GitHub Pages).

1. Elegí una lección de la barra lateral.
2. Leé la explicación y el desafío.
3. Editá el HTML, el CSS y el JavaScript en los tres editores.
4. El resultado se actualiza solo abajo, en el recuadro "Resultado" (o con el
   botón "Ejecutar ahora" si preferís no esperar).
5. Resolvé el desafío modificando el código de partida.
6. Anotá lo que aprendiste en "Mis notas de esta lección".
7. Marcá la lección como completada cuando te sientas cómodo con el tema.

Todo (tu código editado, tus notas, qué lecciones completaste) se guarda solo
en tu navegador, con `localStorage`. Si limpiás el caché del navegador se
pierde, así que no hace falta preocuparse por privacidad de terceros, pero sí
tener en cuenta que no se sincroniza entre dispositivos.

## Cómo está armada

```
aprender/
  index.html          estructura: barra lateral + contenido + editores + vista previa
  css/estilo.css       estilos
  js/lecciones.js       contenido de cada lección (texto + código de partida)
  js/progreso.js        guarda progreso, código editado y notas en localStorage
  js/playground.js      arma el HTML final y lo mete en un <iframe> vía srcdoc
  js/app.js             conecta todo: navegación, editores, botones
```

El truco técnico central está en `playground.js`: cada vez que el alumno edita
código, se arma un documento HTML completo (con el CSS metido en un `<style>`
y el JS en un `<script>`, envuelto en un `try/catch` para mostrar errores sin
romper la página) y se lo asigna a `iframe.srcdoc`. Eso hace que el resultado
se vea al instante, como en un CodePen, sin backend ni librerías externas.

## Cómo agregar una lección nueva

1. Copiar un objeto de `js/lecciones.js` y darle un `id` único.
2. Completar `titulo`, `resumen`, `reto`, y el código de partida (`html`,
   `css`, `js`).
3. Se agrega sola a la lista: no hace falta tocar `app.js` ni el HTML.

## Por qué está separada del panel de gestión de Productos Patagónicos

Esta app es el "aula", el panel de gestión (en el otro repositorio) es el
"trabajo real". Acá se puede romper cualquier cosa sin consecuencias; ahí no.
