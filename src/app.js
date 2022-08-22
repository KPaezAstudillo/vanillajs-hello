/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

function generateExcuse() {
  let pronoun = ["A", "The"];
  let subject = ["clown", "dog", "UFO", "cow", "policeman", "president"];
  let action = ["yelled at my", "took my", "stole my"];
  let possetion = ["car", "homework", "shoe"];
  let where = ["on the street", "in my yard", "two blocks from here"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let possIndx = Math.floor(Math.random() * possetion.length);
  let whIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actIndx] +
    " " +
    possetion[possIndx] +
    " " +
    where[whIndex]
  );
}
