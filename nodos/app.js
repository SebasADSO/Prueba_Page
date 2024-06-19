import { datos } from "./datos.js";

const $padre = document.querySelector('.container')

const nodo = document.createElement('p')

const texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur fugiat corrupti molestiae! Ea quasi"

const texto2 = "Ea quasi lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur fugiat corrupti molestiae!"

nodo.innerText = texto + texto2

$padre.appendChild(nodo)

const $padre2 = document.querySelector('.container > .card > .list')

// console.log($padre2)

console.log(datos)

datos.map(a => {
  const lista = document.createElement('li')
  lista.innerText = a.name
  lista.className = "item"
  $padre2.appendChild(lista)
});

