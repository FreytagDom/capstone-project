"use strict";
exports.id = 13;
exports.ids = [13];
exports.modules = {

/***/ 5013:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9871);
/* harmony import */ var _public_leereSpritze_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3863);
/* harmony import */ var _public_volleSpritze_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1536);
/* harmony import */ var _public_blood_PNG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2928);
/* harmony import */ var _public_blooddrop_PNG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6573);
/* harmony import */ var _public_carbohydrates_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4838);
/* harmony import */ var _public_donut_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5425);
/* harmony import */ var _utils_calculate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1106);
/* harmony import */ var _utils_handleCorrectionFactor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8239);
/* harmony import */ var _handler_getCorrectionFactor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5559);
/* harmony import */ var _handler_getDayFactor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4402);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7987);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_10__]);
react_i18next__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















function Input({
  session,
  factors,
  correctionfactors,
  index
}) {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const bloodsugar = form.bloodsugar.value;
    const carbohydrates = form.carbohydrates.value;
    const insulin = form.setinsulinSelect.value;
    const daytimeFactor = (0,_handler_getDayFactor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(session, factors).props.value;
    const correctionFactor = (0,_utils_handleCorrectionFactor__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(bloodsugar, (0,_handler_getCorrectionFactor__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(session, correctionfactors));
    const calculateUnits = (0,_utils_calculate__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(bloodsugar, carbohydrates, daytimeFactor, correctionFactor);
    const userMail = session.user.email;
    setValue(calculateUnits); // const date = new Date().toLocaleString();

    const currentDate = new Date();
    const date = currentDate.toLocaleString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    const cardData = {
      userMail: userMail,
      bloodsugar: bloodsugar,
      carbohydrates: carbohydrates,
      insulin: insulin,
      daytimeFactor: daytimeFactor,
      correctionFactor: correctionFactor,
      calculateUnit: calculateUnits,
      date: date
    };
    const response = await fetch('/api/setInsulinDatas', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(cardData)
    });
    form.reset();
  }

  const options = [{
    value: 'Fiasp',
    label: 'Fiasp'
  }, {
    value: 'Hum Normal',
    label: 'Hum Normal'
  }];
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .EntryForm */ .GK, {
      onSubmit: handleSubmit,
      onKeyPress: e => !/[0-9]/.test(e.key) && e.preventDefault(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .LabelBz */ .eq, {
        htmlFor: "bloodsugar",
        children: [t('bloodsugar'), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("br", {}), "mg/dl", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .BloodDrop */ .Yz, {
          src: _public_blooddrop_PNG__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
          alt: "blooddrop"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .Blood */ .HX, {
          src: _public_blood_PNG__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
          alt: "blood"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .DataInput */ .QD, {
          type: "decimal",
          name: "bloodsugar",
          placeholder: t('currentbloodglucosevalue'),
          id: "bloodsugar",
          min: "0",
          inputMode: "numeric",
          maxLength: 3,
          required: true
        }, "bloodsugar")]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .LabelCa */ .RA, {
        htmlFor: "carbohydrates",
        children: [t('carbohydrates'), " (Khd) ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("br", {}), " g (Gramm)", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .Carbohydrates */ .Hy, {
          src: _public_carbohydrates_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
          alt: "carbohydrates"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .Donut */ .yi, {
          src: _public_donut_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
          alt: "donut"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .DataInput */ .QD, {
          type: "decimal",
          name: "carbohydrates",
          placeholder: t('howmanyKhd65g'),
          id: "carbohydrates",
          maxLength: '3',
          min: "0",
          inputMode: "numeric",
          required: true
        }, "carbohydrates")]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .LabelIu */ .g4, {
          htmlFor: "insulin",
          children: [t('whichinsulin1'), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("br", {}), " ", t('whichinsulin2'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .InsulinSelect */ .wt, {
            htmlFor: "setinsulin",
            name: "setinsulinSelect",
            id: _HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .InsulinOption */ ._W.id,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .InsulinOption */ ._W, {
              placeholder: t('chooseinsulin'),
              children: t('chooseinsulin')
            }), options.map(option => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .InsulinOption */ ._W, {
              name: "insulinOption",
              value: option.value,
              children: option.label
            }, option.label))]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
        type: "submit",
        children: t('confirm')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .InsulinUnits */ .vb, {
        htmlFor: "insulinunits",
        id: "calculateUnits",
        name: "calculateUnits",
        children: [value, " / ", t('injectunits'), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("br", {}), " ", t('ofinsulin'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .FullInject */ .Hz, {
          src: _public_volleSpritze_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
          alt: ""
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .EmptyInject */ .BV, {
          src: _public_leereSpritze_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
          alt: ""
        })]
      }, "calculateUnits"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .LabelFa */ .iw, {
          htmlFor: "factor",
          children: [t('daytimefactor'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .FactorSelect */ .kS, {
            htmlFor: "setdayfactor",
            name: "dayfactorSelect",
            id: (0,_handler_getDayFactor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(session, factors).props.name,
            value: (0,_handler_getDayFactor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(session, factors).props.value,
            options: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .FactorOption */ .bk, {
              name: (0,_handler_getDayFactor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(session, factors).props.name,
              id: (0,_handler_getDayFactor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(session, factors),
              value: (0,_handler_getDayFactor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(session, factors).props.value,
              children: [t('insulinfactor'), ' ', (0,_handler_getDayFactor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(session, factors).props.value]
            })
          }, index), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .FactorSelect */ .kS, {
            htmlFor: "setcorrectionfactor",
            name: "correctionfactorSelect",
            id: (0,_handler_getCorrectionFactor__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(session, correctionfactors).props.name,
            value: (0,_handler_getCorrectionFactor__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(session, correctionfactors).props.value,
            options: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_HomeInputStyles__WEBPACK_IMPORTED_MODULE_1__/* .FactorOption */ .bk, {
              name: (0,_handler_getCorrectionFactor__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(session, correctionfactors).props.name,
              id: (0,_handler_getCorrectionFactor__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(session, correctionfactors).props,
              value: (0,_handler_getCorrectionFactor__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(session, correctionfactors).props.value,
              children: [t('correction'), ' ', (0,_handler_getCorrectionFactor__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(session, correctionfactors).props.value]
            })
          }, index)]
        })
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BV: () => (/* binding */ EmptyInject),
/* harmony export */   GK: () => (/* binding */ EntryForm),
/* harmony export */   HX: () => (/* binding */ Blood),
/* harmony export */   Hy: () => (/* binding */ Carbohydrates),
/* harmony export */   Hz: () => (/* binding */ FullInject),
/* harmony export */   QD: () => (/* binding */ DataInput),
/* harmony export */   RA: () => (/* binding */ LabelCa),
/* harmony export */   Yz: () => (/* binding */ BloodDrop),
/* harmony export */   _W: () => (/* binding */ InsulinOption),
/* harmony export */   bk: () => (/* binding */ FactorOption),
/* harmony export */   eq: () => (/* binding */ LabelBz),
/* harmony export */   g4: () => (/* binding */ LabelIu),
/* harmony export */   iw: () => (/* binding */ LabelFa),
/* harmony export */   kS: () => (/* binding */ FactorSelect),
/* harmony export */   vb: () => (/* binding */ InsulinUnits),
/* harmony export */   wt: () => (/* binding */ InsulinSelect),
/* harmony export */   yi: () => (/* binding */ Donut),
/* harmony export */   zx: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export Label */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default().label.withConfig({
  displayName: "HomeInputStyles__Label",
  componentId: "sc-vf49uo-0"
})(["background-color:beige;border-radius:8px;display:grid;text-align:center;height:min-content 14vh;padding-top:3vh;margin-top:0.3vh;position:sticky;opacity:0.8;"]);
const LabelBz = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Label).withConfig({
  displayName: "HomeInputStyles__LabelBz",
  componentId: "sc-vf49uo-1"
})(["color:#c92a2a;"]);
const LabelIu = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Label).withConfig({
  displayName: "HomeInputStyles__LabelIu",
  componentId: "sc-vf49uo-2"
})(["color:#5c940d;"]);
const LabelCa = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Label).withConfig({
  displayName: "HomeInputStyles__LabelCa",
  componentId: "sc-vf49uo-3"
})(["color:#e67700;"]);
const LabelFa = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Label).withConfig({
  displayName: "HomeInputStyles__LabelFa",
  componentId: "sc-vf49uo-4"
})(["color:#2b8a3e;padding-bottom:0.5rem;padding-top:0.5rem;"]);
const DataInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "HomeInputStyles__DataInput",
  componentId: "sc-vf49uo-5"
})(["border-radius:8px;text-align:center;border-style:groove;appearance:none;-moz-appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "HomeInputStyles__Button",
  componentId: "sc-vf49uo-6"
})(["background-color:skyblue;color:darkblue;margin-top:0.5rem;margin-bottom:0.5rem;border-radius:15px;height:20px;z-index:1;"]);
const InsulinSelect = styled_components__WEBPACK_IMPORTED_MODULE_0___default().select.withConfig({
  displayName: "HomeInputStyles__InsulinSelect",
  componentId: "sc-vf49uo-7"
})(["background-color:beige;border-radius:8px;display:grid;text-align:center;height:1.8rem;margin-top:0.7rem;color:#364fc9;"]);
const InsulinOption = styled_components__WEBPACK_IMPORTED_MODULE_0___default().option.withConfig({
  displayName: "HomeInputStyles__InsulinOption",
  componentId: "sc-vf49uo-8"
})(["border-radius:8px;text-align:center;color:#5c940d;background:transparent;"]);
const FactorSelect = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HomeInputStyles__FactorSelect",
  componentId: "sc-vf49uo-9"
})(["background-color:beige;border-radius:8px;display:grid;text-align:center;height:1.7rem;color:#364fc9;"]);
const FactorOption = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HomeInputStyles__FactorOption",
  componentId: "sc-vf49uo-10"
})(["border-radius:8px;text-align:center;padding-top:0.4rem;color:#5c940d;background:transparent;"]);
const InsulinUnits = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "HomeInputStyles__InsulinUnits",
  componentId: "sc-vf49uo-11"
})(["color:#364fc7;background-color:beige;border-radius:8px;display:grid;text-align:center;padding-top:2vh;height:4rem;position:inherit;z-index:1;opacity:0.75;"]);
const EntryForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "HomeInputStyles__EntryForm",
  componentId: "sc-vf49uo-12"
})(["display:grid;justify-content:center;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));grid-template-rows:repeat(auto-fit,minmax(100px,1fr));align-content:start;margin:0;padding:0;"]);
const EmptyInject = styled_components__WEBPACK_IMPORTED_MODULE_0___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
  displayName: "HomeInputStyles__EmptyInject",
  componentId: "sc-vf49uo-13"
})(["margin-left:12rem;margin-top:-1.2rem;"]);
const FullInject = styled_components__WEBPACK_IMPORTED_MODULE_0___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
  displayName: "HomeInputStyles__FullInject",
  componentId: "sc-vf49uo-14"
})(["margin-left:1rem;margin-top:-3rem;"]);
const BloodDrop = styled_components__WEBPACK_IMPORTED_MODULE_0___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
  displayName: "HomeInputStyles__BloodDrop",
  componentId: "sc-vf49uo-15"
})(["margin-left:1rem;margin-top:-3rem;height:1.8rem;width:1.5rem;"]);
const Blood = styled_components__WEBPACK_IMPORTED_MODULE_0___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
  displayName: "HomeInputStyles__Blood",
  componentId: "sc-vf49uo-16"
})(["margin-left:11rem;margin-top:-2.2rem;padding-right:0.5rem;height:2rem;width:3rem;"]);
const Carbohydrates = styled_components__WEBPACK_IMPORTED_MODULE_0___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
  displayName: "HomeInputStyles__Carbohydrates",
  componentId: "sc-vf49uo-17"
})(["margin-left:0.5rem;margin-top:-3rem;height:1.5rem;width:1.5rem;"]);
const Donut = styled_components__WEBPACK_IMPORTED_MODULE_0___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
  displayName: "HomeInputStyles__Donut",
  componentId: "sc-vf49uo-18"
})(["margin-left:11.5rem;margin-top:-1rem;height:2rem;width:2rem;"]);

/***/ }),

/***/ 5559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ handleUserCorrectionFactor)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);


function handleUserCorrectionFactor(session, correctionfactors) {
  let userCorrectionFactorToDisplay;
  const userCorrectionFactor = correctionfactors.filter(correctionfactor => {
    return correctionfactor.id === session?.user.email;
  });
  const currentTime = new Date().getHours();
  const correctionFactorLength = userCorrectionFactor.length;

  if (correctionFactorLength === 0) {
    userCorrectionFactorToDisplay = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SetCorrectionFactorOption, {
      htmlFor: "setcorrectionfactor",
      name: "no data",
      value: 0,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(CorrectionFactorOption, {
        children: "0"
      })
    });
  } else if (currentTime >= 6 && currentTime < 11) {
    userCorrectionFactorToDisplay = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SetCorrectionFactorOption, {
      htmlFor: "setcorrectionfactor",
      name: "morningcorrectionfactor",
      id: userCorrectionFactor[0].name,
      value: userCorrectionFactor[0].morningcorrectionfactor,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(CorrectionFactorOption, {
        children: userCorrectionFactor[0].morningcorrectionfactor
      })
    }, userCorrectionFactor[0].id);
  } else if (currentTime >= 11 && currentTime < 17) {
    userCorrectionFactorToDisplay = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SetCorrectionFactorOption, {
      htmlFor: "setcorrectionfactor",
      name: "lunchcorrectionfactor",
      id: userCorrectionFactor[0].name,
      value: userCorrectionFactor[0].lunchcorrectionfactor,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(CorrectionFactorOption, {
        name: "lunchcorrectionfactor",
        value: userCorrectionFactor[0].lunchcorrectionfactor,
        children: userCorrectionFactor[0].lunchcorrectionfactor
      })
    }, userCorrectionFactor[0].id);
  } else if (currentTime >= 17 && currentTime < 22) {
    userCorrectionFactorToDisplay = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SetCorrectionFactorOption, {
      htmlFor: "setcorrectionfactor",
      name: "eveningcorrectionfactor",
      id: userCorrectionFactor[0].name,
      value: userCorrectionFactor[0].eveningcorrectionfactor,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(CorrectionFactorOption, {
        name: "eveningcorrectionfactor",
        value: userCorrectionFactor[0].eveningcorrectionfactor,
        children: userCorrectionFactor[0].eveningcorrectionfactor
      })
    }, userCorrectionFactor[0].id);
  } else {
    userCorrectionFactorToDisplay = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SetCorrectionFactorOption, {
      htmlFor: "setcorrectionfactor",
      name: "latecorrectionfactor",
      id: userCorrectionFactor[0].name,
      value: userCorrectionFactor[0].latecorrectionfactor,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(CorrectionFactorOption, {
        name: "latecorrectionfactor",
        id: userCorrectionFactor[0].name,
        value: userCorrectionFactor[0].latecorrectionfactor,
        children: userCorrectionFactor[0].latecorrectionfactor
      })
    }, userCorrectionFactor[0].id);
  }

  return userCorrectionFactorToDisplay;
}
const CorrectionFactorOption = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "getCorrectionFactor__CorrectionFactorOption",
  componentId: "sc-kbhtx9-0"
})(["border-radius:8px;text-align:center;color:#5c940d;background:transparent;"]);
const SetCorrectionFactorOption = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "getCorrectionFactor__SetCorrectionFactorOption",
  componentId: "sc-kbhtx9-1"
})(["border-radius:8px;text-align:center;color:#5c940d;background:transparent;"]);

/***/ }),

/***/ 4402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ handleUserDayFactor)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);


function handleUserDayFactor(session, factors) {
  let userFactorToDisplay;
  const userFactor = factors.filter(factor => {
    return factor.id === session?.user.email;
  });
  const currentTime = new Date().getHours();
  const factorLength = userFactor.length;

  if (factorLength === 0) {
    userFactorToDisplay = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SetDayFactorOption, {
      htmlFor: "setdayfactor",
      name: "no data",
      value: 0,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(FactorOption, {
        children: "0"
      })
    });
  } else if (currentTime >= 6 && currentTime < 11) {
    userFactorToDisplay = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SetDayFactorOption, {
      htmlFor: "setdayfactor",
      name: "morningfactor",
      id: userFactor[0].id,
      value: userFactor[0].morningfactor,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(FactorOption, {
        name: "morningfactor",
        value: userFactor[0].morningfactor,
        children: userFactor[0].morningfactor
      })
    }, userFactor[0].id);
  } else if (currentTime >= 11 && currentTime < 17) {
    userFactorToDisplay = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SetDayFactorOption, {
      htmlFor: "setdayfactor",
      name: "lunchfactor",
      id: userFactor[0].name,
      value: userFactor[0].lunchfactor,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(FactorOption, {
        name: "lunchfactor",
        value: userFactor[0].lunchfactor,
        children: userFactor[0].lunchfactor
      })
    }, userFactor[0].id);
  } else if (currentTime >= 17 && currentTime < 22) {
    userFactorToDisplay = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SetDayFactorOption, {
      htmlFor: "setdayfactor",
      name: "eveningfactor",
      id: userFactor[0].name,
      value: userFactor[0].eveningfactor,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(FactorOption, {
        name: "eveningfactor",
        value: userFactor[0].eveningfactor,
        children: userFactor[0].eveningfactor
      })
    }, userFactor[0].id);
  } else {
    userFactorToDisplay = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(SetDayFactorOption, {
      htmlFor: "setdayfactor",
      name: "latefactor",
      id: userFactor[0].name,
      value: userFactor[0].latefactor,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(FactorOption, {
        name: "latefactor",
        value: userFactor[0].latefactor,
        children: userFactor[0].latefactor
      })
    }, userFactor[0].id);
  }

  return userFactorToDisplay;
}
const FactorOption = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "getDayFactor__FactorOption",
  componentId: "sc-v0zkv-0"
})(["border-radius:8px;text-align:center;padding-top:0.4rem;color:#5c940d;background:transparent;"]);
const SetDayFactorOption = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "getDayFactor__SetDayFactorOption",
  componentId: "sc-v0zkv-1"
})(["border-radius:8px;text-align:center;color:#5c940d;background:transparent;"]);

/***/ }),

/***/ 1106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ handleInsulinUnit)
/* harmony export */ });
function handleInsulinUnit(bloodsugar, carbohydrates, daytimeFactor, correctionFactor) {
  let calculateUnit;

  if (bloodsugar < 100) {
    calculateUnit = (carbohydrates / daytimeFactor).toFixed(1);
  } else {
    calculateUnit = ((bloodsugar - 100) / correctionFactor + carbohydrates / daytimeFactor).toFixed(1);
  }

  return calculateUnit;
}

/***/ }),

/***/ 8239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ handelCorretion)
/* harmony export */ });
function handelCorretion(bloodsugar, userCorrectionFactorToDisplay) {
  let chekedCorrection;

  if (bloodsugar < 100) {
    chekedCorrection = 0;
  } else {
    chekedCorrection = userCorrectionFactorToDisplay.props.value;
  }

  return chekedCorrection;
}

/***/ }),

/***/ 2928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/blood.1d1d2c0b.PNG","height":970,"width":1250,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 6573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/blooddrop.13c493d1.PNG","height":229,"width":146,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 4838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/carbohydrates.c67a0fd4.png","height":32,"width":32,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AU42DITp8gS3ydjw4U85BVWxx/vcAAAAC6pvA38AAACvAX9YG4L6+/R9+f4F9An8BwweLyH7Fgz2Bf7o5ADl7fyWASoAAFNBSzOs/PzlAPvuD/8HFAIB+v7y/frwCgPl8vxmAYaBdqcmD/ZYJP+U+vb+KQUCAPsB/Pz9+xENBAXp7/yxAUxDPIEa9sx+JiQhAPny1wAFBhL/BAkZAf38/ADS3/RtAYB0ZIIQDQx9cH+Qk3h1bFHj6O73paOmygAAI9IAAOexAXBQP8gZFBA3d5yxiseef3b+7uYA1rib3u8DDtAA/fLiATMAACnNAAAMaDwbPVUZ5WcaFAD31/QS15q+7q8xIADxtHB77Dl5AT8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/donut.ef376f23.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA40lEQVR42mO4XN3LxAAEO5o9Fc9WzpxwrrylaUdWszgDEBwpzGFmAIHT5WHOZ1K6/pwKnfj/fMbU/6dyp35eGcdgwQADpzMbzp506v2/1N7v/nLP8A9b/RKeTU5jUGUAgaY0BqGjVs0vziW2/e8pYLDeUSKZvrvAeDsDEHzrKGFhAIG5GhknjwT3/b9R1HjrakzP9SORlf+n+xvUMsBAnpmz+SKX7J/7bev/73Cq/7/IPfNNi44/xA01Fn5gl4oyMEjlG9qlV5i5ZzEwMAgzAMFCp0wmBhAoMXUFKkIFEwxjwWIACZFUiGWKPrsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/leereSpritze.f76e0674.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAi0lEQVR42mMQCzKxA+J8BiQgGmjMDOcAJcuAeAoQNwLxDCDWgYqzwRQcAmJHID4IxF5AvA2IDWAGwBQZAfE2ILYGYj0gXgPEPkAsCrcPyPEG4ldAHArEvkB8F4jFYY5igSpyBeI7QHwciDPFg0zF4daIBBjBTJoGxJZAfAKI58PkUUyCKgwQCzLhBAAfYipMzSrwtwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/volleSpritze.52e2f51c.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAlUlEQVR42mNosF1jB8T5DEig3mYNM5wDlCwD4qlAXAnEfQ22a5Wh4mwwBUeA2KLeds33epvV/4Hsj0BFajADYIo0gPhng82aX0C6GYgXArEfEIsC7VvFBFXkBsS3gbrtgLQ/EN8FssVhjmKBKnIH4gdAfAyIM2EKIIqsVzNDFU0FYksgPgHE82HyKCZBFK4NaLBdywkAdIlO2FwujtcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ })

};
;