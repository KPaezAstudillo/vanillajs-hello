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
  let subject = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "A policeman",
    "The president",
    "A cow"
  ];
  let action = ["ate", "peed", "crushed", "broke"];
  let possetion = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "during my lunch",
    "while I was sleeping",
    "like two minutes ago",
    "just now"
  ];

  let subIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let possIndx = Math.floor(Math.random() * possetion.length);
  let whIndex = Math.floor(Math.random() * when.length);

  return (
    subject[subIndx] +
    " " +
    action[actIndx] +
    " " +
    possetion[possIndx] +
    " " +
    when[whIndex]
  );
}
