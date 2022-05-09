/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n\nvar KEYBOARD = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '0', 'Backspace'], ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\\\', 'del'], ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'], ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'], ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']];\nvar CONTAINER = document.createElement('div');\nCONTAINER.className = 'container';\ndocument.body.appendChild(CONTAINER);\n\nfunction createKeyboard(row) {\n  var ROW = document.createElement('div');\n  ROW.className = 'row';\n  CONTAINER.appendChild(ROW);\n\n  for (var i = 0; i < row.length; i++) {\n    var KEY = document.createElement('div');\n    KEY.className = 'key';\n    ROW.appendChild(KEY);\n  }\n}\n\nfor (var i = 0; i < KEYBOARD.length; i++) {\n  createKeyboard(KEYBOARD[i]);\n}\n\n//# sourceURL=webpack://virtual-keybord/./src/index.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ (function() {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: Invalid CSS after \\\".row\\\": expected \\\"{\\\", was \\\"\\\"\\n        on line 8 of src/styles/components/_keyboard.scss\\n        from line 3 of src/styles/style.scss\\n>> .row\\n   ----^\\n\\n    at tryRunOrWebpackError (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\webpack\\\\lib\\\\HookWebpackError.js:88:9)\\n    at __webpack_require_module__ (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5051:12)\\n    at __webpack_require__ (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5008:18)\\n    at D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5079:20\\n    at symbolIterator (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\neo-async\\\\async.js:3485:9)\\n    at done (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\neo-async\\\\async.js:3527:9)\\n    at Hook.eval [as callAsync] (eval at create (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:18:14)\\n    at D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:4986:43\\n    at symbolIterator (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\neo-async\\\\async.js:3482:9)\\n-- inner error --\\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: Invalid CSS after \\\".row\\\": expected \\\"{\\\", was \\\"\\\"\\n        on line 8 of src/styles/components/_keyboard.scss\\n        from line 3 of src/styles/style.scss\\n>> .row\\n   ----^\\n\\n    at Object.<anonymous> (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\sass-loader\\\\dist\\\\cjs.js!D:\\\\rs-scool\\\\Virtual-Keybord\\\\src\\\\styles\\\\style.scss:1:7)\\n    at D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\webpack\\\\lib\\\\javascript\\\\JavascriptModulesPlugin.js:441:11\\n    at Hook.eval [as call] (eval at create (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:19:10), <anonymous>:7:1)\\n    at Hook.CALL_DELEGATE [as _call] (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:14:14)\\n    at D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5053:39\\n    at tryRunOrWebpackError (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\webpack\\\\lib\\\\HookWebpackError.js:83:7)\\n    at __webpack_require_module__ (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5051:12)\\n    at __webpack_require__ (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5008:18)\\n    at D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5079:20\\n    at symbolIterator (D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\neo-async\\\\async.js:3485:9)\\n\\nGenerated code for D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!D:\\\\rs-scool\\\\Virtual-Keybord\\\\node_modules\\\\sass-loader\\\\dist\\\\cjs.js!D:\\\\rs-scool\\\\Virtual-Keybord\\\\src\\\\styles\\\\style.scss\\n1 | throw new Error(\\\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\\\nSassError: Invalid CSS after \\\\\\\".row\\\\\\\": expected \\\\\\\"{\\\\\\\", was \\\\\\\"\\\\\\\"\\\\n        on line 8 of src/styles/components/_keyboard.scss\\\\n        from line 3 of src/styles/style.scss\\\\n>> .row\\\\n   ----^\\\\n\\\");\");\n\n//# sourceURL=webpack://virtual-keybord/./src/styles/style.scss?");

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