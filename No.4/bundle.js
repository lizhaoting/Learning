/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction app() {\r\n\tvar element = document.createElement('div');\r\n\telement.innerHTML = 'Hello Word!';\r\n\telement.classList.add('header');\r\n\treturn element;\r\n}\r\n\r\ndocument.body.appendChild(app());\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/_css-loader@2.1.0@css-loader/dist/cjs.js):\\nModuleBuildError: Module build failed (from ./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js):\\nTypeError: Cannot read property 'start' of undefined\\n    at Rule.positionBy (E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_postcss@6.0.23@postcss\\\\lib\\\\node.js:507:31)\\n    at module.exports (E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_stylelint@9.10.1@stylelint\\\\lib\\\\utils\\\\report.js:49:34)\\n    at complain (E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_stylelint@9.10.1@stylelint\\\\lib\\\\rules\\\\block-closing-brace-newline-before\\\\index.js:109:9)\\n    at check (E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_stylelint@9.10.1@stylelint\\\\lib\\\\rules\\\\block-closing-brace-newline-before\\\\index.js:67:11)\\n    at E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_postcss@7.0.14@postcss\\\\lib\\\\container.js:239:18\\n    at E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_postcss@7.0.14@postcss\\\\lib\\\\container.js:135:18\\n    at Root.each (E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_postcss@7.0.14@postcss\\\\lib\\\\container.js:101:16)\\n    at Root.walk (E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_postcss@7.0.14@postcss\\\\lib\\\\container.js:131:17)\\n    at Root.walkRules (E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_postcss@7.0.14@postcss\\\\lib\\\\container.js:237:19)\\n    at E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_stylelint@9.10.1@stylelint\\\\lib\\\\rules\\\\block-closing-brace-newline-before\\\\index.js:33:10\\n    at performRules.push.Promise.all.postcssRoots.map.postcssRoot (E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_stylelint@9.10.1@stylelint\\\\lib\\\\lintSource.js:232:13)\\n    at Array.map (<anonymous>)\\n    at rules.forEach.ruleName (E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_stylelint@9.10.1@stylelint\\\\lib\\\\lintSource.js:228:22)\\n    at Array.forEach (<anonymous>)\\n    at lintPostcssResult (E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_stylelint@9.10.1@stylelint\\\\lib\\\\lintSource.js:196:9)\\n    at getConfig.then.result (E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_stylelint@9.10.1@stylelint\\\\lib\\\\lintSource.js:140:16)\\n    at runLoaders (E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_webpack@4.29.0@webpack\\\\lib\\\\NormalModule.js:301:20)\\n    at E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_loader-runner@2.4.0@loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_loader-runner@2.4.0@loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at context.callback (E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_loader-runner@2.4.0@loader-runner\\\\lib\\\\LoaderRunner.js:111:13)\\n    at Promise.resolve.then.then.catch (E:\\\\侠课岛\\\\No.4\\\\node_modules\\\\_postcss-loader@3.0.0@postcss-loader\\\\src\\\\index.js:208:9)\");\n\n//# sourceURL=webpack:///./style.css?");

/***/ })

/******/ });