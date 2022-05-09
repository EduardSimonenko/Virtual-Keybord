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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n\nvar KEYBOARD = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\\\', 'del'], ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'], ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'], ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl']];\nvar ENG_KEYBOARD = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\', 'del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'];\n\nfunction addElement(type, className, place) {\n  var element = document.createElement(\"\".concat(type));\n  element.className = \"\".concat(className);\n\n  if (place === document.body) {\n    place.prepend(element);\n  } else {\n    place.append(element);\n  }\n\n  return element;\n}\n\nvar CONTAINER = addElement('div', 'container', document.body);\nvar TITLE = addElement('h1', 'title', CONTAINER);\nvar TEXTAREA = addElement('textarea', 'textarea', CONTAINER);\nvar CONTAINER_KEYS = addElement('div', 'container-keys', CONTAINER);\nTITLE.innerHTML = 'Virtual keyboard';\nTEXTAREA.setAttribute('id', 'textarea');\nTEXTAREA.setAttribute('rows', '5');\nTEXTAREA.setAttribute('cols', '40');\n\nfunction deleteLastLetter(str) {\n  return str.split('').slice(0, str.length - 1).join('');\n}\n\nfunction createKeyboard(row) {\n  var ROW = addElement('div', 'row', CONTAINER_KEYS);\n\n  for (var i = 0; i < row.length; i++) {\n    var KEY = addElement('div', 'key', ROW);\n\n    if (row[i].length > 1) {\n      KEY.classList.add(\"\".concat(row[i]));\n    }\n\n    if (row[i].length === 0) {\n      KEY.classList.add('space');\n    }\n\n    KEY.innerText = \"\".concat(row[i]);\n  }\n}\n\nfor (var i = 0; i < KEYBOARD.length; i++) {\n  createKeyboard(KEYBOARD[i]);\n}\n\nvar KEYS = document.querySelectorAll('.key');\nvar CAPSLOCK = document.querySelector('.CapsLock');\nvar SHIFT_LEFT = document.querySelector('.Shift');\nvar SHIFT_RIGHT = document.querySelectorAll('.Shift')[1];\nvar CTRL_LEFT = document.querySelector('.Ctrl');\nvar CTRL_RIGHT = document.querySelectorAll('.Ctrl')[1];\nvar ALT_LEFT = document.querySelector('.Alt');\nvar ALT_RIGHT = document.querySelectorAll('.Alt')[1];\nvar SPACE = document.querySelector('.space');\nvar BODY = document.querySelector('body');\nvar arrChars = [];\nvar changeLangArr = ['ControlLeft', 'AltLeft'];\n\nfor (var _i = 0; _i < KEYS.length; _i++) {\n  KEYS[_i].setAttribute('keyname', KEYS[_i].innerText);\n\n  KEYS[_i].setAttribute('upperCaseName', KEYS[_i].innerText.toUpperCase());\n\n  KEYS[_i].setAttribute('eng', ENG_KEYBOARD[_i]);\n\n  if (KEYS[_i].innerText === 'del') {\n    KEYS[_i].setAttribute('keyname', 'Delete');\n\n    KEYS[_i].setAttribute('upperCaseName', 'Delete'.toUpperCase());\n  }\n\n  if (KEYS[_i].innerText === 'Ctrl') {\n    KEYS[_i].setAttribute('keyname', 'Control');\n\n    KEYS[_i].setAttribute('upperCaseName', 'Control'.toUpperCase());\n  }\n\n  if (KEYS[_i].innerText === 'Win') {\n    KEYS[_i].setAttribute('keyname', 'Meta');\n\n    KEYS[_i].setAttribute('upperCaseName', 'Meta'.toUpperCase());\n  }\n\n  if (KEYS[_i].innerText === '▲') {\n    KEYS[_i].setAttribute('keyname', 'ArrowUp');\n\n    KEYS[_i].setAttribute('upperCaseName', 'ArrowUp'.toUpperCase());\n  }\n\n  if (KEYS[_i].innerText === '▼') {\n    KEYS[_i].setAttribute('keyname', 'ArrowDown');\n\n    KEYS[_i].setAttribute('upperCaseName', 'ArrowDown'.toUpperCase());\n  }\n\n  if (KEYS[_i].innerText === '◄') {\n    KEYS[_i].setAttribute('keyname', 'ArrowLeft');\n\n    KEYS[_i].setAttribute('upperCaseName', 'ArrowLeft'.toUpperCase());\n  }\n\n  if (KEYS[_i].innerText === '►') {\n    KEYS[_i].setAttribute('keyname', 'ArrowRight');\n\n    KEYS[_i].setAttribute('upperCaseName', 'ArrowRight'.toUpperCase());\n  }\n}\n\nfunction translateFontCase() {\n  if (CAPSLOCK.classList.contains('active')) {\n    for (var _i2 = 0; _i2 < KEYS.length; _i2++) {\n      if (KEYS[_i2].innerText.length < 2) {\n        KEYS[_i2].innerText = KEYS[_i2].innerText.toUpperCase();\n      }\n    }\n  } else {\n    for (var _i3 = 0; _i3 < KEYS.length; _i3++) {\n      if (KEYS[_i3].innerText.length < 2) {\n        KEYS[_i3].innerText = KEYS[_i3].innerText.toLowerCase();\n      }\n    }\n  }\n}\n\nBODY.addEventListener('keydown', function (event) {\n  if (event.code == 'CapsLock') {\n    CAPSLOCK.classList.toggle('active');\n    translateFontCase();\n  }\n});\ndocument.addEventListener('keydown', function (event) {\n  for (var _i4 = 0; _i4 < KEYS.length; _i4++) {\n    if ((event.key == KEYS[_i4].getAttribute('keyname') || event.key == KEYS[_i4].getAttribute('upperCaseName') || event.key == KEYS[_i4].getAttribute('eng')) && event.code !== 'CapsLock') {\n      KEYS[_i4].classList.add('active');\n\n      if (event.key.length < 2) {\n        TEXTAREA.value += KEYS[_i4].innerText;\n      }\n    }\n\n    if (event.code == 'Space') {\n      SPACE.classList.add('active');\n    }\n\n    if (event.code == 'ShiftLeft') {\n      SHIFT_RIGHT.classList.remove('active');\n\n      for (var k = 0; k < KEYS.length; k++) {\n        if (KEYS[k].innerText.length < 2) {\n          KEYS[k].innerText = KEYS[k].innerText.toUpperCase();\n        }\n      }\n\n      CAPSLOCK.classList.remove('active');\n    }\n\n    if (event.code == 'ShiftRight') {\n      SHIFT_LEFT.classList.remove('active');\n\n      for (var _k = 0; _k < KEYS.length; _i4++) {\n        if (KEYS[_k].innerText.length < 2) {\n          KEYS[_k].innerText = KEYS[_k].innerText.toUpperCase();\n        }\n      }\n\n      CAPSLOCK.classList.remove('active');\n    }\n\n    if (event.code == 'ControlLeft') {\n      CTRL_RIGHT.classList.remove('active');\n    }\n\n    if (event.code == 'ControlRight') {\n      CTRL_LEFT.classList.remove('active');\n    }\n\n    if (event.code == 'AltLeft') {\n      ALT_RIGHT.classList.remove('active');\n    }\n\n    if (event.code == 'AltRight') {\n      ALT_LEFT.classList.remove('active');\n    }\n  }\n\n  if (event.code == 'Backspace') {\n    TEXTAREA.value = TEXTAREA.value.split('').slice(0, TEXTAREA.value.length - 1).join('');\n  }\n});\ndocument.addEventListener('keyup', function (event) {\n  var _loop = function _loop(_i5) {\n    if ((event.key == KEYS[_i5].getAttribute('keyname') || event.key == KEYS[_i5].getAttribute('upperCaseName') || event.key == KEYS[_i5].getAttribute('eng')) && event.code !== 'CapsLock') {\n      KEYS[_i5].classList.remove('active');\n\n      KEYS[_i5].classList.add('remove');\n    }\n\n    if (event.code == 'Space') {\n      SPACE.classList.remove('active');\n      SPACE.classList.add('remove');\n    }\n\n    if (event.code == 'ShiftLeft') {\n      SHIFT_RIGHT.classList.remove('active');\n      SHIFT_RIGHT.classList.remove('remove');\n\n      for (var k = 0; k < KEYS.length; k++) {\n        if (KEYS[k].innerText.length < 2) {\n          KEYS[k].innerText = KEYS[k].innerText.toLowerCase();\n        }\n      }\n    }\n\n    if (event.code == 'ShiftRight') {\n      SHIFT_LEFT.classList.remove('active');\n      SHIFT_LEFT.classList.remove('remove');\n\n      for (var _k2 = 0; _k2 < KEYS.length; _k2++) {\n        if (KEYS[_k2].innerText.length < 2) {\n          KEYS[_k2].innerText = KEYS[_k2].innerText.toLowerCase();\n        }\n      }\n    }\n\n    if (event.code == 'ControlLeft') {\n      CTRL_RIGHT.classList.remove('active');\n      CTRL_RIGHT.classList.remove('remove');\n    }\n\n    if (event.code == 'ControlRight') {\n      CTRL_LEFT.classList.remove('active');\n      CTRL_LEFT.classList.remove('remove');\n    }\n\n    if (event.code == 'AltLeft') {\n      ALT_RIGHT.classList.remove('active');\n      ALT_RIGHT.classList.remove('remove');\n    }\n\n    if (event.code == 'AltRight') {\n      ALT_LEFT.classList.remove('active');\n      ALT_LEFT.classList.remove('remove');\n    }\n\n    setTimeout(function () {\n      KEYS[_i5].classList.remove('remove');\n    }, 600);\n  };\n\n  for (var _i5 = 0; _i5 < KEYS.length; _i5++) {\n    _loop(_i5);\n  }\n});\ndocument.addEventListener('click', function (event) {\n  if (event.target.innerText.length < 2) {\n    TEXTAREA.value += event.target.innerText;\n  }\n\n  if (event.target.innerText == 'CapsLock') {\n    CAPSLOCK.classList.toggle('active');\n    translateFontCase();\n  } else {\n    event.target.classList.add('remove');\n    setTimeout(function () {\n      event.target.classList.remove('remove');\n    }, 600);\n  }\n\n  if (event.target.innerHTML === 'Backspace') {\n    TEXTAREA.value = deleteLastLetter(TEXTAREA.value);\n  }\n});\ndocument.addEventListener('keydown', function (event) {\n  if (event.repeat) return;\n  arrChars.push(event.code);\n});\ndocument.addEventListener('keyup', function () {\n  for (var _i6 = 0; _i6 < changeLangArr.length; _i6++) {\n    if (changeLangArr[_i6] !== arrChars[_i6]) {\n      arrChars.length = 0;\n      return;\n    }\n  }\n\n  if (CONTAINER_KEYS.classList.contains('eng')) {\n    for (var _i7 = 0; _i7 < KEYS.length; _i7++) {\n      var _arr;\n\n      var arr = [];\n      arr = (_arr = arr).concat.apply(_arr, KEYBOARD);\n      KEYS[_i7].innerText = arr[_i7];\n      CONTAINER_KEYS.classList.remove('eng');\n    }\n  } else {\n    for (var _i8 = 0; _i8 < KEYS.length; _i8++) {\n      CONTAINER_KEYS.classList.add('eng');\n      KEYS[_i8].innerText = ENG_KEYBOARD[_i8];\n    }\n  }\n\n  CAPSLOCK.classList.remove('active');\n  arrChars.length = 0;\n});\n\n//# sourceURL=webpack://virtual-keybord/./src/index.js?");

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