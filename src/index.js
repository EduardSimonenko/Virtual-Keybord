import './styles/style.scss';
import * as func from './scripts/functions';

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

const ENG_KEYBOARD3 = [
    [ '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl']];

const CONTAINER = func.addElement('div', 'container', document.body);
const TITLE = func.addElement('h1', 'title', CONTAINER);
const COLOR_INPUT = func.addElement('input', 'color-input', CONTAINER);
const TEXTAREA = func.addElement('textarea', 'textarea', CONTAINER);
const CONTAINER_KEYS = func.addElement('div', 'container-keys', CONTAINER);
const DESCRIPTION = func.addElement('div', 'description', CONTAINER);

function createKeyboard(row) {
  const ROW = func.addElement('div', 'row', CONTAINER_KEYS);
  for (let i = 0; i < row.length; i++) {
    const KEY = func.addElement('div', 'key', ROW);
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
  if (localStorage.lang.includes('eng')) {
    createKeyboard(ENG_KEYBOARD3[i]);
    CONTAINER_KEYS.classList.add('eng');
  }else{
    createKeyboard(KEYBOARD[i]);
    CONTAINER_KEYS.classList.remove('eng');
  }
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
const BODY = document.querySelector('body');

const arrChars = [];
const changeLangArr = ['ControlLeft', 'AltLeft'];

TITLE.innerHTML = 'Virtual keyboard';
DESCRIPTION.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';

TEXTAREA.setAttribute('id', 'textarea');
TEXTAREA.setAttribute('rows', '5');
TEXTAREA.setAttribute('cols', '40');
COLOR_INPUT.setAttribute('type', 'color');

for (let i = 0; i < KEYS.length; i++) {
  KEYS[i].setAttribute('keyname', KEYS[i].innerText);
  KEYS[i].setAttribute('upperCaseName', KEYS[i].innerText.toUpperCase());
  KEYS[i].setAttribute('eng', ENG_KEYBOARD[i]);
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
  if (KEYS[i].innerText === '▲') {
    KEYS[i].setAttribute('keyname', 'ArrowUp');
    KEYS[i].setAttribute('upperCaseName', 'ArrowUp'.toUpperCase());
  }
  if (KEYS[i].innerText === '▼') {
    KEYS[i].setAttribute('keyname', 'ArrowDown');
    KEYS[i].setAttribute('upperCaseName', 'ArrowDown'.toUpperCase());
  }
  if (KEYS[i].innerText === '◄') {
    KEYS[i].setAttribute('keyname', 'ArrowLeft');
    KEYS[i].setAttribute('upperCaseName', 'ArrowLeft'.toUpperCase());
  }
  if (KEYS[i].innerText === '►') {
    KEYS[i].setAttribute('keyname', 'ArrowRight');
    KEYS[i].setAttribute('upperCaseName', 'ArrowRight'.toUpperCase());
  }
}

BODY.addEventListener('keydown', (event) => {
  if (event.code == 'CapsLock') {
    CAPSLOCK.classList.toggle('active');
    // eslint-disable-next-line no-unused-expressions
    CAPSLOCK.classList.contains('active') ? func.translateToUpperCase(KEYS) : func.translateToLowerCase(KEYS);
  }
});


document.addEventListener('keydown', (event) => {
  for (let i = 0; i < KEYS.length; i++) {
    if ((event.key == KEYS[i].getAttribute('keyname') || event.key == KEYS[i].getAttribute('upperCaseName') || event.key == KEYS[i].getAttribute('eng')) && (event.code !== 'CapsLock')) {
      KEYS[i].classList.add('active');
      if (event.key.length < 2) {
        TEXTAREA.value += KEYS[i].innerText;
      }
    }
    if (event.code == 'Space') {
      SPACE.classList.add('active');
    }
    if (event.code == 'ShiftLeft') {
      SHIFT_RIGHT.classList.remove('active');
      for (let k = 0; k < KEYS.length; k++) {
        if (KEYS[k].innerText.length < 2) {
          KEYS[k].innerText = KEYS[k].innerText.toUpperCase();
        }
      }
      CAPSLOCK.classList.remove('active');
    }
    if (event.code == 'ShiftRight') {
      SHIFT_LEFT.classList.remove('active');
      for (let k = 0; k < KEYS.length; i++) {
        if (KEYS[k].innerText.length < 2) {
          KEYS[k].innerText = KEYS[k].innerText.toUpperCase();
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
    
  }
  if (event.code == 'Backspace') {
    if(TEXTAREA.selectionStart === TEXTAREA.value.length){
      TEXTAREA.value =`${TEXTAREA.value.split('').slice(0, TEXTAREA.value.length - 1).join('')}`;
    }else{
      TEXTAREA.value = `${TEXTAREA.value.split('').slice(0, TEXTAREA.selectionStart).join('')}${TEXTAREA.value.split('').slice(TEXTAREA.selectionStart, TEXTAREA.value.length).join('')}`;
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < KEYS.length; i++) {
    if ((event.key == KEYS[i].getAttribute('keyname') || event.key == KEYS[i].getAttribute('upperCaseName') || event.key == KEYS[i].getAttribute('eng')) && (event.code !== 'CapsLock')) {
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
      for (let k = 0; k < KEYS.length; k++) {
        if (KEYS[k].innerText.length < 2) {
          KEYS[k].innerText = KEYS[k].innerText.toLowerCase();
        }
      }
    }
    if (event.code == 'ShiftRight') {
      SHIFT_LEFT.classList.remove('active');
      SHIFT_LEFT.classList.remove('remove');
      for (let k = 0; k < KEYS.length; k++) {
        if (KEYS[k].innerText.length < 2) {
          KEYS[k].innerText = KEYS[k].innerText.toLowerCase();
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
  if ((event.target.innerText.length < 2) && (event.target != COLOR_INPUT)) {
    let start = TEXTAREA.selectionStart;
    let end = TEXTAREA.selectionEnd;
    TEXTAREA.value =`${TEXTAREA.value.split('').slice(0, TEXTAREA.selectionStart).join('')}${event.target.innerText}${TEXTAREA.value.split('').slice(TEXTAREA.selectionStart, TEXTAREA.value.length).join('')}`;
    TEXTAREA.focus();
    TEXTAREA.selectionEnd = start + 1;
  }
  if (event.target.innerText == 'CapsLock') {
    CAPSLOCK.classList.toggle('active');
    // eslint-disable-next-line no-unused-expressions
    CAPSLOCK.classList.contains('active') ? func.translateToUpperCase(KEYS) : func.translateToLowerCase(KEYS);
  } else {
    event.target.classList.add('remove');
    setTimeout(() => {
      event.target.classList.remove('remove');
    }, 600);
  }
  if (event.target.innerHTML === 'Backspace') {
    let start = TEXTAREA.selectionStart;
    let end = TEXTAREA.selectionEnd;
    TEXTAREA.value = `${TEXTAREA.value.split('').slice(0, TEXTAREA.selectionStart - 1).join('')}${TEXTAREA.value.split('').slice(TEXTAREA.selectionStart, TEXTAREA.value.length).join('')}`;
    TEXTAREA.focus();
    TEXTAREA.selectionEnd = start - 1;
  }
  if (event.target.innerHTML === 'Enter') {
    let start = TEXTAREA.selectionStart;
    let end = TEXTAREA.selectionEnd;
    TEXTAREA.value = `${TEXTAREA.value.split('').slice(0, TEXTAREA.selectionStart).join('')}\r\n${TEXTAREA.value.split('').slice(TEXTAREA.selectionStart, TEXTAREA.value.length).join('')}`;
    TEXTAREA.focus();
    TEXTAREA.selectionEnd = start + 1;
  }
  if (event.target.innerHTML === 'del') {
    let start = TEXTAREA.selectionStart;
    let end = TEXTAREA.selectionEnd;
    TEXTAREA.value = `${TEXTAREA.value.split('').slice(0, start).join('')}${TEXTAREA.value.split('').slice(start + 1, TEXTAREA.value.length).join('')}`;
    TEXTAREA.focus();
    TEXTAREA.selectionEnd = end ;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.repeat) return;
  arrChars.push(event.code);
});

document.addEventListener('keyup', () => {
  for (let i = 0; i < changeLangArr.length; i++) {
    if (changeLangArr[i] !== arrChars[i]) {
      arrChars.length = 0;
      return;
    }
  }

  if (localStorage.lang.includes('eng')) {
    for (let i = 0; i < KEYS.length; i++) {
      let arr = [];
      arr = arr.concat(...KEYBOARD);
      KEYS[i].innerText = arr[i];
      CONTAINER_KEYS.classList.remove('eng');
    }
  }
  if (!localStorage.lang.includes('eng')){
    for (let i = 0; i < KEYS.length; i++) {
      CONTAINER_KEYS.classList.add('eng');
      KEYS[i].innerText = ENG_KEYBOARD[i];
    }
  }
  localStorage.setItem('lang', CONTAINER_KEYS.classList);

  CAPSLOCK.classList.remove('active');
  arrChars.length = 0;
});

localStorage.setItem('lang', CONTAINER_KEYS.classList);
