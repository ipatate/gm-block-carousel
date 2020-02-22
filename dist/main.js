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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/fast-memoize/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/fast-memoize/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//
// Main
//

function memoize (fn, options) {
  var cache = options && options.cache
    ? options.cache
    : cacheDefault

  var serializer = options && options.serializer
    ? options.serializer
    : serializerDefault

  var strategy = options && options.strategy
    ? options.strategy
    : strategyDefault

  return strategy(fn, {
    cache: cache,
    serializer: serializer
  })
}

//
// Strategy
//

function isPrimitive (value) {
  return value == null || typeof value === 'number' || typeof value === 'boolean' // || typeof value === "string" 'unsafe' primitive for our needs
}

function monadic (fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg)

  var computedValue = cache.get(cacheKey)
  if (typeof computedValue === 'undefined') {
    computedValue = fn.call(this, arg)
    cache.set(cacheKey, computedValue)
  }

  return computedValue
}

function variadic (fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3)
  var cacheKey = serializer(args)

  var computedValue = cache.get(cacheKey)
  if (typeof computedValue === 'undefined') {
    computedValue = fn.apply(this, args)
    cache.set(cacheKey, computedValue)
  }

  return computedValue
}

function assemble (fn, context, strategy, cache, serialize) {
  return strategy.bind(
    context,
    fn,
    cache,
    serialize
  )
}

function strategyDefault (fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyVariadic (fn, options) {
  var strategy = variadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyMonadic (fn, options) {
  var strategy = monadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

//
// Serializer
//

function serializerDefault () {
  return JSON.stringify(arguments)
}

//
// Cache
//

function ObjectWithoutPrototypeCache () {
  this.cache = Object.create(null)
}

ObjectWithoutPrototypeCache.prototype.has = function (key) {
  return (key in this.cache)
}

ObjectWithoutPrototypeCache.prototype.get = function (key) {
  return this.cache[key]
}

ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
  this.cache[key] = value
}

var cacheDefault = {
  create: function create () {
    return new ObjectWithoutPrototypeCache()
  }
}

//
// API
//

module.exports = memoize
module.exports.strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
}


/***/ }),

/***/ "./node_modules/re-resizable/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/re-resizable/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "react"));
var resizer_1 = __webpack_require__(/*! ./resizer */ "./node_modules/re-resizable/lib/resizer.js");
var fast_memoize_1 = __importDefault(__webpack_require__(/*! fast-memoize */ "./node_modules/fast-memoize/src/index.js"));
var DEFAULT_SIZE = {
    width: 'auto',
    height: 'auto',
};
var clamp = fast_memoize_1.default(function (n, min, max) { return Math.max(Math.min(n, max), min); });
var snap = fast_memoize_1.default(function (n, size) { return Math.round(n / size) * size; });
var hasDirection = fast_memoize_1.default(function (dir, target) {
    return new RegExp(dir, 'i').test(target);
});
var findClosestSnap = fast_memoize_1.default(function (n, snapArray, snapGap) {
    if (snapGap === void 0) { snapGap = 0; }
    var closestGapIndex = snapArray.reduce(function (prev, curr, index) { return (Math.abs(curr - n) < Math.abs(snapArray[prev] - n) ? index : prev); }, 0);
    var gap = Math.abs(snapArray[closestGapIndex] - n);
    return snapGap === 0 || gap < snapGap ? snapArray[closestGapIndex] : n;
});
var endsWith = fast_memoize_1.default(function (str, searchStr) {
    return str.substr(str.length - searchStr.length, searchStr.length) === searchStr;
});
var getStringSize = fast_memoize_1.default(function (n) {
    n = n.toString();
    if (n === 'auto') {
        return n;
    }
    if (endsWith(n, 'px')) {
        return n;
    }
    if (endsWith(n, '%')) {
        return n;
    }
    if (endsWith(n, 'vh')) {
        return n;
    }
    if (endsWith(n, 'vw')) {
        return n;
    }
    if (endsWith(n, 'vmax')) {
        return n;
    }
    if (endsWith(n, 'vmin')) {
        return n;
    }
    return n + "px";
});
var getPixelSize = function (size, parentSize) {
    if (size && typeof size === 'string') {
        if (endsWith(size, '%')) {
            var ratio = Number(size.replace('%', '')) / 100;
            return parentSize * ratio;
        }
        else if (endsWith(size, 'vw')) {
            var ratio = Number(size.replace('vw', '')) / 100;
            return window.innerWidth * ratio;
        }
        else if (endsWith(size, 'vh')) {
            var ratio = Number(size.replace('vh', '')) / 100;
            return window.innerHeight * ratio;
        }
    }
    return size;
};
var calculateNewMax = fast_memoize_1.default(function (parentSize, maxWidth, maxHeight, minWidth, minHeight) {
    maxWidth = getPixelSize(maxWidth, parentSize.width);
    maxHeight = getPixelSize(maxHeight, parentSize.height);
    minWidth = getPixelSize(minWidth, parentSize.width);
    minHeight = getPixelSize(minHeight, parentSize.height);
    return {
        maxWidth: typeof maxWidth === 'undefined' ? undefined : Number(maxWidth),
        maxHeight: typeof maxHeight === 'undefined' ? undefined : Number(maxHeight),
        minWidth: typeof minWidth === 'undefined' ? undefined : Number(minWidth),
        minHeight: typeof minHeight === 'undefined' ? undefined : Number(minHeight),
    };
});
var definedProps = [
    'style',
    'className',
    'grid',
    'snap',
    'bounds',
    'size',
    'defaultSize',
    'minWidth',
    'minHeight',
    'maxWidth',
    'maxHeight',
    'lockAspectRatio',
    'lockAspectRatioExtraWidth',
    'lockAspectRatioExtraHeight',
    'enable',
    'handleStyles',
    'handleClasses',
    'handleWrapperStyle',
    'handleWrapperClass',
    'children',
    'onResizeStart',
    'onResize',
    'onResizeStop',
    'handleComponent',
    'scale',
    'resizeRatio',
    'snapGap',
];
// HACK: This class is used to calculate % size.
var baseClassName = '__resizable_base__';
var Resizable = /** @class */ (function (_super) {
    __extends(Resizable, _super);
    function Resizable(props) {
        var _this = _super.call(this, props) || this;
        _this.ratio = 1;
        _this.resizable = null;
        // For parent boundary
        _this.parentLeft = 0;
        _this.parentTop = 0;
        // For boundary
        _this.resizableLeft = 0;
        _this.resizableTop = 0;
        // For target boundary
        _this.targetLeft = 0;
        _this.targetTop = 0;
        _this.ref = function (c) {
            if (c) {
                _this.resizable = c;
            }
        };
        _this.state = {
            isResizing: false,
            width: typeof (_this.propsSize && _this.propsSize.width) === 'undefined'
                ? 'auto'
                : _this.propsSize && _this.propsSize.width,
            height: typeof (_this.propsSize && _this.propsSize.height) === 'undefined'
                ? 'auto'
                : _this.propsSize && _this.propsSize.height,
            direction: 'right',
            original: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
            backgroundStyle: {
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0)',
                cursor: 'auto',
                opacity: 0,
                position: 'fixed',
                zIndex: 9999,
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
            },
        };
        _this.onResizeStart = _this.onResizeStart.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        return _this;
    }
    Object.defineProperty(Resizable.prototype, "parentNode", {
        get: function () {
            if (!this.resizable) {
                return null;
            }
            return this.resizable.parentNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "propsSize", {
        get: function () {
            return this.props.size || this.props.defaultSize || DEFAULT_SIZE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "base", {
        get: function () {
            var parent = this.parentNode;
            if (!parent) {
                return undefined;
            }
            var children = [].slice.call(parent.children);
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var n = children_1[_i];
                if (n instanceof HTMLElement) {
                    if (n.classList.contains(baseClassName)) {
                        return n;
                    }
                }
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "size", {
        get: function () {
            var width = 0;
            var height = 0;
            if (typeof window !== 'undefined' && this.resizable) {
                var orgWidth = this.resizable.offsetWidth;
                var orgHeight = this.resizable.offsetHeight;
                // HACK: Set position `relative` to get parent size.
                //       This is because when re-resizable set `absolute`, I can not get base width correctly.
                var orgPosition = this.resizable.style.position;
                if (orgPosition !== 'relative') {
                    this.resizable.style.position = 'relative';
                }
                // INFO: Use original width or height if set auto.
                width = this.resizable.style.width !== 'auto' ? this.resizable.offsetWidth : orgWidth;
                height = this.resizable.style.height !== 'auto' ? this.resizable.offsetHeight : orgHeight;
                // Restore original position
                this.resizable.style.position = orgPosition;
            }
            return { width: width, height: height };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "sizeStyle", {
        get: function () {
            var _this = this;
            var size = this.props.size;
            var getSize = function (key) {
                if (typeof _this.state[key] === 'undefined' || _this.state[key] === 'auto') {
                    return 'auto';
                }
                if (_this.propsSize && _this.propsSize[key] && endsWith(_this.propsSize[key].toString(), '%')) {
                    if (endsWith(_this.state[key].toString(), '%')) {
                        return _this.state[key].toString();
                    }
                    var parentSize = _this.getParentSize();
                    var value = Number(_this.state[key].toString().replace('px', ''));
                    var percent = (value / parentSize[key]) * 100;
                    return percent + "%";
                }
                return getStringSize(_this.state[key]);
            };
            var width = size && typeof size.width !== 'undefined' && !this.state.isResizing
                ? getStringSize(size.width)
                : getSize('width');
            var height = size && typeof size.height !== 'undefined' && !this.state.isResizing
                ? getStringSize(size.height)
                : getSize('height');
            return { width: width, height: height };
        },
        enumerable: true,
        configurable: true
    });
    Resizable.prototype.getParentSize = function () {
        if (!this.base || !this.parentNode) {
            return { width: window.innerWidth, height: window.innerHeight };
        }
        // INFO: To calculate parent width with flex layout
        var wrapChanged = false;
        var wrap = this.parentNode.style.flexWrap;
        var minWidth = this.base.style.minWidth;
        if (wrap !== 'wrap') {
            wrapChanged = true;
            this.parentNode.style.flexWrap = 'wrap';
            // HACK: Use relative to get parent padding size
        }
        this.base.style.position = 'relative';
        this.base.style.minWidth = '100%';
        var size = {
            width: this.base.offsetWidth,
            height: this.base.offsetHeight,
        };
        this.base.style.position = 'absolute';
        if (wrapChanged) {
            this.parentNode.style.flexWrap = wrap;
        }
        this.base.style.minWidth = minWidth;
        return size;
    };
    Resizable.prototype.bindEvents = function () {
        if (typeof window !== 'undefined') {
            window.addEventListener('mouseup', this.onMouseUp);
            window.addEventListener('mousemove', this.onMouseMove);
            window.addEventListener('mouseleave', this.onMouseUp);
            window.addEventListener('touchmove', this.onMouseMove);
            window.addEventListener('touchend', this.onMouseUp);
        }
    };
    Resizable.prototype.unbindEvents = function () {
        if (typeof window !== 'undefined') {
            window.removeEventListener('mouseup', this.onMouseUp);
            window.removeEventListener('mousemove', this.onMouseMove);
            window.removeEventListener('mouseleave', this.onMouseUp);
            window.removeEventListener('touchmove', this.onMouseMove);
            window.removeEventListener('touchend', this.onMouseUp);
        }
    };
    Resizable.prototype.componentDidMount = function () {
        if (!this.resizable) {
            return;
        }
        var computedStyle = window.getComputedStyle(this.resizable);
        this.setState({
            width: this.state.width || this.size.width,
            height: this.state.height || this.size.height,
            flexBasis: computedStyle.flexBasis !== 'auto' ? computedStyle.flexBasis : undefined,
        });
        var parent = this.parentNode;
        if (!(parent instanceof HTMLElement)) {
            return;
        }
        if (this.base) {
            return;
        }
        var element = document.createElement('div');
        element.style.width = '100%';
        element.style.height = '100%';
        element.style.position = 'absolute';
        element.style.transform = 'scale(0, 0)';
        element.style.left = '0';
        element.style.flex = '0';
        if (element.classList) {
            element.classList.add(baseClassName);
        }
        else {
            element.className += baseClassName;
        }
        parent.appendChild(element);
    };
    Resizable.prototype.componentWillUnmount = function () {
        if (typeof window !== 'undefined') {
            this.unbindEvents();
            var parent_1 = this.parentNode;
            if (!this.base || !parent_1) {
                return;
            }
            if (!(parent_1 instanceof HTMLElement) || !(this.base instanceof Node)) {
                return;
            }
            parent_1.removeChild(this.base);
        }
    };
    Resizable.prototype.createSizeForCssProperty = function (newSize, kind) {
        var propsSize = this.propsSize && this.propsSize[kind];
        return this.state[kind] === 'auto' &&
            this.state.original[kind] === newSize &&
            (typeof propsSize === 'undefined' || propsSize === 'auto')
            ? 'auto'
            : newSize;
    };
    Resizable.prototype.calculateNewMaxFromBoundary = function (maxWidth, maxHeight) {
        if (this.props.bounds === 'parent') {
            var parent_2 = this.parentNode;
            if (parent_2 instanceof HTMLElement) {
                var boundWidth = parent_2.offsetWidth + (this.parentLeft - this.resizableLeft);
                var boundHeight = parent_2.offsetHeight + (this.parentTop - this.resizableTop);
                maxWidth = maxWidth && maxWidth < boundWidth ? maxWidth : boundWidth;
                maxHeight = maxHeight && maxHeight < boundHeight ? maxHeight : boundHeight;
            }
        }
        else if (this.props.bounds === 'window') {
            if (typeof window !== 'undefined') {
                var boundWidth = window.innerWidth - this.resizableLeft;
                var boundHeight = window.innerHeight - this.resizableTop;
                maxWidth = maxWidth && maxWidth < boundWidth ? maxWidth : boundWidth;
                maxHeight = maxHeight && maxHeight < boundHeight ? maxHeight : boundHeight;
            }
        }
        else if (this.props.bounds instanceof HTMLElement) {
            var boundWidth = this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft);
            var boundHeight = this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop);
            maxWidth = maxWidth && maxWidth < boundWidth ? maxWidth : boundWidth;
            maxHeight = maxHeight && maxHeight < boundHeight ? maxHeight : boundHeight;
        }
        return { maxWidth: maxWidth, maxHeight: maxHeight };
    };
    Resizable.prototype.calculateNewSizeFromDirection = function (clientX, clientY) {
        var scale = this.props.scale || 1;
        var resizeRatio = this.props.resizeRatio || 1;
        var _a = this.state, direction = _a.direction, original = _a.original;
        var _b = this.props, lockAspectRatio = _b.lockAspectRatio, lockAspectRatioExtraHeight = _b.lockAspectRatioExtraHeight, lockAspectRatioExtraWidth = _b.lockAspectRatioExtraWidth;
        var newWidth = original.width;
        var newHeight = original.height;
        var extraHeight = lockAspectRatioExtraHeight || 0;
        var extraWidth = lockAspectRatioExtraWidth || 0;
        if (hasDirection('right', direction)) {
            newWidth = original.width + ((clientX - original.x) * resizeRatio) / scale;
            if (lockAspectRatio) {
                newHeight = (newWidth - extraWidth) / this.ratio + extraHeight;
            }
        }
        if (hasDirection('left', direction)) {
            newWidth = original.width - ((clientX - original.x) * resizeRatio) / scale;
            if (lockAspectRatio) {
                newHeight = (newWidth - extraWidth) / this.ratio + extraHeight;
            }
        }
        if (hasDirection('bottom', direction)) {
            newHeight = original.height + ((clientY - original.y) * resizeRatio) / scale;
            if (lockAspectRatio) {
                newWidth = (newHeight - extraHeight) * this.ratio + extraWidth;
            }
        }
        if (hasDirection('top', direction)) {
            newHeight = original.height - ((clientY - original.y) * resizeRatio) / scale;
            if (lockAspectRatio) {
                newWidth = (newHeight - extraHeight) * this.ratio + extraWidth;
            }
        }
        return { newWidth: newWidth, newHeight: newHeight };
    };
    Resizable.prototype.calculateNewSizeFromAspectRatio = function (newWidth, newHeight, max, min) {
        var _a = this.props, lockAspectRatio = _a.lockAspectRatio, lockAspectRatioExtraHeight = _a.lockAspectRatioExtraHeight, lockAspectRatioExtraWidth = _a.lockAspectRatioExtraWidth;
        var computedMinWidth = typeof min.width === 'undefined' ? 10 : min.width;
        var computedMaxWidth = typeof max.width === 'undefined' || max.width < 0 ? newWidth : max.width;
        var computedMinHeight = typeof min.height === 'undefined' ? 10 : min.height;
        var computedMaxHeight = typeof max.height === 'undefined' || max.height < 0 ? newHeight : max.height;
        var extraHeight = lockAspectRatioExtraHeight || 0;
        var extraWidth = lockAspectRatioExtraWidth || 0;
        if (lockAspectRatio) {
            var extraMinWidth = (computedMinHeight - extraHeight) * this.ratio + extraWidth;
            var extraMaxWidth = (computedMaxHeight - extraHeight) * this.ratio + extraWidth;
            var extraMinHeight = (computedMinWidth - extraWidth) / this.ratio + extraHeight;
            var extraMaxHeight = (computedMaxWidth - extraWidth) / this.ratio + extraHeight;
            var lockedMinWidth = Math.max(computedMinWidth, extraMinWidth);
            var lockedMaxWidth = Math.min(computedMaxWidth, extraMaxWidth);
            var lockedMinHeight = Math.max(computedMinHeight, extraMinHeight);
            var lockedMaxHeight = Math.min(computedMaxHeight, extraMaxHeight);
            newWidth = clamp(newWidth, lockedMinWidth, lockedMaxWidth);
            newHeight = clamp(newHeight, lockedMinHeight, lockedMaxHeight);
        }
        else {
            newWidth = clamp(newWidth, computedMinWidth, computedMaxWidth);
            newHeight = clamp(newHeight, computedMinHeight, computedMaxHeight);
        }
        return { newWidth: newWidth, newHeight: newHeight };
    };
    Resizable.prototype.setBoundingClientRect = function () {
        // For parent boundary
        if (this.props.bounds === 'parent') {
            var parent_3 = this.parentNode;
            if (parent_3 instanceof HTMLElement) {
                var parentRect = parent_3.getBoundingClientRect();
                this.parentLeft = parentRect.left;
                this.parentTop = parentRect.top;
            }
        }
        // For target(html element) boundary
        if (this.props.bounds instanceof HTMLElement) {
            var targetRect = this.props.bounds.getBoundingClientRect();
            this.targetLeft = targetRect.left;
            this.targetTop = targetRect.top;
        }
        // For boundary
        if (this.resizable) {
            var _a = this.resizable.getBoundingClientRect(), left = _a.left, top_1 = _a.top;
            this.resizableLeft = left;
            this.resizableTop = top_1;
        }
    };
    Resizable.prototype.onResizeStart = function (event, direction) {
        if (!this.resizable) {
            return;
        }
        var clientX = 0;
        var clientY = 0;
        if (event.nativeEvent instanceof MouseEvent) {
            clientX = event.nativeEvent.clientX;
            clientY = event.nativeEvent.clientY;
            // When user click with right button the resize is stuck in resizing mode
            // until users clicks again, dont continue if right click is used.
            // HACK: MouseEvent does not have `which` from flow-bin v0.68.
            if (event.nativeEvent.which === 3) {
                return;
            }
        }
        else if (event.nativeEvent instanceof TouchEvent) {
            clientX = event.nativeEvent.touches[0].clientX;
            clientY = event.nativeEvent.touches[0].clientY;
        }
        if (this.props.onResizeStart) {
            if (this.resizable) {
                var startResize = this.props.onResizeStart(event, direction, this.resizable);
                if (startResize === false) {
                    return;
                }
            }
        }
        // Fix #168
        if (this.props.size) {
            if (typeof this.props.size.height !== 'undefined' && this.props.size.height !== this.state.height) {
                this.setState({ height: this.props.size.height });
            }
            if (typeof this.props.size.width !== 'undefined' && this.props.size.width !== this.state.width) {
                this.setState({ width: this.props.size.width });
            }
        }
        // For lockAspectRatio case
        this.ratio =
            typeof this.props.lockAspectRatio === 'number' ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var flexBasis;
        var computedStyle = window.getComputedStyle(this.resizable);
        if (computedStyle.flexBasis !== 'auto') {
            var parent_4 = this.parentNode;
            if (parent_4) {
                var dir = window.getComputedStyle(parent_4).flexDirection;
                this.flexDir = dir.startsWith('row') ? 'row' : 'column';
                flexBasis = computedStyle.flexBasis;
            }
        }
        // For boundary
        this.setBoundingClientRect();
        this.bindEvents();
        var state = {
            original: {
                x: clientX,
                y: clientY,
                width: this.size.width,
                height: this.size.height,
            },
            isResizing: true,
            backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: window.getComputedStyle(event.target).cursor || 'auto' }),
            direction: direction,
            flexBasis: flexBasis,
        };
        this.setState(state);
    };
    Resizable.prototype.onMouseMove = function (event) {
        if (!this.state.isResizing || !this.resizable) {
            return;
        }
        var _a = this.props, maxWidth = _a.maxWidth, maxHeight = _a.maxHeight, minWidth = _a.minWidth, minHeight = _a.minHeight;
        var clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
        var clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
        var _b = this.state, direction = _b.direction, original = _b.original, width = _b.width, height = _b.height;
        var parentSize = this.getParentSize();
        var max = calculateNewMax(parentSize, maxWidth, maxHeight, minWidth, minHeight);
        maxWidth = max.maxWidth;
        maxHeight = max.maxHeight;
        minWidth = max.minWidth;
        minHeight = max.minHeight;
        // Calculate new size
        var _c = this.calculateNewSizeFromDirection(clientX, clientY), newHeight = _c.newHeight, newWidth = _c.newWidth;
        // Calculate max size from boundary settings
        var boundaryMax = this.calculateNewMaxFromBoundary(maxWidth, maxHeight);
        // Calculate new size from aspect ratio
        var newSize = this.calculateNewSizeFromAspectRatio(newWidth, newHeight, { width: boundaryMax.maxWidth, height: boundaryMax.maxHeight }, { width: minWidth, height: minHeight });
        newWidth = newSize.newWidth;
        newHeight = newSize.newHeight;
        if (this.props.grid) {
            var newGridWidth = snap(newWidth, this.props.grid[0]);
            var newGridHeight = snap(newHeight, this.props.grid[1]);
            var gap = this.props.snapGap || 0;
            newWidth = gap === 0 || Math.abs(newGridWidth - newWidth) <= gap ? newGridWidth : newWidth;
            newHeight = gap === 0 || Math.abs(newGridHeight - newHeight) <= gap ? newGridHeight : newHeight;
        }
        if (this.props.snap && this.props.snap.x) {
            newWidth = findClosestSnap(newWidth, this.props.snap.x, this.props.snapGap);
        }
        if (this.props.snap && this.props.snap.y) {
            newHeight = findClosestSnap(newHeight, this.props.snap.y, this.props.snapGap);
        }
        var delta = {
            width: newWidth - original.width,
            height: newHeight - original.height,
        };
        if (width && typeof width === 'string') {
            if (endsWith(width, '%')) {
                var percent = (newWidth / parentSize.width) * 100;
                newWidth = percent + "%";
            }
            else if (endsWith(width, 'vw')) {
                var vw = (newWidth / window.innerWidth) * 100;
                newWidth = vw + "vw";
            }
            else if (endsWith(width, 'vh')) {
                var vh = (newWidth / window.innerHeight) * 100;
                newWidth = vh + "vh";
            }
        }
        if (height && typeof height === 'string') {
            if (endsWith(height, '%')) {
                var percent = (newHeight / parentSize.height) * 100;
                newHeight = percent + "%";
            }
            else if (endsWith(height, 'vw')) {
                var vw = (newHeight / window.innerWidth) * 100;
                newHeight = vw + "vw";
            }
            else if (endsWith(height, 'vh')) {
                var vh = (newHeight / window.innerHeight) * 100;
                newHeight = vh + "vh";
            }
        }
        var newState = {
            width: this.createSizeForCssProperty(newWidth, 'width'),
            height: this.createSizeForCssProperty(newHeight, 'height'),
        };
        if (this.flexDir === 'row') {
            newState.flexBasis = newState.width;
        }
        else if (this.flexDir === 'column') {
            newState.flexBasis = newState.height;
        }
        this.setState(newState);
        if (this.props.onResize) {
            this.props.onResize(event, direction, this.resizable, delta);
        }
    };
    Resizable.prototype.onMouseUp = function (event) {
        var _a = this.state, isResizing = _a.isResizing, direction = _a.direction, original = _a.original;
        if (!isResizing || !this.resizable) {
            return;
        }
        var delta = {
            width: this.size.width - original.width,
            height: this.size.height - original.height,
        };
        if (this.props.onResizeStop) {
            this.props.onResizeStop(event, direction, this.resizable, delta);
        }
        if (this.props.size) {
            this.setState(this.props.size);
        }
        this.unbindEvents();
        this.setState({
            isResizing: false,
            backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: 'auto' }),
        });
    };
    Resizable.prototype.updateSize = function (size) {
        this.setState({ width: size.width, height: size.height });
    };
    Resizable.prototype.renderResizer = function () {
        var _this = this;
        var _a = this.props, enable = _a.enable, handleStyles = _a.handleStyles, handleClasses = _a.handleClasses, handleWrapperStyle = _a.handleWrapperStyle, handleWrapperClass = _a.handleWrapperClass, handleComponent = _a.handleComponent;
        if (!enable) {
            return null;
        }
        var resizers = Object.keys(enable).map(function (dir) {
            if (enable[dir] !== false) {
                return (React.createElement(resizer_1.Resizer, { key: dir, direction: dir, onResizeStart: _this.onResizeStart, replaceStyles: handleStyles && handleStyles[dir], className: handleClasses && handleClasses[dir] }, handleComponent && handleComponent[dir] ? handleComponent[dir] : null));
            }
            return null;
        });
        // #93 Wrap the resize box in span (will not break 100% width/height)
        return (React.createElement("span", { className: handleWrapperClass, style: handleWrapperStyle }, resizers));
    };
    Resizable.prototype.render = function () {
        var _this = this;
        var extendsProps = Object.keys(this.props).reduce(function (acc, key) {
            if (definedProps.indexOf(key) !== -1) {
                return acc;
            }
            acc[key] = _this.props[key];
            return acc;
        }, {});
        var style = __assign(__assign(__assign({ position: 'relative', userSelect: this.state.isResizing ? 'none' : 'auto' }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: 'border-box', flexShrink: 0 });
        if (this.state.flexBasis) {
            style.flexBasis = this.state.flexBasis;
        }
        return (React.createElement("div", __assign({ ref: this.ref, style: style, className: this.props.className }, extendsProps),
            this.state.isResizing && React.createElement("div", { style: this.state.backgroundStyle }),
            this.props.children,
            this.renderResizer()));
    };
    Resizable.defaultProps = {
        onResizeStart: function () { },
        onResize: function () { },
        onResizeStop: function () { },
        enable: {
            top: true,
            right: true,
            bottom: true,
            left: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            topLeft: true,
        },
        style: {},
        grid: [1, 1],
        lockAspectRatio: false,
        lockAspectRatioExtraWidth: 0,
        lockAspectRatioExtraHeight: 0,
        scale: 1,
        resizeRatio: 1,
        snapGap: 0,
    };
    return Resizable;
}(React.PureComponent));
exports.Resizable = Resizable;


/***/ }),

/***/ "./node_modules/re-resizable/lib/resizer.js":
/*!**************************************************!*\
  !*** ./node_modules/re-resizable/lib/resizer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "react"));
var styles = {
    top: {
        width: '100%',
        height: '10px',
        top: '-5px',
        left: '0px',
        cursor: 'row-resize',
    },
    right: {
        width: '10px',
        height: '100%',
        top: '0px',
        right: '-5px',
        cursor: 'col-resize',
    },
    bottom: {
        width: '100%',
        height: '10px',
        bottom: '-5px',
        left: '0px',
        cursor: 'row-resize',
    },
    left: {
        width: '10px',
        height: '100%',
        top: '0px',
        left: '-5px',
        cursor: 'col-resize',
    },
    topRight: {
        width: '20px',
        height: '20px',
        position: 'absolute',
        right: '-10px',
        top: '-10px',
        cursor: 'ne-resize',
    },
    bottomRight: {
        width: '20px',
        height: '20px',
        position: 'absolute',
        right: '-10px',
        bottom: '-10px',
        cursor: 'se-resize',
    },
    bottomLeft: {
        width: '20px',
        height: '20px',
        position: 'absolute',
        left: '-10px',
        bottom: '-10px',
        cursor: 'sw-resize',
    },
    topLeft: {
        width: '20px',
        height: '20px',
        position: 'absolute',
        left: '-10px',
        top: '-10px',
        cursor: 'nw-resize',
    },
};
var Resizer = /** @class */ (function (_super) {
    __extends(Resizer, _super);
    function Resizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMouseDown = function (e) {
            _this.props.onResizeStart(e, _this.props.direction);
        };
        _this.onTouchStart = function (e) {
            _this.props.onResizeStart(e, _this.props.direction);
        };
        return _this;
    }
    Resizer.prototype.render = function () {
        return (React.createElement("div", { className: this.props.className || '', style: __assign(__assign({ position: 'absolute', userSelect: 'none' }, styles[this.props.direction]), (this.props.replaceStyles || {})), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children));
    };
    return Resizer;
}(React.PureComponent));
exports.Resizer = Resizer;


/***/ }),

/***/ "./node_modules/siema/dist/siema.min.js":
/*!**********************************************!*\
  !*** ./node_modules/siema/dist/siema.min.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),l=function(){function e(t){var i=this;if(r(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach(function(e){i[e]=i[e].bind(i)}),this.init()}return s(e,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}},{key:"init",value:function(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)}},{key:"buildSliderFrame",value:function(){var e=this.selectorWidth/this.perPage,t=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=e*t+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");var i=document.createDocumentFragment();if(this.config.loop)for(var r=this.innerElements.length-this.perPage;r<this.innerElements.length;r++){var n=this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));i.appendChild(n)}for(var s=0;s<this.innerElements.length;s++){var l=this.buildSliderFrameItem(this.innerElements[s]);i.appendChild(l)}if(this.config.loop)for(var o=0;o<this.perPage;o++){var a=this.buildSliderFrameItem(this.innerElements[o].cloneNode(!0));i.appendChild(a)}this.sliderFrame.appendChild(i),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"buildSliderFrameItem",value:function(e){var t=document.createElement("div");return t.style.cssFloat=this.config.rtl?"right":"left",t.style.float=this.config.rtl?"right":"left",t.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",t.appendChild(e),t}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===n(this.config.perPage)){this.perPage=1;for(var e in this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop){if(this.currentSlide-e<0){this.disableTransition();var r=this.currentSlide+this.innerElements.length,n=this.perPage,s=r+n,l=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(l+o)+"px, 0, 0)",this.currentSlide=r-e}else this.currentSlide=this.currentSlide-e}else this.currentSlide=Math.max(this.currentSlide-e,0);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop){if(this.currentSlide+e>this.innerElements.length-this.perPage){this.disableTransition();var r=this.currentSlide-this.innerElements.length,n=this.perPage,s=r+n,l=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(l+o)+"px, 0, 0)",this.currentSlide=r+e}else this.currentSlide=this.currentSlide+e}else this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"disableTransition",value:function(){this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing}},{key:"enableTransition",value:function(){this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide=this.config.loop?e%this.innerElements.length:Math.min(Math.max(e,0),this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(e){var t=this,i=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,r=(this.config.rtl?1:-1)*i*(this.selectorWidth/this.perPage);e?requestAnimationFrame(function(){requestAnimationFrame(function(){t.enableTransition(),t.sliderFrame.style[t.transformProperty]="translate3d("+r+"px, 0, 0)"})}):this.sliderFrame.style[this.transformProperty]="translate3d("+r+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),t=Math.abs(e),i=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1,r=e>0&&this.currentSlide-i<0,n=e<0&&this.currentSlide+i>this.innerElements.length-this.perPage;e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(i):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(i),this.slideToCurrent(r||n)}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}},{key:"touchstartHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY)}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){if(e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo){e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,i=t*(this.selectorWidth/this.perPage),r=this.drag.endX-this.drag.startX,n=this.config.rtl?i+r:i-r;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*n+"px, 0, 0)"}}},{key:"mousedownHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX)}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){if(e.preventDefault(),this.pointerDown){"A"===e.target.nodeName&&(this.drag.preventClick=!0),this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,i=t*(this.selectorWidth/this.perPage),r=this.drag.endX-this.drag.startX,n=this.config.rtl?i+r:i-r;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*n+"px, 0, 0)"}}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())}},{key:"clickHandler",value:function(e){this.drag.preventClick&&e.preventDefault(),this.drag.preventClick=!1}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");var i=e<this.currentSlide,r=this.currentSlide+this.perPage-1===e;(i||r)&&this.currentSlide--,this.innerElements.splice(e,1),this.buildSliderFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,i){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");var r=t<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=r?this.currentSlide+1:this.currentSlide,this.innerElements.splice(t,0,e),this.buildSliderFrame(),i&&i.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(this.detachEvents(),this.selector.style.cursor="auto",e){for(var i=document.createDocumentFragment(),r=0;r<this.innerElements.length;r++)i.appendChild(this.innerElements[r]);this.selector.innerHTML="",this.selector.appendChild(i),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}},i=e;for(var r in i)t[r]=i[r];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),e}();t.default=l,e.exports=t.default}])});

/***/ }),

/***/ "./node_modules/throttle-debounce/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/throttle-debounce/dist/index.esm.js ***!
  \**********************************************************/
/*! exports provided: throttle, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */

function debounce (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}




/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  blocs: {
    type: "object",
    default: {}
  },
  height: {
    type: Number,
    default: 500
  },
  showDot: {
    type: Boolean,
    default: true
  },
  showArrow: {
    type: Boolean,
    default: true
  }
});

/***/ }),

/***/ "./src/components/addImage.jsx":
/*!*************************************!*\
  !*** ./src/components/addImage.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon,
    Spinner = _wp$components.Spinner;
var useEffect = wp.element.useEffect;
var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var useSelect = wp.data.useSelect;
var __ = wp.i18n.__;
var ALLOWED_MEDIA_TYPES = ["image"];

var AddImage = function AddImage(_ref) {
  var props = _ref.props,
      initCarousel = _ref.initCarousel,
      destroyCarousel = _ref.destroyCarousel;
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blocs = attributes.blocs;
  var length = Object.keys(blocs).length;
  var index = length; // get the image info for new image

  var image = useSelect(function (select) {
    var newPic = null; // search image with newImage === true

    Object.keys(blocs).forEach(function (b) {
      if (blocs[b].newImage === true) {
        newPic = blocs[b];
      }
    });

    var _select = select("core"),
        getMedia = _select.getMedia; // get media for this new pic added


    return newPic ? getMedia(newPic.imageId) : {};
  }, [blocs]); // update image info to attribute

  useEffect(function () {
    var keys = Object.keys(blocs);

    if (image && image.id) {
      var _index = null; // search infex for newImage === true

      keys.forEach(function (b) {
        if (blocs[b].newImage === true) {
          _index = b;
        }
      });

      if (_index) {
        setAttributes({
          blocs: _objectSpread({}, blocs, {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, _index, _objectSpread({}, blocs[_index], {
            image: image,
            newImage: false
          })))
        });
      }
    }
  }, [image]);
  /**
   * add new image
   * @param {} image
   */

  var onUpdateImage = function onUpdateImage(image) {
    destroyCarousel(function () {
      setAttributes({
        blocs: _objectSpread({}, blocs, {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, index, _objectSpread({}, blocs[index], {
          imageId: image.id,
          image: image,
          // set to true for get media after
          newImage: true
        })))
      });
      initCarousel();
    }, true);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
    title: __("Image", "gm-carousel"),
    onSelect: onUpdateImage,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: "",
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        onClick: open,
        title: __("add image", "gm-carousel"),
        className: "components-button editor-post-preview is-button is-default is-large"
      }, __("add image", "gm-carousel"), "  ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Dashicon, {
        icon: "plus-alt"
      }));
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AddImage);

/***/ }),

/***/ "./src/components/editElement.jsx":
/*!****************************************!*\
  !*** ./src/components/editElement.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);

var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon,
    Spinner = _wp$components.Spinner;
var RichText = wp.blockEditor.RichText;
var __ = wp.i18n.__;


var EditElement = function EditElement(_ref) {
  var props = _ref.props,
      index = _ref.index,
      height = _ref.height,
      onRemoveImage = _ref.onRemoveImage;
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blocs = attributes.blocs;
  var _blocs$index = blocs[index],
      imageId = _blocs$index.imageId,
      image = _blocs$index.image;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gm-carousel-cell"
  }, !!imageId && !image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Spinner, null), imageId && image ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: image.source_url,
    alt: "",
    style: {
      maxHeight: height
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
    onClick: function onClick() {
      return onRemoveImage(index);
    },
    title: __("remove", "gm-carousel")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
    icon: "dismiss"
  }))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (EditElement);

/***/ }),

/***/ "./src/components/panel.jsx":
/*!**********************************!*\
  !*** ./src/components/panel.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;
var InspectorControls = wp.blockEditor.InspectorControls;
var __ = wp.i18n.__;

var Panel = function Panel(_ref) {
  var props = _ref.props;
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var showArrow = attributes.showArrow,
      showDot = attributes.showDot;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: __("Settings", "gm-carousel")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __("Show Dot", "gm-carousel"),
    checked: showDot,
    onChange: function onChange() {
      return setAttributes({
        showDot: !showDot
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __("Show Arrow", "gm-carousel"),
    checked: showArrow,
    onChange: function onChange() {
      return setAttributes({
        showArrow: !showArrow
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Panel);

/***/ }),

/***/ "./src/components/saveElement.jsx":
/*!****************************************!*\
  !*** ./src/components/saveElement.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _saveImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveImage */ "./src/components/saveImage.jsx");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);

var RichText = wp.blockEditor.RichText;
var __ = wp.i18n.__;



var SaveElement = function SaveElement(_ref) {
  var props = _ref.props,
      index = _ref.index;
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blocs = attributes.blocs;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gm-carousel-cell"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_saveImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    index: index,
    props: props
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SaveElement);

/***/ }),

/***/ "./src/components/saveImage.jsx":
/*!**************************************!*\
  !*** ./src/components/saveImage.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);



var SaveImage = function SaveImage(_ref) {
  var props = _ref.props,
      index = _ref.index;
  var _props$attributes = props.attributes,
      blocs = _props$attributes.blocs,
      height = _props$attributes.height;
  var image = blocs[index].image;
  if (!image) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  var media_details = image.media_details,
      alt_text = image.alt_text,
      source_url = image.source_url;
  if (!media_details) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  var sizes = media_details.sizes;
  var large = sizes.large,
      full = sizes.full;
  var pic = large || full;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: pic ? pic.source_url : source_url,
    style: {
      maxHeight: height
    },
    alt: alt_text
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SaveImage);

/***/ }),

/***/ "./src/edit.jsx":
/*!**********************!*\
  !*** ./src/edit.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var siema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! siema */ "./node_modules/siema/dist/siema.min.js");
/* harmony import */ var siema__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(siema__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/dist/index.esm.js");
/* harmony import */ var re_resizable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! re-resizable */ "./node_modules/re-resizable/lib/index.js");
/* harmony import */ var re_resizable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(re_resizable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_editElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/editElement */ "./src/components/editElement.jsx");
/* harmony import */ var _components_addImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/addImage */ "./src/components/addImage.jsx");
/* harmony import */ var _components_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/panel */ "./src/components/panel.jsx");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_9__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState,
    useRef = _wp$element.useRef;



 // model for bloc

var model = {
  image: undefined,
  imageId: undefined
};

var Edit = function Edit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      toggleSelection = props.toggleSelection,
      isSelected = props.isSelected;
  var blocs = attributes.blocs,
      height = attributes.height,
      showDot = attributes.showDot,
      showArrow = attributes.showArrow;

  var _useState = useState(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1]; // container carousel


  var container = useRef(); // ref to carousel

  var carousel = useRef(); // destroy carousel on change element

  var destroyCarousel = function destroyCarousel() {
    var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
      return true;
    };
    var resetDom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    // remove and reste dom
    if (carousel.current) carousel.current.destroy(resetDom, cb);
  }; // re init carousel with new element


  var initCarousel = function initCarousel() {
    var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (carousel.current) {
      setTimeout(function () {
        // total items
        var length = container.current.childNodes.length; // init new carousel

        carousel.current = new siema__WEBPACK_IMPORTED_MODULE_3___default.a({
          selector: container.current,
          onChange: function onChange() {
            return setSelected(carousel.current.currentSlide);
          }
        });

        if (length > 0) {
          // if remove, take index of bloc removed - 1 or take last
          var _i = remove === true ? index - 1 : length;

          var current = _i < 0 ? 0 : _i;
          setSelected(current);
          carousel.current.goTo(current);
        }
      }, 100);
    }
  }; // init carousel on mount


  useEffect(function () {
    // init first carousel
    carousel.current = new siema__WEBPACK_IMPORTED_MODULE_3___default.a({
      selector: container.current,
      onChange: function onChange() {
        setSelected(carousel.current.currentSlide);
      }
    });
  }, []); // remove image

  var onRemoveImage = function onRemoveImage(i) {
    destroyCarousel(function () {
      // delete bloc image
      var _blocs = _objectSpread({}, blocs);

      delete _blocs[i]; // reset keys

      var newBlocs = {};
      Object.keys(_blocs).forEach(function (e, i) {
        newBlocs[i] = _blocs[e];
      });
      setAttributes({
        blocs: newBlocs
      });
      initCarousel(true, i);
    });
  };

  var arrowHandler = function arrowHandler() {
    var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var current = carousel.current.currentSlide;
    carousel.current.goTo(next ? current + 1 : current - 1);
  };

  var blockKeys = Object.keys(blocs);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-bloc-edit"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_panel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    props: props
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-bloc-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(re_resizable__WEBPACK_IMPORTED_MODULE_5__["Resizable"], {
    size: {
      width: "100%",
      height: height
    },
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: "100%",
    enable: {
      top: false,
      right: false,
      bottom: true,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false
    },
    onResizeStart: function onResizeStart() {
      toggleSelection(false);
    },
    onResize: Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_4__["debounce"])(50, function (event, direction, elt, delta) {
      setAttributes({
        height: parseInt(height + delta.height, 10)
      });
    }),
    onResizeStop: function onResizeStop(event, direction, elt, delta) {
      carousel.current.resizeHandler();
      setAttributes({
        height: parseInt(height + delta.height, 10)
      });
      toggleSelection(true);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-container",
    ref: container
  }, blockKeys.map(function (b) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_editElement__WEBPACK_IMPORTED_MODULE_6__["default"], {
      height: "".concat(height, "px"),
      onRemoveImage: onRemoveImage,
      props: props,
      key: "".concat(blocs[b].imageId, " ").concat(b),
      index: b
    });
  })), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    style: {
      top: "".concat(height, "px")
    },
    className: "resizable-handle"
  })), showArrow === true && blockKeys.length > 1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-arrow-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    onClick: function onClick() {
      return arrowHandler(false);
    },
    className: "gm-carousel-arrow-previous"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, __("previous", "gm-carousel"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    onClick: arrowHandler,
    className: "gm-carousel-arrow-next"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, __("next", "gm-carousel")))) : null, showDot === true && blockKeys.length > 1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-dot-container"
  }, blockKeys.map(function (b) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      key: "dot-".concat(b),
      className: "gm-carousel-dot ".concat(+selected === +b ? "gm-carousel-dot-current" : ""),
      onClick: function onClick() {
        return carousel.current.goTo(b);
      }
    });
  })) : null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-add-bloc"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_addImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    initCarousel: initCarousel,
    destroyCarousel: destroyCarousel,
    props: props
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.jsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.jsx");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;




var icone = function icone() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M3,3 L3,2.5 C3,2.22385763 3.22385763,2 3.5,2 L7,2 L7,0.5 C7,0.22385763 7.22385763,0 7.5,0 L19.5,0 C19.7761424,0 20,0.22385763 20,0.5 L20,12.5 C20,12.7761424 19.7761424,13 19.5,13 L7.5,13 C7.22385763,13 7,12.7761424 7,12.5 L7,11 L3.5,11 C3.22385763,11 3,10.7761424 3,10.5 L3,10 L0.5,10 C0.22385763,10 0,9.7761424 0,9.5 L0,3.5 C0,3.22385763 0.22385763,3 0.5,3 L3,3 Z M3,4 L1,4 L1,9 L3,9 L3,4 Z M7,10 L7,3 L4,3 L4,10 L7,10 Z M8,12 L19,12 L19,1 L8,1 L8,12 Z",
    transform: "translate(1 4)"
  })));
};

registerBlockType("gm/carousel", {
  title: __("Block carousel", "gm-carousel"),
  description: __("carousel for show photos", "gm-carousel"),
  icon: icone,
  category: "theme-blocks",
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
}); // if (module.hot) {
//   module.hot.accept(function() {
//     console.log("Accepting the updated printMe module!");
//   });
// }

/***/ }),

/***/ "./src/save.jsx":
/*!**********************!*\
  !*** ./src/save.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_saveElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/saveElement */ "./src/components/saveElement.jsx");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);

// const { RichText } = wp.blockEditor;
var __ = wp.i18n.__;



var Save = function Save(props) {
  var _props$attributes = props.attributes,
      blocs = _props$attributes.blocs,
      showArrow = _props$attributes.showArrow,
      showDot = _props$attributes.showDot;
  var blockKeys = Object.keys(blocs);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gm-carousel-bloc-container",
    "data-dot": showDot,
    "data-arrow": showArrow
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gm-carousel-container"
  }, Object.keys(blocs).map(function (b) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_saveElement__WEBPACK_IMPORTED_MODULE_1__["default"], {
      props: props,
      key: b,
      index: b
    });
  })), showArrow === true && blockKeys.length > 1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gm-carousel-arrow-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "gm-carousel-arrow-previous"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, __("previous", "gm-carousel"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "gm-carousel-arrow-next"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, __("next", "gm-carousel")))) : null, showDot === true && blockKeys.length > 1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gm-carousel-dot-container"
  }, Object.keys(blocs).map(function (b) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "gm-carousel-dot"
    });
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3QtbWVtb2l6ZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlLXJlc2l6YWJsZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlLXJlc2l6YWJsZS9saWIvcmVzaXplci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2llbWEvZGlzdC9zaWVtYS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lZGl0RWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFuZWwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NhdmVFbGVtZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zYXZlSW1hZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9lZGl0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9lZTAxIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJ0aGlzXCI6W1wid3BcIixcImVsZW1lbnRcIl19Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJ0aGlzXCI6XCJSZWFjdFwifSJdLCJuYW1lcyI6WyJibG9jcyIsInR5cGUiLCJkZWZhdWx0IiwiaGVpZ2h0IiwiTnVtYmVyIiwic2hvd0RvdCIsIkJvb2xlYW4iLCJzaG93QXJyb3ciLCJ3cCIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJEYXNoaWNvbiIsIlNwaW5uZXIiLCJ1c2VFZmZlY3QiLCJlbGVtZW50IiwiYmxvY2tFZGl0b3IiLCJNZWRpYVVwbG9hZCIsIk1lZGlhVXBsb2FkQ2hlY2siLCJ1c2VTZWxlY3QiLCJkYXRhIiwiX18iLCJpMThuIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsIkFkZEltYWdlIiwicHJvcHMiLCJpbml0Q2Fyb3VzZWwiLCJkZXN0cm95Q2Fyb3VzZWwiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlcyIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJpbmRleCIsImltYWdlIiwic2VsZWN0IiwibmV3UGljIiwiZm9yRWFjaCIsImIiLCJuZXdJbWFnZSIsImdldE1lZGlhIiwiaW1hZ2VJZCIsImlkIiwiX2luZGV4Iiwib25VcGRhdGVJbWFnZSIsIm9wZW4iLCJSaWNoVGV4dCIsIkVkaXRFbGVtZW50Iiwib25SZW1vdmVJbWFnZSIsInNvdXJjZV91cmwiLCJtYXhIZWlnaHQiLCJQYW5lbEJvZHkiLCJUb2dnbGVDb250cm9sIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJQYW5lbCIsIlNhdmVFbGVtZW50IiwiU2F2ZUltYWdlIiwibWVkaWFfZGV0YWlscyIsImFsdF90ZXh0Iiwic2l6ZXMiLCJsYXJnZSIsImZ1bGwiLCJwaWMiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIm1vZGVsIiwidW5kZWZpbmVkIiwiRWRpdCIsInRvZ2dsZVNlbGVjdGlvbiIsImlzU2VsZWN0ZWQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiY29udGFpbmVyIiwiY2Fyb3VzZWwiLCJjYiIsInJlc2V0RG9tIiwiY3VycmVudCIsImRlc3Ryb3kiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwiY2hpbGROb2RlcyIsIlNpZW1hIiwic2VsZWN0b3IiLCJvbkNoYW5nZSIsImN1cnJlbnRTbGlkZSIsIl9pIiwiZ29UbyIsImkiLCJfYmxvY3MiLCJuZXdCbG9jcyIsImUiLCJhcnJvd0hhbmRsZXIiLCJuZXh0IiwiYmxvY2tLZXlzIiwid2lkdGgiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ0b3BSaWdodCIsImJvdHRvbVJpZ2h0IiwiYm90dG9tTGVmdCIsInRvcExlZnQiLCJkZWJvdW5jZSIsImV2ZW50IiwiZGlyZWN0aW9uIiwiZWx0IiwiZGVsdGEiLCJwYXJzZUludCIsInJlc2l6ZUhhbmRsZXIiLCJtYXAiLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsImljb25lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjYXRlZ29yeSIsImVkaXQiLCJzYXZlIiwiU2F2ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1Qzs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBOztBQUVBLGtDOzs7Ozs7Ozs7OztBQ0pBLHFCQUFxQixtQkFBTyxDQUFDLGlGQUFrQjs7QUFFL0MsMkJBQTJCLG1CQUFPLENBQUMsNkZBQXdCOztBQUUzRCxzQkFBc0IsbUJBQU8sQ0FBQyxtRkFBbUI7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvSWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx5QkFBeUIsbUJBQU8sQ0FBQyxvQkFBTztBQUN4QyxnQkFBZ0IsbUJBQU8sQ0FBQyw2REFBVztBQUNuQyxxQ0FBcUMsbUJBQU8sQ0FBQyw4REFBYztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCx3Q0FBd0MsRUFBRTtBQUNyRyxzREFBc0Qsb0NBQW9DLEVBQUU7QUFDNUY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDZCQUE2QixhQUFhO0FBQzFDLHlFQUF5RSw0RUFBNEUsRUFBRTtBQUN2SjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHdCQUF3QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlDQUFpQztBQUNoRTtBQUNBO0FBQ0EsK0JBQStCLCtCQUErQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUQ7QUFBYSxXQUFLLEVBQUViLEtBQXBCO0FBQTJCLFNBQUcsRUFBRWEsQ0FBaEM7QUFBbUMsV0FBSyxFQUFFQTtBQUExQyxNQUR1QjtBQUFBLEdBQXhCLENBREgsQ0FMRixFQVVHOUIsU0FBUyxLQUFLLElBQWQsSUFBc0JxRixTQUFTLENBQUMvRCxNQUFWLEdBQW1CLENBQXpDLEdBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQVEsYUFBUyxFQUFDO0FBQWxCLEtBQ0UsdUZBQU9ULEVBQUUsQ0FBQyxVQUFELEVBQWEsYUFBYixDQUFULENBREYsQ0FERixFQUlFO0FBQVEsYUFBUyxFQUFDO0FBQWxCLEtBQ0UsdUZBQU9BLEVBQUUsQ0FBQyxNQUFELEVBQVMsYUFBVCxDQUFULENBREYsQ0FKRixDQURELEdBU0csSUFuQk4sRUFvQkdmLE9BQU8sS0FBSyxJQUFaLElBQW9CdUYsU0FBUyxDQUFDL0QsTUFBVixHQUFtQixDQUF2QyxHQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0MsTUFBTSxDQUFDQyxJQUFQLENBQVkvQixLQUFaLEVBQW1CNkcsR0FBbkIsQ0FBdUIsVUFBQXhFLENBQUMsRUFBSTtBQUMzQixXQUFPO0FBQUssZUFBUyxFQUFDO0FBQWYsTUFBUDtBQUNELEdBRkEsQ0FESCxDQURELEdBTUcsSUExQk4sQ0FERjtBQThCRCxDQWpDRDs7QUFtQ2VrRixtRUFBZixFOzs7Ozs7Ozs7OztBQ3pDQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLHdDQUF3QyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQXZELGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICghKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCIvL1xuLy8gTWFpblxuLy9cblxuZnVuY3Rpb24gbWVtb2l6ZSAoZm4sIG9wdGlvbnMpIHtcbiAgdmFyIGNhY2hlID0gb3B0aW9ucyAmJiBvcHRpb25zLmNhY2hlXG4gICAgPyBvcHRpb25zLmNhY2hlXG4gICAgOiBjYWNoZURlZmF1bHRcblxuICB2YXIgc2VyaWFsaXplciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5zZXJpYWxpemVyXG4gICAgPyBvcHRpb25zLnNlcmlhbGl6ZXJcbiAgICA6IHNlcmlhbGl6ZXJEZWZhdWx0XG5cbiAgdmFyIHN0cmF0ZWd5ID0gb3B0aW9ucyAmJiBvcHRpb25zLnN0cmF0ZWd5XG4gICAgPyBvcHRpb25zLnN0cmF0ZWd5XG4gICAgOiBzdHJhdGVneURlZmF1bHRcblxuICByZXR1cm4gc3RyYXRlZ3koZm4sIHtcbiAgICBjYWNoZTogY2FjaGUsXG4gICAgc2VyaWFsaXplcjogc2VyaWFsaXplclxuICB9KVxufVxuXG4vL1xuLy8gU3RyYXRlZ3lcbi8vXG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIC8vIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAndW5zYWZlJyBwcmltaXRpdmUgZm9yIG91ciBuZWVkc1xufVxuXG5mdW5jdGlvbiBtb25hZGljIChmbiwgY2FjaGUsIHNlcmlhbGl6ZXIsIGFyZykge1xuICB2YXIgY2FjaGVLZXkgPSBpc1ByaW1pdGl2ZShhcmcpID8gYXJnIDogc2VyaWFsaXplcihhcmcpXG5cbiAgdmFyIGNvbXB1dGVkVmFsdWUgPSBjYWNoZS5nZXQoY2FjaGVLZXkpXG4gIGlmICh0eXBlb2YgY29tcHV0ZWRWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb21wdXRlZFZhbHVlID0gZm4uY2FsbCh0aGlzLCBhcmcpXG4gICAgY2FjaGUuc2V0KGNhY2hlS2V5LCBjb21wdXRlZFZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIGNvbXB1dGVkVmFsdWVcbn1cblxuZnVuY3Rpb24gdmFyaWFkaWMgKGZuLCBjYWNoZSwgc2VyaWFsaXplcikge1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMylcbiAgdmFyIGNhY2hlS2V5ID0gc2VyaWFsaXplcihhcmdzKVxuXG4gIHZhciBjb21wdXRlZFZhbHVlID0gY2FjaGUuZ2V0KGNhY2hlS2V5KVxuICBpZiAodHlwZW9mIGNvbXB1dGVkVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29tcHV0ZWRWYWx1ZSA9IGZuLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgY2FjaGUuc2V0KGNhY2hlS2V5LCBjb21wdXRlZFZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIGNvbXB1dGVkVmFsdWVcbn1cblxuZnVuY3Rpb24gYXNzZW1ibGUgKGZuLCBjb250ZXh0LCBzdHJhdGVneSwgY2FjaGUsIHNlcmlhbGl6ZSkge1xuICByZXR1cm4gc3RyYXRlZ3kuYmluZChcbiAgICBjb250ZXh0LFxuICAgIGZuLFxuICAgIGNhY2hlLFxuICAgIHNlcmlhbGl6ZVxuICApXG59XG5cbmZ1bmN0aW9uIHN0cmF0ZWd5RGVmYXVsdCAoZm4sIG9wdGlvbnMpIHtcbiAgdmFyIHN0cmF0ZWd5ID0gZm4ubGVuZ3RoID09PSAxID8gbW9uYWRpYyA6IHZhcmlhZGljXG5cbiAgcmV0dXJuIGFzc2VtYmxlKFxuICAgIGZuLFxuICAgIHRoaXMsXG4gICAgc3RyYXRlZ3ksXG4gICAgb3B0aW9ucy5jYWNoZS5jcmVhdGUoKSxcbiAgICBvcHRpb25zLnNlcmlhbGl6ZXJcbiAgKVxufVxuXG5mdW5jdGlvbiBzdHJhdGVneVZhcmlhZGljIChmbiwgb3B0aW9ucykge1xuICB2YXIgc3RyYXRlZ3kgPSB2YXJpYWRpY1xuXG4gIHJldHVybiBhc3NlbWJsZShcbiAgICBmbixcbiAgICB0aGlzLFxuICAgIHN0cmF0ZWd5LFxuICAgIG9wdGlvbnMuY2FjaGUuY3JlYXRlKCksXG4gICAgb3B0aW9ucy5zZXJpYWxpemVyXG4gIClcbn1cblxuZnVuY3Rpb24gc3RyYXRlZ3lNb25hZGljIChmbiwgb3B0aW9ucykge1xuICB2YXIgc3RyYXRlZ3kgPSBtb25hZGljXG5cbiAgcmV0dXJuIGFzc2VtYmxlKFxuICAgIGZuLFxuICAgIHRoaXMsXG4gICAgc3RyYXRlZ3ksXG4gICAgb3B0aW9ucy5jYWNoZS5jcmVhdGUoKSxcbiAgICBvcHRpb25zLnNlcmlhbGl6ZXJcbiAgKVxufVxuXG4vL1xuLy8gU2VyaWFsaXplclxuLy9cblxuZnVuY3Rpb24gc2VyaWFsaXplckRlZmF1bHQgKCkge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJndW1lbnRzKVxufVxuXG4vL1xuLy8gQ2FjaGVcbi8vXG5cbmZ1bmN0aW9uIE9iamVjdFdpdGhvdXRQcm90b3R5cGVDYWNoZSAoKSB7XG4gIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG59XG5cbk9iamVjdFdpdGhvdXRQcm90b3R5cGVDYWNoZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gKGtleSBpbiB0aGlzLmNhY2hlKVxufVxuXG5PYmplY3RXaXRob3V0UHJvdG90eXBlQ2FjaGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XVxufVxuXG5PYmplY3RXaXRob3V0UHJvdG90eXBlQ2FjaGUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRoaXMuY2FjaGVba2V5XSA9IHZhbHVlXG59XG5cbnZhciBjYWNoZURlZmF1bHQgPSB7XG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlICgpIHtcbiAgICByZXR1cm4gbmV3IE9iamVjdFdpdGhvdXRQcm90b3R5cGVDYWNoZSgpXG4gIH1cbn1cblxuLy9cbi8vIEFQSVxuLy9cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplXG5tb2R1bGUuZXhwb3J0cy5zdHJhdGVnaWVzID0ge1xuICB2YXJpYWRpYzogc3RyYXRlZ3lWYXJpYWRpYyxcbiAgbW9uYWRpYzogc3RyYXRlZ3lNb25hZGljXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHJlc2l6ZXJfMSA9IHJlcXVpcmUoXCIuL3Jlc2l6ZXJcIik7XG52YXIgZmFzdF9tZW1vaXplXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImZhc3QtbWVtb2l6ZVwiKSk7XG52YXIgREVGQVVMVF9TSVpFID0ge1xuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgaGVpZ2h0OiAnYXV0bycsXG59O1xudmFyIGNsYW1wID0gZmFzdF9tZW1vaXplXzEuZGVmYXVsdChmdW5jdGlvbiAobiwgbWluLCBtYXgpIHsgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKG4sIG1heCksIG1pbik7IH0pO1xudmFyIHNuYXAgPSBmYXN0X21lbW9pemVfMS5kZWZhdWx0KGZ1bmN0aW9uIChuLCBzaXplKSB7IHJldHVybiBNYXRoLnJvdW5kKG4gLyBzaXplKSAqIHNpemU7IH0pO1xudmFyIGhhc0RpcmVjdGlvbiA9IGZhc3RfbWVtb2l6ZV8xLmRlZmF1bHQoZnVuY3Rpb24gKGRpciwgdGFyZ2V0KSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoZGlyLCAnaScpLnRlc3QodGFyZ2V0KTtcbn0pO1xudmFyIGZpbmRDbG9zZXN0U25hcCA9IGZhc3RfbWVtb2l6ZV8xLmRlZmF1bHQoZnVuY3Rpb24gKG4sIHNuYXBBcnJheSwgc25hcEdhcCkge1xuICAgIGlmIChzbmFwR2FwID09PSB2b2lkIDApIHsgc25hcEdhcCA9IDA7IH1cbiAgICB2YXIgY2xvc2VzdEdhcEluZGV4ID0gc25hcEFycmF5LnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VyciwgaW5kZXgpIHsgcmV0dXJuIChNYXRoLmFicyhjdXJyIC0gbikgPCBNYXRoLmFicyhzbmFwQXJyYXlbcHJldl0gLSBuKSA/IGluZGV4IDogcHJldik7IH0sIDApO1xuICAgIHZhciBnYXAgPSBNYXRoLmFicyhzbmFwQXJyYXlbY2xvc2VzdEdhcEluZGV4XSAtIG4pO1xuICAgIHJldHVybiBzbmFwR2FwID09PSAwIHx8IGdhcCA8IHNuYXBHYXAgPyBzbmFwQXJyYXlbY2xvc2VzdEdhcEluZGV4XSA6IG47XG59KTtcbnZhciBlbmRzV2l0aCA9IGZhc3RfbWVtb2l6ZV8xLmRlZmF1bHQoZnVuY3Rpb24gKHN0ciwgc2VhcmNoU3RyKSB7XG4gICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIHNlYXJjaFN0ci5sZW5ndGgsIHNlYXJjaFN0ci5sZW5ndGgpID09PSBzZWFyY2hTdHI7XG59KTtcbnZhciBnZXRTdHJpbmdTaXplID0gZmFzdF9tZW1vaXplXzEuZGVmYXVsdChmdW5jdGlvbiAobikge1xuICAgIG4gPSBuLnRvU3RyaW5nKCk7XG4gICAgaWYgKG4gPT09ICdhdXRvJykge1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgaWYgKGVuZHNXaXRoKG4sICdweCcpKSB7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBpZiAoZW5kc1dpdGgobiwgJyUnKSkge1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgaWYgKGVuZHNXaXRoKG4sICd2aCcpKSB7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBpZiAoZW5kc1dpdGgobiwgJ3Z3JykpIHtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIGlmIChlbmRzV2l0aChuLCAndm1heCcpKSB7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBpZiAoZW5kc1dpdGgobiwgJ3ZtaW4nKSkge1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgcmV0dXJuIG4gKyBcInB4XCI7XG59KTtcbnZhciBnZXRQaXhlbFNpemUgPSBmdW5jdGlvbiAoc2l6ZSwgcGFyZW50U2l6ZSkge1xuICAgIGlmIChzaXplICYmIHR5cGVvZiBzaXplID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoZW5kc1dpdGgoc2l6ZSwgJyUnKSkge1xuICAgICAgICAgICAgdmFyIHJhdGlvID0gTnVtYmVyKHNpemUucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50U2l6ZSAqIHJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVuZHNXaXRoKHNpemUsICd2dycpKSB7XG4gICAgICAgICAgICB2YXIgcmF0aW8gPSBOdW1iZXIoc2l6ZS5yZXBsYWNlKCd2dycsICcnKSkgLyAxMDA7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggKiByYXRpbztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbmRzV2l0aChzaXplLCAndmgnKSkge1xuICAgICAgICAgICAgdmFyIHJhdGlvID0gTnVtYmVyKHNpemUucmVwbGFjZSgndmgnLCAnJykpIC8gMTAwO1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCAqIHJhdGlvO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaXplO1xufTtcbnZhciBjYWxjdWxhdGVOZXdNYXggPSBmYXN0X21lbW9pemVfMS5kZWZhdWx0KGZ1bmN0aW9uIChwYXJlbnRTaXplLCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBtaW5XaWR0aCwgbWluSGVpZ2h0KSB7XG4gICAgbWF4V2lkdGggPSBnZXRQaXhlbFNpemUobWF4V2lkdGgsIHBhcmVudFNpemUud2lkdGgpO1xuICAgIG1heEhlaWdodCA9IGdldFBpeGVsU2l6ZShtYXhIZWlnaHQsIHBhcmVudFNpemUuaGVpZ2h0KTtcbiAgICBtaW5XaWR0aCA9IGdldFBpeGVsU2l6ZShtaW5XaWR0aCwgcGFyZW50U2l6ZS53aWR0aCk7XG4gICAgbWluSGVpZ2h0ID0gZ2V0UGl4ZWxTaXplKG1pbkhlaWdodCwgcGFyZW50U2l6ZS5oZWlnaHQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1heFdpZHRoOiB0eXBlb2YgbWF4V2lkdGggPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTnVtYmVyKG1heFdpZHRoKSxcbiAgICAgICAgbWF4SGVpZ2h0OiB0eXBlb2YgbWF4SGVpZ2h0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE51bWJlcihtYXhIZWlnaHQpLFxuICAgICAgICBtaW5XaWR0aDogdHlwZW9mIG1pbldpZHRoID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE51bWJlcihtaW5XaWR0aCksXG4gICAgICAgIG1pbkhlaWdodDogdHlwZW9mIG1pbkhlaWdodCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBOdW1iZXIobWluSGVpZ2h0KSxcbiAgICB9O1xufSk7XG52YXIgZGVmaW5lZFByb3BzID0gW1xuICAgICdzdHlsZScsXG4gICAgJ2NsYXNzTmFtZScsXG4gICAgJ2dyaWQnLFxuICAgICdzbmFwJyxcbiAgICAnYm91bmRzJyxcbiAgICAnc2l6ZScsXG4gICAgJ2RlZmF1bHRTaXplJyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtaW5IZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ2xvY2tBc3BlY3RSYXRpbycsXG4gICAgJ2xvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGgnLFxuICAgICdsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCcsXG4gICAgJ2VuYWJsZScsXG4gICAgJ2hhbmRsZVN0eWxlcycsXG4gICAgJ2hhbmRsZUNsYXNzZXMnLFxuICAgICdoYW5kbGVXcmFwcGVyU3R5bGUnLFxuICAgICdoYW5kbGVXcmFwcGVyQ2xhc3MnLFxuICAgICdjaGlsZHJlbicsXG4gICAgJ29uUmVzaXplU3RhcnQnLFxuICAgICdvblJlc2l6ZScsXG4gICAgJ29uUmVzaXplU3RvcCcsXG4gICAgJ2hhbmRsZUNvbXBvbmVudCcsXG4gICAgJ3NjYWxlJyxcbiAgICAncmVzaXplUmF0aW8nLFxuICAgICdzbmFwR2FwJyxcbl07XG4vLyBIQUNLOiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gY2FsY3VsYXRlICUgc2l6ZS5cbnZhciBiYXNlQ2xhc3NOYW1lID0gJ19fcmVzaXphYmxlX2Jhc2VfXyc7XG52YXIgUmVzaXphYmxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZXNpemFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmVzaXphYmxlKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5yYXRpbyA9IDE7XG4gICAgICAgIF90aGlzLnJlc2l6YWJsZSA9IG51bGw7XG4gICAgICAgIC8vIEZvciBwYXJlbnQgYm91bmRhcnlcbiAgICAgICAgX3RoaXMucGFyZW50TGVmdCA9IDA7XG4gICAgICAgIF90aGlzLnBhcmVudFRvcCA9IDA7XG4gICAgICAgIC8vIEZvciBib3VuZGFyeVxuICAgICAgICBfdGhpcy5yZXNpemFibGVMZWZ0ID0gMDtcbiAgICAgICAgX3RoaXMucmVzaXphYmxlVG9wID0gMDtcbiAgICAgICAgLy8gRm9yIHRhcmdldCBib3VuZGFyeVxuICAgICAgICBfdGhpcy50YXJnZXRMZWZ0ID0gMDtcbiAgICAgICAgX3RoaXMudGFyZ2V0VG9wID0gMDtcbiAgICAgICAgX3RoaXMucmVmID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzaXphYmxlID0gYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc1Jlc2l6aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHdpZHRoOiB0eXBlb2YgKF90aGlzLnByb3BzU2l6ZSAmJiBfdGhpcy5wcm9wc1NpemUud2lkdGgpID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgID8gJ2F1dG8nXG4gICAgICAgICAgICAgICAgOiBfdGhpcy5wcm9wc1NpemUgJiYgX3RoaXMucHJvcHNTaXplLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0eXBlb2YgKF90aGlzLnByb3BzU2l6ZSAmJiBfdGhpcy5wcm9wc1NpemUuaGVpZ2h0KSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICA/ICdhdXRvJ1xuICAgICAgICAgICAgICAgIDogX3RoaXMucHJvcHNTaXplICYmIF90aGlzLnByb3BzU2l6ZS5oZWlnaHQsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgICAgICAgICBvcmlnaW5hbDoge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFja2dyb3VuZFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDApJyxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICAgICAgICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uUmVzaXplU3RhcnQgPSBfdGhpcy5vblJlc2l6ZVN0YXJ0LmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbk1vdXNlTW92ZSA9IF90aGlzLm9uTW91c2VNb3ZlLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbk1vdXNlVXAgPSBfdGhpcy5vbk1vdXNlVXAuYmluZChfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlc2l6YWJsZS5wcm90b3R5cGUsIFwicGFyZW50Tm9kZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJlc2l6YWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzaXphYmxlLnBhcmVudE5vZGU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXNpemFibGUucHJvdG90eXBlLCBcInByb3BzU2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2l6ZSB8fCB0aGlzLnByb3BzLmRlZmF1bHRTaXplIHx8IERFRkFVTFRfU0laRTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlc2l6YWJsZS5wcm90b3R5cGUsIFwiYmFzZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwocGFyZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgY2hpbGRyZW5fMSA9IGNoaWxkcmVuOyBfaSA8IGNoaWxkcmVuXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBjaGlsZHJlbl8xW19pXTtcbiAgICAgICAgICAgICAgICBpZiAobiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuLmNsYXNzTGlzdC5jb250YWlucyhiYXNlQ2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVzaXphYmxlLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSAwO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5yZXNpemFibGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JnV2lkdGggPSB0aGlzLnJlc2l6YWJsZS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgb3JnSGVpZ2h0ID0gdGhpcy5yZXNpemFibGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vIEhBQ0s6IFNldCBwb3NpdGlvbiBgcmVsYXRpdmVgIHRvIGdldCBwYXJlbnQgc2l6ZS5cbiAgICAgICAgICAgICAgICAvLyAgICAgICBUaGlzIGlzIGJlY2F1c2Ugd2hlbiByZS1yZXNpemFibGUgc2V0IGBhYnNvbHV0ZWAsIEkgY2FuIG5vdCBnZXQgYmFzZSB3aWR0aCBjb3JyZWN0bHkuXG4gICAgICAgICAgICAgICAgdmFyIG9yZ1Bvc2l0aW9uID0gdGhpcy5yZXNpemFibGUuc3R5bGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgaWYgKG9yZ1Bvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzaXphYmxlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSU5GTzogVXNlIG9yaWdpbmFsIHdpZHRoIG9yIGhlaWdodCBpZiBzZXQgYXV0by5cbiAgICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMucmVzaXphYmxlLnN0eWxlLndpZHRoICE9PSAnYXV0bycgPyB0aGlzLnJlc2l6YWJsZS5vZmZzZXRXaWR0aCA6IG9yZ1dpZHRoO1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMucmVzaXphYmxlLnN0eWxlLmhlaWdodCAhPT0gJ2F1dG8nID8gdGhpcy5yZXNpemFibGUub2Zmc2V0SGVpZ2h0IDogb3JnSGVpZ2h0O1xuICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6YWJsZS5zdHlsZS5wb3NpdGlvbiA9IG9yZ1Bvc2l0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVzaXphYmxlLnByb3RvdHlwZSwgXCJzaXplU3R5bGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IHRoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIHZhciBnZXRTaXplID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMuc3RhdGVba2V5XSA9PT0gJ3VuZGVmaW5lZCcgfHwgX3RoaXMuc3RhdGVba2V5XSA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYXV0byc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wc1NpemUgJiYgX3RoaXMucHJvcHNTaXplW2tleV0gJiYgZW5kc1dpdGgoX3RoaXMucHJvcHNTaXplW2tleV0udG9TdHJpbmcoKSwgJyUnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW5kc1dpdGgoX3RoaXMuc3RhdGVba2V5XS50b1N0cmluZygpLCAnJScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc3RhdGVba2V5XS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRTaXplID0gX3RoaXMuZ2V0UGFyZW50U2l6ZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBOdW1iZXIoX3RoaXMuc3RhdGVba2V5XS50b1N0cmluZygpLnJlcGxhY2UoJ3B4JywgJycpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBlcmNlbnQgPSAodmFsdWUgLyBwYXJlbnRTaXplW2tleV0pICogMTAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGVyY2VudCArIFwiJVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0U3RyaW5nU2l6ZShfdGhpcy5zdGF0ZVtrZXldKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBzaXplICYmIHR5cGVvZiBzaXplLndpZHRoICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5zdGF0ZS5pc1Jlc2l6aW5nXG4gICAgICAgICAgICAgICAgPyBnZXRTdHJpbmdTaXplKHNpemUud2lkdGgpXG4gICAgICAgICAgICAgICAgOiBnZXRTaXplKCd3aWR0aCcpO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IHNpemUgJiYgdHlwZW9mIHNpemUuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5zdGF0ZS5pc1Jlc2l6aW5nXG4gICAgICAgICAgICAgICAgPyBnZXRTdHJpbmdTaXplKHNpemUuaGVpZ2h0KVxuICAgICAgICAgICAgICAgIDogZ2V0U2l6ZSgnaGVpZ2h0Jyk7XG4gICAgICAgICAgICByZXR1cm4geyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUuZ2V0UGFyZW50U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhc2UgfHwgIXRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIElORk86IFRvIGNhbGN1bGF0ZSBwYXJlbnQgd2lkdGggd2l0aCBmbGV4IGxheW91dFxuICAgICAgICB2YXIgd3JhcENoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHdyYXAgPSB0aGlzLnBhcmVudE5vZGUuc3R5bGUuZmxleFdyYXA7XG4gICAgICAgIHZhciBtaW5XaWR0aCA9IHRoaXMuYmFzZS5zdHlsZS5taW5XaWR0aDtcbiAgICAgICAgaWYgKHdyYXAgIT09ICd3cmFwJykge1xuICAgICAgICAgICAgd3JhcENoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnN0eWxlLmZsZXhXcmFwID0gJ3dyYXAnO1xuICAgICAgICAgICAgLy8gSEFDSzogVXNlIHJlbGF0aXZlIHRvIGdldCBwYXJlbnQgcGFkZGluZyBzaXplXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYXNlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgdGhpcy5iYXNlLnN0eWxlLm1pbldpZHRoID0gJzEwMCUnO1xuICAgICAgICB2YXIgc2l6ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmJhc2Uub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuYmFzZS5vZmZzZXRIZWlnaHQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYmFzZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGlmICh3cmFwQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnN0eWxlLmZsZXhXcmFwID0gd3JhcDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhc2Uuc3R5bGUubWluV2lkdGggPSBtaW5XaWR0aDtcbiAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS51bmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlc2l6YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5yZXNpemFibGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLndpZHRoIHx8IHRoaXMuc2l6ZS53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQgfHwgdGhpcy5zaXplLmhlaWdodCxcbiAgICAgICAgICAgIGZsZXhCYXNpczogY29tcHV0ZWRTdHlsZS5mbGV4QmFzaXMgIT09ICdhdXRvJyA/IGNvbXB1dGVkU3R5bGUuZmxleEJhc2lzIDogdW5kZWZpbmVkLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKCEocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmFzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMCwgMCknO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZmxleCA9ICcwJztcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBiYXNlQ2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5iYXNlIHx8ICFwYXJlbnRfMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKHBhcmVudF8xIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICEodGhpcy5iYXNlIGluc3RhbmNlb2YgTm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnRfMS5yZW1vdmVDaGlsZCh0aGlzLmJhc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLmNyZWF0ZVNpemVGb3JDc3NQcm9wZXJ0eSA9IGZ1bmN0aW9uIChuZXdTaXplLCBraW5kKSB7XG4gICAgICAgIHZhciBwcm9wc1NpemUgPSB0aGlzLnByb3BzU2l6ZSAmJiB0aGlzLnByb3BzU2l6ZVtraW5kXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2luZF0gPT09ICdhdXRvJyAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcmlnaW5hbFtraW5kXSA9PT0gbmV3U2l6ZSAmJlxuICAgICAgICAgICAgKHR5cGVvZiBwcm9wc1NpemUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BzU2l6ZSA9PT0gJ2F1dG8nKVxuICAgICAgICAgICAgPyAnYXV0bydcbiAgICAgICAgICAgIDogbmV3U2l6ZTtcbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUuY2FsY3VsYXRlTmV3TWF4RnJvbUJvdW5kYXJ5ID0gZnVuY3Rpb24gKG1heFdpZHRoLCBtYXhIZWlnaHQpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYm91bmRzID09PSAncGFyZW50Jykge1xuICAgICAgICAgICAgdmFyIHBhcmVudF8yID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgICAgICAgaWYgKHBhcmVudF8yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYm91bmRXaWR0aCA9IHBhcmVudF8yLm9mZnNldFdpZHRoICsgKHRoaXMucGFyZW50TGVmdCAtIHRoaXMucmVzaXphYmxlTGVmdCk7XG4gICAgICAgICAgICAgICAgdmFyIGJvdW5kSGVpZ2h0ID0gcGFyZW50XzIub2Zmc2V0SGVpZ2h0ICsgKHRoaXMucGFyZW50VG9wIC0gdGhpcy5yZXNpemFibGVUb3ApO1xuICAgICAgICAgICAgICAgIG1heFdpZHRoID0gbWF4V2lkdGggJiYgbWF4V2lkdGggPCBib3VuZFdpZHRoID8gbWF4V2lkdGggOiBib3VuZFdpZHRoO1xuICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCAmJiBtYXhIZWlnaHQgPCBib3VuZEhlaWdodCA/IG1heEhlaWdodCA6IGJvdW5kSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuYm91bmRzID09PSAnd2luZG93Jykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvdW5kV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMucmVzaXphYmxlTGVmdDtcbiAgICAgICAgICAgICAgICB2YXIgYm91bmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLnJlc2l6YWJsZVRvcDtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aCA9IG1heFdpZHRoICYmIG1heFdpZHRoIDwgYm91bmRXaWR0aCA/IG1heFdpZHRoIDogYm91bmRXaWR0aDtcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgJiYgbWF4SGVpZ2h0IDwgYm91bmRIZWlnaHQgPyBtYXhIZWlnaHQgOiBib3VuZEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnByb3BzLmJvdW5kcyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgYm91bmRXaWR0aCA9IHRoaXMucHJvcHMuYm91bmRzLm9mZnNldFdpZHRoICsgKHRoaXMudGFyZ2V0TGVmdCAtIHRoaXMucmVzaXphYmxlTGVmdCk7XG4gICAgICAgICAgICB2YXIgYm91bmRIZWlnaHQgPSB0aGlzLnByb3BzLmJvdW5kcy5vZmZzZXRIZWlnaHQgKyAodGhpcy50YXJnZXRUb3AgLSB0aGlzLnJlc2l6YWJsZVRvcCk7XG4gICAgICAgICAgICBtYXhXaWR0aCA9IG1heFdpZHRoICYmIG1heFdpZHRoIDwgYm91bmRXaWR0aCA/IG1heFdpZHRoIDogYm91bmRXaWR0aDtcbiAgICAgICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCAmJiBtYXhIZWlnaHQgPCBib3VuZEhlaWdodCA/IG1heEhlaWdodCA6IGJvdW5kSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG1heFdpZHRoOiBtYXhXaWR0aCwgbWF4SGVpZ2h0OiBtYXhIZWlnaHQgfTtcbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUuY2FsY3VsYXRlTmV3U2l6ZUZyb21EaXJlY3Rpb24gPSBmdW5jdGlvbiAoY2xpZW50WCwgY2xpZW50WSkge1xuICAgICAgICB2YXIgc2NhbGUgPSB0aGlzLnByb3BzLnNjYWxlIHx8IDE7XG4gICAgICAgIHZhciByZXNpemVSYXRpbyA9IHRoaXMucHJvcHMucmVzaXplUmF0aW8gfHwgMTtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5zdGF0ZSwgZGlyZWN0aW9uID0gX2EuZGlyZWN0aW9uLCBvcmlnaW5hbCA9IF9hLm9yaWdpbmFsO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLnByb3BzLCBsb2NrQXNwZWN0UmF0aW8gPSBfYi5sb2NrQXNwZWN0UmF0aW8sIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0ID0gX2IubG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQsIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGggPSBfYi5sb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoO1xuICAgICAgICB2YXIgbmV3V2lkdGggPSBvcmlnaW5hbC53aWR0aDtcbiAgICAgICAgdmFyIG5ld0hlaWdodCA9IG9yaWdpbmFsLmhlaWdodDtcbiAgICAgICAgdmFyIGV4dHJhSGVpZ2h0ID0gbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQgfHwgMDtcbiAgICAgICAgdmFyIGV4dHJhV2lkdGggPSBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoIHx8IDA7XG4gICAgICAgIGlmIChoYXNEaXJlY3Rpb24oJ3JpZ2h0JywgZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgbmV3V2lkdGggPSBvcmlnaW5hbC53aWR0aCArICgoY2xpZW50WCAtIG9yaWdpbmFsLngpICogcmVzaXplUmF0aW8pIC8gc2NhbGU7XG4gICAgICAgICAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gKG5ld1dpZHRoIC0gZXh0cmFXaWR0aCkgLyB0aGlzLnJhdGlvICsgZXh0cmFIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0RpcmVjdGlvbignbGVmdCcsIGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIG5ld1dpZHRoID0gb3JpZ2luYWwud2lkdGggLSAoKGNsaWVudFggLSBvcmlnaW5hbC54KSAqIHJlc2l6ZVJhdGlvKSAvIHNjYWxlO1xuICAgICAgICAgICAgaWYgKGxvY2tBc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IChuZXdXaWR0aCAtIGV4dHJhV2lkdGgpIC8gdGhpcy5yYXRpbyArIGV4dHJhSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNEaXJlY3Rpb24oJ2JvdHRvbScsIGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IG9yaWdpbmFsLmhlaWdodCArICgoY2xpZW50WSAtIG9yaWdpbmFsLnkpICogcmVzaXplUmF0aW8pIC8gc2NhbGU7XG4gICAgICAgICAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSAobmV3SGVpZ2h0IC0gZXh0cmFIZWlnaHQpICogdGhpcy5yYXRpbyArIGV4dHJhV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0RpcmVjdGlvbigndG9wJywgZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gb3JpZ2luYWwuaGVpZ2h0IC0gKChjbGllbnRZIC0gb3JpZ2luYWwueSkgKiByZXNpemVSYXRpbykgLyBzY2FsZTtcbiAgICAgICAgICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IChuZXdIZWlnaHQgLSBleHRyYUhlaWdodCkgKiB0aGlzLnJhdGlvICsgZXh0cmFXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBuZXdXaWR0aDogbmV3V2lkdGgsIG5ld0hlaWdodDogbmV3SGVpZ2h0IH07XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLmNhbGN1bGF0ZU5ld1NpemVGcm9tQXNwZWN0UmF0aW8gPSBmdW5jdGlvbiAobmV3V2lkdGgsIG5ld0hlaWdodCwgbWF4LCBtaW4pIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9ja0FzcGVjdFJhdGlvID0gX2EubG9ja0FzcGVjdFJhdGlvLCBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCA9IF9hLmxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0LCBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoID0gX2EubG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aDtcbiAgICAgICAgdmFyIGNvbXB1dGVkTWluV2lkdGggPSB0eXBlb2YgbWluLndpZHRoID09PSAndW5kZWZpbmVkJyA/IDEwIDogbWluLndpZHRoO1xuICAgICAgICB2YXIgY29tcHV0ZWRNYXhXaWR0aCA9IHR5cGVvZiBtYXgud2lkdGggPT09ICd1bmRlZmluZWQnIHx8IG1heC53aWR0aCA8IDAgPyBuZXdXaWR0aCA6IG1heC53aWR0aDtcbiAgICAgICAgdmFyIGNvbXB1dGVkTWluSGVpZ2h0ID0gdHlwZW9mIG1pbi5oZWlnaHQgPT09ICd1bmRlZmluZWQnID8gMTAgOiBtaW4uaGVpZ2h0O1xuICAgICAgICB2YXIgY29tcHV0ZWRNYXhIZWlnaHQgPSB0eXBlb2YgbWF4LmhlaWdodCA9PT0gJ3VuZGVmaW5lZCcgfHwgbWF4LmhlaWdodCA8IDAgPyBuZXdIZWlnaHQgOiBtYXguaGVpZ2h0O1xuICAgICAgICB2YXIgZXh0cmFIZWlnaHQgPSBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCB8fCAwO1xuICAgICAgICB2YXIgZXh0cmFXaWR0aCA9IGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGggfHwgMDtcbiAgICAgICAgaWYgKGxvY2tBc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgdmFyIGV4dHJhTWluV2lkdGggPSAoY29tcHV0ZWRNaW5IZWlnaHQgLSBleHRyYUhlaWdodCkgKiB0aGlzLnJhdGlvICsgZXh0cmFXaWR0aDtcbiAgICAgICAgICAgIHZhciBleHRyYU1heFdpZHRoID0gKGNvbXB1dGVkTWF4SGVpZ2h0IC0gZXh0cmFIZWlnaHQpICogdGhpcy5yYXRpbyArIGV4dHJhV2lkdGg7XG4gICAgICAgICAgICB2YXIgZXh0cmFNaW5IZWlnaHQgPSAoY29tcHV0ZWRNaW5XaWR0aCAtIGV4dHJhV2lkdGgpIC8gdGhpcy5yYXRpbyArIGV4dHJhSGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGV4dHJhTWF4SGVpZ2h0ID0gKGNvbXB1dGVkTWF4V2lkdGggLSBleHRyYVdpZHRoKSAvIHRoaXMucmF0aW8gKyBleHRyYUhlaWdodDtcbiAgICAgICAgICAgIHZhciBsb2NrZWRNaW5XaWR0aCA9IE1hdGgubWF4KGNvbXB1dGVkTWluV2lkdGgsIGV4dHJhTWluV2lkdGgpO1xuICAgICAgICAgICAgdmFyIGxvY2tlZE1heFdpZHRoID0gTWF0aC5taW4oY29tcHV0ZWRNYXhXaWR0aCwgZXh0cmFNYXhXaWR0aCk7XG4gICAgICAgICAgICB2YXIgbG9ja2VkTWluSGVpZ2h0ID0gTWF0aC5tYXgoY29tcHV0ZWRNaW5IZWlnaHQsIGV4dHJhTWluSGVpZ2h0KTtcbiAgICAgICAgICAgIHZhciBsb2NrZWRNYXhIZWlnaHQgPSBNYXRoLm1pbihjb21wdXRlZE1heEhlaWdodCwgZXh0cmFNYXhIZWlnaHQpO1xuICAgICAgICAgICAgbmV3V2lkdGggPSBjbGFtcChuZXdXaWR0aCwgbG9ja2VkTWluV2lkdGgsIGxvY2tlZE1heFdpZHRoKTtcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IGNsYW1wKG5ld0hlaWdodCwgbG9ja2VkTWluSGVpZ2h0LCBsb2NrZWRNYXhIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3V2lkdGggPSBjbGFtcChuZXdXaWR0aCwgY29tcHV0ZWRNaW5XaWR0aCwgY29tcHV0ZWRNYXhXaWR0aCk7XG4gICAgICAgICAgICBuZXdIZWlnaHQgPSBjbGFtcChuZXdIZWlnaHQsIGNvbXB1dGVkTWluSGVpZ2h0LCBjb21wdXRlZE1heEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgbmV3V2lkdGg6IG5ld1dpZHRoLCBuZXdIZWlnaHQ6IG5ld0hlaWdodCB9O1xuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS5zZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEZvciBwYXJlbnQgYm91bmRhcnlcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYm91bmRzID09PSAncGFyZW50Jykge1xuICAgICAgICAgICAgdmFyIHBhcmVudF8zID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgICAgICAgaWYgKHBhcmVudF8zIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50UmVjdCA9IHBhcmVudF8zLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50TGVmdCA9IHBhcmVudFJlY3QubGVmdDtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudFRvcCA9IHBhcmVudFJlY3QudG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZvciB0YXJnZXQoaHRtbCBlbGVtZW50KSBib3VuZGFyeVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5ib3VuZHMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldFJlY3QgPSB0aGlzLnByb3BzLmJvdW5kcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0TGVmdCA9IHRhcmdldFJlY3QubGVmdDtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0VG9wID0gdGFyZ2V0UmVjdC50b3A7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGJvdW5kYXJ5XG4gICAgICAgIGlmICh0aGlzLnJlc2l6YWJsZSkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5yZXNpemFibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGxlZnQgPSBfYS5sZWZ0LCB0b3BfMSA9IF9hLnRvcDtcbiAgICAgICAgICAgIHRoaXMucmVzaXphYmxlTGVmdCA9IGxlZnQ7XG4gICAgICAgICAgICB0aGlzLnJlc2l6YWJsZVRvcCA9IHRvcF8xO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLm9uUmVzaXplU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQsIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMucmVzaXphYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNsaWVudFggPSAwO1xuICAgICAgICB2YXIgY2xpZW50WSA9IDA7XG4gICAgICAgIGlmIChldmVudC5uYXRpdmVFdmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcbiAgICAgICAgICAgIGNsaWVudFggPSBldmVudC5uYXRpdmVFdmVudC5jbGllbnRYO1xuICAgICAgICAgICAgY2xpZW50WSA9IGV2ZW50Lm5hdGl2ZUV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgICAvLyBXaGVuIHVzZXIgY2xpY2sgd2l0aCByaWdodCBidXR0b24gdGhlIHJlc2l6ZSBpcyBzdHVjayBpbiByZXNpemluZyBtb2RlXG4gICAgICAgICAgICAvLyB1bnRpbCB1c2VycyBjbGlja3MgYWdhaW4sIGRvbnQgY29udGludWUgaWYgcmlnaHQgY2xpY2sgaXMgdXNlZC5cbiAgICAgICAgICAgIC8vIEhBQ0s6IE1vdXNlRXZlbnQgZG9lcyBub3QgaGF2ZSBgd2hpY2hgIGZyb20gZmxvdy1iaW4gdjAuNjguXG4gICAgICAgICAgICBpZiAoZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQubmF0aXZlRXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICBjbGllbnRYID0gZXZlbnQubmF0aXZlRXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgY2xpZW50WSA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2l6ZVN0YXJ0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpemFibGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRSZXNpemUgPSB0aGlzLnByb3BzLm9uUmVzaXplU3RhcnQoZXZlbnQsIGRpcmVjdGlvbiwgdGhpcy5yZXNpemFibGUpO1xuICAgICAgICAgICAgICAgIGlmIChzdGFydFJlc2l6ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBGaXggIzE2OFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuc2l6ZS5oZWlnaHQgIT09ICd1bmRlZmluZWQnICYmIHRoaXMucHJvcHMuc2l6ZS5oZWlnaHQgIT09IHRoaXMuc3RhdGUuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhlaWdodDogdGhpcy5wcm9wcy5zaXplLmhlaWdodCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5zaXplLndpZHRoICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnByb3BzLnNpemUud2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2lkdGg6IHRoaXMucHJvcHMuc2l6ZS53aWR0aCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBGb3IgbG9ja0FzcGVjdFJhdGlvIGNhc2VcbiAgICAgICAgdGhpcy5yYXRpbyA9XG4gICAgICAgICAgICB0eXBlb2YgdGhpcy5wcm9wcy5sb2NrQXNwZWN0UmF0aW8gPT09ICdudW1iZXInID8gdGhpcy5wcm9wcy5sb2NrQXNwZWN0UmF0aW8gOiB0aGlzLnNpemUud2lkdGggLyB0aGlzLnNpemUuaGVpZ2h0O1xuICAgICAgICB2YXIgZmxleEJhc2lzO1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMucmVzaXphYmxlKTtcbiAgICAgICAgaWYgKGNvbXB1dGVkU3R5bGUuZmxleEJhc2lzICE9PSAnYXV0bycpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnRfNCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRfNCkge1xuICAgICAgICAgICAgICAgIHZhciBkaXIgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnRfNCkuZmxleERpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLmZsZXhEaXIgPSBkaXIuc3RhcnRzV2l0aCgncm93JykgPyAncm93JyA6ICdjb2x1bW4nO1xuICAgICAgICAgICAgICAgIGZsZXhCYXNpcyA9IGNvbXB1dGVkU3R5bGUuZmxleEJhc2lzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZvciBib3VuZGFyeVxuICAgICAgICB0aGlzLnNldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICAgICAgb3JpZ2luYWw6IHtcbiAgICAgICAgICAgICAgICB4OiBjbGllbnRYLFxuICAgICAgICAgICAgICAgIHk6IGNsaWVudFksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuc2l6ZS53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc2l6ZS5oZWlnaHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNSZXNpemluZzogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRTdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMuc3RhdGUuYmFja2dyb3VuZFN0eWxlKSwgeyBjdXJzb3I6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGV2ZW50LnRhcmdldCkuY3Vyc29yIHx8ICdhdXRvJyB9KSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgICAgICAgZmxleEJhc2lzOiBmbGV4QmFzaXMsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNSZXNpemluZyB8fCAhdGhpcy5yZXNpemFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBtYXhXaWR0aCA9IF9hLm1heFdpZHRoLCBtYXhIZWlnaHQgPSBfYS5tYXhIZWlnaHQsIG1pbldpZHRoID0gX2EubWluV2lkdGgsIG1pbkhlaWdodCA9IF9hLm1pbkhlaWdodDtcbiAgICAgICAgdmFyIGNsaWVudFggPSBldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgPyBldmVudC5jbGllbnRYIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB2YXIgY2xpZW50WSA9IGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCA/IGV2ZW50LmNsaWVudFkgOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgIHZhciBfYiA9IHRoaXMuc3RhdGUsIGRpcmVjdGlvbiA9IF9iLmRpcmVjdGlvbiwgb3JpZ2luYWwgPSBfYi5vcmlnaW5hbCwgd2lkdGggPSBfYi53aWR0aCwgaGVpZ2h0ID0gX2IuaGVpZ2h0O1xuICAgICAgICB2YXIgcGFyZW50U2l6ZSA9IHRoaXMuZ2V0UGFyZW50U2l6ZSgpO1xuICAgICAgICB2YXIgbWF4ID0gY2FsY3VsYXRlTmV3TWF4KHBhcmVudFNpemUsIG1heFdpZHRoLCBtYXhIZWlnaHQsIG1pbldpZHRoLCBtaW5IZWlnaHQpO1xuICAgICAgICBtYXhXaWR0aCA9IG1heC5tYXhXaWR0aDtcbiAgICAgICAgbWF4SGVpZ2h0ID0gbWF4Lm1heEhlaWdodDtcbiAgICAgICAgbWluV2lkdGggPSBtYXgubWluV2lkdGg7XG4gICAgICAgIG1pbkhlaWdodCA9IG1heC5taW5IZWlnaHQ7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgc2l6ZVxuICAgICAgICB2YXIgX2MgPSB0aGlzLmNhbGN1bGF0ZU5ld1NpemVGcm9tRGlyZWN0aW9uKGNsaWVudFgsIGNsaWVudFkpLCBuZXdIZWlnaHQgPSBfYy5uZXdIZWlnaHQsIG5ld1dpZHRoID0gX2MubmV3V2lkdGg7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBtYXggc2l6ZSBmcm9tIGJvdW5kYXJ5IHNldHRpbmdzXG4gICAgICAgIHZhciBib3VuZGFyeU1heCA9IHRoaXMuY2FsY3VsYXRlTmV3TWF4RnJvbUJvdW5kYXJ5KG1heFdpZHRoLCBtYXhIZWlnaHQpO1xuICAgICAgICAvLyBDYWxjdWxhdGUgbmV3IHNpemUgZnJvbSBhc3BlY3QgcmF0aW9cbiAgICAgICAgdmFyIG5ld1NpemUgPSB0aGlzLmNhbGN1bGF0ZU5ld1NpemVGcm9tQXNwZWN0UmF0aW8obmV3V2lkdGgsIG5ld0hlaWdodCwgeyB3aWR0aDogYm91bmRhcnlNYXgubWF4V2lkdGgsIGhlaWdodDogYm91bmRhcnlNYXgubWF4SGVpZ2h0IH0sIHsgd2lkdGg6IG1pbldpZHRoLCBoZWlnaHQ6IG1pbkhlaWdodCB9KTtcbiAgICAgICAgbmV3V2lkdGggPSBuZXdTaXplLm5ld1dpZHRoO1xuICAgICAgICBuZXdIZWlnaHQgPSBuZXdTaXplLm5ld0hlaWdodDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZ3JpZCkge1xuICAgICAgICAgICAgdmFyIG5ld0dyaWRXaWR0aCA9IHNuYXAobmV3V2lkdGgsIHRoaXMucHJvcHMuZ3JpZFswXSk7XG4gICAgICAgICAgICB2YXIgbmV3R3JpZEhlaWdodCA9IHNuYXAobmV3SGVpZ2h0LCB0aGlzLnByb3BzLmdyaWRbMV0pO1xuICAgICAgICAgICAgdmFyIGdhcCA9IHRoaXMucHJvcHMuc25hcEdhcCB8fCAwO1xuICAgICAgICAgICAgbmV3V2lkdGggPSBnYXAgPT09IDAgfHwgTWF0aC5hYnMobmV3R3JpZFdpZHRoIC0gbmV3V2lkdGgpIDw9IGdhcCA/IG5ld0dyaWRXaWR0aCA6IG5ld1dpZHRoO1xuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gZ2FwID09PSAwIHx8IE1hdGguYWJzKG5ld0dyaWRIZWlnaHQgLSBuZXdIZWlnaHQpIDw9IGdhcCA/IG5ld0dyaWRIZWlnaHQgOiBuZXdIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc25hcCAmJiB0aGlzLnByb3BzLnNuYXAueCkge1xuICAgICAgICAgICAgbmV3V2lkdGggPSBmaW5kQ2xvc2VzdFNuYXAobmV3V2lkdGgsIHRoaXMucHJvcHMuc25hcC54LCB0aGlzLnByb3BzLnNuYXBHYXApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNuYXAgJiYgdGhpcy5wcm9wcy5zbmFwLnkpIHtcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IGZpbmRDbG9zZXN0U25hcChuZXdIZWlnaHQsIHRoaXMucHJvcHMuc25hcC55LCB0aGlzLnByb3BzLnNuYXBHYXApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWx0YSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBuZXdXaWR0aCAtIG9yaWdpbmFsLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBuZXdIZWlnaHQgLSBvcmlnaW5hbC5oZWlnaHQsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh3aWR0aCAmJiB0eXBlb2Ygd2lkdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoZW5kc1dpdGgod2lkdGgsICclJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVyY2VudCA9IChuZXdXaWR0aCAvIHBhcmVudFNpemUud2lkdGgpICogMTAwO1xuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gcGVyY2VudCArIFwiJVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZW5kc1dpdGgod2lkdGgsICd2dycpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZ3ID0gKG5ld1dpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogMTAwO1xuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gdncgKyBcInZ3XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbmRzV2l0aCh3aWR0aCwgJ3ZoJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmggPSAobmV3V2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogMTAwO1xuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gdmggKyBcInZoXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlaWdodCAmJiB0eXBlb2YgaGVpZ2h0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGVuZHNXaXRoKGhlaWdodCwgJyUnKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZXJjZW50ID0gKG5ld0hlaWdodCAvIHBhcmVudFNpemUuaGVpZ2h0KSAqIDEwMDtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBwZXJjZW50ICsgXCIlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbmRzV2l0aChoZWlnaHQsICd2dycpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZ3ID0gKG5ld0hlaWdodCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDEwMDtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSB2dyArIFwidndcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVuZHNXaXRoKGhlaWdodCwgJ3ZoJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmggPSAobmV3SGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0KSAqIDEwMDtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSB2aCArIFwidmhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5jcmVhdGVTaXplRm9yQ3NzUHJvcGVydHkobmV3V2lkdGgsICd3aWR0aCcpLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmNyZWF0ZVNpemVGb3JDc3NQcm9wZXJ0eShuZXdIZWlnaHQsICdoZWlnaHQnKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuZmxleERpciA9PT0gJ3JvdycpIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLmZsZXhCYXNpcyA9IG5ld1N0YXRlLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZmxleERpciA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLmZsZXhCYXNpcyA9IG5ld1N0YXRlLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNpemUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZXNpemUoZXZlbnQsIGRpcmVjdGlvbiwgdGhpcy5yZXNpemFibGUsIGRlbHRhKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS5vbk1vdXNlVXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5zdGF0ZSwgaXNSZXNpemluZyA9IF9hLmlzUmVzaXppbmcsIGRpcmVjdGlvbiA9IF9hLmRpcmVjdGlvbiwgb3JpZ2luYWwgPSBfYS5vcmlnaW5hbDtcbiAgICAgICAgaWYgKCFpc1Jlc2l6aW5nIHx8ICF0aGlzLnJlc2l6YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWx0YSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnNpemUud2lkdGggLSBvcmlnaW5hbC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zaXplLmhlaWdodCAtIG9yaWdpbmFsLmhlaWdodCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNpemVTdG9wKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplU3RvcChldmVudCwgZGlyZWN0aW9uLCB0aGlzLnJlc2l6YWJsZSwgZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5wcm9wcy5zaXplKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzUmVzaXppbmc6IGZhbHNlLFxuICAgICAgICAgICAgYmFja2dyb3VuZFN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kU3R5bGUpLCB7IGN1cnNvcjogJ2F1dG8nIH0pLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUudXBkYXRlU2l6ZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodCB9KTtcbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUucmVuZGVyUmVzaXplciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgZW5hYmxlID0gX2EuZW5hYmxlLCBoYW5kbGVTdHlsZXMgPSBfYS5oYW5kbGVTdHlsZXMsIGhhbmRsZUNsYXNzZXMgPSBfYS5oYW5kbGVDbGFzc2VzLCBoYW5kbGVXcmFwcGVyU3R5bGUgPSBfYS5oYW5kbGVXcmFwcGVyU3R5bGUsIGhhbmRsZVdyYXBwZXJDbGFzcyA9IF9hLmhhbmRsZVdyYXBwZXJDbGFzcywgaGFuZGxlQ29tcG9uZW50ID0gX2EuaGFuZGxlQ29tcG9uZW50O1xuICAgICAgICBpZiAoIWVuYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc2l6ZXJzID0gT2JqZWN0LmtleXMoZW5hYmxlKS5tYXAoZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgaWYgKGVuYWJsZVtkaXJdICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChyZXNpemVyXzEuUmVzaXplciwgeyBrZXk6IGRpciwgZGlyZWN0aW9uOiBkaXIsIG9uUmVzaXplU3RhcnQ6IF90aGlzLm9uUmVzaXplU3RhcnQsIHJlcGxhY2VTdHlsZXM6IGhhbmRsZVN0eWxlcyAmJiBoYW5kbGVTdHlsZXNbZGlyXSwgY2xhc3NOYW1lOiBoYW5kbGVDbGFzc2VzICYmIGhhbmRsZUNsYXNzZXNbZGlyXSB9LCBoYW5kbGVDb21wb25lbnQgJiYgaGFuZGxlQ29tcG9uZW50W2Rpcl0gPyBoYW5kbGVDb21wb25lbnRbZGlyXSA6IG51bGwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gIzkzIFdyYXAgdGhlIHJlc2l6ZSBib3ggaW4gc3BhbiAod2lsbCBub3QgYnJlYWsgMTAwJSB3aWR0aC9oZWlnaHQpXG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGhhbmRsZVdyYXBwZXJDbGFzcywgc3R5bGU6IGhhbmRsZVdyYXBwZXJTdHlsZSB9LCByZXNpemVycykpO1xuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBleHRlbmRzUHJvcHMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgICAgICBpZiAoZGVmaW5lZFByb3BzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjW2tleV0gPSBfdGhpcy5wcm9wc1trZXldO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pO1xuICAgICAgICB2YXIgc3R5bGUgPSBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB1c2VyU2VsZWN0OiB0aGlzLnN0YXRlLmlzUmVzaXppbmcgPyAnbm9uZScgOiAnYXV0bycgfSwgdGhpcy5wcm9wcy5zdHlsZSksIHRoaXMuc2l6ZVN0eWxlKSwgeyBtYXhXaWR0aDogdGhpcy5wcm9wcy5tYXhXaWR0aCwgbWF4SGVpZ2h0OiB0aGlzLnByb3BzLm1heEhlaWdodCwgbWluV2lkdGg6IHRoaXMucHJvcHMubWluV2lkdGgsIG1pbkhlaWdodDogdGhpcy5wcm9wcy5taW5IZWlnaHQsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBmbGV4U2hyaW5rOiAwIH0pO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mbGV4QmFzaXMpIHtcbiAgICAgICAgICAgIHN0eWxlLmZsZXhCYXNpcyA9IHRoaXMuc3RhdGUuZmxleEJhc2lzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfX2Fzc2lnbih7IHJlZjogdGhpcy5yZWYsIHN0eWxlOiBzdHlsZSwgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSB9LCBleHRlbmRzUHJvcHMpLFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc1Jlc2l6aW5nICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kU3R5bGUgfSksXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgdGhpcy5yZW5kZXJSZXNpemVyKCkpKTtcbiAgICB9O1xuICAgIFJlc2l6YWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIG9uUmVzaXplU3RhcnQ6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgb25SZXNpemU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgb25SZXNpemVTdG9wOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIGVuYWJsZToge1xuICAgICAgICAgICAgdG9wOiB0cnVlLFxuICAgICAgICAgICAgcmlnaHQ6IHRydWUsXG4gICAgICAgICAgICBib3R0b206IHRydWUsXG4gICAgICAgICAgICBsZWZ0OiB0cnVlLFxuICAgICAgICAgICAgdG9wUmlnaHQ6IHRydWUsXG4gICAgICAgICAgICBib3R0b21SaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIGJvdHRvbUxlZnQ6IHRydWUsXG4gICAgICAgICAgICB0b3BMZWZ0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBzdHlsZToge30sXG4gICAgICAgIGdyaWQ6IFsxLCAxXSxcbiAgICAgICAgbG9ja0FzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICAgICAgbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aDogMCxcbiAgICAgICAgbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQ6IDAsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICByZXNpemVSYXRpbzogMSxcbiAgICAgICAgc25hcEdhcDogMCxcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemFibGU7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuUmVzaXphYmxlID0gUmVzaXphYmxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBzdHlsZXMgPSB7XG4gICAgdG9wOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwcHgnLFxuICAgICAgICB0b3A6ICctNXB4JyxcbiAgICAgICAgbGVmdDogJzBweCcsXG4gICAgICAgIGN1cnNvcjogJ3Jvdy1yZXNpemUnLFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgICAgd2lkdGg6ICcxMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHRvcDogJzBweCcsXG4gICAgICAgIHJpZ2h0OiAnLTVweCcsXG4gICAgICAgIGN1cnNvcjogJ2NvbC1yZXNpemUnLFxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwcHgnLFxuICAgICAgICBib3R0b206ICctNXB4JyxcbiAgICAgICAgbGVmdDogJzBweCcsXG4gICAgICAgIGN1cnNvcjogJ3Jvdy1yZXNpemUnLFxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgICB3aWR0aDogJzEwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgdG9wOiAnMHB4JyxcbiAgICAgICAgbGVmdDogJy01cHgnLFxuICAgICAgICBjdXJzb3I6ICdjb2wtcmVzaXplJyxcbiAgICB9LFxuICAgIHRvcFJpZ2h0OiB7XG4gICAgICAgIHdpZHRoOiAnMjBweCcsXG4gICAgICAgIGhlaWdodDogJzIwcHgnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgcmlnaHQ6ICctMTBweCcsXG4gICAgICAgIHRvcDogJy0xMHB4JyxcbiAgICAgICAgY3Vyc29yOiAnbmUtcmVzaXplJyxcbiAgICB9LFxuICAgIGJvdHRvbVJpZ2h0OiB7XG4gICAgICAgIHdpZHRoOiAnMjBweCcsXG4gICAgICAgIGhlaWdodDogJzIwcHgnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgcmlnaHQ6ICctMTBweCcsXG4gICAgICAgIGJvdHRvbTogJy0xMHB4JyxcbiAgICAgICAgY3Vyc29yOiAnc2UtcmVzaXplJyxcbiAgICB9LFxuICAgIGJvdHRvbUxlZnQ6IHtcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiAnLTEwcHgnLFxuICAgICAgICBib3R0b206ICctMTBweCcsXG4gICAgICAgIGN1cnNvcjogJ3N3LXJlc2l6ZScsXG4gICAgfSxcbiAgICB0b3BMZWZ0OiB7XG4gICAgICAgIHdpZHRoOiAnMjBweCcsXG4gICAgICAgIGhlaWdodDogJzIwcHgnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgbGVmdDogJy0xMHB4JyxcbiAgICAgICAgdG9wOiAnLTEwcHgnLFxuICAgICAgICBjdXJzb3I6ICdudy1yZXNpemUnLFxuICAgIH0sXG59O1xudmFyIFJlc2l6ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlc2l6ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmVzaXplcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uUmVzaXplU3RhcnQoZSwgX3RoaXMucHJvcHMuZGlyZWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uUmVzaXplU3RhcnQoZSwgX3RoaXMucHJvcHMuZGlyZWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBSZXNpemVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJycsIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB1c2VyU2VsZWN0OiAnbm9uZScgfSwgc3R5bGVzW3RoaXMucHJvcHMuZGlyZWN0aW9uXSksICh0aGlzLnByb3BzLnJlcGxhY2VTdHlsZXMgfHwge30pKSwgb25Nb3VzZURvd246IHRoaXMub25Nb3VzZURvd24sIG9uVG91Y2hTdGFydDogdGhpcy5vblRvdWNoU3RhcnQgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlc2l6ZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuUmVzaXplciA9IFJlc2l6ZXI7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIlNpZW1hXCIsW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5TaWVtYT10KCk6ZS5TaWVtYT10KCl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKGlbcl0pcmV0dXJuIGlbcl0uZXhwb3J0czt2YXIgbj1pW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyx0KSxuLmw9ITAsbi5leHBvcnRzfXZhciBpPXt9O3JldHVybiB0Lm09ZSx0LmM9aSx0LmQ9ZnVuY3Rpb24oZSxpLHIpe3QubyhlLGkpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6cn0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIGk9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChpLFwiYVwiLGkpLGl9LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiXCIsdCh0LnM9MCl9KFtmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0scz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIHI9dFtpXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LGkscil7cmV0dXJuIGkmJmUodC5wcm90b3R5cGUsaSksciYmZSh0LHIpLHR9fSgpLGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBpPXRoaXM7aWYocih0aGlzLGUpLHRoaXMuY29uZmlnPWUubWVyZ2VTZXR0aW5ncyh0KSx0aGlzLnNlbGVjdG9yPVwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5zZWxlY3Rvcj9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29uZmlnLnNlbGVjdG9yKTp0aGlzLmNvbmZpZy5zZWxlY3RvcixudWxsPT09dGhpcy5zZWxlY3Rvcil0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd3Jvbmcgd2l0aCB5b3VyIHNlbGVjdG9yIPCfmK1cIik7dGhpcy5yZXNvbHZlU2xpZGVzTnVtYmVyKCksdGhpcy5zZWxlY3RvcldpZHRoPXRoaXMuc2VsZWN0b3Iub2Zmc2V0V2lkdGgsdGhpcy5pbm5lckVsZW1lbnRzPVtdLnNsaWNlLmNhbGwodGhpcy5zZWxlY3Rvci5jaGlsZHJlbiksdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jb25maWcubG9vcD90aGlzLmNvbmZpZy5zdGFydEluZGV4JXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg6TWF0aC5tYXgoMCxNYXRoLm1pbih0aGlzLmNvbmZpZy5zdGFydEluZGV4LHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSksdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eT1lLndlYmtpdE9yTm90KCksW1wicmVzaXplSGFuZGxlclwiLFwidG91Y2hzdGFydEhhbmRsZXJcIixcInRvdWNoZW5kSGFuZGxlclwiLFwidG91Y2htb3ZlSGFuZGxlclwiLFwibW91c2Vkb3duSGFuZGxlclwiLFwibW91c2V1cEhhbmRsZXJcIixcIm1vdXNlbGVhdmVIYW5kbGVyXCIsXCJtb3VzZW1vdmVIYW5kbGVyXCIsXCJjbGlja0hhbmRsZXJcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtpW2VdPWlbZV0uYmluZChpKX0pLHRoaXMuaW5pdCgpfXJldHVybiBzKGUsW3trZXk6XCJhdHRhY2hFdmVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVIYW5kbGVyKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZHJhZz17c3RhcnRYOjAsZW5kWDowLHN0YXJ0WTowLGxldEl0R286bnVsbCxwcmV2ZW50Q2xpY2s6ITF9LHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLnRvdWNoc3RhcnRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHRoaXMudG91Y2hlbmRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLnRvdWNobW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMubW91c2Vkb3duSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMubW91c2V1cEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdXNlbGVhdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm1vdXNlbW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5jbGlja0hhbmRsZXIpKX19LHtrZXk6XCJkZXRhY2hFdmVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKX19LHtrZXk6XCJpbml0XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmF0dGFjaEV2ZW50cygpLHRoaXMuc2VsZWN0b3Iuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIix0aGlzLnNlbGVjdG9yLnN0eWxlLmRpcmVjdGlvbj10aGlzLmNvbmZpZy5ydGw/XCJydGxcIjpcImx0clwiLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHRoaXMuY29uZmlnLm9uSW5pdC5jYWxsKHRoaXMpfX0se2tleTpcImJ1aWxkU2xpZGVyRnJhbWVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UsdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMip0aGlzLnBlclBhZ2U6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDt0aGlzLnNsaWRlckZyYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53aWR0aD1lKnQrXCJweFwiLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuY29uZmlnLmRyYWdnYWJsZSYmKHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiXCIpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtpZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgcj10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKXt2YXIgbj10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tyXS5jbG9uZU5vZGUoITApKTtpLmFwcGVuZENoaWxkKG4pfWZvcih2YXIgcz0wO3M8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtzKyspe3ZhciBsPXRoaXMuYnVpbGRTbGlkZXJGcmFtZUl0ZW0odGhpcy5pbm5lckVsZW1lbnRzW3NdKTtpLmFwcGVuZENoaWxkKGwpfWlmKHRoaXMuY29uZmlnLmxvb3ApZm9yKHZhciBvPTA7bzx0aGlzLnBlclBhZ2U7bysrKXt2YXIgYT10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tvXS5jbG9uZU5vZGUoITApKTtpLmFwcGVuZENoaWxkKGEpfXRoaXMuc2xpZGVyRnJhbWUuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5pbm5lckhUTUw9XCJcIix0aGlzLnNlbGVjdG9yLmFwcGVuZENoaWxkKHRoaXMuc2xpZGVyRnJhbWUpLHRoaXMuc2xpZGVUb0N1cnJlbnQoKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lSXRlbVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHQuc3R5bGUuY3NzRmxvYXQ9dGhpcy5jb25maWcucnRsP1wicmlnaHRcIjpcImxlZnRcIix0LnN0eWxlLmZsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS53aWR0aD0odGhpcy5jb25maWcubG9vcD8xMDAvKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMip0aGlzLnBlclBhZ2UpOjEwMC90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKStcIiVcIix0LmFwcGVuZENoaWxkKGUpLHR9fSx7a2V5OlwicmVzb2x2ZVNsaWRlc051bWJlclwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYoXCJudW1iZXJcIj09dHlwZW9mIHRoaXMuY29uZmlnLnBlclBhZ2UpdGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2U7ZWxzZSBpZihcIm9iamVjdFwiPT09bih0aGlzLmNvbmZpZy5wZXJQYWdlKSl7dGhpcy5wZXJQYWdlPTE7Zm9yKHZhciBlIGluIHRoaXMuY29uZmlnLnBlclBhZ2Upd2luZG93LmlubmVyV2lkdGg+PWUmJih0aGlzLnBlclBhZ2U9dGhpcy5jb25maWcucGVyUGFnZVtlXSl9fX0se2tleTpcInByZXZcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXToxLHQ9YXJndW1lbnRzWzFdO2lmKCEodGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlKSl7dmFyIGk9dGhpcy5jdXJyZW50U2xpZGU7aWYodGhpcy5jb25maWcubG9vcCl7aWYodGhpcy5jdXJyZW50U2xpZGUtZTwwKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXItZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1heCh0aGlzLmN1cnJlbnRTbGlkZS1lLDApO2khPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQodGhpcy5jb25maWcubG9vcCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJuZXh0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlK2U+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2Upe3RoaXMuZGlzYWJsZVRyYW5zaXRpb24oKTt2YXIgcj10aGlzLmN1cnJlbnRTbGlkZS10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLG49dGhpcy5wZXJQYWdlLHM9cituLGw9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpzKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxvPXRoaXMuY29uZmlnLmRyYWdnYWJsZT90aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYOjA7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyhsK28pK1wicHgsIDAsIDApXCIsdGhpcy5jdXJyZW50U2xpZGU9citlfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jdXJyZW50U2xpZGUrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPU1hdGgubWluKHRoaXMuY3VycmVudFNsaWRlK2UsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpO2khPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQodGhpcy5jb25maWcubG9vcCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJkaXNhYmxlVHJhbnNpdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZW5hYmxlVHJhbnNpdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIFwiK3RoaXMuY29uZmlnLmR1cmF0aW9uK1wibXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZ319LHtrZXk6XCJnb1RvXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO3RoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/ZSV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWluKE1hdGgubWF4KGUsMCksdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLGkhPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQoKSx0aGlzLmNvbmZpZy5vbkNoYW5nZS5jYWxsKHRoaXMpLHQmJnQuY2FsbCh0aGlzKSl9fX0se2tleTpcInNsaWRlVG9DdXJyZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxpPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlOnRoaXMuY3VycmVudFNsaWRlLHI9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSppKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKTtlP3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3QuZW5hYmxlVHJhbnNpdGlvbigpLHQuc2xpZGVyRnJhbWUuc3R5bGVbdC50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIityK1wicHgsIDAsIDApXCJ9KX0pOnRoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIityK1wicHgsIDAsIDApXCJ9fSx7a2V5OlwidXBkYXRlQWZ0ZXJEcmFnXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT0odGhpcy5jb25maWcucnRsPy0xOjEpKih0aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYKSx0PU1hdGguYWJzKGUpLGk9dGhpcy5jb25maWcubXVsdGlwbGVEcmFnP01hdGguY2VpbCh0Lyh0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSk6MSxyPWU+MCYmdGhpcy5jdXJyZW50U2xpZGUtaTwwLG49ZTwwJiZ0aGlzLmN1cnJlbnRTbGlkZStpPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlO2U+MCYmdD50aGlzLmNvbmZpZy50aHJlc2hvbGQmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg+dGhpcy5wZXJQYWdlP3RoaXMucHJldihpKTplPDAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZSYmdGhpcy5uZXh0KGkpLHRoaXMuc2xpZGVUb0N1cnJlbnQocnx8bil9fSx7a2V5OlwicmVzaXplSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5yZXNvbHZlU2xpZGVzTnVtYmVyKCksdGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgmJih0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2U/MDp0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSksdGhpcy5zZWxlY3RvcldpZHRoPXRoaXMuc2VsZWN0b3Iub2Zmc2V0V2lkdGgsdGhpcy5idWlsZFNsaWRlckZyYW1lKCl9fSx7a2V5OlwiY2xlYXJEcmFnXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOnRoaXMuZHJhZy5wcmV2ZW50Q2xpY2t9fX0se2tleTpcInRvdWNoc3RhcnRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7LTEhPT1bXCJURVhUQVJFQVwiLFwiT1BUSU9OXCIsXCJJTlBVVFwiLFwiU0VMRUNUXCJdLmluZGV4T2YoZS50YXJnZXQubm9kZU5hbWUpfHwoZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS50b3VjaGVzWzBdLnBhZ2VYLHRoaXMuZHJhZy5zdGFydFk9ZS50b3VjaGVzWzBdLnBhZ2VZKX19LHtrZXk6XCJ0b3VjaGVuZEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy5kcmFnLmVuZFgmJnRoaXMudXBkYXRlQWZ0ZXJEcmFnKCksdGhpcy5jbGVhckRyYWcoKX19LHtrZXk6XCJ0b3VjaG1vdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZS5zdG9wUHJvcGFnYXRpb24oKSxudWxsPT09dGhpcy5kcmFnLmxldEl0R28mJih0aGlzLmRyYWcubGV0SXRHbz1NYXRoLmFicyh0aGlzLmRyYWcuc3RhcnRZLWUudG91Y2hlc1swXS5wYWdlWSk8TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WC1lLnRvdWNoZXNbMF0ucGFnZVgpKSx0aGlzLnBvaW50ZXJEb3duJiZ0aGlzLmRyYWcubGV0SXRHbyl7ZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZHJhZy5lbmRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZzt2YXIgdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxpPXQqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLHI9dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCxuPXRoaXMuY29uZmlnLnJ0bD9pK3I6aS1yO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisodGhpcy5jb25maWcucnRsPzE6LTEpKm4rXCJweCwgMCwgMClcIn19fSx7a2V5OlwibW91c2Vkb3duSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITAsdGhpcy5kcmFnLnN0YXJ0WD1lLnBhZ2VYKX19LHtrZXk6XCJtb3VzZXVwSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwibW91c2Vtb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSx0aGlzLnBvaW50ZXJEb3duKXtcIkFcIj09PWUudGFyZ2V0Lm5vZGVOYW1lJiYodGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMCksdGhpcy5kcmFnLmVuZFg9ZS5wYWdlWCx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYmJpbmdcIix0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZzt2YXIgdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxpPXQqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLHI9dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCxuPXRoaXMuY29uZmlnLnJ0bD9pK3I6aS1yO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisodGhpcy5jb25maWcucnRsPzE6LTEpKm4rXCJweCwgMCwgMClcIn19fSx7a2V5OlwibW91c2VsZWF2ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnBvaW50ZXJEb3duJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMSx0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCkpfX0se2tleTpcImNsaWNrSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuZHJhZy5wcmV2ZW50Q2xpY2smJmUucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcucHJldmVudENsaWNrPSExfX0se2tleTpcInJlbW92ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoZTwwfHxlPj10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkl0ZW0gdG8gcmVtb3ZlIGRvZXNuJ3QgZXhpc3Qg8J+YrVwiKTt2YXIgaT1lPHRoaXMuY3VycmVudFNsaWRlLHI9dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlLTE9PT1lOyhpfHxyKSYmdGhpcy5jdXJyZW50U2xpZGUtLSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKGUsMSksdGhpcy5idWlsZFNsaWRlckZyYW1lKCksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImluc2VydFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxpKXtpZih0PDB8fHQ+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsxKXRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBpbnNldCBpdCBhdCB0aGlzIGluZGV4IPCfmK1cIik7aWYoLTEhPT10aGlzLmlubmVyRWxlbWVudHMuaW5kZXhPZihlKSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2FtZSBpdGVtIGluIGEgY2Fyb3VzZWw/IFJlYWxseT8gTm9wZSDwn5itXCIpO3ZhciByPXQ8PXRoaXMuY3VycmVudFNsaWRlPjAmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5jdXJyZW50U2xpZGU9cj90aGlzLmN1cnJlbnRTbGlkZSsxOnRoaXMuY3VycmVudFNsaWRlLHRoaXMuaW5uZXJFbGVtZW50cy5zcGxpY2UodCwwLGUpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLGkmJmkuY2FsbCh0aGlzKX19LHtrZXk6XCJwcmVwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLDApLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJhcHBlbmRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuaW5zZXJ0KGUsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsxKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXSx0PWFyZ3VtZW50c1sxXTtpZih0aGlzLmRldGFjaEV2ZW50cygpLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiYXV0b1wiLGUpe2Zvcih2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscj0wO3I8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtyKyspaS5hcHBlbmRDaGlsZCh0aGlzLmlubmVyRWxlbWVudHNbcl0pO3RoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZChpKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpfXQmJnQuY2FsbCh0aGlzKX19XSxbe2tleTpcIm1lcmdlU2V0dGluZ3NcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD17c2VsZWN0b3I6XCIuc2llbWFcIixkdXJhdGlvbjoyMDAsZWFzaW5nOlwiZWFzZS1vdXRcIixwZXJQYWdlOjEsc3RhcnRJbmRleDowLGRyYWdnYWJsZTohMCxtdWx0aXBsZURyYWc6ITAsdGhyZXNob2xkOjIwLGxvb3A6ITEscnRsOiExLG9uSW5pdDpmdW5jdGlvbigpe30sb25DaGFuZ2U6ZnVuY3Rpb24oKXt9fSxpPWU7Zm9yKHZhciByIGluIGkpdFtyXT1pW3JdO3JldHVybiB0fX0se2tleTpcIndlYmtpdE9yTm90XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybT9cInRyYW5zZm9ybVwiOlwiV2Via2l0VHJhbnNmb3JtXCJ9fV0pLGV9KCk7dC5kZWZhdWx0PWwsZS5leHBvcnRzPXQuZGVmYXVsdH1dKX0pOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCxuby1wYXJhbS1yZWFzc2lnbixuby1zaGFkb3cgKi9cblxuLyoqXG4gKiBUaHJvdHRsZSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi4gRXNwZWNpYWxseSB1c2VmdWwgZm9yIHJhdGUgbGltaXRpbmdcbiAqIGV4ZWN1dGlvbiBvZiBoYW5kbGVycyBvbiBldmVudHMgbGlrZSByZXNpemUgYW5kIHNjcm9sbC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIGRlbGF5ICAgICAgICAgIEEgemVyby1vci1ncmVhdGVyIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gRm9yIGV2ZW50IGNhbGxiYWNrcywgdmFsdWVzIGFyb3VuZCAxMDAgb3IgMjUwIChvciBldmVuIGhpZ2hlcikgYXJlIG1vc3QgdXNlZnVsLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gICBbbm9UcmFpbGluZ10gICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIG5vVHJhaWxpbmcgaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBvbmx5IGV4ZWN1dGUgZXZlcnkgYGRlbGF5YCBtaWxsaXNlY29uZHMgd2hpbGUgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm90dGxlZC1mdW5jdGlvbiBpcyBiZWluZyBjYWxsZWQuIElmIG5vVHJhaWxpbmcgaXMgZmFsc2Ugb3IgdW5zcGVjaWZpZWQsIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgb25lIGZpbmFsIHRpbWVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgdGhlIGxhc3QgdGhyb3R0bGVkLWZ1bmN0aW9uIGNhbGwuIChBZnRlciB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGhhcyBub3QgYmVlbiBjYWxsZWQgZm9yIGBkZWxheWAgbWlsbGlzZWNvbmRzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgaW50ZXJuYWwgY291bnRlciBpcyByZXNldClcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgY2FsbGJhY2sgICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsIGFzLWlzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBgY2FsbGJhY2tgIHdoZW4gdGhlIHRocm90dGxlZC1mdW5jdGlvbiBpcyBleGVjdXRlZC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgW2RlYm91bmNlTW9kZV0gSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBzY2hlZHVsZSBgY2xlYXJgIHRvIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy4gSWYgYGRlYm91bmNlTW9kZWAgaXMgZmFsc2UgKGF0IGVuZCksXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlIGBjYWxsYmFja2AgdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgQSBuZXcsIHRocm90dGxlZCwgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlIChkZWxheSwgbm9UcmFpbGluZywgY2FsbGJhY2ssIGRlYm91bmNlTW9kZSkge1xuICAvKlxuICAgKiBBZnRlciB3cmFwcGVyIGhhcyBzdG9wcGVkIGJlaW5nIGNhbGxlZCwgdGhpcyB0aW1lb3V0IGVuc3VyZXMgdGhhdFxuICAgKiBgY2FsbGJhY2tgIGlzIGV4ZWN1dGVkIGF0IHRoZSBwcm9wZXIgdGltZXMgaW4gYHRocm90dGxlYCBhbmQgYGVuZGBcbiAgICogZGVib3VuY2UgbW9kZXMuXG4gICAqL1xuICB2YXIgdGltZW91dElEO1xuICB2YXIgY2FuY2VsbGVkID0gZmFsc2U7IC8vIEtlZXAgdHJhY2sgb2YgdGhlIGxhc3QgdGltZSBgY2FsbGJhY2tgIHdhcyBleGVjdXRlZC5cblxuICB2YXIgbGFzdEV4ZWMgPSAwOyAvLyBGdW5jdGlvbiB0byBjbGVhciBleGlzdGluZyB0aW1lb3V0XG5cbiAgZnVuY3Rpb24gY2xlYXJFeGlzdGluZ1RpbWVvdXQoKSB7XG4gICAgaWYgKHRpbWVvdXRJRCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG4gICAgfVxuICB9IC8vIEZ1bmN0aW9uIHRvIGNhbmNlbCBuZXh0IGV4ZWNcblxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBjbGVhckV4aXN0aW5nVGltZW91dCgpO1xuICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gIH0gLy8gYG5vVHJhaWxpbmdgIGRlZmF1bHRzIHRvIGZhbHN5LlxuXG5cbiAgaWYgKHR5cGVvZiBub1RyYWlsaW5nICE9PSAnYm9vbGVhbicpIHtcbiAgICBkZWJvdW5jZU1vZGUgPSBjYWxsYmFjaztcbiAgICBjYWxsYmFjayA9IG5vVHJhaWxpbmc7XG4gICAgbm9UcmFpbGluZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvKlxuICAgKiBUaGUgYHdyYXBwZXJgIGZ1bmN0aW9uIGVuY2Fwc3VsYXRlcyBhbGwgb2YgdGhlIHRocm90dGxpbmcgLyBkZWJvdW5jaW5nXG4gICAqIGZ1bmN0aW9uYWxpdHkgYW5kIHdoZW4gZXhlY3V0ZWQgd2lsbCBsaW1pdCB0aGUgcmF0ZSBhdCB3aGljaCBgY2FsbGJhY2tgXG4gICAqIGlzIGV4ZWN1dGVkLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIGxhc3RFeGVjO1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRXhlY3V0ZSBgY2FsbGJhY2tgIGFuZCB1cGRhdGUgdGhlIGBsYXN0RXhlY2AgdGltZXN0YW1wLlxuXG5cbiAgICBmdW5jdGlvbiBleGVjKCkge1xuICAgICAgbGFzdEV4ZWMgPSBEYXRlLm5vdygpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfVxuICAgIC8qXG4gICAgICogSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pIHRoaXMgaXMgdXNlZCB0byBjbGVhciB0aGUgZmxhZ1xuICAgICAqIHRvIGFsbG93IGZ1dHVyZSBgY2FsbGJhY2tgIGV4ZWN1dGlvbnMuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgdGltZW91dElEID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChkZWJvdW5jZU1vZGUgJiYgIXRpbWVvdXRJRCkge1xuICAgICAgLypcbiAgICAgICAqIFNpbmNlIGB3cmFwcGVyYCBpcyBiZWluZyBjYWxsZWQgZm9yIHRoZSBmaXJzdCB0aW1lIGFuZFxuICAgICAgICogYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBleGVjdXRlIGBjYWxsYmFja2AuXG4gICAgICAgKi9cbiAgICAgIGV4ZWMoKTtcbiAgICB9XG5cbiAgICBjbGVhckV4aXN0aW5nVGltZW91dCgpO1xuXG4gICAgaWYgKGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkICYmIGVsYXBzZWQgPiBkZWxheSkge1xuICAgICAgLypcbiAgICAgICAqIEluIHRocm90dGxlIG1vZGUsIGlmIGBkZWxheWAgdGltZSBoYXMgYmVlbiBleGNlZWRlZCwgZXhlY3V0ZVxuICAgICAgICogYGNhbGxiYWNrYC5cbiAgICAgICAqL1xuICAgICAgZXhlYygpO1xuICAgIH0gZWxzZSBpZiAobm9UcmFpbGluZyAhPT0gdHJ1ZSkge1xuICAgICAgLypcbiAgICAgICAqIEluIHRyYWlsaW5nIHRocm90dGxlIG1vZGUsIHNpbmNlIGBkZWxheWAgdGltZSBoYXMgbm90IGJlZW5cbiAgICAgICAqIGV4Y2VlZGVkLCBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvIGV4ZWN1dGUgYGRlbGF5YCBtcyBhZnRlciBtb3N0XG4gICAgICAgKiByZWNlbnQgZXhlY3V0aW9uLlxuICAgICAgICpcbiAgICAgICAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgc2NoZWR1bGUgYGNsZWFyYCB0byBleGVjdXRlXG4gICAgICAgKiBhZnRlciBgZGVsYXlgIG1zLlxuICAgICAgICpcbiAgICAgICAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIGZhbHNlIChhdCBlbmQpLCBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvXG4gICAgICAgKiBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG4gICAgICAgKi9cbiAgICAgIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoZGVib3VuY2VNb2RlID8gY2xlYXIgOiBleGVjLCBkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCA/IGRlbGF5IC0gZWxhcHNlZCA6IGRlbGF5KTtcbiAgICB9XG4gIH1cblxuICB3cmFwcGVyLmNhbmNlbCA9IGNhbmNlbDsgLy8gUmV0dXJuIHRoZSB3cmFwcGVyIGZ1bmN0aW9uLlxuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZmluZWQgKi9cbi8qKlxuICogRGVib3VuY2UgZXhlY3V0aW9uIG9mIGEgZnVuY3Rpb24uIERlYm91bmNpbmcsIHVubGlrZSB0aHJvdHRsaW5nLFxuICogZ3VhcmFudGVlcyB0aGF0IGEgZnVuY3Rpb24gaXMgb25seSBleGVjdXRlZCBhIHNpbmdsZSB0aW1lLCBlaXRoZXIgYXQgdGhlXG4gKiB2ZXJ5IGJlZ2lubmluZyBvZiBhIHNlcmllcyBvZiBjYWxscywgb3IgYXQgdGhlIHZlcnkgZW5kLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gICBkZWxheSAgICAgICAgIEEgemVyby1vci1ncmVhdGVyIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gRm9yIGV2ZW50IGNhbGxiYWNrcywgdmFsdWVzIGFyb3VuZCAxMDAgb3IgMjUwIChvciBldmVuIGhpZ2hlcikgYXJlIG1vc3QgdXNlZnVsLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gIFthdEJlZ2luXSAgICAgT3B0aW9uYWwsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBhdEJlZ2luIGlzIGZhbHNlIG9yIHVuc3BlY2lmaWVkLCBjYWxsYmFjayB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgYGRlbGF5YCBtaWxsaXNlY29uZHNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyIHRoZSBsYXN0IGRlYm91bmNlZC1mdW5jdGlvbiBjYWxsLiBJZiBhdEJlZ2luIGlzIHRydWUsIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgb25seSBhdCB0aGUgZmlyc3QgZGVib3VuY2VkLWZ1bmN0aW9uIGNhbGwuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQWZ0ZXIgdGhlIHRocm90dGxlZC1mdW5jdGlvbiBoYXMgbm90IGJlZW4gY2FsbGVkIGZvciBgZGVsYXlgIG1pbGxpc2Vjb25kcywgdGhlIGludGVybmFsIGNvdW50ZXIgaXMgcmVzZXQpLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsIGFzLWlzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYGNhbGxiYWNrYCB3aGVuIHRoZSBkZWJvdW5jZWQtZnVuY3Rpb24gaXMgZXhlY3V0ZWQuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3LCBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKi9cblxuZnVuY3Rpb24gZGVib3VuY2UgKGRlbGF5LCBhdEJlZ2luLCBjYWxsYmFjaykge1xuICByZXR1cm4gY2FsbGJhY2sgPT09IHVuZGVmaW5lZCA/IHRocm90dGxlKGRlbGF5LCBhdEJlZ2luLCBmYWxzZSkgOiB0aHJvdHRsZShkZWxheSwgY2FsbGJhY2ssIGF0QmVnaW4gIT09IGZhbHNlKTtcbn1cblxuZXhwb3J0IHsgdGhyb3R0bGUsIGRlYm91bmNlIH07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGJsb2NzOiB7XG4gICAgdHlwZTogXCJvYmplY3RcIixcbiAgICBkZWZhdWx0OiB7fVxuICB9LFxuICBoZWlnaHQ6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogNTAwXG4gIH0sXG4gIHNob3dEb3Q6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSxcbiAgc2hvd0Fycm93OiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH1cbn07XG4iLCJjb25zdCB7IEJ1dHRvbiwgRGFzaGljb24sIFNwaW5uZXIgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IHVzZUVmZmVjdCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgTWVkaWFVcGxvYWQsIE1lZGlhVXBsb2FkQ2hlY2sgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyB1c2VTZWxlY3QgfSA9IHdwLmRhdGE7XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gW1wiaW1hZ2VcIl07XG5cbmNvbnN0IEFkZEltYWdlID0gKHsgcHJvcHMsIGluaXRDYXJvdXNlbCwgZGVzdHJveUNhcm91c2VsIH0pID0+IHtcbiAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcbiAgY29uc3QgeyBibG9jcyB9ID0gYXR0cmlidXRlcztcbiAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoYmxvY3MpLmxlbmd0aDtcbiAgY29uc3QgaW5kZXggPSBsZW5ndGg7XG4gIC8vIGdldCB0aGUgaW1hZ2UgaW5mbyBmb3IgbmV3IGltYWdlXG4gIGNvbnN0IGltYWdlID0gdXNlU2VsZWN0KFxuICAgIHNlbGVjdCA9PiB7XG4gICAgICBsZXQgbmV3UGljID0gbnVsbDtcbiAgICAgIC8vIHNlYXJjaCBpbWFnZSB3aXRoIG5ld0ltYWdlID09PSB0cnVlXG4gICAgICBPYmplY3Qua2V5cyhibG9jcykuZm9yRWFjaChiID0+IHtcbiAgICAgICAgaWYgKGJsb2NzW2JdLm5ld0ltYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgbmV3UGljID0gYmxvY3NbYl07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgeyBnZXRNZWRpYSB9ID0gc2VsZWN0KFwiY29yZVwiKTtcbiAgICAgIC8vIGdldCBtZWRpYSBmb3IgdGhpcyBuZXcgcGljIGFkZGVkXG4gICAgICByZXR1cm4gbmV3UGljID8gZ2V0TWVkaWEobmV3UGljLmltYWdlSWQpIDoge307XG4gICAgfSxcbiAgICBbYmxvY3NdXG4gICk7XG4gIC8vIHVwZGF0ZSBpbWFnZSBpbmZvIHRvIGF0dHJpYnV0ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhibG9jcyk7XG4gICAgaWYgKGltYWdlICYmIGltYWdlLmlkKSB7XG4gICAgICBsZXQgX2luZGV4ID0gbnVsbDtcbiAgICAgIC8vIHNlYXJjaCBpbmZleCBmb3IgbmV3SW1hZ2UgPT09IHRydWVcbiAgICAgIGtleXMuZm9yRWFjaChiID0+IHtcbiAgICAgICAgaWYgKGJsb2NzW2JdLm5ld0ltYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgX2luZGV4ID0gYjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoX2luZGV4KSB7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgIGJsb2NzOiB7XG4gICAgICAgICAgICAuLi5ibG9jcyxcbiAgICAgICAgICAgIC4uLnsgW19pbmRleF06IHsgLi4uYmxvY3NbX2luZGV4XSwgaW1hZ2UsIG5ld0ltYWdlOiBmYWxzZSB9IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2ltYWdlXSk7XG5cbiAgLyoqXG4gICAqIGFkZCBuZXcgaW1hZ2VcbiAgICogQHBhcmFtIHt9IGltYWdlXG4gICAqL1xuICBjb25zdCBvblVwZGF0ZUltYWdlID0gaW1hZ2UgPT4ge1xuICAgIGRlc3Ryb3lDYXJvdXNlbCgoKSA9PiB7XG4gICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgYmxvY3M6IHtcbiAgICAgICAgICAuLi5ibG9jcyxcbiAgICAgICAgICAuLi57XG4gICAgICAgICAgICBbaW5kZXhdOiB7XG4gICAgICAgICAgICAgIC4uLmJsb2NzW2luZGV4XSxcbiAgICAgICAgICAgICAgaW1hZ2VJZDogaW1hZ2UuaWQsXG4gICAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgICAvLyBzZXQgdG8gdHJ1ZSBmb3IgZ2V0IG1lZGlhIGFmdGVyXG4gICAgICAgICAgICAgIG5ld0ltYWdlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGluaXRDYXJvdXNlbCgpO1xuICAgIH0sIHRydWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVkaWFVcGxvYWRDaGVjaz5cbiAgICAgICAgPE1lZGlhVXBsb2FkXG4gICAgICAgICAgdGl0bGU9e19fKFwiSW1hZ2VcIiwgXCJnbS1jYXJvdXNlbFwiKX1cbiAgICAgICAgICBvblNlbGVjdD17b25VcGRhdGVJbWFnZX1cbiAgICAgICAgICBhbGxvd2VkVHlwZXM9e0FMTE9XRURfTUVESUFfVFlQRVN9XG4gICAgICAgICAgdmFsdWU9e1wiXCJ9XG4gICAgICAgICAgcmVuZGVyPXsoeyBvcGVuIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVufVxuICAgICAgICAgICAgICAgIHRpdGxlPXtfXyhcImFkZCBpbWFnZVwiLCBcImdtLWNhcm91c2VsXCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYnV0dG9uIGVkaXRvci1wb3N0LXByZXZpZXcgaXMtYnV0dG9uIGlzLWRlZmF1bHQgaXMtbGFyZ2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge19fKFwiYWRkIGltYWdlXCIsIFwiZ20tY2Fyb3VzZWxcIil9XG4gICAgICAgICAgICAgICAge1wiICBcIn1cbiAgICAgICAgICAgICAgICA8RGFzaGljb24gaWNvbj1cInBsdXMtYWx0XCIgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L01lZGlhVXBsb2FkQ2hlY2s+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRJbWFnZTtcbiIsImNvbnN0IHsgQnV0dG9uLCBEYXNoaWNvbiwgU3Bpbm5lciB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgUmljaFRleHQgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuY29uc3QgRWRpdEVsZW1lbnQgPSAoeyBwcm9wcywgaW5kZXgsIGhlaWdodCwgb25SZW1vdmVJbWFnZSB9KSA9PiB7XG4gIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgYmxvY3MgfSA9IGF0dHJpYnV0ZXM7XG4gIGNvbnN0IHsgaW1hZ2VJZCwgaW1hZ2UgfSA9IGJsb2NzW2luZGV4XTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWNlbGxcIj5cbiAgICAgIHshIWltYWdlSWQgJiYgIWltYWdlICYmIDxTcGlubmVyIC8+fVxuICAgICAge2ltYWdlSWQgJiYgaW1hZ2UgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlLnNvdXJjZV91cmx9IGFsdD1cIlwiIHN0eWxlPXt7IG1heEhlaWdodDogaGVpZ2h0IH19IC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25SZW1vdmVJbWFnZShpbmRleCl9XG4gICAgICAgICAgICB0aXRsZT17X18oXCJyZW1vdmVcIiwgXCJnbS1jYXJvdXNlbFwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGFzaGljb24gaWNvbj1cImRpc21pc3NcIiAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdEVsZW1lbnQ7XG4iLCJjb25zdCB7IFBhbmVsQm9keSwgVG9nZ2xlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgUGFuZWwgPSAoeyBwcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgc2hvd0Fycm93LCBzaG93RG90IH0gPSBhdHRyaWJ1dGVzO1xuICByZXR1cm4gKFxuICAgIDxJbnNwZWN0b3JDb250cm9scz5cbiAgICAgIDxQYW5lbEJvZHkgdGl0bGU9e19fKFwiU2V0dGluZ3NcIiwgXCJnbS1jYXJvdXNlbFwiKX0+XG4gICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgbGFiZWw9e19fKFwiU2hvdyBEb3RcIiwgXCJnbS1jYXJvdXNlbFwiKX1cbiAgICAgICAgICBjaGVja2VkPXtzaG93RG90fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd0RvdDogIXNob3dEb3QgfSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgbGFiZWw9e19fKFwiU2hvdyBBcnJvd1wiLCBcImdtLWNhcm91c2VsXCIpfVxuICAgICAgICAgIGNoZWNrZWQ9e3Nob3dBcnJvd31cbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dBcnJvdzogIXNob3dBcnJvdyB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvUGFuZWxCb2R5PlxuICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYW5lbDtcbiIsImNvbnN0IHsgUmljaFRleHQgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmltcG9ydCBTYXZlSW1hZ2UgZnJvbSBcIi4vc2F2ZUltYWdlXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IFNhdmVFbGVtZW50ID0gKHsgcHJvcHMsIGluZGV4IH0pID0+IHtcbiAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcbiAgY29uc3QgeyBibG9jcyB9ID0gYXR0cmlidXRlcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWNlbGxcIj5cbiAgICAgIDxTYXZlSW1hZ2UgaW5kZXg9e2luZGV4fSBwcm9wcz17cHJvcHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYXZlRWxlbWVudDtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IFNhdmVJbWFnZSA9ICh7IHByb3BzLCBpbmRleCB9KSA9PiB7XG4gIGNvbnN0IHsgYmxvY3MsIGhlaWdodCB9ID0gcHJvcHMuYXR0cmlidXRlcztcbiAgY29uc3QgeyBpbWFnZSB9ID0gYmxvY3NbaW5kZXhdO1xuICBpZiAoIWltYWdlKSByZXR1cm4gPD48Lz47XG4gIGNvbnN0IHsgbWVkaWFfZGV0YWlscywgYWx0X3RleHQsIHNvdXJjZV91cmwgfSA9IGltYWdlO1xuICBpZiAoIW1lZGlhX2RldGFpbHMpIHJldHVybiA8PjwvPjtcbiAgY29uc3QgeyBzaXplcyB9ID0gbWVkaWFfZGV0YWlscztcbiAgY29uc3QgeyBsYXJnZSwgZnVsbCB9ID0gc2l6ZXM7XG4gIGNvbnN0IHBpYyA9IGxhcmdlIHx8IGZ1bGw7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtwaWMgPyBwaWMuc291cmNlX3VybCA6IHNvdXJjZV91cmx9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogaGVpZ2h0IH19XG4gICAgICAgIGFsdD17YWx0X3RleHR9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2F2ZUltYWdlO1xuIiwiaW1wb3J0IFNpZW1hIGZyb20gXCJzaWVtYVwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwidGhyb3R0bGUtZGVib3VuY2VcIjtcbmltcG9ydCB7IFJlc2l6YWJsZSBhcyBSZXNpemFibGVCb3ggfSBmcm9tIFwicmUtcmVzaXphYmxlXCI7XG5jb25zdCB7IEJ1dHRvbiwgRGFzaGljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgRWRpdEVsZW1lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9lZGl0RWxlbWVudFwiO1xuaW1wb3J0IEFkZEltYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvYWRkSW1hZ2VcIjtcbmltcG9ydCBQYW5lbCBmcm9tIFwiLi9jb21wb25lbnRzL3BhbmVsXCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuLy8gbW9kZWwgZm9yIGJsb2NcbmNvbnN0IG1vZGVsID0ge1xuICBpbWFnZTogdW5kZWZpbmVkLFxuICBpbWFnZUlkOiB1bmRlZmluZWRcbn07XG5cbmNvbnN0IEVkaXQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgdG9nZ2xlU2VsZWN0aW9uLCBpc1NlbGVjdGVkIH0gPSBwcm9wcztcbiAgY29uc3QgeyBibG9jcywgaGVpZ2h0LCBzaG93RG90LCBzaG93QXJyb3cgfSA9IGF0dHJpYnV0ZXM7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoMCk7XG4gIC8vIGNvbnRhaW5lciBjYXJvdXNlbFxuICBjb25zdCBjb250YWluZXIgPSB1c2VSZWYoKTtcbiAgLy8gcmVmIHRvIGNhcm91c2VsXG4gIGxldCBjYXJvdXNlbCA9IHVzZVJlZigpO1xuXG4gIC8vIGRlc3Ryb3kgY2Fyb3VzZWwgb24gY2hhbmdlIGVsZW1lbnRcbiAgY29uc3QgZGVzdHJveUNhcm91c2VsID0gKGNiID0gKCkgPT4gdHJ1ZSwgcmVzZXREb20gPSB0cnVlKSA9PiB7XG4gICAgLy8gcmVtb3ZlIGFuZCByZXN0ZSBkb21cbiAgICBpZiAoY2Fyb3VzZWwuY3VycmVudCkgY2Fyb3VzZWwuY3VycmVudC5kZXN0cm95KHJlc2V0RG9tLCBjYik7XG4gIH07XG5cbiAgLy8gcmUgaW5pdCBjYXJvdXNlbCB3aXRoIG5ldyBlbGVtZW50XG4gIGNvbnN0IGluaXRDYXJvdXNlbCA9IChyZW1vdmUgPSBmYWxzZSwgaW5kZXggPSAwKSA9PiB7XG4gICAgaWYgKGNhcm91c2VsLmN1cnJlbnQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyB0b3RhbCBpdGVtc1xuICAgICAgICBjb25zdCBsZW5ndGggPSBjb250YWluZXIuY3VycmVudC5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICAgICAgLy8gaW5pdCBuZXcgY2Fyb3VzZWxcbiAgICAgICAgY2Fyb3VzZWwuY3VycmVudCA9IG5ldyBTaWVtYSh7XG4gICAgICAgICAgc2VsZWN0b3I6IGNvbnRhaW5lci5jdXJyZW50LFxuICAgICAgICAgIG9uQ2hhbmdlOiAoKSA9PiBzZXRTZWxlY3RlZChjYXJvdXNlbC5jdXJyZW50LmN1cnJlbnRTbGlkZSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBpZiByZW1vdmUsIHRha2UgaW5kZXggb2YgYmxvYyByZW1vdmVkIC0gMSBvciB0YWtlIGxhc3RcbiAgICAgICAgICBjb25zdCBfaSA9IHJlbW92ZSA9PT0gdHJ1ZSA/IGluZGV4IC0gMSA6IGxlbmd0aDtcbiAgICAgICAgICBjb25zdCBjdXJyZW50ID0gX2kgPCAwID8gMCA6IF9pO1xuICAgICAgICAgIHNldFNlbGVjdGVkKGN1cnJlbnQpO1xuICAgICAgICAgIGNhcm91c2VsLmN1cnJlbnQuZ29UbyhjdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gaW5pdCBjYXJvdXNlbCBvbiBtb3VudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGluaXQgZmlyc3QgY2Fyb3VzZWxcbiAgICBjYXJvdXNlbC5jdXJyZW50ID0gbmV3IFNpZW1hKHtcbiAgICAgIHNlbGVjdG9yOiBjb250YWluZXIuY3VycmVudCxcbiAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkKGNhcm91c2VsLmN1cnJlbnQuY3VycmVudFNsaWRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIHJlbW92ZSBpbWFnZVxuICBjb25zdCBvblJlbW92ZUltYWdlID0gaSA9PiB7XG4gICAgZGVzdHJveUNhcm91c2VsKCgpID0+IHtcbiAgICAgIC8vIGRlbGV0ZSBibG9jIGltYWdlXG4gICAgICBjb25zdCBfYmxvY3MgPSB7IC4uLmJsb2NzIH07XG4gICAgICBkZWxldGUgX2Jsb2NzW2ldO1xuICAgICAgLy8gcmVzZXQga2V5c1xuICAgICAgY29uc3QgbmV3QmxvY3MgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKF9ibG9jcykuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgICBuZXdCbG9jc1tpXSA9IF9ibG9jc1tlXTtcbiAgICAgIH0pO1xuXG4gICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgYmxvY3M6IG5ld0Jsb2NzXG4gICAgICB9KTtcbiAgICAgIGluaXRDYXJvdXNlbCh0cnVlLCBpKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhcnJvd0hhbmRsZXIgPSAobmV4dCA9IHRydWUpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gY2Fyb3VzZWwuY3VycmVudC5jdXJyZW50U2xpZGU7XG4gICAgY2Fyb3VzZWwuY3VycmVudC5nb1RvKG5leHQgPyBjdXJyZW50ICsgMSA6IGN1cnJlbnQgLSAxKTtcbiAgfTtcbiAgY29uc3QgYmxvY2tLZXlzID0gT2JqZWN0LmtleXMoYmxvY3MpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtYmxvYy1lZGl0XCI+XG4gICAgICA8UGFuZWwgcHJvcHM9e3Byb3BzfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1ibG9jLWNvbnRhaW5lclwiPlxuICAgICAgICA8UmVzaXphYmxlQm94XG4gICAgICAgICAgc2l6ZT17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICB9fVxuICAgICAgICAgIG1pbldpZHRoPXtcIjEwMCVcIn1cbiAgICAgICAgICBtYXhXaWR0aD17XCIxMDAlXCJ9XG4gICAgICAgICAgbWluSGVpZ2h0PXtcIjEwMCVcIn1cbiAgICAgICAgICBlbmFibGU9e3tcbiAgICAgICAgICAgIHRvcDogZmFsc2UsXG4gICAgICAgICAgICByaWdodDogZmFsc2UsXG4gICAgICAgICAgICBib3R0b206IHRydWUsXG4gICAgICAgICAgICBsZWZ0OiBmYWxzZSxcbiAgICAgICAgICAgIHRvcFJpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgIGJvdHRvbUxlZnQ6IGZhbHNlLFxuICAgICAgICAgICAgdG9wTGVmdDogZmFsc2VcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uUmVzaXplU3RhcnQ9eygpID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZVNlbGVjdGlvbihmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJlc2l6ZT17ZGVib3VuY2UoNTAsIChldmVudCwgZGlyZWN0aW9uLCBlbHQsIGRlbHRhKSA9PiB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBwYXJzZUludChoZWlnaHQgKyBkZWx0YS5oZWlnaHQsIDEwKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgb25SZXNpemVTdG9wPXsoZXZlbnQsIGRpcmVjdGlvbiwgZWx0LCBkZWx0YSkgPT4ge1xuICAgICAgICAgICAgY2Fyb3VzZWwuY3VycmVudC5yZXNpemVIYW5kbGVyKCk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBwYXJzZUludChoZWlnaHQgKyBkZWx0YS5oZWlnaHQsIDEwKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b2dnbGVTZWxlY3Rpb24odHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtY29udGFpbmVyXCIgcmVmPXtjb250YWluZXJ9PlxuICAgICAgICAgICAge2Jsb2NrS2V5cy5tYXAoYiA9PiAoXG4gICAgICAgICAgICAgIDxFZGl0RWxlbWVudFxuICAgICAgICAgICAgICAgIGhlaWdodD17YCR7aGVpZ2h0fXB4YH1cbiAgICAgICAgICAgICAgICBvblJlbW92ZUltYWdlPXtvblJlbW92ZUltYWdlfVxuICAgICAgICAgICAgICAgIHByb3BzPXtwcm9wc31cbiAgICAgICAgICAgICAgICBrZXk9e2Ake2Jsb2NzW2JdLmltYWdlSWR9ICR7Yn1gfVxuICAgICAgICAgICAgICAgIGluZGV4PXtifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2lzU2VsZWN0ZWQgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyB0b3A6IGAke2hlaWdodH1weGAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXphYmxlLWhhbmRsZVwiXG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SZXNpemFibGVCb3g+XG4gICAgICAgIHtzaG93QXJyb3cgPT09IHRydWUgJiYgYmxvY2tLZXlzLmxlbmd0aCA+IDEgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1hcnJvdy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXJyb3dIYW5kbGVyKGZhbHNlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtYXJyb3ctcHJldmlvdXNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj57X18oXCJwcmV2aW91c1wiLCBcImdtLWNhcm91c2VsXCIpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthcnJvd0hhbmRsZXJ9IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWFycm93LW5leHRcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e19fKFwibmV4dFwiLCBcImdtLWNhcm91c2VsXCIpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge3Nob3dEb3QgPT09IHRydWUgJiYgYmxvY2tLZXlzLmxlbmd0aCA+IDEgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1kb3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7YmxvY2tLZXlzLm1hcChiID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2Bkb3QtJHtifWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BnbS1jYXJvdXNlbC1kb3QgJHtcbiAgICAgICAgICAgICAgICAgICAgK3NlbGVjdGVkID09PSArYiA/IFwiZ20tY2Fyb3VzZWwtZG90LWN1cnJlbnRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2Fyb3VzZWwuY3VycmVudC5nb1RvKGIpfVxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1hZGQtYmxvY1wiPlxuICAgICAgICA8QWRkSW1hZ2VcbiAgICAgICAgICBpbml0Q2Fyb3VzZWw9e2luaXRDYXJvdXNlbH1cbiAgICAgICAgICBkZXN0cm95Q2Fyb3VzZWw9e2Rlc3Ryb3lDYXJvdXNlbH1cbiAgICAgICAgICBwcm9wcz17cHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG4iLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5pbXBvcnQgZWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgc2F2ZSBmcm9tIFwiLi9zYXZlXCI7XG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tIFwiLi9hdHRyaWJ1dGVzXCI7XG5cbmNvbnN0IGljb25lID0gKCkgPT4gKFxuICA8PlxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIyMlwiXG4gICAgICBoZWlnaHQ9XCIyMlwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDIyIDIyXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTMsMyBMMywyLjUgQzMsMi4yMjM4NTc2MyAzLjIyMzg1NzYzLDIgMy41LDIgTDcsMiBMNywwLjUgQzcsMC4yMjM4NTc2MyA3LjIyMzg1NzYzLDAgNy41LDAgTDE5LjUsMCBDMTkuNzc2MTQyNCwwIDIwLDAuMjIzODU3NjMgMjAsMC41IEwyMCwxMi41IEMyMCwxMi43NzYxNDI0IDE5Ljc3NjE0MjQsMTMgMTkuNSwxMyBMNy41LDEzIEM3LjIyMzg1NzYzLDEzIDcsMTIuNzc2MTQyNCA3LDEyLjUgTDcsMTEgTDMuNSwxMSBDMy4yMjM4NTc2MywxMSAzLDEwLjc3NjE0MjQgMywxMC41IEwzLDEwIEwwLjUsMTAgQzAuMjIzODU3NjMsMTAgMCw5Ljc3NjE0MjQgMCw5LjUgTDAsMy41IEMwLDMuMjIzODU3NjMgMC4yMjM4NTc2MywzIDAuNSwzIEwzLDMgWiBNMyw0IEwxLDQgTDEsOSBMMyw5IEwzLDQgWiBNNywxMCBMNywzIEw0LDMgTDQsMTAgTDcsMTAgWiBNOCwxMiBMMTksMTIgTDE5LDEgTDgsMSBMOCwxMiBaXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEgNClcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgPC8+XG4pO1xuXG5yZWdpc3RlckJsb2NrVHlwZShcImdtL2Nhcm91c2VsXCIsIHtcbiAgdGl0bGU6IF9fKFwiQmxvY2sgY2Fyb3VzZWxcIiwgXCJnbS1jYXJvdXNlbFwiKSxcbiAgZGVzY3JpcHRpb246IF9fKFwiY2Fyb3VzZWwgZm9yIHNob3cgcGhvdG9zXCIsIFwiZ20tY2Fyb3VzZWxcIiksXG4gIGljb246IGljb25lLFxuICBjYXRlZ29yeTogXCJ0aGVtZS1ibG9ja3NcIixcbiAgYXR0cmlidXRlcyxcbiAgZWRpdCxcbiAgc2F2ZVxufSk7XG5cbi8vIGlmIChtb2R1bGUuaG90KSB7XG4vLyAgIG1vZHVsZS5ob3QuYWNjZXB0KGZ1bmN0aW9uKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiQWNjZXB0aW5nIHRoZSB1cGRhdGVkIHByaW50TWUgbW9kdWxlIVwiKTtcbi8vICAgfSk7XG4vLyB9XG4iLCIvLyBjb25zdCB7IFJpY2hUZXh0IH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5pbXBvcnQgU2F2ZUVsZW1lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlRWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IFNhdmUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgYmxvY3MsIHNob3dBcnJvdywgc2hvd0RvdCB9ID0gcHJvcHMuYXR0cmlidXRlcztcbiAgY29uc3QgYmxvY2tLZXlzID0gT2JqZWN0LmtleXMoYmxvY3MpO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWJsb2MtY29udGFpbmVyXCJcbiAgICAgIGRhdGEtZG90PXtzaG93RG90fVxuICAgICAgZGF0YS1hcnJvdz17c2hvd0Fycm93fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtY29udGFpbmVyXCI+XG4gICAgICAgIHtPYmplY3Qua2V5cyhibG9jcykubWFwKGIgPT4gKFxuICAgICAgICAgIDxTYXZlRWxlbWVudCBwcm9wcz17cHJvcHN9IGtleT17Yn0gaW5kZXg9e2J9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd0Fycm93ID09PSB0cnVlICYmIGJsb2NrS2V5cy5sZW5ndGggPiAxID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWFycm93LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtYXJyb3ctcHJldmlvdXNcIj5cbiAgICAgICAgICAgIDxzcGFuPntfXyhcInByZXZpb3VzXCIsIFwiZ20tY2Fyb3VzZWxcIil9PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtYXJyb3ctbmV4dFwiPlxuICAgICAgICAgICAgPHNwYW4+e19fKFwibmV4dFwiLCBcImdtLWNhcm91c2VsXCIpfTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtzaG93RG90ID09PSB0cnVlICYmIGJsb2NrS2V5cy5sZW5ndGggPiAxID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWRvdC1jb250YWluZXJcIj5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoYmxvY3MpLm1hcChiID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWRvdFwiPjwvZGl2PjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIndwXCJdW1wiZWxlbWVudFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=