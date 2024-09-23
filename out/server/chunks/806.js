"use strict";
exports.id = 806;
exports.ids = [806];
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

/***/ 1806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getCategoryById),
/* harmony export */   t: () => (/* binding */ getAllCategories)
/* harmony export */ });
/* harmony import */ var _dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9883);
/* harmony import */ var _models_InsulinApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9218);


async function getAllCategories() {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
  const savedInsulinData = await _models_InsulinApp__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.find();
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
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
  const savedInsulin = await _models_InsulinApp__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.findById(savedInsulinId);
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