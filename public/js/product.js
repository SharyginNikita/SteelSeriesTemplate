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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/product.js":
/*!***************************!*\
  !*** ./src/js/product.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Product =\n/*#__PURE__*/\nfunction () {\n  function Product() {\n    _classCallCheck(this, Product);\n\n    var productItems = document.querySelectorAll('.product-item');\n    var clientWidth = document.documentElement.clientWidth;\n    this._productItems = productItems;\n    this._clientWidth = clientWidth;\n  }\n\n  _createClass(Product, [{\n    key: \"addShowHide\",\n    value: function addShowHide() {\n      var _this = this;\n\n      if (this._productItems) {\n        this._productItems[0].classList.add('product-item_active');\n\n        var itemWrap = this._productItems[0].querySelector('.product-item__wrapper');\n\n        if (itemWrap.style.height == '0px' || itemWrap.style.height == 0) {\n          itemWrap.style.height = itemWrap.scrollHeight + 'px';\n\n          if (this._clientWidth <= 676) {\n            itemWrap.style.margin = '25px 0 20px 0';\n          } else {\n            itemWrap.style.margin = '25px 0 120px 0';\n          }\n        } else {\n          itemWrap.style.height = '0px';\n          itemWrap.style.margin = '0px';\n        }\n\n        this._productItems.forEach(function (item) {\n          var itemTitle = item.querySelector('.product-item__row');\n          var itemWrap = item.querySelector('.product-item__wrapper');\n          itemTitle.addEventListener('click', function (event) {\n            item.classList.toggle('product-item_active');\n\n            if (itemWrap) {\n              event.preventDefault();\n              item.addEventListener('click', function (event) {\n                event.stopPropagation();\n              });\n\n              if (itemWrap.style.height == '0px' || itemWrap.style.height == 0) {\n                itemWrap.style.height = itemWrap.scrollHeight + 'px';\n\n                if (_this._clientWidth <= 676) {\n                  itemWrap.style.margin = '25px 0 20px 0';\n                } else {\n                  itemWrap.style.margin = '25px 0 120px 0';\n                }\n              } else {\n                itemWrap.style.height = '0px';\n                itemWrap.style.margin = '0px';\n              }\n            }\n          });\n        });\n      }\n    }\n  }]);\n\n  return Product;\n}();\n\nnew Product().addShowHide();\n\n//# sourceURL=webpack:///./src/js/product.js?");

/***/ }),

/***/ 2:
/*!*********************************!*\
  !*** multi ./src/js/product.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! G:\\project\\SteelSeriesTemplate\\src\\js\\product.js */\"./src/js/product.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/product.js?");

/***/ })

/******/ });