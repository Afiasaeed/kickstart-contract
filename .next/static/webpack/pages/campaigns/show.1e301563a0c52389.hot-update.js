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

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_afias_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_afias_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_afias_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ContributeForm */ \"./components/ContributeForm.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\n\n\n\nvar CampaignShow = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(CampaignShow, Component1);\n    var _super = _createSuper(CampaignShow);\n    function CampaignShow() {\n        _classCallCheck(this, CampaignShow);\n        return _super.apply(this, arguments);\n    }\n    _createClass(CampaignShow, [\n        {\n            key: \"renderCards\",\n            value: function renderCards() {\n                var _props = this.props, minimumContribution = _props.minimumContribution, balance = _props.balance, requestCount = _props.requestCount, approversCount = _props.approversCount, manager = _props.manager;\n                var items = [\n                    {\n                        header: manager,\n                        meta: \"address of manager\",\n                        description: \"manager created this campaign\",\n                        style: {\n                            overflowWrap: \"break-word\"\n                        }\n                    },\n                    {\n                        header: minimumContribution,\n                        meta: \"Minimum Contribution (wei)\",\n                        description: \"you must contribute at least this uch way to be an approver\",\n                        style: {\n                            overflowWrap: \"break-word\"\n                        }\n                    },\n                    {\n                        header: requestCount,\n                        meta: \"Number of Requests\",\n                        description: \"request must be approved by approvers \",\n                        style: {\n                            overflowWrap: \"break-word\"\n                        }\n                    },\n                    {\n                        header: approversCount,\n                        meta: \"number of approvers\",\n                        description: \"Number of people who have already donated\",\n                        style: {\n                            overflowWrap: \"break-word\"\n                        }\n                    },\n                    {\n                        header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].utils.fromWei(balance, \"ether\"),\n                        meta: \"Campaign balance (in ether)\",\n                        description: \"money this campaign have\",\n                        style: {\n                            overflowWrap: \"break-word\"\n                        }\n                    }\n                ];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                    lineNumber: 63,\n                    columnNumber: 12\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Campaign detail \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                            lineNumber: 68,\n                            columnNumber: 8\n                        }, this),\n                        this.renderCards(),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                            lineNumber: 70,\n                            columnNumber: 8\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\afias\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n                    lineNumber: 67,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(props) {\n                return _asyncToGenerator(C_Users_afias_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var campaign, summary;\n                    return C_Users_afias_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(props.query.address);\n                                _ctx.next = 3;\n                                return campaign.methods.getSummary().call();\n                            case 3:\n                                summary = _ctx.sent;\n                                console.log(summary);\n                                return _ctx.abrupt(\"return\", {\n                                    minimumContribution: summary[0],\n                                    balance: summary[1],\n                                    requestCount: summary[2],\n                                    approversCount: summary[3],\n                                    manager: summary[4]\n                                });\n                            case 6:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return CampaignShow;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TGxCLG1CQUFtQixFQUFFa0IsT0FBTyxDQUFDLENBQUMsQ0FBQztvQ0FDL0JqQixPQUFPLEVBQUVpQixPQUFPLENBQUMsQ0FBQyxDQUFDO29DQUNuQmhCLFlBQVksRUFBRWdCLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0NBQ3hCZixjQUFjLEVBQUVlLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0NBQzFCZCxPQUFPLEVBQUVjLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUNBQ3BCOzs7Ozs7aUJBQ0Y7YUFBQTs7OztDQWtERixDQWpFMEI1Qiw0Q0FBUyxDQWlFbkM7QUFDRCwrREFBZU8sWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9zaG93LmpzP2IwZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBHcmlkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtXCI7XHJcblxyXG5cclxuY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAvLyAgcHJvcHMucXVlcnkuYWRkcmVzczsgLy9hZGRyZXNzIG9mIGFjdHVhbCBDYW1wYWlnblxyXG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuXHJcbiAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG4gICAgY29uc29sZS5sb2coc3VtbWFyeSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcclxuICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcclxuICAgICAgcmVxdWVzdENvdW50OiBzdW1tYXJ5WzJdLFxyXG4gICAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVszXSxcclxuICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNhcmRzKCl7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgIGJhbGFuY2UsXHJcbiAgICAgIHJlcXVlc3RDb3VudCxcclxuICAgICAgYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgIG1hbmFnZXJcclxuICAgIH09IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBpdGVtcyA9IFt7XHJcbiAgICAgIGhlYWRlcjptYW5hZ2VyLFxyXG4gICAgICBtZXRhOlwiYWRkcmVzcyBvZiBtYW5hZ2VyXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIm1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduXCIsXHJcbiAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCJ9XHJcbiAgICB9LHtcclxuICAgICAgaGVhZGVyOm1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgIG1ldGE6XCJNaW5pbXVtIENvbnRyaWJ1dGlvbiAod2VpKVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJ5b3UgbXVzdCBjb250cmlidXRlIGF0IGxlYXN0IHRoaXMgdWNoIHdheSB0byBiZSBhbiBhcHByb3ZlclwiLFxyXG4gICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwifVxyXG5cclxuICAgIH0sXHJcbiAge1xyXG4gICAgaGVhZGVyOnJlcXVlc3RDb3VudCxcclxuICAgIG1ldGE6XCJOdW1iZXIgb2YgUmVxdWVzdHNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcInJlcXVlc3QgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnMgXCIsXHJcbiAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwifVxyXG4gIH0se1xyXG4gICAgaGVhZGVyOmFwcHJvdmVyc0NvdW50LFxyXG4gICAgbWV0YTpcIm51bWJlciBvZiBhcHByb3ZlcnNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIk51bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkXCIsXHJcbiAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwifVxyXG4gIH0sXHJcbntcclxuICBoZWFkZXI6d2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsXCJldGhlclwiKSxcclxuICBtZXRhOlwiQ2FtcGFpZ24gYmFsYW5jZSAoaW4gZXRoZXIpXCIsXHJcbiAgZGVzY3JpcHRpb246IFwibW9uZXkgdGhpcyBjYW1wYWlnbiBoYXZlXCIsXHJcbiAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIn1cclxufV07XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXMgPSB7aXRlbXN9IC8+O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICA8aDM+Q2FtcGFpZ24gZGV0YWlsIDwvaDM+XHJcbiAgICAgICB7dGhpcy5yZW5kZXJDYXJkcygpfVxyXG4gICAgICAgPENvbnRyaWJ1dGVGb3JtIC8+XHJcbiAgICAgICA8L0xheW91dD5cclxuICAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJHcmlkIiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJDYW1wYWlnblNob3ciLCJyZW5kZXJDYXJkcyIsInByb3BzIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImJhbGFuY2UiLCJyZXF1ZXN0Q291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiR3JvdXAiLCJyZW5kZXIiLCJoMyIsImdldEluaXRpYWxQcm9wcyIsImNhbXBhaWduIiwic3VtbWFyeSIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n");

/***/ })

});