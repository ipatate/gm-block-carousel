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
    type: Number
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
    alt: ""
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
/* harmony import */ var _components_editElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/editElement */ "./src/components/editElement.jsx");
/* harmony import */ var _components_addImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/addImage */ "./src/components/addImage.jsx");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_6__);




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
      setAttributes = props.setAttributes;
  var blocs = attributes.blocs;

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

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-bloc-edit"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-bloc-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-container",
    ref: container
  }, Object.keys(blocs).map(function (b) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_editElement__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onRemoveImage: onRemoveImage,
      props: props,
      key: "".concat(blocs[b].imageId, " ").concat(b),
      index: b
    });
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-dot-container"
  }, Object.keys(blocs).map(function (b) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      index: "dot-".concat(b),
      className: "gm-carousel-dot ".concat(+selected === +b ? "gm-carousel-dot-current" : ""),
      onClick: function onClick() {
        return carousel.current.goTo(b);
      }
    });
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "gm-carousel-add-bloc"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_addImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    initCarousel: initCarousel,
    destroyCarousel: destroyCarousel,
    props: props
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/icone.svg":
/*!***********************!*\
  !*** ./src/icone.svg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M4 7v-.5a.5.5 0 01.5-.5H8V4.5a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v12a.5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5V15H4.5a.5.5 0 01-.5-.5V14H1.5a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5H4zm0 1H2v5h2V8zm4 6V7H5v7h3zm1 2h11V5H9v11z"
});

function SvgIcone(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 22,
    height: 22
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgIcone);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icone.svg */ "./src/icone.svg");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.jsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.jsx");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;




registerBlockType("gm/carousel", {
  title: "Block carousel",
  description: "carousel for show photos",
  icon: _icone_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpZW1hL2Rpc3Qvc2llbWEubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lZGl0RWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2F2ZUVsZW1lbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NhdmVJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9pY29uZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXZlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZWUwMSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1widGhpc1wiOltcIndwXCIsXCJlbGVtZW50XCJdfSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1widGhpc1wiOlwiUmVhY3RcIn0iXSwibmFtZXMiOlsiYmxvY3MiLCJ0eXBlIiwiZGVmYXVsdCIsImhlaWdodCIsIk51bWJlciIsIndwIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsIkRhc2hpY29uIiwiU3Bpbm5lciIsInVzZUVmZmVjdCIsImVsZW1lbnQiLCJibG9ja0VkaXRvciIsIk1lZGlhVXBsb2FkIiwiTWVkaWFVcGxvYWRDaGVjayIsInVzZVNlbGVjdCIsImRhdGEiLCJfXyIsImkxOG4iLCJBTExPV0VEX01FRElBX1RZUEVTIiwiQWRkSW1hZ2UiLCJwcm9wcyIsImluaXRDYXJvdXNlbCIsImRlc3Ryb3lDYXJvdXNlbCIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGVzIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsImluZGV4IiwiaW1hZ2UiLCJzZWxlY3QiLCJuZXdQaWMiLCJmb3JFYWNoIiwiYiIsIm5ld0ltYWdlIiwiZ2V0TWVkaWEiLCJpbWFnZUlkIiwiaWQiLCJfaW5kZXgiLCJvblVwZGF0ZUltYWdlIiwib3BlbiIsIlJpY2hUZXh0IiwiRWRpdEVsZW1lbnQiLCJvblJlbW92ZUltYWdlIiwic291cmNlX3VybCIsIlNhdmVFbGVtZW50IiwiU2F2ZUltYWdlIiwibWVkaWFfZGV0YWlscyIsImFsdF90ZXh0Iiwic2l6ZXMiLCJsYXJnZSIsImZ1bGwiLCJwaWMiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIm1vZGVsIiwidW5kZWZpbmVkIiwiRWRpdCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJjb250YWluZXIiLCJjYXJvdXNlbCIsImNiIiwicmVzZXREb20iLCJjdXJyZW50IiwiZGVzdHJveSIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJjaGlsZE5vZGVzIiwiU2llbWEiLCJzZWxlY3RvciIsIm9uQ2hhbmdlIiwiY3VycmVudFNsaWRlIiwiX2kiLCJnb1RvIiwiaSIsIl9ibG9jcyIsIm5ld0Jsb2NzIiwiZSIsIm1hcCIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwidGl0bGUiLCJk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O0FBTS9CZ0UsTUFBSSxFQUFKQSw2Q0FOK0I7QUFPL0JDLE1BQUksRUFBSkEsNkNBQUlBO0FBUDJCLENBQWhCLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNQUS9DLFEsR0FBYXJDLEVBQUUsQ0FBQ08sVyxDQUFoQjhCLFE7QUFDUjtBQUVBOztBQUVBLElBQU1nRCxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFBckUsS0FBSyxFQUFJO0FBQUEsTUFDWnJCLEtBRFksR0FDRnFCLEtBQUssQ0FBQ0csVUFESixDQUNaeEIsS0FEWTtBQUVwQixTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRzJCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZNUIsS0FBWixFQUFtQmdGLEdBQW5CLENBQXVCLFVBQUE5QyxDQUFDO0FBQUEsV0FDdkIseUVBQUMsK0RBQUQ7QUFBYSxXQUFLLEVBQUViLEtBQXBCO0FBQTJCLFNBQUcsRUFBRWEsQ0FBaEM7QUFBbUMsV0FBSyxFQUFFQTtBQUExQyxNQUR1QjtBQUFBLEdBQXhCLENBREgsQ0FERjtBQU9ELENBVEQ7O0FBV2V3RCxtRUFBZixFOzs7Ozs7Ozs7OztBQ2hCQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLHdDQUF3QyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQXZELGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICghKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIlNpZW1hXCIsW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5TaWVtYT10KCk6ZS5TaWVtYT10KCl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKGlbcl0pcmV0dXJuIGlbcl0uZXhwb3J0czt2YXIgbj1pW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyx0KSxuLmw9ITAsbi5leHBvcnRzfXZhciBpPXt9O3JldHVybiB0Lm09ZSx0LmM9aSx0LmQ9ZnVuY3Rpb24oZSxpLHIpe3QubyhlLGkpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6cn0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIGk9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChpLFwiYVwiLGkpLGl9LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiXCIsdCh0LnM9MCl9KFtmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0scz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIHI9dFtpXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LGkscil7cmV0dXJuIGkmJmUodC5wcm90b3R5cGUsaSksciYmZSh0LHIpLHR9fSgpLGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBpPXRoaXM7aWYocih0aGlzLGUpLHRoaXMuY29uZmlnPWUubWVyZ2VTZXR0aW5ncyh0KSx0aGlzLnNlbGVjdG9yPVwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5zZWxlY3Rvcj9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29uZmlnLnNlbGVjdG9yKTp0aGlzLmNvbmZpZy5zZWxlY3RvcixudWxsPT09dGhpcy5zZWxlY3Rvcil0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd3Jvbmcgd2l0aCB5b3VyIHNlbGVjdG9yIPCfmK1cIik7dGhpcy5yZXNvbHZlU2xpZGVzTnVtYmVyKCksdGhpcy5zZWxlY3RvcldpZHRoPXRoaXMuc2VsZWN0b3Iub2Zmc2V0V2lkdGgsdGhpcy5pbm5lckVsZW1lbnRzPVtdLnNsaWNlLmNhbGwodGhpcy5zZWxlY3Rvci5jaGlsZHJlbiksdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jb25maWcubG9vcD90aGlzLmNvbmZpZy5zdGFydEluZGV4JXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg6TWF0aC5tYXgoMCxNYXRoLm1pbih0aGlzLmNvbmZpZy5zdGFydEluZGV4LHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSksdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eT1lLndlYmtpdE9yTm90KCksW1wicmVzaXplSGFuZGxlclwiLFwidG91Y2hzdGFydEhhbmRsZXJcIixcInRvdWNoZW5kSGFuZGxlclwiLFwidG91Y2htb3ZlSGFuZGxlclwiLFwibW91c2Vkb3duSGFuZGxlclwiLFwibW91c2V1cEhhbmRsZXJcIixcIm1vdXNlbGVhdmVIYW5kbGVyXCIsXCJtb3VzZW1vdmVIYW5kbGVyXCIsXCJjbGlja0hhbmRsZXJcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtpW2VdPWlbZV0uYmluZChpKX0pLHRoaXMuaW5pdCgpfXJldHVybiBzKGUsW3trZXk6XCJhdHRhY2hFdmVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVIYW5kbGVyKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZHJhZz17c3RhcnRYOjAsZW5kWDowLHN0YXJ0WTowLGxldEl0R286bnVsbCxwcmV2ZW50Q2xpY2s6ITF9LHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLnRvdWNoc3RhcnRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHRoaXMudG91Y2hlbmRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLnRvdWNobW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMubW91c2Vkb3duSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMubW91c2V1cEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdXNlbGVhdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm1vdXNlbW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5jbGlja0hhbmRsZXIpKX19LHtrZXk6XCJkZXRhY2hFdmVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKX19LHtrZXk6XCJpbml0XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmF0dGFjaEV2ZW50cygpLHRoaXMuc2VsZWN0b3Iuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIix0aGlzLnNlbGVjdG9yLnN0eWxlLmRpcmVjdGlvbj10aGlzLmNvbmZpZy5ydGw/XCJydGxcIjpcImx0clwiLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHRoaXMuY29uZmlnLm9uSW5pdC5jYWxsKHRoaXMpfX0se2tleTpcImJ1aWxkU2xpZGVyRnJhbWVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UsdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMip0aGlzLnBlclBhZ2U6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDt0aGlzLnNsaWRlckZyYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53aWR0aD1lKnQrXCJweFwiLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuY29uZmlnLmRyYWdnYWJsZSYmKHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiXCIpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtpZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgcj10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKXt2YXIgbj10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tyXS5jbG9uZU5vZGUoITApKTtpLmFwcGVuZENoaWxkKG4pfWZvcih2YXIgcz0wO3M8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtzKyspe3ZhciBsPXRoaXMuYnVpbGRTbGlkZXJGcmFtZUl0ZW0odGhpcy5pbm5lckVsZW1lbnRzW3NdKTtpLmFwcGVuZENoaWxkKGwpfWlmKHRoaXMuY29uZmlnLmxvb3ApZm9yKHZhciBvPTA7bzx0aGlzLnBlclBhZ2U7bysrKXt2YXIgYT10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tvXS5jbG9uZU5vZGUoITApKTtpLmFwcGVuZENoaWxkKGEpfXRoaXMuc2xpZGVyRnJhbWUuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5pbm5lckhUTUw9XCJcIix0aGlzLnNlbGVjdG9yLmFwcGVuZENoaWxkKHRoaXMuc2xpZGVyRnJhbWUpLHRoaXMuc2xpZGVUb0N1cnJlbnQoKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lSXRlbVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHQuc3R5bGUuY3NzRmxvYXQ9dGhpcy5jb25maWcucnRsP1wicmlnaHRcIjpcImxlZnRcIix0LnN0eWxlLmZsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS53aWR0aD0odGhpcy5jb25maWcubG9vcD8xMDAvKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMip0aGlzLnBlclBhZ2UpOjEwMC90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKStcIiVcIix0LmFwcGVuZENoaWxkKGUpLHR9fSx7a2V5OlwicmVzb2x2ZVNsaWRlc051bWJlclwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYoXCJudW1iZXJcIj09dHlwZW9mIHRoaXMuY29uZmlnLnBlclBhZ2UpdGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2U7ZWxzZSBpZihcIm9iamVjdFwiPT09bih0aGlzLmNvbmZpZy5wZXJQYWdlKSl7dGhpcy5wZXJQYWdlPTE7Zm9yKHZhciBlIGluIHRoaXMuY29uZmlnLnBlclBhZ2Upd2luZG93LmlubmVyV2lkdGg+PWUmJih0aGlzLnBlclBhZ2U9dGhpcy5jb25maWcucGVyUGFnZVtlXSl9fX0se2tleTpcInByZXZcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXToxLHQ9YXJndW1lbnRzWzFdO2lmKCEodGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlKSl7dmFyIGk9dGhpcy5jdXJyZW50U2xpZGU7aWYodGhpcy5jb25maWcubG9vcCl7aWYodGhpcy5jdXJyZW50U2xpZGUtZTwwKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXItZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1heCh0aGlzLmN1cnJlbnRTbGlkZS1lLDApO2khPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQodGhpcy5jb25maWcubG9vcCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJuZXh0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlK2U+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2Upe3RoaXMuZGlzYWJsZVRyYW5zaXRpb24oKTt2YXIgcj10aGlzLmN1cnJlbnRTbGlkZS10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLG49dGhpcy5wZXJQYWdlLHM9cituLGw9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpzKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxvPXRoaXMuY29uZmlnLmRyYWdnYWJsZT90aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYOjA7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyhsK28pK1wicHgsIDAsIDApXCIsdGhpcy5jdXJyZW50U2xpZGU9citlfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jdXJyZW50U2xpZGUrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPU1hdGgubWluKHRoaXMuY3VycmVudFNsaWRlK2UsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpO2khPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQodGhpcy5jb25maWcubG9vcCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJkaXNhYmxlVHJhbnNpdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZW5hYmxlVHJhbnNpdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIFwiK3RoaXMuY29uZmlnLmR1cmF0aW9uK1wibXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZ319LHtrZXk6XCJnb1RvXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO3RoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/ZSV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWluKE1hdGgubWF4KGUsMCksdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLGkhPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQoKSx0aGlzLmNvbmZpZy5vbkNoYW5nZS5jYWxsKHRoaXMpLHQmJnQuY2FsbCh0aGlzKSl9fX0se2tleTpcInNsaWRlVG9DdXJyZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxpPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlOnRoaXMuY3VycmVudFNsaWRlLHI9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSppKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKTtlP3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3QuZW5hYmxlVHJhbnNpdGlvbigpLHQuc2xpZGVyRnJhbWUuc3R5bGVbdC50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIityK1wicHgsIDAsIDApXCJ9KX0pOnRoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIityK1wicHgsIDAsIDApXCJ9fSx7a2V5OlwidXBkYXRlQWZ0ZXJEcmFnXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT0odGhpcy5jb25maWcucnRsPy0xOjEpKih0aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYKSx0PU1hdGguYWJzKGUpLGk9dGhpcy5jb25maWcubXVsdGlwbGVEcmFnP01hdGguY2VpbCh0Lyh0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSk6MSxyPWU+MCYmdGhpcy5jdXJyZW50U2xpZGUtaTwwLG49ZTwwJiZ0aGlzLmN1cnJlbnRTbGlkZStpPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlO2U+MCYmdD50aGlzLmNvbmZpZy50aHJlc2hvbGQmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg+dGhpcy5wZXJQYWdlP3RoaXMucHJldihpKTplPDAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZSYmdGhpcy5uZXh0KGkpLHRoaXMuc2xpZGVUb0N1cnJlbnQocnx8bil9fSx7a2V5OlwicmVzaXplSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5yZXNvbHZlU2xpZGVzTnVtYmVyKCksdGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgmJih0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2U/MDp0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSksdGhpcy5zZWxlY3RvcldpZHRoPXRoaXMuc2VsZWN0b3Iub2Zmc2V0V2lkdGgsdGhpcy5idWlsZFNsaWRlckZyYW1lKCl9fSx7a2V5OlwiY2xlYXJEcmFnXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOnRoaXMuZHJhZy5wcmV2ZW50Q2xpY2t9fX0se2tleTpcInRvdWNoc3RhcnRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7LTEhPT1bXCJURVhUQVJFQVwiLFwiT1BUSU9OXCIsXCJJTlBVVFwiLFwiU0VMRUNUXCJdLmluZGV4T2YoZS50YXJnZXQubm9kZU5hbWUpfHwoZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS50b3VjaGVzWzBdLnBhZ2VYLHRoaXMuZHJhZy5zdGFydFk9ZS50b3VjaGVzWzBdLnBhZ2VZKX19LHtrZXk6XCJ0b3VjaGVuZEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy5kcmFnLmVuZFgmJnRoaXMudXBkYXRlQWZ0ZXJEcmFnKCksdGhpcy5jbGVhckRyYWcoKX19LHtrZXk6XCJ0b3VjaG1vdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZS5zdG9wUHJvcGFnYXRpb24oKSxudWxsPT09dGhpcy5kcmFnLmxldEl0R28mJih0aGlzLmRyYWcubGV0SXRHbz1NYXRoLmFicyh0aGlzLmRyYWcuc3RhcnRZLWUudG91Y2hlc1swXS5wYWdlWSk8TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WC1lLnRvdWNoZXNbMF0ucGFnZVgpKSx0aGlzLnBvaW50ZXJEb3duJiZ0aGlzLmRyYWcubGV0SXRHbyl7ZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZHJhZy5lbmRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZzt2YXIgdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxpPXQqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLHI9dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCxuPXRoaXMuY29uZmlnLnJ0bD9pK3I6aS1yO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisodGhpcy5jb25maWcucnRsPzE6LTEpKm4rXCJweCwgMCwgMClcIn19fSx7a2V5OlwibW91c2Vkb3duSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITAsdGhpcy5kcmFnLnN0YXJ0WD1lLnBhZ2VYKX19LHtrZXk6XCJtb3VzZXVwSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwibW91c2Vtb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSx0aGlzLnBvaW50ZXJEb3duKXtcIkFcIj09PWUudGFyZ2V0Lm5vZGVOYW1lJiYodGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMCksdGhpcy5kcmFnLmVuZFg9ZS5wYWdlWCx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYmJpbmdcIix0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZzt2YXIgdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxpPXQqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLHI9dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCxuPXRoaXMuY29uZmlnLnJ0bD9pK3I6aS1yO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisodGhpcy5jb25maWcucnRsPzE6LTEpKm4rXCJweCwgMCwgMClcIn19fSx7a2V5OlwibW91c2VsZWF2ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnBvaW50ZXJEb3duJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMSx0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCkpfX0se2tleTpcImNsaWNrSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuZHJhZy5wcmV2ZW50Q2xpY2smJmUucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcucHJldmVudENsaWNrPSExfX0se2tleTpcInJlbW92ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoZTwwfHxlPj10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkl0ZW0gdG8gcmVtb3ZlIGRvZXNuJ3QgZXhpc3Qg8J+YrVwiKTt2YXIgaT1lPHRoaXMuY3VycmVudFNsaWRlLHI9dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlLTE9PT1lOyhpfHxyKSYmdGhpcy5jdXJyZW50U2xpZGUtLSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKGUsMSksdGhpcy5idWlsZFNsaWRlckZyYW1lKCksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImluc2VydFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxpKXtpZih0PDB8fHQ+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsxKXRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBpbnNldCBpdCBhdCB0aGlzIGluZGV4IPCfmK1cIik7aWYoLTEhPT10aGlzLmlubmVyRWxlbWVudHMuaW5kZXhPZihlKSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2FtZSBpdGVtIGluIGEgY2Fyb3VzZWw/IFJlYWxseT8gTm9wZSDwn5itXCIpO3ZhciByPXQ8PXRoaXMuY3VycmVudFNsaWRlPjAmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5jdXJyZW50U2xpZGU9cj90aGlzLmN1cnJlbnRTbGlkZSsxOnRoaXMuY3VycmVudFNsaWRlLHRoaXMuaW5uZXJFbGVtZW50cy5zcGxpY2UodCwwLGUpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLGkmJmkuY2FsbCh0aGlzKX19LHtrZXk6XCJwcmVwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLDApLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJhcHBlbmRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuaW5zZXJ0KGUsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsxKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXSx0PWFyZ3VtZW50c1sxXTtpZih0aGlzLmRldGFjaEV2ZW50cygpLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiYXV0b1wiLGUpe2Zvcih2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscj0wO3I8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtyKyspaS5hcHBlbmRDaGlsZCh0aGlzLmlubmVyRWxlbWVudHNbcl0pO3RoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZChpKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpfXQmJnQuY2FsbCh0aGlzKX19XSxbe2tleTpcIm1lcmdlU2V0dGluZ3NcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD17c2VsZWN0b3I6XCIuc2llbWFcIixkdXJhdGlvbjoyMDAsZWFzaW5nOlwiZWFzZS1vdXRcIixwZXJQYWdlOjEsc3RhcnRJbmRleDowLGRyYWdnYWJsZTohMCxtdWx0aXBsZURyYWc6ITAsdGhyZXNob2xkOjIwLGxvb3A6ITEscnRsOiExLG9uSW5pdDpmdW5jdGlvbigpe30sb25DaGFuZ2U6ZnVuY3Rpb24oKXt9fSxpPWU7Zm9yKHZhciByIGluIGkpdFtyXT1pW3JdO3JldHVybiB0fX0se2tleTpcIndlYmtpdE9yTm90XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybT9cInRyYW5zZm9ybVwiOlwiV2Via2l0VHJhbnNmb3JtXCJ9fV0pLGV9KCk7dC5kZWZhdWx0PWwsZS5leHBvcnRzPXQuZGVmYXVsdH1dKX0pOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYmxvY3M6IHtcbiAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgIGRlZmF1bHQ6IHt9XG4gIH0sXG4gIGhlaWdodDoge1xuICAgIHR5cGU6IE51bWJlclxuICB9XG59O1xuIiwiY29uc3QgeyBCdXR0b24sIERhc2hpY29uLCBTcGlubmVyIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IE1lZGlhVXBsb2FkLCBNZWRpYVVwbG9hZENoZWNrIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgdXNlU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFtcImltYWdlXCJdO1xuXG5jb25zdCBBZGRJbWFnZSA9ICh7IHByb3BzLCBpbml0Q2Fyb3VzZWwsIGRlc3Ryb3lDYXJvdXNlbCB9KSA9PiB7XG4gIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgYmxvY3MgfSA9IGF0dHJpYnV0ZXM7XG4gIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKGJsb2NzKS5sZW5ndGg7XG4gIGNvbnN0IGluZGV4ID0gbGVuZ3RoO1xuICAvLyBnZXQgdGhlIGltYWdlIGluZm8gZm9yIG5ldyBpbWFnZVxuICBjb25zdCBpbWFnZSA9IHVzZVNlbGVjdChcbiAgICBzZWxlY3QgPT4ge1xuICAgICAgbGV0IG5ld1BpYyA9IG51bGw7XG4gICAgICAvLyBzZWFyY2ggaW1hZ2Ugd2l0aCBuZXdJbWFnZSA9PT0gdHJ1ZVxuICAgICAgT2JqZWN0LmtleXMoYmxvY3MpLmZvckVhY2goYiA9PiB7XG4gICAgICAgIGlmIChibG9jc1tiXS5uZXdJbWFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG5ld1BpYyA9IGJsb2NzW2JdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHsgZ2V0TWVkaWEgfSA9IHNlbGVjdChcImNvcmVcIik7XG4gICAgICAvLyBnZXQgbWVkaWEgZm9yIHRoaXMgbmV3IHBpYyBhZGRlZFxuICAgICAgcmV0dXJuIG5ld1BpYyA/IGdldE1lZGlhKG5ld1BpYy5pbWFnZUlkKSA6IHt9O1xuICAgIH0sXG4gICAgW2Jsb2NzXVxuICApO1xuICAvLyB1cGRhdGUgaW1hZ2UgaW5mbyB0byBhdHRyaWJ1dGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYmxvY3MpO1xuICAgIGlmIChpbWFnZSAmJiBpbWFnZS5pZCkge1xuICAgICAgbGV0IF9pbmRleCA9IG51bGw7XG4gICAgICAvLyBzZWFyY2ggaW5mZXggZm9yIG5ld0ltYWdlID09PSB0cnVlXG4gICAgICBrZXlzLmZvckVhY2goYiA9PiB7XG4gICAgICAgIGlmIChibG9jc1tiXS5uZXdJbWFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIF9pbmRleCA9IGI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKF9pbmRleCkge1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICBibG9jczoge1xuICAgICAgICAgICAgLi4uYmxvY3MsXG4gICAgICAgICAgICAuLi57IFtfaW5kZXhdOiB7IC4uLmJsb2NzW19pbmRleF0sIGltYWdlLCBuZXdJbWFnZTogZmFsc2UgfSB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpbWFnZV0pO1xuXG4gIC8qKlxuICAgKiBhZGQgbmV3IGltYWdlXG4gICAqIEBwYXJhbSB7fSBpbWFnZVxuICAgKi9cbiAgY29uc3Qgb25VcGRhdGVJbWFnZSA9IGltYWdlID0+IHtcbiAgICBkZXN0cm95Q2Fyb3VzZWwoKCkgPT4ge1xuICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIGJsb2NzOiB7XG4gICAgICAgICAgLi4uYmxvY3MsXG4gICAgICAgICAgLi4ue1xuICAgICAgICAgICAgW2luZGV4XToge1xuICAgICAgICAgICAgICAuLi5ibG9jc1tpbmRleF0sXG4gICAgICAgICAgICAgIGltYWdlSWQ6IGltYWdlLmlkLFxuICAgICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgICAgLy8gc2V0IHRvIHRydWUgZm9yIGdldCBtZWRpYSBhZnRlclxuICAgICAgICAgICAgICBuZXdJbWFnZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpbml0Q2Fyb3VzZWwoKTtcbiAgICB9LCB0cnVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lZGlhVXBsb2FkQ2hlY2s+XG4gICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgIHRpdGxlPXtfXyhcIkltYWdlXCIsIFwiXCIpfVxuICAgICAgICAgIG9uU2VsZWN0PXtvblVwZGF0ZUltYWdlfVxuICAgICAgICAgIGFsbG93ZWRUeXBlcz17QUxMT1dFRF9NRURJQV9UWVBFU31cbiAgICAgICAgICB2YWx1ZT17XCJcIn1cbiAgICAgICAgICByZW5kZXI9eyh7IG9wZW4gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW59XG4gICAgICAgICAgICAgICAgdGl0bGU9e19fKFwiYWRkIGltYWdlXCIsIFwiZ20tYmxvY1wiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJ1dHRvbiBlZGl0b3ItcG9zdC1wcmV2aWV3IGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLWxhcmdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtfXyhcImFkZCBpbWFnZVwiLCBcImdtLWJsb2NcIil9XG4gICAgICAgICAgICAgICAge1wiICBcIn1cbiAgICAgICAgICAgICAgICA8RGFzaGljb24gaWNvbj1cInBsdXMtYWx0XCIgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L01lZGlhVXBsb2FkQ2hlY2s+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRJbWFnZTtcbiIsImNvbnN0IHsgQnV0dG9uLCBEYXNoaWNvbiwgU3Bpbm5lciB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgUmljaFRleHQgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuY29uc3QgRWRpdEVsZW1lbnQgPSAoeyBwcm9wcywgaW5kZXgsIG9uUmVtb3ZlSW1hZ2UgfSkgPT4ge1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuICBjb25zdCB7IGJsb2NzIH0gPSBhdHRyaWJ1dGVzO1xuICBjb25zdCB7IGltYWdlSWQsIGltYWdlIH0gPSBibG9jc1tpbmRleF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1jZWxsXCI+XG4gICAgICB7ISFpbWFnZUlkICYmICFpbWFnZSAmJiA8U3Bpbm5lciAvPn1cbiAgICAgIHtpbWFnZUlkICYmIGltYWdlID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZS5zb3VyY2VfdXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlSW1hZ2UoaW5kZXgpfVxuICAgICAgICAgICAgdGl0bGU9e19fKFwicmVtb3ZlXCIsIFwiZ20tYmxvY1wiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGFzaGljb24gaWNvbj1cImRpc21pc3NcIiAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdEVsZW1lbnQ7XG4iLCJjb25zdCB7IFJpY2hUZXh0IH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5pbXBvcnQgU2F2ZUltYWdlIGZyb20gXCIuL3NhdmVJbWFnZVwiO1xuXG5pbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5jb25zdCBTYXZlRWxlbWVudCA9ICh7IHByb3BzLCBpbmRleCB9KSA9PiB7XG4gIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgYmxvY3MgfSA9IGF0dHJpYnV0ZXM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1jZWxsXCI+XG4gICAgICA8U2F2ZUltYWdlIGluZGV4PXtpbmRleH0gcHJvcHM9e3Byb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2F2ZUVsZW1lbnQ7XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5jb25zdCBTYXZlSW1hZ2UgPSAoeyBwcm9wcywgaW5kZXggfSkgPT4ge1xuICBjb25zdCB7IGJsb2NzIH0gPSBwcm9wcy5hdHRyaWJ1dGVzO1xuICBjb25zdCB7IGltYWdlIH0gPSBibG9jc1tpbmRleF07XG4gIGlmICghaW1hZ2UpIHJldHVybiA8PjwvPjtcbiAgY29uc3QgeyBtZWRpYV9kZXRhaWxzLCBhbHRfdGV4dCwgc291cmNlX3VybCB9ID0gaW1hZ2U7XG4gIGlmICghbWVkaWFfZGV0YWlscykgcmV0dXJuIDw+PC8+O1xuICBjb25zdCB7IHNpemVzIH0gPSBtZWRpYV9kZXRhaWxzO1xuICBjb25zdCB7IGxhcmdlLCBmdWxsIH0gPSBzaXplcztcbiAgY29uc3QgcGljID0gbGFyZ2UgfHwgZnVsbDtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGltZyBzcmM9e3BpYyA/IHBpYy5zb3VyY2VfdXJsIDogc291cmNlX3VybH0gYWx0PXthbHRfdGV4dH0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmVJbWFnZTtcbiIsImltcG9ydCBTaWVtYSBmcm9tIFwic2llbWFcIjtcbmNvbnN0IHsgQnV0dG9uLCBEYXNoaWNvbiB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9ID0gd3AuZWxlbWVudDtcbmltcG9ydCBFZGl0RWxlbWVudCBmcm9tIFwiLi9jb21wb25lbnRzL2VkaXRFbGVtZW50XCI7XG5pbXBvcnQgQWRkSW1hZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9hZGRJbWFnZVwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbi8vIG1vZGVsIGZvciBibG9jXG5jb25zdCBtb2RlbCA9IHtcbiAgaW1hZ2U6IHVuZGVmaW5lZCxcbiAgaW1hZ2VJZDogdW5kZWZpbmVkXG59O1xuXG5jb25zdCBFZGl0ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuICBjb25zdCB7IGJsb2NzIH0gPSBhdHRyaWJ1dGVzO1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKDApO1xuICAvLyBjb250YWluZXIgY2Fyb3VzZWxcbiAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmKCk7XG4gIC8vIHJlZiB0byBjYXJvdXNlbFxuICBsZXQgY2Fyb3VzZWwgPSB1c2VSZWYoKTtcblxuICAvLyBkZXN0cm95IGNhcm91c2VsIG9uIGNoYW5nZSBlbGVtZW50XG4gIGNvbnN0IGRlc3Ryb3lDYXJvdXNlbCA9IChjYiA9ICgpID0+IHRydWUsIHJlc2V0RG9tID0gdHJ1ZSkgPT4ge1xuICAgIC8vIHJlbW92ZSBhbmQgcmVzdGUgZG9tXG4gICAgaWYgKGNhcm91c2VsLmN1cnJlbnQpIGNhcm91c2VsLmN1cnJlbnQuZGVzdHJveShyZXNldERvbSwgY2IpO1xuICB9O1xuXG4gIC8vIHJlIGluaXQgY2Fyb3VzZWwgd2l0aCBuZXcgZWxlbWVudFxuICBjb25zdCBpbml0Q2Fyb3VzZWwgPSAocmVtb3ZlID0gZmFsc2UsIGluZGV4ID0gMCkgPT4ge1xuICAgIGlmIChjYXJvdXNlbC5jdXJyZW50KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gdG90YWwgaXRlbXNcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gY29udGFpbmVyLmN1cnJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgICAgIC8vIGluaXQgbmV3IGNhcm91c2VsXG4gICAgICAgIGNhcm91c2VsLmN1cnJlbnQgPSBuZXcgU2llbWEoe1xuICAgICAgICAgIHNlbGVjdG9yOiBjb250YWluZXIuY3VycmVudCxcbiAgICAgICAgICBvbkNoYW5nZTogKCkgPT4gc2V0U2VsZWN0ZWQoY2Fyb3VzZWwuY3VycmVudC5jdXJyZW50U2xpZGUpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gaWYgcmVtb3ZlLCB0YWtlIGluZGV4IG9mIGJsb2MgcmVtb3ZlZCAtIDEgb3IgdGFrZSBsYXN0XG4gICAgICAgICAgY29uc3QgX2kgPSByZW1vdmUgPT09IHRydWUgPyBpbmRleCAtIDEgOiBsZW5ndGg7XG4gICAgICAgICAgY2Fyb3VzZWwuY3VycmVudC5nb1RvKF9pIDwgMCA/IDEgOiBfaSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGluaXQgY2Fyb3VzZWwgb24gbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBpbml0IGZpcnN0IGNhcm91c2VsXG4gICAgY2Fyb3VzZWwuY3VycmVudCA9IG5ldyBTaWVtYSh7XG4gICAgICBzZWxlY3RvcjogY29udGFpbmVyLmN1cnJlbnQsXG4gICAgICBvbkNoYW5nZTogKCkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZChjYXJvdXNlbC5jdXJyZW50LmN1cnJlbnRTbGlkZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyByZW1vdmUgaW1hZ2VcbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IGkgPT4ge1xuICAgIGRlc3Ryb3lDYXJvdXNlbCgoKSA9PiB7XG4gICAgICAvLyBkZWxldGUgYmxvYyBpbWFnZVxuICAgICAgY29uc3QgX2Jsb2NzID0geyAuLi5ibG9jcyB9O1xuICAgICAgZGVsZXRlIF9ibG9jc1tpXTtcbiAgICAgIC8vIHJlc2V0IGtleXNcbiAgICAgIGNvbnN0IG5ld0Jsb2NzID0ge307XG4gICAgICBPYmplY3Qua2V5cyhfYmxvY3MpLmZvckVhY2goKGUsIGkpID0+IHtcbiAgICAgICAgbmV3QmxvY3NbaV0gPSBfYmxvY3NbZV07XG4gICAgICB9KTtcblxuICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIGJsb2NzOiBuZXdCbG9jc1xuICAgICAgfSk7XG4gICAgICBpbml0Q2Fyb3VzZWwodHJ1ZSwgaSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWJsb2MtZWRpdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1ibG9jLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWNvbnRhaW5lclwiIHJlZj17Y29udGFpbmVyfT5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoYmxvY3MpLm1hcChiID0+IChcbiAgICAgICAgICAgIDxFZGl0RWxlbWVudFxuICAgICAgICAgICAgICBvblJlbW92ZUltYWdlPXtvblJlbW92ZUltYWdlfVxuICAgICAgICAgICAgICBwcm9wcz17cHJvcHN9XG4gICAgICAgICAgICAgIGtleT17YCR7YmxvY3NbYl0uaW1hZ2VJZH0gJHtifWB9XG4gICAgICAgICAgICAgIGluZGV4PXtifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtZG90LWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhibG9jcykubWFwKGIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGluZGV4PXtgZG90LSR7Yn1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGdtLWNhcm91c2VsLWRvdCAke1xuICAgICAgICAgICAgICAgICAgK3NlbGVjdGVkID09PSArYiA/IFwiZ20tY2Fyb3VzZWwtZG90LWN1cnJlbnRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjYXJvdXNlbC5jdXJyZW50LmdvVG8oYil9XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWFkZC1ibG9jXCI+XG4gICAgICAgIDxBZGRJbWFnZVxuICAgICAgICAgIGluaXRDYXJvdXNlbD17aW5pdENhcm91c2VsfVxuICAgICAgICAgIGRlc3Ryb3lDYXJvdXNlbD17ZGVzdHJveUNhcm91c2VsfVxuICAgICAgICAgIHByb3BzPXtwcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdDtcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudmFyIF9yZWYgPVxuLyojX19QVVJFX18qL1xuUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk00IDd2LS41YS41LjUgMCAwMS41LS41SDhWNC41YS41LjUgMCAwMS41LS41aDEyYS41LjUgMCAwMS41LjV2MTJhLjUuNSAwIDAxLS41LjVoLTEyYS41LjUgMCAwMS0uNS0uNVYxNUg0LjVhLjUuNSAwIDAxLS41LS41VjE0SDEuNWEuNS41IDAgMDEtLjUtLjV2LTZhLjUuNSAwIDAxLjUtLjVINHptMCAxSDJ2NWgyVjh6bTQgNlY3SDV2N2gzem0xIDJoMTFWNUg5djExelwiXG59KTtcblxuZnVuY3Rpb24gU3ZnSWNvbmUocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAyMixcbiAgICBoZWlnaHQ6IDIyXG4gIH0sIHByb3BzKSwgX3JlZik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0ljb25lOyIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5pbXBvcnQgaWNvbmUgZnJvbSBcIi4vaWNvbmUuc3ZnXCI7XG5pbXBvcnQgZWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgc2F2ZSBmcm9tIFwiLi9zYXZlXCI7XG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tIFwiLi9hdHRyaWJ1dGVzXCI7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFwiZ20vY2Fyb3VzZWxcIiwge1xuICB0aXRsZTogXCJCbG9jayBjYXJvdXNlbFwiLFxuICBkZXNjcmlwdGlvbjogXCJjYXJvdXNlbCBmb3Igc2hvdyBwaG90b3NcIixcbiAgaWNvbjogaWNvbmUsXG4gIGNhdGVnb3J5OiBcInRoZW1lLWJsb2Nrc1wiLFxuICBhdHRyaWJ1dGVzLFxuICBlZGl0LFxuICBzYXZlXG59KTtcbiIsImNvbnN0IHsgUmljaFRleHQgfSA9IHdwLmJsb2NrRWRpdG9yO1xuaW1wb3J0IFNhdmVFbGVtZW50IGZyb20gXCIuL2NvbXBvbmVudHMvc2F2ZUVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5jb25zdCBTYXZlID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGJsb2NzIH0gPSBwcm9wcy5hdHRyaWJ1dGVzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtY29udGFpbmVyXCI+XG4gICAgICB7T2JqZWN0LmtleXMoYmxvY3MpLm1hcChiID0+IChcbiAgICAgICAgPFNhdmVFbGVtZW50IHByb3BzPXtwcm9wc30ga2V5PXtifSBpbmRleD17Yn0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2F2ZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wid3BcIl1bXCJlbGVtZW50XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==