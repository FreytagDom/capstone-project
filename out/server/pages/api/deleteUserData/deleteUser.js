"use strict";
(() => {
var exports = {};
exports.id = 788;
exports.ids = [788];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 9883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  MONGODB_URL
} = process.env;

async function dbConnect() {
  try {
    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URL);
  } catch (error) {
    console.error('Could not connect to MongoDB', error.message);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);

/***/ }),

/***/ 2603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2FdeleteUserData_2FdeleteUser_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FdeleteUserData_2FdeleteUser_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/deleteUserData/deleteUser.js
var deleteUser_namespaceObject = {};
__webpack_require__.r(deleteUser_namespaceObject);
__webpack_require__.d(deleteUser_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: ./dbConnect.js
var dbConnect = __webpack_require__(9883);
;// CONCATENATED MODULE: ./pages/api/deleteUserData/deleteUser.js

async function handler(req, res, session) {
  const userId = session.user.email;

  if (req.method !== 'DELETE') {
    return res.status(405).end();
  }

  try {
    const {
      db
    } = await (0,dbConnect/* default */.Z)();
    await db('factors').findByIdAndDelete({
      userId
    });
    await db('correctionfactors').findByIdAndDelete({
      userId
    });
    await db('insulinData').findByIdAndDelete({
      userId
    });
    res.status(200).json({
      message: 'User data deleted successfully.'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred.'
    });
  }
}
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FdeleteUserData%2FdeleteUser&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2FdeleteUserData%2FdeleteUser.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2FdeleteUserData_2FdeleteUser_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FdeleteUserData_2FdeleteUser_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(deleteUser_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(deleteUser_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/deleteUserData/deleteUser",
        pathname: "/api/deleteUserData/deleteUser",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: deleteUser_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(2603)));
module.exports = __webpack_exports__;

})();