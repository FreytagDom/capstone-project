"use strict";
exports.id = 822;
exports.ids = [822];
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

/***/ 822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ getAllCategories),
  a: () => (/* binding */ getCategoryById)
});

// EXTERNAL MODULE: ./dbConnect.js
var dbConnect = __webpack_require__(8927);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/InsulinApp.js

const {
  Schema
} = (external_mongoose_default());
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
const SavedInsulinData = (external_mongoose_default()).models.SavedInsulinData || external_mongoose_default().model('SavedInsulinData', cardSchema);
/* harmony default export */ const InsulinApp = (SavedInsulinData);
;// CONCATENATED MODULE: ./services/insulinAppDataService.js


async function getAllCategories() {
  await (0,dbConnect/* default */.Z)();
  const savedInsulinData = await InsulinApp.find();
  return savedInsulinData.map(({
    id,
    userMail,
    bloodsugar,
    carbohydrates,
    insulin,
    daytimeFactor,
    correctionFactor,
    calculateUnit,
    date
  }) => {
    return {
      id,
      userMail,
      bloodsugar,
      carbohydrates,
      insulin,
      daytimeFactor,
      correctionFactor,
      calculateUnit,
      date
    };
  });
}
async function getCategoryById(savedInsulinId) {
  await (0,dbConnect/* default */.Z)();
  const savedInsulin = await InsulinApp.findById(savedInsulinId);
  const {
    id,
    userMail,
    bloodsugar,
    carbohydrates,
    insulin,
    factor,
    correctionFactor,
    calculateUnits,
    date
  } = savedInsulin;
  return {
    id,
    userMail,
    bloodsugar,
    carbohydrates,
    insulin,
    factor,
    correctionFactor,
    calculateUnits,
    date
  };
}

/***/ })

};
;