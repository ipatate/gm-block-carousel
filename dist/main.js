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
        getMedia = _select.getMedia;

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

  var onUpdateImage = function onUpdateImage(image) {
    destroyCarousel(function () {
      setAttributes({
        blocs: _objectSpread({}, blocs, {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, index, _objectSpread({}, blocs[index], {
          imageId: image.id,
          image: image,
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
  console.log(blocs, index, blocs[index]);
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
      full = sizes.full,
      gm_mobile_size = sizes.gm_mobile_size;
  var pic = large || full;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: pic ? pic.source_url : source_url,
    srcSet: "".concat(gm_mobile_size ? gm_mobile_size.source_url : pic.source_url, " 600w"),
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_editElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/editElement */ "./src/components/editElement.jsx");
/* harmony import */ var siema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! siema */ "./node_modules/siema/dist/siema.min.js");
/* harmony import */ var siema__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(siema__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_addImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/addImage */ "./src/components/addImage.jsx");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useRef = _wp$element.useRef;




var model = {
  image: undefined,
  imageId: undefined
};

var Edit = function Edit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blocs = attributes.blocs;
  var container = useRef(); // ref to carousel

  var carousel = useRef(); // destroy carousel on change element

  var destroyCarousel = function destroyCarousel() {
    var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
      return true;
    };
    var resetDom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (carousel.current) carousel.current.destroy(resetDom, cb);
  }; // re init carousel with new element


  var initCarousel = function initCarousel() {
    var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (carousel.current) {
      setTimeout(function () {
        var length = container.current.childNodes.length;
        carousel.current = new siema__WEBPACK_IMPORTED_MODULE_3___default.a({
          selector: container.current
        });

        if (length > 0) {
          var _i = remove === true ? length - 1 : length;

          carousel.current.goTo(_i < 0 ? 1 : _i);
        }
      }, 100);
    }
  }; // init carousel on mount


  useEffect(function () {
    carousel.current = new siema__WEBPACK_IMPORTED_MODULE_3___default.a({
      selector: container.current
    });
  }, []); // remove image

  var onRemoveImage = function onRemoveImage(i) {
    destroyCarousel(function () {
      var _blocs = _objectSpread({}, blocs);

      delete _blocs[i];
      setAttributes({
        blocs: _blocs
      });
      initCarousel(true);
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gm-carousel-bloc-edit"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gm-carousel-container",
    ref: container
  }, Object.keys(blocs).map(function (b) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_editElement__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onRemoveImage: onRemoveImage,
      props: props,
      key: "".concat(blocs[b].imageId, " ").concat(b),
      index: b
    });
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "gm-carousel-add-bloc"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_addImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/edit.jsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/save.jsx");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;



registerBlockType("gm/carousel", {
  title: "Block carousel",
  description: "carousel for show photo",
  icon: "star-filled",
  category: "theme-blocks",
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpZW1hL2Rpc3Qvc2llbWEubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lZGl0RWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2F2ZUVsZW1lbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NhdmVJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F2ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJ0aGlzXCI6W1wid3BcIixcImVsZW1lbnRcIl19Il0sIm5hbWVzIjpbImJsb2NzIiwidHlwZSIsImRlZmF1bHQiLCJ3cCIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJEYXNoaWNvbiIsIlNwaW5uZXIiLCJ1c2VFZmZlY3QiLCJlbGVtZW50IiwiYmxvY2tFZGl0b3IiLCJNZWRpYVVwbG9hZCIsIk1lZGlhVXBsb2FkQ2hlY2siLCJ1c2VTZWxlY3QiLCJkYXRhIiwiX18iLCJpMThuIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsIkFkZEltYWdlIiwicHJvcHMiLCJpbml0Q2Fyb3VzZWwiLCJkZXN0cm95Q2Fyb3VzZWwiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlcyIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJpbmRleCIsImltYWdlIiwic2VsZWN0IiwibmV3UGljIiwiZm9yRWFjaCIsImIiLCJuZXdJbWFnZSIsImdldE1lZGlhIiwiaW1hZ2VJZCIsImlkIiwiX2luZGV4Iiwib25VcGRhdGVJbWFnZSIsIm9wZW4iLCJSaWNoVGV4dCIsIkVkaXRFbGVtZW50Iiwib25SZW1vdmVJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJzb3VyY2VfdXJsIiwiU2F2ZUVsZW1lbnQiLCJTYXZlSW1hZ2UiLCJtZWRpYV9kZXRhaWxzIiwiYWx0X3RleHQiLCJzaXplcyIsImxhcmdlIiwiZnVsbCIsImdtX21vYmlsZV9zaXplIiwicGljIiwidXNlUmVmIiwibW9kZWwiLCJ1bmRlZmluZWQiLCJFZGl0IiwiY29udGFpbmVyIiwiY2Fyb3VzZWwiLCJjYiIsInJlc2V0RG9tIiwiY3VycmVudCIsImRlc3Ryb3kiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwiY2hpbGROb2RlcyIsIlNpZW1hIiwic2VsZWN0b3IiLCJfaSIsImdvVG8iLCJpIiwiX2Jsb2NzIiwibWFwIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNhdGVnb3J5IiwiZWRpdCIsInNhdmUiLCJTYXZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNmQSxlQUFlLEtBQWlELG9CQUFvQixTQUFpSCxDQUFDLCtDQUErQyxtQkFBbUIsY0FBYyw0QkFBNEIsWUFBWSxxQkFBcUIsMkRBQTJELFNBQVMsdUNBQXVDLHFDQUFxQyxvQ0FBb0MsRUFBRSxpQkFBaUIsaUNBQWlDLGlCQUFpQixZQUFZLFVBQVUsc0JBQXNCLG1CQUFtQixpREFBaUQsaUJBQWlCLGtCQUFrQixhQUFhLGdCQUFnQiw4RUFBOEUsc0NBQXNDLFNBQVMsRUFBRSw4RUFBOEUsZ0JBQWdCLGFBQWEsb0dBQW9HLGNBQWMsZ0JBQWdCLFlBQVksV0FBVyxLQUFLLFdBQVcsK0dBQStHLHVCQUF1Qix3Q0FBd0MsZ0JBQWdCLGNBQWMsV0FBVyxnUEFBZ1AseWdCQUF5Z0Isa0JBQWtCLGNBQWMsYUFBYSxvQ0FBb0MsNEdBQTRHLHNEQUFzRCx5Z0JBQXlnQixFQUFFLG9DQUFvQyx1bEJBQXVsQixFQUFFLDRCQUE0QiwyS0FBMkssRUFBRSx3Q0FBd0MsNEhBQTRILGdMQUFnTCx3Q0FBd0MscUVBQXFFLDRCQUE0QixLQUFLLHFFQUFxRSxpQkFBaUIsWUFBWSw0QkFBNEIsS0FBSyx1REFBdUQsaUJBQWlCLGdDQUFnQyxlQUFlLEtBQUsscUVBQXFFLGlCQUFpQiw4SEFBOEgsRUFBRSw2Q0FBNkMsb0NBQW9DLDBPQUEwTyxFQUFFLDJDQUEyQyx5RUFBeUUsMkNBQTJDLGVBQWUsK0ZBQStGLEVBQUUsNEJBQTRCLDhFQUE4RSwrQ0FBK0Msd0JBQXdCLHFCQUFxQiwwQkFBMEIseUJBQXlCLDhMQUE4TCxzR0FBc0csMkNBQTJDLHVEQUF1RCxpSEFBaUgsRUFBRSw0QkFBNEIsOEVBQThFLCtDQUErQyx3QkFBd0IscUJBQXFCLCtEQUErRCx5QkFBeUIsOExBQThMLHNHQUFzRywyQ0FBMkMsNEZBQTRGLGlIQUFpSCxFQUFFLHlDQUF5Qyx1SUFBdUksRUFBRSx3Q0FBd0MscUxBQXFMLEVBQUUsK0JBQStCLCtDQUErQyx3QkFBd0IsK05BQStOLEVBQUUsdUNBQXVDLDRJQUE0SSxtQ0FBbUMsaUNBQWlDLDJGQUEyRixFQUFFLCtFQUErRSxFQUFFLHVDQUF1Qyx3UEFBd1AsZ01BQWdNLEVBQUUscUNBQXFDLGdRQUFnUSxFQUFFLGlDQUFpQyxXQUFXLDRFQUE0RSxFQUFFLDBDQUEwQywyTEFBMkwsRUFBRSx3Q0FBd0MseUhBQXlILEVBQUUseUNBQXlDLHNNQUFzTSwyTEFBMkwsMEtBQTBLLHFHQUFxRyxFQUFFLHlDQUF5QywrSkFBK0osRUFBRSx1Q0FBdUMsbUtBQW1LLEVBQUUseUNBQXlDLHdDQUF3QyxnUUFBZ1EsMEtBQTBLLHFHQUFxRyxFQUFFLDBDQUEwQyxvTUFBb00sRUFBRSxxQ0FBcUMsc0VBQXNFLEVBQUUsaUNBQWlDLHdGQUF3RixpRUFBaUUsb0dBQW9HLEVBQUUsbUNBQW1DLDZGQUE2RixzR0FBc0csd0RBQXdELG9JQUFvSSxFQUFFLGtDQUFrQyxrQ0FBa0MsRUFBRSxpQ0FBaUMsNERBQTRELEVBQUUsK0JBQStCLDZFQUE2RSw0REFBNEQsZ0RBQWdELDRCQUE0Qix5Q0FBeUMsK0ZBQStGLGlCQUFpQixJQUFJLHNDQUFzQyxPQUFPLG9KQUFvSix1QkFBdUIsS0FBSyx5QkFBeUIsVUFBVSxFQUFFLG1DQUFtQywrRkFBK0YsS0FBSyxHQUFHLGdDQUFnQyxHQUFHLEU7Ozs7Ozs7Ozs7OztBQ0F0eFo7QUFBZTtBQUNiQSxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFLFFBREQ7QUFFTEMsV0FBTyxFQUFFO0FBRko7QUFETSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNBc0NDLEVBQUUsQ0FBQ0MsVTtJQUFqQ0MsTSxrQkFBQUEsTTtJQUFRQyxRLGtCQUFBQSxRO0lBQVVDLE8sa0JBQUFBLE87SUFDbEJDLFMsR0FBY0wsRUFBRSxDQUFDTSxPLENBQWpCRCxTO3NCQUNrQ0wsRUFBRSxDQUFDTyxXO0lBQXJDQyxXLG1CQUFBQSxXO0lBQWFDLGdCLG1CQUFBQSxnQjtJQUNiQyxTLEdBQWNWLEVBQUUsQ0FBQ1csSSxDQUFqQkQsUztJQUNBRSxFLEdBQU9aLEVBQUUsQ0FBQ2EsSSxDQUFWRCxFO0FBRVIsSUFBTUUsbUJBQW1CLEdBQUcsQ0FBQyxPQUFELENBQTVCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQThDO0FBQUEsTUFBM0NDLEtBQTJDLFFBQTNDQSxLQUEyQztBQUFBLE1BQXBDQyxZQUFvQyxRQUFwQ0EsWUFBb0M7QUFBQSxNQUF0QkMsZUFBc0IsUUFBdEJBLGVBQXNCO0FBQUEsTUFDckRDLFVBRHFELEdBQ3ZCSCxLQUR1QixDQUNyREcsVUFEcUQ7QUFBQSxNQUN6Q0MsYUFEeUMsR0FDdkJKLEtBRHVCLENBQ3pDSSxhQUR5QztBQUFBLE1BRXJEdkIsS0FGcUQsR0FFM0NzQixVQUYyQyxDQUVyRHRCLEtBRnFEO0FBRzdELE1BQU13QixNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZMUIsS0FBWixFQUFtQndCLE1BQWxDO0FBQ0EsTUFBTUcsS0FBSyxHQUFHSCxNQUFkLENBSjZELENBSzdEOztBQUNBLE1BQU1JLEtBQUssR0FBR2YsU0FBUyxDQUNyQixVQUFBZ0IsTUFBTSxFQUFJO0FBQ1IsUUFBSUMsTUFBTSxHQUFHLElBQWIsQ0FEUSxDQUVSOztBQUNBTCxVQUFNLENBQUNDLElBQVAsQ0FBWTFCLEtBQVosRUFBbUIrQixPQUFuQixDQUEyQixVQUFBQyxDQUFDLEVBQUk7QUFDOUIsVUFBSWhDLEtBQUssQ0FBQ2dDLENBQUQsQ0FBTCxDQUFTQyxRQUFULEtBQXNCLElBQTFCLEVBQWdDO0FBQzlCSCxjQUFNLEdBQUc5QixLQUFLLENBQUNnQyxDQUFELENBQWQ7QUFDRDtBQUNGLEtBSkQ7O0FBSFEsa0JBUWFILE1BQU0sQ0FBQyxNQUFELENBUm5CO0FBQUEsUUFRQUssUUFSQSxXQVFBQSxRQVJBOztBQVNSLFdBQU9KLE1BQU0sR0FBR0ksUUFBUSxDQUFDSixNQUFNLENBQUNLLE9BQVIsQ0FBWCxHQUE4QixFQUEzQztBQUNELEdBWG9CLEVBWXJCLENBQUNuQyxLQUFELENBWnFCLENBQXZCLENBTjZELENBb0I3RDs7QUFDQVEsV0FBUyxDQUFDLFlBQU07QUFDZCxRQUFNa0IsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQVAsQ0FBWTFCLEtBQVosQ0FBYjs7QUFDQSxRQUFJNEIsS0FBSyxJQUFJQSxLQUFLLENBQUNRLEVBQW5CLEVBQXVCO0FBQ3JCLFVBQUlDLE1BQU0sR0FBRyxJQUFiLENBRHFCLENBRXJCOztBQUNBWCxVQUFJLENBQUNLLE9BQUwsQ0FBYSxVQUFBQyxDQUFDLEVBQUk7QUFDaEIsWUFBSWhDLEtBQUssQ0FBQ2dDLENBQUQsQ0FBTCxDQUFTQyxRQUFULEtBQXNCLElBQTFCLEVBQWdDO0FBQzlCSSxnQkFBTSxHQUFHTCxDQUFUO0FBQ0Q7QUFDRixPQUpEOztBQUtBLFVBQUlLLE1BQUosRUFBWTtBQUNWZCxxQkFBYSxDQUFDO0FBQ1p2QixlQUFLLG9CQUNBQSxLQURBLHVGQUVHcUMsTUFGSCxvQkFFaUJyQyxLQUFLLENBQUNxQyxNQUFELENBRnRCO0FBRWdDVCxpQkFBSyxFQUFMQSxLQUZoQztBQUV1Q0ssb0JBQVEsRUFBRTtBQUZqRDtBQURPLFNBQUQsQ0FBYjtBQU1EO0FBQ0Y7QUFDRixHQW5CUSxFQW1CTixDQUFDTCxLQUFELENBbkJNLENBQVQ7O0FBcUJBLE1BQU1VLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQVYsS0FBSyxFQUFJO0FBQzdCUCxtQkFBZSxDQUFDLFlBQU07QUFDcEJFLG1CQUFhLENBQUM7QUFDWnZCLGFBQUssb0JBQ0FBLEtBREEsdUZBR0EyQixLQUhBLG9CQUlJM0IsS0FBSyxDQUFDMkIsS0FBRCxDQUpUO0FBS0NRLGlCQUFPLEVBQUVQLEtBQUssQ0FBQ1EsRUFMaEI7QUFNQ1IsZUFBSyxFQUFMQSxLQU5EO0FBT0NLLGtCQUFRLEVBQUU7QUFQWDtBQURPLE9BQUQsQ0FBYjtBQWFBYixrQkFBWTtBQUNiLEtBZmMsRUFlWixJQWZZLENBQWY7QUFnQkQsR0FqQkQ7O0FBa0JBLFNBQ0UsNElBQ0UseUVBQUMsZ0JBQUQsUUFDRSx5RUFBQyxXQUFEO0FBQ0UsU0FBSyxFQUFFTCxFQUFFLENBQUMsT0FBRCxFQUFVLEVBQVYsQ0FEWDtBQUVFLFlBQVEsRUFBRXVCLGFBRlo7QUFHRSxnQkFBWSxFQUFFckIsbUJBSGhCO0FBSUUsU0FBSyxFQUFFLEVBSlQ7QUFLRSxVQUFNLEVBQUUsdUJBQWM7QUFBQSxVQUFYc0IsSUFBVyxTQUFYQSxJQUFXO0FBQ3BCLGFBQ0UseUVBQUMsTUFBRDtBQUNFLGVBQU8sRUFBRUEsSUFEWDtBQUVFLGFBQUssRUFBRXhCLEVBQUUsQ0FBQyxXQUFELEVBQWMsU0FBZCxDQUZYO0FBR0UsaUJBQVMsRUFBQztBQUhaLFNBS0dBLEVBQUUsQ0FBQyxXQUFELEVBQWMsU0FBZCxDQUxMLEVBTUcsSUFOSCxFQU9FLHlFQUFDLFFBQUQ7QUFBVSxZQUFJLEVBQUM7QUFBZixRQVBGLENBREY7QUFXRDtBQWpCSCxJQURGLENBREYsQ0FERjtBQXlCRCxDQXJGRDs7QUF1RmVHLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkMvRnNDZixFQUFFLENBQUNDLFU7SUFBakNDLE0sa0JBQUFBLE07SUFBUUMsUSxrQkFBQUEsUTtJQUFVQyxPLGtCQUFBQSxPO0lBQ2xCaUMsUSxHQUFhckMsRUFBRSxDQUFDTyxXLENBQWhCOEIsUTtJQUNBekIsRSxHQUFPWixFQUFFLENBQUNhLEksQ0FBVkQsRTtBQUVSOztBQUVBLElBQU0wQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFxQztBQUFBLE1BQWxDdEIsS0FBa0MsUUFBbENBLEtBQWtDO0FBQUEsTUFBM0JRLEtBQTJCLFFBQTNCQSxLQUEyQjtBQUFBLE1BQXBCZSxhQUFvQixRQUFwQkEsYUFBb0I7QUFBQSxNQUMvQ3BCLFVBRCtDLEdBQ2pCSCxLQURpQixDQUMvQ0csVUFEK0M7QUFBQSxNQUNuQ0MsYUFEbUMsR0FDakJKLEtBRGlCLENBQ25DSSxhQURtQztBQUFBLE1BRS9DdkIsS0FGK0MsR0FFckNzQixVQUZxQyxDQUUvQ3RCLEtBRitDO0FBR3ZEMkMsU0FBTyxDQUFDQyxHQUFSLENBQVk1QyxLQUFaLEVBQW1CMkIsS0FBbkIsRUFBMEIzQixLQUFLLENBQUMyQixLQUFELENBQS9CO0FBSHVELHFCQUs1QjNCLEtBQUssQ0FBQzJCLEtBQUQsQ0FMdUI7QUFBQSxNQUsvQ1EsT0FMK0MsZ0JBSy9DQSxPQUwrQztBQUFBLE1BS3RDUCxLQUxzQyxnQkFLdENBLEtBTHNDO0FBTXZELFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHLENBQUMsQ0FBQ08sT0FBRixJQUFhLENBQUNQLEtBQWQsSUFBdUIseUVBQUMsT0FBRCxPQUQxQixFQUVHTyxPQUFPLElBQUlQLEtBQVgsR0FDQyw0SUFDRTtBQUFLLE9BQUcsRUFBRUEsS0FBSyxDQUFDaUIsVUFBaEI7QUFBNEIsT0FBRyxFQUFDO0FBQWhDLElBREYsRUFFRSx5RUFBQyxNQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTUgsYUFBYSxDQUFDZixLQUFELENBQW5CO0FBQUEsS0FEWDtBQUVFLFNBQUssRUFBRVosRUFBRSxDQUFDLFFBQUQsRUFBVyxTQUFYO0FBRlgsS0FJRSx5RUFBQyxRQUFEO0FBQVUsUUFBSSxFQUFDO0FBQWYsSUFKRixDQUZGLENBREQsR0FVRyxJQVpOLENBREY7QUFnQkQsQ0F0QkQ7O0FBd0JlMEIsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzlCUUQsUSxHQUFhckMsRUFBRSxDQUFDTyxXLENBQWhCOEIsUTtJQUNBekIsRSxHQUFPWixFQUFFLENBQUNhLEksQ0FBVkQsRTtBQUNSO0FBRUE7O0FBRUEsSUFBTStCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXNCO0FBQUEsTUFBbkIzQixLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaUSxLQUFZLFFBQVpBLEtBQVk7QUFBQSxNQUNoQ0wsVUFEZ0MsR0FDRkgsS0FERSxDQUNoQ0csVUFEZ0M7QUFBQSxNQUNwQkMsYUFEb0IsR0FDRkosS0FERSxDQUNwQkksYUFEb0I7QUFBQSxNQUVoQ3ZCLEtBRmdDLEdBRXRCc0IsVUFGc0IsQ0FFaEN0QixLQUZnQztBQUd4QyxTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSx5RUFBQyxrREFBRDtBQUFXLFNBQUssRUFBRTJCLEtBQWxCO0FBQXlCLFNBQUssRUFBRVI7QUFBaEMsSUFERixDQURGO0FBS0QsQ0FSRDs7QUFVZTJCLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFzQjtBQUFBLE1BQW5CNUIsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBWlEsS0FBWSxRQUFaQSxLQUFZO0FBQUEsTUFDOUIzQixLQUQ4QixHQUNwQm1CLEtBQUssQ0FBQ0csVUFEYyxDQUM5QnRCLEtBRDhCO0FBQUEsTUFFOUI0QixLQUY4QixHQUVwQjVCLEtBQUssQ0FBQzJCLEtBQUQsQ0FGZSxDQUU5QkMsS0FGOEI7QUFHdEMsTUFBSSxDQUFDQSxLQUFMLEVBQVksT0FBTywySUFBUDtBQUgwQixNQUk5Qm9CLGFBSjhCLEdBSVVwQixLQUpWLENBSTlCb0IsYUFKOEI7QUFBQSxNQUlmQyxRQUplLEdBSVVyQixLQUpWLENBSWZxQixRQUplO0FBQUEsTUFJTEosVUFKSyxHQUlVakIsS0FKVixDQUlMaUIsVUFKSztBQUt0QyxNQUFJLENBQUNHLGFBQUwsRUFBb0IsT0FBTywySUFBUDtBQUxrQixNQU05QkUsS0FOOEIsR0FNcEJGLGFBTm9CLENBTTlCRSxLQU44QjtBQUFBLE1BTzlCQyxLQVA4QixHQU9FRCxLQVBGLENBTzlCQyxLQVA4QjtBQUFBLE1BT3ZCQyxJQVB1QixHQU9FRixLQVBGLENBT3ZCRSxJQVB1QjtBQUFBLE1BT2pCQyxjQVBpQixHQU9FSCxLQVBGLENBT2pCRyxjQVBpQjtBQVF0QyxNQUFNQyxHQUFHLEdBQUdILEtBQUssSUFBSUMsSUFBckI7QUFDQSxTQUNFLDRJQUNFO0FBQ0UsT0FBRyxFQUFFRSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ1QsVUFBUCxHQUFvQkEsVUFEOUI7QUFFRSxVQUFNLFlBQ0pRLGNBQWMsR0FBR0EsY0FBYyxDQUFDUixVQUFsQixHQUErQlMsR0FBRyxDQUFDVCxVQUQ3QyxVQUZSO0FBS0UsT0FBRyxFQUFFSTtBQUxQLElBREYsQ0FERjtBQVdELENBcEJEOztBQXNCZUYsd0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ3hCNkI1QyxFQUFFLENBQUNDLFU7SUFBeEJDLE0sa0JBQUFBLE07SUFBUUMsUSxrQkFBQUEsUTtJQUNSUyxFLEdBQU9aLEVBQUUsQ0FBQ2EsSSxDQUFWRCxFO2tCQUNzQlosRUFBRSxDQUFDTSxPO0lBQXpCRCxTLGVBQUFBLFM7SUFBVytDLE0sZUFBQUEsTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1DLEtBQUssR0FBRztBQUNaNUIsT0FBSyxFQUFFNkIsU0FESztBQUVadEIsU0FBTyxFQUFFc0I7QUFGRyxDQUFkOztBQUtBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUF2QyxLQUFLLEVBQUk7QUFBQSxNQUNaRyxVQURZLEdBQ2tCSCxLQURsQixDQUNaRyxVQURZO0FBQUEsTUFDQUMsYUFEQSxHQUNrQkosS0FEbEIsQ0FDQUksYUFEQTtBQUFBLE1BRVp2QixLQUZZLEdBRUZzQixVQUZFLENBRVp0QixLQUZZO0FBR3BCLE1BQU0yRCxTQUFTLEdBQUdKLE1BQU0sRUFBeEIsQ0FIb0IsQ0FJcEI7O0FBQ0EsTUFBSUssUUFBUSxHQUFHTCxNQUFNLEVBQXJCLENBTG9CLENBT3BCOztBQUNBLE1BQU1sQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQXNDO0FBQUEsUUFBckN3QyxFQUFxQyx1RUFBaEM7QUFBQSxhQUFNLElBQU47QUFBQSxLQUFnQztBQUFBLFFBQXBCQyxRQUFvQix1RUFBVCxJQUFTO0FBQzVELFFBQUlGLFFBQVEsQ0FBQ0csT0FBYixFQUFzQkgsUUFBUSxDQUFDRyxPQUFULENBQWlCQyxPQUFqQixDQUF5QkYsUUFBekIsRUFBbUNELEVBQW5DO0FBQ3ZCLEdBRkQsQ0FSb0IsQ0FZcEI7OztBQUNBLE1BQU16QyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFvQjtBQUFBLFFBQW5CNkMsTUFBbUIsdUVBQVYsS0FBVTs7QUFDdkMsUUFBSUwsUUFBUSxDQUFDRyxPQUFiLEVBQXNCO0FBQ3BCRyxnQkFBVSxDQUFDLFlBQU07QUFDZixZQUFNMUMsTUFBTSxHQUFHbUMsU0FBUyxDQUFDSSxPQUFWLENBQWtCSSxVQUFsQixDQUE2QjNDLE1BQTVDO0FBQ0FvQyxnQkFBUSxDQUFDRyxPQUFULEdBQW1CLElBQUlLLDRDQUFKLENBQVU7QUFDM0JDLGtCQUFRLEVBQUVWLFNBQVMsQ0FBQ0k7QUFETyxTQUFWLENBQW5COztBQUdBLFlBQUl2QyxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNkLGNBQU04QyxFQUFFLEdBQUdMLE1BQU0sS0FBSyxJQUFYLEdBQWtCekMsTUFBTSxHQUFHLENBQTNCLEdBQStCQSxNQUExQzs7QUFDQW9DLGtCQUFRLENBQUNHLE9BQVQsQ0FBaUJRLElBQWpCLENBQXNCRCxFQUFFLEdBQUcsQ0FBTCxHQUFTLENBQVQsR0FBYUEsRUFBbkM7QUFDRDtBQUNGLE9BVFMsRUFTUCxHQVRPLENBQVY7QUFVRDtBQUNGLEdBYkQsQ0Fib0IsQ0E0QnBCOzs7QUFDQTlELFdBQVMsQ0FBQyxZQUFNO0FBQ2RvRCxZQUFRLENBQUNHLE9BQVQsR0FBbUIsSUFBSUssNENBQUosQ0FBVTtBQUMzQkMsY0FBUSxFQUFFVixTQUFTLENBQUNJO0FBRE8sS0FBVixDQUFuQjtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQsQ0E3Qm9CLENBbUNwQjs7QUFDQSxNQUFNckIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBOEIsQ0FBQyxFQUFJO0FBQ3pCbkQsbUJBQWUsQ0FBQyxZQUFNO0FBQ3BCLFVBQU1vRCxNQUFNLHFCQUFRekUsS0FBUixDQUFaOztBQUNBLGFBQU95RSxNQUFNLENBQUNELENBQUQsQ0FBYjtBQUNBakQsbUJBQWEsQ0FBQztBQUNadkIsYUFBSyxFQUFFeUU7QUFESyxPQUFELENBQWI7QUFHQXJELGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsS0FQYyxDQUFmO0FBUUQsR0FURDs7QUFXQSxTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUF1QyxPQUFHLEVBQUV1QztBQUE1QyxLQUNHbEMsTUFBTSxDQUFDQyxJQUFQLENBQVkxQixLQUFaLEVBQW1CMEUsR0FBbkIsQ0FBdUIsVUFBQTFDLENBQUM7QUFBQSxXQUN2Qix5RUFBQywrREFBRDtBQUNFLG1CQUFhLEVBQUVVLGFBRGpCO0FBRUUsV0FBSyxFQUFFdkIsS0FGVDtBQUdFLFNBQUcsWUFBS25CLEtBQUssQ0FBQ2dDLENBQUQsQ0FBTCxDQUFTRyxPQUFkLGNBQXlCSCxDQUF6QixDQUhMO0FBSUUsV0FBSyxFQUFFQTtBQUpULE1BRHVCO0FBQUEsR0FBeEIsQ0FESCxDQURGLEVBV0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLHlFQUFDLDREQUFEO0FBQ0UsZ0JBQVksRUFBRVosWUFEaEI7QUFFRSxtQkFBZSxFQUFFQyxlQUZuQjtBQUdFLFNBQUssRUFBRUY7QUFIVCxJQURGLENBWEYsQ0FERjtBQXFCRCxDQXBFRDs7QUFzRWV1QyxtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0lDbkZRaUIsaUIsR0FBc0J4RSxFQUFFLENBQUN5RSxNLENBQXpCRCxpQjtJQUNBNUQsRSxHQUFPWixFQUFFLENBQUNhLEksQ0FBVkQsRTtBQUVSO0FBQ0E7QUFDQTtBQUVBNEQsaUJBQWlCLENBQUMsYUFBRCxFQUFnQjtBQUMvQkUsT0FBSyxFQUFFLGdCQUR3QjtBQUUvQkMsYUFBVyxFQUFFLHlCQUZrQjtBQUcvQkMsTUFBSSxFQUFFLGFBSHlCO0FBSS9CQyxVQUFRLEVBQUUsY0FKcUI7QUFLL0IxRCxZQUFVLEVBQVZBLG1EQUwrQjtBQU0vQjJELE1BQUksRUFBSkEsNkNBTitCO0FBTy9CQyxNQUFJLEVBQUpBLDZDQUFJQTtBQVAyQixDQUFoQixDQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDUFExQyxRLEdBQWFyQyxFQUFFLENBQUNPLFcsQ0FBaEI4QixRO0FBQ1I7QUFFQTs7QUFFQSxJQUFNMkMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQWhFLEtBQUssRUFBSTtBQUFBLE1BQ1puQixLQURZLEdBQ0ZtQixLQUFLLENBQUNHLFVBREosQ0FDWnRCLEtBRFk7QUFFcEIsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0d5QixNQUFNLENBQUNDLElBQVAsQ0FBWTFCLEtBQVosRUFBbUIwRSxHQUFuQixDQUF1QixVQUFBMUMsQ0FBQztBQUFBLFdBQ3ZCLHlFQUFDLCtEQUFEO0FBQWEsV0FBSyxFQUFFYixLQUFwQjtBQUEyQixTQUFHLEVBQUVhLENBQWhDO0FBQW1DLFdBQUssRUFBRUE7QUFBMUMsTUFEdUI7QUFBQSxHQUF4QixDQURILENBREY7QUFPRCxDQVREOztBQVdlbUQsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNoQkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSx3Q0FBd0MsRUFBRSxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIlNpZW1hXCIsW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5TaWVtYT10KCk6ZS5TaWVtYT10KCl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKGlbcl0pcmV0dXJuIGlbcl0uZXhwb3J0czt2YXIgbj1pW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyx0KSxuLmw9ITAsbi5leHBvcnRzfXZhciBpPXt9O3JldHVybiB0Lm09ZSx0LmM9aSx0LmQ9ZnVuY3Rpb24oZSxpLHIpe3QubyhlLGkpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6cn0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIGk9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChpLFwiYVwiLGkpLGl9LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiXCIsdCh0LnM9MCl9KFtmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0scz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIHI9dFtpXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LGkscil7cmV0dXJuIGkmJmUodC5wcm90b3R5cGUsaSksciYmZSh0LHIpLHR9fSgpLGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciBpPXRoaXM7aWYocih0aGlzLGUpLHRoaXMuY29uZmlnPWUubWVyZ2VTZXR0aW5ncyh0KSx0aGlzLnNlbGVjdG9yPVwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5zZWxlY3Rvcj9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29uZmlnLnNlbGVjdG9yKTp0aGlzLmNvbmZpZy5zZWxlY3RvcixudWxsPT09dGhpcy5zZWxlY3Rvcil0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd3Jvbmcgd2l0aCB5b3VyIHNlbGVjdG9yIPCfmK1cIik7dGhpcy5yZXNvbHZlU2xpZGVzTnVtYmVyKCksdGhpcy5zZWxlY3RvcldpZHRoPXRoaXMuc2VsZWN0b3Iub2Zmc2V0V2lkdGgsdGhpcy5pbm5lckVsZW1lbnRzPVtdLnNsaWNlLmNhbGwodGhpcy5zZWxlY3Rvci5jaGlsZHJlbiksdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jb25maWcubG9vcD90aGlzLmNvbmZpZy5zdGFydEluZGV4JXRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg6TWF0aC5tYXgoMCxNYXRoLm1pbih0aGlzLmNvbmZpZy5zdGFydEluZGV4LHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSksdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eT1lLndlYmtpdE9yTm90KCksW1wicmVzaXplSGFuZGxlclwiLFwidG91Y2hzdGFydEhhbmRsZXJcIixcInRvdWNoZW5kSGFuZGxlclwiLFwidG91Y2htb3ZlSGFuZGxlclwiLFwibW91c2Vkb3duSGFuZGxlclwiLFwibW91c2V1cEhhbmRsZXJcIixcIm1vdXNlbGVhdmVIYW5kbGVyXCIsXCJtb3VzZW1vdmVIYW5kbGVyXCIsXCJjbGlja0hhbmRsZXJcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtpW2VdPWlbZV0uYmluZChpKX0pLHRoaXMuaW5pdCgpfXJldHVybiBzKGUsW3trZXk6XCJhdHRhY2hFdmVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVIYW5kbGVyKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZHJhZz17c3RhcnRYOjAsZW5kWDowLHN0YXJ0WTowLGxldEl0R286bnVsbCxwcmV2ZW50Q2xpY2s6ITF9LHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLnRvdWNoc3RhcnRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHRoaXMudG91Y2hlbmRIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLnRvdWNobW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMubW91c2Vkb3duSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMubW91c2V1cEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIix0aGlzLm1vdXNlbGVhdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLm1vdXNlbW92ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5jbGlja0hhbmRsZXIpKX19LHtrZXk6XCJkZXRhY2hFdmVudHNcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5yZXNpemVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKX19LHtrZXk6XCJpbml0XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmF0dGFjaEV2ZW50cygpLHRoaXMuc2VsZWN0b3Iuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIix0aGlzLnNlbGVjdG9yLnN0eWxlLmRpcmVjdGlvbj10aGlzLmNvbmZpZy5ydGw/XCJydGxcIjpcImx0clwiLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHRoaXMuY29uZmlnLm9uSW5pdC5jYWxsKHRoaXMpfX0se2tleTpcImJ1aWxkU2xpZGVyRnJhbWVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UsdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMip0aGlzLnBlclBhZ2U6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDt0aGlzLnNsaWRlckZyYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53aWR0aD1lKnQrXCJweFwiLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuY29uZmlnLmRyYWdnYWJsZSYmKHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiLXdlYmtpdC1ncmFiXCIpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtpZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgcj10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKXt2YXIgbj10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tyXS5jbG9uZU5vZGUoITApKTtpLmFwcGVuZENoaWxkKG4pfWZvcih2YXIgcz0wO3M8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtzKyspe3ZhciBsPXRoaXMuYnVpbGRTbGlkZXJGcmFtZUl0ZW0odGhpcy5pbm5lckVsZW1lbnRzW3NdKTtpLmFwcGVuZENoaWxkKGwpfWlmKHRoaXMuY29uZmlnLmxvb3ApZm9yKHZhciBvPTA7bzx0aGlzLnBlclBhZ2U7bysrKXt2YXIgYT10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tvXS5jbG9uZU5vZGUoITApKTtpLmFwcGVuZENoaWxkKGEpfXRoaXMuc2xpZGVyRnJhbWUuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5pbm5lckhUTUw9XCJcIix0aGlzLnNlbGVjdG9yLmFwcGVuZENoaWxkKHRoaXMuc2xpZGVyRnJhbWUpLHRoaXMuc2xpZGVUb0N1cnJlbnQoKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lSXRlbVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHQuc3R5bGUuY3NzRmxvYXQ9dGhpcy5jb25maWcucnRsP1wicmlnaHRcIjpcImxlZnRcIix0LnN0eWxlLmZsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS53aWR0aD0odGhpcy5jb25maWcubG9vcD8xMDAvKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMip0aGlzLnBlclBhZ2UpOjEwMC90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKStcIiVcIix0LmFwcGVuZENoaWxkKGUpLHR9fSx7a2V5OlwicmVzb2x2ZVNsaWRlc051bWJlclwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYoXCJudW1iZXJcIj09dHlwZW9mIHRoaXMuY29uZmlnLnBlclBhZ2UpdGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2U7ZWxzZSBpZihcIm9iamVjdFwiPT09bih0aGlzLmNvbmZpZy5wZXJQYWdlKSl7dGhpcy5wZXJQYWdlPTE7Zm9yKHZhciBlIGluIHRoaXMuY29uZmlnLnBlclBhZ2Upd2luZG93LmlubmVyV2lkdGg+PWUmJih0aGlzLnBlclBhZ2U9dGhpcy5jb25maWcucGVyUGFnZVtlXSl9fX0se2tleTpcInByZXZcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXToxLHQ9YXJndW1lbnRzWzFdO2lmKCEodGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlKSl7dmFyIGk9dGhpcy5jdXJyZW50U2xpZGU7aWYodGhpcy5jb25maWcubG9vcCl7aWYodGhpcy5jdXJyZW50U2xpZGUtZTwwKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXItZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1heCh0aGlzLmN1cnJlbnRTbGlkZS1lLDApO2khPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQodGhpcy5jb25maWcubG9vcCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJuZXh0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlK2U+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2Upe3RoaXMuZGlzYWJsZVRyYW5zaXRpb24oKTt2YXIgcj10aGlzLmN1cnJlbnRTbGlkZS10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLG49dGhpcy5wZXJQYWdlLHM9cituLGw9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpzKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxvPXRoaXMuY29uZmlnLmRyYWdnYWJsZT90aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYOjA7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByb3BlcnR5XT1cInRyYW5zbGF0ZTNkKFwiKyhsK28pK1wicHgsIDAsIDApXCIsdGhpcy5jdXJyZW50U2xpZGU9citlfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9dGhpcy5jdXJyZW50U2xpZGUrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPU1hdGgubWluKHRoaXMuY3VycmVudFNsaWRlK2UsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpO2khPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQodGhpcy5jb25maWcubG9vcCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJkaXNhYmxlVHJhbnNpdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZW5hYmxlVHJhbnNpdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIFwiK3RoaXMuY29uZmlnLmR1cmF0aW9uK1wibXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZ319LHtrZXk6XCJnb1RvXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO3RoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/ZSV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWluKE1hdGgubWF4KGUsMCksdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLGkhPT10aGlzLmN1cnJlbnRTbGlkZSYmKHRoaXMuc2xpZGVUb0N1cnJlbnQoKSx0aGlzLmNvbmZpZy5vbkNoYW5nZS5jYWxsKHRoaXMpLHQmJnQuY2FsbCh0aGlzKSl9fX0se2tleTpcInNsaWRlVG9DdXJyZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxpPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlOnRoaXMuY3VycmVudFNsaWRlLHI9KHRoaXMuY29uZmlnLnJ0bD8xOi0xKSppKih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKTtlP3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3QuZW5hYmxlVHJhbnNpdGlvbigpLHQuc2xpZGVyRnJhbWUuc3R5bGVbdC50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIityK1wicHgsIDAsIDApXCJ9KX0pOnRoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIityK1wicHgsIDAsIDApXCJ9fSx7a2V5OlwidXBkYXRlQWZ0ZXJEcmFnXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT0odGhpcy5jb25maWcucnRsPy0xOjEpKih0aGlzLmRyYWcuZW5kWC10aGlzLmRyYWcuc3RhcnRYKSx0PU1hdGguYWJzKGUpLGk9dGhpcy5jb25maWcubXVsdGlwbGVEcmFnP01hdGguY2VpbCh0Lyh0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSk6MSxyPWU+MCYmdGhpcy5jdXJyZW50U2xpZGUtaTwwLG49ZTwwJiZ0aGlzLmN1cnJlbnRTbGlkZStpPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlO2U+MCYmdD50aGlzLmNvbmZpZy50aHJlc2hvbGQmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg+dGhpcy5wZXJQYWdlP3RoaXMucHJldihpKTplPDAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZSYmdGhpcy5uZXh0KGkpLHRoaXMuc2xpZGVUb0N1cnJlbnQocnx8bil9fSx7a2V5OlwicmVzaXplSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5yZXNvbHZlU2xpZGVzTnVtYmVyKCksdGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgmJih0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2U/MDp0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSksdGhpcy5zZWxlY3RvcldpZHRoPXRoaXMuc2VsZWN0b3Iub2Zmc2V0V2lkdGgsdGhpcy5idWlsZFNsaWRlckZyYW1lKCl9fSx7a2V5OlwiY2xlYXJEcmFnXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOnRoaXMuZHJhZy5wcmV2ZW50Q2xpY2t9fX0se2tleTpcInRvdWNoc3RhcnRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7LTEhPT1bXCJURVhUQVJFQVwiLFwiT1BUSU9OXCIsXCJJTlBVVFwiLFwiU0VMRUNUXCJdLmluZGV4T2YoZS50YXJnZXQubm9kZU5hbWUpfHwoZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS50b3VjaGVzWzBdLnBhZ2VYLHRoaXMuZHJhZy5zdGFydFk9ZS50b3VjaGVzWzBdLnBhZ2VZKX19LHtrZXk6XCJ0b3VjaGVuZEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy5kcmFnLmVuZFgmJnRoaXMudXBkYXRlQWZ0ZXJEcmFnKCksdGhpcy5jbGVhckRyYWcoKX19LHtrZXk6XCJ0b3VjaG1vdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZS5zdG9wUHJvcGFnYXRpb24oKSxudWxsPT09dGhpcy5kcmFnLmxldEl0R28mJih0aGlzLmRyYWcubGV0SXRHbz1NYXRoLmFicyh0aGlzLmRyYWcuc3RhcnRZLWUudG91Y2hlc1swXS5wYWdlWSk8TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WC1lLnRvdWNoZXNbMF0ucGFnZVgpKSx0aGlzLnBvaW50ZXJEb3duJiZ0aGlzLmRyYWcubGV0SXRHbyl7ZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZHJhZy5lbmRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZzt2YXIgdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxpPXQqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLHI9dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCxuPXRoaXMuY29uZmlnLnJ0bD9pK3I6aS1yO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisodGhpcy5jb25maWcucnRsPzE6LTEpKm4rXCJweCwgMCwgMClcIn19fSx7a2V5OlwibW91c2Vkb3duSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITAsdGhpcy5kcmFnLnN0YXJ0WD1lLnBhZ2VYKX19LHtrZXk6XCJtb3VzZXVwSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwibW91c2Vtb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSx0aGlzLnBvaW50ZXJEb3duKXtcIkFcIj09PWUudGFyZ2V0Lm5vZGVOYW1lJiYodGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMCksdGhpcy5kcmFnLmVuZFg9ZS5wYWdlWCx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYmJpbmdcIix0aGlzLnNsaWRlckZyYW1lLnN0eWxlLndlYmtpdFRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMG1zIFwiK3RoaXMuY29uZmlnLmVhc2luZzt2YXIgdD10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxpPXQqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLHI9dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCxuPXRoaXMuY29uZmlnLnJ0bD9pK3I6aS1yO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisodGhpcy5jb25maWcucnRsPzE6LTEpKm4rXCJweCwgMCwgMClcIn19fSx7a2V5OlwibW91c2VsZWF2ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnBvaW50ZXJEb3duJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMSx0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCkpfX0se2tleTpcImNsaWNrSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuZHJhZy5wcmV2ZW50Q2xpY2smJmUucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcucHJldmVudENsaWNrPSExfX0se2tleTpcInJlbW92ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoZTwwfHxlPj10aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkl0ZW0gdG8gcmVtb3ZlIGRvZXNuJ3QgZXhpc3Qg8J+YrVwiKTt2YXIgaT1lPHRoaXMuY3VycmVudFNsaWRlLHI9dGhpcy5jdXJyZW50U2xpZGUrdGhpcy5wZXJQYWdlLTE9PT1lOyhpfHxyKSYmdGhpcy5jdXJyZW50U2xpZGUtLSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKGUsMSksdGhpcy5idWlsZFNsaWRlckZyYW1lKCksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImluc2VydFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxpKXtpZih0PDB8fHQ+dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsxKXRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBpbnNldCBpdCBhdCB0aGlzIGluZGV4IPCfmK1cIik7aWYoLTEhPT10aGlzLmlubmVyRWxlbWVudHMuaW5kZXhPZihlKSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2FtZSBpdGVtIGluIGEgY2Fyb3VzZWw/IFJlYWxseT8gTm9wZSDwn5itXCIpO3ZhciByPXQ8PXRoaXMuY3VycmVudFNsaWRlPjAmJnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5jdXJyZW50U2xpZGU9cj90aGlzLmN1cnJlbnRTbGlkZSsxOnRoaXMuY3VycmVudFNsaWRlLHRoaXMuaW5uZXJFbGVtZW50cy5zcGxpY2UodCwwLGUpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLGkmJmkuY2FsbCh0aGlzKX19LHtrZXk6XCJwcmVwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLDApLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJhcHBlbmRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuaW5zZXJ0KGUsdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCsxKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXSx0PWFyZ3VtZW50c1sxXTtpZih0aGlzLmRldGFjaEV2ZW50cygpLHRoaXMuc2VsZWN0b3Iuc3R5bGUuY3Vyc29yPVwiYXV0b1wiLGUpe2Zvcih2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscj0wO3I8dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDtyKyspaS5hcHBlbmRDaGlsZCh0aGlzLmlubmVyRWxlbWVudHNbcl0pO3RoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZChpKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpfXQmJnQuY2FsbCh0aGlzKX19XSxbe2tleTpcIm1lcmdlU2V0dGluZ3NcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD17c2VsZWN0b3I6XCIuc2llbWFcIixkdXJhdGlvbjoyMDAsZWFzaW5nOlwiZWFzZS1vdXRcIixwZXJQYWdlOjEsc3RhcnRJbmRleDowLGRyYWdnYWJsZTohMCxtdWx0aXBsZURyYWc6ITAsdGhyZXNob2xkOjIwLGxvb3A6ITEscnRsOiExLG9uSW5pdDpmdW5jdGlvbigpe30sb25DaGFuZ2U6ZnVuY3Rpb24oKXt9fSxpPWU7Zm9yKHZhciByIGluIGkpdFtyXT1pW3JdO3JldHVybiB0fX0se2tleTpcIndlYmtpdE9yTm90XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybT9cInRyYW5zZm9ybVwiOlwiV2Via2l0VHJhbnNmb3JtXCJ9fV0pLGV9KCk7dC5kZWZhdWx0PWwsZS5leHBvcnRzPXQuZGVmYXVsdH1dKX0pOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYmxvY3M6IHtcbiAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgIGRlZmF1bHQ6IHt9XG4gIH1cbn07XG4iLCJjb25zdCB7IEJ1dHRvbiwgRGFzaGljb24sIFNwaW5uZXIgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IHVzZUVmZmVjdCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgTWVkaWFVcGxvYWQsIE1lZGlhVXBsb2FkQ2hlY2sgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyB1c2VTZWxlY3QgfSA9IHdwLmRhdGE7XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gW1wiaW1hZ2VcIl07XG5cbmNvbnN0IEFkZEltYWdlID0gKHsgcHJvcHMsIGluaXRDYXJvdXNlbCwgZGVzdHJveUNhcm91c2VsIH0pID0+IHtcbiAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcbiAgY29uc3QgeyBibG9jcyB9ID0gYXR0cmlidXRlcztcbiAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoYmxvY3MpLmxlbmd0aDtcbiAgY29uc3QgaW5kZXggPSBsZW5ndGg7XG4gIC8vIGdldCB0aGUgaW1hZ2UgaW5mbyBmb3IgbmV3IGltYWdlXG4gIGNvbnN0IGltYWdlID0gdXNlU2VsZWN0KFxuICAgIHNlbGVjdCA9PiB7XG4gICAgICBsZXQgbmV3UGljID0gbnVsbDtcbiAgICAgIC8vIHNlYXJjaCBpbWFnZSB3aXRoIG5ld0ltYWdlID09PSB0cnVlXG4gICAgICBPYmplY3Qua2V5cyhibG9jcykuZm9yRWFjaChiID0+IHtcbiAgICAgICAgaWYgKGJsb2NzW2JdLm5ld0ltYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgbmV3UGljID0gYmxvY3NbYl07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgeyBnZXRNZWRpYSB9ID0gc2VsZWN0KFwiY29yZVwiKTtcbiAgICAgIHJldHVybiBuZXdQaWMgPyBnZXRNZWRpYShuZXdQaWMuaW1hZ2VJZCkgOiB7fTtcbiAgICB9LFxuICAgIFtibG9jc11cbiAgKTtcbiAgLy8gdXBkYXRlIGltYWdlIGluZm8gdG8gYXR0cmlidXRlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGJsb2NzKTtcbiAgICBpZiAoaW1hZ2UgJiYgaW1hZ2UuaWQpIHtcbiAgICAgIGxldCBfaW5kZXggPSBudWxsO1xuICAgICAgLy8gc2VhcmNoIGluZmV4IGZvciBuZXdJbWFnZSA9PT0gdHJ1ZVxuICAgICAga2V5cy5mb3JFYWNoKGIgPT4ge1xuICAgICAgICBpZiAoYmxvY3NbYl0ubmV3SW1hZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICBfaW5kZXggPSBiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChfaW5kZXgpIHtcbiAgICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgYmxvY3M6IHtcbiAgICAgICAgICAgIC4uLmJsb2NzLFxuICAgICAgICAgICAgLi4ueyBbX2luZGV4XTogeyAuLi5ibG9jc1tfaW5kZXhdLCBpbWFnZSwgbmV3SW1hZ2U6IGZhbHNlIH0gfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbaW1hZ2VdKTtcblxuICBjb25zdCBvblVwZGF0ZUltYWdlID0gaW1hZ2UgPT4ge1xuICAgIGRlc3Ryb3lDYXJvdXNlbCgoKSA9PiB7XG4gICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgYmxvY3M6IHtcbiAgICAgICAgICAuLi5ibG9jcyxcbiAgICAgICAgICAuLi57XG4gICAgICAgICAgICBbaW5kZXhdOiB7XG4gICAgICAgICAgICAgIC4uLmJsb2NzW2luZGV4XSxcbiAgICAgICAgICAgICAgaW1hZ2VJZDogaW1hZ2UuaWQsXG4gICAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgICBuZXdJbWFnZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpbml0Q2Fyb3VzZWwoKTtcbiAgICB9LCB0cnVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lZGlhVXBsb2FkQ2hlY2s+XG4gICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgIHRpdGxlPXtfXyhcIkltYWdlXCIsIFwiXCIpfVxuICAgICAgICAgIG9uU2VsZWN0PXtvblVwZGF0ZUltYWdlfVxuICAgICAgICAgIGFsbG93ZWRUeXBlcz17QUxMT1dFRF9NRURJQV9UWVBFU31cbiAgICAgICAgICB2YWx1ZT17XCJcIn1cbiAgICAgICAgICByZW5kZXI9eyh7IG9wZW4gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW59XG4gICAgICAgICAgICAgICAgdGl0bGU9e19fKFwiYWRkIGltYWdlXCIsIFwiZ20tYmxvY1wiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJ1dHRvbiBlZGl0b3ItcG9zdC1wcmV2aWV3IGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLWxhcmdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtfXyhcImFkZCBpbWFnZVwiLCBcImdtLWJsb2NcIil9XG4gICAgICAgICAgICAgICAge1wiICBcIn1cbiAgICAgICAgICAgICAgICA8RGFzaGljb24gaWNvbj1cInBsdXMtYWx0XCIgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L01lZGlhVXBsb2FkQ2hlY2s+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRJbWFnZTtcbiIsImNvbnN0IHsgQnV0dG9uLCBEYXNoaWNvbiwgU3Bpbm5lciB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgUmljaFRleHQgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuY29uc3QgRWRpdEVsZW1lbnQgPSAoeyBwcm9wcywgaW5kZXgsIG9uUmVtb3ZlSW1hZ2UgfSkgPT4ge1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuICBjb25zdCB7IGJsb2NzIH0gPSBhdHRyaWJ1dGVzO1xuICBjb25zb2xlLmxvZyhibG9jcywgaW5kZXgsIGJsb2NzW2luZGV4XSk7XG5cbiAgY29uc3QgeyBpbWFnZUlkLCBpbWFnZSB9ID0gYmxvY3NbaW5kZXhdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtY2VsbFwiPlxuICAgICAgeyEhaW1hZ2VJZCAmJiAhaW1hZ2UgJiYgPFNwaW5uZXIgLz59XG4gICAgICB7aW1hZ2VJZCAmJiBpbWFnZSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2Uuc291cmNlX3VybH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZUltYWdlKGluZGV4KX1cbiAgICAgICAgICAgIHRpdGxlPXtfXyhcInJlbW92ZVwiLCBcImdtLWJsb2NcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhc2hpY29uIGljb249XCJkaXNtaXNzXCIgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRFbGVtZW50O1xuIiwiY29uc3QgeyBSaWNoVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuaW1wb3J0IFNhdmVJbWFnZSBmcm9tIFwiLi9zYXZlSW1hZ2VcIjtcblxuaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuY29uc3QgU2F2ZUVsZW1lbnQgPSAoeyBwcm9wcywgaW5kZXggfSkgPT4ge1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuICBjb25zdCB7IGJsb2NzIH0gPSBhdHRyaWJ1dGVzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtY2VsbFwiPlxuICAgICAgPFNhdmVJbWFnZSBpbmRleD17aW5kZXh9IHByb3BzPXtwcm9wc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmVFbGVtZW50O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuY29uc3QgU2F2ZUltYWdlID0gKHsgcHJvcHMsIGluZGV4IH0pID0+IHtcbiAgY29uc3QgeyBibG9jcyB9ID0gcHJvcHMuYXR0cmlidXRlcztcbiAgY29uc3QgeyBpbWFnZSB9ID0gYmxvY3NbaW5kZXhdO1xuICBpZiAoIWltYWdlKSByZXR1cm4gPD48Lz47XG4gIGNvbnN0IHsgbWVkaWFfZGV0YWlscywgYWx0X3RleHQsIHNvdXJjZV91cmwgfSA9IGltYWdlO1xuICBpZiAoIW1lZGlhX2RldGFpbHMpIHJldHVybiA8PjwvPjtcbiAgY29uc3QgeyBzaXplcyB9ID0gbWVkaWFfZGV0YWlscztcbiAgY29uc3QgeyBsYXJnZSwgZnVsbCwgZ21fbW9iaWxlX3NpemUgfSA9IHNpemVzO1xuICBjb25zdCBwaWMgPSBsYXJnZSB8fCBmdWxsO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17cGljID8gcGljLnNvdXJjZV91cmwgOiBzb3VyY2VfdXJsfVxuICAgICAgICBzcmNTZXQ9e2Ake1xuICAgICAgICAgIGdtX21vYmlsZV9zaXplID8gZ21fbW9iaWxlX3NpemUuc291cmNlX3VybCA6IHBpYy5zb3VyY2VfdXJsXG4gICAgICAgIH0gNjAwd2B9XG4gICAgICAgIGFsdD17YWx0X3RleHR9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2F2ZUltYWdlO1xuIiwiY29uc3QgeyBCdXR0b24sIERhc2hpY29uIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSA9IHdwLmVsZW1lbnQ7XG5pbXBvcnQgRWRpdEVsZW1lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9lZGl0RWxlbWVudFwiO1xuaW1wb3J0IFNpZW1hIGZyb20gXCJzaWVtYVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEFkZEltYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvYWRkSW1hZ2VcIjtcblxuY29uc3QgbW9kZWwgPSB7XG4gIGltYWdlOiB1bmRlZmluZWQsXG4gIGltYWdlSWQ6IHVuZGVmaW5lZFxufTtcblxuY29uc3QgRWRpdCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcbiAgY29uc3QgeyBibG9jcyB9ID0gYXR0cmlidXRlcztcbiAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmKCk7XG4gIC8vIHJlZiB0byBjYXJvdXNlbFxuICBsZXQgY2Fyb3VzZWwgPSB1c2VSZWYoKTtcblxuICAvLyBkZXN0cm95IGNhcm91c2VsIG9uIGNoYW5nZSBlbGVtZW50XG4gIGNvbnN0IGRlc3Ryb3lDYXJvdXNlbCA9IChjYiA9ICgpID0+IHRydWUsIHJlc2V0RG9tID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChjYXJvdXNlbC5jdXJyZW50KSBjYXJvdXNlbC5jdXJyZW50LmRlc3Ryb3kocmVzZXREb20sIGNiKTtcbiAgfTtcblxuICAvLyByZSBpbml0IGNhcm91c2VsIHdpdGggbmV3IGVsZW1lbnRcbiAgY29uc3QgaW5pdENhcm91c2VsID0gKHJlbW92ZSA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKGNhcm91c2VsLmN1cnJlbnQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBjb250YWluZXIuY3VycmVudC5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICAgICAgY2Fyb3VzZWwuY3VycmVudCA9IG5ldyBTaWVtYSh7XG4gICAgICAgICAgc2VsZWN0b3I6IGNvbnRhaW5lci5jdXJyZW50XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IF9pID0gcmVtb3ZlID09PSB0cnVlID8gbGVuZ3RoIC0gMSA6IGxlbmd0aDtcbiAgICAgICAgICBjYXJvdXNlbC5jdXJyZW50LmdvVG8oX2kgPCAwID8gMSA6IF9pKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gaW5pdCBjYXJvdXNlbCBvbiBtb3VudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNhcm91c2VsLmN1cnJlbnQgPSBuZXcgU2llbWEoe1xuICAgICAgc2VsZWN0b3I6IGNvbnRhaW5lci5jdXJyZW50XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyByZW1vdmUgaW1hZ2VcbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IGkgPT4ge1xuICAgIGRlc3Ryb3lDYXJvdXNlbCgoKSA9PiB7XG4gICAgICBjb25zdCBfYmxvY3MgPSB7IC4uLmJsb2NzIH07XG4gICAgICBkZWxldGUgX2Jsb2NzW2ldO1xuICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIGJsb2NzOiBfYmxvY3NcbiAgICAgIH0pO1xuICAgICAgaW5pdENhcm91c2VsKHRydWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1ibG9jLWVkaXRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtY29udGFpbmVyXCIgcmVmPXtjb250YWluZXJ9PlxuICAgICAgICB7T2JqZWN0LmtleXMoYmxvY3MpLm1hcChiID0+IChcbiAgICAgICAgICA8RWRpdEVsZW1lbnRcbiAgICAgICAgICAgIG9uUmVtb3ZlSW1hZ2U9e29uUmVtb3ZlSW1hZ2V9XG4gICAgICAgICAgICBwcm9wcz17cHJvcHN9XG4gICAgICAgICAgICBrZXk9e2Ake2Jsb2NzW2JdLmltYWdlSWR9ICR7Yn1gfVxuICAgICAgICAgICAgaW5kZXg9e2J9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtYWRkLWJsb2NcIj5cbiAgICAgICAgPEFkZEltYWdlXG4gICAgICAgICAgaW5pdENhcm91c2VsPXtpbml0Q2Fyb3VzZWx9XG4gICAgICAgICAgZGVzdHJveUNhcm91c2VsPXtkZXN0cm95Q2Fyb3VzZWx9XG4gICAgICAgICAgcHJvcHM9e3Byb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIiwiY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IGVkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IHNhdmUgZnJvbSBcIi4vc2F2ZVwiO1xuaW1wb3J0IGF0dHJpYnV0ZXMgZnJvbSBcIi4vYXR0cmlidXRlc1wiO1xuXG5yZWdpc3RlckJsb2NrVHlwZShcImdtL2Nhcm91c2VsXCIsIHtcbiAgdGl0bGU6IFwiQmxvY2sgY2Fyb3VzZWxcIixcbiAgZGVzY3JpcHRpb246IFwiY2Fyb3VzZWwgZm9yIHNob3cgcGhvdG9cIixcbiAgaWNvbjogXCJzdGFyLWZpbGxlZFwiLFxuICBjYXRlZ29yeTogXCJ0aGVtZS1ibG9ja3NcIixcbiAgYXR0cmlidXRlcyxcbiAgZWRpdCxcbiAgc2F2ZVxufSk7XG4iLCJjb25zdCB7IFJpY2hUZXh0IH0gPSB3cC5ibG9ja0VkaXRvcjtcbmltcG9ydCBTYXZlRWxlbWVudCBmcm9tIFwiLi9jb21wb25lbnRzL3NhdmVFbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuY29uc3QgU2F2ZSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBibG9jcyB9ID0gcHJvcHMuYXR0cmlidXRlcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWNvbnRhaW5lclwiPlxuICAgICAge09iamVjdC5rZXlzKGJsb2NzKS5tYXAoYiA9PiAoXG4gICAgICAgIDxTYXZlRWxlbWVudCBwcm9wcz17cHJvcHN9IGtleT17Yn0gaW5kZXg9e2J9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIndwXCJdW1wiZWxlbWVudFwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9