/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  generar_carta();
};
var boton = document.querySelector("#generador");
boton.addEventListener("click", () => {
  generar_carta();
});

const temporizador = setInterval(generar_carta, 5000);
function generar_carta() {
  console.log("generando carta");
  let random_pinta = Math.floor(Math.random() * 4); //genera numero del 0 al 3
  let random_letra = Math.floor(Math.random() * 14); //Genera numero del 0 al 12
  let pinta = posibles_pintas[random_pinta];
  let letra = posibles_cartas[random_letra];
  console.log(pinta + "    " + letra);

  let pinta_arriba = document.querySelector("#pinta-arriba");
  let pinta_abajo = document.querySelector("#pinta-abajo");
  let letra_carta = document.querySelector("#letra-centro");

  //Primero revisamos si existen elementos ya creados para borrarlos
  while (pinta_arriba.firstChild) {
    pinta_arriba.removeChild(pinta_arriba.firstChild);
  }
  while (pinta_abajo.firstChild) {
    pinta_abajo.removeChild(pinta_abajo.firstChild);
  }
  while (letra_carta.firstChild) {
    letra_carta.removeChild(letra_carta.firstChild);
  }
  //
  //

  //Crear un H1 para poner en la parte superior de la carta
  let h1_pinta = document.createElement("h1");
  h1_pinta.className = "abajo " + nombre_pinta[random_pinta]; //display-2
  h1_pinta.innerHTML = pinta;
  h1_pinta.setAttribute("id", "pintaabajo");
  let h2_pinta = document.createElement("h1");
  //se crea otro h1, para poder poner en la parte de abajo de la carta
  h2_pinta.className = " " + nombre_pinta[random_pinta]; //display-2
  h2_pinta.setAttribute("id", "pintaarriba");
  h2_pinta.innerHTML = pinta;
  pinta_abajo.appendChild(h1_pinta);
  pinta_arriba.appendChild(h2_pinta);

  //Asignar la Letra/numero a su carta
  let h1_carta = document.createElement("h1");

  h1_carta.className = nombre_pinta[random_pinta];
  h1_carta.setAttribute("id", "numerocarta");

  h1_carta.append(letra);
  letra_carta.appendChild(h1_carta);
  return true;
}

const posibles_cartas = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const posibles_pintas = ["♦", "♥", "♠", "♣"]; //0 y 1 son rojas.

const nombre_pinta = ["diamante", "corazon", "picas", "trebol"];
