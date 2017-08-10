import join from 'lodash/join';
import "./style.css";
import content from "./content.js";

function component () {
  let element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = join(['Hello','webpack'], ' ');
  element.innerHTML += " " + content + "mao";
console.log("fds");
  return element;
}

document.body.appendChild(component());