"use strict";
exports.id = 621;
exports.ids = [621];
exports.modules = {

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

/***/ }),

/***/ 4621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ getAllCorrectionFactors),
  k: () => (/* binding */ getCorrectionFactorsById)
});

// EXTERNAL MODULE: ./dbConnect.js
var dbConnect = __webpack_require__(8927);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/CorrectionFactor.js

const {
  Schema
} = (external_mongoose_default());
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
const CorrectionFactor = (external_mongoose_default()).models.CorrectionFactor || external_mongoose_default().model('CorrectionFactor', correctionSchema);
/* harmony default export */ const models_CorrectionFactor = (CorrectionFactor);
;// CONCATENATED MODULE: ./services/correctionFactorsService.js


async function getAllCorrectionFactors() {
  await (0,dbConnect/* default */.Z)();
  const correctionFactors = await models_CorrectionFactor.find();
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
  await (0,dbConnect/* default */.Z)();
  const correctionFactor = await models_CorrectionFactor.findById(correctionFactorId);
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