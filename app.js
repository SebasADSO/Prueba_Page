let win = window;
let dom = document;
let head = dom.head;
let body = dom.body;
let title = dom.title;

console.log(dom);
console.log(win);
console.log(dom.doctype);
console.log(dom.head);
console.log(dom.links);
console.log(dom.body);
console.log(dom.header);
console.log(dom.children);
console.log(body.title);
console.log(win);
console.log(dom.links);
console.log(dom.forms);
console.log(head);
console.log(body);

let div2 = body.querySelectorAll('div');
let parrafo = dom.querySelector("p");
let estructura = dom.getElementsByClassName("estructura");

console.log(div2);
console.log(dom.forms);
console.log(parrafo);

documento.innerHTML = "¿Qué es el DOM?";
api.innerHTML = "Qué es es API?";

console.log(document.nodeType)
console.log(document.body.firstChild.nodeName);

const btn = dom.getElementById("test");
let i = 0;
btn.onclick = function () {
  if (i === 0) {
    let div = document.createElement("div");
    div.className = "good";
    div.innerHTML = "Todo a salido correcto";
    document.body.append(div);
    setTimeout(() => div.remove(), 2000);
    i++
  } else {
    let div = document.createElement("div");
    div.className = "bad";
    div.innerHTML = "Su IP a sido registrada en la base de datos del FBI";
    document.body.append(div);
    setTimeout(() => div.remove(), 2000);
    i--
  }
};

// Ejercicio
const padre = dom.getElementById("cards");

let prueba = padre.children

let e = [...prueba];

console.log(prueba)

e.map((a, i) => {
  if (i % 2 !== 0) {
    console.log(i)
    a.classList.toggle("bg")
    let w = a.children
    let r = [...w]
    r.map((y) => {
      let u = y.children
      let p = [...u]
      console.log(p)
      p.map((q) => {
        q.classList.toggle("bg")
      })
    })
  }
})

const $formulario = dom.getElementById("search")

$formulario.setAttribute("autocomplete", "on")

const $input = dom.querySelector(".search__form > input")

$input.setAttribute("autocomplete", "off")

$input.removeAttribute("placeholder")

console.log($input)

///  ///

const html = dom.documentElement
console.log(html)
const $white = getComputedStyle(html).getPropertyValue("--white")
const $black = getComputedStyle(html).getPropertyValue("--mine-shaft")

// html.style.setProperty("--mine-shaft", "#fff")
// html.style.setProperty("--white", "#000")

const prueba123 = dom.querySelector(".card__paragraph")

console.log(prueba123)

prueba123.innerHTML = `Hola <b>ADSO</b>`