"use strict";
exports.id = 3;
exports.ids = [3];
exports.modules = {

/***/ 7458:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FactorEntry)
/* harmony export */ });
/* harmony import */ var _SetInsulinFactorStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2994);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7987);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__]);
react_i18next__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function FactorEntry({
  DayTimeFactor,
  onHandleSetFactor
}) {
  const {
    0: morningfactor,
    1: setMorningfactor
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DayTimeFactor?.morningfactor ?? '');
  const {
    0: lunchfactor,
    1: setLunchfactor
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DayTimeFactor?.lunchfactor ?? '');
  const {
    0: eveningfactor,
    1: setEveningfactor
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DayTimeFactor?.eveningfactor ?? '');
  const {
    0: latefactor,
    1: setLatefactor
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(DayTimeFactor?.latefactor ?? '');

  function handleSetFactor(event) {
    onHandleSetFactor(morningfactor, lunchfactor, eveningfactor, latefactor);
    event.preventDefault();
    setMorningfactor('');
    setLunchfactor('');
    setEveningfactor('');
    setLatefactor('');
    event.target.reset();
  }

  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SetInsulinFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .Wrapper */ .im, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SetInsulinFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .InsulinFactor */ .wG, {
        children: t('createinsulinfactor')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SetInsulinFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .EntryForm */ .GK, {
        onSubmit: handleSetFactor,
        id: "insulinfactor",
        onKeyPress: e => !/[0-9]/.test(e.key) && e.preventDefault(),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SetInsulinFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .LabelFa */ .iw, {
          htmlFor: "factor",
          id: "insulinfactor",
          children: [t('daytimefactor'), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), " ", t('enter'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SetInsulinFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .DataInputMorning */ .Fi, {
            type: "decimal",
            name: "setedmorningfactor",
            placeholder: t('factormorning'),
            id: "setedmorningfactor",
            maxLength: '3',
            min: "0",
            inputMode: "numeric",
            required: true,
            onChange: event => {
              setMorningfactor(event.target.value);
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SetInsulinFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .DataInput */ .QD, {
            type: "decimal",
            name: "setedlunchfactor",
            placeholder: t('factornoon'),
            id: "setedlunchfactor",
            maxLength: '3',
            min: "0",
            inputMode: "numeric",
            required: true,
            onChange: event => {
              setLunchfactor(event.target.value);
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SetInsulinFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .DataInput */ .QD, {
            type: "decimal",
            name: "seteveningfactor",
            placeholder: t('factorevening'),
            id: "seteveningfactor",
            maxLength: '3',
            min: "0",
            inputMode: "numeric",
            required: true,
            onChange: event => {
              setEveningfactor(event.target.value);
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SetInsulinFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .DataInputLate */ .SE, {
            type: "decimal",
            name: "latefactor",
            placeholder: t('factorlate'),
            id: "latefactor",
            maxLength: '3',
            min: "0",
            inputMode: "numeric",
            required: true,
            onChange: event => {
              setLatefactor(event.target.value);
            }
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SetInsulinFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .zx, {
          type: "submit",
          children: t('save')
        })]
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fi: () => (/* binding */ DataInputMorning),
/* harmony export */   GK: () => (/* binding */ EntryForm),
/* harmony export */   QD: () => (/* binding */ DataInput),
/* harmony export */   SE: () => (/* binding */ DataInputLate),
/* harmony export */   im: () => (/* binding */ Wrapper),
/* harmony export */   iw: () => (/* binding */ LabelFa),
/* harmony export */   wG: () => (/* binding */ InsulinFactor),
/* harmony export */   zx: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export Label */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const hue = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{-webkit-filter:hue-rotate(180deg);}to{-webkit-filter:hue-rotate(-180deg);}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "SetInsulinFactorStyles__Wrapper",
  componentId: "sc-18yr9wa-0"
})(["display:grid;grid-template-rows:min-content auto 48px;height:inherit;justify-content:center;margin-top:-0.5rem;z-index:1;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default().label.withConfig({
  displayName: "SetInsulinFactorStyles__Label",
  componentId: "sc-18yr9wa-1"
})(["background-color:beige;border-radius:8px;display:grid;text-align:center;height:min 5rem;z-index:1;opacity:0.8;"]);
const LabelFa = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Label).withConfig({
  displayName: "SetInsulinFactorStyles__LabelFa",
  componentId: "sc-18yr9wa-2"
})(["color:#364fc7;"]);
const DataInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "SetInsulinFactorStyles__DataInput",
  componentId: "sc-18yr9wa-3"
})(["text-align:center;z-index:1;border-style:groove;"]);
const DataInputMorning = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(DataInput).withConfig({
  displayName: "SetInsulinFactorStyles__DataInputMorning",
  componentId: "sc-18yr9wa-4"
})(["border-top-left-radius:8px;border-top-right-radius:8px;"]);
const DataInputLate = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(DataInput).withConfig({
  displayName: "SetInsulinFactorStyles__DataInputLate",
  componentId: "sc-18yr9wa-5"
})(["border-bottom-left-radius:8px;border-bottom-right-radius:8px;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "SetInsulinFactorStyles__Button",
  componentId: "sc-18yr9wa-6"
})(["background-color:skyblue;color:darkblue;margin-top:5px;margin-bottom:5px;border-radius:15px;height:20px;z-index:1;opacity:0.9;"]);
const EntryForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "SetInsulinFactorStyles__EntryForm",
  componentId: "sc-18yr9wa-7"
})(["display:grid;justify-content:center;gap:auto;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));align-content:start;margin:0;padding:0;overflow-y:auto;justify-content:center;z-index:1;"]);
const InsulinFactor = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "SetInsulinFactorStyles__InsulinFactor",
  componentId: "sc-18yr9wa-8"
})(["background-image:-webkit-linear-gradient(92deg,#f35626,#feab3a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:", " 10s infinite linear;color:purple;font-family:Cambria,Cochin,Georgia,Times,'Times New Roman',serif;text-align:center;z-index:1;"], hue);

/***/ }),

/***/ 8927:
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

/***/ })

};
;