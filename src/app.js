/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#excuse").innerHTML = excuseGenerator();
  console.log("Hello Rigo from the console!");
  function excuseGenerator() {
    let who = [
      "Mi perro",
      "Mi primo",
      "Mi hermana",
      "Mi Abuela",
      "La profersora de matemáticas"
    ];
    let action = [
      "se ha comido",
      "ha roto",
      "me ha robado",
      "ha pisado y ha roto",
      "ha cocinado"
    ];
    let what = [
      "mi casa",
      "mis deberes",
      "mi trabajo de plástica",
      "mi trabajo de fin de curso",
      "mis ganas de quedar contigo"
    ];
    let when = [
      "esta tarde",
      "mientras iba de camino al colegio",
      "mientras veía una serie en netflix",
      "mientras me duchaba",
      "cuando estaba comiendo"
    ];

    let randomWho = Math.floor(Math.random() * who.length);
    let randomActWhat = Math.floor(Math.random() * action.length);
    let randomWhen = Math.floor(Math.random() * when.length);

    return (
      who[randomWho] +
      " " +
      action[randomActWhat] +
      " " +
      what[randomActWhat] +
      " " +
      when[randomWhen]
    );
  }
};
