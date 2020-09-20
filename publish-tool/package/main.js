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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/createElement.js":
/*!******************************!*\
  !*** ./lib/createElement.js ***!
  \******************************/
/*! exports provided: createElement, Text, Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var _gesture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gesture */ "./lib/gesture.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function createElement(Cls, attributes) {
  var o;

  if (typeof Cls === 'string') {
    o = new Wrapper(Cls);
  } else {
    o = new Cls({
      timer: {}
    });
  }

  for (var name in attributes) {
    o.setAttribute(name, attributes[name]);
  }

  var visit = function visit(children) {
    var _iterator = _createForOfIteratorHelper(children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;

        if (_typeof(child) === 'object' && child instanceof Array) {
          visit(child);
          continue;
        }

        if (typeof child === 'string') child = new Text(child);
        o.appendChild(child);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  visit(children);
  return o;
}
var Text = /*#__PURE__*/function () {
  function Text(text) {
    _classCallCheck(this, Text);

    this.children = [];
    this.root = document.createTextNode(text);
  }

  _createClass(Text, [{
    key: "mountTo",
    value: function mountTo(parent) {
      parent.appendChild(this.root);
    }
  }]);

  return Text;
}();
var Wrapper = /*#__PURE__*/function () {
  function Wrapper(type) {
    _classCallCheck(this, Wrapper);

    this.children = [];
    this.root = document.createElement(type);
  }

  _createClass(Wrapper, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.root.setAttribute(name, value);

      if (name.match(/^on([\s\S]+)$/)) {
        var eventName = RegExp.$1.replace(/^[\s\S]/, function (c) {
          return c.toLocaleLowerCase();
        });
        this.addEventListener(eventName, value);
      }

      if (name === "enableGesture") {
        Object(_gesture__WEBPACK_IMPORTED_MODULE_0__["enableGesture"])(this.root);
      }
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      return this.root.getAttribute(name);
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      this.children.push(child);
    }
  }, {
    key: "addEventListener",
    value: function addEventListener() {
      var _this$root;

      (_this$root = this.root).addEventListener.apply(_this$root, arguments);
    }
  }, {
    key: "mountTo",
    value: function mountTo(parent) {
      parent.appendChild(this.root);

      var _iterator2 = _createForOfIteratorHelper(this.children),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;
          child.mountTo(this.root);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "style",
    get: function get() {
      return this.root.style;
    }
  }, {
    key: "classList",
    get: function get() {
      return this.root.classList;
    }
  }, {
    key: "innerText",
    set: function set(text) {
      return this.root.innerText = text;
    }
  }]);

  return Wrapper;
}();

/***/ }),

/***/ "./lib/gesture.js":
/*!************************!*\
  !*** ./lib/gesture.js ***!
  \************************/
/*! exports provided: enableGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableGesture", function() { return enableGesture; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function enableGesture(element) {
  var contexts = Object.create(null);
  var MOUSE_SYMBOL = Symbol("mouse");
  if (document.ontouchstart !== null) // 判断是pc还是手机模式，手机模式为null
    element.addEventListener("mousedown", function (event) {
      contexts[MOUSE_SYMBOL] = Object.create(null);
      start(event, contexts[MOUSE_SYMBOL]);

      var mousemove = function mousemove(event) {
        move(event, contexts[MOUSE_SYMBOL]);
      };

      var mouseend = function mouseend(event) {
        end(event, contexts[MOUSE_SYMBOL]);
        document.removeEventListener("mousemove", mousemove);
        document.removeEventListener("mouseup", mouseend);
      };

      document.addEventListener("mousemove", mousemove);
      document.addEventListener("mouseup", mouseend);
    });
  element.addEventListener("touchstart", function (event) {
    var _iterator = _createForOfIteratorHelper(event.changedTouches),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var touch = _step.value;
        contexts[touch.identifier] = Object.create(null);
        start(touch, contexts[touch.identifier]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  element.addEventListener("touchmove", function (event) {
    var _iterator2 = _createForOfIteratorHelper(event.changedTouches),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var touch = _step2.value;
        move(touch, contexts[touch.identifier]);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  element.addEventListener("touchend", function (event) {
    var _iterator3 = _createForOfIteratorHelper(event.changedTouches),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var touch = _step3.value;
        end(touch, contexts[touch.identifier]);
        delete contexts[touch.identifier];
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  });
  element.addEventListener("touchcancel", function (event) {
    var _iterator4 = _createForOfIteratorHelper(event.changedTouches),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var touch = _step4.value;
        cancel(touch, contexts[touch.identifier]);
        delete contexts[touch.identifier];
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }); //tap
  //pan - panstart panmove panend
  //flick
  //press - pressstart pressend

  var start = function start(point, context) {
    element.dispatchEvent(new CustomEvent("start", {
      startX: point.clientX,
      startY: point.clientY,
      clientX: point.clientX,
      clientY: point.clientY
    }));
    context.startX = point.clientX, context.startY = point.clientY;
    context.moves = [];
    context.isTap = true;
    context.isPan = false;
    context.isPress = false;
    context.timeoutHandler = setTimeout(function () {
      if (context.isPan) return;
      context.isTap = false;
      context.isPan = false;
      context.isPress = true;
      element.dispatchEvent(new CustomEvent("pressstart", {}));
    }, 500);
  };

  var move = function move(point, context) {
    var dx = point.clientX - context.startX,
        dy = point.clientY - context.startY;

    if (Math.pow(dx, 2) + Math.pow(dy, 2) > 100 && !context.isPan) {
      if (context.isPress) element.dispatchEvent(new CustomEvent("presscancel", {}));
      context.isTap = false;
      context.isPan = true;
      context.isPress = false;
      element.dispatchEvent(new CustomEvent("panstart", {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY
      }));
    }

    context.moves = context.moves.filter(function (record) {
      return Date.now() - record.t < 300;
    });

    if (context.isPan) {
      context.moves.push({
        dx: dx,
        dy: dy,
        t: Date.now()
      });
      var e = new CustomEvent("pan");
      Object.assign(e, {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY
      });
      element.dispatchEvent(e);
    } // console.log("move", dx, dy)

  };

  var end = function end(point, context) {
    if (context.isPan) {
      var dx = point.clientX - context.startX,
          dy = point.clientY - context.startY; // console.log(context.moves);

      var record = context.moves[0];
      var speed = Math.sqrt(Math.pow(record.dx - dx, 2) + Math.pow(record.dy - dy, 2)) / (Date.now() - record.t); // console.log(speed);

      var isFlick = speed > 2.5;

      if (isFlick) {
        element.dispatchEvent(new CustomEvent("flick", {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          speed: speed
        }));
      }

      element.dispatchEvent(Object.assign(new CustomEvent("panend"), {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        speed: speed,
        isFlick: isFlick
      }));
    }

    if (context.isTap) {
      element.dispatchEvent(new CustomEvent("tap", {}));
    }

    if (context.isPress) element.dispatchEvent(new CustomEvent("pressend", {}));
    clearTimeout(context.timeoutHandler);
  };

  var cancel = function cancel(point, context) {
    element.dispatchEvent(new CustomEvent("canceled", {}));
    clearTimeout(context.timeoutHandler);
  };
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/createElement */ "./lib/createElement.js");
function cov_r7ybdf4qm() {
  var path = "E:\\\u8BAD\u7EC3\u8425\\demo\\src\\main.js";
  var hash = "9323b55ea2f18b51c9bf209a0f085aead40226f9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "E:\\\u8BAD\u7EC3\u8425\\demo\\src\\main.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 16
        },
        end: {
          line: 4,
          column: 39
        }
      },
      "1": {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 6,
          column: 32
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9323b55ea2f18b51c9bf209a0f085aead40226f9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_r7ybdf4qm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_r7ybdf4qm();

var component = (cov_r7ybdf4qm().s[0]++, Object(_lib_createElement__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Hello World!"));
cov_r7ybdf4qm().s[1]++;
component.mountTo(document.body);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map