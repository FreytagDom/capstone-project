"use strict";
(() => {
var exports = {};
exports.id = 422;
exports.ids = [422];
exports.modules = {

/***/ 127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SavedFactor)
/* harmony export */ });
/* harmony import */ var _SavedInsulinFactorStyels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6616);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7987);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__]);
react_i18next__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function SavedFactor({
  factors
}) {
  const {
    data: session
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
  const userFactor = factors.filter(factors => {
    return factors.id === session.user.email;
  });
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SavedInsulinFactorStyels__WEBPACK_IMPORTED_MODULE_0__/* .Wrapper */ .im, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SavedInsulinFactorStyels__WEBPACK_IMPORTED_MODULE_0__/* .SavedFactorTitel */ .Jz, {
      children: [t('saved'), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), " ", t('insulinfactor')]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SavedInsulinFactorStyels__WEBPACK_IMPORTED_MODULE_0__/* .CardGrid */ .gy, {
      children: userFactor.map(items => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SavedInsulinFactorStyels__WEBPACK_IMPORTED_MODULE_0__/* .Saved */ .HE, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SavedInsulinFactorStyels__WEBPACK_IMPORTED_MODULE_0__/* .MorningFactor */ .nO, {
            children: [t('factormorning'), ": ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), " ", items.morningfactor]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SavedInsulinFactorStyels__WEBPACK_IMPORTED_MODULE_0__/* .LunchFactor */ .Uc, {
            children: [t('factornoon'), ": ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), " ", items.lunchfactor]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SavedInsulinFactorStyels__WEBPACK_IMPORTED_MODULE_0__/* .EveningFactor */ .yl, {
            children: [t('factorevening'), ": ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), " ", items.eveningfactor]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SavedInsulinFactorStyels__WEBPACK_IMPORTED_MODULE_0__/* .LateFactor */ .O4, {
            children: [t('factorlate'), ": ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), " ", items.latefactor]
          })]
        }, items.id);
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HE: () => (/* binding */ Saved),
/* harmony export */   Jz: () => (/* binding */ SavedFactorTitel),
/* harmony export */   O4: () => (/* binding */ LateFactor),
/* harmony export */   Uc: () => (/* binding */ LunchFactor),
/* harmony export */   gy: () => (/* binding */ CardGrid),
/* harmony export */   im: () => (/* binding */ Wrapper),
/* harmony export */   nO: () => (/* binding */ MorningFactor),
/* harmony export */   yl: () => (/* binding */ EveningFactor)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "SavedInsulinFactorStyels__Wrapper",
  componentId: "sc-1nc3p41-0"
})(["display:grid;grid-template-rows:min-content auto 48px;height:inherit;justify-content:center;z-index:1;background-attachment:scroll;margin-top:-1.5rem;"]);
const CardGrid = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "SavedInsulinFactorStyels__CardGrid",
  componentId: "sc-1nc3p41-1"
})(["display:grid;gap:auto;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));align-content:start;margin:0;padding:0;overflow-y:auto;border-radius:10px;justify-content:center;z-index:1;background-attachment:scroll;margin-top:-1rem;"]);
const Saved = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "SavedInsulinFactorStyels__Saved",
  componentId: "sc-1nc3p41-2"
})(["display:grid;background-color:beige;border-radius:8px;text-align:center;height:auto;align-items:center;margin:1rem;padding:0.5rem;opacity:0.75;background-attachment:scroll;"]);
const MorningFactor = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "SavedInsulinFactorStyels__MorningFactor",
  componentId: "sc-1nc3p41-3"
})(["color:#c92a2a;"]);
const LunchFactor = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "SavedInsulinFactorStyels__LunchFactor",
  componentId: "sc-1nc3p41-4"
})(["color:#2b8a3e;"]);
const EveningFactor = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "SavedInsulinFactorStyels__EveningFactor",
  componentId: "sc-1nc3p41-5"
})(["color:#e67700;"]);
const LateFactor = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "SavedInsulinFactorStyels__LateFactor",
  componentId: "sc-1nc3p41-6"
})(["color:#355fc8;"]);
const hue = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{-webkit-filter:hue-rotate(180deg);}to{-webkit-filter:hue-rotate(-180deg);}"]);
const SavedFactorTitel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "SavedInsulinFactorStyels__SavedFactorTitel",
  componentId: "sc-1nc3p41-7"
})(["background-image:-webkit-linear-gradient(92deg,#f35626,#feab3a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:", " 10s infinite linear;color:purple;font-family:Cambria,Cochin,Georgia,Times,'Times New Roman',serif;text-align:center;width:100%;"], hue);

/***/ }),

/***/ 8401:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateFactor),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SetInsulinFactor_SetInsulinFactor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7458);
/* harmony import */ var _components_SavedInsulinFactor_SavedInsulinFactor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(127);
/* harmony import */ var _services_savedDayFactorService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(999);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SetInsulinFactor_SetInsulinFactor__WEBPACK_IMPORTED_MODULE_2__, _components_SavedInsulinFactor_SavedInsulinFactor__WEBPACK_IMPORTED_MODULE_3__]);
([_components_SetInsulinFactor_SetInsulinFactor__WEBPACK_IMPORTED_MODULE_2__, _components_SavedInsulinFactor_SavedInsulinFactor__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function getServerSideProps() {
  const factors = await (0,_services_savedDayFactorService__WEBPACK_IMPORTED_MODULE_4__/* .getAllDayFactors */ .U)();
  return {
    props: {
      factors: factors
    }
  };
}
function CreateFactor({
  factors
}) {
  async function handleSetSubmit(morningfactor, lunchfactor, eveningfactor, latefactor) {
    const response = await fetch('/api/insulinFactor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        morningfactor,
        lunchfactor,
        eveningfactor,
        latefactor
      })
    }).then(res => {
      if (res.ok) router.replace(_components_SavedInsulinFactor_SavedInsulinFactor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    });
  }

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Sign, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_SetInsulinFactor_SetInsulinFactor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        onHandleSetFactor: handleSetSubmit
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_SavedInsulinFactor_SavedInsulinFactor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        factors: factors
      })]
    })
  });
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "setInsulinFactor__Wrapper",
  componentId: "sc-qxq4d1-0"
})(["display:grid;grid-template-rows:min-content auto 48px;height:inherit;justify-content:center;"]);
const Sign = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "setInsulinFactor__Sign",
  componentId: "sc-qxq4d1-1"
})(["color:white;text-decoration:none;justify-content:center;text-align:center;font-size:1rem;z-index:2;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1494:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var private_next_pages_document_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9911);
/* harmony import */ var private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5460);
/* harmony import */ var private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/setInsulinFactor",
        pathname: "/setInsulinFactor",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_js__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_setInsulinFactor_js__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 7987:
/***/ ((module) => {

module.exports = import("react-i18next");;

/***/ }),

/***/ 1395:
/***/ ((module) => {

module.exports = import("tslib");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [792,790,999,3], () => (__webpack_exec__(1494)));
module.exports = __webpack_exports__;

})();