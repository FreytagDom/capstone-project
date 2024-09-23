exports.id = 790;
exports.ids = [790];
exports.modules = {

/***/ 1993:
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 1993;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 2883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/copyright2.png
/* harmony default export */ const copyright2 = ({"src":"/_next/static/media/copyright2.49684604.png","height":16,"width":16,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASUlEQVR42mXNsQ3AIAxE0d8TKVX6JGIJRMeiNLSGCZgNrsa66lnyHQsSRlWMJImdn8BFZEiYWJhK5pOoBOHh5l3Q3MG9+NJzdgNujRwtKTklWQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./components/Footer/Footer.js





function Footer() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(FooterLine, {
    children: [/*#__PURE__*/jsx_runtime.jsx((image_default()), {
      src: copyright2,
      alt: ""
    }), "Created by FreyDom 2022"]
  });
}
const FooterLine = external_styled_components_default().footer.withConfig({
  displayName: "Footer__FooterLine",
  componentId: "sc-19nlfue-0"
})(["max-height:0.8rem;font-size:0.6rem;color:#1aa1d8;display:flex;position:fixed;bottom:5px;width:100%;"]);

/***/ }),

/***/ 5523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GlobalStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*,*::after,*::before{box-sizing:border-box;}body{margin:0;padding:0;@media only screen and (min-device-width:480px){gap:4rem;}@media (max-width:600px){.grid{width:100%;flex-direction:column;}}}"]);

/***/ }),

/***/ 1214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);


function Header() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("header", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Headline, {
      children: "Insulin App"
    })
  });
}
const hue = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{-webkit-filter:hue-rotate(0deg);}to{-webkit-filter:hue-rotate(-360deg);}"]);
const Headline = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "Header__Headline",
  componentId: "sc-1by3kkm-0"
})(["background-image:-webkit-linear-gradient(92deg,#f35626,#feab3a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:", " 10s infinite linear;color:purple;font-family:Cambria,Cochin,Georgia,Times,'Times New Roman',serif;text-align:center;z-index:1;position:relative;display:grid;width:100%;margin-top:0;padding-top:1rem;"], hue);

/***/ }),

/***/ 3592:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2883);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1214);
/* harmony import */ var _NavBar_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3738);
/* harmony import */ var _public_bloodsugarvertical_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6950);
/* harmony import */ var _public_happyBlooddrop_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7837);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_5__]);
_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function Layout({
  children
}) {
  const {
    data: session
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [session ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ImageBackGround, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: _public_bloodsugarvertical_jpg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
          alt: "bloodsugar",
          layout: "fill",
          objectFit: "cover"
        })
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ImageBackGround, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: _public_happyBlooddrop_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
          alt: "happyBlooddrop",
          layout: "fill",
          objectFit: "cover"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("main", {
      children: children
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_5__/* .Navbar */ .w, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})]
  });
}
const ImageBackGround = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "Layout__ImageBackGround",
  componentId: "sc-1xelupw-0"
})(["background-attachment:scroll;position:fixed;display:flex;width:100%;height:100%;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3738:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _NavBarStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3931);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7987);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__]);
react_i18next__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Navbar = () => {
  const {
    data: session
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: session ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_NavBarStyles__WEBPACK_IMPORTED_MODULE_0__/* .NavbarHead */ .O4, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_NavBarStyles__WEBPACK_IMPORTED_MODULE_0__/* .Navigation */ .W_, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_NavBarStyles__WEBPACK_IMPORTED_MODULE_0__/* .Links */ .yX, {
          href: "/",
          passHref: true,
          children: t('start')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_NavBarStyles__WEBPACK_IMPORTED_MODULE_0__/* .Links */ .yX, {
          href: "/setInsulinFactor",
          passHref: true,
          children: [t('insulin'), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), t('factor')]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_NavBarStyles__WEBPACK_IMPORTED_MODULE_0__/* .Links */ .yX, {
          href: "/setCorrectionFactor",
          passHref: true,
          children: [t('correction'), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), t('factor')]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_NavBarStyles__WEBPACK_IMPORTED_MODULE_0__/* .Links */ .yX, {
          href: "/savedInsulinData",
          passHref: true,
          children: t('data')
        })]
      })
    }) : null
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O4: () => (/* binding */ NavbarHead),
/* harmony export */   W_: () => (/* binding */ Navigation),
/* harmony export */   yX: () => (/* binding */ Links)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const hue = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{-webkit-filter:hue-rotate(166deg);}to{-webkit-filter:hue-rotate(-194deg);}"]);
const NavbarHead = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "NavBarStyles__NavbarHead",
  componentId: "sc-61a3z3-0"
})(["justify-content:space-evenly;font-family:Cambria,Cochin,Georgia,Times,'Times New Roman',serif;text-align:center;justify-items:inherit;display:flex;position:fixed;bottom:0vh;width:100%;background-color:black;opacity:0.8;height:4rem;z-index:2;"]);
const Navigation = styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav.withConfig({
  displayName: "NavBarStyles__Navigation",
  componentId: "sc-61a3z3-1"
})(["display:flex;font-size:1.1rem;color:darkcyan;justify-content:space-evenly;z-index:2;"]);
const Links = styled_components__WEBPACK_IMPORTED_MODULE_0___default()((next_link__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
  displayName: "NavBarStyles__Links",
  componentId: "sc-61a3z3-2"
})(["text-decoration:none;margin:5px 20px;font-size:1.1rem;background-image:-webkit-linear-gradient(92deg,#f35626,#feab3a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:", " 8s infinite linear;color:purple;font-family:Cambria,Cochin,Georgia,Times,'Times New Roman',serif;display:flex;z-index:2;justify-content:space-evenly;"], hue);

/***/ }),

/***/ 9532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);




const NonSSRWrapper = props => /*#__PURE__*/_jsx(React.Fragment, {
  children: props.children
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(async () => null, {
  ssr: false
}));

/***/ }),

/***/ 809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Loading)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/PageLoader/PageLoaderStyles.js

const Page = external_styled_components_default().div.withConfig({
  displayName: "PageLoaderStyles__Page",
  componentId: "sc-1wonxx7-0"
})(["display:flex;justify-content:center;align-items:center;margin-top:15rem;"]);
const Container = external_styled_components_default().div.withConfig({
  displayName: "PageLoaderStyles__Container",
  componentId: "sc-1wonxx7-1"
})(["display:flex;justify-content:center;align-items:center;position:relative;"]);
const H3 = external_styled_components_default().h3.withConfig({
  displayName: "PageLoaderStyles__H3",
  componentId: "sc-1wonxx7-2"
})(["color:black;"]);
const rotate1 = (0,external_styled_components_.keyframes)(["from{transform:rotateX(50deg) rotateZ(110deg);}to{transform:rotateX(50deg) rotateZ(470deg);}"]);
const rotate2 = (0,external_styled_components_.keyframes)(["from{transform:rotateX(20deg) rotateY(50deg) rotateZ(20deg);}to{transform:rotateX(20deg) rotateY(50deg) rotateZ(380deg);}"]);
const rotate3 = (0,external_styled_components_.keyframes)(["from{transform:rotateX(40deg) rotateY(130deg) rotateZ(450deg);}to{transform:rotateX(40deg) rotateY(130deg) rotateZ(90deg);}"]);
const rotate4 = (0,external_styled_components_.keyframes)(["from{transform:rotateX(70deg) rotateZ(270deg);}to{transform:rotateX(70deg) rotateZ(630deg);}"]);
const Ring = external_styled_components_default().div.withConfig({
  displayName: "PageLoaderStyles__Ring",
  componentId: "sc-1wonxx7-3"
})(["width:190px;height:190px;border:1px solid transparent;border-radius:50%;position:absolute;&:nth-child(1){border-bottom:8px solid rgb(255,141,249);animation:", " 2s linear infinite;}&:nth-child(2){border-bottom:8px solid rgb(255,65,106);animation:", " 2s linear infinite;}&:nth-child(3){border-bottom:8px solid rgb(0,255,255);animation:", " 2s linear infinite;}&:nth-child(4){border-bottom:8px solid rgb(252,183,55);animation:", " 2s linear infinite;}"], rotate1, rotate2, rotate3, rotate4);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./components/PageLoader/PageLoader.js



function Loading() {
  return /*#__PURE__*/jsx_runtime.jsx(Page, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Container, {
      children: [/*#__PURE__*/jsx_runtime.jsx(Ring, {}), /*#__PURE__*/jsx_runtime.jsx(Ring, {}), /*#__PURE__*/jsx_runtime.jsx(Ring, {}), /*#__PURE__*/jsx_runtime.jsx(Ring, {}), /*#__PURE__*/jsx_runtime.jsx(H3, {
        children: "loading"
      })]
    })
  });
}

/***/ }),

/***/ 5460:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5523);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3592);
/* harmony import */ var _components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(809);
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9761);
/* harmony import */ var _components_NoSSRWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9532);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_5__, _ionic_react__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Layout__WEBPACK_IMPORTED_MODULE_5__, _ionic_react__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["session"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









(0,_ionic_react__WEBPACK_IMPORTED_MODULE_7__/* .setupIonicReact */ .bg)();




function MyApp(_ref) {
  let {
    Component,
    pageProps: {
      session
    }
  } = _ref,
      pageProps = _objectWithoutProperties(_ref.pageProps, _excluded);

  const {
    0: isLoading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeStart', handleRouteChangeStart);
    next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      next_router__WEBPACK_IMPORTED_MODULE_3___default().events.off('routeChangeStart', handleRouteChangeStart);
      next_router__WEBPACK_IMPORTED_MODULE_3___default().events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("title", {
        children: "Insulin App"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("meta", {
        name: "description",
        content: "Insulin app"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/logo.png"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/logo.png"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/logo.png"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("link", {
        rel: "manifest",
        href: "/site.webmanifest"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("link", {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("meta", {
        name: "msapplication-TileColor",
        content: "#da532c"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("meta", {
        name: "theme-color",
        content: "#ffffff"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_NoSSRWrapper__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(next_auth_react__WEBPACK_IMPORTED_MODULE_0__.SessionProvider, {
        session: session,
        basePath: "/api/auth",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__/* .GlobalStyle */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          children: isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Component, _objectSpread({}, pageProps))
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_0___default()) {
  static async getInitialProps(ctx) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_1__.ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(App, _objectSpread({}, props)))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_0___default().getInitialProps(ctx);
      return _objectSpread(_objectSpread({}, initialProps), {}, {
        styles: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [initialProps.styles, sheet.getStyleElement()]
        })
      });
    } finally {
      sheet.seal();
    }
  }

}

/***/ }),

/***/ 6950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bloodsugarvertical.66d78e2c.jpg","height":1024,"width":569,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAI0Fv//EABoQAAMAAwEAAAAAAAAAAAAAAAECBAADESH/2gAIAQEAAT8ApqeATaFRRzQhIYe9Of/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AI//xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAIAQMBAT8A0l//2Q==","blurWidth":4,"blurHeight":8});

/***/ }),

/***/ 7837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/happyBlooddrop.8afd544b.png","height":1024,"width":1024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AF1qkoR7opmKsqiPtamOtZyKtIV6omBqkQB/eKCjkLe8p8rLeZDKboO9p8qlkLmDeqIAlIStuqTI0H6Ty3eDzGp3zXWJvqjLm4ixAKCQusmetrNjaMJqeshwgLlHTMeJoqqZwQCplLy5Znp7cHSsRE28U1+agYTRe4mslLwAoJC5uGeCoQAAoTZPryw/1wAAz2eAoJK7AIh/p66QtrtedLozQsUzQchacLGNtJCCqABobZWOhKyplLy0jbG0jbCplLyUhKuJb4ZjOWytGaAsmQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ })

};
;