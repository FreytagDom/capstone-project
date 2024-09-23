"use strict";
(() => {
var exports = {};
exports.id = 747;
exports.ids = [747];
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

/***/ 8656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2FsavedInsulinData_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FsavedInsulinData_2F_5Bid_5D_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/savedInsulinData/[id].js
var _id_namespaceObject = {};
__webpack_require__.r(_id_namespaceObject);
__webpack_require__.d(_id_namespaceObject, {
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
// EXTERNAL MODULE: ./models/InsulinApp.js
var InsulinApp = __webpack_require__(9218);
;// CONCATENATED MODULE: ./pages/api/savedInsulinData/[id].js


async function handler(request, response) {
  const {
    id
  } = request.query;

  switch (request.method) {
    case 'GET':
      const cardData = (0,insulinAppDataService/* getCategoryById */.a)(user);
      response.status(200).json(cardData);
      break;

    case 'DELETE':
      {
        await InsulinApp/* default */.Z.findByIdAndDelete(id);
        response.status(200).json({
          message: 'SavedInsulinData deleted'
        });
        break;
      }

    default:
      response.status(405).json({
        message: 'Message not allowed'
      });
  }
}
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FsavedInsulinData%2F%5Bid%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2FsavedInsulinData%2F%5Bid%5D.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2FsavedInsulinData_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FsavedInsulinData_2F_5Bid_5D_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_id_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(_id_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/savedInsulinData/[id]",
        pathname: "/api/savedInsulinData/[id]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: _id_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172,806], () => (__webpack_exec__(8656)));
module.exports = __webpack_exports__;

})();