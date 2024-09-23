"use strict";
(() => {
var exports = {};
exports.id = 227;
exports.ids = [227];
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

/***/ 3410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2FsavedInsulinData_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FsavedInsulinData_2Findex_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/savedInsulinData/index.js
var savedInsulinData_namespaceObject = {};
__webpack_require__.r(savedInsulinData_namespaceObject);
__webpack_require__.d(savedInsulinData_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: ./services/insulinAppDataService.js
var insulinAppDataService = __webpack_require__(1806);
;// CONCATENATED MODULE: ./pages/api/savedInsulinData/index.js

async function handler(request, response) {
  if (request.method === 'GET') {
    const savedInsulinData = await (0,insulinAppDataService/* getAllCategories */.t)();
    response.status(200).json({
      savedInsulinData
    });
  } else {
    response.status(405).json({
      message: 'Method not allowed'
    });
  }
}
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FsavedInsulinData&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2FsavedInsulinData%2Findex.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2FsavedInsulinData_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FsavedInsulinData_2Findex_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(savedInsulinData_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(savedInsulinData_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/savedInsulinData",
        pathname: "/api/savedInsulinData",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: savedInsulinData_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172,806], () => (__webpack_exec__(3410)));
module.exports = __webpack_exports__;

})();