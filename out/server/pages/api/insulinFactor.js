"use strict";
(() => {
var exports = {};
exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 2113:
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 6209:
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ 7459:
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ 3598:
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 5289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2FinsulinFactor_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FinsulinFactor_2Findex_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/insulinFactor/index.js
var insulinFactor_namespaceObject = {};
__webpack_require__.r(insulinFactor_namespaceObject);
__webpack_require__.d(insulinFactor_namespaceObject, {
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
// EXTERNAL MODULE: ./models/DayTimeFactor.js
var DayTimeFactor = __webpack_require__(6264);
// EXTERNAL MODULE: ./services/dayTimeFactorsService.js
var dayTimeFactorsService = __webpack_require__(8813);
// EXTERNAL MODULE: external "next-auth/next"
var next_ = __webpack_require__(2113);
// EXTERNAL MODULE: ./pages/api/auth/[...nextauth].js
var _nextauth_ = __webpack_require__(210);
;// CONCATENATED MODULE: ./pages/api/insulinFactor/index.js





async function handler(request, response) {
  const session = await (0,next_.unstable_getServerSession)(request, response, _nextauth_.authOptions);

  switch (request.method) {
    case 'GET':
      const daytimeFactors = await (0,dayTimeFactorsService/* getAllFactors */.k)();
      return response.status(200).json({
        daytimeFactors
      });

    case 'POST':
      await (0,dbConnect/* default */.Z)();
      const data = request.body;
      const logedUserId = session.user.email;
      const result = await DayTimeFactor/* default */.Z.findOneAndUpdate({
        _id: logedUserId
      }, data, {
        new: true,
        upsert: true
      });
      return response.status(201).json({
        message: 'DayTimeFactor was created'
      });
  }
}
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FinsulinFactor&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2FinsulinFactor%2Findex.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2FinsulinFactor_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FinsulinFactor_2Findex_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(insulinFactor_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(insulinFactor_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/insulinFactor",
        pathname: "/api/insulinFactor",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: insulinFactor_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172,813,210], () => (__webpack_exec__(5289)));
module.exports = __webpack_exports__;

})();