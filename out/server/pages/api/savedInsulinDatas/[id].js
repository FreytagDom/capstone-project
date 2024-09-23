"use strict";
(() => {
var exports = {};
exports.id = 555;
exports.ids = [555];
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

/***/ 9218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());
const cardSchema = new Schema({
  userMail: {
    type: String,
    required: true
  },
  bloodsugar: {
    type: Number,
    required: true,
    timestamps: true
  },
  carbohydrates: {
    type: Number,
    required: true,
    timestamps: true
  },
  insulin: {
    type: String,
    required: true,
    timestamps: true
  },
  daytimeFactor: {
    type: Number,
    required: true,
    timestamps: true
  },
  correctionFactor: {
    type: Number,
    required: true,
    timestamps: true
  },
  calculateUnit: {
    type: Number,
    required: true,
    timestamps: true
  },
  date: {
    type: String,
    required: true,
    timestamps: true
  }
});
const SavedInsulinData = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).SavedInsulinData || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('SavedInsulinData', cardSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SavedInsulinData);

/***/ }),

/***/ 8292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2FsavedInsulinDatas_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FsavedInsulinDatas_2F_5Bid_5D_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/savedInsulinDatas/[id].js
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
// EXTERNAL MODULE: ./models/InsulinApp.js
var InsulinApp = __webpack_require__(9218);
;// CONCATENATED MODULE: ./pages/api/savedInsulinDatas/[id].js

async function handler(request, response) {
  const {
    method,
    query
  } = request;

  switch (method) {
    case 'DELETE':
      try {
        const {
          userMail
        } = query;
        await InsulinApp/* default */.Z.deleteMany({
          userMail: userMail
        });
        response.status(200).json({
          message: 'SavedInsulinData deleted'
        });
      } catch (error) {
        console.error(error);
        response.status(500).json({
          message: 'Error deleting SavedInsulinData'
        });
      }

      break;

    default:
      response.status(405).json({
        message: 'Method not allowed'
      });
  }
}
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FsavedInsulinDatas%2F%5Bid%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2FsavedInsulinDatas%2F%5Bid%5D.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2FsavedInsulinDatas_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FsavedInsulinDatas_2F_5Bid_5D_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_id_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(_id_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/savedInsulinDatas/[id]",
        pathname: "/api/savedInsulinDatas/[id]",
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
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(8292)));
module.exports = __webpack_exports__;

})();