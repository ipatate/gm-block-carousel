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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3QtbWVtb2l6ZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlLXJlc2l6YWJsZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlLXJlc2l6YWJsZS9saWIvcmVzaXplci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2llbWEvZGlzdC9zaWVtYS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rocm90dGxlLWRlYm91bmNlL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lZGl0RWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFuZWwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NhdmVFbGVtZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zYXZlSW1hZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9lZGl0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1widGhpc1wiOltcIndwXCIsXCJlbGVtZW50XCJdfSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1widGhpc1wiOlwiUmVhY3RcIn0iXSwibmFtZXMiOlsiYmxvY3MiLCJ0eXBlIiwiZGVmYXVsdCIsImhlaWdodCIsIk51bWJlciIsInNob3dEb3QiLCJCb29sZWFuIiwic2hvd0Fycm93Iiwid3AiLCJjb21wb25lbnRzIiwiQnV0dG9uIiwiRGFzaGljb24iLCJTcGlubmVyIiwidXNlRWZmZWN0IiwiZWxlbWVudCIsImJsb2NrRWRpdG9yIiwiTWVkaWFVcGxvYWQiLCJNZWRpYVVwbG9hZENoZWNrIiwidXNlU2VsZWN0IiwiZGF0YSIsIl9fIiwiaTE4biIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJBZGRJbWFnZSIsInByb3BzIiwiaW5pdENhcm91c2VsIiwiZGVzdHJveUNhcm91c2VsIiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZXMiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwiaW5kZXgiLCJpbWFnZSIsInNlbGVjdCIsIm5ld1BpYyIsImZvckVhY2giLCJiIiwibmV3SW1hZ2UiLCJnZXRNZWRpYSIsImltYWdlSWQiLCJpZCIsIl9pbmRleCIsIm9uVXBkYXRlSW1hZ2UiLCJvcGVuIiwiUmljaFRleHQiLCJFZGl0RWxlbWVudCIsIm9uUmVtb3ZlSW1hZ2UiLCJzb3VyY2VfdXJsIiwibWF4SGVpZ2h0IiwiUGFuZWxCb2R5IiwiVG9nZ2xlQ29udHJvbCIsIkluc3BlY3RvckNvbnRyb2xzIiwiUGFuZWwiLCJTYXZlRWxlbWVudCIsIlNhdmVJbWFnZSIsIm1lZGlhX2RldGFpbHMiLCJhbHRfdGV4dCIsInNpemVzIiwibGFyZ2UiLCJmdWxsIiwicGljIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJtb2RlbCIsInVuZGVmaW5lZCIsIkVkaXQiLCJ0b2dnbGVTZWxlY3Rpb24iLCJpc1NlbGVjdGVkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImNvbnRhaW5lciIsImNhcm91c2VsIiwiY2IiLCJyZXNldERvbSIsImN1cnJlbnQiLCJkZXN0cm95IiwicmVtb3ZlIiwic2V0VGltZW91dCIsImNoaWxkTm9kZXMiLCJTaWVtYSIsInNlbGVjdG9yIiwib25DaGFuZ2UiLCJjdXJyZW50U2xpZGUiLCJfaSIsImdvVG8iLCJpIiwiX2Jsb2NzIiwibmV3QmxvY3MiLCJlIiwiYXJyb3dIYW5kbGVyIiwibmV4dCIsImJsb2NrS2V5cyIsIndpZHRoIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwidG9wUmlnaHQiLCJib3R0b21SaWdodCIsImJvdHRvbUxlZnQiLCJ0b3BMZWZ0IiwiZGVib3VuY2UiLCJldmVudCIsImRpcmVjdGlvbiIsImVsdCIsImRlbHRhIiwicGFyc2VJbnQiLCJyZXNpemVIYW5kbGVyIiwibWFwIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJpY29uZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2F0ZWdvcnkiLCJlZGl0Iiwic2F2ZSIsIlNhdmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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Qyx5RUFBeUUsNEVBQTRFLEVBQUU7QUFDdko7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx3QkFBd0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQ0FBaUM7QUFDaEU7QUFDQTtBQUNBLCtCQUErQiwrQkFBK0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFHLEVBQUVhLENBQWhDO0FBQW1DLFdBQUssRUFBRUE7QUFBMUMsTUFEdUI7QUFBQSxHQUF4QixDQURILENBTEYsRUFVRzlCLFNBQVMsS0FBSyxJQUFkLElBQXNCcUYsU0FBUyxDQUFDL0QsTUFBVixHQUFtQixDQUF6QyxHQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFRLGFBQVMsRUFBQztBQUFsQixLQUNFLHVGQUFPVCxFQUFFLENBQUMsVUFBRCxFQUFhLGFBQWIsQ0FBVCxDQURGLENBREYsRUFJRTtBQUFRLGFBQVMsRUFBQztBQUFsQixLQUNFLHVGQUFPQSxFQUFFLENBQUMsTUFBRCxFQUFTLGFBQVQsQ0FBVCxDQURGLENBSkYsQ0FERCxHQVNHLElBbkJOLEVBb0JHZixPQUFPLEtBQUssSUFBWixJQUFvQnVGLFNBQVMsQ0FBQy9ELE1BQVYsR0FBbUIsQ0FBdkMsR0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZL0IsS0FBWixFQUFtQjZHLEdBQW5CLENBQXVCLFVBQUF4RSxDQUFDLEVBQUk7QUFDM0IsV0FBTztBQUFLLGVBQVMsRUFBQztBQUFmLE1BQVA7QUFDRCxHQUZBLENBREgsQ0FERCxHQU1HLElBMUJOLENBREY7QUE4QkQsQ0FqQ0Q7O0FBbUNla0YsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUN6Q0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSx3Q0FBd0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0F2RCxhQUFhLGdDQUFnQyxFQUFFLEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAoIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwiLy9cbi8vIE1haW5cbi8vXG5cbmZ1bmN0aW9uIG1lbW9pemUgKGZuLCBvcHRpb25zKSB7XG4gIHZhciBjYWNoZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5jYWNoZVxuICAgID8gb3B0aW9ucy5jYWNoZVxuICAgIDogY2FjaGVEZWZhdWx0XG5cbiAgdmFyIHNlcmlhbGl6ZXIgPSBvcHRpb25zICYmIG9wdGlvbnMuc2VyaWFsaXplclxuICAgID8gb3B0aW9ucy5zZXJpYWxpemVyXG4gICAgOiBzZXJpYWxpemVyRGVmYXVsdFxuXG4gIHZhciBzdHJhdGVneSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5zdHJhdGVneVxuICAgID8gb3B0aW9ucy5zdHJhdGVneVxuICAgIDogc3RyYXRlZ3lEZWZhdWx0XG5cbiAgcmV0dXJuIHN0cmF0ZWd5KGZuLCB7XG4gICAgY2FjaGU6IGNhY2hlLFxuICAgIHNlcmlhbGl6ZXI6IHNlcmlhbGl6ZXJcbiAgfSlcbn1cblxuLy9cbi8vIFN0cmF0ZWd5XG4vL1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyAvLyB8fCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJ3Vuc2FmZScgcHJpbWl0aXZlIGZvciBvdXIgbmVlZHNcbn1cblxuZnVuY3Rpb24gbW9uYWRpYyAoZm4sIGNhY2hlLCBzZXJpYWxpemVyLCBhcmcpIHtcbiAgdmFyIGNhY2hlS2V5ID0gaXNQcmltaXRpdmUoYXJnKSA/IGFyZyA6IHNlcmlhbGl6ZXIoYXJnKVxuXG4gIHZhciBjb21wdXRlZFZhbHVlID0gY2FjaGUuZ2V0KGNhY2hlS2V5KVxuICBpZiAodHlwZW9mIGNvbXB1dGVkVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29tcHV0ZWRWYWx1ZSA9IGZuLmNhbGwodGhpcywgYXJnKVxuICAgIGNhY2hlLnNldChjYWNoZUtleSwgY29tcHV0ZWRWYWx1ZSlcbiAgfVxuXG4gIHJldHVybiBjb21wdXRlZFZhbHVlXG59XG5cbmZ1bmN0aW9uIHZhcmlhZGljIChmbiwgY2FjaGUsIHNlcmlhbGl6ZXIpIHtcbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpXG4gIHZhciBjYWNoZUtleSA9IHNlcmlhbGl6ZXIoYXJncylcblxuICB2YXIgY29tcHV0ZWRWYWx1ZSA9IGNhY2hlLmdldChjYWNoZUtleSlcbiAgaWYgKHR5cGVvZiBjb21wdXRlZFZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbXB1dGVkVmFsdWUgPSBmbi5hcHBseSh0aGlzLCBhcmdzKVxuICAgIGNhY2hlLnNldChjYWNoZUtleSwgY29tcHV0ZWRWYWx1ZSlcbiAgfVxuXG4gIHJldHVybiBjb21wdXRlZFZhbHVlXG59XG5cbmZ1bmN0aW9uIGFzc2VtYmxlIChmbiwgY29udGV4dCwgc3RyYXRlZ3ksIGNhY2hlLCBzZXJpYWxpemUpIHtcbiAgcmV0dXJuIHN0cmF0ZWd5LmJpbmQoXG4gICAgY29udGV4dCxcbiAgICBmbixcbiAgICBjYWNoZSxcbiAgICBzZXJpYWxpemVcbiAgKVxufVxuXG5mdW5jdGlvbiBzdHJhdGVneURlZmF1bHQgKGZuLCBvcHRpb25zKSB7XG4gIHZhciBzdHJhdGVneSA9IGZuLmxlbmd0aCA9PT0gMSA/IG1vbmFkaWMgOiB2YXJpYWRpY1xuXG4gIHJldHVybiBhc3NlbWJsZShcbiAgICBmbixcbiAgICB0aGlzLFxuICAgIHN0cmF0ZWd5LFxuICAgIG9wdGlvbnMuY2FjaGUuY3JlYXRlKCksXG4gICAgb3B0aW9ucy5zZXJpYWxpemVyXG4gIClcbn1cblxuZnVuY3Rpb24gc3RyYXRlZ3lWYXJpYWRpYyAoZm4sIG9wdGlvbnMpIHtcbiAgdmFyIHN0cmF0ZWd5ID0gdmFyaWFkaWNcblxuICByZXR1cm4gYXNzZW1ibGUoXG4gICAgZm4sXG4gICAgdGhpcyxcbiAgICBzdHJhdGVneSxcbiAgICBvcHRpb25zLmNhY2hlLmNyZWF0ZSgpLFxuICAgIG9wdGlvbnMuc2VyaWFsaXplclxuICApXG59XG5cbmZ1bmN0aW9uIHN0cmF0ZWd5TW9uYWRpYyAoZm4sIG9wdGlvbnMpIHtcbiAgdmFyIHN0cmF0ZWd5ID0gbW9uYWRpY1xuXG4gIHJldHVybiBhc3NlbWJsZShcbiAgICBmbixcbiAgICB0aGlzLFxuICAgIHN0cmF0ZWd5LFxuICAgIG9wdGlvbnMuY2FjaGUuY3JlYXRlKCksXG4gICAgb3B0aW9ucy5zZXJpYWxpemVyXG4gIClcbn1cblxuLy9cbi8vIFNlcmlhbGl6ZXJcbi8vXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZXJEZWZhdWx0ICgpIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3VtZW50cylcbn1cblxuLy9cbi8vIENhY2hlXG4vL1xuXG5mdW5jdGlvbiBPYmplY3RXaXRob3V0UHJvdG90eXBlQ2FjaGUgKCkge1xuICB0aGlzLmNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxufVxuXG5PYmplY3RXaXRob3V0UHJvdG90eXBlQ2FjaGUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIChrZXkgaW4gdGhpcy5jYWNoZSlcbn1cblxuT2JqZWN0V2l0aG91dFByb3RvdHlwZUNhY2hlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiB0aGlzLmNhY2hlW2tleV1cbn1cblxuT2JqZWN0V2l0aG91dFByb3RvdHlwZUNhY2hlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0aGlzLmNhY2hlW2tleV0gPSB2YWx1ZVxufVxuXG52YXIgY2FjaGVEZWZhdWx0ID0ge1xuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSAoKSB7XG4gICAgcmV0dXJuIG5ldyBPYmplY3RXaXRob3V0UHJvdG90eXBlQ2FjaGUoKVxuICB9XG59XG5cbi8vXG4vLyBBUElcbi8vXG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZVxubW9kdWxlLmV4cG9ydHMuc3RyYXRlZ2llcyA9IHtcbiAgdmFyaWFkaWM6IHN0cmF0ZWd5VmFyaWFkaWMsXG4gIG1vbmFkaWM6IHN0cmF0ZWd5TW9uYWRpY1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciByZXNpemVyXzEgPSByZXF1aXJlKFwiLi9yZXNpemVyXCIpO1xudmFyIGZhc3RfbWVtb2l6ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJmYXN0LW1lbW9pemVcIikpO1xudmFyIERFRkFVTFRfU0laRSA9IHtcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGhlaWdodDogJ2F1dG8nLFxufTtcbnZhciBjbGFtcCA9IGZhc3RfbWVtb2l6ZV8xLmRlZmF1bHQoZnVuY3Rpb24gKG4sIG1pbiwgbWF4KSB7IHJldHVybiBNYXRoLm1heChNYXRoLm1pbihuLCBtYXgpLCBtaW4pOyB9KTtcbnZhciBzbmFwID0gZmFzdF9tZW1vaXplXzEuZGVmYXVsdChmdW5jdGlvbiAobiwgc2l6ZSkgeyByZXR1cm4gTWF0aC5yb3VuZChuIC8gc2l6ZSkgKiBzaXplOyB9KTtcbnZhciBoYXNEaXJlY3Rpb24gPSBmYXN0X21lbW9pemVfMS5kZWZhdWx0KGZ1bmN0aW9uIChkaXIsIHRhcmdldCkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGRpciwgJ2knKS50ZXN0KHRhcmdldCk7XG59KTtcbnZhciBmaW5kQ2xvc2VzdFNuYXAgPSBmYXN0X21lbW9pemVfMS5kZWZhdWx0KGZ1bmN0aW9uIChuLCBzbmFwQXJyYXksIHNuYXBHYXApIHtcbiAgICBpZiAoc25hcEdhcCA9PT0gdm9pZCAwKSB7IHNuYXBHYXAgPSAwOyB9XG4gICAgdmFyIGNsb3Nlc3RHYXBJbmRleCA9IHNuYXBBcnJheS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIsIGluZGV4KSB7IHJldHVybiAoTWF0aC5hYnMoY3VyciAtIG4pIDwgTWF0aC5hYnMoc25hcEFycmF5W3ByZXZdIC0gbikgPyBpbmRleCA6IHByZXYpOyB9LCAwKTtcbiAgICB2YXIgZ2FwID0gTWF0aC5hYnMoc25hcEFycmF5W2Nsb3Nlc3RHYXBJbmRleF0gLSBuKTtcbiAgICByZXR1cm4gc25hcEdhcCA9PT0gMCB8fCBnYXAgPCBzbmFwR2FwID8gc25hcEFycmF5W2Nsb3Nlc3RHYXBJbmRleF0gOiBuO1xufSk7XG52YXIgZW5kc1dpdGggPSBmYXN0X21lbW9pemVfMS5kZWZhdWx0KGZ1bmN0aW9uIChzdHIsIHNlYXJjaFN0cikge1xuICAgIHJldHVybiBzdHIuc3Vic3RyKHN0ci5sZW5ndGggLSBzZWFyY2hTdHIubGVuZ3RoLCBzZWFyY2hTdHIubGVuZ3RoKSA9PT0gc2VhcmNoU3RyO1xufSk7XG52YXIgZ2V0U3RyaW5nU2l6ZSA9IGZhc3RfbWVtb2l6ZV8xLmRlZmF1bHQoZnVuY3Rpb24gKG4pIHtcbiAgICBuID0gbi50b1N0cmluZygpO1xuICAgIGlmIChuID09PSAnYXV0bycpIHtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIGlmIChlbmRzV2l0aChuLCAncHgnKSkge1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgaWYgKGVuZHNXaXRoKG4sICclJykpIHtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIGlmIChlbmRzV2l0aChuLCAndmgnKSkge1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgaWYgKGVuZHNXaXRoKG4sICd2dycpKSB7XG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBpZiAoZW5kc1dpdGgobiwgJ3ZtYXgnKSkge1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgaWYgKGVuZHNXaXRoKG4sICd2bWluJykpIHtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIHJldHVybiBuICsgXCJweFwiO1xufSk7XG52YXIgZ2V0UGl4ZWxTaXplID0gZnVuY3Rpb24gKHNpemUsIHBhcmVudFNpemUpIHtcbiAgICBpZiAoc2l6ZSAmJiB0eXBlb2Ygc2l6ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGVuZHNXaXRoKHNpemUsICclJykpIHtcbiAgICAgICAgICAgIHZhciByYXRpbyA9IE51bWJlcihzaXplLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFNpemUgKiByYXRpbztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbmRzV2l0aChzaXplLCAndncnKSkge1xuICAgICAgICAgICAgdmFyIHJhdGlvID0gTnVtYmVyKHNpemUucmVwbGFjZSgndncnLCAnJykpIC8gMTAwO1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoICogcmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW5kc1dpdGgoc2l6ZSwgJ3ZoJykpIHtcbiAgICAgICAgICAgIHZhciByYXRpbyA9IE51bWJlcihzaXplLnJlcGxhY2UoJ3ZoJywgJycpKSAvIDEwMDtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgKiByYXRpbztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2l6ZTtcbn07XG52YXIgY2FsY3VsYXRlTmV3TWF4ID0gZmFzdF9tZW1vaXplXzEuZGVmYXVsdChmdW5jdGlvbiAocGFyZW50U2l6ZSwgbWF4V2lkdGgsIG1heEhlaWdodCwgbWluV2lkdGgsIG1pbkhlaWdodCkge1xuICAgIG1heFdpZHRoID0gZ2V0UGl4ZWxTaXplKG1heFdpZHRoLCBwYXJlbnRTaXplLndpZHRoKTtcbiAgICBtYXhIZWlnaHQgPSBnZXRQaXhlbFNpemUobWF4SGVpZ2h0LCBwYXJlbnRTaXplLmhlaWdodCk7XG4gICAgbWluV2lkdGggPSBnZXRQaXhlbFNpemUobWluV2lkdGgsIHBhcmVudFNpemUud2lkdGgpO1xuICAgIG1pbkhlaWdodCA9IGdldFBpeGVsU2l6ZShtaW5IZWlnaHQsIHBhcmVudFNpemUuaGVpZ2h0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtYXhXaWR0aDogdHlwZW9mIG1heFdpZHRoID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE51bWJlcihtYXhXaWR0aCksXG4gICAgICAgIG1heEhlaWdodDogdHlwZW9mIG1heEhlaWdodCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBOdW1iZXIobWF4SGVpZ2h0KSxcbiAgICAgICAgbWluV2lkdGg6IHR5cGVvZiBtaW5XaWR0aCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBOdW1iZXIobWluV2lkdGgpLFxuICAgICAgICBtaW5IZWlnaHQ6IHR5cGVvZiBtaW5IZWlnaHQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTnVtYmVyKG1pbkhlaWdodCksXG4gICAgfTtcbn0pO1xudmFyIGRlZmluZWRQcm9wcyA9IFtcbiAgICAnc3R5bGUnLFxuICAgICdjbGFzc05hbWUnLFxuICAgICdncmlkJyxcbiAgICAnc25hcCcsXG4gICAgJ2JvdW5kcycsXG4gICAgJ3NpemUnLFxuICAgICdkZWZhdWx0U2l6ZScsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWF4V2lkdGgnLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdsb2NrQXNwZWN0UmF0aW8nLFxuICAgICdsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoJyxcbiAgICAnbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQnLFxuICAgICdlbmFibGUnLFxuICAgICdoYW5kbGVTdHlsZXMnLFxuICAgICdoYW5kbGVDbGFzc2VzJyxcbiAgICAnaGFuZGxlV3JhcHBlclN0eWxlJyxcbiAgICAnaGFuZGxlV3JhcHBlckNsYXNzJyxcbiAgICAnY2hpbGRyZW4nLFxuICAgICdvblJlc2l6ZVN0YXJ0JyxcbiAgICAnb25SZXNpemUnLFxuICAgICdvblJlc2l6ZVN0b3AnLFxuICAgICdoYW5kbGVDb21wb25lbnQnLFxuICAgICdzY2FsZScsXG4gICAgJ3Jlc2l6ZVJhdGlvJyxcbiAgICAnc25hcEdhcCcsXG5dO1xuLy8gSEFDSzogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIGNhbGN1bGF0ZSAlIHNpemUuXG52YXIgYmFzZUNsYXNzTmFtZSA9ICdfX3Jlc2l6YWJsZV9iYXNlX18nO1xudmFyIFJlc2l6YWJsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmVzaXphYmxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlc2l6YWJsZShwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucmF0aW8gPSAxO1xuICAgICAgICBfdGhpcy5yZXNpemFibGUgPSBudWxsO1xuICAgICAgICAvLyBGb3IgcGFyZW50IGJvdW5kYXJ5XG4gICAgICAgIF90aGlzLnBhcmVudExlZnQgPSAwO1xuICAgICAgICBfdGhpcy5wYXJlbnRUb3AgPSAwO1xuICAgICAgICAvLyBGb3IgYm91bmRhcnlcbiAgICAgICAgX3RoaXMucmVzaXphYmxlTGVmdCA9IDA7XG4gICAgICAgIF90aGlzLnJlc2l6YWJsZVRvcCA9IDA7XG4gICAgICAgIC8vIEZvciB0YXJnZXQgYm91bmRhcnlcbiAgICAgICAgX3RoaXMudGFyZ2V0TGVmdCA9IDA7XG4gICAgICAgIF90aGlzLnRhcmdldFRvcCA9IDA7XG4gICAgICAgIF90aGlzLnJlZiA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2l6YWJsZSA9IGM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNSZXNpemluZzogZmFsc2UsXG4gICAgICAgICAgICB3aWR0aDogdHlwZW9mIChfdGhpcy5wcm9wc1NpemUgJiYgX3RoaXMucHJvcHNTaXplLndpZHRoKSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICA/ICdhdXRvJ1xuICAgICAgICAgICAgICAgIDogX3RoaXMucHJvcHNTaXplICYmIF90aGlzLnByb3BzU2l6ZS53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdHlwZW9mIChfdGhpcy5wcm9wc1NpemUgJiYgX3RoaXMucHJvcHNTaXplLmhlaWdodCkgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgPyAnYXV0bydcbiAgICAgICAgICAgICAgICA6IF90aGlzLnByb3BzU2l6ZSAmJiBfdGhpcy5wcm9wc1NpemUuaGVpZ2h0LFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgb3JpZ2luYWw6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhY2tncm91bmRTdHlsZToge1xuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwKScsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OTksXG4gICAgICAgICAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgICAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogJzAnLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vblJlc2l6ZVN0YXJ0ID0gX3RoaXMub25SZXNpemVTdGFydC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25Nb3VzZU1vdmUgPSBfdGhpcy5vbk1vdXNlTW92ZS5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25Nb3VzZVVwID0gX3RoaXMub25Nb3VzZVVwLmJpbmQoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXNpemFibGUucHJvdG90eXBlLCBcInBhcmVudE5vZGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yZXNpemFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc2l6YWJsZS5wYXJlbnROb2RlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVzaXphYmxlLnByb3RvdHlwZSwgXCJwcm9wc1NpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnNpemUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0U2l6ZSB8fCBERUZBVUxUX1NJWkU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXNpemFibGUucHJvdG90eXBlLCBcImJhc2VcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKHBhcmVudC5jaGlsZHJlbik7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNoaWxkcmVuXzEgPSBjaGlsZHJlbjsgX2kgPCBjaGlsZHJlbl8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBuID0gY2hpbGRyZW5fMVtfaV07XG4gICAgICAgICAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobi5jbGFzc0xpc3QuY29udGFpbnMoYmFzZUNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlc2l6YWJsZS5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gMDtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHRoaXMucmVzaXphYmxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9yZ1dpZHRoID0gdGhpcy5yZXNpemFibGUub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIG9yZ0hlaWdodCA9IHRoaXMucmVzaXphYmxlLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAvLyBIQUNLOiBTZXQgcG9zaXRpb24gYHJlbGF0aXZlYCB0byBnZXQgcGFyZW50IHNpemUuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgVGhpcyBpcyBiZWNhdXNlIHdoZW4gcmUtcmVzaXphYmxlIHNldCBgYWJzb2x1dGVgLCBJIGNhbiBub3QgZ2V0IGJhc2Ugd2lkdGggY29ycmVjdGx5LlxuICAgICAgICAgICAgICAgIHZhciBvcmdQb3NpdGlvbiA9IHRoaXMucmVzaXphYmxlLnN0eWxlLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGlmIChvcmdQb3NpdGlvbiAhPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6YWJsZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElORk86IFVzZSBvcmlnaW5hbCB3aWR0aCBvciBoZWlnaHQgaWYgc2V0IGF1dG8uXG4gICAgICAgICAgICAgICAgd2lkdGggPSB0aGlzLnJlc2l6YWJsZS5zdHlsZS53aWR0aCAhPT0gJ2F1dG8nID8gdGhpcy5yZXNpemFibGUub2Zmc2V0V2lkdGggOiBvcmdXaWR0aDtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSB0aGlzLnJlc2l6YWJsZS5zdHlsZS5oZWlnaHQgIT09ICdhdXRvJyA/IHRoaXMucmVzaXphYmxlLm9mZnNldEhlaWdodCA6IG9yZ0hlaWdodDtcbiAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemFibGUuc3R5bGUucG9zaXRpb24gPSBvcmdQb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlc2l6YWJsZS5wcm90b3R5cGUsIFwic2l6ZVN0eWxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHNpemUgPSB0aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICB2YXIgZ2V0U2l6ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzLnN0YXRlW2tleV0gPT09ICd1bmRlZmluZWQnIHx8IF90aGlzLnN0YXRlW2tleV0gPT09ICdhdXRvJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMucHJvcHNTaXplICYmIF90aGlzLnByb3BzU2l6ZVtrZXldICYmIGVuZHNXaXRoKF90aGlzLnByb3BzU2l6ZVtrZXldLnRvU3RyaW5nKCksICclJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZHNXaXRoKF90aGlzLnN0YXRlW2tleV0udG9TdHJpbmcoKSwgJyUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnN0YXRlW2tleV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50U2l6ZSA9IF90aGlzLmdldFBhcmVudFNpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gTnVtYmVyKF90aGlzLnN0YXRlW2tleV0udG9TdHJpbmcoKS5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwZXJjZW50ID0gKHZhbHVlIC8gcGFyZW50U2l6ZVtrZXldKSAqIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBlcmNlbnQgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFN0cmluZ1NpemUoX3RoaXMuc3RhdGVba2V5XSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gc2l6ZSAmJiB0eXBlb2Ygc2l6ZS53aWR0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuc3RhdGUuaXNSZXNpemluZ1xuICAgICAgICAgICAgICAgID8gZ2V0U3RyaW5nU2l6ZShzaXplLndpZHRoKVxuICAgICAgICAgICAgICAgIDogZ2V0U2l6ZSgnd2lkdGgnKTtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBzaXplICYmIHR5cGVvZiBzaXplLmhlaWdodCAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuc3RhdGUuaXNSZXNpemluZ1xuICAgICAgICAgICAgICAgID8gZ2V0U3RyaW5nU2l6ZShzaXplLmhlaWdodClcbiAgICAgICAgICAgICAgICA6IGdldFNpemUoJ2hlaWdodCcpO1xuICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLmdldFBhcmVudFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5iYXNlIHx8ICF0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJTkZPOiBUbyBjYWxjdWxhdGUgcGFyZW50IHdpZHRoIHdpdGggZmxleCBsYXlvdXRcbiAgICAgICAgdmFyIHdyYXBDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHZhciB3cmFwID0gdGhpcy5wYXJlbnROb2RlLnN0eWxlLmZsZXhXcmFwO1xuICAgICAgICB2YXIgbWluV2lkdGggPSB0aGlzLmJhc2Uuc3R5bGUubWluV2lkdGg7XG4gICAgICAgIGlmICh3cmFwICE9PSAnd3JhcCcpIHtcbiAgICAgICAgICAgIHdyYXBDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5zdHlsZS5mbGV4V3JhcCA9ICd3cmFwJztcbiAgICAgICAgICAgIC8vIEhBQ0s6IFVzZSByZWxhdGl2ZSB0byBnZXQgcGFyZW50IHBhZGRpbmcgc2l6ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFzZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHRoaXMuYmFzZS5zdHlsZS5taW5XaWR0aCA9ICcxMDAlJztcbiAgICAgICAgdmFyIHNpemUgPSB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5iYXNlLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmJhc2Uub2Zmc2V0SGVpZ2h0LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJhc2Uuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBpZiAod3JhcENoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5zdHlsZS5mbGV4V3JhcCA9IHdyYXA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYXNlLnN0eWxlLm1pbldpZHRoID0gbWluV2lkdGg7XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUudW5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uTW91c2VVcCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5yZXNpemFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMucmVzaXphYmxlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS53aWR0aCB8fCB0aGlzLnNpemUud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0IHx8IHRoaXMuc2l6ZS5oZWlnaHQsXG4gICAgICAgICAgICBmbGV4QmFzaXM6IGNvbXB1dGVkU3R5bGUuZmxleEJhc2lzICE9PSAnYXV0bycgPyBjb21wdXRlZFN0eWxlLmZsZXhCYXNpcyA6IHVuZGVmaW5lZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICAgIGlmICghKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJhc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDAsIDApJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmZsZXggPSAnMCc7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYmFzZUNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICB2YXIgcGFyZW50XzEgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYmFzZSB8fCAhcGFyZW50XzEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShwYXJlbnRfMSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhKHRoaXMuYmFzZSBpbnN0YW5jZW9mIE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyZW50XzEucmVtb3ZlQ2hpbGQodGhpcy5iYXNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS5jcmVhdGVTaXplRm9yQ3NzUHJvcGVydHkgPSBmdW5jdGlvbiAobmV3U2l6ZSwga2luZCkge1xuICAgICAgICB2YXIgcHJvcHNTaXplID0gdGhpcy5wcm9wc1NpemUgJiYgdGhpcy5wcm9wc1NpemVba2luZF07XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tpbmRdID09PSAnYXV0bycgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub3JpZ2luYWxba2luZF0gPT09IG5ld1NpemUgJiZcbiAgICAgICAgICAgICh0eXBlb2YgcHJvcHNTaXplID09PSAndW5kZWZpbmVkJyB8fCBwcm9wc1NpemUgPT09ICdhdXRvJylcbiAgICAgICAgICAgID8gJ2F1dG8nXG4gICAgICAgICAgICA6IG5ld1NpemU7XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLmNhbGN1bGF0ZU5ld01heEZyb21Cb3VuZGFyeSA9IGZ1bmN0aW9uIChtYXhXaWR0aCwgbWF4SGVpZ2h0KSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJvdW5kcyA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnRfMiA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRfMiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvdW5kV2lkdGggPSBwYXJlbnRfMi5vZmZzZXRXaWR0aCArICh0aGlzLnBhcmVudExlZnQgLSB0aGlzLnJlc2l6YWJsZUxlZnQpO1xuICAgICAgICAgICAgICAgIHZhciBib3VuZEhlaWdodCA9IHBhcmVudF8yLm9mZnNldEhlaWdodCArICh0aGlzLnBhcmVudFRvcCAtIHRoaXMucmVzaXphYmxlVG9wKTtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aCA9IG1heFdpZHRoICYmIG1heFdpZHRoIDwgYm91bmRXaWR0aCA/IG1heFdpZHRoIDogYm91bmRXaWR0aDtcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgJiYgbWF4SGVpZ2h0IDwgYm91bmRIZWlnaHQgPyBtYXhIZWlnaHQgOiBib3VuZEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnByb3BzLmJvdW5kcyA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHZhciBib3VuZFdpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSB0aGlzLnJlc2l6YWJsZUxlZnQ7XG4gICAgICAgICAgICAgICAgdmFyIGJvdW5kSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5yZXNpemFibGVUb3A7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aCAmJiBtYXhXaWR0aCA8IGJvdW5kV2lkdGggPyBtYXhXaWR0aCA6IGJvdW5kV2lkdGg7XG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICYmIG1heEhlaWdodCA8IGJvdW5kSGVpZ2h0ID8gbWF4SGVpZ2h0IDogYm91bmRIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcm9wcy5ib3VuZHMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGJvdW5kV2lkdGggPSB0aGlzLnByb3BzLmJvdW5kcy5vZmZzZXRXaWR0aCArICh0aGlzLnRhcmdldExlZnQgLSB0aGlzLnJlc2l6YWJsZUxlZnQpO1xuICAgICAgICAgICAgdmFyIGJvdW5kSGVpZ2h0ID0gdGhpcy5wcm9wcy5ib3VuZHMub2Zmc2V0SGVpZ2h0ICsgKHRoaXMudGFyZ2V0VG9wIC0gdGhpcy5yZXNpemFibGVUb3ApO1xuICAgICAgICAgICAgbWF4V2lkdGggPSBtYXhXaWR0aCAmJiBtYXhXaWR0aCA8IGJvdW5kV2lkdGggPyBtYXhXaWR0aCA6IGJvdW5kV2lkdGg7XG4gICAgICAgICAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgJiYgbWF4SGVpZ2h0IDwgYm91bmRIZWlnaHQgPyBtYXhIZWlnaHQgOiBib3VuZEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBtYXhXaWR0aDogbWF4V2lkdGgsIG1heEhlaWdodDogbWF4SGVpZ2h0IH07XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLmNhbGN1bGF0ZU5ld1NpemVGcm9tRGlyZWN0aW9uID0gZnVuY3Rpb24gKGNsaWVudFgsIGNsaWVudFkpIHtcbiAgICAgICAgdmFyIHNjYWxlID0gdGhpcy5wcm9wcy5zY2FsZSB8fCAxO1xuICAgICAgICB2YXIgcmVzaXplUmF0aW8gPSB0aGlzLnByb3BzLnJlc2l6ZVJhdGlvIHx8IDE7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuc3RhdGUsIGRpcmVjdGlvbiA9IF9hLmRpcmVjdGlvbiwgb3JpZ2luYWwgPSBfYS5vcmlnaW5hbDtcbiAgICAgICAgdmFyIF9iID0gdGhpcy5wcm9wcywgbG9ja0FzcGVjdFJhdGlvID0gX2IubG9ja0FzcGVjdFJhdGlvLCBsb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCA9IF9iLmxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0LCBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoID0gX2IubG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aDtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gb3JpZ2luYWwud2lkdGg7XG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBvcmlnaW5hbC5oZWlnaHQ7XG4gICAgICAgIHZhciBleHRyYUhlaWdodCA9IGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0IHx8IDA7XG4gICAgICAgIHZhciBleHRyYVdpZHRoID0gbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCB8fCAwO1xuICAgICAgICBpZiAoaGFzRGlyZWN0aW9uKCdyaWdodCcsIGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIG5ld1dpZHRoID0gb3JpZ2luYWwud2lkdGggKyAoKGNsaWVudFggLSBvcmlnaW5hbC54KSAqIHJlc2l6ZVJhdGlvKSAvIHNjYWxlO1xuICAgICAgICAgICAgaWYgKGxvY2tBc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IChuZXdXaWR0aCAtIGV4dHJhV2lkdGgpIC8gdGhpcy5yYXRpbyArIGV4dHJhSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNEaXJlY3Rpb24oJ2xlZnQnLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICBuZXdXaWR0aCA9IG9yaWdpbmFsLndpZHRoIC0gKChjbGllbnRYIC0gb3JpZ2luYWwueCkgKiByZXNpemVSYXRpbykgLyBzY2FsZTtcbiAgICAgICAgICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSAobmV3V2lkdGggLSBleHRyYVdpZHRoKSAvIHRoaXMucmF0aW8gKyBleHRyYUhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzRGlyZWN0aW9uKCdib3R0b20nLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICBuZXdIZWlnaHQgPSBvcmlnaW5hbC5oZWlnaHQgKyAoKGNsaWVudFkgLSBvcmlnaW5hbC55KSAqIHJlc2l6ZVJhdGlvKSAvIHNjYWxlO1xuICAgICAgICAgICAgaWYgKGxvY2tBc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgICAgIG5ld1dpZHRoID0gKG5ld0hlaWdodCAtIGV4dHJhSGVpZ2h0KSAqIHRoaXMucmF0aW8gKyBleHRyYVdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNEaXJlY3Rpb24oJ3RvcCcsIGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IG9yaWdpbmFsLmhlaWdodCAtICgoY2xpZW50WSAtIG9yaWdpbmFsLnkpICogcmVzaXplUmF0aW8pIC8gc2NhbGU7XG4gICAgICAgICAgICBpZiAobG9ja0FzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICAgICAgbmV3V2lkdGggPSAobmV3SGVpZ2h0IC0gZXh0cmFIZWlnaHQpICogdGhpcy5yYXRpbyArIGV4dHJhV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgbmV3V2lkdGg6IG5ld1dpZHRoLCBuZXdIZWlnaHQ6IG5ld0hlaWdodCB9O1xuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS5jYWxjdWxhdGVOZXdTaXplRnJvbUFzcGVjdFJhdGlvID0gZnVuY3Rpb24gKG5ld1dpZHRoLCBuZXdIZWlnaHQsIG1heCwgbWluKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvY2tBc3BlY3RSYXRpbyA9IF9hLmxvY2tBc3BlY3RSYXRpbywgbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQgPSBfYS5sb2NrQXNwZWN0UmF0aW9FeHRyYUhlaWdodCwgbG9ja0FzcGVjdFJhdGlvRXh0cmFXaWR0aCA9IF9hLmxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGg7XG4gICAgICAgIHZhciBjb21wdXRlZE1pbldpZHRoID0gdHlwZW9mIG1pbi53aWR0aCA9PT0gJ3VuZGVmaW5lZCcgPyAxMCA6IG1pbi53aWR0aDtcbiAgICAgICAgdmFyIGNvbXB1dGVkTWF4V2lkdGggPSB0eXBlb2YgbWF4LndpZHRoID09PSAndW5kZWZpbmVkJyB8fCBtYXgud2lkdGggPCAwID8gbmV3V2lkdGggOiBtYXgud2lkdGg7XG4gICAgICAgIHZhciBjb21wdXRlZE1pbkhlaWdodCA9IHR5cGVvZiBtaW4uaGVpZ2h0ID09PSAndW5kZWZpbmVkJyA/IDEwIDogbWluLmhlaWdodDtcbiAgICAgICAgdmFyIGNvbXB1dGVkTWF4SGVpZ2h0ID0gdHlwZW9mIG1heC5oZWlnaHQgPT09ICd1bmRlZmluZWQnIHx8IG1heC5oZWlnaHQgPCAwID8gbmV3SGVpZ2h0IDogbWF4LmhlaWdodDtcbiAgICAgICAgdmFyIGV4dHJhSGVpZ2h0ID0gbG9ja0FzcGVjdFJhdGlvRXh0cmFIZWlnaHQgfHwgMDtcbiAgICAgICAgdmFyIGV4dHJhV2lkdGggPSBsb2NrQXNwZWN0UmF0aW9FeHRyYVdpZHRoIHx8IDA7XG4gICAgICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIHZhciBleHRyYU1pbldpZHRoID0gKGNvbXB1dGVkTWluSGVpZ2h0IC0gZXh0cmFIZWlnaHQpICogdGhpcy5yYXRpbyArIGV4dHJhV2lkdGg7XG4gICAgICAgICAgICB2YXIgZXh0cmFNYXhXaWR0aCA9IChjb21wdXRlZE1heEhlaWdodCAtIGV4dHJhSGVpZ2h0KSAqIHRoaXMucmF0aW8gKyBleHRyYVdpZHRoO1xuICAgICAgICAgICAgdmFyIGV4dHJhTWluSGVpZ2h0ID0gKGNvbXB1dGVkTWluV2lkdGggLSBleHRyYVdpZHRoKSAvIHRoaXMucmF0aW8gKyBleHRyYUhlaWdodDtcbiAgICAgICAgICAgIHZhciBleHRyYU1heEhlaWdodCA9IChjb21wdXRlZE1heFdpZHRoIC0gZXh0cmFXaWR0aCkgLyB0aGlzLnJhdGlvICsgZXh0cmFIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgbG9ja2VkTWluV2lkdGggPSBNYXRoLm1heChjb21wdXRlZE1pbldpZHRoLCBleHRyYU1pbldpZHRoKTtcbiAgICAgICAgICAgIHZhciBsb2NrZWRNYXhXaWR0aCA9IE1hdGgubWluKGNvbXB1dGVkTWF4V2lkdGgsIGV4dHJhTWF4V2lkdGgpO1xuICAgICAgICAgICAgdmFyIGxvY2tlZE1pbkhlaWdodCA9IE1hdGgubWF4KGNvbXB1dGVkTWluSGVpZ2h0LCBleHRyYU1pbkhlaWdodCk7XG4gICAgICAgICAgICB2YXIgbG9ja2VkTWF4SGVpZ2h0ID0gTWF0aC5taW4oY29tcHV0ZWRNYXhIZWlnaHQsIGV4dHJhTWF4SGVpZ2h0KTtcbiAgICAgICAgICAgIG5ld1dpZHRoID0gY2xhbXAobmV3V2lkdGgsIGxvY2tlZE1pbldpZHRoLCBsb2NrZWRNYXhXaWR0aCk7XG4gICAgICAgICAgICBuZXdIZWlnaHQgPSBjbGFtcChuZXdIZWlnaHQsIGxvY2tlZE1pbkhlaWdodCwgbG9ja2VkTWF4SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld1dpZHRoID0gY2xhbXAobmV3V2lkdGgsIGNvbXB1dGVkTWluV2lkdGgsIGNvbXB1dGVkTWF4V2lkdGgpO1xuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gY2xhbXAobmV3SGVpZ2h0LCBjb21wdXRlZE1pbkhlaWdodCwgY29tcHV0ZWRNYXhIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG5ld1dpZHRoOiBuZXdXaWR0aCwgbmV3SGVpZ2h0OiBuZXdIZWlnaHQgfTtcbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUuc2V0Qm91bmRpbmdDbGllbnRSZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBGb3IgcGFyZW50IGJvdW5kYXJ5XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJvdW5kcyA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnRfMyA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRfMyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudFJlY3QgPSBwYXJlbnRfMy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudExlZnQgPSBwYXJlbnRSZWN0LmxlZnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRUb3AgPSBwYXJlbnRSZWN0LnRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBGb3IgdGFyZ2V0KGh0bWwgZWxlbWVudCkgYm91bmRhcnlcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYm91bmRzIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRSZWN0ID0gdGhpcy5wcm9wcy5ib3VuZHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldExlZnQgPSB0YXJnZXRSZWN0LmxlZnQ7XG4gICAgICAgICAgICB0aGlzLnRhcmdldFRvcCA9IHRhcmdldFJlY3QudG9wO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZvciBib3VuZGFyeVxuICAgICAgICBpZiAodGhpcy5yZXNpemFibGUpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucmVzaXphYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBsZWZ0ID0gX2EubGVmdCwgdG9wXzEgPSBfYS50b3A7XG4gICAgICAgICAgICB0aGlzLnJlc2l6YWJsZUxlZnQgPSBsZWZ0O1xuICAgICAgICAgICAgdGhpcy5yZXNpemFibGVUb3AgPSB0b3BfMTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXphYmxlLnByb3RvdHlwZS5vblJlc2l6ZVN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50LCBkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlc2l6YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjbGllbnRYID0gMDtcbiAgICAgICAgdmFyIGNsaWVudFkgPSAwO1xuICAgICAgICBpZiAoZXZlbnQubmF0aXZlRXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICBjbGllbnRYID0gZXZlbnQubmF0aXZlRXZlbnQuY2xpZW50WDtcbiAgICAgICAgICAgIGNsaWVudFkgPSBldmVudC5uYXRpdmVFdmVudC5jbGllbnRZO1xuICAgICAgICAgICAgLy8gV2hlbiB1c2VyIGNsaWNrIHdpdGggcmlnaHQgYnV0dG9uIHRoZSByZXNpemUgaXMgc3R1Y2sgaW4gcmVzaXppbmcgbW9kZVxuICAgICAgICAgICAgLy8gdW50aWwgdXNlcnMgY2xpY2tzIGFnYWluLCBkb250IGNvbnRpbnVlIGlmIHJpZ2h0IGNsaWNrIGlzIHVzZWQuXG4gICAgICAgICAgICAvLyBIQUNLOiBNb3VzZUV2ZW50IGRvZXMgbm90IGhhdmUgYHdoaWNoYCBmcm9tIGZsb3ctYmluIHYwLjY4LlxuICAgICAgICAgICAgaWYgKGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50Lm5hdGl2ZUV2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgY2xpZW50WCA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIGNsaWVudFkgPSBldmVudC5uYXRpdmVFdmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNpemVTdGFydCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzaXphYmxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0UmVzaXplID0gdGhpcy5wcm9wcy5vblJlc2l6ZVN0YXJ0KGV2ZW50LCBkaXJlY3Rpb24sIHRoaXMucmVzaXphYmxlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRSZXNpemUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRml4ICMxNjhcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnNpemUuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnByb3BzLnNpemUuaGVpZ2h0ICE9PSB0aGlzLnN0YXRlLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoZWlnaHQ6IHRoaXMucHJvcHMuc2l6ZS5oZWlnaHQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuc2l6ZS53aWR0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5wcm9wcy5zaXplLndpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB0aGlzLnByb3BzLnNpemUud2lkdGggfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGxvY2tBc3BlY3RSYXRpbyBjYXNlXG4gICAgICAgIHRoaXMucmF0aW8gPVxuICAgICAgICAgICAgdHlwZW9mIHRoaXMucHJvcHMubG9ja0FzcGVjdFJhdGlvID09PSAnbnVtYmVyJyA/IHRoaXMucHJvcHMubG9ja0FzcGVjdFJhdGlvIDogdGhpcy5zaXplLndpZHRoIC8gdGhpcy5zaXplLmhlaWdodDtcbiAgICAgICAgdmFyIGZsZXhCYXNpcztcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnJlc2l6YWJsZSk7XG4gICAgICAgIGlmIChjb21wdXRlZFN0eWxlLmZsZXhCYXNpcyAhPT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50XzQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBpZiAocGFyZW50XzQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlyID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50XzQpLmZsZXhEaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgdGhpcy5mbGV4RGlyID0gZGlyLnN0YXJ0c1dpdGgoJ3JvdycpID8gJ3JvdycgOiAnY29sdW1uJztcbiAgICAgICAgICAgICAgICBmbGV4QmFzaXMgPSBjb21wdXRlZFN0eWxlLmZsZXhCYXNpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBGb3IgYm91bmRhcnlcbiAgICAgICAgdGhpcy5zZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgICAgIG9yaWdpbmFsOiB7XG4gICAgICAgICAgICAgICAgeDogY2xpZW50WCxcbiAgICAgICAgICAgICAgICB5OiBjbGllbnRZLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnNpemUud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnNpemUuaGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzUmVzaXppbmc6IHRydWUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLnN0YXRlLmJhY2tncm91bmRTdHlsZSksIHsgY3Vyc29yOiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQpLmN1cnNvciB8fCAnYXV0bycgfSksXG4gICAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgICAgICAgIGZsZXhCYXNpczogZmxleEJhc2lzLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUub25Nb3VzZU1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzUmVzaXppbmcgfHwgIXRoaXMucmVzaXphYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbWF4V2lkdGggPSBfYS5tYXhXaWR0aCwgbWF4SGVpZ2h0ID0gX2EubWF4SGVpZ2h0LCBtaW5XaWR0aCA9IF9hLm1pbldpZHRoLCBtaW5IZWlnaHQgPSBfYS5taW5IZWlnaHQ7XG4gICAgICAgIHZhciBjbGllbnRYID0gZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50ID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgdmFyIGNsaWVudFkgPSBldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgPyBldmVudC5jbGllbnRZIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLnN0YXRlLCBkaXJlY3Rpb24gPSBfYi5kaXJlY3Rpb24sIG9yaWdpbmFsID0gX2Iub3JpZ2luYWwsIHdpZHRoID0gX2Iud2lkdGgsIGhlaWdodCA9IF9iLmhlaWdodDtcbiAgICAgICAgdmFyIHBhcmVudFNpemUgPSB0aGlzLmdldFBhcmVudFNpemUoKTtcbiAgICAgICAgdmFyIG1heCA9IGNhbGN1bGF0ZU5ld01heChwYXJlbnRTaXplLCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBtaW5XaWR0aCwgbWluSGVpZ2h0KTtcbiAgICAgICAgbWF4V2lkdGggPSBtYXgubWF4V2lkdGg7XG4gICAgICAgIG1heEhlaWdodCA9IG1heC5tYXhIZWlnaHQ7XG4gICAgICAgIG1pbldpZHRoID0gbWF4Lm1pbldpZHRoO1xuICAgICAgICBtaW5IZWlnaHQgPSBtYXgubWluSGVpZ2h0O1xuICAgICAgICAvLyBDYWxjdWxhdGUgbmV3IHNpemVcbiAgICAgICAgdmFyIF9jID0gdGhpcy5jYWxjdWxhdGVOZXdTaXplRnJvbURpcmVjdGlvbihjbGllbnRYLCBjbGllbnRZKSwgbmV3SGVpZ2h0ID0gX2MubmV3SGVpZ2h0LCBuZXdXaWR0aCA9IF9jLm5ld1dpZHRoO1xuICAgICAgICAvLyBDYWxjdWxhdGUgbWF4IHNpemUgZnJvbSBib3VuZGFyeSBzZXR0aW5nc1xuICAgICAgICB2YXIgYm91bmRhcnlNYXggPSB0aGlzLmNhbGN1bGF0ZU5ld01heEZyb21Cb3VuZGFyeShtYXhXaWR0aCwgbWF4SGVpZ2h0KTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyBzaXplIGZyb20gYXNwZWN0IHJhdGlvXG4gICAgICAgIHZhciBuZXdTaXplID0gdGhpcy5jYWxjdWxhdGVOZXdTaXplRnJvbUFzcGVjdFJhdGlvKG5ld1dpZHRoLCBuZXdIZWlnaHQsIHsgd2lkdGg6IGJvdW5kYXJ5TWF4Lm1heFdpZHRoLCBoZWlnaHQ6IGJvdW5kYXJ5TWF4Lm1heEhlaWdodCB9LCB7IHdpZHRoOiBtaW5XaWR0aCwgaGVpZ2h0OiBtaW5IZWlnaHQgfSk7XG4gICAgICAgIG5ld1dpZHRoID0gbmV3U2l6ZS5uZXdXaWR0aDtcbiAgICAgICAgbmV3SGVpZ2h0ID0gbmV3U2l6ZS5uZXdIZWlnaHQ7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmdyaWQpIHtcbiAgICAgICAgICAgIHZhciBuZXdHcmlkV2lkdGggPSBzbmFwKG5ld1dpZHRoLCB0aGlzLnByb3BzLmdyaWRbMF0pO1xuICAgICAgICAgICAgdmFyIG5ld0dyaWRIZWlnaHQgPSBzbmFwKG5ld0hlaWdodCwgdGhpcy5wcm9wcy5ncmlkWzFdKTtcbiAgICAgICAgICAgIHZhciBnYXAgPSB0aGlzLnByb3BzLnNuYXBHYXAgfHwgMDtcbiAgICAgICAgICAgIG5ld1dpZHRoID0gZ2FwID09PSAwIHx8IE1hdGguYWJzKG5ld0dyaWRXaWR0aCAtIG5ld1dpZHRoKSA8PSBnYXAgPyBuZXdHcmlkV2lkdGggOiBuZXdXaWR0aDtcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IGdhcCA9PT0gMCB8fCBNYXRoLmFicyhuZXdHcmlkSGVpZ2h0IC0gbmV3SGVpZ2h0KSA8PSBnYXAgPyBuZXdHcmlkSGVpZ2h0IDogbmV3SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNuYXAgJiYgdGhpcy5wcm9wcy5zbmFwLngpIHtcbiAgICAgICAgICAgIG5ld1dpZHRoID0gZmluZENsb3Nlc3RTbmFwKG5ld1dpZHRoLCB0aGlzLnByb3BzLnNuYXAueCwgdGhpcy5wcm9wcy5zbmFwR2FwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zbmFwICYmIHRoaXMucHJvcHMuc25hcC55KSB7XG4gICAgICAgICAgICBuZXdIZWlnaHQgPSBmaW5kQ2xvc2VzdFNuYXAobmV3SGVpZ2h0LCB0aGlzLnByb3BzLnNuYXAueSwgdGhpcy5wcm9wcy5zbmFwR2FwKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVsdGEgPSB7XG4gICAgICAgICAgICB3aWR0aDogbmV3V2lkdGggLSBvcmlnaW5hbC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogbmV3SGVpZ2h0IC0gb3JpZ2luYWwuaGVpZ2h0LFxuICAgICAgICB9O1xuICAgICAgICBpZiAod2lkdGggJiYgdHlwZW9mIHdpZHRoID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGVuZHNXaXRoKHdpZHRoLCAnJScpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBlcmNlbnQgPSAobmV3V2lkdGggLyBwYXJlbnRTaXplLndpZHRoKSAqIDEwMDtcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IHBlcmNlbnQgKyBcIiVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVuZHNXaXRoKHdpZHRoLCAndncnKSkge1xuICAgICAgICAgICAgICAgIHZhciB2dyA9IChuZXdXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDEwMDtcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IHZ3ICsgXCJ2d1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZW5kc1dpdGgod2lkdGgsICd2aCcpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZoID0gKG5ld1dpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0KSAqIDEwMDtcbiAgICAgICAgICAgICAgICBuZXdXaWR0aCA9IHZoICsgXCJ2aFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoZWlnaHQgJiYgdHlwZW9mIGhlaWdodCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChlbmRzV2l0aChoZWlnaHQsICclJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVyY2VudCA9IChuZXdIZWlnaHQgLyBwYXJlbnRTaXplLmhlaWdodCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gcGVyY2VudCArIFwiJVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZW5kc1dpdGgoaGVpZ2h0LCAndncnKSkge1xuICAgICAgICAgICAgICAgIHZhciB2dyA9IChuZXdIZWlnaHQgLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gdncgKyBcInZ3XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbmRzV2l0aChoZWlnaHQsICd2aCcpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZoID0gKG5ld0hlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gdmggKyBcInZoXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuY3JlYXRlU2l6ZUZvckNzc1Byb3BlcnR5KG5ld1dpZHRoLCAnd2lkdGgnKSxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5jcmVhdGVTaXplRm9yQ3NzUHJvcGVydHkobmV3SGVpZ2h0LCAnaGVpZ2h0JyksXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLmZsZXhEaXIgPT09ICdyb3cnKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS5mbGV4QmFzaXMgPSBuZXdTdGF0ZS53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmZsZXhEaXIgPT09ICdjb2x1bW4nKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS5mbGV4QmFzaXMgPSBuZXdTdGF0ZS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzaXplKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplKGV2ZW50LCBkaXJlY3Rpb24sIHRoaXMucmVzaXphYmxlLCBkZWx0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUub25Nb3VzZVVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuc3RhdGUsIGlzUmVzaXppbmcgPSBfYS5pc1Jlc2l6aW5nLCBkaXJlY3Rpb24gPSBfYS5kaXJlY3Rpb24sIG9yaWdpbmFsID0gX2Eub3JpZ2luYWw7XG4gICAgICAgIGlmICghaXNSZXNpemluZyB8fCAhdGhpcy5yZXNpemFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVsdGEgPSB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5zaXplLndpZHRoIC0gb3JpZ2luYWwud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc2l6ZS5oZWlnaHQgLSBvcmlnaW5hbC5oZWlnaHQsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzaXplU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlc2l6ZVN0b3AoZXZlbnQsIGRpcmVjdGlvbiwgdGhpcy5yZXNpemFibGUsIGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMucHJvcHMuc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1Jlc2l6aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRTdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMuc3RhdGUuYmFja2dyb3VuZFN0eWxlKSwgeyBjdXJzb3I6ICdhdXRvJyB9KSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLnVwZGF0ZVNpemUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHQgfSk7XG4gICAgfTtcbiAgICBSZXNpemFibGUucHJvdG90eXBlLnJlbmRlclJlc2l6ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGVuYWJsZSA9IF9hLmVuYWJsZSwgaGFuZGxlU3R5bGVzID0gX2EuaGFuZGxlU3R5bGVzLCBoYW5kbGVDbGFzc2VzID0gX2EuaGFuZGxlQ2xhc3NlcywgaGFuZGxlV3JhcHBlclN0eWxlID0gX2EuaGFuZGxlV3JhcHBlclN0eWxlLCBoYW5kbGVXcmFwcGVyQ2xhc3MgPSBfYS5oYW5kbGVXcmFwcGVyQ2xhc3MsIGhhbmRsZUNvbXBvbmVudCA9IF9hLmhhbmRsZUNvbXBvbmVudDtcbiAgICAgICAgaWYgKCFlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXNpemVycyA9IE9iamVjdC5rZXlzKGVuYWJsZSkubWFwKGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIGlmIChlbmFibGVbZGlyXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVzaXplcl8xLlJlc2l6ZXIsIHsga2V5OiBkaXIsIGRpcmVjdGlvbjogZGlyLCBvblJlc2l6ZVN0YXJ0OiBfdGhpcy5vblJlc2l6ZVN0YXJ0LCByZXBsYWNlU3R5bGVzOiBoYW5kbGVTdHlsZXMgJiYgaGFuZGxlU3R5bGVzW2Rpcl0sIGNsYXNzTmFtZTogaGFuZGxlQ2xhc3NlcyAmJiBoYW5kbGVDbGFzc2VzW2Rpcl0gfSwgaGFuZGxlQ29tcG9uZW50ICYmIGhhbmRsZUNvbXBvbmVudFtkaXJdID8gaGFuZGxlQ29tcG9uZW50W2Rpcl0gOiBudWxsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vICM5MyBXcmFwIHRoZSByZXNpemUgYm94IGluIHNwYW4gKHdpbGwgbm90IGJyZWFrIDEwMCUgd2lkdGgvaGVpZ2h0KVxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBoYW5kbGVXcmFwcGVyQ2xhc3MsIHN0eWxlOiBoYW5kbGVXcmFwcGVyU3R5bGUgfSwgcmVzaXplcnMpKTtcbiAgICB9O1xuICAgIFJlc2l6YWJsZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZXh0ZW5kc1Byb3BzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICAgICAgaWYgKGRlZmluZWRQcm9wcy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjY1trZXldID0gX3RoaXMucHJvcHNba2V5XTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgdmFyIHN0eWxlID0gX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oeyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdXNlclNlbGVjdDogdGhpcy5zdGF0ZS5pc1Jlc2l6aW5nID8gJ25vbmUnIDogJ2F1dG8nIH0sIHRoaXMucHJvcHMuc3R5bGUpLCB0aGlzLnNpemVTdHlsZSksIHsgbWF4V2lkdGg6IHRoaXMucHJvcHMubWF4V2lkdGgsIG1heEhlaWdodDogdGhpcy5wcm9wcy5tYXhIZWlnaHQsIG1pbldpZHRoOiB0aGlzLnByb3BzLm1pbldpZHRoLCBtaW5IZWlnaHQ6IHRoaXMucHJvcHMubWluSGVpZ2h0LCBib3hTaXppbmc6ICdib3JkZXItYm94JywgZmxleFNocmluazogMCB9KTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmxleEJhc2lzKSB7XG4gICAgICAgICAgICBzdHlsZS5mbGV4QmFzaXMgPSB0aGlzLnN0YXRlLmZsZXhCYXNpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX19hc3NpZ24oeyByZWY6IHRoaXMucmVmLCBzdHlsZTogc3R5bGUsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUgfSwgZXh0ZW5kc1Byb3BzKSxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNSZXNpemluZyAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHRoaXMuc3RhdGUuYmFja2dyb3VuZFN0eWxlIH0pLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUmVzaXplcigpKSk7XG4gICAgfTtcbiAgICBSZXNpemFibGUuZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBvblJlc2l6ZVN0YXJ0OiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIG9uUmVzaXplOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIG9uUmVzaXplU3RvcDogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICBlbmFibGU6IHtcbiAgICAgICAgICAgIHRvcDogdHJ1ZSxcbiAgICAgICAgICAgIHJpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgYm90dG9tOiB0cnVlLFxuICAgICAgICAgICAgbGVmdDogdHJ1ZSxcbiAgICAgICAgICAgIHRvcFJpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgYm90dG9tUmlnaHQ6IHRydWUsXG4gICAgICAgICAgICBib3R0b21MZWZ0OiB0cnVlLFxuICAgICAgICAgICAgdG9wTGVmdDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICBncmlkOiBbMSwgMV0sXG4gICAgICAgIGxvY2tBc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICAgIGxvY2tBc3BlY3RSYXRpb0V4dHJhV2lkdGg6IDAsXG4gICAgICAgIGxvY2tBc3BlY3RSYXRpb0V4dHJhSGVpZ2h0OiAwLFxuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgcmVzaXplUmF0aW86IDEsXG4gICAgICAgIHNuYXBHYXA6IDAsXG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXphYmxlO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLlJlc2l6YWJsZSA9IFJlc2l6YWJsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgc3R5bGVzID0ge1xuICAgIHRvcDoge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAgICAgdG9wOiAnLTVweCcsXG4gICAgICAgIGxlZnQ6ICcwcHgnLFxuICAgICAgICBjdXJzb3I6ICdyb3ctcmVzaXplJyxcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICAgIHdpZHRoOiAnMTBweCcsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB0b3A6ICcwcHgnLFxuICAgICAgICByaWdodDogJy01cHgnLFxuICAgICAgICBjdXJzb3I6ICdjb2wtcmVzaXplJyxcbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAgICAgYm90dG9tOiAnLTVweCcsXG4gICAgICAgIGxlZnQ6ICcwcHgnLFxuICAgICAgICBjdXJzb3I6ICdyb3ctcmVzaXplJyxcbiAgICB9LFxuICAgIGxlZnQ6IHtcbiAgICAgICAgd2lkdGg6ICcxMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHRvcDogJzBweCcsXG4gICAgICAgIGxlZnQ6ICctNXB4JyxcbiAgICAgICAgY3Vyc29yOiAnY29sLXJlc2l6ZScsXG4gICAgfSxcbiAgICB0b3BSaWdodDoge1xuICAgICAgICB3aWR0aDogJzIwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHJpZ2h0OiAnLTEwcHgnLFxuICAgICAgICB0b3A6ICctMTBweCcsXG4gICAgICAgIGN1cnNvcjogJ25lLXJlc2l6ZScsXG4gICAgfSxcbiAgICBib3R0b21SaWdodDoge1xuICAgICAgICB3aWR0aDogJzIwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHJpZ2h0OiAnLTEwcHgnLFxuICAgICAgICBib3R0b206ICctMTBweCcsXG4gICAgICAgIGN1cnNvcjogJ3NlLXJlc2l6ZScsXG4gICAgfSxcbiAgICBib3R0b21MZWZ0OiB7XG4gICAgICAgIHdpZHRoOiAnMjBweCcsXG4gICAgICAgIGhlaWdodDogJzIwcHgnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgbGVmdDogJy0xMHB4JyxcbiAgICAgICAgYm90dG9tOiAnLTEwcHgnLFxuICAgICAgICBjdXJzb3I6ICdzdy1yZXNpemUnLFxuICAgIH0sXG4gICAgdG9wTGVmdDoge1xuICAgICAgICB3aWR0aDogJzIwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6ICctMTBweCcsXG4gICAgICAgIHRvcDogJy0xMHB4JyxcbiAgICAgICAgY3Vyc29yOiAnbnctcmVzaXplJyxcbiAgICB9LFxufTtcbnZhciBSZXNpemVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZXNpemVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlc2l6ZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vblJlc2l6ZVN0YXJ0KGUsIF90aGlzLnByb3BzLmRpcmVjdGlvbik7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vblJlc2l6ZVN0YXJ0KGUsIF90aGlzLnByb3BzLmRpcmVjdGlvbik7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUmVzaXplci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnLCBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdXNlclNlbGVjdDogJ25vbmUnIH0sIHN0eWxlc1t0aGlzLnByb3BzLmRpcmVjdGlvbl0pLCAodGhpcy5wcm9wcy5yZXBsYWNlU3R5bGVzIHx8IHt9KSksIG9uTW91c2VEb3duOiB0aGlzLm9uTW91c2VEb3duLCBvblRvdWNoU3RhcnQ6IHRoaXMub25Ub3VjaFN0YXJ0IH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLlJlc2l6ZXIgPSBSZXNpemVyO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJTaWVtYVwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2llbWE9dCgpOmUuU2llbWE9dCgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihpW3JdKXJldHVybiBpW3JdLmV4cG9ydHM7dmFyIG49aVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sPSEwLG4uZXhwb3J0c312YXIgaT17fTtyZXR1cm4gdC5tPWUsdC5jPWksdC5kPWZ1bmN0aW9uKGUsaSxyKXt0Lm8oZSxpKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBpPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQoaSxcImFcIixpKSxpfSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIlwiLHQodC5zPTApfShbZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciByPXRbaV07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxpLHIpe3JldHVybiBpJiZlKHQucHJvdG90eXBlLGkpLHImJmUodCxyKSx0fX0oKSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgaT10aGlzO2lmKHIodGhpcyxlKSx0aGlzLmNvbmZpZz1lLm1lcmdlU2V0dGluZ3ModCksdGhpcy5zZWxlY3Rvcj1cInN0cmluZ1wiPT10eXBlb2YgdGhpcy5jb25maWcuc2VsZWN0b3I/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zZWxlY3Rvcik6dGhpcy5jb25maWcuc2VsZWN0b3IsbnVsbD09PXRoaXMuc2VsZWN0b3IpdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdyb25nIHdpdGggeW91ciBzZWxlY3RvciDwn5itXCIpO3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuaW5uZXJFbGVtZW50cz1bXS5zbGljZS5jYWxsKHRoaXMuc2VsZWN0b3IuY2hpbGRyZW4pLHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jb25maWcuc3RhcnRJbmRleCV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWF4KDAsTWF0aC5taW4odGhpcy5jb25maWcuc3RhcnRJbmRleCx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSkpLHRoaXMudHJhbnNmb3JtUHJvcGVydHk9ZS53ZWJraXRPck5vdCgpLFtcInJlc2l6ZUhhbmRsZXJcIixcInRvdWNoc3RhcnRIYW5kbGVyXCIsXCJ0b3VjaGVuZEhhbmRsZXJcIixcInRvdWNobW92ZUhhbmRsZXJcIixcIm1vdXNlZG93bkhhbmRsZXJcIixcIm1vdXNldXBIYW5kbGVyXCIsXCJtb3VzZWxlYXZlSGFuZGxlclwiLFwibW91c2Vtb3ZlSGFuZGxlclwiLFwiY2xpY2tIYW5kbGVyXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7aVtlXT1pW2VdLmJpbmQoaSl9KSx0aGlzLmluaXQoKX1yZXR1cm4gcyhlLFt7a2V5OlwiYXR0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOiExfSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKSl9fSx7a2V5OlwiZGV0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcil9fSx7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsdGhpcy5zZWxlY3Rvci5zdHlsZS5kaXJlY3Rpb249dGhpcy5jb25maWcucnRsP1wicnRsXCI6XCJsdHJcIix0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSx0aGlzLmNvbmZpZy5vbkluaXQuY2FsbCh0aGlzKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlLHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlOnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5zbGlkZXJGcmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2lkdGg9ZSp0K1wicHhcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYodGhpcy5jb25maWcubG9vcClmb3IodmFyIHI9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2U7cjx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3IrKyl7dmFyIG49dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbcl0uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChuKX1mb3IodmFyIHM9MDtzPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgbD10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tzXSk7aS5hcHBlbmRDaGlsZChsKX1pZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgbz0wO288dGhpcy5wZXJQYWdlO28rKyl7dmFyIGE9dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbb10uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChhKX10aGlzLnNsaWRlckZyYW1lLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlckZyYW1lKSx0aGlzLnNsaWRlVG9DdXJyZW50KCl9fSx7a2V5OlwiYnVpbGRTbGlkZXJGcmFtZUl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LnN0eWxlLmNzc0Zsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS5mbG9hdD10aGlzLmNvbmZpZy5ydGw/XCJyaWdodFwiOlwibGVmdFwiLHQuc3R5bGUud2lkdGg9KHRoaXMuY29uZmlnLmxvb3A/MTAwLyh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlKToxMDAvdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCkrXCIlXCIsdC5hcHBlbmRDaGlsZChlKSx0fX0se2tleTpcInJlc29sdmVTbGlkZXNOdW1iZXJcIix2YWx1ZTpmdW5jdGlvbigpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5wZXJQYWdlKXRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlO2Vsc2UgaWYoXCJvYmplY3RcIj09PW4odGhpcy5jb25maWcucGVyUGFnZSkpe3RoaXMucGVyUGFnZT0xO2Zvcih2YXIgZSBpbiB0aGlzLmNvbmZpZy5wZXJQYWdlKXdpbmRvdy5pbm5lcldpZHRoPj1lJiYodGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2VbZV0pfX19LHtrZXk6XCJwcmV2XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlLWU8MCl7dGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO3ZhciByPXRoaXMuY3VycmVudFNsaWRlK3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgsbj10aGlzLnBlclBhZ2Uscz1yK24sbD0odGhpcy5jb25maWcucnRsPzE6LTEpKnMqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLG89dGhpcy5jb25maWcuZHJhZ2dhYmxlP3RoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFg6MDt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKGwrbykrXCJweCwgMCwgMClcIix0aGlzLmN1cnJlbnRTbGlkZT1yLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmN1cnJlbnRTbGlkZS1lfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9TWF0aC5tYXgodGhpcy5jdXJyZW50U2xpZGUtZSwwKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwibmV4dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsdD1hcmd1bWVudHNbMV07aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTtpZih0aGlzLmNvbmZpZy5sb29wKXtpZih0aGlzLmN1cnJlbnRTbGlkZStlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUtdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXIrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlK2V9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1pbih0aGlzLmN1cnJlbnRTbGlkZStlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwiZGlzYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nfX0se2tleTpcImVuYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZ29Ub1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTt0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5sb29wP2UldGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDpNYXRoLm1pbihNYXRoLm1heChlLDApLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSxpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJzbGlkZVRvQ3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxyPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqaSoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSk7ZT9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LmVuYWJsZVRyYW5zaXRpb24oKSx0LnNsaWRlckZyYW1lLnN0eWxlW3QudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifSl9KTp0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifX0se2tleTpcInVwZGF0ZUFmdGVyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9KHRoaXMuY29uZmlnLnJ0bD8tMToxKSoodGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCksdD1NYXRoLmFicyhlKSxpPXRoaXMuY29uZmlnLm11bHRpcGxlRHJhZz9NYXRoLmNlaWwodC8odGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkpOjEscj1lPjAmJnRoaXMuY3VycmVudFNsaWRlLWk8MCxuPWU8MCYmdGhpcy5jdXJyZW50U2xpZGUraT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtlPjAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZT90aGlzLnByZXYoaSk6ZTwwJiZ0PnRoaXMuY29uZmlnLnRocmVzaG9sZCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aD50aGlzLnBlclBhZ2UmJnRoaXMubmV4dChpKSx0aGlzLnNsaWRlVG9DdXJyZW50KHJ8fG4pfX0se2tleTpcInJlc2l6ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoJiYodGhpcy5jdXJyZW50U2xpZGU9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlPzA6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpfX0se2tleTpcImNsZWFyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazp0aGlzLmRyYWcucHJldmVudENsaWNrfX19LHtrZXk6XCJ0b3VjaHN0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLmRyYWcuc3RhcnRZPWUudG91Y2hlc1swXS5wYWdlWSl9fSx7a2V5OlwidG91Y2hlbmRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwidG91Y2htb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUuc3RvcFByb3BhZ2F0aW9uKCksbnVsbD09PXRoaXMuZHJhZy5sZXRJdEdvJiYodGhpcy5kcmFnLmxldEl0R289TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WS1lLnRvdWNoZXNbMF0ucGFnZVkpPE1hdGguYWJzKHRoaXMuZHJhZy5zdGFydFgtZS50b3VjaGVzWzBdLnBhZ2VYKSksdGhpcy5wb2ludGVyRG93biYmdGhpcy5kcmFnLmxldEl0R28pe2UucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcuZW5kWD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlZG93bkhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXstMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZSl8fChlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS5wYWdlWCl9fSx7a2V5OlwibW91c2V1cEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcIm1vdXNlbW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksdGhpcy5wb2ludGVyRG93bil7XCJBXCI9PT1lLnRhcmdldC5ub2RlTmFtZSYmKHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITApLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJiaW5nXCIsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlbGVhdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5wb2ludGVyRG93biYmKHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpKX19LHtrZXk6XCJjbGlja0hhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmRyYWcucHJldmVudENsaWNrJiZlLnByZXZlbnREZWZhdWx0KCksdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMX19LHtrZXk6XCJyZW1vdmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKGU8MHx8ZT49dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJdGVtIHRvIHJlbW92ZSBkb2Vzbid0IGV4aXN0IPCfmK1cIik7dmFyIGk9ZTx0aGlzLmN1cnJlbnRTbGlkZSxyPXRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZS0xPT09ZTsoaXx8cikmJnRoaXMuY3VycmVudFNsaWRlLS0sdGhpcy5pbm5lckVsZW1lbnRzLnNwbGljZShlLDEpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJpbnNlcnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7aWYodDwwfHx0PnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5zZXQgaXQgYXQgdGhpcyBpbmRleCDwn5itXCIpO2lmKC0xIT09dGhpcy5pbm5lckVsZW1lbnRzLmluZGV4T2YoZSkpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNhbWUgaXRlbSBpbiBhIGNhcm91c2VsPyBSZWFsbHk/IE5vcGUg8J+YrVwiKTt2YXIgcj10PD10aGlzLmN1cnJlbnRTbGlkZT4wJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuY3VycmVudFNsaWRlPXI/dGhpcy5jdXJyZW50U2xpZGUrMTp0aGlzLmN1cnJlbnRTbGlkZSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKHQsMCxlKSx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSxpJiZpLmNhbGwodGhpcyl9fSx7a2V5OlwicHJlcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSwwKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiYXBwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sdD1hcmd1bWVudHNbMV07aWYodGhpcy5kZXRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cImF1dG9cIixlKXtmb3IodmFyIGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHI9MDtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKWkuYXBwZW5kQ2hpbGQodGhpcy5pbm5lckVsZW1lbnRzW3JdKTt0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKX10JiZ0LmNhbGwodGhpcyl9fV0sW3trZXk6XCJtZXJnZVNldHRpbmdzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9e3NlbGVjdG9yOlwiLnNpZW1hXCIsZHVyYXRpb246MjAwLGVhc2luZzpcImVhc2Utb3V0XCIscGVyUGFnZToxLHN0YXJ0SW5kZXg6MCxkcmFnZ2FibGU6ITAsbXVsdGlwbGVEcmFnOiEwLHRocmVzaG9sZDoyMCxsb29wOiExLHJ0bDohMSxvbkluaXQ6ZnVuY3Rpb24oKXt9LG9uQ2hhbmdlOmZ1bmN0aW9uKCl7fX0saT1lO2Zvcih2YXIgciBpbiBpKXRbcl09aVtyXTtyZXR1cm4gdH19LHtrZXk6XCJ3ZWJraXRPck5vdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0/XCJ0cmFuc2Zvcm1cIjpcIldlYmtpdFRyYW5zZm9ybVwifX1dKSxlfSgpO3QuZGVmYXVsdD1sLGUuZXhwb3J0cz10LmRlZmF1bHR9XSl9KTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZmluZWQsbm8tcGFyYW0tcmVhc3NpZ24sbm8tc2hhZG93ICovXG5cbi8qKlxuICogVGhyb3R0bGUgZXhlY3V0aW9uIG9mIGEgZnVuY3Rpb24uIEVzcGVjaWFsbHkgdXNlZnVsIGZvciByYXRlIGxpbWl0aW5nXG4gKiBleGVjdXRpb24gb2YgaGFuZGxlcnMgb24gZXZlbnRzIGxpa2UgcmVzaXplIGFuZCBzY3JvbGwuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgICBkZWxheSAgICAgICAgICBBIHplcm8tb3ItZ3JlYXRlciBkZWxheSBpbiBtaWxsaXNlY29uZHMuIEZvciBldmVudCBjYWxsYmFja3MsIHZhbHVlcyBhcm91bmQgMTAwIG9yIDI1MCAob3IgZXZlbiBoaWdoZXIpIGFyZSBtb3N0IHVzZWZ1bC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgW25vVHJhaWxpbmddICAgT3B0aW9uYWwsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBub1RyYWlsaW5nIGlzIHRydWUsIGNhbGxiYWNrIHdpbGwgb25seSBleGVjdXRlIGV2ZXJ5IGBkZWxheWAgbWlsbGlzZWNvbmRzIHdoaWxlIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdHRsZWQtZnVuY3Rpb24gaXMgYmVpbmcgY2FsbGVkLiBJZiBub1RyYWlsaW5nIGlzIGZhbHNlIG9yIHVuc3BlY2lmaWVkLCBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkIG9uZSBmaW5hbCB0aW1lXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyIHRoZSBsYXN0IHRocm90dGxlZC1mdW5jdGlvbiBjYWxsLiAoQWZ0ZXIgdGhlIHRocm90dGxlZC1mdW5jdGlvbiBoYXMgbm90IGJlZW4gY2FsbGVkIGZvciBgZGVsYXlgIG1pbGxpc2Vjb25kcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGludGVybmFsIGNvdW50ZXIgaXMgcmVzZXQpXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gIGNhbGxiYWNrICAgICAgIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgZGVsYXkgbWlsbGlzZWNvbmRzLiBUaGUgYHRoaXNgIGNvbnRleHQgYW5kIGFsbCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0aHJvdWdoLCBhcy1pcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYGNhbGxiYWNrYCB3aGVuIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaXMgZXhlY3V0ZWQuXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgIFtkZWJvdW5jZU1vZGVdIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgc2NoZWR1bGUgYGNsZWFyYCB0byBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuIElmIGBkZWJvdW5jZU1vZGVgIGlzIGZhbHNlIChhdCBlbmQpLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gIEEgbmV3LCB0aHJvdHRsZWQsIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0aHJvdHRsZSAoZGVsYXksIG5vVHJhaWxpbmcsIGNhbGxiYWNrLCBkZWJvdW5jZU1vZGUpIHtcbiAgLypcbiAgICogQWZ0ZXIgd3JhcHBlciBoYXMgc3RvcHBlZCBiZWluZyBjYWxsZWQsIHRoaXMgdGltZW91dCBlbnN1cmVzIHRoYXRcbiAgICogYGNhbGxiYWNrYCBpcyBleGVjdXRlZCBhdCB0aGUgcHJvcGVyIHRpbWVzIGluIGB0aHJvdHRsZWAgYW5kIGBlbmRgXG4gICAqIGRlYm91bmNlIG1vZGVzLlxuICAgKi9cbiAgdmFyIHRpbWVvdXRJRDtcbiAgdmFyIGNhbmNlbGxlZCA9IGZhbHNlOyAvLyBLZWVwIHRyYWNrIG9mIHRoZSBsYXN0IHRpbWUgYGNhbGxiYWNrYCB3YXMgZXhlY3V0ZWQuXG5cbiAgdmFyIGxhc3RFeGVjID0gMDsgLy8gRnVuY3Rpb24gdG8gY2xlYXIgZXhpc3RpbmcgdGltZW91dFxuXG4gIGZ1bmN0aW9uIGNsZWFyRXhpc3RpbmdUaW1lb3V0KCkge1xuICAgIGlmICh0aW1lb3V0SUQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xuICAgIH1cbiAgfSAvLyBGdW5jdGlvbiB0byBjYW5jZWwgbmV4dCBleGVjXG5cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgY2xlYXJFeGlzdGluZ1RpbWVvdXQoKTtcbiAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICB9IC8vIGBub1RyYWlsaW5nYCBkZWZhdWx0cyB0byBmYWxzeS5cblxuXG4gIGlmICh0eXBlb2Ygbm9UcmFpbGluZyAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgZGVib3VuY2VNb2RlID0gY2FsbGJhY2s7XG4gICAgY2FsbGJhY2sgPSBub1RyYWlsaW5nO1xuICAgIG5vVHJhaWxpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLypcbiAgICogVGhlIGB3cmFwcGVyYCBmdW5jdGlvbiBlbmNhcHN1bGF0ZXMgYWxsIG9mIHRoZSB0aHJvdHRsaW5nIC8gZGVib3VuY2luZ1xuICAgKiBmdW5jdGlvbmFsaXR5IGFuZCB3aGVuIGV4ZWN1dGVkIHdpbGwgbGltaXQgdGhlIHJhdGUgYXQgd2hpY2ggYGNhbGxiYWNrYFxuICAgKiBpcyBleGVjdXRlZC5cbiAgICovXG5cblxuICBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZWxhcHNlZCA9IERhdGUubm93KCkgLSBsYXN0RXhlYztcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEV4ZWN1dGUgYGNhbGxiYWNrYCBhbmQgdXBkYXRlIHRoZSBgbGFzdEV4ZWNgIHRpbWVzdGFtcC5cblxuXG4gICAgZnVuY3Rpb24gZXhlYygpIHtcbiAgICAgIGxhc3RFeGVjID0gRGF0ZS5ub3coKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cbiAgICAvKlxuICAgICAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSB0aGlzIGlzIHVzZWQgdG8gY2xlYXIgdGhlIGZsYWdcbiAgICAgKiB0byBhbGxvdyBmdXR1cmUgYGNhbGxiYWNrYCBleGVjdXRpb25zLlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHRpbWVvdXRJRCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoZGVib3VuY2VNb2RlICYmICF0aW1lb3V0SUQpIHtcbiAgICAgIC8qXG4gICAgICAgKiBTaW5jZSBgd3JhcHBlcmAgaXMgYmVpbmcgY2FsbGVkIGZvciB0aGUgZmlyc3QgdGltZSBhbmRcbiAgICAgICAqIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgZXhlY3V0ZSBgY2FsbGJhY2tgLlxuICAgICAgICovXG4gICAgICBleGVjKCk7XG4gICAgfVxuXG4gICAgY2xlYXJFeGlzdGluZ1RpbWVvdXQoKTtcblxuICAgIGlmIChkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCAmJiBlbGFwc2VkID4gZGVsYXkpIHtcbiAgICAgIC8qXG4gICAgICAgKiBJbiB0aHJvdHRsZSBtb2RlLCBpZiBgZGVsYXlgIHRpbWUgaGFzIGJlZW4gZXhjZWVkZWQsIGV4ZWN1dGVcbiAgICAgICAqIGBjYWxsYmFja2AuXG4gICAgICAgKi9cbiAgICAgIGV4ZWMoKTtcbiAgICB9IGVsc2UgaWYgKG5vVHJhaWxpbmcgIT09IHRydWUpIHtcbiAgICAgIC8qXG4gICAgICAgKiBJbiB0cmFpbGluZyB0aHJvdHRsZSBtb2RlLCBzaW5jZSBgZGVsYXlgIHRpbWUgaGFzIG5vdCBiZWVuXG4gICAgICAgKiBleGNlZWRlZCwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGBkZWxheWAgbXMgYWZ0ZXIgbW9zdFxuICAgICAgICogcmVjZW50IGV4ZWN1dGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIHNjaGVkdWxlIGBjbGVhcmAgdG8gZXhlY3V0ZVxuICAgICAgICogYWZ0ZXIgYGRlbGF5YCBtcy5cbiAgICAgICAqXG4gICAgICAgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyBmYWxzZSAoYXQgZW5kKSwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0b1xuICAgICAgICogZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuICAgICAgICovXG4gICAgICB0aW1lb3V0SUQgPSBzZXRUaW1lb3V0KGRlYm91bmNlTW9kZSA/IGNsZWFyIDogZXhlYywgZGVib3VuY2VNb2RlID09PSB1bmRlZmluZWQgPyBkZWxheSAtIGVsYXBzZWQgOiBkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgd3JhcHBlci5jYW5jZWwgPSBjYW5jZWw7IC8vIFJldHVybiB0aGUgd3JhcHBlciBmdW5jdGlvbi5cblxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkICovXG4vKipcbiAqIERlYm91bmNlIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uLiBEZWJvdW5jaW5nLCB1bmxpa2UgdGhyb3R0bGluZyxcbiAqIGd1YXJhbnRlZXMgdGhhdCBhIGZ1bmN0aW9uIGlzIG9ubHkgZXhlY3V0ZWQgYSBzaW5nbGUgdGltZSwgZWl0aGVyIGF0IHRoZVxuICogdmVyeSBiZWdpbm5pbmcgb2YgYSBzZXJpZXMgb2YgY2FsbHMsIG9yIGF0IHRoZSB2ZXJ5IGVuZC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgZGVsYXkgICAgICAgICBBIHplcm8tb3ItZ3JlYXRlciBkZWxheSBpbiBtaWxsaXNlY29uZHMuIEZvciBldmVudCBjYWxsYmFja3MsIHZhbHVlcyBhcm91bmQgMTAwIG9yIDI1MCAob3IgZXZlbiBoaWdoZXIpIGFyZSBtb3N0IHVzZWZ1bC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICBbYXRCZWdpbl0gICAgIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgYXRCZWdpbiBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIGBkZWxheWAgbWlsbGlzZWNvbmRzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlciB0aGUgbGFzdCBkZWJvdW5jZWQtZnVuY3Rpb24gY2FsbC4gSWYgYXRCZWdpbiBpcyB0cnVlLCBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkIG9ubHkgYXQgdGhlIGZpcnN0IGRlYm91bmNlZC1mdW5jdGlvbiBjYWxsLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEFmdGVyIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgYGRlbGF5YCBtaWxsaXNlY29uZHMsIHRoZSBpbnRlcm5hbCBjb3VudGVyIGlzIHJlc2V0KS5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgICAgIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgZGVsYXkgbWlsbGlzZWNvbmRzLiBUaGUgYHRoaXNgIGNvbnRleHQgYW5kIGFsbCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0aHJvdWdoLCBhcy1pcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgZGVib3VuY2VkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldywgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICovXG5cbmZ1bmN0aW9uIGRlYm91bmNlIChkZWxheSwgYXRCZWdpbiwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIGNhbGxiYWNrID09PSB1bmRlZmluZWQgPyB0aHJvdHRsZShkZWxheSwgYXRCZWdpbiwgZmFsc2UpIDogdGhyb3R0bGUoZGVsYXksIGNhbGxiYWNrLCBhdEJlZ2luICE9PSBmYWxzZSk7XG59XG5cbmV4cG9ydCB7IHRocm90dGxlLCBkZWJvdW5jZSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBibG9jczoge1xuICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgZGVmYXVsdDoge31cbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDUwMFxuICB9LFxuICBzaG93RG90OiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH0sXG4gIHNob3dBcnJvdzoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZVxuICB9XG59O1xuIiwiY29uc3QgeyBCdXR0b24sIERhc2hpY29uLCBTcGlubmVyIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IE1lZGlhVXBsb2FkLCBNZWRpYVVwbG9hZENoZWNrIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgdXNlU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFtcImltYWdlXCJdO1xuXG5jb25zdCBBZGRJbWFnZSA9ICh7IHByb3BzLCBpbml0Q2Fyb3VzZWwsIGRlc3Ryb3lDYXJvdXNlbCB9KSA9PiB7XG4gIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgYmxvY3MgfSA9IGF0dHJpYnV0ZXM7XG4gIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKGJsb2NzKS5sZW5ndGg7XG4gIGNvbnN0IGluZGV4ID0gbGVuZ3RoO1xuICAvLyBnZXQgdGhlIGltYWdlIGluZm8gZm9yIG5ldyBpbWFnZVxuICBjb25zdCBpbWFnZSA9IHVzZVNlbGVjdChcbiAgICBzZWxlY3QgPT4ge1xuICAgICAgbGV0IG5ld1BpYyA9IG51bGw7XG4gICAgICAvLyBzZWFyY2ggaW1hZ2Ugd2l0aCBuZXdJbWFnZSA9PT0gdHJ1ZVxuICAgICAgT2JqZWN0LmtleXMoYmxvY3MpLmZvckVhY2goYiA9PiB7XG4gICAgICAgIGlmIChibG9jc1tiXS5uZXdJbWFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG5ld1BpYyA9IGJsb2NzW2JdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHsgZ2V0TWVkaWEgfSA9IHNlbGVjdChcImNvcmVcIik7XG4gICAgICAvLyBnZXQgbWVkaWEgZm9yIHRoaXMgbmV3IHBpYyBhZGRlZFxuICAgICAgcmV0dXJuIG5ld1BpYyA/IGdldE1lZGlhKG5ld1BpYy5pbWFnZUlkKSA6IHt9O1xuICAgIH0sXG4gICAgW2Jsb2NzXVxuICApO1xuICAvLyB1cGRhdGUgaW1hZ2UgaW5mbyB0byBhdHRyaWJ1dGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYmxvY3MpO1xuICAgIGlmIChpbWFnZSAmJiBpbWFnZS5pZCkge1xuICAgICAgbGV0IF9pbmRleCA9IG51bGw7XG4gICAgICAvLyBzZWFyY2ggaW5mZXggZm9yIG5ld0ltYWdlID09PSB0cnVlXG4gICAgICBrZXlzLmZvckVhY2goYiA9PiB7XG4gICAgICAgIGlmIChibG9jc1tiXS5uZXdJbWFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIF9pbmRleCA9IGI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKF9pbmRleCkge1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBibG9jczoge1xuICAgICAgICAgICAgLi4uYmxvY3MsXG4gICAgICAgICAgICAuLi57IFtfaW5kZXhdOiB7IC4uLmJsb2NzW19pbmRleF0sIGltYWdlLCBuZXdJbWFnZTogZmFsc2UgfSB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpbWFnZV0pO1xuXG4gIC8qKlxuICAgKiBhZGQgbmV3IGltYWdlXG4gICAqIEBwYXJhbSB7fSBpbWFnZVxuICAgKi9cbiAgY29uc3Qgb25VcGRhdGVJbWFnZSA9IGltYWdlID0+IHtcbiAgICBkZXN0cm95Q2Fyb3VzZWwoKCkgPT4ge1xuICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIGJsb2NzOiB7XG4gICAgICAgICAgLi4uYmxvY3MsXG4gICAgICAgICAgLi4ue1xuICAgICAgICAgICAgW2luZGV4XToge1xuICAgICAgICAgICAgICAuLi5ibG9jc1tpbmRleF0sXG4gICAgICAgICAgICAgIGltYWdlSWQ6IGltYWdlLmlkLFxuICAgICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgICAgLy8gc2V0IHRvIHRydWUgZm9yIGdldCBtZWRpYSBhZnRlclxuICAgICAgICAgICAgICBuZXdJbWFnZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpbml0Q2Fyb3VzZWwoKTtcbiAgICB9LCB0cnVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lZGlhVXBsb2FkQ2hlY2s+XG4gICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgIHRpdGxlPXtfXyhcIkltYWdlXCIsIFwiZ20tY2Fyb3VzZWxcIil9XG4gICAgICAgICAgb25TZWxlY3Q9e29uVXBkYXRlSW1hZ2V9XG4gICAgICAgICAgYWxsb3dlZFR5cGVzPXtBTExPV0VEX01FRElBX1RZUEVTfVxuICAgICAgICAgIHZhbHVlPXtcIlwifVxuICAgICAgICAgIHJlbmRlcj17KHsgb3BlbiB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17b3Blbn1cbiAgICAgICAgICAgICAgICB0aXRsZT17X18oXCJhZGQgaW1hZ2VcIiwgXCJnbS1jYXJvdXNlbFwiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJ1dHRvbiBlZGl0b3ItcG9zdC1wcmV2aWV3IGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLWxhcmdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtfXyhcImFkZCBpbWFnZVwiLCBcImdtLWNhcm91c2VsXCIpfVxuICAgICAgICAgICAgICAgIHtcIiAgXCJ9XG4gICAgICAgICAgICAgICAgPERhc2hpY29uIGljb249XCJwbHVzLWFsdFwiIC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9NZWRpYVVwbG9hZENoZWNrPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkSW1hZ2U7XG4iLCJjb25zdCB7IEJ1dHRvbiwgRGFzaGljb24sIFNwaW5uZXIgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IFJpY2hUZXh0IH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IEVkaXRFbGVtZW50ID0gKHsgcHJvcHMsIGluZGV4LCBoZWlnaHQsIG9uUmVtb3ZlSW1hZ2UgfSkgPT4ge1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuICBjb25zdCB7IGJsb2NzIH0gPSBhdHRyaWJ1dGVzO1xuICBjb25zdCB7IGltYWdlSWQsIGltYWdlIH0gPSBibG9jc1tpbmRleF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1jZWxsXCI+XG4gICAgICB7ISFpbWFnZUlkICYmICFpbWFnZSAmJiA8U3Bpbm5lciAvPn1cbiAgICAgIHtpbWFnZUlkICYmIGltYWdlID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZS5zb3VyY2VfdXJsfSBhbHQ9XCJcIiBzdHlsZT17eyBtYXhIZWlnaHQ6IGhlaWdodCB9fSAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlSW1hZ2UoaW5kZXgpfVxuICAgICAgICAgICAgdGl0bGU9e19fKFwicmVtb3ZlXCIsIFwiZ20tY2Fyb3VzZWxcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhc2hpY29uIGljb249XCJkaXNtaXNzXCIgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRFbGVtZW50O1xuIiwiY29uc3QgeyBQYW5lbEJvZHksIFRvZ2dsZUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IFBhbmVsID0gKHsgcHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuICBjb25zdCB7IHNob3dBcnJvdywgc2hvd0RvdCB9ID0gYXR0cmlidXRlcztcbiAgcmV0dXJuIChcbiAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICA8UGFuZWxCb2R5IHRpdGxlPXtfXyhcIlNldHRpbmdzXCIsIFwiZ20tY2Fyb3VzZWxcIil9PlxuICAgICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICAgIGxhYmVsPXtfXyhcIlNob3cgRG90XCIsIFwiZ20tY2Fyb3VzZWxcIil9XG4gICAgICAgICAgY2hlY2tlZD17c2hvd0RvdH1cbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dEb3Q6ICFzaG93RG90IH0pfVxuICAgICAgICAvPlxuICAgICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICAgIGxhYmVsPXtfXyhcIlNob3cgQXJyb3dcIiwgXCJnbS1jYXJvdXNlbFwiKX1cbiAgICAgICAgICBjaGVja2VkPXtzaG93QXJyb3d9XG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93QXJyb3c6ICFzaG93QXJyb3cgfSl9XG4gICAgICAgIC8+XG4gICAgICA8L1BhbmVsQm9keT5cbiAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFuZWw7XG4iLCJjb25zdCB7IFJpY2hUZXh0IH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5pbXBvcnQgU2F2ZUltYWdlIGZyb20gXCIuL3NhdmVJbWFnZVwiO1xuXG5pbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5jb25zdCBTYXZlRWxlbWVudCA9ICh7IHByb3BzLCBpbmRleCB9KSA9PiB7XG4gIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgYmxvY3MgfSA9IGF0dHJpYnV0ZXM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1jZWxsXCI+XG4gICAgICA8U2F2ZUltYWdlIGluZGV4PXtpbmRleH0gcHJvcHM9e3Byb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2F2ZUVsZW1lbnQ7XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5jb25zdCBTYXZlSW1hZ2UgPSAoeyBwcm9wcywgaW5kZXggfSkgPT4ge1xuICBjb25zdCB7IGJsb2NzLCBoZWlnaHQgfSA9IHByb3BzLmF0dHJpYnV0ZXM7XG4gIGNvbnN0IHsgaW1hZ2UgfSA9IGJsb2NzW2luZGV4XTtcbiAgaWYgKCFpbWFnZSkgcmV0dXJuIDw+PC8+O1xuICBjb25zdCB7IG1lZGlhX2RldGFpbHMsIGFsdF90ZXh0LCBzb3VyY2VfdXJsIH0gPSBpbWFnZTtcbiAgaWYgKCFtZWRpYV9kZXRhaWxzKSByZXR1cm4gPD48Lz47XG4gIGNvbnN0IHsgc2l6ZXMgfSA9IG1lZGlhX2RldGFpbHM7XG4gIGNvbnN0IHsgbGFyZ2UsIGZ1bGwgfSA9IHNpemVzO1xuICBjb25zdCBwaWMgPSBsYXJnZSB8fCBmdWxsO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17cGljID8gcGljLnNvdXJjZV91cmwgOiBzb3VyY2VfdXJsfVxuICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IGhlaWdodCB9fVxuICAgICAgICBhbHQ9e2FsdF90ZXh0fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmVJbWFnZTtcbiIsImltcG9ydCBTaWVtYSBmcm9tIFwic2llbWFcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcInRocm90dGxlLWRlYm91bmNlXCI7XG5pbXBvcnQgeyBSZXNpemFibGUgYXMgUmVzaXphYmxlQm94IH0gZnJvbSBcInJlLXJlc2l6YWJsZVwiO1xuY29uc3QgeyBCdXR0b24sIERhc2hpY29uIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IEVkaXRFbGVtZW50IGZyb20gXCIuL2NvbXBvbmVudHMvZWRpdEVsZW1lbnRcIjtcbmltcG9ydCBBZGRJbWFnZSBmcm9tIFwiLi9jb21wb25lbnRzL2FkZEltYWdlXCI7XG5pbXBvcnQgUGFuZWwgZnJvbSBcIi4vY29tcG9uZW50cy9wYW5lbFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbi8vIG1vZGVsIGZvciBibG9jXG5jb25zdCBtb2RlbCA9IHtcbiAgaW1hZ2U6IHVuZGVmaW5lZCxcbiAgaW1hZ2VJZDogdW5kZWZpbmVkXG59O1xuXG5jb25zdCBFZGl0ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIHRvZ2dsZVNlbGVjdGlvbiwgaXNTZWxlY3RlZCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgYmxvY3MsIGhlaWdodCwgc2hvd0RvdCwgc2hvd0Fycm93IH0gPSBhdHRyaWJ1dGVzO1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKDApO1xuICAvLyBjb250YWluZXIgY2Fyb3VzZWxcbiAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmKCk7XG4gIC8vIHJlZiB0byBjYXJvdXNlbFxuICBsZXQgY2Fyb3VzZWwgPSB1c2VSZWYoKTtcblxuICAvLyBkZXN0cm95IGNhcm91c2VsIG9uIGNoYW5nZSBlbGVtZW50XG4gIGNvbnN0IGRlc3Ryb3lDYXJvdXNlbCA9IChjYiA9ICgpID0+IHRydWUsIHJlc2V0RG9tID0gdHJ1ZSkgPT4ge1xuICAgIC8vIHJlbW92ZSBhbmQgcmVzdGUgZG9tXG4gICAgaWYgKGNhcm91c2VsLmN1cnJlbnQpIGNhcm91c2VsLmN1cnJlbnQuZGVzdHJveShyZXNldERvbSwgY2IpO1xuICB9O1xuXG4gIC8vIHJlIGluaXQgY2Fyb3VzZWwgd2l0aCBuZXcgZWxlbWVudFxuICBjb25zdCBpbml0Q2Fyb3VzZWwgPSAocmVtb3ZlID0gZmFsc2UsIGluZGV4ID0gMCkgPT4ge1xuICAgIGlmIChjYXJvdXNlbC5jdXJyZW50KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gdG90YWwgaXRlbXNcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gY29udGFpbmVyLmN1cnJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgICAgIC8vIGluaXQgbmV3IGNhcm91c2VsXG4gICAgICAgIGNhcm91c2VsLmN1cnJlbnQgPSBuZXcgU2llbWEoe1xuICAgICAgICAgIHNlbGVjdG9yOiBjb250YWluZXIuY3VycmVudCxcbiAgICAgICAgICBvbkNoYW5nZTogKCkgPT4gc2V0U2VsZWN0ZWQoY2Fyb3VzZWwuY3VycmVudC5jdXJyZW50U2xpZGUpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gaWYgcmVtb3ZlLCB0YWtlIGluZGV4IG9mIGJsb2MgcmVtb3ZlZCAtIDEgb3IgdGFrZSBsYXN0XG4gICAgICAgICAgY29uc3QgX2kgPSByZW1vdmUgPT09IHRydWUgPyBpbmRleCAtIDEgOiBsZW5ndGg7XG4gICAgICAgICAgY29uc3QgY3VycmVudCA9IF9pIDwgMCA/IDAgOiBfaTtcbiAgICAgICAgICBzZXRTZWxlY3RlZChjdXJyZW50KTtcbiAgICAgICAgICBjYXJvdXNlbC5jdXJyZW50LmdvVG8oY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGluaXQgY2Fyb3VzZWwgb24gbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBpbml0IGZpcnN0IGNhcm91c2VsXG4gICAgY2Fyb3VzZWwuY3VycmVudCA9IG5ldyBTaWVtYSh7XG4gICAgICBzZWxlY3RvcjogY29udGFpbmVyLmN1cnJlbnQsXG4gICAgICBvbkNoYW5nZTogKCkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZChjYXJvdXNlbC5jdXJyZW50LmN1cnJlbnRTbGlkZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyByZW1vdmUgaW1hZ2VcbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IGkgPT4ge1xuICAgIGRlc3Ryb3lDYXJvdXNlbCgoKSA9PiB7XG4gICAgICAvLyBkZWxldGUgYmxvYyBpbWFnZVxuICAgICAgY29uc3QgX2Jsb2NzID0geyAuLi5ibG9jcyB9O1xuICAgICAgZGVsZXRlIF9ibG9jc1tpXTtcbiAgICAgIC8vIHJlc2V0IGtleXNcbiAgICAgIGNvbnN0IG5ld0Jsb2NzID0ge307XG4gICAgICBPYmplY3Qua2V5cyhfYmxvY3MpLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICAgICAgbmV3QmxvY3NbaV0gPSBfYmxvY3NbZV07XG4gICAgICB9KTtcblxuICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIGJsb2NzOiBuZXdCbG9jc1xuICAgICAgfSk7XG4gICAgICBpbml0Q2Fyb3VzZWwodHJ1ZSwgaSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYXJyb3dIYW5kbGVyID0gKG5leHQgPSB0cnVlKSA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9IGNhcm91c2VsLmN1cnJlbnQuY3VycmVudFNsaWRlO1xuICAgIGNhcm91c2VsLmN1cnJlbnQuZ29UbyhuZXh0ID8gY3VycmVudCArIDEgOiBjdXJyZW50IC0gMSk7XG4gIH07XG4gIGNvbnN0IGJsb2NrS2V5cyA9IE9iamVjdC5rZXlzKGJsb2NzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWJsb2MtZWRpdFwiPlxuICAgICAgPFBhbmVsIHByb3BzPXtwcm9wc30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtYmxvYy1jb250YWluZXJcIj5cbiAgICAgICAgPFJlc2l6YWJsZUJveFxuICAgICAgICAgIHNpemU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgfX1cbiAgICAgICAgICBtaW5XaWR0aD17XCIxMDAlXCJ9XG4gICAgICAgICAgbWF4V2lkdGg9e1wiMTAwJVwifVxuICAgICAgICAgIG1pbkhlaWdodD17XCIxMDAlXCJ9XG4gICAgICAgICAgZW5hYmxlPXt7XG4gICAgICAgICAgICB0b3A6IGZhbHNlLFxuICAgICAgICAgICAgcmlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgYm90dG9tOiB0cnVlLFxuICAgICAgICAgICAgbGVmdDogZmFsc2UsXG4gICAgICAgICAgICB0b3BSaWdodDogZmFsc2UsXG4gICAgICAgICAgICBib3R0b21SaWdodDogZmFsc2UsXG4gICAgICAgICAgICBib3R0b21MZWZ0OiBmYWxzZSxcbiAgICAgICAgICAgIHRvcExlZnQ6IGZhbHNlXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJlc2l6ZVN0YXJ0PXsoKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVTZWxlY3Rpb24oZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25SZXNpemU9e2RlYm91bmNlKDUwLCAoZXZlbnQsIGRpcmVjdGlvbiwgZWx0LCBkZWx0YSkgPT4ge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgIGhlaWdodDogcGFyc2VJbnQoaGVpZ2h0ICsgZGVsdGEuaGVpZ2h0LCAxMClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIG9uUmVzaXplU3RvcD17KGV2ZW50LCBkaXJlY3Rpb24sIGVsdCwgZGVsdGEpID0+IHtcbiAgICAgICAgICAgIGNhcm91c2VsLmN1cnJlbnQucmVzaXplSGFuZGxlcigpO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgIGhlaWdodDogcGFyc2VJbnQoaGVpZ2h0ICsgZGVsdGEuaGVpZ2h0LCAxMClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG9nZ2xlU2VsZWN0aW9uKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWNvbnRhaW5lclwiIHJlZj17Y29udGFpbmVyfT5cbiAgICAgICAgICAgIHtibG9ja0tleXMubWFwKGIgPT4gKFxuICAgICAgICAgICAgICA8RWRpdEVsZW1lbnRcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2Ake2hlaWdodH1weGB9XG4gICAgICAgICAgICAgICAgb25SZW1vdmVJbWFnZT17b25SZW1vdmVJbWFnZX1cbiAgICAgICAgICAgICAgICBwcm9wcz17cHJvcHN9XG4gICAgICAgICAgICAgICAga2V5PXtgJHtibG9jc1tiXS5pbWFnZUlkfSAke2J9YH1cbiAgICAgICAgICAgICAgICBpbmRleD17Yn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtpc1NlbGVjdGVkICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiBgJHtoZWlnaHR9cHhgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc2l6YWJsZS1oYW5kbGVcIlxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUmVzaXphYmxlQm94PlxuICAgICAgICB7c2hvd0Fycm93ID09PSB0cnVlICYmIGJsb2NrS2V5cy5sZW5ndGggPiAxID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtYXJyb3ctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFycm93SGFuZGxlcihmYWxzZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWFycm93LXByZXZpb3VzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+e19fKFwicHJldmlvdXNcIiwgXCJnbS1jYXJvdXNlbFwiKX08L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YXJyb3dIYW5kbGVyfSBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1hcnJvdy1uZXh0XCI+XG4gICAgICAgICAgICAgIDxzcGFuPntfXyhcIm5leHRcIiwgXCJnbS1jYXJvdXNlbFwiKX08L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtzaG93RG90ID09PSB0cnVlICYmIGJsb2NrS2V5cy5sZW5ndGggPiAxID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtZG90LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2Jsb2NrS2V5cy5tYXAoYiA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtgZG90LSR7Yn1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ20tY2Fyb3VzZWwtZG90ICR7XG4gICAgICAgICAgICAgICAgICAgICtzZWxlY3RlZCA9PT0gK2IgPyBcImdtLWNhcm91c2VsLWRvdC1jdXJyZW50XCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhcm91c2VsLmN1cnJlbnQuZ29UbyhiKX1cbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtYWRkLWJsb2NcIj5cbiAgICAgICAgPEFkZEltYWdlXG4gICAgICAgICAgaW5pdENhcm91c2VsPXtpbml0Q2Fyb3VzZWx9XG4gICAgICAgICAgZGVzdHJveUNhcm91c2VsPXtkZXN0cm95Q2Fyb3VzZWx9XG4gICAgICAgICAgcHJvcHM9e3Byb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IGVkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IHNhdmUgZnJvbSBcIi4vc2F2ZVwiO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSBcIi4vYXR0cmlidXRlc1wiO1xuXG5jb25zdCBpY29uZSA9ICgpID0+IChcbiAgPD5cbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMjJcIlxuICAgICAgaGVpZ2h0PVwiMjJcIlxuICAgICAgdmlld0JveD1cIjAgMCAyMiAyMlwiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zLDMgTDMsMi41IEMzLDIuMjIzODU3NjMgMy4yMjM4NTc2MywyIDMuNSwyIEw3LDIgTDcsMC41IEM3LDAuMjIzODU3NjMgNy4yMjM4NTc2MywwIDcuNSwwIEwxOS41LDAgQzE5Ljc3NjE0MjQsMCAyMCwwLjIyMzg1NzYzIDIwLDAuNSBMMjAsMTIuNSBDMjAsMTIuNzc2MTQyNCAxOS43NzYxNDI0LDEzIDE5LjUsMTMgTDcuNSwxMyBDNy4yMjM4NTc2MywxMyA3LDEyLjc3NjE0MjQgNywxMi41IEw3LDExIEwzLjUsMTEgQzMuMjIzODU3NjMsMTEgMywxMC43NzYxNDI0IDMsMTAuNSBMMywxMCBMMC41LDEwIEMwLjIyMzg1NzYzLDEwIDAsOS43NzYxNDI0IDAsOS41IEwwLDMuNSBDMCwzLjIyMzg1NzYzIDAuMjIzODU3NjMsMyAwLjUsMyBMMywzIFogTTMsNCBMMSw0IEwxLDkgTDMsOSBMMyw0IFogTTcsMTAgTDcsMyBMNCwzIEw0LDEwIEw3LDEwIFogTTgsMTIgTDE5LDEyIEwxOSwxIEw4LDEgTDgsMTIgWlwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxIDQpXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIDwvPlxuKTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoXCJnbS9jYXJvdXNlbFwiLCB7XG4gIHRpdGxlOiBfXyhcIkJsb2NrIGNhcm91c2VsXCIsIFwiZ20tY2Fyb3VzZWxcIiksXG4gIGRlc2NyaXB0aW9uOiBfXyhcImNhcm91c2VsIGZvciBzaG93IHBob3Rvc1wiLCBcImdtLWNhcm91c2VsXCIpLFxuICBpY29uOiBpY29uZSxcbiAgY2F0ZWdvcnk6IFwidGhlbWUtYmxvY2tzXCIsXG4gIGF0dHJpYnV0ZXMsXG4gIGVkaXQsXG4gIHNhdmVcbn0pO1xuIiwiLy8gY29uc3QgeyBSaWNoVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuaW1wb3J0IFNhdmVFbGVtZW50IGZyb20gXCIuL2NvbXBvbmVudHMvc2F2ZUVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5jb25zdCBTYXZlID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGJsb2NzLCBzaG93QXJyb3csIHNob3dEb3QgfSA9IHByb3BzLmF0dHJpYnV0ZXM7XG4gIGNvbnN0IGJsb2NrS2V5cyA9IE9iamVjdC5rZXlzKGJsb2NzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1ibG9jLWNvbnRhaW5lclwiXG4gICAgICBkYXRhLWRvdD17c2hvd0RvdH1cbiAgICAgIGRhdGEtYXJyb3c9e3Nob3dBcnJvd31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWNvbnRhaW5lclwiPlxuICAgICAgICB7T2JqZWN0LmtleXMoYmxvY3MpLm1hcChiID0+IChcbiAgICAgICAgICA8U2F2ZUVsZW1lbnQgcHJvcHM9e3Byb3BzfSBrZXk9e2J9IGluZGV4PXtifSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3dBcnJvdyA9PT0gdHJ1ZSAmJiBibG9ja0tleXMubGVuZ3RoID4gMSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1hcnJvdy1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWFycm93LXByZXZpb3VzXCI+XG4gICAgICAgICAgICA8c3Bhbj57X18oXCJwcmV2aW91c1wiLCBcImdtLWNhcm91c2VsXCIpfTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWFycm93LW5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuPntfXyhcIm5leHRcIiwgXCJnbS1jYXJvdXNlbFwiKX08L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7c2hvd0RvdCA9PT0gdHJ1ZSAmJiBibG9ja0tleXMubGVuZ3RoID4gMSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1kb3QtY29udGFpbmVyXCI+XG4gICAgICAgICAge09iamVjdC5rZXlzKGJsb2NzKS5tYXAoYiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1kb3RcIj48L2Rpdj47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYXZlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJ3cFwiXVtcImVsZW1lbnRcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9