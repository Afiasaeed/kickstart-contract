"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\nvar ContributeForm = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(ContributeForm, Component1);\n    var _super = _createSuper(ContributeForm);\n    function ContributeForm() {\n        _classCallCheck(this, ContributeForm);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), \"state\", {\n            value: \"\"\n        });\n        _defineProperty(_assertThisInitialized(_this), \"onSubmit\", function(event) {\n            event.preventDefault();\n            _this.props.address;\n            var campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this.props.address);\n        });\n        return _this;\n    }\n    _createClass(ContributeForm, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form, {\n                    on: true,\n                    Submit: this.onSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \" Amount to Contribute \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    value: this.state.value,\n                                    onChange: function(event) {\n                                        return _this.setState({\n                                            value: event.target.value\n                                        });\n                                    },\n                                    label: \"ether\",\n                                    labelPosition: \"right\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                            lineNumber: 16,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            primary: true,\n                            children: \"Contribute!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                            lineNumber: 26,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return ContributeForm;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ3dCO0FBQ3JCO0FBQzVDLGtCQUFvQixpQkE2QmpCOzs7O2FBN0JHTyxjQUFjOzs7O1FBQ2xCQywrQ0FBQUEsT0FBSyxFQUFDO1lBQ0pDLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztRQUNGQywrQ0FBQUEsVUFBUSxFQUFHQyxTQUFBQSxLQUFLLEVBQUc7WUFDakJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7WUFDdkIsTUFBS0MsS0FBSyxDQUFDQyxPQUFPLENBQUM7WUFDbkIsSUFBTUMsUUFBUSxHQUFDVCw4REFBUSxDQUFDLE1BQUtPLEtBQUssQ0FBQ0MsT0FBTyxDQUFDO1NBQzVDLENBQUM7Ozs7O1lBQ0ZFLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFFOztnQkFDTixxQkFDRSw4REFBQ2QsbURBQUk7b0JBQUNlLEVBQUU7b0JBQUNDLE1BQU0sRUFBRyxJQUFJLENBQUNSLFFBQVE7O3NDQUMvQiw4REFBQ1IseURBQVU7OzhDQUNYLDhEQUFDa0IsT0FBSzs4Q0FBQyx3QkFBc0I7Ozs7O3dDQUFROzhDQUNyQyw4REFBQ2pCLG9EQUFLO29DQUNOTSxLQUFLLEVBQUUsSUFBSSxDQUFDRCxLQUFLLENBQUNDLEtBQUs7b0NBQ3ZCWSxRQUFRLEVBQUdWLFNBQUFBLEtBQUs7K0NBQUksTUFBS1csUUFBUSxDQUFDOzRDQUFFYixLQUFLLEVBQUVFLEtBQUssQ0FBQ1ksTUFBTSxDQUFDZCxLQUFLO3lDQUFDLENBQUM7cUNBQUE7b0NBQy9EVyxLQUFLLEVBQUMsT0FBTztvQ0FDYkksYUFBYSxFQUFDLE9BQU87Ozs7O3dDQUNuQjs7Ozs7O2dDQUVXO3NDQUNiLDhEQUFDbkIscURBQU07NEJBQUNvQixPQUFPO3NDQUFDLGFBRWhCOzs7OztnQ0FBUzs7Ozs7O3dCQUNGLENBQ1A7YUFDSDs7OztDQUNGLENBNUI0QnhCLDRDQUFTLENBNEJyQztBQUNELCtEQUFlTSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcz9lMDU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBNZXNzYWdlLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xyXG5jbGFzcyBDb250cmlidXRlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGU9e1xyXG4gICAgdmFsdWU6ICcnXHJcbiAgfTtcclxuICBvblN1Ym1pdD0gKGV2ZW50ID0+e1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMucHJvcHMuYWRkcmVzcztcclxuICAgIGNvbnN0IGNhbXBhaWduPUNhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcylcclxuICB9KVxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8Rm9ybSBvbiBTdWJtaXQ9IHt0aGlzLm9uU3VibWl0fT5cclxuICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgIDxsYWJlbD4gQW1vdW50IHRvIENvbnRyaWJ1dGUgPC9sYWJlbD5cclxuICAgICAgPElucHV0XHJcbiAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICBvbkNoYW5nZSA9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgIGxhYmVsPVwiZXRoZXJcIlxyXG4gICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICA8QnV0dG9uIHByaW1hcnk+XHJcbiAgICAgIENvbnRyaWJ1dGUhXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlRm9ybTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJyZW5kZXIiLCJvbiIsIlN1Ym1pdCIsIkZpZWxkIiwibGFiZWwiLCJvbkNoYW5nZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibGFiZWxQb3NpdGlvbiIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n");

/***/ })

});