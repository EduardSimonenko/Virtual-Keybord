import './styles/style.scss';

const KEYBOARD = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl']];

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

function createKeyboard(row) {
  const ROW = addElement('div', 'row', CONTAINER_KEYS);
  for (let i = 0; i < row.length; i++) {
    const KEY = addElement('div', 'key', ROW);
    if (row[i].length > 1) {
      KEY.classList.add(`${row[i].toLowerCase()}`);
    }
    if (row[i].length === 0) {
      KEY.classList.add('space');
    }
    KEY.innerHTML = `${row[i]}`;
  }
}

for (let i = 0; i < KEYBOARD.length; i++) {
  createKeyboard(KEYBOARD[i]);
}

const KEYS = document.querySelectorAll('.key');
const CAPSLOCK = document.querySelector('.capslock');
const SHIFT_LEFT = document.querySelector('.shift');
const SHIFT_RIGHT = document.querySelectorAll('.shift')[1];
const SPACE = document.querySelector('.space');
const BODY = document.querySelector('body');

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

document.addEventListener('keydown', (event) => {
  for (let i = 0; i < KEYS.length; i++) {
    if (event.key == KEYS[i].getAttribute('keyname') || event.key == KEYS[i].getAttribute('upperCaseName')) {
      KEYS[i].classList.add('active');
    }
    if (event.code == 'Space') {
      SPACE.classList.add('active');
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < KEYS.length; i++) {
    if (event.key == KEYS[i].getAttribute('keyname') || event.key == KEYS[i].getAttribute('upperCaseName')) {
      KEYS[i].classList.remove('active');
      KEYS[i].classList.add('remove');
    }
    if (event.code == 'Space') {
      SPACE.classList.remove('active');
      SPACE.classList.add('remove');
    }
    setTimeout(() => {
      KEYS[i].classList.remove('remove');
    });
  }
});
