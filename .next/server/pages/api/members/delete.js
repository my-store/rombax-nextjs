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
exports.id = "pages/api/members/delete";
exports.ids = ["pages/api/members/delete"];
exports.modules = {

/***/ "./pages/api/members/delete.js":
/*!*************************************!*\
  !*** ./pages/api/members/delete.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n  if (req.method === \"POST\") {\n    try {\n      const {\n        id\n      } = JSON.parse(req.body);\n      await prisma.members.delete({\n        where: {\n          id: Number(id)\n        }\n      });\n      res.status(200).json({\n        status: 1,\n        message: \"Product deleted\"\n      });\n    } catch (error) {\n      res.status(error).json({\n        status: error,\n        message: \"Failed to delete product\"\n      });\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb21iYXgvLi9wYWdlcy9hcGkvbWVtYmVycy9kZWxldGUuanM/ODk3ZiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaWQiLCJKU09OIiwicGFyc2UiLCJib2R5IiwibWVtYmVycyIsImRlbGV0ZSIsIndoZXJlIiwiTnVtYmVyIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsd0RBQUosRUFBZjtBQUVlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUNmO0FBQ0ksTUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbEIsRUFBMEI7QUFDdEIsUUFBSTtBQUNBLFlBQU07QUFBRUM7QUFBRixVQUFTQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsR0FBRyxDQUFDTSxJQUFmLENBQWY7QUFDQSxZQUFNVCxNQUFNLENBQUNVLE9BQVAsQ0FBZUMsTUFBZixDQUFzQjtBQUN4QkMsYUFBSyxFQUFFO0FBQ0hOLFlBQUUsRUFBRU8sTUFBTSxDQUFDUCxFQUFEO0FBRFA7QUFEaUIsT0FBdEIsQ0FBTjtBQUtBRixTQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNqQkQsY0FBTSxFQUFFLENBRFM7QUFFakJFLGVBQU8sRUFBRTtBQUZRLE9BQXJCO0FBSUgsS0FYRCxDQVlBLE9BQU1DLEtBQU4sRUFBYTtBQUNUYixTQUFHLENBQUNVLE1BQUosQ0FBV0csS0FBWCxFQUFrQkYsSUFBbEIsQ0FBdUI7QUFDbkJELGNBQU0sRUFBRUcsS0FEVztBQUVuQkQsZUFBTyxFQUFFO0FBRlUsT0FBdkI7QUFJSDtBQUNKO0FBQ0oiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbWVtYmVycy9kZWxldGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIFxue1xuICAgIGlmKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSBKU09OLnBhcnNlKHJlcS5ib2R5KVxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLm1lbWJlcnMuZGVsZXRlKHtcbiAgICAgICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgICAgICBpZDogTnVtYmVyKGlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUHJvZHVjdCBkZWxldGVkXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoZXJyb3IpLmpzb24oe1xuICAgICAgICAgICAgICAgIHN0YXR1czogZXJyb3IsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJGYWlsZWQgdG8gZGVsZXRlIHByb2R1Y3RcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/members/delete.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/members/delete.js"));
module.exports = __webpack_exports__;

})();