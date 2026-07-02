/* Contenido de las lecciones. Cada lección tiene una categoría, una explicación
 * breve, un desafío concreto, código de partida para el playground (HTML/CSS/JS)
 * y una solución sugerida con su explicación, para poder comparar cómo se
 * resuelve el desafío. El orden del array define el orden en la barra lateral,
 * agrupado por categoría. */

const LECCIONES = [
  // ---------- HTML ----------
  {
    id: 'html-estructura',
    categoria: 'HTML',
    titulo: 'HTML: estructura básica',
    resumen: `HTML organiza el contenido de una página en etiquetas. <h1> a <h6> son
títulos (de más a menos importante, solo un <h1> por página), <p> es un párrafo,
<a> es un enlace, <img> una imagen, <ul>/<ol> con <li> son listas. Todo el
contenido visible de una página está formado por etiquetas anidadas unas dentro
de otras: se abren con <etiqueta> y se cierran con </etiqueta>.`,
    reto: 'Agregá un <h2>, un <ul> con tus 3 productos patagónicos favoritos, y un enlace <a> a alguna página.',
    html: `<h1>Mi primera página</h1>
<p>Este es un párrafo de prueba.</p>`,
    css: `/* Todavía no vimos CSS en esta lección, pero podés probar */`,
    js: `// Todavía no vimos JavaScript en esta lección`,
    solucion: {
      html: `<h1>Mi primera página</h1>
<p>Este es un párrafo de prueba.</p>

<h2>Mis productos patagónicos favoritos</h2>
<ul>
  <li>Bondiola ahumada</li>
  <li>Conserva Odisea</li>
  <li>Embutidos surtidos</li>
</ul>

<p><a href="https://es.wikipedia.org/wiki/Patagonia">Leer más sobre la Patagonia</a></p>`,
      css: `/* Todavía no vimos CSS en esta lección, pero podés probar */`,
      js: `// Todavía no vimos JavaScript en esta lección`
    },
    explicacionSolucion: 'El <h2> abre una nueva sección dentro de la página (siempre por debajo de un <h1>). Cada <li> tiene que ir dentro de un <ul> (o <ol>), nunca suelto. El <a href="..."> necesita el atributo href con la URL de destino; sin él, el enlace no lleva a ningún lado.'
  },
  {
    id: 'html-listas-tablas',
    categoria: 'HTML',
    titulo: 'HTML: listas y tablas',
    resumen: `Las tablas (<table>) son para datos tabulares: filas (<tr>) y columnas,
con encabezados (<th>) y celdas de datos (<td>). No se usan para acomodar el
diseño de la página, eso es trabajo de CSS. <thead> agrupa la fila de
encabezados y <tbody> el resto de las filas.`,
    reto: 'Agregá una fila más a la tabla con otro producto (nombre y precio).',
    html: `<table>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bondiola ahumada</td>
      <td>$8500</td>
    </tr>
    <tr>
      <td>Embutidos surtidos</td>
      <td>$4200</td>
    </tr>
  </tbody>
</table>`,
    css: `table { border-collapse: collapse; width: 100%; }
th, td { border: 1px solid #ccc; padding: 6px 10px; text-align: left; }
th { background-color: #f0e8d5; }`,
    js: `// No hace falta JavaScript para esta lección`,
    solucion: {
      html: `<table>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bondiola ahumada</td>
      <td>$8500</td>
    </tr>
    <tr>
      <td>Embutidos surtidos</td>
      <td>$4200</td>
    </tr>
    <tr>
      <td>Conserva Odisea</td>
      <td>$3100</td>
    </tr>
  </tbody>
</table>`,
      css: `table { border-collapse: collapse; width: 100%; }
th, td { border: 1px solid #ccc; padding: 6px 10px; text-align: left; }
th { background-color: #f0e8d5; }`,
      js: `// No hace falta JavaScript para esta lección`
    },
    explicacionSolucion: 'Cada fila nueva es un <tr> completo, con un <td> por columna (acá dos: producto y precio), agregado dentro del mismo <tbody> que las otras filas de datos.'
  },
  {
    id: 'html-formularios',
    categoria: 'HTML',
    titulo: 'HTML: formularios completos',
    resumen: `Un <form> agrupa campos de entrada. <label for="id"> asociado al id del
input hace que se pueda tocar el texto para enfocar el campo (accesibilidad).
Hay varios tipos de <input>: text, number, email, checkbox, radio. <select>
con <option> arma un desplegable. required marca un campo obligatorio.`,
    reto: 'Agregá un <select> con categorías de producto (por ejemplo: Ahumado, Embutido, Conserva) y un checkbox "Acepto recibir novedades".',
    html: `<form>
  <label for="nombre-cliente">Nombre</label>
  <input type="text" id="nombre-cliente" required>

  <button type="submit">Enviar</button>
</form>`,
    css: `form { display: flex; flex-direction: column; gap: 8px; max-width: 260px; }
label { font-size: 0.85rem; font-weight: bold; }`,
    js: `// Todavía no conectamos este formulario con JavaScript`,
    solucion: {
      html: `<form>
  <label for="nombre-cliente">Nombre</label>
  <input type="text" id="nombre-cliente" required>

  <label for="categoria-producto">Categoría de interés</label>
  <select id="categoria-producto">
    <option value="ahumado">Ahumado</option>
    <option value="embutido">Embutido</option>
    <option value="conserva">Conserva</option>
  </select>

  <label>
    <input type="checkbox" id="acepto-novedades">
    Acepto recibir novedades
  </label>

  <button type="submit">Enviar</button>
</form>`,
      css: `form { display: flex; flex-direction: column; gap: 8px; max-width: 260px; }
label { font-size: 0.85rem; font-weight: bold; }`,
      js: `// Todavía no conectamos este formulario con JavaScript`
    },
    explicacionSolucion: 'El <select> arma el desplegable con sus <option value="...">. Para el checkbox, envolver el <input type="checkbox"> dentro de un <label> (sin usar for/id) es otra forma válida de asociarlos: al tocar el texto también se marca el checkbox.'
  },
  {
    id: 'html-imagenes-accesibilidad',
    categoria: 'HTML',
    titulo: 'HTML: imágenes y accesibilidad',
    resumen: `<img src="..." alt="..."> muestra una imagen. El atributo alt describe la
imagen en texto: lo usan los lectores de pantalla para personas con discapacidad
visual, y se muestra si la imagen no carga. Nunca debería quedar vacío si la
imagen aporta información. <figure> y <figcaption> agrupan una imagen con su
epígrafe (el texto que la explica).`,
    reto: 'Agregá un texto descriptivo al atributo alt de la imagen y envolvela en un <figure> con un <figcaption>.',
    html: `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='150'%3E%3Crect width='300' height='150' fill='%23c8922a'/%3E%3C/svg%3E" alt="">`,
    css: `img { border-radius: 6px; }`,
    js: `// No hace falta JavaScript para esta lección`,
    solucion: {
      html: `<figure>
  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='150'%3E%3Crect width='300' height='150' fill='%23c8922a'/%3E%3C/svg%3E" alt="Caja de embutidos artesanales de Productos Patagónicos">
  <figcaption>Selección de embutidos artesanales</figcaption>
</figure>`,
      css: `img { border-radius: 6px; }
figure { margin: 0; }
figcaption { font-size: 0.85rem; color: #666; margin-top: 4px; }`,
      js: `// No hace falta JavaScript para esta lección`
    },
    explicacionSolucion: 'El alt describe qué muestra la imagen, no repite "imagen de..." (eso ya lo sabe el lector de pantalla). El <figure> agrupa imagen y epígrafe como una sola unidad de contenido, y el <figcaption> es el texto visible que la explica.'
  },

  // ---------- CSS ----------
  {
    id: 'css-caja',
    categoria: 'CSS',
    titulo: 'CSS: selectores y el modelo de caja',
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
    js: `// No hace falta JavaScript para esta lección`,
    solucion: {
      html: `<div class="caja">Contenido de la caja</div>`,
      css: `.caja {
  padding: 32px;
  border: 2px solid #333;
  border-radius: 12px;
  background-color: #e8b84b;
  margin: 10px;
}`,
      js: `// No hace falta JavaScript para esta lección`
    },
    explicacionSolucion: 'border-radius redondea las esquinas de la caja (cuanto más alto el valor, más redondeada). Aumentar el padding agranda el espacio entre el borde y el contenido, sin tocar el tamaño de la letra.'
  },
  {
    id: 'css-flexbox',
    categoria: 'CSS',
    titulo: 'CSS: Flexbox básico',
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
    js: `// No hace falta JavaScript para esta lección`,
    solucion: {
      html: `<div class="contenedor">
  <div class="tarjeta">Bondiola</div>
  <div class="tarjeta">Embutidos</div>
  <div class="tarjeta">Conservas</div>
</div>`,
      css: `.contenedor {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.tarjeta {
  background-color: #2a6f77;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 6px;
}`,
      js: `// No hace falta JavaScript para esta lección`
    },
    explicacionSolucion: 'Con justify-content: space-between se le sacó flex: 1 a .tarjeta (si no, las tarjetas ocupan todo el ancho disponible y no queda espacio para "repartir"). space-between empuja el primer elemento al principio, el último al final, y reparte el resto en el medio.'
  },
  {
    id: 'css-grid',
    categoria: 'CSS',
    titulo: 'CSS: Grid básico',
    resumen: `display: grid arma una grilla en dos dimensiones (filas y columnas a la
vez), a diferencia de Flexbox que ordena en una sola dirección. grid-template-columns
define cuántas columnas hay y de qué ancho (repeat(3, 1fr) son 3 columnas
iguales que se reparten el espacio disponible).`,
    reto: 'Cambiá la grilla a 2 columnas y agregá una cuarta tarjeta de producto.',
    html: `<div class="grilla">
  <div class="tarjeta">Bondiola</div>
  <div class="tarjeta">Embutidos</div>
  <div class="tarjeta">Conservas</div>
</div>`,
    css: `.grilla {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.tarjeta {
  background-color: #6b3a2a;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 6px;
}`,
    js: `// No hace falta JavaScript para esta lección`,
    solucion: {
      html: `<div class="grilla">
  <div class="tarjeta">Bondiola</div>
  <div class="tarjeta">Embutidos</div>
  <div class="tarjeta">Conservas</div>
  <div class="tarjeta">Mundialista</div>
</div>`,
      css: `.grilla {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.tarjeta {
  background-color: #6b3a2a;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 6px;
}`,
      js: `// No hace falta JavaScript para esta lección`
    },
    explicacionSolucion: 'repeat(2, 1fr) arma 2 columnas iguales; al agregar una cuarta tarjeta en el HTML, la grilla la ubica sola en la posición que sigue (segunda fila, primera columna) sin necesidad de tocar el CSS.'
  },
  {
    id: 'css-responsive',
    categoria: 'CSS',
    titulo: 'CSS: diseño responsive (media queries)',
    resumen: `Una @media query aplica estilos solo cuando se cumple una condición,
normalmente el ancho de la pantalla: @media (max-width: 480px) { ... } aplica
esos estilos solo en pantallas angostas (como un celular). Es la base para que
una página se vea bien en cualquier tamaño de pantalla.`,
    reto: 'Probá agrandar y achicar la ventana del navegador para ver cómo las tarjetas pasan de estar en fila a apilarse. Después cambiá el punto de corte (480px) a 700px.',
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
  background-color: #432820;
  color: white;
  padding: 20px;
  flex: 1;
  text-align: center;
  border-radius: 6px;
}

@media (max-width: 480px) {
  .contenedor {
    flex-direction: column;
  }
}`,
    js: `// No hace falta JavaScript para esta lección`,
    solucion: {
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
  background-color: #432820;
  color: white;
  padding: 20px;
  flex: 1;
  text-align: center;
  border-radius: 6px;
}

@media (max-width: 700px) {
  .contenedor {
    flex-direction: column;
  }
}`,
      js: `// No hace falta JavaScript para esta lección`
    },
    explicacionSolucion: 'Solo hizo falta cambiar el número dentro de max-width: ahora las tarjetas se apilan apenas la pantalla (o la ventana del navegador) baja de 700px de ancho, en vez de esperar a 480px.'
  },
  {
    id: 'css-transiciones',
    categoria: 'CSS',
    titulo: 'CSS: transiciones y estados (:hover)',
    resumen: `:hover aplica estilos mientras el mouse está encima de un elemento.
transition hace que el cambio entre un estado y otro sea animado y suave en vez
de instantáneo: se indica qué propiedad animar y cuánto tiempo tarda (por
ejemplo, transition: background-color 0.3s ease).`,
    reto: 'Agregá una animación de agrandado (transform: scale(1.05)) al pasar el mouse por la tarjeta.',
    html: `<div class="tarjeta">Pasá el mouse por acá</div>`,
    css: `.tarjeta {
  background-color: #2a6f77;
  color: white;
  padding: 24px;
  text-align: center;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}
.tarjeta:hover {
  background-color: #38949e;
}`,
    js: `// No hace falta JavaScript para esta lección`,
    solucion: {
      html: `<div class="tarjeta">Pasá el mouse por acá</div>`,
      css: `.tarjeta {
  background-color: #2a6f77;
  color: white;
  padding: 24px;
  text-align: center;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.tarjeta:hover {
  background-color: #38949e;
  transform: scale(1.05);
}`,
      js: `// No hace falta JavaScript para esta lección`
    },
    explicacionSolucion: 'transform: scale(1.05) agranda el elemento un 5% sin afectar a los elementos de al lado (a diferencia de cambiar width/height). Hay que agregar transform a la lista de transition para que el agrandado también sea animado y no instantáneo.'
  },

  // ---------- JavaScript ----------
  {
    id: 'js-variables-funciones',
    categoria: 'JavaScript',
    titulo: 'JavaScript: variables y funciones',
    resumen: `let y const declaran variables (usar const si el valor no se va a
reasignar, let si sí). Los tipos básicos son string (texto), number (números) y
boolean (true/false). Una función agrupa código reutilizable: recibe parámetros
y puede devolver un valor con return. document.getElementById busca un elemento
por su id para poder mostrarle un resultado.`,
    reto: 'Creá una función restar(a, b) y mostrá el resultado de restar 10 y 4 debajo de la suma.',
    html: `<p id="resultado">Resultado acá</p>`,
    css: `#resultado { font-size: 1.2rem; font-weight: bold; }`,
    js: `function sumar(a, b) {
  return a + b;
}

document.getElementById('resultado').textContent = 'La suma es: ' + sumar(2, 3);`,
    solucion: {
      html: `<p id="resultado">Resultado acá</p>
<p id="resultado-resta"></p>`,
      css: `#resultado, #resultado-resta { font-size: 1.2rem; font-weight: bold; }`,
      js: `function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

document.getElementById('resultado').textContent = 'La suma es: ' + sumar(2, 3);
document.getElementById('resultado-resta').textContent = 'La resta es: ' + restar(10, 4);`
    },
    explicacionSolucion: 'restar(a, b) sigue exactamente la misma forma que sumar(a, b), solo cambia el operador. Se agregó un segundo <p> en el HTML para no pisar el resultado de la suma.'
  },
  {
    id: 'js-condicionales',
    categoria: 'JavaScript',
    titulo: 'JavaScript: condicionales y comparaciones',
    resumen: `if ejecuta un bloque de código solo si una condición es verdadera; else
if agrega otra condición; else es lo que pasa si ninguna se cumplió. Para
comparar igualdad se usa === (compara valor y tipo), no == (que hace
conversiones raras). >, <, >=, <= comparan números.`,
    reto: 'El stock está en 3. Cambialo a 0 y confirmá el mensaje de "Sin stock". Después agregá un caso para cuando el stock sea exactamente 5 ("Últimas unidades").',
    html: `<p id="mensaje"></p>`,
    css: `#mensaje { font-size: 1.1rem; }`,
    js: `const stock = 3;

if (stock > 5) {
  document.getElementById('mensaje').textContent = 'Stock alto';
} else if (stock > 0) {
  document.getElementById('mensaje').textContent = 'Quedan pocas unidades';
} else {
  document.getElementById('mensaje').textContent = 'Sin stock';
}`,
    solucion: {
      html: `<p id="mensaje"></p>`,
      css: `#mensaje { font-size: 1.1rem; }`,
      js: `const stock = 5;

if (stock > 5) {
  document.getElementById('mensaje').textContent = 'Stock alto';
} else if (stock === 5) {
  document.getElementById('mensaje').textContent = 'Últimas unidades';
} else if (stock > 0) {
  document.getElementById('mensaje').textContent = 'Quedan pocas unidades';
} else {
  document.getElementById('mensaje').textContent = 'Sin stock';
}`
    },
    explicacionSolucion: 'El nuevo else if (stock === 5) se agregó antes del else if (stock > 0), porque JavaScript revisa las condiciones en orden y se queda con la primera que sea verdadera: si el caso de 5 estuviera después de "stock > 0", nunca se ejecutaría, porque 5 > 0 ya es verdadero.'
  },
  {
    id: 'js-arrays',
    categoria: 'JavaScript',
    titulo: 'JavaScript: arrays y sus métodos',
    resumen: `Un array es una lista de valores: const productos = [...]. .forEach
recorre cada elemento y ejecuta una función. .filter devuelve un array nuevo
solo con los elementos que cumplen una condición. .map transforma cada elemento
en otra cosa. .find devuelve el primer elemento que cumple una condición. Estos
métodos son el corazón del panel de gestión real de Productos Patagónicos.`,
    reto: 'Usá .filter para mostrar solo los productos con precio menor a $5000.',
    html: `<ul id="lista-productos"></ul>`,
    css: `#lista-productos li { padding: 4px 0; }`,
    js: `const productos = [
  { nombre: 'Bondiola', precio: 8500 },
  { nombre: 'Embutidos', precio: 4200 },
  { nombre: 'Conserva', precio: 3100 }
];

const lista = document.getElementById('lista-productos');

productos.forEach(function (p) {
  const li = document.createElement('li');
  li.textContent = p.nombre + ' - $' + p.precio;
  lista.appendChild(li);
});`,
    solucion: {
      html: `<ul id="lista-productos"></ul>`,
      css: `#lista-productos li { padding: 4px 0; }`,
      js: `const productos = [
  { nombre: 'Bondiola', precio: 8500 },
  { nombre: 'Embutidos', precio: 4200 },
  { nombre: 'Conserva', precio: 3100 }
];

const lista = document.getElementById('lista-productos');

const productosBaratos = productos.filter(function (p) {
  return p.precio < 5000;
});

productosBaratos.forEach(function (p) {
  const li = document.createElement('li');
  li.textContent = p.nombre + ' - $' + p.precio;
  lista.appendChild(li);
});`
    },
    explicacionSolucion: '.filter recorre el array y arma uno nuevo solo con los elementos donde la función devuelve true. Acá se lo guardó en productosBaratos y después se recorrió ese array con .forEach, en vez de recorrer productos directamente.'
  },
  {
    id: 'js-objetos',
    categoria: 'JavaScript',
    titulo: 'JavaScript: objetos',
    resumen: `Un objeto agrupa datos relacionados en propiedades: { clave: valor }. Se
accede con punto (producto.nombre) o con corchetes (producto['nombre']). Los
objetos pueden tener cualquier tipo de valor adentro, incluidos otros objetos,
arrays o funciones.`,
    reto: 'Agregale una propiedad categoria al producto y mostrala también en el texto.',
    html: `<p id="ficha"></p>`,
    css: `#ficha { font-size: 1.05rem; }`,
    js: `const producto = {
  nombre: 'Bondiola ahumada',
  precio: 8500,
  stock: 12
};

document.getElementById('ficha').textContent =
  producto.nombre + ' - $' + producto.precio + ' (stock: ' + producto.stock + ')';`,
    solucion: {
      html: `<p id="ficha"></p>`,
      css: `#ficha { font-size: 1.05rem; }`,
      js: `const producto = {
  nombre: 'Bondiola ahumada',
  categoria: 'Ahumado',
  precio: 8500,
  stock: 12
};

document.getElementById('ficha').textContent =
  producto.nombre + ' (' + producto.categoria + ') - $' + producto.precio + ' (stock: ' + producto.stock + ')';`
    },
    explicacionSolucion: 'Se agregó categoria: "Ahumado" como una propiedad más del objeto (el orden de las propiedades no importa) y se concatenó producto.categoria en el texto final, igual que las demás propiedades.'
  },
  {
    id: 'js-dom',
    categoria: 'JavaScript',
    titulo: 'JavaScript: manipular el DOM',
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
});`,
    solucion: {
      html: `<ul id="lista"></ul>`,
      css: `#lista li { padding: 4px 0; }`,
      js: `const lista = document.getElementById('lista');
const items = ['Bondiola', 'Embutidos', 'Conservas', 'Mundialista', 'Odisea'];

items.forEach(function (item) {
  const li = document.createElement('li');
  li.textContent = item;
  lista.appendChild(li);
});`
    },
    explicacionSolucion: 'Como el forEach ya recorre "todo lo que haya" en el array items, alcanza con agregar los dos productos nuevos dentro del array: no hace falta tocar el resto del código.'
  },
  {
    id: 'js-eventos-formularios',
    categoria: 'JavaScript',
    titulo: 'JavaScript: eventos y formularios',
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
});`,
    solucion: {
      html: `<form id="form-saludo">
  <input type="text" id="nombre" placeholder="Tu nombre">
  <input type="number" id="edad" placeholder="Tu edad">
  <button type="submit">Saludar</button>
</form>
<p id="saludo"></p>`,
      css: `#form-saludo { display: flex; gap: 8px; margin-bottom: 10px; }`,
      js: `document.getElementById('form-saludo').addEventListener('submit', function (evento) {
  evento.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const edad = document.getElementById('edad').value;
  document.getElementById('saludo').textContent = 'Hola, ' + nombre + '! Tenés ' + edad + ' años.';
});`
    },
    explicacionSolucion: 'Se agregó un <input type="number" id="edad"> nuevo en el HTML, y en el JavaScript se lee su .value igual que se lee el del nombre, para después usarlo en el mensaje.'
  },
  {
    id: 'js-json',
    categoria: 'JavaScript',
    titulo: 'JavaScript: JSON',
    resumen: `JSON.stringify convierte un objeto o array de JavaScript en texto.
JSON.parse hace lo inverso: convierte texto con formato JSON de vuelta en un
objeto o array. Esto es exactamente lo que usa localStorage por dentro (que
solo puede guardar texto) para guardar los productos, ventas y clientes del
panel de gestión real de Productos Patagónicos.`,
    reto: 'Agregá un producto más al array antes de convertirlo a texto, y confirmá que aparece en la salida.',
    html: `<pre id="salida-json"></pre>`,
    css: `#salida-json { background-color: #f5f5f5; padding: 10px; border-radius: 4px; white-space: pre-wrap; }`,
    js: `const productos = [
  { nombre: 'Bondiola', precio: 8500 },
  { nombre: 'Embutidos', precio: 4200 }
];

const texto = JSON.stringify(productos, null, 2);
document.getElementById('salida-json').textContent = texto;

const productosDeVuelta = JSON.parse(texto);
console.log(productosDeVuelta);`,
    solucion: {
      html: `<pre id="salida-json"></pre>`,
      css: `#salida-json { background-color: #f5f5f5; padding: 10px; border-radius: 4px; white-space: pre-wrap; }`,
      js: `const productos = [
  { nombre: 'Bondiola', precio: 8500 },
  { nombre: 'Embutidos', precio: 4200 },
  { nombre: 'Conserva', precio: 3100 }
];

const texto = JSON.stringify(productos, null, 2);
document.getElementById('salida-json').textContent = texto;

const productosDeVuelta = JSON.parse(texto);
console.log(productosDeVuelta);`
    },
    explicacionSolucion: 'Alcanza con agregar el objeto nuevo dentro del array productos: JSON.stringify convierte automáticamente todo lo que tenga el array, sin importar cuántos elementos sean.'
  },
  {
    id: 'js-localstorage',
    categoria: 'JavaScript',
    titulo: 'JavaScript: guardar datos con localStorage',
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
});`,
    solucion: {
      html: `<button id="btn-sumar">Sumar 1</button>
<button id="btn-reiniciar">Reiniciar</button>
<p id="contador">0</p>`,
      css: `#contador { font-size: 2rem; }`,
      js: `const contadorEl = document.getElementById('contador');
let valor = Number(localStorage.getItem('contador_demo')) || 0;
contadorEl.textContent = valor;

document.getElementById('btn-sumar').addEventListener('click', function () {
  valor = valor + 1;
  localStorage.setItem('contador_demo', valor);
  contadorEl.textContent = valor;
});

document.getElementById('btn-reiniciar').addEventListener('click', function () {
  valor = 0;
  localStorage.setItem('contador_demo', valor);
  contadorEl.textContent = valor;
});`
    },
    explicacionSolucion: 'El botón "Reiniciar" tiene su propio addEventListener, independiente del de "Sumar 1". Pone valor en 0, lo guarda en localStorage igual que el otro botón, y actualiza el texto en pantalla.'
  },
  {
    id: 'js-errores',
    categoria: 'JavaScript',
    titulo: 'JavaScript: manejo de errores con try/catch',
    resumen: `try ejecuta un bloque de código; si algo adentro falla, en vez de romper
toda la página, salta directo al bloque catch, donde se puede mostrar un mensaje
o tomar una decisión. throw new Error('mensaje') permite lanzar un error propio
cuando se detecta una situación inválida.`,
    reto: 'Agregá un segundo try/catch que intente leer una propiedad de una variable que no existe, y mostrá el mensaje de error atrapado.',
    html: `<p id="resultado-errores"></p>`,
    css: `#resultado-errores { font-family: monospace; }`,
    js: `try {
  const numero = Number('esto no es un número');
  if (isNaN(numero)) {
    throw new Error('El valor ingresado no es un número válido');
  }
  document.getElementById('resultado-errores').textContent = 'Resultado: ' + numero;
} catch (error) {
  document.getElementById('resultado-errores').textContent = 'Se atrapó un error: ' + error.message;
}`,
    solucion: {
      html: `<p id="resultado-errores"></p>
<p id="resultado-errores-2"></p>`,
      css: `#resultado-errores, #resultado-errores-2 { font-family: monospace; }`,
      js: `try {
  const numero = Number('esto no es un número');
  if (isNaN(numero)) {
    throw new Error('El valor ingresado no es un número válido');
  }
  document.getElementById('resultado-errores').textContent = 'Resultado: ' + numero;
} catch (error) {
  document.getElementById('resultado-errores').textContent = 'Se atrapó un error: ' + error.message;
}

try {
  const producto = undefined;
  document.getElementById('resultado-errores-2').textContent = 'Nombre: ' + producto.nombre;
} catch (error) {
  document.getElementById('resultado-errores-2').textContent = 'Se atrapó un error: ' + error.message;
}`
    },
    explicacionSolucion: 'Intentar leer .nombre de una variable undefined lanza un error real de JavaScript (no uno creado con throw), pero el catch lo atrapa exactamente igual, sea un error propio o uno del motor de JavaScript.'
  }
];
