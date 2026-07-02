/* Contenido de las lecciones. Cada lección tiene una explicación breve, un
 * desafío concreto, y código de partida para el playground (HTML/CSS/JS). */

const LECCIONES = [
  {
    id: 'html-estructura',
    titulo: '1. HTML: estructura básica',
    resumen: `HTML organiza el contenido de una página en etiquetas. <h1> a <h6> son
títulos (de más a menos importante), <p> es un párrafo, <a> es un enlace, <img>
una imagen, <ul>/<ol> con <li> son listas. Todo el contenido visible de una
página está formado por etiquetas anidadas unas dentro de otras.`,
    reto: 'Agregá un <h2>, un <ul> con tus 3 productos patagónicos favoritos, y un enlace <a> a alguna página.',
    html: `<h1>Mi primera página</h1>
<p>Este es un párrafo de prueba.</p>`,
    css: `/* Todavía no vimos CSS en esta lección, pero podés probar */`,
    js: `// Todavía no vimos JavaScript en esta lección`
  },
  {
    id: 'css-caja',
    titulo: '2. CSS: selectores y el modelo de caja',
    resumen: `CSS le da estilo al HTML. Un selector de clase (.caja) o de id (#caja)
apunta a los elementos que querés modificar. Cada elemento es una "caja" con
content, padding (espacio interno), border (borde) y margin (espacio externo):
por eso se llama "modelo de caja" (box model).`,
    reto: 'Cambiá el color de fondo, agregá un border-radius, y aumentá el padding de la caja.',
    html: `<div class="caja">Contenido de la caja</div>`,
    css: `.caja {
  padding: 20px;
  border: 2px solid #333;
  background-color: #eee;
  margin: 10px;
}`,
    js: `// No hace falta JavaScript para esta lección`
  },
  {
    id: 'css-flexbox',
    titulo: '3. CSS: Flexbox básico',
    resumen: `display: flex convierte un contenedor en una fila (o columna) flexible.
justify-content ordena en el eje horizontal, align-items en el vertical, y gap
agrega espacio entre los elementos sin usar márgenes sueltos.`,
    reto: 'Cambiá justify-content a "space-between" y probá qué pasa si cambiás flex-direction a "column".',
    html: `<div class="contenedor">
  <div class="tarjeta">Bondiola</div>
  <div class="tarjeta">Embutidos</div>
  <div class="tarjeta">Conservas</div>
</div>`,
    css: `.contenedor {
  display: flex;
  gap: 10px;
}
.tarjeta {
  background-color: #2a6f77;
  color: white;
  padding: 20px;
  flex: 1;
  text-align: center;
  border-radius: 6px;
}`,
    js: `// No hace falta JavaScript para esta lección`
  },
  {
    id: 'js-variables-funciones',
    titulo: '4. JavaScript: variables y funciones',
    resumen: `let y const declaran variables (const si no se va a reasignar). Una
función agrupa código reutilizable: recibe parámetros y puede devolver un valor
con return. document.getElementById busca un elemento por su id para poder
mostrarle un resultado.`,
    reto: 'Creá una función restar(a, b) y mostrá el resultado de restar 10 y 4 debajo de la suma.',
    html: `<p id="resultado">Resultado acá</p>`,
    css: `#resultado { font-size: 1.2rem; font-weight: bold; }`,
    js: `function sumar(a, b) {
  return a + b;
}

document.getElementById('resultado').textContent = 'La suma es: ' + sumar(2, 3);`
  },
  {
    id: 'js-dom',
    titulo: '5. JavaScript: manipular el DOM',
    resumen: `El DOM es la representación de la página que JavaScript puede leer y
modificar. document.createElement crea una etiqueta nueva, .textContent le pone
texto, y .appendChild la agrega dentro de otro elemento. forEach recorre un
array y ejecuta una función por cada elemento.`,
    reto: 'Agregá dos productos más al array items y fijate que aparezcan solos en la lista.',
    html: `<ul id="lista"></ul>`,
    css: `#lista li { padding: 4px 0; }`,
    js: `const lista = document.getElementById('lista');
const items = ['Bondiola', 'Embutidos', 'Conservas'];

items.forEach(function (item) {
  const li = document.createElement('li');
  li.textContent = item;
  lista.appendChild(li);
});`
  },
  {
    id: 'js-eventos-formularios',
    titulo: '6. JavaScript: eventos y formularios',
    resumen: `addEventListener escucha algo que pasa (un clic, un envío de
formulario) y ejecuta una función en respuesta. evento.preventDefault() evita
que el formulario recargue la página, que es el comportamiento por defecto del
navegador.`,
    reto: 'Agregá un segundo input para la edad y mostralo también en el saludo.',
    html: `<form id="form-saludo">
  <input type="text" id="nombre" placeholder="Tu nombre">
  <button type="submit">Saludar</button>
</form>
<p id="saludo"></p>`,
    css: `#form-saludo { display: flex; gap: 8px; margin-bottom: 10px; }`,
    js: `document.getElementById('form-saludo').addEventListener('submit', function (evento) {
  evento.preventDefault();
  const nombre = document.getElementById('nombre').value;
  document.getElementById('saludo').textContent = 'Hola, ' + nombre + '!';
});`
  },
  {
    id: 'js-localstorage',
    titulo: '7. JavaScript: guardar datos con localStorage',
    resumen: `localStorage guarda datos en el navegador que sobreviven a recargar la
página (a diferencia de una variable normal, que se pierde). localStorage.setItem
guarda, localStorage.getItem lee. Solo guarda texto, por eso los números se
convierten con Number(). Esto es lo mismo que usa el panel de gestión de
Productos Patagónicos para guardar productos y ventas.`,
    reto: 'Agregá un botón "Reiniciar" que ponga el contador en 0 otra vez.',
    html: `<button id="btn-sumar">Sumar 1</button>
<p id="contador">0</p>`,
    css: `#contador { font-size: 2rem; }`,
    js: `const contadorEl = document.getElementById('contador');
let valor = Number(localStorage.getItem('contador_demo')) || 0;
contadorEl.textContent = valor;

document.getElementById('btn-sumar').addEventListener('click', function () {
  valor = valor + 1;
  localStorage.setItem('contador_demo', valor);
  contadorEl.textContent = valor;
});`
  }
];
