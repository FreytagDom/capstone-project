"use strict";
(() => {
var exports = {};
exports.id = 905;
exports.ids = [905];
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

/***/ 6264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());
const factorSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  morningfactor: {
    type: Number,
    required: true
  },
  lunchfactor: {
    type: Number,
    required: true
  },
  eveningfactor: {
    type: Number,
    required: true
  },
  latefactor: {
    type: Number,
    required: true
  }
});
const DayTimeFactor = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).DayTimeFactor || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('DayTimeFactor', factorSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DayTimeFactor);

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

/***/ 8717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2FsavedInsulinFactor_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FsavedInsulinFactor_2Findex_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/savedInsulinFactor/index.js
var savedInsulinFactor_namespaceObject = {};
__webpack_require__.r(savedInsulinFactor_namespaceObject);
__webpack_require__.d(savedInsulinFactor_namespaceObject, {
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
// EXTERNAL MODULE: ./services/savedDayFactorService.js
var savedDayFactorService = __webpack_require__(9423);
;// CONCATENATED MODULE: ./pages/api/savedInsulinFactor/index.js



async function handler(request, response) {
  await (0,dbConnect/* default */.Z)();

  switch (request.method) {
    case 'GET':
      const daytimeFactors = await (0,savedDayFactorService/* getAllDayFactors */.U)();
      return response.status(200).json({
        daytimeFactors
      });

    case 'POST':
      await (0,dbConnect/* default */.Z)();
      const data = request.body;
      await DayTimeFactor/* default */.Z.updateMany(data);
      return response.status(201).json({
        message: ''
      });
  }
}
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FsavedInsulinFactor&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2FsavedInsulinFactor%2Findex.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2FsavedInsulinFactor_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FsavedInsulinFactor_2Findex_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(savedInsulinFactor_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(savedInsulinFactor_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/savedInsulinFactor",
        pathname: "/api/savedInsulinFactor",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: savedInsulinFactor_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(8717)));
module.exports = __webpack_exports__;

})();