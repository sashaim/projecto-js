// Obtenemos un elemento del dom con getElementById y pasandole
// por parametro el id del elemento.
const titulo = document.getElementById('avengers-titulo');

// Editamos la propiedad inner text para cambiar el contenido
// dentro de la etiqueta. No podemos usar HTML, es solo texto.
titulo.innerText = 'The Avengers!';

// Para saber si el resultado de getElementById efectivamente
// encontró un valor podemos usar in if.
const container = document.getElementById('container-avengers');
if (container) {
  console.log('Se muestra solo si existe')
}

// Si el id no existe en el documento de html, retorna null.
const noExiste = document.getElementById('no-existe');
console.log(noExiste); // null

// Para buscar todos los elementos que implementan una clase de css podemos usar
// getElementsByClassName pasando el nombre de la clase por parámetro.
// El resultado es un array de todos los elementos que implementen la clase.
// Si ningún elemento la implementa, devuelve un array vacío.
const avengers = document.getElementsByClassName('avenger');
if (avengers.length > 0) {
  console.dir(avengers);
  console.log('El array tiene al menos un elemento');
}

// Podemos obtener el listado de todos las etiquetas de un mismo tipo
// con getElementsByTagName pasando el nombre de la etiqueta por parámetro.
// La desventaja es que es muy probable que la etiqueta se use en muchas partes
// del archivo html, por lo que no siempre puede servirnos.
// También devuelve un array.
console.dir(document.getElementsByTagName('li'));

// Con la propiedad innerHtml podemos modificar el contenido de una etiqueta
// Y será interpretado como codigo HTML.
const subtitulo = document.getElementById('avengers-subtitulo');
subtitulo.innerHTML = "<p>The Earth's mightest heroes!</p>";

// Con className podemos editar la clase de una etiqueta de HTML.
// Si queremos usar multiples clases debemos separarlas con espacios
// de la misma forma que hacemos en HTML.
// En este ejemplo vamos a asignar un color aleatorio seleccionado del
// array de colores. Para ello usamos la los métodos floor y random
// en conjunto.
const color = document.getElementById('color-aleatorio');
const colores = ['rojo', 'azul', 'amarillo'];
color.className = colores[Math.floor(Math.random() * colores.length)];



// agregar o quitar nodos

// Con createElement podemos crear un nuevo elemento del dom
// especificando por parámetro el nombre de la etiqueta.
// Solo con crear el elemento no alcanza, luego tenemos que
// agregarlo a otro elemento existente del DOM con el método
// append().
const h1 = document.createElement('h1');
h1.innerText = 'Hola agregar elemento!';
document.body.append(h1);

// Para eliminar elementos del DOM usamos el método remove().
const elementos = document.getElementsByClassName('elemento');
const lista = document.getElementById('lista');
lista.remove();

// Para acceder/modificar al valor de un input utilizamos la
// propiedad value.
const input = document.getElementById('nombre');
input.value = 'Ariel';


// primer ejemplo


console.dir(document);
console.dir(document.head);
console.dir(document.body);



// query selector


// Con querySelector podemos acceder a los elementos del DOM
// de la misma forma que utilizamos los selectores de CSS.
// querySelector devuelve el primer elemento que cumpla con
// la condición o null.

// Pedimos el primer elemento p que se encuentre dentro del
// elemento con el id contenedor.
console.dir(document.querySelector('#contenedor p'));

// Pedimos el primer elemento strong dentro del elemento que implemente
// la clase texto
console.dir(document.querySelector('.texto strong'));

// Con querySelectorAll podemos obtener todos los resultados que cumplan
// la condición. Por lo que retorna un array.
console.dir(document.querySelectorAll('.heroe'));

// También podemos acceder a las pseudo clasess de CSS.
console.dir(document.querySelector('.radio:checked'));


// sitio advengers


const avengers = [
    {
      alias: 'Thor',
      nombre: 'Thor',
      ordenDeAfilicacion: 3,
      tipo: 'Dios',
      fuerza: 1000
    },
    {
      alias: 'Captain America',
      nombre: 'Steve Rogers',
      ordenDeAfilicacion: 1,
      tipo: 'Humano',
      fuerza: 100
    },
    {
      alias: 'Iron Man',
      nombre: 'Tony Stark',
      ordenDeAfilicacion: 2,
      tipo: 'Humano',
      fuerza: 10
    },
    {
      alias: 'Hulk',
      nombre: 'Bruce Banner',
      ordenDeAfilicacion: 4,
      tipo: 'Hulk',
      fuerza: 10000
    },
    {
      alias: 'Vision',
      nombre: 'Vision',
      ordenDeAfilicacion: 7,
      tipo: 'Robot',
      fuerza: 5000
    },
  ];
  
  // En este ejemplo vamos a listar los avengers del array
  // como un ul de html.
  
  const ul = document.createElement('ul');
  
  for (const avenger of avengers) {
    const li = document.createElement('li');
    // li.innerHTML = '<strong>' + avenger.alias + '</strong>';
    li.innerHTML = `
      <p>
        <strong>${avenger.alias}</strong>
      </p>
    `;
    ul.append(li);
  }
  
  document.getElementById('contenedor').append(ul);








// eventos

//catch me if you can

//html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>Cach me if you can</title>
// </head>
// <body>
//   <h1>Catch me if you can!!</h1>
//   <img id="leo" src="./img/leo.jpeg" style="height: 100px; width: 100px;">
//   <script src="./js/main.js"></script>
// </body>
// </html>


const leo = document.getElementById('leo');

leo.addEventListener('mouseover', (e) => {
    e.target.style.position ='absolute';
    e.target.style.top = `${Math.floor(Math.random() * 90 + 5)}%`;
    e.target.style.left = `${Math.floor(Math.random() * 90 + 5)}%`;
});



//eventos intro

//html


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>Eventos</title>
// </head>
// <body>
//   <button id="btn">CLICK ME</button>
//   <script src="./js/main.js"></script>
// </body>
// </html>


const boton = document.getElementById('btn');

// Opcion 1: definir un evento con addEventListener.
// Para ello pasamos como primer parámetro el nombre del
// evento y como segundo parametro el event handler.
// El event handler es una función que contiene el codigo
// que vamos a querer ejecutar cada vez que suceda el evento.
boton.addEventListener('click', () => {
    console.log('Alguien hizo click - addEventListener');
});

// Opcion 2: Otra opcion para definir un evento es con
// la propiedad onnombredelevento. En este caso asignamos
// directamente la función (event handler) a la propiedad.
// boton.onclick = () => {
//   console.log('Alguien hizo click - onclick');
// };




// Eventos -----------------------------------------------------------------------


//html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>Eventos</title>
// </head>
// <body>
//   <h1>Mouse events 🐭</h1>
//   <div id="ejemplos-mouse" style="height: 100px; width: 100px; background-color: red"></div>

//   <h1>Keyboard events ⌨️</h1>
//   <input id="ejemplos-teclado" type="text">

//   <h1>Submit ✅</h1>
//   <form id="formulario">
//     <label for="nombre">Nombre:</label>
//     <input id="nombre" type="text">
//     <br>
//     <label for="edad">Edad:</label>
//     <input id="edad" type="number">
//     <br>
//     <input type="submit" value="Enviar">
//   </form>

//   <script src="./js/main.js"></script>
// </body>
// </html>


const div = document.getElementById('ejemplos-mouse');

// Se ejecuta cuando presionamos el mouse (sin importar
// si lo soltamos o no).
div.addEventListener('mousedown', () => {
  console.log('mousedown');
});

// Se ejecuta cuando soltamos el mouse una vez presionado.
div.addEventListener('mouseup', () => {
  console.log('mouseup');
});

// Se ejecuta cuando hacemos click.
// Es importante saber que se ejecuta siempre después
// de mousedown y mouseup.
div.addEventListener('click', () => {
  console.log('click');
});

// Se ejecuta cuando posicionamos el cursor sobre el elemento.
div.addEventListener('mouseover', () => {
  console.log('mouseover');
});

// Se ejecuta cuando movemos el cursor fuera del elemento.
div.addEventListener('mouseout', () => {
  console.log('mouseout');
});

// Se ejecuta cada vez que movemos el mouse sobre el elemento.
// Ojo que mientras que movamos el cursor sobre el elemento,
// se va a ejecutar.
div.addEventListener('mousemove', () => {
  console.log('mousemove');
});

const input = document.getElementById('ejemplos-teclado');

// Se ejecuta cuando presionamos una tecla del teclado mientras
// estamos posicionados en un elemento (input en el ejemplo).
input.addEventListener('keydown', () => {
  console.log('keydown');
});

// Se ejecuta cuando soltamos una tecla del teclado mientras
// estamos posicionados en un elemento (input en el ejemplo).
input.addEventListener('keyup', () => {
  console.log('keyup');
});

// Se ejecuta cuando el contenido del elemento (input) cambió
// y movemos el foco a otro elemento.
input.addEventListener('change', () => {
  console.log('change');
});

// Se ejecuta cada vez que el input cambia su value.
input.addEventListener('input', () => {
  console.log('input');
});

const formulario = document.getElementById('formulario');

// El evento submit se ejecuta cuando se presiona el botón
// submit de un formulario.
// En el contexto del evento que llega por parametro debemos
// ejecutar preventDefault() para evitar el comportamiento por
// defecto (refrescar la pagina).
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(parseInt(e.target[1].value));
  console.log('submit');
})

// Aclaración: todos los eventos reciben un parametro con el contexto
// del evento. Si no vamos a usarlo, podemos no incluirlo como sucede
// con los primeros ejemplos.