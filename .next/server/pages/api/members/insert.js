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
exports.id = "pages/api/members/insert";
exports.ids = ["pages/api/members/insert"];
exports.modules = {

/***/ "./pages/api/members/insert.js":
/*!*************************************!*\
  !*** ./pages/api/members/insert.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n  if (req.method === \"POST\") {\n    try {\n      await prisma.members.create({\n        data: JSON.parse(req.body)\n      });\n      res.status(200).json({\n        status: 1,\n        message: \"Product deleted\"\n      });\n    } catch (error) {\n      res.status(error).json({\n        status: error,\n        message: \"Failed to delete product\"\n      });\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb21iYXgvLi9wYWdlcy9hcGkvbWVtYmVycy9pbnNlcnQuanM/YmI2YiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibWVtYmVycyIsImNyZWF0ZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsd0RBQUosRUFBZjtBQUVlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUNmO0FBQ0ksTUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbEIsRUFBMEI7QUFDdEIsUUFBSTtBQUNBLFlBQU1MLE1BQU0sQ0FBQ00sT0FBUCxDQUFlQyxNQUFmLENBQXNCO0FBQ3hCQyxZQUFJLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxHQUFHLENBQUNRLElBQWY7QUFEa0IsT0FBdEIsQ0FBTjtBQUdBUCxTQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNqQkQsY0FBTSxFQUFFLENBRFM7QUFFakJFLGVBQU8sRUFBRTtBQUZRLE9BQXJCO0FBSUgsS0FSRCxDQVNBLE9BQU1DLEtBQU4sRUFBYTtBQUNUWCxTQUFHLENBQUNRLE1BQUosQ0FBV0csS0FBWCxFQUFrQkYsSUFBbEIsQ0FBdUI7QUFDbkJELGNBQU0sRUFBRUcsS0FEVztBQUVuQkQsZUFBTyxFQUFFO0FBRlUsT0FBdkI7QUFJSDtBQUNKO0FBQ0oiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbWVtYmVycy9pbnNlcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIFxue1xuICAgIGlmKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBwcmlzbWEubWVtYmVycy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04ucGFyc2UocmVxLmJvZHkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlByb2R1Y3QgZGVsZXRlZFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKGVycm9yKS5qc29uKHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGVycm9yLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSBwcm9kdWN0XCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/members/insert.js\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/members/insert.js"));
module.exports = __webpack_exports__;

})();