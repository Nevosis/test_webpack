import join from 'lodash/join';
import "./style.css";
import content from "./content.js";

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = join(['Hello','webpack'], ' ');
  element.innerHTML += " " + content;
console.log("fds");
  return element;
}

document.body.appendChild(component());