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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_afias_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_afias_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_afias_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\n\n\nvar ContributeForm = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(ContributeForm, Component1);\n    var _super = _createSuper(ContributeForm);\n    function ContributeForm() {\n        _classCallCheck(this, ContributeForm);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), \"state\", {\n            value: \"\",\n            errorMessage: \"\",\n            loading: false\n        });\n        var _this1 = _assertThisInitialized(_this);\n        _defineProperty(_assertThisInitialized(_this), \"onSubmit\", function() {\n            var _ref = _asyncToGenerator(C_Users_afias_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n                var campaign, accounts;\n                return C_Users_afias_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            event.preventDefault();\n                            campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this1.props.address);\n                            _this1.setState({\n                                loading: true\n                            });\n                            _ctx.prev = 3;\n                            _ctx.next = 6;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n                        case 6:\n                            accounts = _ctx.sent;\n                            _ctx.next = 9;\n                            return campaign.methods.contribute().send({\n                                from: accounts[0],\n                                value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].utils.toWei(_this1.state.value, \"ether\")\n                            });\n                        case 9:\n                            _routes__WEBPACK_IMPORTED_MODULE_5__.Router.replaceRoute(\"/campaigns/\".concat(_this1.props.address));\n                            _ctx.next = 15;\n                            break;\n                        case 12:\n                            _ctx.prev = 12;\n                            _ctx.t0 = _ctx[\"catch\"](3);\n                            _this1.setState({\n                                errorMessage: _ctx.t0.message\n                            });\n                        case 15:\n                            _this1.setState({\n                                loading: false,\n                                value: \"\"\n                            });\n                        case 16:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        3,\n                        12\n                    ]\n                ]);\n            }));\n            return function(event) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        return _this;\n    }\n    _createClass(ContributeForm, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    error: !!this.state.errorMessage,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    children: \" Amount to Contribute \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    value: this.state.value,\n                                    onChange: function(event) {\n                                        return _this.setState({\n                                            value: event.target.value\n                                        });\n                                    },\n                                    label: \"ether\",\n                                    labelPosition: \"right\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                            lineNumber: 35,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                            error: true,\n                            header: \"oops!\",\n                            content: this.state.errorMessage\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                            lineNumber: 45,\n                            columnNumber: 7\n                        }, this),\n                        \";\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            loading: this.state.loading,\n                            primary: true,\n                            children: \" Contribute!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                            lineNumber: 46,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return ContributeForm;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDd0I7QUFDckI7QUFDUjtBQUNEO0FBRW5DLGtCQUFvQixpQkE0Q2pCOzs7O2FBNUNHUyxjQUFjOzs7O1FBQ2xCQywrQ0FBQUEsT0FBSyxFQUFDO1lBQ0pDLEtBQUssRUFBRSxFQUFFO1lBQ1RDLFlBQVksRUFBRSxFQUFFO1lBQ2hCQyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7O1FBQ0ZDLCtDQUFBQSxVQUFRO3VCQUFHLHNLQUFPQyxLQUFLLEVBQUs7b0JBR3BCQyxRQUFRLEVBR05DLFFBQVE7Ozs7NEJBTGhCRixLQUFLLENBQUNHLGNBQWMsRUFBRSxDQUFDOzRCQUVqQkYsUUFBUSxHQUFHViw4REFBUSxDQUFDLE9BQUthLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLENBQUM7NEJBQ2xELE9BQUtDLFFBQVEsQ0FBQztnQ0FBRVIsT0FBTyxFQUFFLElBQUk7NkJBQUMsQ0FBQyxDQUFDOzs7bUNBRUhOLHNFQUFvQixFQUFFOzs0QkFBdkNVLFFBQVEsWUFBK0I7O21DQUN2Q0QsUUFBUSxDQUFDUSxPQUFPLENBQUNDLFVBQVUsRUFBRSxDQUFDQyxJQUFJLENBQ3RDO2dDQUNFQyxJQUFJLEVBQUVWLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0NBQ2pCTixLQUFLLEVBQUVKLGtFQUFnQixDQUFDLE9BQUtHLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLE9BQU8sQ0FBQzs2QkFDbkQsQ0FDRjs7NEJBQ0RILHdEQUFtQixDQUFDLGFBQVksQ0FBcUIsT0FBbkIsT0FBS1csS0FBSyxDQUFDQyxPQUFPLENBQUUsQ0FBQyxDQUFDOzs7Ozs7NEJBRTlELE9BQUtDLFFBQVEsQ0FBQztnQ0FBQ1QsWUFBWSxFQUFFbUIsUUFBSUMsT0FBTzs2QkFBQyxDQUFDLENBQUM7OzRCQUV2QyxPQUFLWCxRQUFRLENBQUM7Z0NBQUNSLE9BQU8sRUFBQyxLQUFLO2dDQUFFRixLQUFLLEVBQUUsRUFBRTs2QkFBQyxDQUFDOzs7Ozs7Ozs7OzthQUMxQzs0QkFsQmlCSSxLQUFLOzs7WUFrQnJCOzs7OztZQUNGa0IsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUU7O2dCQUNOLHFCQUNFLDhEQUFDL0IsbURBQUk7b0JBQUNZLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7b0JBQUVvQixLQUFLLEVBQUksQ0FBQyxDQUFDLElBQUksQ0FBQ3hCLEtBQUssQ0FBQ0UsWUFBWTs7c0NBQ2pFLDhEQUFDVix5REFBVTs7OENBQ1gsOERBQUNrQyxPQUFLOzhDQUFDLHdCQUFzQjs7Ozs7d0NBQVE7OENBQ3JDLDhEQUFDakMsb0RBQUs7b0NBQ05RLEtBQUssRUFBRSxJQUFJLENBQUNELEtBQUssQ0FBQ0MsS0FBSztvQ0FDdkIwQixRQUFRLEVBQUd0QixTQUFBQSxLQUFLOytDQUFJLE1BQUtNLFFBQVEsQ0FBQzs0Q0FBRVYsS0FBSyxFQUFFSSxLQUFLLENBQUN1QixNQUFNLENBQUMzQixLQUFLO3lDQUFDLENBQUM7cUNBQUE7b0NBQy9EeUIsS0FBSyxFQUFDLE9BQU87b0NBQ2JHLGFBQWEsRUFBQyxPQUFPOzs7Ozt3Q0FDbkI7Ozs7OztnQ0FFVztzQ0FDYiw4REFBQ25DLHNEQUFPOzRCQUFDOEIsS0FBSzs0QkFBQ00sTUFBTSxFQUFDLE9BQU87NEJBQUNDLE9BQU8sRUFBRSxJQUFJLENBQUMvQixLQUFLLENBQUNFLFlBQVk7Ozs7O2dDQUFHO3dCQUFBLEdBQ2pFO3NDQUFBLDhEQUFDUCxxREFBTTs0QkFBQ1EsT0FBTyxFQUFFLElBQUksQ0FBQ0gsS0FBSyxDQUFDRyxPQUFPOzRCQUFFNkIsT0FBTztzQ0FBQyxjQUFZOzs7OztnQ0FBUzs7Ozs7O3dCQUMzRCxDQUNQO2FBQ0g7Ozs7Q0FDRixDQTNDNEJ6Qyw0Q0FBUyxDQTJDckM7QUFDRCwrREFBZVEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanM/ZTA1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgTWVzc2FnZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xyXG5cclxuY2xhc3MgQ29udHJpYnV0ZUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlPXtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgbG9hZGluZzogZmFsc2VcclxuICB9O1xyXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy90aGlzLnByb3BzLmFkZHJlc3M7XHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbnRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlfSk7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgICAgIHZhbHVlOiB3ZWIzLnV0aWxzLnRvV2VpKHRoaXMuc3RhdGUudmFsdWUsIFwiZXRoZXJcIilcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XHJcbiAgICB9Y2F0Y2goZXJyKSB7XHJcbnRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2V9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2UsIHZhbHVlOiBcIlwifSlcclxuICB9O1xyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9IHsgISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICA8bGFiZWw+IEFtb3VudCB0byBDb250cmlidXRlIDwvbGFiZWw+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgb25DaGFuZ2UgPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICBsYWJlbD1cImV0aGVyXCJcclxuICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwib29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0vPjtcclxuICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnk+IENvbnRyaWJ1dGUhPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGVGb3JtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJjYW1wYWlnbiIsImFjY291bnRzIiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJlcnIiLCJtZXNzYWdlIiwicmVuZGVyIiwiZXJyb3IiLCJGaWVsZCIsImxhYmVsIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbFBvc2l0aW9uIiwiaGVhZGVyIiwiY29udGVudCIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n");

/***/ })

});