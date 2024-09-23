"use strict";
exports.id = 849;
exports.ids = [849];
exports.modules = {

/***/ 6849:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CorrectionFactorEntry)
/* harmony export */ });
/* harmony import */ var _SetCorrectionFactorStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6678);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7987);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__]);
react_i18next__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function CorrectionFactorEntry({
  CorrectionFactor,
  onHandleSetCorrectionfactor
}) {
  const {
    0: morningcorrectionfactor,
    1: setMorningcorrectionfactor
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(CorrectionFactor?.morningcorrectionfactor ?? '');
  const {
    0: lunchcorrectionfactor,
    1: setLunchcorrectionfactor
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(CorrectionFactor?.lunchcorrectionfactor ?? '');
  const {
    0: eveningcorrectionfactor,
    1: setEveningcorrectionfactor
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(CorrectionFactor?.eveningcorrectionfactor ?? '');
  const {
    0: latecorrectionfactor,
    1: setLatecorrectionfactor
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(CorrectionFactor?.latecorrectionfactor ?? '');

  function handleSetCorrectionFactor(event) {
    onHandleSetCorrectionfactor(morningcorrectionfactor, lunchcorrectionfactor, eveningcorrectionfactor, latecorrectionfactor);
    event.preventDefault();
    setMorningcorrectionfactor('');
    setLunchcorrectionfactor('');
    setEveningcorrectionfactor('');
    setLatecorrectionfactor('');
    event.target.reset();
  }

  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SetCorrectionFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .Wrapper */ .im, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SetCorrectionFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .CorrectionFactorTitel */ .Ek, {
        children: t('createcorrectionfactor')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SetCorrectionFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .EntryForm */ .GK, {
        onSubmit: handleSetCorrectionFactor,
        id: "correctionfactor",
        onKeyPress: e => !/[0-9]/.test(e.key) && e.preventDefault(),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_SetCorrectionFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .LabelFa */ .iw, {
          htmlFor: "correctionfactor",
          id: "correctionfactor",
          children: [t('correctionfactor'), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), " ", t('enter'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SetCorrectionFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .DataInputMorning */ .Fi, {
            type: "decimal",
            name: "setcorrectionmorningfactor",
            placeholder: t('correctionfactormorning'),
            id: "setcorrectiomorningfactor",
            maxLength: '3',
            min: "0",
            inputMode: "numeric",
            required: true,
            onChange: event => {
              setMorningcorrectionfactor(event.target.value);
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SetCorrectionFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .DataInput */ .QD, {
            type: "decimal",
            name: "setcorrectiolunchfactor",
            placeholder: t('correctionfactornoon'),
            id: "setcorrectiolunchfactor",
            maxLength: '3',
            min: "0",
            inputMode: "numeric",
            required: true,
            onChange: event => {
              setLunchcorrectionfactor(event.target.value);
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SetCorrectionFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .DataInput */ .QD, {
            type: "decimal",
            name: "setcorrectioeveningfactor",
            placeholder: t('correctionfactorevening'),
            id: "setcorrectioeveningfactor",
            maxLength: '3',
            min: "0",
            inputMode: "numeric",
            required: true,
            onChange: event => {
              setEveningcorrectionfactor(event.target.value);
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SetCorrectionFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .DataInputLate */ .SE, {
            type: "decimal",
            name: "setlatecorrectiofactor",
            placeholder: t('correctionfactorlate'),
            id: "setcorrectiolatefactor",
            maxLength: '3',
            min: "0",
            inputMode: "numeric",
            required: true,
            onChange: event => {
              setLatecorrectionfactor(event.target.value);
            }
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_SetCorrectionFactorStyles__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .zx, {
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

/***/ 6678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ek: () => (/* binding */ CorrectionFactorTitel),
/* harmony export */   Fi: () => (/* binding */ DataInputMorning),
/* harmony export */   GK: () => (/* binding */ EntryForm),
/* harmony export */   QD: () => (/* binding */ DataInput),
/* harmony export */   SE: () => (/* binding */ DataInputLate),
/* harmony export */   im: () => (/* binding */ Wrapper),
/* harmony export */   iw: () => (/* binding */ LabelFa),
/* harmony export */   zx: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export Label */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "SetCorrectionFactorStyles__Wrapper",
  componentId: "sc-7377lo-0"
})(["display:grid;grid-template-rows:min-content auto 48px;height:inherit;justify-content:center;z-index:1;"]);
const hue = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{-webkit-filter:hue-rotate(180deg);}to{-webkit-filter:hue-rotate(-180deg);}"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default().label.withConfig({
  displayName: "SetCorrectionFactorStyles__Label",
  componentId: "sc-7377lo-1"
})(["background-color:beige;border-radius:8px;display:grid;text-align:center;height:min 5rem;z-index:1;opacity:0.8;"]);
const LabelFa = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Label).withConfig({
  displayName: "SetCorrectionFactorStyles__LabelFa",
  componentId: "sc-7377lo-2"
})(["color:#364fc7;"]);
const DataInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "SetCorrectionFactorStyles__DataInput",
  componentId: "sc-7377lo-3"
})(["text-align:center;z-index:1;border-style:groove;"]);
const DataInputMorning = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(DataInput).withConfig({
  displayName: "SetCorrectionFactorStyles__DataInputMorning",
  componentId: "sc-7377lo-4"
})(["border-top-left-radius:8px;border-top-right-radius:8px;"]);
const DataInputLate = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(DataInput).withConfig({
  displayName: "SetCorrectionFactorStyles__DataInputLate",
  componentId: "sc-7377lo-5"
})(["border-bottom-left-radius:8px;border-bottom-right-radius:8px;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "SetCorrectionFactorStyles__Button",
  componentId: "sc-7377lo-6"
})(["background-color:skyblue;color:darkblue;margin-top:5px;margin-bottom:5px;border-radius:15px;height:20px;z-index:1;opacity:0.9;"]);
const EntryForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "SetCorrectionFactorStyles__EntryForm",
  componentId: "sc-7377lo-7"
})(["display:grid;justify-content:center;gap:auto;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));align-content:start;margin:0;padding:0;overflow-y:auto;justify-content:center;z-index:1;"]);
const CorrectionFactorTitel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "SetCorrectionFactorStyles__CorrectionFactorTitel",
  componentId: "sc-7377lo-8"
})(["background-image:-webkit-linear-gradient(92deg,#f35626,#feab3a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:", " 10s infinite linear;color:purple;font-family:Cambria,Cochin,Georgia,Times,'Times New Roman',serif;text-align:center;z-index:1;"], hue);

/***/ })

};
;