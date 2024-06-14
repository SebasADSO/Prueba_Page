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
  if (i===0) {
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