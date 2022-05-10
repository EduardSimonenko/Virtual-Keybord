/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _scripts_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/functions */ \"./src/scripts/functions.js\");\n\n\nvar KEYBOARD = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\\\', 'del'], ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'], ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'], ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl']];\nvar ENG_KEYBOARD = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\', 'del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'];\nvar ENG_KEYBOARD3 = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\', 'del'], ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\\'', 'Enter'], ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'], ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl']];\nvar CONTAINER = _scripts_functions__WEBPACK_IMPORTED_MODULE_1__.addElement('div', 'container', document.body);\nvar TITLE = _scripts_functions__WEBPACK_IMPORTED_MODULE_1__.addElement('h1', 'title', CONTAINER);\nvar COLOR_INPUT = _scripts_functions__WEBPACK_IMPORTED_MODULE_1__.addElement('input', 'color-input', CONTAINER);\nvar TEXTAREA = _scripts_functions__WEBPACK_IMPORTED_MODULE_1__.addElement('textarea', 'textarea', CONTAINER);\nvar CONTAINER_KEYS = _scripts_functions__WEBPACK_IMPORTED_MODULE_1__.addElement('div', 'container-keys', CONTAINER);\nvar DESCRIPTION = _scripts_functions__WEBPACK_IMPORTED_MODULE_1__.addElement('div', 'description', CONTAINER);\n\nfunction createKeyboard(row) {\n  var ROW = _scripts_functions__WEBPACK_IMPORTED_MODULE_1__.addElement('div', 'row', CONTAINER_KEYS);\n\n  for (var i = 0; i < row.length; i++) {\n    var KEY = _scripts_functions__WEBPACK_IMPORTED_MODULE_1__.addElement('div', 'key', ROW);\n\n    if (row[i].length > 1) {\n      KEY.classList.add(\"\".concat(row[i]));\n    }\n\n    if (row[i].length === 0) {\n      KEY.classList.add('space');\n    }\n\n    KEY.innerText = \"\".concat(row[i]);\n  }\n}\n\nconsole.log(localStorage.lang);\n\nfor (var i = 0; i < KEYBOARD.length; i++) {\n  if (!localStorage.lang) {\n    createKeyboard(KEYBOARD[i]);\n    CONTAINER_KEYS.classList.remove('eng');\n  } else if (localStorage.lang.includes('eng')) {\n    createKeyboard(ENG_KEYBOARD3[i]);\n    CONTAINER_KEYS.classList.add('eng');\n  } else {\n    createKeyboard(KEYBOARD[i]);\n    CONTAINER_KEYS.classList.remove('eng');\n  }\n}\n\nvar KEYS = document.querySelectorAll('.key');\nvar CAPSLOCK = document.querySelector('.CapsLock');\nvar SHIFT_LEFT = document.querySelector('.Shift');\nvar SHIFT_RIGHT = document.querySelectorAll('.Shift')[1];\nvar CTRL_LEFT = document.querySelector('.Ctrl');\nvar CTRL_RIGHT = document.querySelectorAll('.Ctrl')[1];\nvar ALT_LEFT = document.querySelector('.Alt');\nvar ALT_RIGHT = document.querySelectorAll('.Alt')[1];\nvar SPACE = document.querySelector('.space');\nvar BODY = document.querySelector('body');\nvar arrChars = [];\nvar changeLangArr = ['ControlLeft', 'AltLeft'];\nTITLE.innerHTML = 'Virtual keyboard';\nDESCRIPTION.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';\nTEXTAREA.setAttribute('id', 'textarea');\nTEXTAREA.setAttribute('rows', '5');\nTEXTAREA.setAttribute('cols', '40');\nCOLOR_INPUT.setAttribute('type', 'color');\n\nfor (var _i = 0; _i < KEYS.length; _i++) {\n  KEYS[_i].setAttribute('keyname', KEYS[_i].innerText);\n\n  KEYS[_i].setAttribute('upperCaseName', KEYS[_i].innerText.toUpperCase());\n\n  KEYS[_i].setAttribute('eng', ENG_KEYBOARD[_i]);\n\n  if (KEYS[_i].innerText === 'del') {\n    KEYS[_i].setAttribute('keyname', 'Delete');\n\n    KEYS[_i].setAttribute('upperCaseName', 'Delete'.toUpperCase());\n  }\n\n  if (KEYS[_i].innerText === 'Ctrl') {\n    KEYS[_i].setAttribute('keyname', 'Control');\n\n    KEYS[_i].setAttribute('upperCaseName', 'Control'.toUpperCase());\n  }\n\n  if (KEYS[_i].innerText === 'Win') {\n    KEYS[_i].setAttribute('keyname', 'Meta');\n\n    KEYS[_i].setAttribute('upperCaseName', 'Meta'.toUpperCase());\n  }\n\n  if (KEYS[_i].innerText === '▲') {\n    KEYS[_i].setAttribute('keyname', 'ArrowUp');\n\n    KEYS[_i].setAttribute('upperCaseName', 'ArrowUp'.toUpperCase());\n  }\n\n  if (KEYS[_i].innerText === '▼') {\n    KEYS[_i].setAttribute('keyname', 'ArrowDown');\n\n    KEYS[_i].setAttribute('upperCaseName', 'ArrowDown'.toUpperCase());\n  }\n\n  if (KEYS[_i].innerText === '◄') {\n    KEYS[_i].setAttribute('keyname', 'ArrowLeft');\n\n    KEYS[_i].setAttribute('upperCaseName', 'ArrowLeft'.toUpperCase());\n  }\n\n  if (KEYS[_i].innerText === '►') {\n    KEYS[_i].setAttribute('keyname', 'ArrowRight');\n\n    KEYS[_i].setAttribute('upperCaseName', 'ArrowRight'.toUpperCase());\n  }\n}\n\nBODY.addEventListener('keydown', function (event) {\n  if (event.code == 'CapsLock') {\n    CAPSLOCK.classList.toggle('active'); // eslint-disable-next-line no-unused-expressions\n\n    CAPSLOCK.classList.contains('active') ? _scripts_functions__WEBPACK_IMPORTED_MODULE_1__.translateToUpperCase(KEYS) : _scripts_functions__WEBPACK_IMPORTED_MODULE_1__.translateToLowerCase(KEYS);\n  }\n});\ndocument.addEventListener('keydown', function (event) {\n  for (var _i2 = 0; _i2 < KEYS.length; _i2++) {\n    if ((event.key == KEYS[_i2].getAttribute('keyname') || event.key == KEYS[_i2].getAttribute('upperCaseName') || event.key == KEYS[_i2].getAttribute('eng')) && event.code !== 'CapsLock') {\n      KEYS[_i2].classList.add('active');\n\n      if (event.key.length < 2) {\n        TEXTAREA.value += KEYS[_i2].innerText;\n      }\n    }\n\n    if (event.code == 'Space') {\n      SPACE.classList.add('active');\n    }\n\n    if (event.code == 'ShiftLeft') {\n      SHIFT_RIGHT.classList.remove('active');\n\n      for (var k = 0; k < KEYS.length; k++) {\n        if (KEYS[k].innerText.length < 2) {\n          KEYS[k].innerText = KEYS[k].innerText.toUpperCase();\n        }\n      }\n\n      CAPSLOCK.classList.remove('active');\n    }\n\n    if (event.code == 'ShiftRight') {\n      SHIFT_LEFT.classList.remove('active');\n\n      for (var _k = 0; _k < KEYS.length; _i2++) {\n        if (KEYS[_k].innerText.length < 2) {\n          KEYS[_k].innerText = KEYS[_k].innerText.toUpperCase();\n        }\n      }\n\n      CAPSLOCK.classList.remove('active');\n    }\n\n    if (event.code == 'ControlLeft') {\n      CTRL_RIGHT.classList.remove('active');\n    }\n\n    if (event.code == 'ControlRight') {\n      CTRL_LEFT.classList.remove('active');\n    }\n\n    if (event.code == 'AltLeft') {\n      ALT_RIGHT.classList.remove('active');\n    }\n\n    if (event.code == 'AltRight') {\n      ALT_LEFT.classList.remove('active');\n    }\n  }\n\n  if (event.code == 'Backspace') {\n    if (TEXTAREA.selectionStart === TEXTAREA.value.length) {\n      TEXTAREA.value = \"\".concat(TEXTAREA.value.split('').slice(0, TEXTAREA.value.length - 1).join(''));\n    } else {\n      TEXTAREA.value = \"\".concat(TEXTAREA.value.split('').slice(0, TEXTAREA.selectionStart).join('')).concat(TEXTAREA.value.split('').slice(TEXTAREA.selectionStart, TEXTAREA.value.length).join(''));\n    }\n  }\n});\ndocument.addEventListener('keyup', function (event) {\n  var _loop = function _loop(_i3) {\n    if ((event.key == KEYS[_i3].getAttribute('keyname') || event.key == KEYS[_i3].getAttribute('upperCaseName') || event.key == KEYS[_i3].getAttribute('eng')) && event.code !== 'CapsLock') {\n      KEYS[_i3].classList.remove('active');\n\n      KEYS[_i3].classList.add('remove');\n    }\n\n    if (event.code == 'Space') {\n      SPACE.classList.remove('active');\n      SPACE.classList.add('remove');\n    }\n\n    if (event.code == 'ShiftLeft') {\n      SHIFT_RIGHT.classList.remove('active');\n      SHIFT_RIGHT.classList.remove('remove');\n\n      for (var k = 0; k < KEYS.length; k++) {\n        if (KEYS[k].innerText.length < 2) {\n          KEYS[k].innerText = KEYS[k].innerText.toLowerCase();\n        }\n      }\n    }\n\n    if (event.code == 'ShiftRight') {\n      SHIFT_LEFT.classList.remove('active');\n      SHIFT_LEFT.classList.remove('remove');\n\n      for (var _k2 = 0; _k2 < KEYS.length; _k2++) {\n        if (KEYS[_k2].innerText.length < 2) {\n          KEYS[_k2].innerText = KEYS[_k2].innerText.toLowerCase();\n        }\n      }\n    }\n\n    if (event.code == 'ControlLeft') {\n      CTRL_RIGHT.classList.remove('active');\n      CTRL_RIGHT.classList.remove('remove');\n    }\n\n    if (event.code == 'ControlRight') {\n      CTRL_LEFT.classList.remove('active');\n      CTRL_LEFT.classList.remove('remove');\n    }\n\n    if (event.code == 'AltLeft') {\n      ALT_RIGHT.classList.remove('active');\n      ALT_RIGHT.classList.remove('remove');\n    }\n\n    if (event.code == 'AltRight') {\n      ALT_LEFT.classList.remove('active');\n      ALT_LEFT.classList.remove('remove');\n    }\n\n    setTimeout(function () {\n      KEYS[_i3].classList.remove('remove');\n    }, 600);\n  };\n\n  for (var _i3 = 0; _i3 < KEYS.length; _i3++) {\n    _loop(_i3);\n  }\n});\ndocument.addEventListener('click', function (event) {\n  if (event.target.innerText.length < 2 && event.target != COLOR_INPUT) {\n    var start = TEXTAREA.selectionStart;\n    var end = TEXTAREA.selectionEnd;\n    TEXTAREA.value = \"\".concat(TEXTAREA.value.split('').slice(0, TEXTAREA.selectionStart).join('')).concat(event.target.innerText).concat(TEXTAREA.value.split('').slice(TEXTAREA.selectionStart, TEXTAREA.value.length).join(''));\n    TEXTAREA.focus();\n    TEXTAREA.selectionEnd = start + 1;\n  }\n\n  if (event.target.innerText == 'CapsLock') {\n    CAPSLOCK.classList.toggle('active'); // eslint-disable-next-line no-unused-expressions\n\n    CAPSLOCK.classList.contains('active') ? _scripts_functions__WEBPACK_IMPORTED_MODULE_1__.translateToUpperCase(KEYS) : _scripts_functions__WEBPACK_IMPORTED_MODULE_1__.translateToLowerCase(KEYS);\n  } else {\n    event.target.classList.add('remove');\n    setTimeout(function () {\n      event.target.classList.remove('remove');\n    }, 600);\n  }\n\n  if (event.target.innerHTML === 'Backspace') {\n    var _start = TEXTAREA.selectionStart;\n    var _end = TEXTAREA.selectionEnd;\n    TEXTAREA.value = \"\".concat(TEXTAREA.value.split('').slice(0, TEXTAREA.selectionStart - 1).join('')).concat(TEXTAREA.value.split('').slice(TEXTAREA.selectionStart, TEXTAREA.value.length).join(''));\n    TEXTAREA.focus();\n    TEXTAREA.selectionEnd = _start - 1;\n  }\n\n  if (event.target.innerHTML === 'Enter') {\n    var _start2 = TEXTAREA.selectionStart;\n    var _end2 = TEXTAREA.selectionEnd;\n    TEXTAREA.value = \"\".concat(TEXTAREA.value.split('').slice(0, TEXTAREA.selectionStart).join(''), \"\\r\\n\").concat(TEXTAREA.value.split('').slice(TEXTAREA.selectionStart, TEXTAREA.value.length).join(''));\n    TEXTAREA.focus();\n    TEXTAREA.selectionEnd = _start2 + 1;\n  }\n\n  if (event.target.innerHTML === 'del') {\n    var _start3 = TEXTAREA.selectionStart;\n    var _end3 = TEXTAREA.selectionEnd;\n    TEXTAREA.value = \"\".concat(TEXTAREA.value.split('').slice(0, _start3).join('')).concat(TEXTAREA.value.split('').slice(_start3 + 1, TEXTAREA.value.length).join(''));\n    TEXTAREA.focus();\n    TEXTAREA.selectionEnd = _end3;\n  }\n});\ndocument.addEventListener('keydown', function (event) {\n  if (event.repeat) return;\n  arrChars.push(event.code);\n});\ndocument.addEventListener('keyup', function () {\n  for (var _i4 = 0; _i4 < changeLangArr.length; _i4++) {\n    if (changeLangArr[_i4] !== arrChars[_i4]) {\n      arrChars.length = 0;\n      return;\n    }\n  }\n\n  if (localStorage.lang.includes('eng')) {\n    for (var _i5 = 0; _i5 < KEYS.length; _i5++) {\n      var _arr;\n\n      var arr = [];\n      arr = (_arr = arr).concat.apply(_arr, KEYBOARD);\n      KEYS[_i5].innerText = arr[_i5];\n      CONTAINER_KEYS.classList.remove('eng');\n    }\n  }\n\n  if (!localStorage.lang.includes('eng')) {\n    for (var _i6 = 0; _i6 < KEYS.length; _i6++) {\n      CONTAINER_KEYS.classList.add('eng');\n      KEYS[_i6].innerText = ENG_KEYBOARD[_i6];\n    }\n  }\n\n  localStorage.setItem('lang', CONTAINER_KEYS.classList);\n  CAPSLOCK.classList.remove('active');\n  arrChars.length = 0;\n});\nlocalStorage.setItem('lang', CONTAINER_KEYS.classList);\n\n//# sourceURL=webpack://virtual-keybord/./src/index.js?");

/***/ }),

/***/ "./src/scripts/functions.js":
/*!**********************************!*\
  !*** ./src/scripts/functions.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addElement\": function() { return /* binding */ addElement; },\n/* harmony export */   \"deleteLastLetter\": function() { return /* binding */ deleteLastLetter; },\n/* harmony export */   \"translateToLowerCase\": function() { return /* binding */ translateToLowerCase; },\n/* harmony export */   \"translateToUpperCase\": function() { return /* binding */ translateToUpperCase; }\n/* harmony export */ });\n/* eslint-disable no-param-reassign */\nfunction addElement(type, className, place) {\n  var element = document.createElement(\"\".concat(type));\n  element.className = \"\".concat(className);\n\n  if (place === document.body) {\n    place.prepend(element);\n  } else {\n    place.append(element);\n  }\n\n  return element;\n}\n\nfunction deleteLastLetter(str) {\n  return str.split('').slice(0, str.length - 1).join('');\n}\n\nfunction translateToUpperCase(NodeList) {\n  for (var i = 0; i < NodeList.length; i++) {\n    if (NodeList[i].innerText.length < 2) {\n      NodeList[i].innerText = NodeList[i].innerText.toUpperCase();\n    }\n  }\n}\n\nfunction translateToLowerCase(NodeList) {\n  for (var i = 0; i < NodeList.length; i++) {\n    if (NodeList[i].innerText.length < 2) {\n      NodeList[i].innerText = NodeList[i].innerText.toLowerCase();\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack://virtual-keybord/./src/scripts/functions.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://virtual-keybord/./src/styles/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;