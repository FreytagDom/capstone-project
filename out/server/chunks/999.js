"use strict";
exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 3676:
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

/***/ 999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ getAllDayFactors)
/* harmony export */ });
/* unused harmony export getDayFactorById */
/* harmony import */ var _dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8927);
/* harmony import */ var _models_DayTimeFactor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3676);


async function getAllDayFactors() {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
  console.log(_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
  const daytimeFactors = await _models_DayTimeFactor__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.find();
  const factorArray = daytimeFactors.map(({
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
  return factorArray;
}
async function getDayFactorById(daytimeFactorId) {
  await dbConnect();
  const daytimeFactors = await DayTimeFactor.findById(daytimeFactorId);
  const {
    id,
    morningfactor,
    lunchfactor,
    eveningfactor,
    latefactor
  } = daytimeFactors;
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