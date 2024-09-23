"use strict";
exports.id = 498;
exports.ids = [498];
exports.modules = {

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

/***/ 2133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());
const correctionSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  morningcorrectionfactor: {
    type: Number,
    required: true
  },
  lunchcorrectionfactor: {
    type: Number,
    required: true
  },
  eveningcorrectionfactor: {
    type: Number,
    required: true
  },
  latecorrectionfactor: {
    type: Number,
    requirde: true
  }
});
const CorrectionFactor = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).CorrectionFactor || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('CorrectionFactor', correctionSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CorrectionFactor);

/***/ }),

/***/ 9498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getAllCorrectionFactors),
/* harmony export */   k: () => (/* binding */ getCorrectionFactorsById)
/* harmony export */ });
/* harmony import */ var _dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9883);
/* harmony import */ var _models_CorrectionFactor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2133);


async function getAllCorrectionFactors() {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
  const correctionFactors = await _models_CorrectionFactor__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.find();
  const correctionFactorArray = correctionFactors.map(({
    id,
    morningcorrectionfactor,
    lunchcorrectionfactor,
    eveningcorrectionfactor,
    latecorrectionfactor
  }) => {
    return {
      id,
      morningcorrectionfactor,
      lunchcorrectionfactor,
      eveningcorrectionfactor,
      latecorrectionfactor
    };
  });
  return correctionFactorArray;
}
async function getCorrectionFactorsById(correctionFactorId) {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
  const correctionFactor = await _models_CorrectionFactor__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.findById(correctionFactorId);
  const {
    id,
    morningcorrectionfactor,
    lunchcorrectionfactor,
    eveningcorrectionfactor,
    latecorrectionfactor
  } = correctionFactor;
  return {
    id,
    morningcorrectionfactor,
    lunchcorrectionfactor,
    eveningcorrectionfactor,
    latecorrectionfactor
  };
}

/***/ })

};
;