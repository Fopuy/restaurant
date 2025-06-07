/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\nfunction about() {\n    const content = document.querySelector(\"#content\");\n    content.innerHTML = \"\"; // clear previous content\n  \n    const aboutContainer = document.createElement(\"div\");\n    aboutContainer.classList.add(\"about\");\n  \n    const heading = document.createElement(\"h2\");\n    heading.textContent = \"About Fop's Kitchen\";\n  \n    const paragraph1 = document.createElement(\"p\");\n    paragraph1.textContent =\n      \"Fop's Kitchen was founded in 2024 by a mysterious chef who believed the best meals come from the most unexpected sources.\";\n  \n    const paragraph2 = document.createElement(\"p\");\n    paragraph2.textContent =\n      \"With unquestionable ingredients and even more unquestionable ethics, we’ve become a local favorite for those who dare to try something new.\";\n  \n    const quote = document.createElement(\"blockquote\");\n    quote.textContent = \"“You’ve never tasted anything like this... and maybe you shouldn’t.”\";\n  \n    aboutContainer.appendChild(heading);\n    aboutContainer.appendChild(paragraph1);\n    aboutContainer.appendChild(paragraph2);\n    aboutContainer.appendChild(quote);\n  \n    content.appendChild(aboutContainer);\n  }\n  \n  \n\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\n    const content = document.querySelector(\"#content\");\n    content.innerHTML = \"\"; // clear previous content\n  \n    const homeContainer = document.createElement(\"div\");\n    homeContainer.classList.add(\"home\");\n  \n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"Welcome to Fop's Kitchen\";\n  \n    const paragraph = document.createElement(\"p\");\n    paragraph.textContent =\n      \"Where the meat is unquestionable, but the flavor is unforgettable. Join us for homemade Filipino dishes... kinda.\";\n  \n    const tagline = document.createElement(\"em\");\n    tagline.textContent = \"Locally sourced. Occasionally ethical.\";\n  \n    homeContainer.appendChild(heading);\n    homeContainer.appendChild(paragraph);\n    homeContainer.appendChild(tagline);\n  \n    content.appendChild(homeContainer);\n  }\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\nconst homebtn = document.querySelector(\"#homebtn\");\nhomebtn.addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_0__.home);\n\nconst aboutbtn = document.querySelector(\"#aboutbtn\");\naboutbtn.addEventListener(\"click\", _about_js__WEBPACK_IMPORTED_MODULE_1__.about);\n\nconst menubtn = document.querySelector(\"#menubtn\");\nmenubtn.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_2__.menu);\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(){\n    const content = document.querySelector(\"#content\");\n    content.innerHTML = \"\"; // clear previous content\n\n    const menu = document.createElement('div');\n    menu.classList.add(\"menu\");\n\n    const h1 = document.createElement('h1');\n    h1.textContent = '🍽️ Fop Bistro';\n    content.appendChild(h1);\n\n    const p = document.createElement('p');\n    p.textContent = 'Welcome to our cozy restaurant! We serve fresh, homemade meals daily.';\n    content.appendChild(p);\n\n    const h2 = document.createElement('h2');\n    h2.textContent = \"Menu\";\n    menu.appendChild(h2);\n\n    const items = [\n        {name: \"Adobong Tao\", price: \"P1000\"},\n        {name: \"Grilled Tao\", price: \"P850\"},\n        {name: 'Inihaw na Tao', price: 'P800'},\n        {name: 'Fresh Puday', price: 'P250'}, \n    ];\n\n    items.forEach(item => {\n        const div = document.createElement(\"div\");\n        div.classList.add('menu-item');\n        const span = document.createElement('span');\n        span.textContent = item.name;\n        div.appendChild(span);\n        div.append( ` - ${item.price}`);\n        menu.appendChild(div);\n    });\n\n    content.appendChild(menu);\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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