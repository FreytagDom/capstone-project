"use strict";
(() => {
var exports = {};
exports.id = 484;
exports.ids = [484];
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

/***/ 735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2FcorrectionFactor_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FcorrectionFactor_2Findex_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/correctionFactor/index.js
var correctionFactor_namespaceObject = {};
__webpack_require__.r(correctionFactor_namespaceObject);
__webpack_require__.d(correctionFactor_namespaceObject, {
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
// EXTERNAL MODULE: ./models/CorrectionFactor.js
var CorrectionFactor = __webpack_require__(2133);
// EXTERNAL MODULE: ./services/correctionFactorsService.js
var correctionFactorsService = __webpack_require__(9498);
// EXTERNAL MODULE: external "next-auth/next"
var next_ = __webpack_require__(2113);
// EXTERNAL MODULE: ./pages/api/auth/[...nextauth].js
var _nextauth_ = __webpack_require__(210);
;// CONCATENATED MODULE: ./pages/api/correctionFactor/index.js





async function handler(request, response) {
  const session = await (0,next_.unstable_getServerSession)(request, response, _nextauth_.authOptions);

  switch (request.method) {
    case 'GET':
      const correctionFactors = await (0,correctionFactorsService/* getAllCorrectionFactors */.A)();
      return response.status(200).json({
        correctionFactors
      });

    case 'POST':
      await (0,dbConnect/* default */.Z)();
      const data = request.body;
      const logedUserId = session.user.email;
      const result = await CorrectionFactor/* default */.Z.findOneAndUpdate({
        _id: logedUserId
      }, data, {
        new: true,
        upsert: true
      });
      return response.status(201).json({
        message: 'CorrectionFactor was created'
      });
  }
}
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FcorrectionFactor&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2FcorrectionFactor%2Findex.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2FcorrectionFactor_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FcorrectionFactor_2Findex_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(correctionFactor_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(correctionFactor_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/correctionFactor",
        pathname: "/api/correctionFactor",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: correctionFactor_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172,210,498], () => (__webpack_exec__(735)));
module.exports = __webpack_exports__;

})();