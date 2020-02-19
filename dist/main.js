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
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (carousel.current) {
      setTimeout(function () {
        // total items
        var length = container.current.childNodes.length; // init new carousel

        carousel.current = new siema__WEBPACK_IMPORTED_MODULE_3___default.a({
          selector: container.current
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
      selector: container.current
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpZW1hL2Rpc3Qvc2llbWEubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lZGl0RWxlbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2F2ZUVsZW1lbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NhdmVJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2F2ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2VlMDEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInRoaXNcIjpbXCJ3cFwiLFwiZWxlbWVudFwiXX0iXSwibmFtZXMiOlsiYmxvY3MiLCJ0eXBlIiwiZGVmYXVsdCIsIndwIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsIkRhc2hpY29uIiwiU3Bpbm5lciIsInVzZUVmZmVjdCIsImVsZW1lbnQiLCJibG9ja0VkaXRvciIsIk1lZGlhVXBsb2FkIiwiTWVkaWFVcGxvYWRDaGVjayIsInVzZVNlbGVjdCIsImRhdGEiLCJfXyIsImkxOG4iLCJBTExPV0VEX01FRElBX1RZUEVTIiwiQWRkSW1hZ2UiLCJwcm9wcyIsImluaXRDYXJvdXNlbCIsImRlc3Ryb3lDYXJvdXNlbCIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGVzIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsImluZGV4IiwiaW1hZ2UiLCJzZWxlY3QiLCJuZXdQaWMiLCJmb3JFYWNoIiwiYiIsIm5ld0ltYWdlIiwiZ2V0TWVkaWEiLCJpbWFnZUlkIiwiaWQiLCJfaW5kZXgiLCJvblVwZGF0ZUltYWdlIiwib3BlbiIsIlJpY2hUZXh0IiwiRWRpdEVsZW1lbnQiLCJvblJlbW92ZUltYWdlIiwiY29uc29sZSIsImxvZyIsInNvdXJjZV91cmwiLCJTYXZlRWxlbWVudCIsIlNhdmVJbWFnZSIsIm1lZGlhX2RldGFpbHMiLCJhbHRfdGV4dCIsInNpemVzIiwibGFyZ2UiLCJmdWxsIiwiZ21fbW9iaWxlX3NpemUiLCJwaWMiLCJ1c2VSZWYiLCJtb2RlbCIsInVuZGVmaW5lZCIsIkVkaXQiLCJjb250YWluZXIiLCJjYXJvdXNlbCIsImNiIiwicmVzZXREb20iLCJjdXJyZW50IiwiZGVzdHJveSIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJjaGlsZE5vZGVzIiwiU2llbWEiLCJzZWxlY3RvciIsIl9pIiwiZ29UbyIsImkiLCJfYmxvY3MiLCJuZXdCbG9jcyIsImUiLCJtYXAiLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2F0ZWdvcnkiLCJlZGl0Iiwic2F2ZSIsIlNhdmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFt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Q0FoRkQ7O0FBa0ZldUMsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7OztJQy9GUW1CLGlCLEdBQXNCMUUsRUFBRSxDQUFDMkUsTSxDQUF6QkQsaUI7SUFDQTlELEUsR0FBT1osRUFBRSxDQUFDYSxJLENBQVZELEU7QUFFUjtBQUNBO0FBQ0E7QUFFQThELGlCQUFpQixDQUFDLGFBQUQsRUFBZ0I7QUFDL0JFLE9BQUssRUFBRSxnQkFEd0I7QUFFL0JDLGFBQVcsRUFBRSx5QkFGa0I7QUFHL0JDLE1BQUksRUFBRSxhQUh5QjtBQUkvQkMsVUFBUSxFQUFFLGNBSnFCO0FBSy9CNUQsWUFBVSxFQUFWQSxtREFMK0I7QUFNL0I2RCxNQUFJLEVBQUpBLDZDQU4rQjtBQU8vQkMsTUFBSSxFQUFKQSw2Q0FBSUE7QUFQMkIsQ0FBaEIsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1BRNUMsUSxHQUFhckMsRUFBRSxDQUFDTyxXLENBQWhCOEIsUTtBQUNSO0FBRUE7O0FBRUEsSUFBTTZDLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFsRSxLQUFLLEVBQUk7QUFBQSxNQUNabkIsS0FEWSxHQUNGbUIsS0FBSyxDQUFDRyxVQURKLENBQ1p0QixLQURZO0FBRXBCLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHeUIsTUFBTSxDQUFDQyxJQUFQLENBQVkxQixLQUFaLEVBQW1CNEUsR0FBbkIsQ0FBdUIsVUFBQTVDLENBQUM7QUFBQSxXQUN2Qix5RUFBQywrREFBRDtBQUFhLFdBQUssRUFBRWIsS0FBcEI7QUFBMkIsU0FBRyxFQUFFYSxDQUFoQztBQUFtQyxXQUFLLEVBQUVBO0FBQTFDLE1BRHVCO0FBQUEsR0FBeEIsQ0FESCxDQURGO0FBT0QsQ0FURDs7QUFXZXFELG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDaEJBLHVDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsd0NBQXdDLEVBQUUsSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJTaWVtYVwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2llbWE9dCgpOmUuU2llbWE9dCgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihpW3JdKXJldHVybiBpW3JdLmV4cG9ydHM7dmFyIG49aVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sPSEwLG4uZXhwb3J0c312YXIgaT17fTtyZXR1cm4gdC5tPWUsdC5jPWksdC5kPWZ1bmN0aW9uKGUsaSxyKXt0Lm8oZSxpKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBpPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQoaSxcImFcIixpKSxpfSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIlwiLHQodC5zPTApfShbZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciByPXRbaV07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxpLHIpe3JldHVybiBpJiZlKHQucHJvdG90eXBlLGkpLHImJmUodCxyKSx0fX0oKSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgaT10aGlzO2lmKHIodGhpcyxlKSx0aGlzLmNvbmZpZz1lLm1lcmdlU2V0dGluZ3ModCksdGhpcy5zZWxlY3Rvcj1cInN0cmluZ1wiPT10eXBlb2YgdGhpcy5jb25maWcuc2VsZWN0b3I/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zZWxlY3Rvcik6dGhpcy5jb25maWcuc2VsZWN0b3IsbnVsbD09PXRoaXMuc2VsZWN0b3IpdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdyb25nIHdpdGggeW91ciBzZWxlY3RvciDwn5itXCIpO3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuaW5uZXJFbGVtZW50cz1bXS5zbGljZS5jYWxsKHRoaXMuc2VsZWN0b3IuY2hpbGRyZW4pLHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jb25maWcuc3RhcnRJbmRleCV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWF4KDAsTWF0aC5taW4odGhpcy5jb25maWcuc3RhcnRJbmRleCx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSkpLHRoaXMudHJhbnNmb3JtUHJvcGVydHk9ZS53ZWJraXRPck5vdCgpLFtcInJlc2l6ZUhhbmRsZXJcIixcInRvdWNoc3RhcnRIYW5kbGVyXCIsXCJ0b3VjaGVuZEhhbmRsZXJcIixcInRvdWNobW92ZUhhbmRsZXJcIixcIm1vdXNlZG93bkhhbmRsZXJcIixcIm1vdXNldXBIYW5kbGVyXCIsXCJtb3VzZWxlYXZlSGFuZGxlclwiLFwibW91c2Vtb3ZlSGFuZGxlclwiLFwiY2xpY2tIYW5kbGVyXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7aVtlXT1pW2VdLmJpbmQoaSl9KSx0aGlzLmluaXQoKX1yZXR1cm4gcyhlLFt7a2V5OlwiYXR0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOiExfSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKSl9fSx7a2V5OlwiZGV0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcil9fSx7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsdGhpcy5zZWxlY3Rvci5zdHlsZS5kaXJlY3Rpb249dGhpcy5jb25maWcucnRsP1wicnRsXCI6XCJsdHJcIix0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSx0aGlzLmNvbmZpZy5vbkluaXQuY2FsbCh0aGlzKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlLHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlOnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5zbGlkZXJGcmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2lkdGg9ZSp0K1wicHhcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYodGhpcy5jb25maWcubG9vcClmb3IodmFyIHI9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2U7cjx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3IrKyl7dmFyIG49dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbcl0uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChuKX1mb3IodmFyIHM9MDtzPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgbD10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tzXSk7aS5hcHBlbmRDaGlsZChsKX1pZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgbz0wO288dGhpcy5wZXJQYWdlO28rKyl7dmFyIGE9dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbb10uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChhKX10aGlzLnNsaWRlckZyYW1lLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlckZyYW1lKSx0aGlzLnNsaWRlVG9DdXJyZW50KCl9fSx7a2V5OlwiYnVpbGRTbGlkZXJGcmFtZUl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LnN0eWxlLmNzc0Zsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS5mbG9hdD10aGlzLmNvbmZpZy5ydGw/XCJyaWdodFwiOlwibGVmdFwiLHQuc3R5bGUud2lkdGg9KHRoaXMuY29uZmlnLmxvb3A/MTAwLyh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlKToxMDAvdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCkrXCIlXCIsdC5hcHBlbmRDaGlsZChlKSx0fX0se2tleTpcInJlc29sdmVTbGlkZXNOdW1iZXJcIix2YWx1ZTpmdW5jdGlvbigpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5wZXJQYWdlKXRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlO2Vsc2UgaWYoXCJvYmplY3RcIj09PW4odGhpcy5jb25maWcucGVyUGFnZSkpe3RoaXMucGVyUGFnZT0xO2Zvcih2YXIgZSBpbiB0aGlzLmNvbmZpZy5wZXJQYWdlKXdpbmRvdy5pbm5lcldpZHRoPj1lJiYodGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2VbZV0pfX19LHtrZXk6XCJwcmV2XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlLWU8MCl7dGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO3ZhciByPXRoaXMuY3VycmVudFNsaWRlK3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgsbj10aGlzLnBlclBhZ2Uscz1yK24sbD0odGhpcy5jb25maWcucnRsPzE6LTEpKnMqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLG89dGhpcy5jb25maWcuZHJhZ2dhYmxlP3RoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFg6MDt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKGwrbykrXCJweCwgMCwgMClcIix0aGlzLmN1cnJlbnRTbGlkZT1yLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmN1cnJlbnRTbGlkZS1lfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9TWF0aC5tYXgodGhpcy5jdXJyZW50U2xpZGUtZSwwKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwibmV4dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsdD1hcmd1bWVudHNbMV07aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTtpZih0aGlzLmNvbmZpZy5sb29wKXtpZih0aGlzLmN1cnJlbnRTbGlkZStlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUtdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXIrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlK2V9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1pbih0aGlzLmN1cnJlbnRTbGlkZStlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwiZGlzYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nfX0se2tleTpcImVuYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZ29Ub1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTt0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5sb29wP2UldGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDpNYXRoLm1pbihNYXRoLm1heChlLDApLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSxpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJzbGlkZVRvQ3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxyPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqaSoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSk7ZT9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LmVuYWJsZVRyYW5zaXRpb24oKSx0LnNsaWRlckZyYW1lLnN0eWxlW3QudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifSl9KTp0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifX0se2tleTpcInVwZGF0ZUFmdGVyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9KHRoaXMuY29uZmlnLnJ0bD8tMToxKSoodGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCksdD1NYXRoLmFicyhlKSxpPXRoaXMuY29uZmlnLm11bHRpcGxlRHJhZz9NYXRoLmNlaWwodC8odGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkpOjEscj1lPjAmJnRoaXMuY3VycmVudFNsaWRlLWk8MCxuPWU8MCYmdGhpcy5jdXJyZW50U2xpZGUraT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtlPjAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZT90aGlzLnByZXYoaSk6ZTwwJiZ0PnRoaXMuY29uZmlnLnRocmVzaG9sZCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aD50aGlzLnBlclBhZ2UmJnRoaXMubmV4dChpKSx0aGlzLnNsaWRlVG9DdXJyZW50KHJ8fG4pfX0se2tleTpcInJlc2l6ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoJiYodGhpcy5jdXJyZW50U2xpZGU9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlPzA6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpfX0se2tleTpcImNsZWFyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazp0aGlzLmRyYWcucHJldmVudENsaWNrfX19LHtrZXk6XCJ0b3VjaHN0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLmRyYWcuc3RhcnRZPWUudG91Y2hlc1swXS5wYWdlWSl9fSx7a2V5OlwidG91Y2hlbmRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwidG91Y2htb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUuc3RvcFByb3BhZ2F0aW9uKCksbnVsbD09PXRoaXMuZHJhZy5sZXRJdEdvJiYodGhpcy5kcmFnLmxldEl0R289TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WS1lLnRvdWNoZXNbMF0ucGFnZVkpPE1hdGguYWJzKHRoaXMuZHJhZy5zdGFydFgtZS50b3VjaGVzWzBdLnBhZ2VYKSksdGhpcy5wb2ludGVyRG93biYmdGhpcy5kcmFnLmxldEl0R28pe2UucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcuZW5kWD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlZG93bkhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXstMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZSl8fChlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS5wYWdlWCl9fSx7a2V5OlwibW91c2V1cEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcIm1vdXNlbW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksdGhpcy5wb2ludGVyRG93bil7XCJBXCI9PT1lLnRhcmdldC5ub2RlTmFtZSYmKHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITApLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJiaW5nXCIsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlbGVhdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5wb2ludGVyRG93biYmKHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpKX19LHtrZXk6XCJjbGlja0hhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmRyYWcucHJldmVudENsaWNrJiZlLnByZXZlbnREZWZhdWx0KCksdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMX19LHtrZXk6XCJyZW1vdmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKGU8MHx8ZT49dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJdGVtIHRvIHJlbW92ZSBkb2Vzbid0IGV4aXN0IPCfmK1cIik7dmFyIGk9ZTx0aGlzLmN1cnJlbnRTbGlkZSxyPXRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZS0xPT09ZTsoaXx8cikmJnRoaXMuY3VycmVudFNsaWRlLS0sdGhpcy5pbm5lckVsZW1lbnRzLnNwbGljZShlLDEpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJpbnNlcnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7aWYodDwwfHx0PnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5zZXQgaXQgYXQgdGhpcyBpbmRleCDwn5itXCIpO2lmKC0xIT09dGhpcy5pbm5lckVsZW1lbnRzLmluZGV4T2YoZSkpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNhbWUgaXRlbSBpbiBhIGNhcm91c2VsPyBSZWFsbHk/IE5vcGUg8J+YrVwiKTt2YXIgcj10PD10aGlzLmN1cnJlbnRTbGlkZT4wJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuY3VycmVudFNsaWRlPXI/dGhpcy5jdXJyZW50U2xpZGUrMTp0aGlzLmN1cnJlbnRTbGlkZSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKHQsMCxlKSx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSxpJiZpLmNhbGwodGhpcyl9fSx7a2V5OlwicHJlcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSwwKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiYXBwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sdD1hcmd1bWVudHNbMV07aWYodGhpcy5kZXRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cImF1dG9cIixlKXtmb3IodmFyIGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHI9MDtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKWkuYXBwZW5kQ2hpbGQodGhpcy5pbm5lckVsZW1lbnRzW3JdKTt0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKX10JiZ0LmNhbGwodGhpcyl9fV0sW3trZXk6XCJtZXJnZVNldHRpbmdzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9e3NlbGVjdG9yOlwiLnNpZW1hXCIsZHVyYXRpb246MjAwLGVhc2luZzpcImVhc2Utb3V0XCIscGVyUGFnZToxLHN0YXJ0SW5kZXg6MCxkcmFnZ2FibGU6ITAsbXVsdGlwbGVEcmFnOiEwLHRocmVzaG9sZDoyMCxsb29wOiExLHJ0bDohMSxvbkluaXQ6ZnVuY3Rpb24oKXt9LG9uQ2hhbmdlOmZ1bmN0aW9uKCl7fX0saT1lO2Zvcih2YXIgciBpbiBpKXRbcl09aVtyXTtyZXR1cm4gdH19LHtrZXk6XCJ3ZWJraXRPck5vdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0/XCJ0cmFuc2Zvcm1cIjpcIldlYmtpdFRyYW5zZm9ybVwifX1dKSxlfSgpO3QuZGVmYXVsdD1sLGUuZXhwb3J0cz10LmRlZmF1bHR9XSl9KTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGJsb2NzOiB7XG4gICAgdHlwZTogXCJvYmplY3RcIixcbiAgICBkZWZhdWx0OiB7fVxuICB9XG59O1xuIiwiY29uc3QgeyBCdXR0b24sIERhc2hpY29uLCBTcGlubmVyIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IE1lZGlhVXBsb2FkLCBNZWRpYVVwbG9hZENoZWNrIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgdXNlU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFtcImltYWdlXCJdO1xuXG5jb25zdCBBZGRJbWFnZSA9ICh7IHByb3BzLCBpbml0Q2Fyb3VzZWwsIGRlc3Ryb3lDYXJvdXNlbCB9KSA9PiB7XG4gIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgYmxvY3MgfSA9IGF0dHJpYnV0ZXM7XG4gIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKGJsb2NzKS5sZW5ndGg7XG4gIGNvbnN0IGluZGV4ID0gbGVuZ3RoO1xuICAvLyBnZXQgdGhlIGltYWdlIGluZm8gZm9yIG5ldyBpbWFnZVxuICBjb25zdCBpbWFnZSA9IHVzZVNlbGVjdChcbiAgICBzZWxlY3QgPT4ge1xuICAgICAgbGV0IG5ld1BpYyA9IG51bGw7XG4gICAgICAvLyBzZWFyY2ggaW1hZ2Ugd2l0aCBuZXdJbWFnZSA9PT0gdHJ1ZVxuICAgICAgT2JqZWN0LmtleXMoYmxvY3MpLmZvckVhY2goYiA9PiB7XG4gICAgICAgIGlmIChibG9jc1tiXS5uZXdJbWFnZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG5ld1BpYyA9IGJsb2NzW2JdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHsgZ2V0TWVkaWEgfSA9IHNlbGVjdChcImNvcmVcIik7XG4gICAgICByZXR1cm4gbmV3UGljID8gZ2V0TWVkaWEobmV3UGljLmltYWdlSWQpIDoge307XG4gICAgfSxcbiAgICBbYmxvY3NdXG4gICk7XG4gIC8vIHVwZGF0ZSBpbWFnZSBpbmZvIHRvIGF0dHJpYnV0ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhibG9jcyk7XG4gICAgaWYgKGltYWdlICYmIGltYWdlLmlkKSB7XG4gICAgICBsZXQgX2luZGV4ID0gbnVsbDtcbiAgICAgIC8vIHNlYXJjaCBpbmZleCBmb3IgbmV3SW1hZ2UgPT09IHRydWVcbiAgICAgIGtleXMuZm9yRWFjaChiID0+IHtcbiAgICAgICAgaWYgKGJsb2NzW2JdLm5ld0ltYWdlID09PSB0cnVlKSB7XG4gICAgICAgICAgX2luZGV4ID0gYjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoX2luZGV4KSB7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgIGJsb2NzOiB7XG4gICAgICAgICAgICAuLi5ibG9jcyxcbiAgICAgICAgICAgIC4uLnsgW19pbmRleF06IHsgLi4uYmxvY3NbX2luZGV4XSwgaW1hZ2UsIG5ld0ltYWdlOiBmYWxzZSB9IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2ltYWdlXSk7XG5cbiAgY29uc3Qgb25VcGRhdGVJbWFnZSA9IGltYWdlID0+IHtcbiAgICBkZXN0cm95Q2Fyb3VzZWwoKCkgPT4ge1xuICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIGJsb2NzOiB7XG4gICAgICAgICAgLi4uYmxvY3MsXG4gICAgICAgICAgLi4ue1xuICAgICAgICAgICAgW2luZGV4XToge1xuICAgICAgICAgICAgICAuLi5ibG9jc1tpbmRleF0sXG4gICAgICAgICAgICAgIGltYWdlSWQ6IGltYWdlLmlkLFxuICAgICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgICAgbmV3SW1hZ2U6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaW5pdENhcm91c2VsKCk7XG4gICAgfSwgdHJ1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNZWRpYVVwbG9hZENoZWNrPlxuICAgICAgICA8TWVkaWFVcGxvYWRcbiAgICAgICAgICB0aXRsZT17X18oXCJJbWFnZVwiLCBcIlwiKX1cbiAgICAgICAgICBvblNlbGVjdD17b25VcGRhdGVJbWFnZX1cbiAgICAgICAgICBhbGxvd2VkVHlwZXM9e0FMTE9XRURfTUVESUFfVFlQRVN9XG4gICAgICAgICAgdmFsdWU9e1wiXCJ9XG4gICAgICAgICAgcmVuZGVyPXsoeyBvcGVuIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVufVxuICAgICAgICAgICAgICAgIHRpdGxlPXtfXyhcImFkZCBpbWFnZVwiLCBcImdtLWJsb2NcIil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1idXR0b24gZWRpdG9yLXBvc3QtcHJldmlldyBpcy1idXR0b24gaXMtZGVmYXVsdCBpcy1sYXJnZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7X18oXCJhZGQgaW1hZ2VcIiwgXCJnbS1ibG9jXCIpfVxuICAgICAgICAgICAgICAgIHtcIiAgXCJ9XG4gICAgICAgICAgICAgICAgPERhc2hpY29uIGljb249XCJwbHVzLWFsdFwiIC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9NZWRpYVVwbG9hZENoZWNrPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkSW1hZ2U7XG4iLCJjb25zdCB7IEJ1dHRvbiwgRGFzaGljb24sIFNwaW5uZXIgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IFJpY2hUZXh0IH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IEVkaXRFbGVtZW50ID0gKHsgcHJvcHMsIGluZGV4LCBvblJlbW92ZUltYWdlIH0pID0+IHtcbiAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcbiAgY29uc3QgeyBibG9jcyB9ID0gYXR0cmlidXRlcztcbiAgY29uc29sZS5sb2coYmxvY3MsIGluZGV4LCBibG9jc1tpbmRleF0pO1xuXG4gIGNvbnN0IHsgaW1hZ2VJZCwgaW1hZ2UgfSA9IGJsb2NzW2luZGV4XTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWNlbGxcIj5cbiAgICAgIHshIWltYWdlSWQgJiYgIWltYWdlICYmIDxTcGlubmVyIC8+fVxuICAgICAge2ltYWdlSWQgJiYgaW1hZ2UgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlLnNvdXJjZV91cmx9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25SZW1vdmVJbWFnZShpbmRleCl9XG4gICAgICAgICAgICB0aXRsZT17X18oXCJyZW1vdmVcIiwgXCJnbS1ibG9jXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXNoaWNvbiBpY29uPVwiZGlzbWlzc1wiIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0RWxlbWVudDtcbiIsImNvbnN0IHsgUmljaFRleHQgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmltcG9ydCBTYXZlSW1hZ2UgZnJvbSBcIi4vc2F2ZUltYWdlXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IFNhdmVFbGVtZW50ID0gKHsgcHJvcHMsIGluZGV4IH0pID0+IHtcbiAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcbiAgY29uc3QgeyBibG9jcyB9ID0gYXR0cmlidXRlcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWNlbGxcIj5cbiAgICAgIDxTYXZlSW1hZ2UgaW5kZXg9e2luZGV4fSBwcm9wcz17cHJvcHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYXZlRWxlbWVudDtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IFNhdmVJbWFnZSA9ICh7IHByb3BzLCBpbmRleCB9KSA9PiB7XG4gIGNvbnN0IHsgYmxvY3MgfSA9IHByb3BzLmF0dHJpYnV0ZXM7XG4gIGNvbnN0IHsgaW1hZ2UgfSA9IGJsb2NzW2luZGV4XTtcbiAgaWYgKCFpbWFnZSkgcmV0dXJuIDw+PC8+O1xuICBjb25zdCB7IG1lZGlhX2RldGFpbHMsIGFsdF90ZXh0LCBzb3VyY2VfdXJsIH0gPSBpbWFnZTtcbiAgaWYgKCFtZWRpYV9kZXRhaWxzKSByZXR1cm4gPD48Lz47XG4gIGNvbnN0IHsgc2l6ZXMgfSA9IG1lZGlhX2RldGFpbHM7XG4gIGNvbnN0IHsgbGFyZ2UsIGZ1bGwsIGdtX21vYmlsZV9zaXplIH0gPSBzaXplcztcbiAgY29uc3QgcGljID0gbGFyZ2UgfHwgZnVsbDtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e3BpYyA/IHBpYy5zb3VyY2VfdXJsIDogc291cmNlX3VybH1cbiAgICAgICAgc3JjU2V0PXtgJHtcbiAgICAgICAgICBnbV9tb2JpbGVfc2l6ZSA/IGdtX21vYmlsZV9zaXplLnNvdXJjZV91cmwgOiBwaWMuc291cmNlX3VybFxuICAgICAgICB9IDYwMHdgfVxuICAgICAgICBhbHQ9e2FsdF90ZXh0fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmVJbWFnZTtcbiIsImNvbnN0IHsgQnV0dG9uLCBEYXNoaWNvbiB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gPSB3cC5lbGVtZW50O1xuaW1wb3J0IEVkaXRFbGVtZW50IGZyb20gXCIuL2NvbXBvbmVudHMvZWRpdEVsZW1lbnRcIjtcbmltcG9ydCBTaWVtYSBmcm9tIFwic2llbWFcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBBZGRJbWFnZSBmcm9tIFwiLi9jb21wb25lbnRzL2FkZEltYWdlXCI7XG5cbmNvbnN0IG1vZGVsID0ge1xuICBpbWFnZTogdW5kZWZpbmVkLFxuICBpbWFnZUlkOiB1bmRlZmluZWRcbn07XG5cbmNvbnN0IEVkaXQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgYmxvY3MgfSA9IGF0dHJpYnV0ZXM7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHVzZVJlZigpO1xuICAvLyByZWYgdG8gY2Fyb3VzZWxcbiAgbGV0IGNhcm91c2VsID0gdXNlUmVmKCk7XG5cbiAgLy8gZGVzdHJveSBjYXJvdXNlbCBvbiBjaGFuZ2UgZWxlbWVudFxuICBjb25zdCBkZXN0cm95Q2Fyb3VzZWwgPSAoY2IgPSAoKSA9PiB0cnVlLCByZXNldERvbSA9IHRydWUpID0+IHtcbiAgICBpZiAoY2Fyb3VzZWwuY3VycmVudCkgY2Fyb3VzZWwuY3VycmVudC5kZXN0cm95KHJlc2V0RG9tLCBjYik7XG4gIH07XG5cbiAgLy8gcmUgaW5pdCBjYXJvdXNlbCB3aXRoIG5ldyBlbGVtZW50XG4gIGNvbnN0IGluaXRDYXJvdXNlbCA9IChyZW1vdmUgPSBmYWxzZSwgaW5kZXggPSAwKSA9PiB7XG4gICAgaWYgKGNhcm91c2VsLmN1cnJlbnQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyB0b3RhbCBpdGVtc1xuICAgICAgICBjb25zdCBsZW5ndGggPSBjb250YWluZXIuY3VycmVudC5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICAgICAgLy8gaW5pdCBuZXcgY2Fyb3VzZWxcbiAgICAgICAgY2Fyb3VzZWwuY3VycmVudCA9IG5ldyBTaWVtYSh7XG4gICAgICAgICAgc2VsZWN0b3I6IGNvbnRhaW5lci5jdXJyZW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gaWYgcmVtb3ZlLCB0YWtlIGluZGV4IG9mIGJsb2MgcmVtb3ZlZCAtIDEgb3IgdGFrZSBsYXN0XG4gICAgICAgICAgY29uc3QgX2kgPSByZW1vdmUgPT09IHRydWUgPyBpbmRleCAtIDEgOiBsZW5ndGg7XG4gICAgICAgICAgY2Fyb3VzZWwuY3VycmVudC5nb1RvKF9pIDwgMCA/IDEgOiBfaSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGluaXQgY2Fyb3VzZWwgb24gbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBpbml0IGZpcnN0IGNhcm91c2VsXG4gICAgY2Fyb3VzZWwuY3VycmVudCA9IG5ldyBTaWVtYSh7XG4gICAgICBzZWxlY3RvcjogY29udGFpbmVyLmN1cnJlbnRcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIHJlbW92ZSBpbWFnZVxuICBjb25zdCBvblJlbW92ZUltYWdlID0gaSA9PiB7XG4gICAgZGVzdHJveUNhcm91c2VsKCgpID0+IHtcbiAgICAgIC8vIGRlbGV0ZSBibG9jIGltYWdlXG4gICAgICBjb25zdCBfYmxvY3MgPSB7IC4uLmJsb2NzIH07XG4gICAgICBkZWxldGUgX2Jsb2NzW2ldO1xuICAgICAgLy8gcmVzZXQga2V5c1xuICAgICAgY29uc3QgbmV3QmxvY3MgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKF9ibG9jcykuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgICBuZXdCbG9jc1tpXSA9IF9ibG9jc1tlXTtcbiAgICAgIH0pO1xuXG4gICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgYmxvY3M6IG5ld0Jsb2NzXG4gICAgICB9KTtcbiAgICAgIGluaXRDYXJvdXNlbCh0cnVlLCBpKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ20tY2Fyb3VzZWwtYmxvYy1lZGl0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWNvbnRhaW5lclwiIHJlZj17Y29udGFpbmVyfT5cbiAgICAgICAge09iamVjdC5rZXlzKGJsb2NzKS5tYXAoYiA9PiAoXG4gICAgICAgICAgPEVkaXRFbGVtZW50XG4gICAgICAgICAgICBvblJlbW92ZUltYWdlPXtvblJlbW92ZUltYWdlfVxuICAgICAgICAgICAgcHJvcHM9e3Byb3BzfVxuICAgICAgICAgICAga2V5PXtgJHtibG9jc1tiXS5pbWFnZUlkfSAke2J9YH1cbiAgICAgICAgICAgIGluZGV4PXtifVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdtLWNhcm91c2VsLWFkZC1ibG9jXCI+XG4gICAgICAgIDxBZGRJbWFnZVxuICAgICAgICAgIGluaXRDYXJvdXNlbD17aW5pdENhcm91c2VsfVxuICAgICAgICAgIGRlc3Ryb3lDYXJvdXNlbD17ZGVzdHJveUNhcm91c2VsfVxuICAgICAgICAgIHByb3BzPXtwcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdDtcbiIsImNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmltcG9ydCBlZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBzYXZlIGZyb20gXCIuL3NhdmVcIjtcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gXCIuL2F0dHJpYnV0ZXNcIjtcblxucmVnaXN0ZXJCbG9ja1R5cGUoXCJnbS9jYXJvdXNlbFwiLCB7XG4gIHRpdGxlOiBcIkJsb2NrIGNhcm91c2VsXCIsXG4gIGRlc2NyaXB0aW9uOiBcImNhcm91c2VsIGZvciBzaG93IHBob3RvXCIsXG4gIGljb246IFwic3Rhci1maWxsZWRcIixcbiAgY2F0ZWdvcnk6IFwidGhlbWUtYmxvY2tzXCIsXG4gIGF0dHJpYnV0ZXMsXG4gIGVkaXQsXG4gIHNhdmVcbn0pO1xuIiwiY29uc3QgeyBSaWNoVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3I7XG5pbXBvcnQgU2F2ZUVsZW1lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlRWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IFNhdmUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgYmxvY3MgfSA9IHByb3BzLmF0dHJpYnV0ZXM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnbS1jYXJvdXNlbC1jb250YWluZXJcIj5cbiAgICAgIHtPYmplY3Qua2V5cyhibG9jcykubWFwKGIgPT4gKFxuICAgICAgICA8U2F2ZUVsZW1lbnQgcHJvcHM9e3Byb3BzfSBrZXk9e2J9IGluZGV4PXtifSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYXZlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJ3cFwiXVtcImVsZW1lbnRcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==