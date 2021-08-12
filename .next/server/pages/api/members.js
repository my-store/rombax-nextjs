/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/members";
exports.ids = ["pages/api/members"];
exports.modules = {

/***/ "./pages/api/members/index.js":
/*!************************************!*\
  !*** ./pages/api/members/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n  const members = await prisma.members.findMany({\n    orderBy: {\n      id: \"desc\"\n    }\n  });\n  res.status(200).json(members);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb21iYXgvLi9wYWdlcy9hcGkvbWVtYmVycy9pbmRleC5qcz9lOGU3Il0sIm5hbWVzIjpbInByaXNtYSIsIlByaXNtYUNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZW1iZXJzIiwiZmluZE1hbnkiLCJvcmRlckJ5IiwiaWQiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyx3REFBSixFQUFmO0FBRWUsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQ2Y7QUFDSSxRQUFNQyxPQUFPLEdBQUcsTUFBTUwsTUFBTSxDQUFDSyxPQUFQLENBQWVDLFFBQWYsQ0FBd0I7QUFDMUNDLFdBQU8sRUFBRTtBQUNMQyxRQUFFLEVBQUU7QUFEQztBQURpQyxHQUF4QixDQUF0QjtBQUtBSixLQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkwsT0FBckI7QUFDSCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9tZW1iZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSBcbntcbiAgICBjb25zdCBtZW1iZXJzID0gYXdhaXQgcHJpc21hLm1lbWJlcnMuZmluZE1hbnkoe1xuICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgICBpZDogXCJkZXNjXCJcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24obWVtYmVycylcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/members/index.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/members/index.js"));
module.exports = __webpack_exports__;

})();