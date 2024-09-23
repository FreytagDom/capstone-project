"use strict";
exports.id = 813;
exports.ids = [813];
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

/***/ 6264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  Schema
} = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());
const factorSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  morningfactor: {
    type: Number,
    required: true
  },
  lunchfactor: {
    type: Number,
    required: true
  },
  eveningfactor: {
    type: Number,
    required: true
  },
  latefactor: {
    type: Number,
    required: true
  }
});
const DayTimeFactor = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).DayTimeFactor || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('DayTimeFactor', factorSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DayTimeFactor);

/***/ }),

/***/ 8813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getFactorById),
/* harmony export */   k: () => (/* binding */ getAllFactors)
/* harmony export */ });
/* harmony import */ var _dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9883);
/* harmony import */ var _models_DayTimeFactor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6264);


async function getAllFactors() {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
  const daytimeFactors = await _models_DayTimeFactor__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.find();
  return daytimeFactors.map(({
    id,
    morningfactor,
    lunchfactor,
    eveningfactor,
    latefactor
  }) => {
    return {
      id,
      morningfactor,
      lunchfactor,
      eveningfactor,
      latefactor
    };
  });
}
async function getFactorById(dayTimeFactorId) {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
  const dayTimeFactor = await _models_DayTimeFactor__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.findById(dayTimeFactorId);
  const {
    id,
    morningfactor,
    lunchfactor,
    eveningfactor,
    latefactor
  } = dayTimeFactor;
  return {
    id,
    morningfactor,
    lunchfactor,
    eveningfactor,
    latefactor
  };
}

/***/ })

};
;