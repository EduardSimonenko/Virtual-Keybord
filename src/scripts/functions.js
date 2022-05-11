/* eslint-disable no-param-reassign */
function addElement(type, className, place) {
  const element = document.createElement(`${type}`);
  element.className = `${className}`;
  if (place === document.body) {
    place.prepend(element);
  } else {
    place.append(element);
  }

  return element;
}

function deleteLastLetter(str) {
  return str.split('').slice(0, str.length - 1).join('');
}

function translateToUpperCase(NodeList) {
  for (let i = 0; i < NodeList.length; i++) {
    if (NodeList[i].innerText.length < 2) {
      NodeList[i].innerText = NodeList[i].innerText.toUpperCase();
    }
  }
}

function translateToLowerCase(NodeList) {
  for (let i = 0; i < NodeList.length; i++) {
    if (NodeList[i].innerText.length < 2) {
      NodeList[i].innerText = NodeList[i].innerText.toLowerCase();
    }
  }
}

export {
  addElement, deleteLastLetter, translateToUpperCase, translateToLowerCase,
};
