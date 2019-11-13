webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/grant.custer/Sites/b/components/post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function processStamp(stamp) {
  var year = stamp.slice(0, 4);
  var month = stamp.slice(4, 6);
  var day = stamp.slice(6, 8);
  var hour = stamp.slice(9, 11);
  var minute = stamp.slice(11, 13);
  var second = stamp.slice(13, 15);
  var date = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  return date.toLocaleString();
}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var post = _ref.post,
      rlh = _ref.rlh,
      _ref$index = _ref.index,
      index = _ref$index === void 0 ? false : _ref$index;
  return __jsx("div", {
    style: {
      paddingBottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: rlh
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, index ? __jsx("a", {
    href: '/' + post.timestamp + '.html',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, processStamp(post.timestamp)) : processStamp(post.timestamp))), __jsx("div", {
    className: index ? 'image-wrap' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, post.files.map(function (file) {
    return __jsx("img", {
      style: {
        marginBottom: rlh
      },
      src: '/' + file,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    });
  })), __jsx("div", {
    className: "wrap",
    style: {
      paddingBottom: rlh * 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    style: {
      marginBottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, post.message)));
});

/***/ })

})
//# sourceMappingURL=index.js.db7b4961cd8b79f435e1.hot-update.js.map