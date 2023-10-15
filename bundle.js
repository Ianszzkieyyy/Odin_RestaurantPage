/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/hero-img.jpg */ "./src/assets/hero-img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Hanken+Grotesk:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* General */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Hanken Grotesk', sans-serif;
}

button {
    border: none;
    padding: 15px 30px;
}

h1, h3 {
    font-family: 'Hammersmith One', sans-serif;
}



/* Hero Section */

nav {
    position: absolute;
    width: 100%;

    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    padding: 1.5rem 25rem;

    z-index: 1;
}

nav li {
    color: white;
    font-size: 1.125rem;
    cursor: pointer;
}

.hero {
    position: relative;

    /* Animation */
    transition: opacity 0.25s;
    opacity: 1;
}

.hero.fade-out {
    opacity: 0;
}

.hero-bg {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.hero-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Replace this with the color and opacity you desire */
}


.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    text-align: center;
}

.hero-content {
    color: white;
}

.hero-h1 {
    font-family: 'Hammersmith One', sans-serif;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 8px;
    text-transform: uppercase;
    white-space: nowrap;
}

.hero-h2 {
    font-size: 3rem;
}

/* Body */

.body {
    background-color: #F5F5EF;

    /* Animation */
    transition: opacity 0.25s;
    opacity: 1;
}

.body.fade-out {
    opacity: 0;
}

.body-content {
    display: flex;
    padding: 150px;
}

.body-header {
    font-size: 3rem;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 30px;
}

.body-p {
    width: 80%;
    margin-bottom: 30px;
}

.body-btn {
    background-color: black;
    color: white;
}


.body-imgs-container {
    display: flex;
    gap: 30px;
}

.body-imgs-container img {
    width: 200px;
    height: 410px;
    object-fit: cover;
}

/* Feature */

.ftr {
    background-color: black;
    color: white;

    /* Animation */
    transition: opacity 0.25s;
    opacity: 1;
}

.ftr.fade-out {
    opacity: 0;
}

.ftr-content {
    padding: 150px;
    text-align: center;
}

.ftr-header {
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 80px;
}

.ftr-cards {
    display: flex;
    justify-content: space-evenly;
    gap: 30px
}

.card-icon {
    width: 60px;
    margin-bottom: 40px;
}

.card-header {
    font-weight: 700;
    text-transform: uppercase;
    width: 180px;
    margin: 0 auto 40px auto;
}

.card-p {
    width: 180px;
    text-align: center;
}

/* CTA */

.cta {
    background-color: #F5F5EF;
    display: flex;
    gap: 50px;
    align-items: center;
    padding: 100px;

    /* Animation */
    transition: opacity 0.25s;
    opacity: 1;
}

.cta.fade-out {
    opacity: 0;
}

.cta-left {
    width: 50%;
    object-fit: cover;
    overflow: hidden;
    
}

.cta-header {
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 40px;
}

.cta-p {
    font-size: 1.2rem;
    width: 80%;
    margin-bottom: 40px;
}

.cta-btn {
    background-color: #715128;
    color: white;
}

/* MENU */

.menu {
    transition: opacity 0.25s;
    opacity: 1;
}

.menu.fade-out {
    opacity: 0;
}

.menu-bg {
    background-color: black;
    height: 100%;
}

.menu-content {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 5vw);
    grid-gap: 15px;
    padding: 100px;
}

.gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.gallery__item--1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
}

.gallery__item--2 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
}

.gallery__item--3 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
}

.gallery__item--4 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
}

.gallery__item--5 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 9;
}

.gallery__item--6 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 6;
    grid-row-end: 9;
}

`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/* General */\n\n@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Hanken+Grotesk:wght@400;700&display=swap');\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Hanken Grotesk', sans-serif;\n}\n\nbutton {\n    border: none;\n    padding: 15px 30px;\n}\n\nh1, h3 {\n    font-family: 'Hammersmith One', sans-serif;\n}\n\n\n\n/* Hero Section */\n\nnav {\n    position: absolute;\n    width: 100%;\n\n    display: flex;\n    list-style-type: none;\n    justify-content: space-evenly;\n    padding: 1.5rem 25rem;\n\n    z-index: 1;\n}\n\nnav li {\n    color: white;\n    font-size: 1.125rem;\n    cursor: pointer;\n}\n\n.hero {\n    position: relative;\n\n    /* Animation */\n    transition: opacity 0.25s;\n    opacity: 1;\n}\n\n.hero.fade-out {\n    opacity: 0;\n}\n\n.hero-bg {\n    background-image: url('../assets/hero-img.jpg');\n    height: 100vh;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.hero-bg::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.3); /* Replace this with the color and opacity you desire */\n}\n\n\n.hero-content {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -60%);\n    text-align: center;\n}\n\n.hero-content {\n    color: white;\n}\n\n.hero-h1 {\n    font-family: 'Hammersmith One', sans-serif;\n    font-size: 6rem;\n    font-weight: 400;\n    letter-spacing: 8px;\n    text-transform: uppercase;\n    white-space: nowrap;\n}\n\n.hero-h2 {\n    font-size: 3rem;\n}\n\n/* Body */\n\n.body {\n    background-color: #F5F5EF;\n\n    /* Animation */\n    transition: opacity 0.25s;\n    opacity: 1;\n}\n\n.body.fade-out {\n    opacity: 0;\n}\n\n.body-content {\n    display: flex;\n    padding: 150px;\n}\n\n.body-header {\n    font-size: 3rem;\n    font-weight: 400;\n    line-height: 1;\n    margin-bottom: 30px;\n}\n\n.body-p {\n    width: 80%;\n    margin-bottom: 30px;\n}\n\n.body-btn {\n    background-color: black;\n    color: white;\n}\n\n\n.body-imgs-container {\n    display: flex;\n    gap: 30px;\n}\n\n.body-imgs-container img {\n    width: 200px;\n    height: 410px;\n    object-fit: cover;\n}\n\n/* Feature */\n\n.ftr {\n    background-color: black;\n    color: white;\n\n    /* Animation */\n    transition: opacity 0.25s;\n    opacity: 1;\n}\n\n.ftr.fade-out {\n    opacity: 0;\n}\n\n.ftr-content {\n    padding: 150px;\n    text-align: center;\n}\n\n.ftr-header {\n    font-size: 2.5rem;\n    text-transform: uppercase;\n    font-weight: 400;\n    margin-bottom: 80px;\n}\n\n.ftr-cards {\n    display: flex;\n    justify-content: space-evenly;\n    gap: 30px\n}\n\n.card-icon {\n    width: 60px;\n    margin-bottom: 40px;\n}\n\n.card-header {\n    font-weight: 700;\n    text-transform: uppercase;\n    width: 180px;\n    margin: 0 auto 40px auto;\n}\n\n.card-p {\n    width: 180px;\n    text-align: center;\n}\n\n/* CTA */\n\n.cta {\n    background-color: #F5F5EF;\n    display: flex;\n    gap: 50px;\n    align-items: center;\n    padding: 100px;\n\n    /* Animation */\n    transition: opacity 0.25s;\n    opacity: 1;\n}\n\n.cta.fade-out {\n    opacity: 0;\n}\n\n.cta-left {\n    width: 50%;\n    object-fit: cover;\n    overflow: hidden;\n    \n}\n\n.cta-header {\n    font-size: 2.5rem;\n    text-transform: uppercase;\n    font-weight: 400;\n    margin-bottom: 40px;\n}\n\n.cta-p {\n    font-size: 1.2rem;\n    width: 80%;\n    margin-bottom: 40px;\n}\n\n.cta-btn {\n    background-color: #715128;\n    color: white;\n}\n\n/* MENU */\n\n.menu {\n    transition: opacity 0.25s;\n    opacity: 1;\n}\n\n.menu.fade-out {\n    opacity: 0;\n}\n\n.menu-bg {\n    background-color: black;\n    height: 100%;\n}\n\n.menu-content {\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(8, 5vw);\n    grid-gap: 15px;\n    padding: 100px;\n}\n\n.gallery__img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.gallery__item--1 {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 3;\n}\n\n.gallery__item--2 {\n    grid-column-start: 3;\n    grid-column-end: 5;\n    grid-row-start: 1;\n    grid-row-end: 3;\n}\n\n.gallery__item--3 {\n    grid-column-start: 5;\n    grid-column-end: 9;\n    grid-row-start: 1;\n    grid-row-end: 6;\n}\n\n.gallery__item--4 {\n    grid-column-start: 1;\n    grid-column-end: 5;\n    grid-row-start: 3;\n    grid-row-end: 6;\n}\n\n.gallery__item--5 {\n    grid-column-start: 1;\n    grid-column-end: 5;\n    grid-row-start: 6;\n    grid-row-end: 9;\n}\n\n.gallery__item--6 {\n    grid-column-start: 5;\n    grid-column-end: 9;\n    grid-row-start: 6;\n    grid-row-end: 9;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createElements.js":
/*!*******************************!*\
  !*** ./src/createElements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateElement (elType, elClass, elAttrSet, elAttrValue, elText) {
    const el = document.createElement(elType);
    if (elClass) el.classList.add(elClass)
    if (elAttrSet && elAttrValue) el.setAttribute(elAttrSet, elAttrValue);
    if (elText) el.textContent = elText;
    return el;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateElement);

/***/ }),

/***/ "./src/homeModule.js":
/*!***************************!*\
  !*** ./src/homeModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHome: () => (/* binding */ createHome),
/* harmony export */   wipeHome: () => (/* binding */ wipeHome)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/createElements.js");
/* harmony import */ var _assets_body_img1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/body-img1.jpg */ "./src/assets/body-img1.jpg");
/* harmony import */ var _assets_body_img2_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/body-img2.webp */ "./src/assets/body-img2.webp");
/* harmony import */ var _assets_body_img3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/body-img3.jpg */ "./src/assets/body-img3.jpg");
/* harmony import */ var _assets_ftr_icon1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/ftr-icon1.svg */ "./src/assets/ftr-icon1.svg");
/* harmony import */ var _assets_ftr_icon3_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/ftr-icon3.svg */ "./src/assets/ftr-icon3.svg");
/* harmony import */ var _assets_ftr_icon2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/ftr-icon2.svg */ "./src/assets/ftr-icon2.svg");
/* harmony import */ var _assets_cta_img_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/cta-img.jpg */ "./src/assets/cta-img.jpg");












const hero = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('section', 'hero', 0, 0, 0)
const body = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('section', 'body', 0, 0, 0)
const feature = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('section', 'ftr', 0, 0, 0)
const cta = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('section', 'cta', 0, 0, 0)
const content = document.getElementById('content');


const createHome = () => {

    if (!content.contains(hero)) {
        const createHero = (() => {
            const heroBg = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'hero-bg', 0, 0, 0)
            const heroContent = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'hero-content', 0, 0, 0)
    
            const heroHeader = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', 'hero-h1', 0, 0, 'Filipino Cuisine')
            const heroSub = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'hero-h2', 0, 0, 'A Taste Of')
            const heroBtn = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'hero-btn', 0, 0, 'Order Now')
    
            heroContent.append(heroSub, heroHeader, heroBtn)
            hero.append(heroBg, heroContent)
            content.append(hero)
        })()
    }

    if (!content.contains(body)) {
        const createBody= (() => {
        
            const bodyContent = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'body-content', 0, 0, 0)
            const bodyText = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'body-text', 0, 0, 0)
            const bodyHeader = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', 'body-header', 0, 0, 'Passed Down Through Generations')
            const bodyPara = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('p', 'body-p', 0, 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
            const bodyButton = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'body-btn', 0, 0, 'View Menu')
    
            const bodyImages = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'body-imgs-container', 0, 0, 0)
            const bodyImg1 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'body-img', 'src', _assets_body_img1_jpg__WEBPACK_IMPORTED_MODULE_1__, 0)
            const bodyImg2 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'body-img', 'src', _assets_body_img2_webp__WEBPACK_IMPORTED_MODULE_2__, 0)
            const bodyImg3 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'body-img', 'src', _assets_body_img3_jpg__WEBPACK_IMPORTED_MODULE_3__, 0)
    
    
            bodyText.append(bodyHeader, bodyPara, bodyButton)
            bodyImages.append(bodyImg1, bodyImg2, bodyImg3)
            bodyContent.append(bodyText, bodyImages)
            body.append(bodyContent)
            content.append(body)
        })()
    }

    if (!content.contains(feature)) {
        const createFeature = (() => {
        
            const featureContent = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'ftr-content', 0, 0, 0)
            
            const featureHeader = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', 'ftr-header', 0, 0, 'Flavored With Love.')
            const featureCards = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'ftr-cards', 0, 0, 0)
    
            const card1 = createCard(_assets_ftr_icon1_svg__WEBPACK_IMPORTED_MODULE_4__, 'Prepped by Talented, Professional Chefs', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
            const card2 = createCard(_assets_ftr_icon3_svg__WEBPACK_IMPORTED_MODULE_5__, 'Fresh from our Trusted Farms', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
            const card3 = createCard(_assets_ftr_icon2_svg__WEBPACK_IMPORTED_MODULE_6__, 'Served with the Finest Touch', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
    
            function createCard (icon, heading, paragraph) {
                const card = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'ftr-card', 0, 0, 0)
    
                const cardIcon = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'card-icon', 'src', icon, 0)
                const cardHeader = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('h4', 'card-header', 0, 0, heading)
                const cardBody = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('p', 'card-p', 0, 0, paragraph)
    
                card.append(cardIcon, cardHeader, cardBody)
    
                return card
            }
    
            featureCards.append(card1, card2, card3)
            featureContent.append(featureHeader, featureCards)
            feature.append(featureContent)
            content.append(feature)
        })()
    }
    
    
    if (!content.contains(cta)) {
        const createCTA = (() => {
        
            const ctaLeft = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'cta-left', 0, 0 ,0)
            const ctaRight = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'cta-right', 0, 0 ,0)
    
            const ctaImg = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'cta-img', 'src', _assets_cta_img_jpg__WEBPACK_IMPORTED_MODULE_7__, 0)
    
            const ctaHeader = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', 'cta-header', 0, 0, 'Send a Message')
            const ctaBody = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('p', 'cta-p', 0, 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
            const ctaBtn = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'cta-btn', 0, 0, 'Contact Us')
    
            ctaLeft.append(ctaImg)
            ctaRight.append(ctaHeader, ctaBody, ctaBtn)
            cta.append(ctaLeft, ctaRight)
            content.append(cta)
        })()
    }
    
    const elements = [hero, body, feature, cta]

    elements.forEach((element) => {
        if (element.classList.contains('fade-out')) {
            console.log(`${element} has classlist`)
            element.classList.remove('fade-out')
        }
    })
}

const wipeHome = () => {
    const elements = [hero, body, feature, cta]

    elements.forEach((element) => {
        element.classList.add('fade-out') 
    })

    setTimeout(() => {
        elements.forEach((element) => {
            const childElements = element.querySelectorAll('*');

            childElements.forEach((child) => {
                child.remove();
            })
            
            element.remove()  
        })
    }, 250)
}



/***/ }),

/***/ "./src/menuModule.js":
/*!***************************!*\
  !*** ./src/menuModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenu: () => (/* binding */ createMenu),
/* harmony export */   wipeMenu: () => (/* binding */ wipeMenu)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/createElements.js");
/* harmony import */ var _assets_menu_img1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/menu-img1.webp */ "./src/assets/menu-img1.webp");
/* harmony import */ var _assets_menu_img2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/menu-img2.jpg */ "./src/assets/menu-img2.jpg");
/* harmony import */ var _assets_menu_img3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/menu-img3.jpg */ "./src/assets/menu-img3.jpg");
/* harmony import */ var _assets_menu_img4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/menu-img4.jpg */ "./src/assets/menu-img4.jpg");
/* harmony import */ var _assets_menu_img5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/menu-img5.jpg */ "./src/assets/menu-img5.jpg");
/* harmony import */ var _assets_menu_img6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/menu-img6.jpg */ "./src/assets/menu-img6.jpg");










const menu = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('section', 'menu', 0, 0, 0)
const content = document.getElementById('content');

const createMenu = () => {

    const menuGrid = (() => {
        const menuBg = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'menu-bg', 0, 0, 0)
        const menuContent = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'menu-content', 0, 0, 0)

        const item1 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('figure', 'gallery__item--1', 0,0,0)
        const img1 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'gallery__img', 'src', _assets_menu_img1_webp__WEBPACK_IMPORTED_MODULE_1__, 0)
        item1.append(img1)

        const item2 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('figure', 'gallery__item--2', 0,0,0)
        const img2 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'gallery__img', 'src', _assets_menu_img2_jpg__WEBPACK_IMPORTED_MODULE_2__, 0)
        item2.append(img2)

        const item3 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('figure', 'gallery__item--3', 0,0,0)
        const img3 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'gallery__img', 'src', _assets_menu_img3_jpg__WEBPACK_IMPORTED_MODULE_3__, 0)
        item3.append(img3)
        
        const item4 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('figure', 'gallery__item--4', 0,0,0)
        const img4 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'gallery__img', 'src', _assets_menu_img4_jpg__WEBPACK_IMPORTED_MODULE_4__, 0)
        item4.append(img4)

        const item5 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('figure', 'gallery__item--5', 0,0,0)
        const img5 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'gallery__img', 'src', _assets_menu_img5_jpg__WEBPACK_IMPORTED_MODULE_5__, 0)
        item5.append(img5)

        const item6 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('figure', 'gallery__item--6', 0,0,0)
        const img6 = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('img', 'gallery__img', 'src', _assets_menu_img6_jpg__WEBPACK_IMPORTED_MODULE_6__, 0)
        item6.append(img6)


        menuContent.append(item1, item2, item3, item4, item5, item6)
        menuBg.append(menuContent)
        menu.append(menuBg)
        content.append(menu)
    })()

    const elements = [menu]

    elements.forEach((element) => {
        if (element.classList.contains('fade-out')) {
            console.log(`${element} has classlist`)
            element.classList.remove('fade-out')
        }
    })
}

const wipeMenu = () => {
    const elements = [menu]

    elements.forEach((element) => {
        element.classList.add('fade-out') 
    })

    setTimeout(() => {
        elements.forEach((element) => {
            const childElements = element.querySelectorAll('*');

            childElements.forEach((child) => {
                child.remove();
            })
            
            element.remove()  
        })
    }, 250)
}



/***/ }),

/***/ "./src/assets/body-img1.jpg":
/*!**********************************!*\
  !*** ./src/assets/body-img1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "body-img1.jpg";

/***/ }),

/***/ "./src/assets/body-img2.webp":
/*!***********************************!*\
  !*** ./src/assets/body-img2.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "body-img2.webp";

/***/ }),

/***/ "./src/assets/body-img3.jpg":
/*!**********************************!*\
  !*** ./src/assets/body-img3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "body-img3.jpg";

/***/ }),

/***/ "./src/assets/cta-img.jpg":
/*!********************************!*\
  !*** ./src/assets/cta-img.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cta-img.jpg";

/***/ }),

/***/ "./src/assets/ftr-icon1.svg":
/*!**********************************!*\
  !*** ./src/assets/ftr-icon1.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ftr-icon1.svg";

/***/ }),

/***/ "./src/assets/ftr-icon2.svg":
/*!**********************************!*\
  !*** ./src/assets/ftr-icon2.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ftr-icon2.svg";

/***/ }),

/***/ "./src/assets/ftr-icon3.svg":
/*!**********************************!*\
  !*** ./src/assets/ftr-icon3.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ftr-icon3.svg";

/***/ }),

/***/ "./src/assets/hero-img.jpg":
/*!*********************************!*\
  !*** ./src/assets/hero-img.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hero-img.jpg";

/***/ }),

/***/ "./src/assets/menu-img1.webp":
/*!***********************************!*\
  !*** ./src/assets/menu-img1.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu-img1.webp";

/***/ }),

/***/ "./src/assets/menu-img2.jpg":
/*!**********************************!*\
  !*** ./src/assets/menu-img2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu-img2.jpg";

/***/ }),

/***/ "./src/assets/menu-img3.jpg":
/*!**********************************!*\
  !*** ./src/assets/menu-img3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu-img3.jpg";

/***/ }),

/***/ "./src/assets/menu-img4.jpg":
/*!**********************************!*\
  !*** ./src/assets/menu-img4.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu-img4.jpg";

/***/ }),

/***/ "./src/assets/menu-img5.jpg":
/*!**********************************!*\
  !*** ./src/assets/menu-img5.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu-img5.jpg";

/***/ }),

/***/ "./src/assets/menu-img6.jpg":
/*!**********************************!*\
  !*** ./src/assets/menu-img6.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu-img6.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/createElements.js");
/* harmony import */ var _homeModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeModule */ "./src/homeModule.js");
/* harmony import */ var _menuModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuModule */ "./src/menuModule.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");







const content = document.getElementById('content');

let state = 'home';

const createNav = (() => {

    const nav = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('nav', 'navbar', 0, 0, 0);
    const navHome = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'nav-home', 0, 0, 'Home')
    const navMenu = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'nav-menu', 0, 0, 'Menu')
    const navCtn = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'nav-ctn', 0, 0, 'Contact')


    navHome.addEventListener('click', (e) => {
        if (state === 'menu') {
            (0,_menuModule__WEBPACK_IMPORTED_MODULE_2__.wipeMenu)()
            ;(0,_homeModule__WEBPACK_IMPORTED_MODULE_1__.createHome)()
            state = 'home'
            
        }
    })

    navMenu.addEventListener('click', (e) => {
        if (state === 'home') {
            (0,_homeModule__WEBPACK_IMPORTED_MODULE_1__.wipeHome)()
            ;(0,_menuModule__WEBPACK_IMPORTED_MODULE_2__.createMenu)()
            state = 'menu'
        }
    })

    nav.append(navHome, navMenu, navCtn)
    content.appendChild(nav)

    ;(0,_homeModule__WEBPACK_IMPORTED_MODULE_1__.createHome)()

})();




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map