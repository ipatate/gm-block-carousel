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
    default: 400
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
    title: __("Image", ""),
    onSelect: onUpdateImage,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: "",
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        onClick: open,
        title: __("add image", "gm-bloc"),
        className: "components-button editor-post-preview is-button is-default is-large"
      }, __("add image", "gm-bloc"), "  ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Dashicon, {
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
    title: __("remove", "gm-bloc")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
    icon: "dismiss"
  }))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (EditElement);

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
  var blocs = props.attributes.blocs;
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
/* harmony import */ var re_resizable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! re-resizable */ "./node_modules/re-resizable/lib/index.js");
/* harmony import */ var re_resizable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(re_resizable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_editElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/editElement */ "./src/components/editElement.jsx");
/* harmony import */ var _components_addImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/addImage */ "./src/components/addImage.jsx");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_7__);




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
      height = attributes.height;

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

          carousel.current.goTo(_i < 0 ? 1 : _i);
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

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-bloc-edit"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-bloc-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(re_resizable__WEBPACK_IMPORTED_MODULE_4__["Resizable"], {
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
  }, Object.keys(blocs).map(function (b) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_editElement__WEBPACK_IMPORTED_MODULE_5__["default"], {
      height: "".concat(height, "px"),
      onRemoveImage: onRemoveImage,
      props: props,
      key: "".concat(blocs[b].imageId, " ").concat(b),
      index: b
    });
  })), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "resizable-handle"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-arrow-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    onClick: function onClick() {
      return arrowHandler(false);
    },
    className: "gm-carousel-arrow-previous"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, __("previous"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    onClick: arrowHandler,
    className: "gm-carousel-arrow-next"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, __("next")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-dot-container"
  }, Object.keys(blocs).map(function (b) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      key: "dot-".concat(b),
      className: "gm-carousel-dot ".concat(+selected === +b ? "gm-carousel-dot-current" : ""),
      onClick: function onClick() {
        return carousel.current.goTo(b);
      }
    });
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-add-bloc"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_addImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  title: "Block carousel",
  description: "carousel for show photos",
  icon: icone,
  category: "theme-blocks",
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

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

var RichText = wp.blockEditor.RichText;



var Save = function Save(props) {
  var blocs = props.attributes.blocs;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gm-carousel-container"
  }, Object.keys(blocs).map(function (b) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_saveElement__WEBPACK_IMPORTED_MODULE_1__["default"], {
      props: props,
      key: b,
      index: b
    });
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3QtbWVtb2l6ZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlLXJlc2l6YWJsZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlLXJlc2l6YWJsZS9saWIvcmVzaXplci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2llbWEvZGlzdC9zaWVtYS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkSW1hZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VkaXRFbGVtZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zYXZlRWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2F2ZUltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXZlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZWUwMSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1widGhpc1wiOltcIndwXCIsXCJlbGVtZW50XCJdfSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1widGhpc1wiOlwiUmVhY3RcIn0iXSwibmFtZXMiOlsiYmxvY3MiLCJ0eXBlIiwiZGVmYXVsdCIsImhlaWdodCIsIk51bWJlciIsIndwIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsIkRhc2hpY29uIiwiU3Bpbm5lciIsInVzZUVmZmVjdCIsImVsZW1lbnQiLCJibG9ja0VkaXRvciIsIk1lZGlhVXBsb2FkIiwiTWVkaWFVcGxvYWRDaGVjayIsInVzZVNlbGVjdCIsImRhdGEiLCJfXyIsImkxOG4iLCJBTExPV0VEX01FRElBX1RZUEVTIiwiQWRkSW1hZ2UiLCJwcm9wcyIsImluaXRDYXJvdXNlbCIsImRlc3Ryb3lDYXJvdXNlbCIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGVzIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsImluZGV4IiwiaW1hZ2UiLCJzZWxlY3QiLCJuZXdQaWMiLCJmb3JFYWNoIiwiYiIsIm5ld0ltYWdlIiwiZ2V0TWVkaWEiLCJpbWFnZUlkIiwiaWQiLCJfaW5kZXgiLCJvblVwZGF0ZUltYWdlIiwib3BlbiIsIlJpY2hUZXh0IiwiRWRpdEVsZW1lbnQiLCJvblJlbW92ZUltYWdlIiwic291cmNlX3VybCIsIm1heEhlaWdodCIsIlNhdmVFbGVtZW50IiwiU2F2ZUltYWdlIiwibWVkaWFfZGV0YWlscyIsImFsdF90ZXh0Iiwic2l6ZXMiLCJsYXJnZSIsImZ1bGwiLCJwaWMiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIm1vZGVsIiwidW5kZWZpbmVkIiwiRWRpdCIsInRvZ2dsZVNlbGVjdGlvbiIsImlzU2VsZWN0ZWQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiY29udGFpbmVyIiwiY2Fyb3VzZWwiLCJjYiIsInJlc2V0RG9tIiwiY3VycmVudCIsImRlc3Ryb3kiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwiY2hpbGROb2RlcyIsIlNpZW1hIiwic2VsZWN0b3IiLCJvbkNoYW5nZSIsImN1cnJlbnRTbGlkZSIsIl9pIiwiZ29UbyIsImkiLCJfYmxvY3MiLCJuZXdCbG9jcyIsImUiLCJhcnJvd0hhbmRsZXIiLCJuZXh0Iiwid2lkdGgiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ0b3BSaWdodCIsImJvdHRvbVJpZ2h0IiwiYm90dG9tTGVmdCIsInRvcExlZnQiLCJldmVudCIsImRpcmVjdGlvbiIsImVsdCIsImRlbHRhIiwicmVzaXplSGFuZGxlciIsInBhcnNlSW50IiwibWFwIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJpY29uZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2F0ZWdvcnkiLCJlZGl0Iiwic2F2ZSIsIlNhdmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx3QkFBd0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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dCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsIi8vXG4vLyBNYWluXG4vL1xuXG5mdW5jdGlvbiBtZW1vaXplIChmbiwgb3B0aW9ucykge1xuICB2YXIgY2FjaGUgPSBvcHRpb25zICYmIG9wdGlvbnMuY2FjaGVcbiAgICA/IG9wdGlvbnMuY2FjaGVcbiAgICA6IGNhY2hlRGVmYXVsdFxuXG4gIHZhciBzZXJpYWxpemVyID0gb3B0aW9ucyAmJiBvcHRpb25zLnNlcmlhbGl6ZXJcbiAgICA/IG9wdGlvbnMuc2VyaWFsaXplclxuICAgIDogc2VyaWFsaXplckRlZmF1bHRcblxuICB2YXIgc3RyYXRlZ3kgPSBvcHRpb25zICYmIG9wdGlvbnMuc3RyYXRlZ3lcbiAgICA/IG9wdGlvbnMuc3RyYXRlZ3lcbiAgICA6IHN0cmF0ZWd5RGVmYXVsdFxuXG4gIHJldHVybiBzdHJhdGVneShmbiwge1xuICAgIGNhY2hlOiBjYWNoZSxcbiAgICBzZXJpYWxpemVyOiBzZXJpYWxpemVyXG4gIH0pXG59XG5cbi8vXG4vLyBTdHJhdGVneVxuLy9cblxuZnVuY3Rpb24gaXNQcmltaXRpdmUgKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgLy8gfHwgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICd1bnNhZmUnIHByaW1pdGl2ZSBmb3Igb3VyIG5lZWRzXG59XG5cbmZ1bmN0aW9uIG1vbmFkaWMgKGZuLCBjYWNoZSwgc2VyaWFsaXplciwgYXJnKSB7XG4gIHZhciBjYWNoZUtleSA9IGlzUHJpbWl0aXZlKGFyZykgPyBhcmcgOiBzZXJpYWxpemVyKGFyZylcblxuICB2YXIgY29tcHV0ZWRWYWx1ZSA9IGNhY2hlLmdldChjYWNoZUtleSlcbiAgaWYgKHR5cGVvZiBjb21wdXRlZFZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbXB1dGVkVmFsdWUgPSBmbi5jYWxsKHRoaXMsIGFyZylcbiAgICBjYWNoZS5zZXQoY2FjaGVLZXksIGNvbXB1dGVkVmFsdWUpXG4gIH1cblxuICByZXR1cm4gY29tcHV0ZWRWYWx1ZVxufVxuXG5mdW5jdGlvbiB2YXJpYWRpYyAoZm4sIGNhY2hlLCBzZXJpYWxpemVyKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAzKVxuICB2YXIgY2FjaGVLZXkgPSBzZXJpYWxpemVyKGFyZ3MpXG5cbiAgdmFyIGNvbXB1dGVkVmFsdWUgPSBjYWNoZS5nZXQoY2FjaGVLZXkpXG4gIGlmICh0eXBlb2YgY29tcHV0ZWRWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb21wdXRlZFZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJncylcbiAgICBjYWNoZS5zZXQoY2FjaGVLZXksIGNvbXB1dGVkVmFsdWUpXG4gIH1cblxuICByZXR1cm4gY29tcHV0ZWRWYWx1ZVxufVxuXG5mdW5jdGlvbiBhc3NlbWJsZSAoZm4sIGNvbnRleHQsIHN0cmF0ZWd5LCBjYWNoZSwgc2VyaWFsaXplKSB7XG4gIHJldHVybiBzdHJhdGVneS5iaW5kKFxuICAgIGNvbnRleHQsXG4gICAgZm4sXG4gICAgY2FjaGUsXG4gICAgc2VyaWFsaXplXG4gIClcbn1cblxuZnVuY3Rpb24gc3RyYXRlZ3lEZWZhdWx0IChmbiwgb3B0aW9ucykge1xuICB2YXIgc3RyYXRlZ3kgPSBmbi5sZW5ndGggPT09IDEgPyBtb25hZGljIDogdmFyaWFkaWNcblxuICByZXR1cm4gYXNzZW1ibGUoXG4gICAgZm4sXG4gICAgdGhpcyxcbiAgICBzdHJhdGVneSxcbiAgICBvcHRpb25zLmNhY2hlLmNyZWF0ZSgpLFxuICAgIG9wdGlvbnMuc2VyaWFsaXplclxuICApXG59XG5cbmZ1bmN0aW9uIHN0cmF0ZWd5VmFyaWFkaWMgKGZuLCBvcHRpb25zKSB7XG4gIHZhciBzdHJhdGVneSA9IHZhcmlhZGljXG5cbiAgcmV0dXJuIGFzc2VtYmxlKFxuICAgIGZuLFxuICAgIHRoaXMsXG4gICAgc3RyYXRlZ3ksXG4gICAgb3B0aW9ucy5jYWNoZS5jcmVhdGUoKSxcbiAgICBvcHRpb25zLnNlcmlhbGl6ZXJcbiAgKVxufVxuXG5mdW5jdGlvbiBzdHJhdGVneU1vbmFkaWMgKGZuLCBvcHRpb25zKSB7XG4gIHZhciBzdHJhdGVneSA9IG1vbmFkaWNcblxuICByZXR1cm4gYXNzZW1ibGUoXG4gICAgZm4sXG4gICAgdGhpcyxcbiAgICBzdHJhdGVneSxcbiAgICBvcHRpb25zLmNhY2hlLmNyZWF0ZSgpLFxuICAgIG9wdGlvbnMuc2VyaWFsaXplclxuICApXG59XG5cbi8vXG4vLyBTZXJpYWxpemVyXG4vL1xuXG5mdW5jdGlvbiBzZXJpYWxpemVyRGVmYXVsdCAoKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmd1bWVudHMpXG59XG5cbi8vXG4vLyBDYWNoZVxuLy9cblxuZnVuY3Rpb24gT2JqZWN0V2l0aG91dFByb3RvdHlwZUNhY2hlICgpIHtcbiAgdGhpcy5jYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcbn1cblxuT2JqZWN0V2l0aG91dFByb3RvdHlwZUNhY2hlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAoa2V5IGluIHRoaXMuY2FjaGUpXG59XG5cbk9iamVjdFdpdGhvdXRQcm90b3R5cGVDYWNoZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gdGhpcy5jYWNoZVtrZXldXG59XG5cbk9iamVjdFdpdGhvdXRQcm90b3R5cGVDYWNoZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdGhpcy5jYWNoZVtrZXldID0gdmFsdWVcbn1cblxudmFyIGNhY2hlRGVmYXVsdCA9IHtcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUgKCkge1xuICAgIHJldHVybiBuZXcgT2JqZWN0V2l0aG91dFByb3RvdHlwZUNhY2hlKClcbiAgfVxufVxuXG4vL1xuLy8gQVBJXG4vL1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVcbm1vZHVsZS5leHBvcnRzLnN0cmF0ZWdpZXMgPSB7XG4gIHZhcmlhZGljOiBzdHJhdGVneVZhcmlhZGljLFxuICBtb25hZGljOiBzdHJhdGVneU1vbmFkaWNcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgcmVzaXplcl8xID0gcmVxdWlyZShcIi4vcmVzaXplclwiKTtcbnZhciBmYXN0X21lbW9pemVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZmFzdC1tZW1vaXplXCIpKTtcbnZhciBERUZBVUxUX1NJWkUgPSB7XG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbn07XG52YXIgY2xhbXAgPSBmYXN0X21lbW9pemVfMS5kZWZhdWx0KGZ1bmN0aW9uIChuLCBtaW4sIG1heCkgeyByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4obiwgbWF4KSwgbWluKTsgfSk7XG52YXIgc25hcCA9IGZhc3RfbWVtb2l6ZV8xLmRlZmF1bHQoZnVuY3Rpb24gKG4sIHNpemUpIHsgcmV0dXJuIE1hdGgucm91bmQobiAvIHNpemUpICogc2l6ZTsgfSk7XG52YXIgaGFzRGlyZWN0aW9uID0gZmFzdF9tZW1vaXplXzEuZGVmYXVsdChmdW5jdGlvbiAoZGlyLCB0YXJnZXQpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChkaXIsICdpJykudGVzdCh0YXJnZXQpO1xufSk7XG52YXIgZmluZENsb3Nlc3RTbmFwID0gZmFzdF9tZW1vaXplXzEuZGVmYXVsdChmdW5jdGlvbiAobiwgc25hcEFycmF5LCBzbmFwR2FwKSB7XG4gICAgaWYgKHNuYXBHYXAgPT09IHZvaWQgMCkgeyBzbmFwR2FwID0gMDsgfVxuICAgIHZhciBjbG9zZXN0R2FwSW5kZXggPSBzbmFwQXJyYXkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyLCBpbmRleCkgeyByZXR1cm4gKE1hdGguYWJzKGN1cnIgLSBuKSA8IE1hdGguYWJzKHNuYXBBcnJheVtwcmV2XSAtIG4pID8gaW5kZXggOiBwcmV2KTsgfSwgMCk7XG4gICAgdmFyIGdhcCA9IE1hdGguYWJzKHNuYXBBcnJheVtjbG9zZXN0R2FwSW5kZXhdIC0gbik7XG4gICAgcmV0dXJuIHNuYXBHYXAgPT09IDAgfHwgZ2FwIDwgc25hcEdhcCA/IHNuYXBBcnJheVtjbG9zZXN0R2FwSW5kZXhdIDogbjtcbn0pO1xudmFyIGVuZHNXaXRoID0gZmFzdF9tZW1vaXplXzEuZGVmYXVsdChmdW5jdGlvbiAoc3RyLCBzZWFyY2hTdHIpIHtcbiAgICByZXR1cm4gc3RyLnN1YnN0cihzdHIubGVuZ3RoIC0gc2VhcmNoU3RyLmxlbmd0aCwgc2VhcmNoU3RyLmxlbmd0aCkgPT09IHNlYXJjaFN0cjtcbn0pO1xudmFyIGdldFN0cmluZ1NpemUgPSBmYXN0X21lbW9pemVfMS5kZWZhdWx0KGZ1bmN0aW9uIChuKSB7XG4gICAgbiA9IG4udG9TdHJpbmcoKTtcbiAgICBpZiAobiA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBpZiAoZW5kc1dpdGgobiwgJ3B4JykpIHtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIGlmIChlbmRzV2l0aChuLCAnJScpKSB7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBpZiAoZW5kc1dpdGgobiwgJ3ZoJykpIHtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIGlmIChlbmRzV2l0aChuLCAndncnKSkge1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgaWYgKGVuZHNXaXRoKG4sICd2bWF4JykpIHtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIGlmIChlbmRzV2l0aChuLCAndm1pbicpKSB7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICByZXR1cm4gbiArIFwicHhcIjtcbn0pO1xudmFyIGdldFBpeGVsU2l6ZSA9IGZ1bmN0aW9uIChzaXplLCBwYXJlbnRTaXplKSB7XG4gICAgaWYgKHNpemUgJiYgdHlwZW9mIHNpemUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChlbmRzV2l0aChzaXplLCAnJScpKSB7XG4gICAgICAgICAgICB2YXIgcmF0aW8gPSBOdW1iZXIoc2l6ZS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRTaXplICogcmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW5kc1dpdGgoc2l6ZSwgJ3Z3JykpIHtcbiAgICAgICAgICAgIHZhciByYXRpbyA9IE51bWJlcihzaXplLnJlcGxhY2UoJ3Z3JywgJycpKSAvIDEwMDtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCAqIHJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVuZHNXaXRoKHNpemUsICd2aCcpKSB7XG4gICAgICAgICAgICB2YXIgcmF0aW8gPSBOdW1iZXIoc2l6ZS5yZXBsYWNlKCd2aCcsICcnKSkgLyAxMDA7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0ICogcmF0aW87XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNpemU7XG59O1xudmFyIGNhbGN1bGF0ZU5ld01heCA9IGZhc3RfbWVtb2l6ZV8xLmRlZmF1bHQoZnVuY3Rpb24gKHBhcmVudFNpemUsIG1heFdpZHRoLCBtYXhIZWlnaHQsIG1pbldpZHRoLCBtaW5IZWlnaHQpIHtcbiAgICBtYXhXaWR0aCA9IGdldFBpeGVsU2l6ZShtYXhXaWR0aCwgcGFyZW50U2l6ZS53aWR0aCk7XG4gICAgbWF4SGVpZ2h0ID0gZ2V0UGl4ZWxTaXplKG1heEhlaWdodCwgcGFyZW50U2l6ZS5oZWlnaHQpO1xuICAgIG1pbldpZHRoID0gZ2V0UGl4ZWxTaXplKG1pbldpZHRoLCBwYXJlbnRTaXplLndpZHRoKTtcbiAgICBtaW5IZWlnaHQgPSBnZXRQaXhlbFNpemUobWluSGVpZ2h0LCBwYXJlbnRTaXplLmhlaWdodCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWF4V2lkdGg6IHR5cGVvZiBtYXhXaWR0aCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBOdW1iZXIobWF4V2lkdGgpLFxuICAgICAgICBtYXhIZWlnaHQ6IHR5cGVvZiBtYXhIZWlnaHQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTnVtYmVyKG1heEhlaWdodCksXG4gICAgICAgIG1pbldpZHRoOiB0eXBlb2YgbWluV2lkdGggPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTnVtYmVyKG1pbldpZHRoKSxcbiAgICAgICAgbWluSGVpZ2h0OiB0eXBlb2YgbWluSGVpZ2h0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE51bWJlcihtaW5IZWlnaHQpLFxuICAgIH07XG59KTtcbnZhciBkZWZpbmVkUHJvcHMgPSBbXG4gICAgJ3N0eWxlJyxcbiAgICAnY2xhc3NOYW1lJyxcbiAgICAnZ3JpZCcsXG4gICAgJ3NuYXAnLFxuICAgICdib3VuZHMnLFxuICAgICdzaXplJyxcbiAgICAnZGVmYXVsdFNpemUnLFxuICAgICdtaW5XaWR0aCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWF4SGVpZ2h0JyxcbiAgICAnbG9ja0FzcGVjdFJhdGlvJyxcbiAgICAnbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCcsXG4gICAgJ2xvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0JyxcbiAgICAnZW5hYmxlJyxcbiAgICAnaGFuZGxlU3R5bGVzJyxcbiAgICAnaGFuZGxlQ2xhc3NlcycsXG4gICAgJ2hhbmRsZVdyYXBwZXJTdHlsZScsXG4gICAgJ2hhbmRsZVdyYXBwZXJDbGFzcycsXG4gICAgJ2NoaWxkcmVuJyxcbiAgICAnb25SZXNpemVTdGFydCcsXG4gICAgJ29uUmVzaXplJyxcbiAgICAnb25SZXNpemVTdG9wJyxcbiAgICAnaGFuZGxlQ29tcG9uZW50JyxcbiAgICAnc2NhbGUnLFxuICAgICdyZXNpemVSYXRpbycsXG4gICAgJ3NuYXBHYXAnLFxuXTtcbi8vIEhBQ0s6IFRoaXMgY2xhc3MgaXMgdXNlZCB0byBjYWxjdWxhdGUgJSBzaXplLlxudmFyIGJhc2VDbGFzc05hbWUgPSAnX19yZXNpemFibGVfYmFzZV9fJztcbnZhciBSZXNpemFibGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlc2l6YWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZXNpemFibGUocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJhdGlvID0gMTtcbiAgICAgICAgX3RoaXMucmVzaXphYmxlID0gbnVsbDtcbiAgICAgICAgLy8gRm9yIHBhcmVudCBib3VuZGFyeVxuICAgICAgICBfdGhpcy5wYXJlbnRMZWZ0ID0gMDtcbiAgICAgICAgX3RoaXMucGFyZW50VG9wID0gMDtcbiAgICAgICAgLy8gRm9yIGJvdW5kYXJ5XG4gICAgICAgIF90aGlzLnJlc2l6YWJsZUxlZnQgPSAwO1xuICAgICAgICBfdGhpcy5yZXNpemFibGVUb3AgPSAwO1xuICAgICAgICAvLyBGb3IgdGFyZ2V0IGJvdW5kYXJ5XG4gICAgICAgIF90aGlzLnRhcmdldExlZnQgPSAwO1xuICAgICAgICBfdGhpcy50YXJnZXRUb3AgPSAwO1xuICAgICAgICBfdGhpcy5yZWYgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNpemFibGUgPSBjO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzUmVzaXppbmc6IGZhbHNlLFxuICAgICAgICAgICAgd2lkdGg6IHR5cGVvZiAoX3RoaXMucHJvcHNTaXplICYmIF90aGlzLnByb3BzU2l6ZS53aWR0aCkgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgPyAnYXV0bydcbiAgICAgICAgICAgICAgICA6IF90aGlzLnByb3BzU2l6ZSAmJiBfdGhpcy5wcm9wc1NpemUud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHR5cGVvZiAoX3RoaXMucHJvcHNTaXplICYmIF90aGlzLnByb3BzU2l6ZS5oZWlnaHQpID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgID8gJ2F1dG8nXG4gICAgICAgICAgICAgICAgOiBfdGhpcy5wcm9wc1NpemUgJiYgX3RoaXMucHJvcHNTaXplLmhlaWdodCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgIG9yaWdpbmFsOiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAgICAgICAgIHRvcDogJzAnLFxuICAgICAgICAgICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgICAgICAgICBib3R0b206ICcwJyxcbiAgICAgICAgICAgICAgICByaWdodDogJzAnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25SZXNpemVTdGFydCA9IF90aGlzLm9uUmVzaXplU3RhcnQuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uTW91c2VNb3ZlID0gX3RoaXMub25Nb3VzZU1vdmUuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uTW91c2VVcCA9IF90aGlzLm9uTW91c2VVcC5iaW5kKF90aGlzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVzaXphYmxlLnByb3RvdHlwZSwgXCJwYXJlbnROb2RlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucmVzaXphYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNpemFibGUucGFyZW50Tm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlc2l6YWJsZS5wcm90b3R5cGUsIFwicHJvcHNTaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zaXplIHx8IHRoaXMucHJvcHMuZGVmYXVsdFNpemUgfHwgREVGQVVMVF9TSVpFO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVzaXphYmxlLnByb3RvdHlwZSwgXCJiYXNlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChwYXJlbnQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjaGlsZHJlbl8xID0gY2hpbGRyZW47IF9pIDwgY2hpbGRyZW5fMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGNoaWxkcmVuXzFbX2ldO1xuICAgICAgICAgICAgICAgIGlmIChuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uY2xhc3NMaXN0LmNvbnRhaW5zKGJhc2VDbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXNpemFibGUucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IDA7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnJlc2l6YWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBvcmdXaWR0aCA9IHRoaXMucmVzaXphYmxlLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBvcmdIZWlnaHQgPSB0aGlzLnJlc2l6YWJsZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgLy8gSEFDSzogU2V0IHBvc2l0aW9uIGByZWxhdGl2ZWAgdG8gZ2V0IHBhcmVudCBzaXplLlxuICAgICAgICAgICAgICAgIC8vICAgICAgIFRoaXMgaXMgYmVjYXVzZSB3aGVuIHJlLXJlc2l6YWJsZSBzZXQgYGFic29sdXRlYCwgSSBjYW4gbm90IGdldCBiYXNlIHdpZHRoIGNvcnJlY3RseS5cbiAgICAgICAgICAgICAgICB2YXIgb3JnUG9zaXRpb24gPSB0aGlzLnJlc2l6YWJsZS5zdHlsZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAob3JnUG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemFibGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJTkZPOiBVc2Ugb3JpZ2luYWwgd2lkdGggb3IgaGVpZ2h0IGlmIHNldCBhdXRvLlxuICAgICAgICAgICAgICAgIHdpZHRoID0gdGhpcy5yZXNpemFibGUuc3R5bGUud2lkdGggIT09ICdhdXRvJyA/IHRoaXMucmVzaXphYmxlLm9mZnNldFdpZHRoIDogb3JnV2lkdGg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5yZXNpemFibGUuc3R5bGUuaGVpZ2h0ICE9PSAnYXV0bycgPyB0aGlzLnJlc2l6YWJsZS5vZmZzZXRIZWlnaHQgOiBvcmdIZWlnaHQ7XG4gICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBwb3NpdGlvblxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXphYmxlLnN0eWxlLnBvc2l0aW9uID0gb3JnUG9zaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXNpemFibGUucHJvdG90eXBlLCBcInNpemVTdHlsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBzaXplID0gdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgdmFyIGdldFNpemUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5zdGF0ZVtrZXldID09PSAndW5kZWZpbmVkJyB8fCBfdGhpcy5zdGF0ZVtrZXldID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdXRvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzU2l6ZSAmJiBfdGhpcy5wcm9wc1NpemVba2V5XSAmJiBlbmRzV2l0aChfdGhpcy5wcm9wc1NpemVba2V5XS50b1N0cmluZygpLCAnJScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbmRzV2l0aChfdGhpcy5zdGF0ZVtrZXldLnRvU3RyaW5nKCksICclJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zdGF0ZVtrZXldLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudFNpemUgPSBfdGhpcy5nZXRQYXJlbnRTaXplKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IE51bWJlcihfdGhpcy5zdGF0ZVtrZXldLnRvU3RyaW5nKCkucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGVyY2VudCA9ICh2YWx1ZSAvIHBhcmVudFNpemVba2V5XSkgKiAxMDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwZXJjZW50ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRTdHJpbmdTaXplKF90aGlzLnN0YXRlW2tleV0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHNpemUgJiYgdHlwZW9mIHNpemUud2lkdGggIT09ICd1bmRlZmluZWQnICYmICF0aGlzLnN0YXRlLmlzUmVzaXppbmdcbiAgICAgICAgICAgICAgICA/IGdldFN0cmluZ1NpemUoc2l6ZS53aWR0aClcbiAgICAgICAgICAgICAgICA6IGdldFNpemUoJ3dpZHRoJyk7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gc2l6ZSAmJiB0eXBlb2Ygc2l6ZS5oZWlnaHQgIT09ICd1bmRlZmluZWQnICYmICF0aGlzLnN0YXRlLmlzUmVzaXppbmdcbiAgICAgICAgICAgICAgICA/IGdldFN0cmluZ1NpemUoc2l6ZS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgOiBnZXRTaXplKCdoZWlnaHQnKTtcbiAgICAgICAgICAgIHJldHVybiB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS5nZXRQYXJlbnRTaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuYmFzZSB8fCAhdGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4geyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gSU5GTzogVG8gY2FsY3VsYXRlIHBhcmVudCB3aWR0aCB3aXRoIGZsZXggbGF5b3V0XG4gICAgICAgIHZhciB3cmFwQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgd3JhcCA9IHRoaXMucGFyZW50Tm9kZS5zdHlsZS5mbGV4V3JhcDtcbiAgICAgICAgdmFyIG1pbldpZHRoID0gdGhpcy5iYXNlLnN0eWxlLm1pbldpZHRoO1xuICAgICAgICBpZiAod3JhcCAhPT0gJ3dyYXAnKSB7XG4gICAgICAgICAgICB3cmFwQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuc3R5bGUuZmxleFdyYXAgPSAnd3JhcCc7XG4gICAgICAgICAgICAvLyBIQUNLOiBVc2UgcmVsYXRpdmUgdG8gZ2V0IHBhcmVudCBwYWRkaW5nIHNpemVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJhc2Uuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB0aGlzLmJhc2Uuc3R5bGUubWluV2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHZhciBzaXplID0ge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuYmFzZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5iYXNlLm9mZnNldEhlaWdodCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5iYXNlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgaWYgKHdyYXBDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuc3R5bGUuZmxleFdyYXAgPSB3cmFwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFzZS5zdHlsZS5taW5XaWR0aCA9IG1pbldpZHRoO1xuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLnVuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVzaXphYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnJlc2l6YWJsZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUud2lkdGggfHwgdGhpcy5zaXplLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCB8fCB0aGlzLnNpemUuaGVpZ2h0LFxuICAgICAgICAgICAgZmxleEJhc2lzOiBjb21wdXRlZFN0eWxlLmZsZXhCYXNpcyAhPT0gJ2F1dG8nID8gY29tcHV0ZWRTdHlsZS5mbGV4QmFzaXMgOiB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgICBpZiAoIShwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iYXNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLCAwKSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5mbGV4ID0gJzAnO1xuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGJhc2VDbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgdmFyIHBhcmVudF8xID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmJhc2UgfHwgIXBhcmVudF8xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEocGFyZW50XzEgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgISh0aGlzLmJhc2UgaW5zdGFuY2VvZiBOb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudF8xLnJlbW92ZUNoaWxkKHRoaXMuYmFzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUuY3JlYXRlU2l6ZUZvckNzc1Byb3BlcnR5ID0gZnVuY3Rpb24gKG5ld1NpemUsIGtpbmQpIHtcbiAgICAgICAgdmFyIHByb3BzU2l6ZSA9IHRoaXMucHJvcHNTaXplICYmIHRoaXMucHJvcHNTaXplW2tpbmRdO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtraW5kXSA9PT0gJ2F1dG8nICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9yaWdpbmFsW2tpbmRdID09PSBuZXdTaXplICYmXG4gICAgICAgICAgICAodHlwZW9mIHByb3BzU2l6ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcHNTaXplID09PSAnYXV0bycpXG4gICAgICAgICAgICA/ICdhdXRvJ1xuICAgICAgICAgICAgOiBuZXdTaXplO1xuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS5jYWxjdWxhdGVOZXdNYXhGcm9tQm91bmRhcnkgPSBmdW5jdGlvbiAobWF4V2lkdGgsIG1heEhlaWdodCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5ib3VuZHMgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50XzIgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBpZiAocGFyZW50XzIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBib3VuZFdpZHRoID0gcGFyZW50XzIub2Zmc2V0V2lkdGggKyAodGhpcy5wYXJlbnRMZWZ0IC0gdGhpcy5yZXNpemFibGVMZWZ0KTtcbiAgICAgICAgICAgICAgICB2YXIgYm91bmRIZWlnaHQgPSBwYXJlbnRfMi5vZmZzZXRIZWlnaHQgKyAodGhpcy5wYXJlbnRUb3AgLSB0aGlzLnJlc2l6YWJsZVRvcCk7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aCAmJiBtYXhXaWR0aCA8IGJvdW5kV2lkdGggPyBtYXhXaWR0aCA6IGJvdW5kV2lkdGg7XG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICYmIG1heEhlaWdodCA8IGJvdW5kSGVpZ2h0ID8gbWF4SGVpZ2h0IDogYm91bmRIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcm9wcy5ib3VuZHMgPT09ICd3aW5kb3cnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgYm91bmRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gdGhpcy5yZXNpemFibGVMZWZ0O1xuICAgICAgICAgICAgICAgIHZhciBib3VuZEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMucmVzaXphYmxlVG9wO1xuICAgICAgICAgICAgICAgIG1heFdpZHRoID0gbWF4V2lkdGggJiYgbWF4V2lkdGggPCBib3VuZFdpZHRoID8gbWF4V2lkdGggOiBib3VuZFdpZHRoO1xuICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCAmJiBtYXhIZWlnaHQgPCBib3VuZEhlaWdodCA/IG1heEhlaWdodCA6IGJvdW5kSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuYm91bmRzIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBib3VuZFdpZHRoID0gdGhpcy5wcm9wcy5ib3VuZHMub2Zmc2V0V2lkdGggKyAodGhpcy50YXJnZXRMZWZ0IC0gdGhpcy5yZXNpemFibGVMZWZ0KTtcbiAgICAgICAgICAgIHZhciBib3VuZEhlaWdodCA9IHRoaXMucHJvcHMuYm91bmRzLm9mZnNldEhlaWdodCArICh0aGlzLnRhcmdldFRvcCAtIHRoaXMucmVzaXphYmxlVG9wKTtcbiAgICAgICAgICAgIG1heFdpZHRoID0gbWF4V2lkdGggJiYgbWF4V2lkdGggPCBib3VuZFdpZHRoID8gbWF4V2lkdGggOiBib3VuZFdpZHRoO1xuICAgICAgICAgICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICYmIG1heEhlaWdodCA8IGJvdW5kSGVpZ2h0ID8gbWF4SGVpZ2h0IDogYm91bmRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgbWF4V2lkdGg6IG1heFdpZHRoLCBtYXhIZWlnaHQ6IG1heEhlaWdodCB9O1xuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS5jYWxjdWxhdGVOZXdTaXplRnJvbURpcmVjdGlvbiA9IGZ1bmN0aW9uIChjbGllbnRYLCBjbGllbnRZKSB7XG4gICAgICAgIHZhciBzY2FsZSA9IHRoaXMucHJvcHMuc2NhbGUgfHwgMTtcbiAgICAgICAgdmFyIHJlc2l6ZVJhdGlvID0gdGhpcy5wcm9wcy5yZXNpemVSYXRpbyB8fCAxO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnN0YXRlLCBkaXJlY3Rpb24gPSBfYS5kaXJlY3Rpb24sIG9yaWdpbmFsID0gX2Eub3JpZ2luYWw7XG4gICAgICAgIHZhciBfYiA9IHRoaXMucHJvcHMsIGxvY2tBc3BlY3RSYXRpbyA9IF9iLmxvY2tBc3BlY3RSYXRpbywgbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQgPSBfYi5sb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCwgbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCA9IF9iLmxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGg7XG4gICAgICAgIHZhciBuZXdXaWR0aCA9IG9yaWdpbmFsLndpZHRoO1xuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gb3JpZ2luYWwuaGVpZ2h0O1xuICAgICAgICB2YXIgZXh0cmFIZWlnaHQgPSBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCB8fCAwO1xuICAgICAgICB2YXIgZXh0cmFXaWR0aCA9IGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGggfHwgMDtcbiAgICAgICAgaWYgKGhhc0RpcmVjdGlvbigncmlnaHQnLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICBuZXdXaWR0aCA9IG9yaWdpbmFsLndpZHRoICsgKChjbGllbnRYIC0gb3JpZ2luYWwueCkgKiByZXNpemVSYXRpbykgLyBzY2FsZTtcbiAgICAgICAgICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSAobmV3V2lkdGggLSBleHRyYVdpZHRoKSAvIHRoaXMucmF0aW8gKyBleHRyYUhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzRGlyZWN0aW9uKCdsZWZ0JywgZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgbmV3V2lkdGggPSBvcmlnaW5hbC53aWR0aCAtICgoY2xpZW50WCAtIG9yaWdpbmFsLngpICogcmVzaXplUmF0aW8pIC8gc2NhbGU7XG4gICAgICAgICAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gKG5ld1dpZHRoIC0gZXh0cmFXaWR0aCkgLyB0aGlzLnJhdGlvICsgZXh0cmFIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0RpcmVjdGlvbignYm90dG9tJywgZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gb3JpZ2luYWwuaGVpZ2h0ICsgKChjbGllbnRZIC0gb3JpZ2luYWwueSkgKiByZXNpemVSYXRpbykgLyBzY2FsZTtcbiAgICAgICAgICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IChuZXdIZWlnaHQgLSBleHRyYUhlaWdodCkgKiB0aGlzLnJhdGlvICsgZXh0cmFXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzRGlyZWN0aW9uKCd0b3AnLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICBuZXdIZWlnaHQgPSBvcmlnaW5hbC5oZWlnaHQgLSAoKGNsaWVudFkgLSBvcmlnaW5hbC55KSAqIHJlc2l6ZVJhdGlvKSAvIHNjYWxlO1xuICAgICAgICAgICAgaWYgKGxvY2tBc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gKG5ld0hlaWdodCAtIGV4dHJhSGVpZ2h0KSAqIHRoaXMucmF0aW8gKyBleHRyYVdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG5ld1dpZHRoOiBuZXdXaWR0aCwgbmV3SGVpZ2h0OiBuZXdIZWlnaHQgfTtcbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUuY2FsY3VsYXRlTmV3U2l6ZUZyb21Bc3BlY3RSYXRpbyA9IGZ1bmN0aW9uIChuZXdXaWR0aCwgbmV3SGVpZ2h0LCBtYXgsIG1pbikge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBsb2NrQXNwZWN0UmF0aW8gPSBfYS5sb2NrQXNwZWN0UmF0aW8sIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0ID0gX2EubG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQsIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGggPSBfYS5sb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoO1xuICAgICAgICB2YXIgY29tcHV0ZWRNaW5XaWR0aCA9IHR5cGVvZiBtaW4ud2lkdGggPT09ICd1bmRlZmluZWQnID8gMTAgOiBtaW4ud2lkdGg7XG4gICAgICAgIHZhciBjb21wdXRlZE1heFdpZHRoID0gdHlwZW9mIG1heC53aWR0aCA9PT0gJ3VuZGVmaW5lZCcgfHwgbWF4LndpZHRoIDwgMCA/IG5ld1dpZHRoIDogbWF4LndpZHRoO1xuICAgICAgICB2YXIgY29tcHV0ZWRNaW5IZWlnaHQgPSB0eXBlb2YgbWluLmhlaWdodCA9PT0gJ3VuZGVmaW5lZCcgPyAxMCA6IG1pbi5oZWlnaHQ7XG4gICAgICAgIHZhciBjb21wdXRlZE1heEhlaWdodCA9IHR5cGVvZiBtYXguaGVpZ2h0ID09PSAndW5kZWZpbmVkJyB8fCBtYXguaGVpZ2h0IDwgMCA/IG5ld0hlaWdodCA6IG1heC5oZWlnaHQ7XG4gICAgICAgIHZhciBleHRyYUhlaWdodCA9IGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0IHx8IDA7XG4gICAgICAgIHZhciBleHRyYVdpZHRoID0gbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCB8fCAwO1xuICAgICAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICB2YXIgZXh0cmFNaW5XaWR0aCA9IChjb21wdXRlZE1pbkhlaWdodCAtIGV4dHJhSGVpZ2h0KSAqIHRoaXMucmF0aW8gKyBleHRyYVdpZHRoO1xuICAgICAgICAgICAgdmFyIGV4dHJhTWF4V2lkdGggPSAoY29tcHV0ZWRNYXhIZWlnaHQgLSBleHRyYUhlaWdodCkgKiB0aGlzLnJhdGlvICsgZXh0cmFXaWR0aDtcbiAgICAgICAgICAgIHZhciBleHRyYU1pbkhlaWdodCA9IChjb21wdXRlZE1pbldpZHRoIC0gZXh0cmFXaWR0aCkgLyB0aGlzLnJhdGlvICsgZXh0cmFIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgZXh0cmFNYXhIZWlnaHQgPSAoY29tcHV0ZWRNYXhXaWR0aCAtIGV4dHJhV2lkdGgpIC8gdGhpcy5yYXRpbyArIGV4dHJhSGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGxvY2tlZE1pbldpZHRoID0gTWF0aC5tYXgoY29tcHV0ZWRNaW5XaWR0aCwgZXh0cmFNaW5XaWR0aCk7XG4gICAgICAgICAgICB2YXIgbG9ja2VkTWF4V2lkdGggPSBNYXRoLm1pbihjb21wdXRlZE1heFdpZHRoLCBleHRyYU1heFdpZHRoKTtcbiAgICAgICAgICAgIHZhciBsb2NrZWRNaW5IZWlnaHQgPSBNYXRoLm1heChjb21wdXRlZE1pbkhlaWdodCwgZXh0cmFNaW5IZWlnaHQpO1xuICAgICAgICAgICAgdmFyIGxvY2tlZE1heEhlaWdodCA9IE1hdGgubWluKGNvbXB1dGVkTWF4SGVpZ2h0LCBleHRyYU1heEhlaWdodCk7XG4gICAgICAgICAgICBuZXdXaWR0aCA9IGNsYW1wKG5ld1dpZHRoLCBsb2NrZWRNaW5XaWR0aCwgbG9ja2VkTWF4V2lkdGgpO1xuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gY2xhbXAobmV3SGVpZ2h0LCBsb2NrZWRNaW5IZWlnaHQsIGxvY2tlZE1heEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdXaWR0aCA9IGNsYW1wKG5ld1dpZHRoLCBjb21wdXRlZE1pbldpZHRoLCBjb21wdXRlZE1heFdpZHRoKTtcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IGNsYW1wKG5ld0hlaWdodCwgY29tcHV0ZWRNaW5IZWlnaHQsIGNvbXB1dGVkTWF4SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBuZXdXaWR0aDogbmV3V2lkdGgsIG5ld0hlaWdodDogbmV3SGVpZ2h0IH07XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLnNldEJvdW5kaW5nQ2xpZW50UmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRm9yIHBhcmVudCBib3VuZGFyeVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5ib3VuZHMgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50XzMgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBpZiAocGFyZW50XzMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRSZWN0ID0gcGFyZW50XzMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRMZWZ0ID0gcGFyZW50UmVjdC5sZWZ0O1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50VG9wID0gcGFyZW50UmVjdC50b3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIHRhcmdldChodG1sIGVsZW1lbnQpIGJvdW5kYXJ5XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJvdW5kcyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0UmVjdCA9IHRoaXMucHJvcHMuYm91bmRzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdGhpcy50YXJnZXRMZWZ0ID0gdGFyZ2V0UmVjdC5sZWZ0O1xuICAgICAgICAgICAgdGhpcy50YXJnZXRUb3AgPSB0YXJnZXRSZWN0LnRvcDtcbiAgICAgICAgfVxuICAgICAgICAvLyBGb3IgYm91bmRhcnlcbiAgICAgICAgaWYgKHRoaXMucmVzaXphYmxlKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnJlc2l6YWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgbGVmdCA9IF9hLmxlZnQsIHRvcF8xID0gX2EudG9wO1xuICAgICAgICAgICAgdGhpcy5yZXNpemFibGVMZWZ0ID0gbGVmdDtcbiAgICAgICAgICAgIHRoaXMucmVzaXphYmxlVG9wID0gdG9wXzE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUub25SZXNpemVTdGFydCA9IGZ1bmN0aW9uIChldmVudCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmICghdGhpcy5yZXNpemFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xpZW50WCA9IDA7XG4gICAgICAgIHZhciBjbGllbnRZID0gMDtcbiAgICAgICAgaWYgKGV2ZW50Lm5hdGl2ZUV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xuICAgICAgICAgICAgY2xpZW50WCA9IGV2ZW50Lm5hdGl2ZUV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgICBjbGllbnRZID0gZXZlbnQubmF0aXZlRXZlbnQuY2xpZW50WTtcbiAgICAgICAgICAgIC8vIFdoZW4gdXNlciBjbGljayB3aXRoIHJpZ2h0IGJ1dHRvbiB0aGUgcmVzaXplIGlzIHN0dWNrIGluIHJlc2l6aW5nIG1vZGVcbiAgICAgICAgICAgIC8vIHVudGlsIHVzZXJzIGNsaWNrcyBhZ2FpbiwgZG9udCBjb250aW51ZSBpZiByaWdodCBjbGljayBpcyB1c2VkLlxuICAgICAgICAgICAgLy8gSEFDSzogTW91c2VFdmVudCBkb2VzIG5vdCBoYXZlIGB3aGljaGAgZnJvbSBmbG93LWJpbiB2MC42OC5cbiAgICAgICAgICAgIGlmIChldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5uYXRpdmVFdmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgIGNsaWVudFggPSBldmVudC5uYXRpdmVFdmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBjbGllbnRZID0gZXZlbnQubmF0aXZlRXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzaXplU3RhcnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2l6YWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdGFydFJlc2l6ZSA9IHRoaXMucHJvcHMub25SZXNpemVTdGFydChldmVudCwgZGlyZWN0aW9uLCB0aGlzLnJlc2l6YWJsZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0UmVzaXplID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZpeCAjMTY4XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNpemUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5zaXplLmhlaWdodCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5wcm9wcy5zaXplLmhlaWdodCAhPT0gdGhpcy5zdGF0ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGVpZ2h0OiB0aGlzLnByb3BzLnNpemUuaGVpZ2h0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnNpemUud2lkdGggIT09ICd1bmRlZmluZWQnICYmIHRoaXMucHJvcHMuc2l6ZS53aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogdGhpcy5wcm9wcy5zaXplLndpZHRoIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEZvciBsb2NrQXNwZWN0UmF0aW8gY2FzZVxuICAgICAgICB0aGlzLnJhdGlvID1cbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLnByb3BzLmxvY2tBc3BlY3RSYXRpbyA9PT0gJ251bWJlcicgPyB0aGlzLnByb3BzLmxvY2tBc3BlY3RSYXRpbyA6IHRoaXMuc2l6ZS53aWR0aCAvIHRoaXMuc2l6ZS5oZWlnaHQ7XG4gICAgICAgIHZhciBmbGV4QmFzaXM7XG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5yZXNpemFibGUpO1xuICAgICAgICBpZiAoY29tcHV0ZWRTdHlsZS5mbGV4QmFzaXMgIT09ICdhdXRvJykge1xuICAgICAgICAgICAgdmFyIHBhcmVudF80ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgICAgICAgaWYgKHBhcmVudF80KSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudF80KS5mbGV4RGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuZmxleERpciA9IGRpci5zdGFydHNXaXRoKCdyb3cnKSA/ICdyb3cnIDogJ2NvbHVtbic7XG4gICAgICAgICAgICAgICAgZmxleEJhc2lzID0gY29tcHV0ZWRTdHlsZS5mbGV4QmFzaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGJvdW5kYXJ5XG4gICAgICAgIHRoaXMuc2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgICAgICBvcmlnaW5hbDoge1xuICAgICAgICAgICAgICAgIHg6IGNsaWVudFgsXG4gICAgICAgICAgICAgICAgeTogY2xpZW50WSxcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zaXplLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zaXplLmhlaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1Jlc2l6aW5nOiB0cnVlLFxuICAgICAgICAgICAgYmFja2dyb3VuZFN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kU3R5bGUpLCB7IGN1cnNvcjogd2luZG93LmdldENvbXB1dGVkU3R5bGUoZXZlbnQudGFyZ2V0KS5jdXJzb3IgfHwgJ2F1dG8nIH0pLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICAgICAgICBmbGV4QmFzaXM6IGZsZXhCYXNpcyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLm9uTW91c2VNb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc1Jlc2l6aW5nIHx8ICF0aGlzLnJlc2l6YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIG1heFdpZHRoID0gX2EubWF4V2lkdGgsIG1heEhlaWdodCA9IF9hLm1heEhlaWdodCwgbWluV2lkdGggPSBfYS5taW5XaWR0aCwgbWluSGVpZ2h0ID0gX2EubWluSGVpZ2h0O1xuICAgICAgICB2YXIgY2xpZW50WCA9IGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHZhciBjbGllbnRZID0gZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50ID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgdmFyIF9iID0gdGhpcy5zdGF0ZSwgZGlyZWN0aW9uID0gX2IuZGlyZWN0aW9uLCBvcmlnaW5hbCA9IF9iLm9yaWdpbmFsLCB3aWR0aCA9IF9iLndpZHRoLCBoZWlnaHQgPSBfYi5oZWlnaHQ7XG4gICAgICAgIHZhciBwYXJlbnRTaXplID0gdGhpcy5nZXRQYXJlbnRTaXplKCk7XG4gICAgICAgIHZhciBtYXggPSBjYWxjdWxhdGVOZXdNYXgocGFyZW50U2l6ZSwgbWF4V2lkdGgsIG1heEhlaWdodCwgbWluV2lkdGgsIG1pbkhlaWdodCk7XG4gICAgICAgIG1heFdpZHRoID0gbWF4Lm1heFdpZHRoO1xuICAgICAgICBtYXhIZWlnaHQgPSBtYXgubWF4SGVpZ2h0O1xuICAgICAgICBtaW5XaWR0aCA9IG1heC5taW5XaWR0aDtcbiAgICAgICAgbWluSGVpZ2h0ID0gbWF4Lm1pbkhlaWdodDtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyBzaXplXG4gICAgICAgIHZhciBfYyA9IHRoaXMuY2FsY3VsYXRlTmV3U2l6ZUZyb21EaXJlY3Rpb24oY2xpZW50WCwgY2xpZW50WSksIG5ld0hlaWdodCA9IF9jLm5ld0hlaWdodCwgbmV3V2lkdGggPSBfYy5uZXdXaWR0aDtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIG1heCBzaXplIGZyb20gYm91bmRhcnkgc2V0dGluZ3NcbiAgICAgICAgdmFyIGJvdW5kYXJ5TWF4ID0gdGhpcy5jYWxjdWxhdGVOZXdNYXhGcm9tQm91bmRhcnkobWF4V2lkdGgsIG1heEhlaWdodCk7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgc2l6ZSBmcm9tIGFzcGVjdCByYXRpb1xuICAgICAgICB2YXIgbmV3U2l6ZSA9IHRoaXMuY2FsY3VsYXRlTmV3U2l6ZUZyb21Bc3BlY3RSYXRpbyhuZXdXaWR0aCwgbmV3SGVpZ2h0LCB7IHdpZHRoOiBib3VuZGFyeU1heC5tYXhXaWR0aCwgaGVpZ2h0OiBib3VuZGFyeU1heC5tYXhIZWlnaHQgfSwgeyB3aWR0aDogbWluV2lkdGgsIGhlaWdodDogbWluSGVpZ2h0IH0pO1xuICAgICAgICBuZXdXaWR0aCA9IG5ld1NpemUubmV3V2lkdGg7XG4gICAgICAgIG5ld0hlaWdodCA9IG5ld1NpemUubmV3SGVpZ2h0O1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5ncmlkKSB7XG4gICAgICAgICAgICB2YXIgbmV3R3JpZFdpZHRoID0gc25hcChuZXdXaWR0aCwgdGhpcy5wcm9wcy5ncmlkWzBdKTtcbiAgICAgICAgICAgIHZhciBuZXdHcmlkSGVpZ2h0ID0gc25hcChuZXdIZWlnaHQsIHRoaXMucHJvcHMuZ3JpZFsxXSk7XG4gICAgICAgICAgICB2YXIgZ2FwID0gdGhpcy5wcm9wcy5zbmFwR2FwIHx8IDA7XG4gICAgICAgICAgICBuZXdXaWR0aCA9IGdhcCA9PT0gMCB8fCBNYXRoLmFicyhuZXdHcmlkV2lkdGggLSBuZXdXaWR0aCkgPD0gZ2FwID8gbmV3R3JpZFdpZHRoIDogbmV3V2lkdGg7XG4gICAgICAgICAgICBuZXdIZWlnaHQgPSBnYXAgPT09IDAgfHwgTWF0aC5hYnMobmV3R3JpZEhlaWdodCAtIG5ld0hlaWdodCkgPD0gZ2FwID8gbmV3R3JpZEhlaWdodCA6IG5ld0hlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zbmFwICYmIHRoaXMucHJvcHMuc25hcC54KSB7XG4gICAgICAgICAgICBuZXdXaWR0aCA9IGZpbmRDbG9zZXN0U25hcChuZXdXaWR0aCwgdGhpcy5wcm9wcy5zbmFwLngsIHRoaXMucHJvcHMuc25hcEdhcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc25hcCAmJiB0aGlzLnByb3BzLnNuYXAueSkge1xuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gZmluZENsb3Nlc3RTbmFwKG5ld0hlaWdodCwgdGhpcy5wcm9wcy5zbmFwLnksIHRoaXMucHJvcHMuc25hcEdhcCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbHRhID0ge1xuICAgICAgICAgICAgd2lkdGg6IG5ld1dpZHRoIC0gb3JpZ2luYWwud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodCAtIG9yaWdpbmFsLmhlaWdodCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHdpZHRoICYmIHR5cGVvZiB3aWR0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChlbmRzV2l0aCh3aWR0aCwgJyUnKSkge1xuICAgICAgICAgICAgICAgIHZhciBwZXJjZW50ID0gKG5ld1dpZHRoIC8gcGFyZW50U2l6ZS53aWR0aCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSBwZXJjZW50ICsgXCIlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbmRzV2l0aCh3aWR0aCwgJ3Z3JykpIHtcbiAgICAgICAgICAgICAgICB2YXIgdncgPSAobmV3V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSB2dyArIFwidndcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVuZHNXaXRoKHdpZHRoLCAndmgnKSkge1xuICAgICAgICAgICAgICAgIHZhciB2aCA9IChuZXdXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSB2aCArIFwidmhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVpZ2h0ICYmIHR5cGVvZiBoZWlnaHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoZW5kc1dpdGgoaGVpZ2h0LCAnJScpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBlcmNlbnQgPSAobmV3SGVpZ2h0IC8gcGFyZW50U2l6ZS5oZWlnaHQpICogMTAwO1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IHBlcmNlbnQgKyBcIiVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVuZHNXaXRoKGhlaWdodCwgJ3Z3JykpIHtcbiAgICAgICAgICAgICAgICB2YXIgdncgPSAobmV3SGVpZ2h0IC8gd2luZG93LmlubmVyV2lkdGgpICogMTAwO1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IHZ3ICsgXCJ2d1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZW5kc1dpdGgoaGVpZ2h0LCAndmgnKSkge1xuICAgICAgICAgICAgICAgIHZhciB2aCA9IChuZXdIZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogMTAwO1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IHZoICsgXCJ2aFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNyZWF0ZVNpemVGb3JDc3NQcm9wZXJ0eShuZXdXaWR0aCwgJ3dpZHRoJyksXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuY3JlYXRlU2l6ZUZvckNzc1Byb3BlcnR5KG5ld0hlaWdodCwgJ2hlaWdodCcpLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5mbGV4RGlyID09PSAncm93Jykge1xuICAgICAgICAgICAgbmV3U3RhdGUuZmxleEJhc2lzID0gbmV3U3RhdGUud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5mbGV4RGlyID09PSAnY29sdW1uJykge1xuICAgICAgICAgICAgbmV3U3RhdGUuZmxleEJhc2lzID0gbmV3U3RhdGUuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlc2l6ZShldmVudCwgZGlyZWN0aW9uLCB0aGlzLnJlc2l6YWJsZSwgZGVsdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLm9uTW91c2VVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnN0YXRlLCBpc1Jlc2l6aW5nID0gX2EuaXNSZXNpemluZywgZGlyZWN0aW9uID0gX2EuZGlyZWN0aW9uLCBvcmlnaW5hbCA9IF9hLm9yaWdpbmFsO1xuICAgICAgICBpZiAoIWlzUmVzaXppbmcgfHwgIXRoaXMucmVzaXphYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbHRhID0ge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuc2l6ZS53aWR0aCAtIG9yaWdpbmFsLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnNpemUuaGVpZ2h0IC0gb3JpZ2luYWwuaGVpZ2h0LFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2l6ZVN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZXNpemVTdG9wKGV2ZW50LCBkaXJlY3Rpb24sIHRoaXMucmVzaXphYmxlLCBkZWx0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnByb3BzLnNpemUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNSZXNpemluZzogZmFsc2UsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLnN0YXRlLmJhY2tncm91bmRTdHlsZSksIHsgY3Vyc29yOiAnYXV0bycgfSksXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS51cGRhdGVTaXplID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0IH0pO1xuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS5yZW5kZXJSZXNpemVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBlbmFibGUgPSBfYS5lbmFibGUsIGhhbmRsZVN0eWxlcyA9IF9hLmhhbmRsZVN0eWxlcywgaGFuZGxlQ2xhc3NlcyA9IF9hLmhhbmRsZUNsYXNzZXMsIGhhbmRsZVdyYXBwZXJTdHlsZSA9IF9hLmhhbmRsZVdyYXBwZXJTdHlsZSwgaGFuZGxlV3JhcHBlckNsYXNzID0gX2EuaGFuZGxlV3JhcHBlckNsYXNzLCBoYW5kbGVDb21wb25lbnQgPSBfYS5oYW5kbGVDb21wb25lbnQ7XG4gICAgICAgIGlmICghZW5hYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzaXplcnMgPSBPYmplY3Qua2V5cyhlbmFibGUpLm1hcChmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICBpZiAoZW5hYmxlW2Rpcl0gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KHJlc2l6ZXJfMS5SZXNpemVyLCB7IGtleTogZGlyLCBkaXJlY3Rpb246IGRpciwgb25SZXNpemVTdGFydDogX3RoaXMub25SZXNpemVTdGFydCwgcmVwbGFjZVN0eWxlczogaGFuZGxlU3R5bGVzICYmIGhhbmRsZVN0eWxlc1tkaXJdLCBjbGFzc05hbWU6IGhhbmRsZUNsYXNzZXMgJiYgaGFuZGxlQ2xhc3Nlc1tkaXJdIH0sIGhhbmRsZUNvbXBvbmVudCAmJiBoYW5kbGVDb21wb25lbnRbZGlyXSA/IGhhbmRsZUNvbXBvbmVudFtkaXJdIDogbnVsbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyAjOTMgV3JhcCB0aGUgcmVzaXplIGJveCBpbiBzcGFuICh3aWxsIG5vdCBicmVhayAxMDAlIHdpZHRoL2hlaWdodClcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogaGFuZGxlV3JhcHBlckNsYXNzLCBzdHlsZTogaGFuZGxlV3JhcHBlclN0eWxlIH0sIHJlc2l6ZXJzKSk7XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGV4dGVuZHNQcm9wcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChkZWZpbmVkUHJvcHMuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY2Nba2V5XSA9IF90aGlzLnByb3BzW2tleV07XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIHZhciBzdHlsZSA9IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHsgcG9zaXRpb246ICdyZWxhdGl2ZScsIHVzZXJTZWxlY3Q6IHRoaXMuc3RhdGUuaXNSZXNpemluZyA/ICdub25lJyA6ICdhdXRvJyB9LCB0aGlzLnByb3BzLnN0eWxlKSwgdGhpcy5zaXplU3R5bGUpLCB7IG1heFdpZHRoOiB0aGlzLnByb3BzLm1heFdpZHRoLCBtYXhIZWlnaHQ6IHRoaXMucHJvcHMubWF4SGVpZ2h0LCBtaW5XaWR0aDogdGhpcy5wcm9wcy5taW5XaWR0aCwgbWluSGVpZ2h0OiB0aGlzLnByb3BzLm1pbkhlaWdodCwgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIGZsZXhTaHJpbms6IDAgfSk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZsZXhCYXNpcykge1xuICAgICAgICAgICAgc3R5bGUuZmxleEJhc2lzID0gdGhpcy5zdGF0ZS5mbGV4QmFzaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9fYXNzaWduKHsgcmVmOiB0aGlzLnJlZiwgc3R5bGU6IHN0eWxlLCBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lIH0sIGV4dGVuZHNQcm9wcyksXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlzUmVzaXppbmcgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB0aGlzLnN0YXRlLmJhY2tncm91bmRTdHlsZSB9KSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICB0aGlzLnJlbmRlclJlc2l6ZXIoKSkpO1xuICAgIH07XG4gICAgUmVzaXphYmxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgb25SZXNpemVTdGFydDogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICBvblJlc2l6ZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICBvblJlc2l6ZVN0b3A6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgZW5hYmxlOiB7XG4gICAgICAgICAgICB0b3A6IHRydWUsXG4gICAgICAgICAgICByaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIGJvdHRvbTogdHJ1ZSxcbiAgICAgICAgICAgIGxlZnQ6IHRydWUsXG4gICAgICAgICAgICB0b3BSaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgYm90dG9tTGVmdDogdHJ1ZSxcbiAgICAgICAgICAgIHRvcExlZnQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgZ3JpZDogWzEsIDFdLFxuICAgICAgICBsb2NrQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoOiAwLFxuICAgICAgICBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodDogMCxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIHJlc2l6ZVJhdGlvOiAxLFxuICAgICAgICBzbmFwR2FwOiAwLFxuICAgIH07XG4gICAgcmV0dXJuIFJlc2l6YWJsZTtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5SZXNpemFibGUgPSBSZXNpemFibGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHN0eWxlcyA9IHtcbiAgICB0b3A6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgICAgIHRvcDogJy01cHgnLFxuICAgICAgICBsZWZ0OiAnMHB4JyxcbiAgICAgICAgY3Vyc29yOiAncm93LXJlc2l6ZScsXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgICB3aWR0aDogJzEwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgdG9wOiAnMHB4JyxcbiAgICAgICAgcmlnaHQ6ICctNXB4JyxcbiAgICAgICAgY3Vyc29yOiAnY29sLXJlc2l6ZScsXG4gICAgfSxcbiAgICBib3R0b206IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgICAgIGJvdHRvbTogJy01cHgnLFxuICAgICAgICBsZWZ0OiAnMHB4JyxcbiAgICAgICAgY3Vyc29yOiAncm93LXJlc2l6ZScsXG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICAgIHdpZHRoOiAnMTBweCcsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB0b3A6ICcwcHgnLFxuICAgICAgICBsZWZ0OiAnLTVweCcsXG4gICAgICAgIGN1cnNvcjogJ2NvbC1yZXNpemUnLFxuICAgIH0sXG4gICAgdG9wUmlnaHQ6IHtcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogJy0xMHB4JyxcbiAgICAgICAgdG9wOiAnLTEwcHgnLFxuICAgICAgICBjdXJzb3I6ICduZS1yZXNpemUnLFxuICAgIH0sXG4gICAgYm90dG9tUmlnaHQ6IHtcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogJy0xMHB4JyxcbiAgICAgICAgYm90dG9tOiAnLTEwcHgnLFxuICAgICAgICBjdXJzb3I6ICdzZS1yZXNpemUnLFxuICAgIH0sXG4gICAgYm90dG9tTGVmdDoge1xuICAgICAgICB3aWR0aDogJzIwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6ICctMTBweCcsXG4gICAgICAgIGJvdHRvbTogJy0xMHB4JyxcbiAgICAgICAgY3Vyc29yOiAnc3ctcmVzaXplJyxcbiAgICB9LFxuICAgIHRvcExlZnQ6IHtcbiAgICAgICAgd2lkdGg6ICcyMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiAnLTEwcHgnLFxuICAgICAgICB0b3A6ICctMTBweCcsXG4gICAgICAgIGN1cnNvcjogJ253LXJlc2l6ZScsXG4gICAgfSxcbn07XG52YXIgUmVzaXplciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmVzaXplciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZXNpemVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25SZXNpemVTdGFydChlLCBfdGhpcy5wcm9wcy5kaXJlY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25SZXNpemVTdGFydChlLCBfdGhpcy5wcm9wcy5kaXJlY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFJlc2l6ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJywgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHVzZXJTZWxlY3Q6ICdub25lJyB9LCBzdHlsZXNbdGhpcy5wcm9wcy5kaXJlY3Rpb25dKSwgKHRoaXMucHJvcHMucmVwbGFjZVN0eWxlcyB8fCB7fSkpLCBvbk1vdXNlRG93bjogdGhpcy5vbk1vdXNlRG93biwgb25Ub3VjaFN0YXJ0OiB0aGlzLm9uVG91Y2hTdGFydCB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5SZXNpemVyID0gUmVzaXplcjtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiU2llbWFcIixbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlNpZW1hPXQoKTplLlNpZW1hPXQoKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQocil7aWYoaVtyXSlyZXR1cm4gaVtyXS5leHBvcnRzO3ZhciBuPWlbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3JdLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHQpLG4ubD0hMCxuLmV4cG9ydHN9dmFyIGk9e307cmV0dXJuIHQubT1lLHQuYz1pLHQuZD1mdW5jdGlvbihlLGkscil7dC5vKGUsaSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkse2NvbmZpZ3VyYWJsZTohMSxlbnVtZXJhYmxlOiEwLGdldDpyfSl9LHQubj1mdW5jdGlvbihlKXt2YXIgaT1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gdC5kKGksXCJhXCIsaSksaX0sdC5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSx0LnA9XCJcIix0KHQucz0wKX0oW2Z1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgcj10W2ldO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsaSxyKXtyZXR1cm4gaSYmZSh0LnByb3RvdHlwZSxpKSxyJiZlKHQsciksdH19KCksbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dmFyIGk9dGhpcztpZihyKHRoaXMsZSksdGhpcy5jb25maWc9ZS5tZXJnZVNldHRpbmdzKHQpLHRoaXMuc2VsZWN0b3I9XCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuY29uZmlnLnNlbGVjdG9yP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb25maWcuc2VsZWN0b3IpOnRoaXMuY29uZmlnLnNlbGVjdG9yLG51bGw9PT10aGlzLnNlbGVjdG9yKXRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB3cm9uZyB3aXRoIHlvdXIgc2VsZWN0b3Ig8J+YrVwiKTt0aGlzLnJlc29sdmVTbGlkZXNOdW1iZXIoKSx0aGlzLnNlbGVjdG9yV2lkdGg9dGhpcy5zZWxlY3Rvci5vZmZzZXRXaWR0aCx0aGlzLmlubmVyRWxlbWVudHM9W10uc2xpY2UuY2FsbCh0aGlzLnNlbGVjdG9yLmNoaWxkcmVuKSx0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5sb29wP3RoaXMuY29uZmlnLnN0YXJ0SW5kZXgldGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDpNYXRoLm1heCgwLE1hdGgubWluKHRoaXMuY29uZmlnLnN0YXJ0SW5kZXgsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpKSx0aGlzLnRyYW5zZm9ybVByb3BlcnR5PWUud2Via2l0T3JOb3QoKSxbXCJyZXNpemVIYW5kbGVyXCIsXCJ0b3VjaHN0YXJ0SGFuZGxlclwiLFwidG91Y2hlbmRIYW5kbGVyXCIsXCJ0b3VjaG1vdmVIYW5kbGVyXCIsXCJtb3VzZWRvd25IYW5kbGVyXCIsXCJtb3VzZXVwSGFuZGxlclwiLFwibW91c2VsZWF2ZUhhbmRsZXJcIixcIm1vdXNlbW92ZUhhbmRsZXJcIixcImNsaWNrSGFuZGxlclwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lbZV09aVtlXS5iaW5kKGkpfSksdGhpcy5pbml0KCl9cmV0dXJuIHMoZSxbe2tleTpcImF0dGFjaEV2ZW50c1wiLHZhbHVlOmZ1bmN0aW9uKCl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnJlc2l6ZUhhbmRsZXIpLHRoaXMuY29uZmlnLmRyYWdnYWJsZSYmKHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazohMX0sdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcikpfX0se2tleTpcImRldGFjaEV2ZW50c1wiLHZhbHVlOmZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLnJlc2l6ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLnRvdWNoc3RhcnRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHRoaXMudG91Y2hlbmRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLnRvdWNobW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMubW91c2Vkb3duSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMubW91c2V1cEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdXNlbGVhdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm1vdXNlbW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5jbGlja0hhbmRsZXIpfX0se2tleTpcImluaXRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuYXR0YWNoRXZlbnRzKCksdGhpcy5zZWxlY3Rvci5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLHRoaXMuc2VsZWN0b3Iuc3R5bGUuZGlyZWN0aW9uPXRoaXMuY29uZmlnLnJ0bD9cInJ0bFwiOlwibHRyXCIsdGhpcy5idWlsZFNsaWRlckZyYW1lKCksdGhpcy5jb25maWcub25Jbml0LmNhbGwodGhpcyl9fSx7a2V5OlwiYnVpbGRTbGlkZXJGcmFtZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSx0PXRoaXMuY29uZmlnLmxvb3A/dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsyKnRoaXMucGVyUGFnZTp0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuc2xpZGVyRnJhbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndpZHRoPWUqdCtcInB4XCIsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIik7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2lmKHRoaXMuY29uZmlnLmxvb3ApZm9yKHZhciByPXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlO3I8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtyKyspe3ZhciBuPXRoaXMuYnVpbGRTbGlkZXJGcmFtZUl0ZW0odGhpcy5pbm5lckVsZW1lbnRzW3JdLmNsb25lTm9kZSghMCkpO2kuYXBwZW5kQ2hpbGQobil9Zm9yKHZhciBzPTA7czx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3MrKyl7dmFyIGw9dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbc10pO2kuYXBwZW5kQ2hpbGQobCl9aWYodGhpcy5jb25maWcubG9vcClmb3IodmFyIG89MDtvPHRoaXMucGVyUGFnZTtvKyspe3ZhciBhPXRoaXMuYnVpbGRTbGlkZXJGcmFtZUl0ZW0odGhpcy5pbm5lckVsZW1lbnRzW29dLmNsb25lTm9kZSghMCkpO2kuYXBwZW5kQ2hpbGQoYSl9dGhpcy5zbGlkZXJGcmFtZS5hcHBlbmRDaGlsZChpKSx0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQodGhpcy5zbGlkZXJGcmFtZSksdGhpcy5zbGlkZVRvQ3VycmVudCgpfX0se2tleTpcImJ1aWxkU2xpZGVyRnJhbWVJdGVtXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gdC5zdHlsZS5jc3NGbG9hdD10aGlzLmNvbmZpZy5ydGw/XCJyaWdodFwiOlwibGVmdFwiLHQuc3R5bGUuZmxvYXQ9dGhpcy5jb25maWcucnRsP1wicmlnaHRcIjpcImxlZnRcIix0LnN0eWxlLndpZHRoPSh0aGlzLmNvbmZpZy5sb29wPzEwMC8odGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsyKnRoaXMucGVyUGFnZSk6MTAwL3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgpK1wiJVwiLHQuYXBwZW5kQ2hpbGQoZSksdH19LHtrZXk6XCJyZXNvbHZlU2xpZGVzTnVtYmVyXCIsdmFsdWU6ZnVuY3Rpb24oKXtpZihcIm51bWJlclwiPT10eXBlb2YgdGhpcy5jb25maWcucGVyUGFnZSl0aGlzLnBlclBhZ2U9dGhpcy5jb25maWcucGVyUGFnZTtlbHNlIGlmKFwib2JqZWN0XCI9PT1uKHRoaXMuY29uZmlnLnBlclBhZ2UpKXt0aGlzLnBlclBhZ2U9MTtmb3IodmFyIGUgaW4gdGhpcy5jb25maWcucGVyUGFnZSl3aW5kb3cuaW5uZXJXaWR0aD49ZSYmKHRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlW2VdKX19fSx7a2V5OlwicHJldlwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsdD1hcmd1bWVudHNbMV07aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTtpZih0aGlzLmNvbmZpZy5sb29wKXtpZih0aGlzLmN1cnJlbnRTbGlkZS1lPDApe3RoaXMuZGlzYWJsZVRyYW5zaXRpb24oKTt2YXIgcj10aGlzLmN1cnJlbnRTbGlkZSt0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLG49dGhpcy5wZXJQYWdlLHM9cituLGw9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpzKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxvPXRoaXMuY29uZmlnLmRyYWdnYWJsZT90aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYOjA7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyhsK28pK1wicHgsIDAsIDApXCIsdGhpcy5jdXJyZW50U2xpZGU9ci1lfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jdXJyZW50U2xpZGUtZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPU1hdGgubWF4KHRoaXMuY3VycmVudFNsaWRlLWUsMCk7aSE9PXRoaXMuY3VycmVudFNsaWRlJiYodGhpcy5zbGlkZVRvQ3VycmVudCh0aGlzLmNvbmZpZy5sb29wKSx0aGlzLmNvbmZpZy5vbkNoYW5nZS5jYWxsKHRoaXMpLHQmJnQuY2FsbCh0aGlzKSl9fX0se2tleTpcIm5leHRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXToxLHQ9YXJndW1lbnRzWzFdO2lmKCEodGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlKSl7dmFyIGk9dGhpcy5jdXJyZW50U2xpZGU7aWYodGhpcy5jb25maWcubG9vcCl7aWYodGhpcy5jdXJyZW50U2xpZGUrZT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSl7dGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO3ZhciByPXRoaXMuY3VycmVudFNsaWRlLXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgsbj10aGlzLnBlclBhZ2Uscz1yK24sbD0odGhpcy5jb25maWcucnRsPzE6LTEpKnMqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLG89dGhpcy5jb25maWcuZHJhZ2dhYmxlP3RoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFg6MDt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKGwrbykrXCJweCwgMCwgMClcIix0aGlzLmN1cnJlbnRTbGlkZT1yK2V9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmN1cnJlbnRTbGlkZStlfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9TWF0aC5taW4odGhpcy5jdXJyZW50U2xpZGUrZSx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSk7aSE9PXRoaXMuY3VycmVudFNsaWRlJiYodGhpcy5zbGlkZVRvQ3VycmVudCh0aGlzLmNvbmZpZy5sb29wKSx0aGlzLmNvbmZpZy5vbkNoYW5nZS5jYWxsKHRoaXMpLHQmJnQuY2FsbCh0aGlzKSl9fX0se2tleTpcImRpc2FibGVUcmFuc2l0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZ319LHtrZXk6XCJlbmFibGVUcmFuc2l0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIFwiK3RoaXMuY29uZmlnLmR1cmF0aW9uK1wibXMgXCIrdGhpcy5jb25maWcuZWFzaW5nfX0se2tleTpcImdvVG9cIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKCEodGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlKSl7dmFyIGk9dGhpcy5jdXJyZW50U2xpZGU7dGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jb25maWcubG9vcD9lJXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg6TWF0aC5taW4oTWF0aC5tYXgoZSwwKSx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSksaSE9PXRoaXMuY3VycmVudFNsaWRlJiYodGhpcy5zbGlkZVRvQ3VycmVudCgpLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5Olwic2xpZGVUb0N1cnJlbnRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGk9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUscj0odGhpcy5jb25maWcucnRsPzE6LTEpKmkqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpO2U/cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dC5lbmFibGVUcmFuc2l0aW9uKCksdC5zbGlkZXJGcmFtZS5zdHlsZVt0LnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiK3IrXCJweCwgMCwgMClcIn0pfSk6dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiK3IrXCJweCwgMCwgMClcIn19LHtrZXk6XCJ1cGRhdGVBZnRlckRyYWdcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPSh0aGlzLmNvbmZpZy5ydGw/LTE6MSkqKHRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgpLHQ9TWF0aC5hYnMoZSksaT10aGlzLmNvbmZpZy5tdWx0aXBsZURyYWc/TWF0aC5jZWlsKHQvKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpKToxLHI9ZT4wJiZ0aGlzLmN1cnJlbnRTbGlkZS1pPDAsbj1lPDAmJnRoaXMuY3VycmVudFNsaWRlK2k+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2U7ZT4wJiZ0PnRoaXMuY29uZmlnLnRocmVzaG9sZCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aD50aGlzLnBlclBhZ2U/dGhpcy5wcmV2KGkpOmU8MCYmdD50aGlzLmNvbmZpZy50aHJlc2hvbGQmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg+dGhpcy5wZXJQYWdlJiZ0aGlzLm5leHQoaSksdGhpcy5zbGlkZVRvQ3VycmVudChyfHxuKX19LHtrZXk6XCJyZXNpemVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnJlc29sdmVTbGlkZXNOdW1iZXIoKSx0aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCYmKHRoaXMuY3VycmVudFNsaWRlPXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZT8wOnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSx0aGlzLnNlbGVjdG9yV2lkdGg9dGhpcy5zZWxlY3Rvci5vZmZzZXRXaWR0aCx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKX19LHtrZXk6XCJjbGVhckRyYWdcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZHJhZz17c3RhcnRYOjAsZW5kWDowLHN0YXJ0WTowLGxldEl0R286bnVsbCxwcmV2ZW50Q2xpY2s6dGhpcy5kcmFnLnByZXZlbnRDbGlja319fSx7a2V5OlwidG91Y2hzdGFydEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXstMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZSl8fChlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITAsdGhpcy5kcmFnLnN0YXJ0WD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5kcmFnLnN0YXJ0WT1lLnRvdWNoZXNbMF0ucGFnZVkpfX0se2tleTpcInRvdWNoZW5kSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcInRvdWNobW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnN0b3BQcm9wYWdhdGlvbigpLG51bGw9PT10aGlzLmRyYWcubGV0SXRHbyYmKHRoaXMuZHJhZy5sZXRJdEdvPU1hdGguYWJzKHRoaXMuZHJhZy5zdGFydFktZS50b3VjaGVzWzBdLnBhZ2VZKTxNYXRoLmFicyh0aGlzLmRyYWcuc3RhcnRYLWUudG91Y2hlc1swXS5wYWdlWCkpLHRoaXMucG9pbnRlckRvd24mJnRoaXMuZHJhZy5sZXRJdEdvKXtlLnByZXZlbnREZWZhdWx0KCksdGhpcy5kcmFnLmVuZFg9ZS50b3VjaGVzWzBdLnBhZ2VYLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nO3ZhciB0PXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlOnRoaXMuY3VycmVudFNsaWRlLGk9dCoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkscj10aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYLG49dGhpcy5jb25maWcucnRsP2krcjppLXI7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyh0aGlzLmNvbmZpZy5ydGw/MTotMSkqbitcInB4LCAwLCAwKVwifX19LHtrZXk6XCJtb3VzZWRvd25IYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7LTEhPT1bXCJURVhUQVJFQVwiLFwiT1BUSU9OXCIsXCJJTlBVVFwiLFwiU0VMRUNUXCJdLmluZGV4T2YoZS50YXJnZXQubm9kZU5hbWUpfHwoZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUucGFnZVgpfX0se2tleTpcIm1vdXNldXBIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiXCIsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy5kcmFnLmVuZFgmJnRoaXMudXBkYXRlQWZ0ZXJEcmFnKCksdGhpcy5jbGVhckRyYWcoKX19LHtrZXk6XCJtb3VzZW1vdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMucG9pbnRlckRvd24pe1wiQVwiPT09ZS50YXJnZXQubm9kZU5hbWUmJih0aGlzLmRyYWcucHJldmVudENsaWNrPSEwKSx0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiYmluZ1wiLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nO3ZhciB0PXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlOnRoaXMuY3VycmVudFNsaWRlLGk9dCoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkscj10aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYLG49dGhpcy5jb25maWcucnRsP2krcjppLXI7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyh0aGlzLmNvbmZpZy5ydGw/MTotMSkqbitcInB4LCAwLCAwKVwifX19LHtrZXk6XCJtb3VzZWxlYXZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMucG9pbnRlckRvd24mJih0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiXCIsdGhpcy5kcmFnLmVuZFg9ZS5wYWdlWCx0aGlzLmRyYWcucHJldmVudENsaWNrPSExLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMudXBkYXRlQWZ0ZXJEcmFnKCksdGhpcy5jbGVhckRyYWcoKSl9fSx7a2V5OlwiY2xpY2tIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5kcmFnLnByZXZlbnRDbGljayYmZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITF9fSx7a2V5OlwicmVtb3ZlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZihlPDB8fGU+PXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiSXRlbSB0byByZW1vdmUgZG9lc24ndCBleGlzdCDwn5itXCIpO3ZhciBpPWU8dGhpcy5jdXJyZW50U2xpZGUscj10aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2UtMT09PWU7KGl8fHIpJiZ0aGlzLmN1cnJlbnRTbGlkZS0tLHRoaXMuaW5uZXJFbGVtZW50cy5zcGxpY2UoZSwxKSx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiaW5zZXJ0XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LGkpe2lmKHQ8MHx8dD50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzEpdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGluc2V0IGl0IGF0IHRoaXMgaW5kZXgg8J+YrVwiKTtpZigtMSE9PXRoaXMuaW5uZXJFbGVtZW50cy5pbmRleE9mKGUpKXRocm93IG5ldyBFcnJvcihcIlRoZSBzYW1lIGl0ZW0gaW4gYSBjYXJvdXNlbD8gUmVhbGx5PyBOb3BlIPCfmK1cIik7dmFyIHI9dDw9dGhpcy5jdXJyZW50U2xpZGU+MCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDt0aGlzLmN1cnJlbnRTbGlkZT1yP3RoaXMuY3VycmVudFNsaWRlKzE6dGhpcy5jdXJyZW50U2xpZGUsdGhpcy5pbm5lckVsZW1lbnRzLnNwbGljZSh0LDAsZSksdGhpcy5idWlsZFNsaWRlckZyYW1lKCksaSYmaS5jYWxsKHRoaXMpfX0se2tleTpcInByZXBlbmRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuaW5zZXJ0KGUsMCksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImFwcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzEpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdLHQ9YXJndW1lbnRzWzFdO2lmKHRoaXMuZGV0YWNoRXZlbnRzKCksdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCJhdXRvXCIsZSl7Zm9yKHZhciBpPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxyPTA7cjx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3IrKylpLmFwcGVuZENoaWxkKHRoaXMuaW5uZXJFbGVtZW50c1tyXSk7dGhpcy5zZWxlY3Rvci5pbm5lckhUTUw9XCJcIix0aGlzLnNlbGVjdG9yLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIil9dCYmdC5jYWxsKHRoaXMpfX1dLFt7a2V5OlwibWVyZ2VTZXR0aW5nc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXtzZWxlY3RvcjpcIi5zaWVtYVwiLGR1cmF0aW9uOjIwMCxlYXNpbmc6XCJlYXNlLW91dFwiLHBlclBhZ2U6MSxzdGFydEluZGV4OjAsZHJhZ2dhYmxlOiEwLG11bHRpcGxlRHJhZzohMCx0aHJlc2hvbGQ6MjAsbG9vcDohMSxydGw6ITEsb25Jbml0OmZ1bmN0aW9uKCl7fSxvbkNoYW5nZTpmdW5jdGlvbigpe319LGk9ZTtmb3IodmFyIHIgaW4gaSl0W3JdPWlbcl07cmV0dXJuIHR9fSx7a2V5Olwid2Via2l0T3JOb3RcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtP1widHJhbnNmb3JtXCI6XCJXZWJraXRUcmFuc2Zvcm1cIn19XSksZX0oKTt0LmRlZmF1bHQ9bCxlLmV4cG9ydHM9dC5kZWZhdWx0fV0pfSk7IiwiZXhwb3J0IGRlZmF1bHQge1xuICBibG9jczoge1xuICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgZGVmYXVsdDoge31cbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDQwMFxuICB9XG59O1xuIiwiY29uc3QgeyBCdXR0b24sIERhc2hpY29uLCBTcGlubmVyIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IE1lZGlhVXBsb2FkLCBNZWRpYVVwbG9hZENoZWNrIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgdXNlU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFtcImltYWdlXCJdO1xuXG5jb25zdCBBZGRJbWFnZSA9ICh7IHByb3BzLCBpbml0Q2Fyb3VzZWwsIGRlc3Ryb3lDYXJvdXNlbCB9KSA9PiB7XG4gIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgYmxvY3MgfSA9IGF0dHJpYnV0ZXM7XG4gIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKGJsb2NzKS5sZW5ndGg7XG4gIGNvbnN0IGluZGV4ID0gbGVuZ3RoO1xuICAvLyBnZXQgdGhlIGltYWdlIGluZm8gZm9yIG5ldyBpbWFnZVxuICBjb25zdCBpbWFnZSA9IHVzZVNlbGVjdChcbiAgICBzZWxlY3QgPT4ge1xuICAgICAgbGV0IG5ld1BpYyA9IG51bGw7XG4gICAgICAvLyBzZWFyY2ggaW1hZ2Ugd2l0aCBuZXdJbWFnZSA9PT0gdHJ1ZVxuICAgICAgT2JqZWN0LmtleXMoYmxvY3MpLmZvckVhY2goYiA9PiB7XG4gICAgICAgIGlmIChibG9jc1tiXS5uZXdJbWFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG5ld1BpYyA9IGJsb2NzW2JdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHsgZ2V0TWVkaWEgfSA9IHNlbGVjdChcImNvcmVcIik7XG4gICAgICAvLyBnZXQgbWVkaWEgZm9yIHRoaXMgbmV3IHBpYyBhZGRlZFxuICAgICAgcmV0dXJuIG5ld1BpYyA/IGdldE1lZGlhKG5ld1BpYy5pbWFnZUlkKSA6IHt9O1xuICAgIH0sXG4gICAgW2Jsb2NzXVxuICApO1xuICAvLyB1cGRhdGUgaW1hZ2UgaW5mbyB0byBhdHRyaWJ1dGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYmxvY3MpO1xuICAgIGlmIChpbWFnZSAmJiBpbWFnZS5pZCkge1xuICAgICAgbGV0IF9pbmRleCA9IG51bGw7XG4gICAgICAvLyBzZWFyY2ggaW5mZXggZm9yIG5ld0ltYWdlID09PSB0cnVlXG4gICAgICBrZXlzLmZvckVhY2goYiA9PiB7XG4gICAgICAgIGlmIChibG9jc1tiXS5uZXdJbWFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIF9pbmRleCA9IGI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKF9pbmRleCkge1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBibG9jczoge1xuICAgICAgICAgICAgLi4uYmxvY3MsXG4gICAgICAgICAgICAuLi57IFtfaW5kZXhdOiB7IC4uLmJsb2NzW19pbmRleF0sIGltYWdlLCBuZXdJbWFnZTogZmFsc2UgfSB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpbWFnZV0pO1xuXG4gIC8qKlxuICAgKiBhZGQgbmV3IGltYWdlXG4gICAqIEBwYXJhbSB7fSBpbWFnZVxuICAgKi9cbiAgY29uc3Qgb25VcGRhdGVJbWFnZSA9IGltYWdlID0+IHtcbiAgICBkZXN0cm95Q2Fyb3VzZWwoKCkgPT4ge1xuICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIGJsb2NzOiB7XG4gICAgICAgICAgLi4uYmxvY3MsXG4gICAgICAgICAgLi4ue1xuICAgICAgICAgICAgW2luZGV4XToge1xuICAgICAgICAgICAgICAuLi5ibG9jc1tpbmRleF0sXG4gICAgICAgICAgICAgIGltYWdlSWQ6IGltYWdlLmlkLFxuICAgICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgICAgLy8gc2V0IHRvIHRydWUgZm9yIGdldCBtZWRpYSBhZnRlclxuICAgICAgICAgICAgICBuZXdJbWFnZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpbml0Q2Fyb3VzZWwoKTtcbiAgICB9LCB0cnVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lZGlhVXBsb2FkQ2hlY2s+XG4gICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgIHRpdGxlPXtfXyhcIkltYWdlXCIsIFwiXCIpfVxuICAgICAgICAgIG9uU2VsZWN0PXtvblVwZGF0ZUltYWdlfVxuICAgICAgICAgIGFsbG93ZWRUeXBlcz17QUxMT1dFRF9NRURJQV9UWVBFU31cbiAgICAgICAgICB2YWx1ZT17XCJcIn1cbiAgICAgICAgICByZW5kZXI9eyh7IG9wZW4gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW59XG4gICAgICAgICAgICAgICAgdGl0bGU9e19fKFwiYWRkIGltYWdlXCIsIFwiZ20tYmxvY1wiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJ1dHRvbiBlZGl0b3ItcG9zdC1wcmV2aWV3IGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLWxhcmdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtfXyhcImFkZCBpbWFnZVwiLCBcImdtLWJsb2NcIil9XG4gICAgICAgICAgICAgICAge1wiICBcIn1cbiAgICAgICAgICAgICAgICA8RGFzaGljb24gaWNvbj1cInBsdXMtYWx0XCIgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L01lZGlhVXBsb2FkQ2hlY2s+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRJbWFnZTtcbiIsImNvbnN0IHsgQnV0dG9uLCBEYXNoaWNvbiwgU3Bpbm5lciB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgUmljaFRleHQgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuY29uc3QgRWRpdEVsZW1lbnQgPSAoeyBwcm9wcywgaW5kZXgsIGhlaWdodCwgb25SZW1vdmVJbWFnZSB9KSA9PiB7XG4gIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgYmxvY3MgfSA9IGF0dHJpYnV0ZXM7XG4gIGNvbnN0IHsgaW1hZ2VJZCwgaW1hZ2UgfSA9IGJsb2NzW2luZGV4XTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWNlbGxcIj5cbiAgICAgIHshIWltYWdlSWQgJiYgIWltYWdlICYmIDxTcGlubmVyIC8+fVxuICAgICAge2ltYWdlSWQgJiYgaW1hZ2UgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlLnNvdXJjZV91cmx9IGFsdD1cIlwiIHN0eWxlPXt7IG1heEhlaWdodDogaGVpZ2h0IH19IC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25SZW1vdmVJbWFnZShpbmRleCl9XG4gICAgICAgICAgICB0aXRsZT17X18oXCJyZW1vdmVcIiwgXCJnbS1ibG9jXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXNoaWNvbiBpY29uPVwiZGlzbWlzc1wiIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0RWxlbWVudDtcbiIsImNvbnN0IHsgUmljaFRleHQgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmltcG9ydCBTYXZlSW1hZ2UgZnJvbSBcIi4vc2F2ZUltYWdlXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IFNhdmVFbGVtZW50ID0gKHsgcHJvcHMsIGluZGV4IH0pID0+IHtcbiAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcbiAgY29uc3QgeyBibG9jcyB9ID0gYXR0cmlidXRlcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWNlbGxcIj5cbiAgICAgIDxTYXZlSW1hZ2UgaW5kZXg9e2luZGV4fSBwcm9wcz17cHJvcHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYXZlRWxlbWVudDtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IFNhdmVJbWFnZSA9ICh7IHByb3BzLCBpbmRleCB9KSA9PiB7XG4gIGNvbnN0IHsgYmxvY3MgfSA9IHByb3BzLmF0dHJpYnV0ZXM7XG4gIGNvbnN0IHsgaW1hZ2UgfSA9IGJsb2NzW2luZGV4XTtcbiAgaWYgKCFpbWFnZSkgcmV0dXJuIDw+PC8+O1xuICBjb25zdCB7IG1lZGlhX2RldGFpbHMsIGFsdF90ZXh0LCBzb3VyY2VfdXJsIH0gPSBpbWFnZTtcbiAgaWYgKCFtZWRpYV9kZXRhaWxzKSByZXR1cm4gPD48Lz47XG4gIGNvbnN0IHsgc2l6ZXMgfSA9IG1lZGlhX2RldGFpbHM7XG4gIGNvbnN0IHsgbGFyZ2UsIGZ1bGwgfSA9IHNpemVzO1xuICBjb25zdCBwaWMgPSBsYXJnZSB8fCBmdWxsO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW1nIHNyYz17cGljID8gcGljLnNvdXJjZV91cmwgOiBzb3VyY2VfdXJsfSBhbHQ9e2FsdF90ZXh0fSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2F2ZUltYWdlO1xuIiwiaW1wb3J0IFNpZW1hIGZyb20gXCJzaWVtYVwiO1xuaW1wb3J0IHsgUmVzaXphYmxlIGFzIFJlc2l6YWJsZUJveCB9IGZyb20gXCJyZS1yZXNpemFibGVcIjtcbmNvbnN0IHsgQnV0dG9uLCBEYXNoaWNvbiB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCBFZGl0RWxlbWVudCBmcm9tIFwiLi9jb21wb25lbnRzL2VkaXRFbGVtZW50XCI7XG5pbXBvcnQgQWRkSW1hZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9hZGRJbWFnZVwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbi8vIG1vZGVsIGZvciBibG9jXG5jb25zdCBtb2RlbCA9IHtcbiAgaW1hZ2U6IHVuZGVmaW5lZCxcbiAgaW1hZ2VJZDogdW5kZWZpbmVkXG59O1xuXG5jb25zdCBFZGl0ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIHRvZ2dsZVNlbGVjdGlvbiwgaXNTZWxlY3RlZCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgYmxvY3MsIGhlaWdodCB9ID0gYXR0cmlidXRlcztcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gY29udGFpbmVyIGNhcm91c2VsXG4gIGNvbnN0IGNvbnRhaW5lciA9IHVzZVJlZigpO1xuICAvLyByZWYgdG8gY2Fyb3VzZWxcbiAgbGV0IGNhcm91c2VsID0gdXNlUmVmKCk7XG5cbiAgLy8gZGVzdHJveSBjYXJvdXNlbCBvbiBjaGFuZ2UgZWxlbWVudFxuICBjb25zdCBkZXN0cm95Q2Fyb3VzZWwgPSAoY2IgPSAoKSA9PiB0cnVlLCByZXNldERvbSA9IHRydWUpID0+IHtcbiAgICAvLyByZW1vdmUgYW5kIHJlc3RlIGRvbVxuICAgIGlmIChjYXJvdXNlbC5jdXJyZW50KSBjYXJvdXNlbC5jdXJyZW50LmRlc3Ryb3kocmVzZXREb20sIGNiKTtcbiAgfTtcblxuICAvLyByZSBpbml0IGNhcm91c2VsIHdpdGggbmV3IGVsZW1lbnRcbiAgY29uc3QgaW5pdENhcm91c2VsID0gKHJlbW92ZSA9IGZhbHNlLCBpbmRleCA9IDApID0+IHtcbiAgICBpZiAoY2Fyb3VzZWwuY3VycmVudCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIHRvdGFsIGl0ZW1zXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGNvbnRhaW5lci5jdXJyZW50LmNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgICAvLyBpbml0IG5ldyBjYXJvdXNlbFxuICAgICAgICBjYXJvdXNlbC5jdXJyZW50ID0gbmV3IFNpZW1hKHtcbiAgICAgICAgICBzZWxlY3RvcjogY29udGFpbmVyLmN1cnJlbnQsXG4gICAgICAgICAgb25DaGFuZ2U6ICgpID0+IHNldFNlbGVjdGVkKGNhcm91c2VsLmN1cnJlbnQuY3VycmVudFNsaWRlKVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIGlmIHJlbW92ZSwgdGFrZSBpbmRleCBvZiBibG9jIHJlbW92ZWQgLSAxIG9yIHRha2UgbGFzdFxuICAgICAgICAgIGNvbnN0IF9pID0gcmVtb3ZlID09PSB0cnVlID8gaW5kZXggLSAxIDogbGVuZ3RoO1xuICAgICAgICAgIGNhcm91c2VsLmN1cnJlbnQuZ29UbyhfaSA8IDAgPyAxIDogX2kpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfTtcblxuICAvLyBpbml0IGNhcm91c2VsIG9uIG1vdW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaW5pdCBmaXJzdCBjYXJvdXNlbFxuICAgIGNhcm91c2VsLmN1cnJlbnQgPSBuZXcgU2llbWEoe1xuICAgICAgc2VsZWN0b3I6IGNvbnRhaW5lci5jdXJyZW50LFxuICAgICAgb25DaGFuZ2U6ICgpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWQoY2Fyb3VzZWwuY3VycmVudC5jdXJyZW50U2xpZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gcmVtb3ZlIGltYWdlXG4gIGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSBpID0+IHtcbiAgICBkZXN0cm95Q2Fyb3VzZWwoKCkgPT4ge1xuICAgICAgLy8gZGVsZXRlIGJsb2MgaW1hZ2VcbiAgICAgIGNvbnN0IF9ibG9jcyA9IHsgLi4uYmxvY3MgfTtcbiAgICAgIGRlbGV0ZSBfYmxvY3NbaV07XG4gICAgICAvLyByZXNldCBrZXlzXG4gICAgICBjb25zdCBuZXdCbG9jcyA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoX2Jsb2NzKS5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgICAgIG5ld0Jsb2NzW2ldID0gX2Jsb2NzW2VdO1xuICAgICAgfSk7XG5cbiAgICAgIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICBibG9jczogbmV3QmxvY3NcbiAgICAgIH0pO1xuICAgICAgaW5pdENhcm91c2VsKHRydWUsIGkpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFycm93SGFuZGxlciA9IChuZXh0ID0gdHJ1ZSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBjYXJvdXNlbC5jdXJyZW50LmN1cnJlbnRTbGlkZTtcbiAgICBjYXJvdXNlbC5jdXJyZW50LmdvVG8obmV4dCA/IGN1cnJlbnQgKyAxIDogY3VycmVudCAtIDEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1ibG9jLWVkaXRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtYmxvYy1jb250YWluZXJcIj5cbiAgICAgICAgPFJlc2l6YWJsZUJveFxuICAgICAgICAgIHNpemU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgfX1cbiAgICAgICAgICBtaW5XaWR0aD17XCIxMDAlXCJ9XG4gICAgICAgICAgbWF4V2lkdGg9e1wiMTAwJVwifVxuICAgICAgICAgIG1pbkhlaWdodD17XCIxMDAlXCJ9XG4gICAgICAgICAgZW5hYmxlPXt7XG4gICAgICAgICAgICB0b3A6IGZhbHNlLFxuICAgICAgICAgICAgcmlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgYm90dG9tOiB0cnVlLFxuICAgICAgICAgICAgbGVmdDogZmFsc2UsXG4gICAgICAgICAgICB0b3BSaWdodDogZmFsc2UsXG4gICAgICAgICAgICBib3R0b21SaWdodDogZmFsc2UsXG4gICAgICAgICAgICBib3R0b21MZWZ0OiBmYWxzZSxcbiAgICAgICAgICAgIHRvcExlZnQ6IGZhbHNlXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJlc2l6ZVN0YXJ0PXsoKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVTZWxlY3Rpb24oZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25SZXNpemVTdG9wPXsoZXZlbnQsIGRpcmVjdGlvbiwgZWx0LCBkZWx0YSkgPT4ge1xuICAgICAgICAgICAgY2Fyb3VzZWwuY3VycmVudC5yZXNpemVIYW5kbGVyKCk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBwYXJzZUludChoZWlnaHQgKyBkZWx0YS5oZWlnaHQsIDEwKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b2dnbGVTZWxlY3Rpb24odHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtY29udGFpbmVyXCIgcmVmPXtjb250YWluZXJ9PlxuICAgICAgICAgICAge09iamVjdC5rZXlzKGJsb2NzKS5tYXAoYiA9PiAoXG4gICAgICAgICAgICAgIDxFZGl0RWxlbWVudFxuICAgICAgICAgICAgICAgIGhlaWdodD17YCR7aGVpZ2h0fXB4YH1cbiAgICAgICAgICAgICAgICBvblJlbW92ZUltYWdlPXtvblJlbW92ZUltYWdlfVxuICAgICAgICAgICAgICAgIHByb3BzPXtwcm9wc31cbiAgICAgICAgICAgICAgICBrZXk9e2Ake2Jsb2NzW2JdLmltYWdlSWR9ICR7Yn1gfVxuICAgICAgICAgICAgICAgIGluZGV4PXtifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2lzU2VsZWN0ZWQgJiYgPGRpdiBjbGFzc05hbWU9XCJyZXNpemFibGUtaGFuZGxlXCI+PC9kaXY+fVxuICAgICAgICA8L1Jlc2l6YWJsZUJveD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1hcnJvdy1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcnJvd0hhbmRsZXIoZmFsc2UpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtYXJyb3ctcHJldmlvdXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPntfXyhcInByZXZpb3VzXCIpfTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Fycm93SGFuZGxlcn0gY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtYXJyb3ctbmV4dFwiPlxuICAgICAgICAgICAgPHNwYW4+e19fKFwibmV4dFwiKX08L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWRvdC1jb250YWluZXJcIj5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoYmxvY3MpLm1hcChiID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2Bkb3QtJHtifWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ20tY2Fyb3VzZWwtZG90ICR7XG4gICAgICAgICAgICAgICAgICArc2VsZWN0ZWQgPT09ICtiID8gXCJnbS1jYXJvdXNlbC1kb3QtY3VycmVudFwiIDogXCJcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhcm91c2VsLmN1cnJlbnQuZ29UbyhiKX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtYWRkLWJsb2NcIj5cbiAgICAgICAgPEFkZEltYWdlXG4gICAgICAgICAgaW5pdENhcm91c2VsPXtpbml0Q2Fyb3VzZWx9XG4gICAgICAgICAgZGVzdHJveUNhcm91c2VsPXtkZXN0cm95Q2Fyb3VzZWx9XG4gICAgICAgICAgcHJvcHM9e3Byb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IGVkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IHNhdmUgZnJvbSBcIi4vc2F2ZVwiO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSBcIi4vYXR0cmlidXRlc1wiO1xuXG5jb25zdCBpY29uZSA9ICgpID0+IChcbiAgPD5cbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMjJcIlxuICAgICAgaGVpZ2h0PVwiMjJcIlxuICAgICAgdmlld0JveD1cIjAgMCAyMiAyMlwiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zLDMgTDMsMi41IEMzLDIuMjIzODU3NjMgMy4yMjM4NTc2MywyIDMuNSwyIEw3LDIgTDcsMC41IEM3LDAuMjIzODU3NjMgNy4yMjM4NTc2MywwIDcuNSwwIEwxOS41LDAgQzE5Ljc3NjE0MjQsMCAyMCwwLjIyMzg1NzYzIDIwLDAuNSBMMjAsMTIuNSBDMjAsMTIuNzc2MTQyNCAxOS43NzYxNDI0LDEzIDE5LjUsMTMgTDcuNSwxMyBDNy4yMjM4NTc2MywxMyA3LDEyLjc3NjE0MjQgNywxMi41IEw3LDExIEwzLjUsMTEgQzMuMjIzODU3NjMsMTEgMywxMC43NzYxNDI0IDMsMTAuNSBMMywxMCBMMC41LDEwIEMwLjIyMzg1NzYzLDEwIDAsOS43NzYxNDI0IDAsOS41IEwwLDMuNSBDMCwzLjIyMzg1NzYzIDAuMjIzODU3NjMsMyAwLjUsMyBMMywzIFogTTMsNCBMMSw0IEwxLDkgTDMsOSBMMyw0IFogTTcsMTAgTDcsMyBMNCwzIEw0LDEwIEw3LDEwIFogTTgsMTIgTDE5LDEyIEwxOSwxIEw4LDEgTDgsMTIgWlwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxIDQpXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIDwvPlxuKTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoXCJnbS9jYXJvdXNlbFwiLCB7XG4gIHRpdGxlOiBcIkJsb2NrIGNhcm91c2VsXCIsXG4gIGRlc2NyaXB0aW9uOiBcImNhcm91c2VsIGZvciBzaG93IHBob3Rvc1wiLFxuICBpY29uOiBpY29uZSxcbiAgY2F0ZWdvcnk6IFwidGhlbWUtYmxvY2tzXCIsXG4gIGF0dHJpYnV0ZXMsXG4gIGVkaXQsXG4gIHNhdmVcbn0pO1xuIiwiY29uc3QgeyBSaWNoVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3I7XG5pbXBvcnQgU2F2ZUVsZW1lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlRWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IFNhdmUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgYmxvY3MgfSA9IHByb3BzLmF0dHJpYnV0ZXM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1jb250YWluZXJcIj5cbiAgICAgIHtPYmplY3Qua2V5cyhibG9jcykubWFwKGIgPT4gKFxuICAgICAgICA8U2F2ZUVsZW1lbnQgcHJvcHM9e3Byb3BzfSBrZXk9e2J9IGluZGV4PXtifSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYXZlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJ3cFwiXVtcImVsZW1lbnRcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9