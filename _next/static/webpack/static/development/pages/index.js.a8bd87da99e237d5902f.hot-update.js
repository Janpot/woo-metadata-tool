webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_Viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Viewer */ "./src/Viewer.js");
/* harmony import */ var _src_Editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Editor */ "./src/Editor.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _src_img_github_logo_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/img/github-logo.svg */ "./src/img/github-logo.svg");
/* harmony import */ var _src_img_woorank_logo_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/img/woorank-logo.svg */ "./src/img/woorank-logo.svg");


var _jsxFileName = "/Users/janpotoms/Personal/woo-metadata-tool/pages/index.js";












function parseQuery(query) {
  var url = query.url;

  if (query.url) {
    url = /https?:\/\//.test(query.url) ? query.url : "https://".concat(query.url);

    var _ref = /https?:\/\/(?:www\.)?([^.]+)/.exec(url) || [],
        _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        name = _ref2[1];

    return {
      name: name,
      url: url
    };
  }

  return null;
}

var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
  return {
    headerIcon: {
      fill: 'currentColor'
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    content: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'row'
    },
    editor: {
      flex: 1,
      overflow: 'auto',
      padding: theme.spacing(2)
    },
    viewer: {
      flex: 2,
      overflow: 'auto',
      padding: theme.spacing(2)
    }
  };
});
function Index(_ref3) {
  var initialValues = _ref3.initialValues;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    '@context': 'http://schema.org',
    '@type': 'Organization',
    name: 'ACME',
    url: 'http://www.acme.org',
    address: '',
    sameAs: []
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      jsonld = _useState2[0],
      setJsonld = _useState2[1];

  console.log(initialValues);
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "static",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h6",
    color: "inherit",
    style: {
      flexGrow: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "WooRank Metadata Tool"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "inherit",
    href: "https://github.com/janpot/woo-metadata-tool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_img_github_logo_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.headerIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "inherit",
    href: "https://www.woorank.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_img_woorank_logo_svg__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.headerIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_Editor__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.editor
  }, initialValues, {
    value: jsonld,
    onChange: setJsonld,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_Viewer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.viewer,
    jsonld: [jsonld],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })));
}

Index.getInitialProps = function (_ref4) {
  var query = _ref4.query;
  return {
    initialValues: parseQuery(query)
  };
};

/***/ })

})
//# sourceMappingURL=index.js.a8bd87da99e237d5902f.hot-update.js.map