import './styles/style.scss';

const KEYBOARD = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl']];

const ENG_KEYBOARD = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'];

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

const CONTAINER = addElement('div', 'container', document.body);
const TITLE = addElement('h1', 'title', CONTAINER);
const TEXTAREA = addElement('textarea', 'textarea', CONTAINER);
const CONTAINER_KEYS = addElement('div', 'container-keys', CONTAINER);

TITLE.innerHTML = 'Virtual keyboard';

TEXTAREA.setAttribute('id', 'textarea');
TEXTAREA.setAttribute('rows', '5');
TEXTAREA.setAttribute('cols', '40');

function deleteLastLetter(str) {
  return str.split('').slice(0, str.length - 1).join('');
}

function createKeyboard(row) {
  const ROW = addElement('div', 'row', CONTAINER_KEYS);
  for (let i = 0; i < row.length; i++) {
    const KEY = addElement('div', 'key', ROW);
    if (row[i].length > 1) {
      KEY.classList.add(`${row[i]}`);
    }
    if (row[i].length === 0) {
      KEY.classList.add('space');
    }
    KEY.innerText = `${row[i]}`;
  }
}

for (let i = 0; i < KEYBOARD.length; i++) {
  createKeyboard(KEYBOARD[i]);
}

const KEYS = document.querySelectorAll('.key');
const CAPSLOCK = document.querySelector('.CapsLock');
const SHIFT_LEFT = document.querySelector('.Shift');
const SHIFT_RIGHT = document.querySelectorAll('.Shift')[1];
const CTRL_LEFT = document.querySelector('.Ctrl');
const CTRL_RIGHT = document.querySelectorAll('.Ctrl')[1];
const ALT_LEFT = document.querySelector('.Alt');
const ALT_RIGHT = document.querySelectorAll('.Alt')[1];
const SPACE = document.querySelector('.space');
const BACKSPACE = document.querySelector('.Backspace');
const BODY = document.querySelector('body');

const arrChars = [];
const changeLangArr = ['ControlLeft', 'AltLeft'];

for (let i = 0; i < KEYS.length; i++) {
  KEYS[i].setAttribute('keyname', KEYS[i].innerText);
  KEYS[i].setAttribute('upperCaseName', KEYS[i].innerText.toUpperCase());
  if (KEYS[i].innerText === 'del') {
    KEYS[i].setAttribute('keyname', 'Delete');
    KEYS[i].setAttribute('upperCaseName', 'Delete'.toUpperCase());
  }
  if (KEYS[i].innerText === 'Ctrl') {
    KEYS[i].setAttribute('keyname', 'Control');
    KEYS[i].setAttribute('upperCaseName', 'Control'.toUpperCase());
  }
  if (KEYS[i].innerText === 'Win') {
    KEYS[i].setAttribute('keyname', 'Meta');
    KEYS[i].setAttribute('upperCaseName', 'Meta'.toUpperCase());
  }
}

function translateFontCase() {
  if (CAPSLOCK.classList.contains('active')) {
    for (let i = 0; i < KEYS.length; i++) {
      if (KEYS[i].innerText.length < 2) {
        KEYS[i].innerText = KEYS[i].innerText.toUpperCase();
      }
    }
  } else {
    for (let i = 0; i < KEYS.length; i++) {
      if (KEYS[i].innerText.length < 2) {
        KEYS[i].innerText = KEYS[i].innerText.toLowerCase();
      }
    }
  }
}

BODY.addEventListener('keydown', (event) => {
  if (event.code == 'CapsLock') {
    CAPSLOCK.classList.toggle('active');
    translateFontCase();
  }
});

document.addEventListener('keydown', (event) => {
  for (let i = 0; i < KEYS.length; i++) {
    if ((event.key == KEYS[i].getAttribute('keyname') || event.key == KEYS[i].getAttribute('upperCaseName') || event.key == KEYS[i].innerHTML.toLowerCase()) && (event.code !== 'CapsLock')) {
      KEYS[i].classList.add('active');
      if (event.key.length < 2) {
        TEXTAREA.value += event.key;
      }
    }
    if (event.code == 'Space') {
      SPACE.classList.add('active');
    }
    if (event.code == 'ShiftLeft') {
      SHIFT_RIGHT.classList.remove('active');
      for (let i = 0; i < KEYS.length; i++) {
        if (KEYS[i].innerText.length < 2) {
          KEYS[i].innerText = KEYS[i].innerText.toUpperCase();
        }
      }
      CAPSLOCK.classList.remove('active');
    }
    if (event.code == 'ShiftRight') {
      SHIFT_LEFT.classList.remove('active');
      for (let i = 0; i < KEYS.length; i++) {
        if (KEYS[i].innerText.length < 2) {
          KEYS[i].innerText = KEYS[i].innerText.toUpperCase();
        }
      }
      CAPSLOCK.classList.remove('active');
    }
    if (event.code == 'ControlLeft') {
      CTRL_RIGHT.classList.remove('active');
    }
    if (event.code == 'ControlRight') {
      CTRL_LEFT.classList.remove('active');
    }
    if (event.code == 'AltLeft') {
      ALT_RIGHT.classList.remove('active');
    }
    if (event.code == 'AltRight') {
      ALT_LEFT.classList.remove('active');
    }
    if (event.code == 'Backspace') {
      TEXTAREA.value.splice(0, TEXTAREA.value.length - 2);
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < KEYS.length; i++) {
    if ((event.key == KEYS[i].getAttribute('keyname') || event.key == KEYS[i].getAttribute('upperCaseName') || event.key == KEYS[i].innerHTML.toLowerCase()) && (event.code !== 'CapsLock')) {
      KEYS[i].classList.remove('active');
      KEYS[i].classList.add('remove');
    }
    if (event.code == 'Space') {
      SPACE.classList.remove('active');
      SPACE.classList.add('remove');
    }
    if (event.code == 'ShiftLeft') {
      SHIFT_RIGHT.classList.remove('active');
      SHIFT_RIGHT.classList.remove('remove');
      for (let i = 0; i < KEYS.length; i++) {
        if (KEYS[i].innerText.length < 2) {
          KEYS[i].innerText = KEYS[i].innerText.toLowerCase();
        }
      }
    }
    if (event.code == 'ShiftRight') {
      SHIFT_LEFT.classList.remove('active');
      SHIFT_LEFT.classList.remove('remove');
      for (let i = 0; i < KEYS.length; i++) {
        if (KEYS[i].innerText.length < 2) {
          KEYS[i].innerText = KEYS[i].innerText.toLowerCase();
        }
      }
    }
    if (event.code == 'ControlLeft') {
      CTRL_RIGHT.classList.remove('active');
      CTRL_RIGHT.classList.remove('remove');
    }
    if (event.code == 'ControlRight') {
      CTRL_LEFT.classList.remove('active');
      CTRL_LEFT.classList.remove('remove');
    }
    if (event.code == 'AltLeft') {
      ALT_RIGHT.classList.remove('active');
      ALT_RIGHT.classList.remove('remove');
    }
    if (event.code == 'AltRight') {
      ALT_LEFT.classList.remove('active');
      ALT_LEFT.classList.remove('remove');
    }
    setTimeout(() => {
      KEYS[i].classList.remove('remove');
    }, 600);
  }
});

document.addEventListener('click', (event) => {
  if (event.target.innerText.length < 2) {
    TEXTAREA.value += event.target.innerText;
  }
  if (event.target.innerText == 'CapsLock') {
    CAPSLOCK.classList.toggle('active');
    translateFontCase();
  } else {
    event.target.classList.add('remove');
    setTimeout(() => {
      event.target.classList.remove('remove');
    }, 600);
  }
  if (event.target.innerHTML === 'Backspace') {
    TEXTAREA.value = deleteLastLetter(TEXTAREA.value);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.repeat) return;
  arrChars.push(event.code);
});

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < changeLangArr.length; i++) {
    if (changeLangArr[i] !== arrChars[i]) {
      arrChars.length = 0;
      return;
    }
  }

  if (CONTAINER_KEYS.classList.contains('eng')) {
    for (let i = 0; i < KEYS.length; i++) {
      let arr = [];
      arr = arr.concat(...KEYBOARD);
      KEYS[i].innerText = arr[i];
      CONTAINER_KEYS.classList.remove('eng');
    }
  } else {
    for (let i = 0; i < KEYS.length; i++) {
      CONTAINER_KEYS.classList.add('eng');
      KEYS[i].innerText = ENG_KEYBOARD[i];
    }
  }
  CAPSLOCK.classList.remove('active');
  arrChars.length = 0;
});

