"use strict";
(() => {
var exports = {};
exports.id = 673;
exports.ids = [673];
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

/***/ 9423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ getAllDayFactors)
/* harmony export */ });
/* unused harmony export getDayFactorById */
/* harmony import */ var _dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9883);
/* harmony import */ var _models_DayTimeFactor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6264);


async function getAllDayFactors() {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
  console.log(_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
  const daytimeFactors = await _models_DayTimeFactor__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.find();
  const factorArray = daytimeFactors.map(({
    id,
    morningfactor,
    lunchfactor,
    eveningfactor,
    latefactor
  }) => {
    return {
      id,
      morningfactor,
      lunchfactor,
      eveningfactor,
      latefactor
    };
  });
  return factorArray;
}
async function getDayFactorById(daytimeFactorId) {
  await dbConnect();
  const daytimeFactors = await DayTimeFactor.findById(daytimeFactorId);
  const {
    id,
    morningfactor,
    lunchfactor,
    eveningfactor,
    latefactor
  } = daytimeFactors;
  return {
    id,
    morningfactor,
    lunchfactor,
    eveningfactor,
    latefactor
  };
}

/***/ }),

/***/ 5031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2FsavedInsulinFactor_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FsavedInsulinFactor_2F_5Bid_5D_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/savedInsulinFactor/[id].js
var _id_namespaceObject = {};
__webpack_require__.r(_id_namespaceObject);
__webpack_require__.d(_id_namespaceObject, {
  "default": () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: ./services/dayTimeFactorsService.js
var dayTimeFactorsService = __webpack_require__(8813);
// EXTERNAL MODULE: ./services/savedDayFactorService.js
var savedDayFactorService = __webpack_require__(9423);
;// CONCATENATED MODULE: ./pages/api/savedInsulinFactor/[id].js


async function getServerSideProps(context) {
  const {
    id
  } = context.params;
  const daytimeFactors = (0,savedDayFactorService/* getAllDayFactors */.U)();
  const daytimeFactor = await (0,dayTimeFactorsService/* getFactorById */.a)(id);
  return {
    porps: {
      daytimeFactors,
      daytimeFactor
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FsavedInsulinFactor%2F%5Bid%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2FsavedInsulinFactor%2F%5Bid%5D.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2FsavedInsulinFactor_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FsavedInsulinFactor_2F_5Bid_5D_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_id_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(_id_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/savedInsulinFactor/[id]",
        pathname: "/api/savedInsulinFactor/[id]",
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
var __webpack_exports__ = __webpack_require__.X(0, [172,813], () => (__webpack_exec__(5031)));
module.exports = __webpack_exports__;

})();