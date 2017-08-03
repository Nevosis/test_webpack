import join from 'lodash/join';

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = join(['Hello','webpack'], ' ');
  element.innerHTML += " " + require("./content.js")

  return element;
}

document.body.appendChild(component());