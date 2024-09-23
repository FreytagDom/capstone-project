"use strict";
exports.id = 668;
exports.ids = [668];
exports.modules = {

/***/ 5668:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SavedDataInjected)
/* harmony export */ });
/* harmony import */ var _SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5823);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UserDataToPdf_UserDataToPdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5391);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7987);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UserDataToPdf_UserDataToPdf__WEBPACK_IMPORTED_MODULE_4__, react_i18next__WEBPACK_IMPORTED_MODULE_5__]);
([_UserDataToPdf_UserDataToPdf__WEBPACK_IMPORTED_MODULE_4__, react_i18next__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function SavedDataInjected({
  cardData
}) {
  const {
    data: session
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
  const userCardData = cardData.filter(cardData => {
    return cardData.userMail === session.user.email;
  });
  const {
    0: newCardData,
    1: setNewCardData
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(userCardData);

  async function removeCard(id) {
    const response = await fetch('/api/savedInsulinData/' + id, {
      method: 'DELETE'
    });
    setNewCardData(newCardData.filter(userCardData => {
      return userCardData.id !== id;
    }));
  }

  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredData = newCardData.filter(item => item.date.toLowerCase().includes(search.toLowerCase()));
  const sortedData = filteredData.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .WrapperSaved */ ._p, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .SavedData */ .OF, {
      children: [" ", t('storedvalues')]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .SearchData */ .Tx, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .DataInput */ .QD, {
        type: "text",
        placeholder: t('search'),
        onChange: handleChange
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_UserDataToPdf_UserDataToPdf__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      cardData: cardData
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .CardGrid */ .gy, {
      id: "pdf-content",
      children: sortedData.map(item => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .Details */ .PO, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .Summary */ .ER, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .Timestampwraper */ .v2, {
              children: item.date
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .IconWrapper */ .a1, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiLineHeight, {})
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .Saved */ .HE, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .IconWrapper */ .a1, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.RiDeleteBinLine, {
                onClick: () => removeCard(item.id)
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .BloodSugar */ .Db, {
              children: [t('bloodsugarlevel'), ": ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), " ", item.bloodsugar, " mg/dl"]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .Carbohydrates */ .Hy, {
              children: [t('carbohydrates'), ": ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), " ", item.carbohydrates, " g (Gramm)"]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .Insulin */ .jz, {
              children: [t('usedinsulin'), ": ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), " ", item.insulin]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .Factor */ .EN, {
              children: [t('insulinfactor'), ": ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), " ", item.daytimeFactor]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .Factor */ .EN, {
              children: [t('correctionfactor'), ": ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), item.correctionFactor]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_SavedDataStyles__WEBPACK_IMPORTED_MODULE_0__/* .InsulinUnits */ .vb, {
              children: [t('injectedinsulin'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), " ", t('quantity'), ": ", item.calculateUnit]
            })]
          })]
        }, item.id);
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Db: () => (/* binding */ BloodSugar),
/* harmony export */   EN: () => (/* binding */ Factor),
/* harmony export */   ER: () => (/* binding */ Summary),
/* harmony export */   HE: () => (/* binding */ Saved),
/* harmony export */   Hy: () => (/* binding */ Carbohydrates),
/* harmony export */   OF: () => (/* binding */ SavedData),
/* harmony export */   PO: () => (/* binding */ Details),
/* harmony export */   QD: () => (/* binding */ DataInput),
/* harmony export */   Tx: () => (/* binding */ SearchData),
/* harmony export */   _p: () => (/* binding */ WrapperSaved),
/* harmony export */   a1: () => (/* binding */ IconWrapper),
/* harmony export */   gy: () => (/* binding */ CardGrid),
/* harmony export */   jz: () => (/* binding */ Insulin),
/* harmony export */   v2: () => (/* binding */ Timestampwraper),
/* harmony export */   vb: () => (/* binding */ InsulinUnits)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "SavedDataStyles__IconWrapper",
  componentId: "sc-g1imrb-0"
})(["display:flex;justify-content:end;align-items:center;width:100%;color:#fe4b13;margin-top:-1rem;"]);
const WrapperSaved = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "SavedDataStyles__WrapperSaved",
  componentId: "sc-g1imrb-1"
})(["display:grid;height:inherit;justify-content:center;z-index:1;opacity:0.75;background-attachment:scroll;margin-bottom:2rem;"]);
const CardGrid = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "SavedDataStyles__CardGrid",
  componentId: "sc-g1imrb-2"
})(["display:grid;gap:auto;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));align-content:start;margin:0;padding:0;overflow-y:auto;border-radius:10px;justify-content:center;"]);
const Saved = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "SavedDataStyles__Saved",
  componentId: "sc-g1imrb-3"
})(["display:grid;background-color:beige;border-radius:8px;text-align:center;height:auto;align-items:center;margin:1rem;padding:0.5rem;"]);
const Summary = styled_components__WEBPACK_IMPORTED_MODULE_0___default().summary.withConfig({
  displayName: "SavedDataStyles__Summary",
  componentId: "sc-g1imrb-4"
})(["&::-webkit-details-marker{display:none;}display:grid;text-decoration:underline;background-color:transparent;border-radius:8px;text-align:center;height:auto;align-items:center;"]);
const Details = styled_components__WEBPACK_IMPORTED_MODULE_0___default().details.withConfig({
  displayName: "SavedDataStyles__Details",
  componentId: "sc-g1imrb-5"
})(["display:grid;background-color:beige;right:1rem;border-radius:8px;text-align:center;height:auto;align-items:center;margin:0.5rem;padding:0.5rem;"]);
const BloodSugar = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "SavedDataStyles__BloodSugar",
  componentId: "sc-g1imrb-6"
})(["color:#c92a2a;"]);
const Insulin = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "SavedDataStyles__Insulin",
  componentId: "sc-g1imrb-7"
})(["color:#5c940d;"]);
const Carbohydrates = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "SavedDataStyles__Carbohydrates",
  componentId: "sc-g1imrb-8"
})(["color:#e67700;"]);
const Factor = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "SavedDataStyles__Factor",
  componentId: "sc-g1imrb-9"
})(["color:#2b8a3e;"]);
const InsulinUnits = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "SavedDataStyles__InsulinUnits",
  componentId: "sc-g1imrb-10"
})(["color:#364fc7;"]);
const Timestampwraper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "SavedDataStyles__Timestampwraper",
  componentId: "sc-g1imrb-11"
})(["color:#008080;font-size:0.8rem;display:grid;margin-top:0.3rem;"]);
const SearchData = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "SavedDataStyles__SearchData",
  componentId: "sc-g1imrb-12"
})(["display:grid;margin:0.3rem;flex-direction:column;justify-content:center;align-items:center;color:#fff;"]);
const DataInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "SavedDataStyles__DataInput",
  componentId: "sc-g1imrb-13"
})(["width:auto;text-align:center;height:2.4rem;border-radius:8px;background-color:beige;color:black;border:none;opacity:0.85;"]);
const hue = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{-webkit-filter:hue-rotate(180deg);}to{-webkit-filter:hue-rotate(-180deg);}"]);
const SavedData = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "SavedDataStyles__SavedData",
  componentId: "sc-g1imrb-14"
})(["background-image:-webkit-linear-gradient(92deg,#f35626,#feab3a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:", " 10s infinite linear;color:purple;font-family:Cambria,Cochin,Georgia,Times,'Times New Roman',serif;text-align:center;z-index:1;"], hue);

/***/ }),

/***/ 5391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UserDataToPdf)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3205);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserDataToPdfStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8329);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7987);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_4__]);
react_i18next__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function UserDataToPdf({
  cardData
}) {
  const {
    data: session
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();
  const userCardData = cardData.filter(cardData => {
    return cardData.userMail === session.user.email;
  });
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();

  async function exportToPDF() {
    const itemsPerPage = 1000;
    const itemsPerRow = 10;
    const docChunks = [];

    for (let i = 0; i < userCardData.length; i += itemsPerPage) {
      const chunk = userCardData.slice(i, i + itemsPerPage);
      const chunkRows = [];

      for (let j = 0; j < chunk.length; j += itemsPerRow) {
        chunkRows.push(chunk.slice(j, j + itemsPerRow));
      }

      docChunks.push(chunkRows);
    }

    const blobPromises = docChunks.map(async (chunkRows, chunkIndex) => {
      const doc = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Document, {
        children: chunkRows.map((row, rowIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Page, {
          size: "A4",
          style: _UserDataToPdfStyles__WEBPACK_IMPORTED_MODULE_3__/* .Styles */ .z.page,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
            style: _UserDataToPdfStyles__WEBPACK_IMPORTED_MODULE_3__/* .Styles */ .z.header,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
              style: _UserDataToPdfStyles__WEBPACK_IMPORTED_MODULE_3__/* .Styles */ .z.title,
              children: [t('saveddatafrom'), " ", session.user.name]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
              style: _UserDataToPdfStyles__WEBPACK_IMPORTED_MODULE_3__/* .Styles */ .z.subtitle,
              children: [t('createdon'), ": ", new Date().toLocaleString()]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
            style: _UserDataToPdfStyles__WEBPACK_IMPORTED_MODULE_3__/* .Styles */ .z.cardContainer,
            children: row.map((item, itemIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
              style: _UserDataToPdfStyles__WEBPACK_IMPORTED_MODULE_3__/* .Styles */ .z.card,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
                style: {
                  color: '#008080'
                },
                children: [t('date'), ": ", item.date]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
                style: {
                  color: '#c92a2a'
                },
                children: [t('bloodsugarlevel'), ": ", item.bloodsugar, " mg/dl"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
                style: {
                  color: '#e67700'
                },
                children: [t('carbohydrates'), ": ", item.carbohydrates, " g"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
                style: {
                  color: '#5c940d'
                },
                children: [t('usedinsulin'), ": ", item.insulin]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
                style: {
                  color: '#2b8a3e'
                },
                children: [t('insulinfactor'), ": ", item.daytimeFactor]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
                style: {
                  color: '#2b8a3e'
                },
                children: [t('correctionfactor'), ": ", item.correctionFactor]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
                style: {
                  color: '#364fc7'
                },
                children: [t('injectedinsulin'), " ", t('quantity'), ":", ' ', item.calculateUnit]
              })]
            }, itemIndex))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.View, {
            style: _UserDataToPdfStyles__WEBPACK_IMPORTED_MODULE_3__/* .Styles */ .z.footer,
            children: [' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
              children: "InsulinApp.vercel.app"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Image, {
            style: _UserDataToPdfStyles__WEBPACK_IMPORTED_MODULE_3__/* .Styles */ .z.image,
            src: "logo.png",
            alt: ""
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.Text, {
            style: _UserDataToPdfStyles__WEBPACK_IMPORTED_MODULE_3__/* .Styles */ .z.pageNumber,
            render: ({
              pageNumber,
              totalPages
            }) => `${pageNumber} / ${totalPages}`,
            fixed: true
          })]
        }, rowIndex))
      }, chunkIndex);

      const blob = await (0,_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.pdf)(doc).toBlob();
      return blob;
    });
    const blobs = await Promise.all(blobPromises);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const pdfDoc = new Blob(blobs, {
      type: 'application/pdf'
    });
    const url = URL.createObjectURL(pdfDoc);
    const link = document.createElement('a');

    if (isIOS) {
      window.open(url);
    } else {
      window.open(url);
      link.href = url;
      link.download = `gespeicherte_daten_${session.user.name}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_UserDataToPdfStyles__WEBPACK_IMPORTED_MODULE_3__/* .ExportButton */ .j, {
    onClick: exportToPDF,
    children: t('export')
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ ExportButton),
/* harmony export */   z: () => (/* binding */ Styles)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3205);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__);


const ExportButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "UserDataToPdfStyles__ExportButton",
  componentId: "sc-1jfycsr-0"
})(["background-color:#fe4b13;color:white;border:none;border-radius:8px;padding:0.5rem 1rem;height:1.8rem;margin-left:0.4rem;margin-right:0.4rem;width:auto;cursor:pointer;transition:background-color 0.4s ease;&:hover{background-color:#d63200;}"]);
const Styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 40,
    columnGap: 5
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    color: 'rebeccapurple'
  },
  footer: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#c92a2a'
  },
  image: {
    bottom: 25,
    left: 200,
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: '50%'
  },
  title: {
    fontSize: 18,
    marginTop: 10
  },
  subtitle: {
    fontSize: 10,
    marginTop: 5
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 60
  },
  card: {
    width: '40%',
    height: '100',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    fontSize: 10
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    bottom: 30,
    left: 500,
    textAlign: 'center',
    color: 'grey'
  }
});

/***/ })

};
;