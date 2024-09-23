"use strict";
(() => {
var exports = {};
exports.id = 642;
exports.ids = [642];
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

/***/ 3260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2FsetInsulinDatas_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FsetInsulinDatas_2Findex_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/setInsulinDatas/index.js
var setInsulinDatas_namespaceObject = {};
__webpack_require__.r(setInsulinDatas_namespaceObject);
__webpack_require__.d(setInsulinDatas_namespaceObject, {
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
// EXTERNAL MODULE: ./models/InsulinApp.js
var InsulinApp = __webpack_require__(9218);
// EXTERNAL MODULE: ./services/insulinAppDataService.js
var insulinAppDataService = __webpack_require__(1806);
;// CONCATENATED MODULE: ./pages/api/setInsulinDatas/index.js



async function handler(request, response) {
  switch (request.method) {
    case 'GET':
      const savedInsulinData = await (0,insulinAppDataService/* getAllCategories */.t)();
      return response.status(200).json({
        savedInsulinData
      });

    case 'POST':
      await (0,dbConnect/* default */.Z)();
      const data = request.body;
      await InsulinApp/* default */.Z.create(data);
      return response.status(201).json({
        message: 'SavedInsulinData was created'
      });
  }
}
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FsetInsulinDatas&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2FsetInsulinDatas%2Findex.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2FsetInsulinDatas_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FsetInsulinDatas_2Findex_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(setInsulinDatas_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(setInsulinDatas_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/setInsulinDatas",
        pathname: "/api/setInsulinDatas",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: setInsulinDatas_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172,806], () => (__webpack_exec__(3260)));
module.exports = __webpack_exports__;

})();