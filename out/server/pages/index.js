"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DeleteUserDataButton)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/PopupModal/PopuipModalStyles.js

const ModalWrapper = external_styled_components_default().div.withConfig({
  displayName: "PopuipModalStyles__ModalWrapper",
  componentId: "sc-1rjs2q8-0"
})(["position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,0.5);z-index:100;"]);
const ModalContent = external_styled_components_default().div.withConfig({
  displayName: "PopuipModalStyles__ModalContent",
  componentId: "sc-1rjs2q8-1"
})(["background-color:burlywood;padding:1rem;border-radius:8px;box-shadow:0px 2px 15px rgba(0,0,0,0.9);"]);
const Text = external_styled_components_default().p.withConfig({
  displayName: "PopuipModalStyles__Text",
  componentId: "sc-1rjs2q8-2"
})(["color:blueviolet;font-family:'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif;font-size:1rem;max-width:13rem;"]);
const ButtonWrapper = external_styled_components_default().div.withConfig({
  displayName: "PopuipModalStyles__ButtonWrapper",
  componentId: "sc-1rjs2q8-3"
})(["display:flex;justify-content:space-between;margin-top:0.5rem;"]);
const StyledButton = external_styled_components_default().button.withConfig({
  displayName: "PopuipModalStyles__StyledButton",
  componentId: "sc-1rjs2q8-4"
})(["padding:0.4rem 0.8rem;border:none;border-radius:4px;cursor:pointer;font-size:0.8rem;height:2rem;width:6rem;", ""], props => props.primary ? `
    background-color: #007bff;
    color: white;
  ` : `
    background-color: #f0f0f0;
    color: black;
  `);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./components/PopupModal/PopupModal.js




function PopupModal({
  onClose,
  onConfirm
}) {
  return /*#__PURE__*/jsx_runtime.jsx(ModalWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ModalContent, {
      children: [/*#__PURE__*/jsx_runtime.jsx(Text, {
        children: "Sicher, dass du alle Daten l\xF6schen m\xF6chtest?"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ButtonWrapper, {
        children: [/*#__PURE__*/jsx_runtime.jsx(StyledButton, {
          onClick: onConfirm,
          primary: true,
          children: "Ja, l\xF6schen"
        }), /*#__PURE__*/jsx_runtime.jsx(StyledButton, {
          onClick: onClose,
          children: "Abbrechen"
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./public/userDeleteIcon.png
/* harmony default export */ const userDeleteIcon = ({"src":"/_next/static/media/userDeleteIcon.3d9b7c93.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+0lEQVR42mNgiC7hjqyutmif2PIhvb56CUNcjVhOWTITAxxYFwkuqbXU+H9m8qe/O8unAUUErx7dzc6AAi79jF1z9vKH2nNPTzDs/qECEiraepEVLPf/x3/ezgd/7pY9+P+/6N6//z23fk37f+0y2IR9B68zMrx48MX5wa0Pv+7dePf33o33/+9ef3/34e33x3zr+k3BJhw7+ljk7Mlnb86cePr/9LEn//ftuNf95fXvnh17zm8CSnMzvH75je3C2RfXz5569v/08af/9++5X/b//3+R29df3xEtbDIAm3Lx3Iu9l86//A806f/hfQ+jQWJP7n5cfe/GBz8Atl6MheLKcE4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/DeleteUserData/DeleteUserData.js








function DeleteUserDataButton() {
  const {
    data: session
  } = (0,react_.useSession)();
  const userMail = session.user.email;
  const _id = session.user.email;
  const {
    0: modalOpen,
    1: setModalOpen
  } = (0,external_react_.useState)(false);

  async function handleDelete() {
    try {
      const response = await fetch(`/api/savedInsulinDatas/[id]?userMail=${userMail}`, {
        method: 'DELETE'
      });
      await fetch('/api/insulinFactor/' + _id, {
        method: 'DELETE'
      });
      await fetch('/api/correctionFactor/' + _id, {
        method: 'DELETE'
      });

      if (response.ok) {
        console.log('Daten wurden erfolgreich gelöscht.');
      } else {
        console.error('Fehler beim Löschen der Daten.');
      }

      closeModal();
    } catch (error) {
      console.error('Fehler beim Löschen der Daten:', error);
    }

    setModalOpen(false);
  }

  const handleCancel = () => {
    setModalOpen(false);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(PopupWrapper, {
    children: [/*#__PURE__*/jsx_runtime.jsx(DeleteButton, {
      onClick: () => setModalOpen(true),
      children: /*#__PURE__*/jsx_runtime.jsx(UserDeleteIcon, {
        src: userDeleteIcon,
        alt: "UserDeleteIcon"
      })
    }), modalOpen && /*#__PURE__*/jsx_runtime.jsx(PopupModal, {
      onClose: handleCancel,
      onConfirm: handleDelete
    })]
  });
}
const PopupWrapper = external_styled_components_.styled.div.withConfig({
  displayName: "DeleteUserData__PopupWrapper",
  componentId: "sc-1im6ngo-0"
})(["display:grid;justify-content:end;margin-left:-0.5rem;"]);
const DeleteButton = external_styled_components_.styled.button.withConfig({
  displayName: "DeleteUserData__DeleteButton",
  componentId: "sc-1im6ngo-1"
})(["background:none;border:none;border-radius:5px;width:3rem;color:black;cursor:pointer;"]);
const UserDeleteIcon = (0,external_styled_components_.styled)((image_default())).withConfig({
  displayName: "DeleteUserData__UserDeleteIcon",
  componentId: "sc-1im6ngo-2"
})(["background:transparent;"]);

/***/ }),

/***/ 1731:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ InfoButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InfoButtonStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5300);
/* harmony import */ var _public_closeIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6506);
/* harmony import */ var _public_infoIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3740);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7987);
/* harmony import */ var _LanguageSwitcher_LanguageSwitcherButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9510);
/* harmony import */ var _public_EmailSend_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_4__, _LanguageSwitcher_LanguageSwitcherButton__WEBPACK_IMPORTED_MODULE_5__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_4__, _LanguageSwitcher_LanguageSwitcherButton__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function InfoButton() {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  const handleEmailButtonClick = () => {
    window.location.href = 'mailto:insulinapp@web.de';
  };

  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_InfoButtonStyles__WEBPACK_IMPORTED_MODULE_1__/* .InfoButtonContainer */ .Ec, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_LanguageSwitcher_LanguageSwitcherButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_InfoButtonStyles__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
      onClick: toggleCard,
      children: isOpen ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_InfoButtonStyles__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .JO, {
        src: _public_closeIcon_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        alt: ""
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_InfoButtonStyles__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .JO, {
        src: _public_infoIcon_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        alt: ""
      })
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_InfoButtonStyles__WEBPACK_IMPORTED_MODULE_1__/* .InfoCard */ .rJ, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_InfoButtonStyles__WEBPACK_IMPORTED_MODULE_1__/* .InfoList */ .Q4, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_InfoButtonStyles__WEBPACK_IMPORTED_MODULE_1__/* .List */ .aV, {
          children: t('listOne')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_InfoButtonStyles__WEBPACK_IMPORTED_MODULE_1__/* .List */ .aV, {
          children: t('listTwo')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_InfoButtonStyles__WEBPACK_IMPORTED_MODULE_1__/* .List */ .aV, {
          children: t('listThree')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_InfoButtonStyles__WEBPACK_IMPORTED_MODULE_1__/* .List */ .aV, {
          children: t('listFour')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_InfoButtonStyles__WEBPACK_IMPORTED_MODULE_1__/* .List */ .aV, {
          children: t('listFive')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_InfoButtonStyles__WEBPACK_IMPORTED_MODULE_1__/* .EmailButton */ ._i, {
        onClick: handleEmailButtonClick,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_InfoButtonStyles__WEBPACK_IMPORTED_MODULE_1__/* .Email */ .GT, {
          src: _public_EmailSend_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
          alt: "Email send"
        }), t('contact')]
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ec: () => (/* binding */ InfoButtonContainer),
/* harmony export */   GT: () => (/* binding */ Email),
/* harmony export */   JO: () => (/* binding */ Icon),
/* harmony export */   Q4: () => (/* binding */ InfoList),
/* harmony export */   _i: () => (/* binding */ EmailButton),
/* harmony export */   aV: () => (/* binding */ List),
/* harmony export */   rJ: () => (/* binding */ InfoCard),
/* harmony export */   zx: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export ContacWrapper */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const InfoButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "InfoButtonStyles__InfoButtonContainer",
  componentId: "sc-1128tbr-0"
})(["display:flex;position:relative;justify-content:space-between;align-items:center;z-index:9;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "InfoButtonStyles__Button",
  componentId: "sc-1128tbr-1"
})(["background-color:transparent;border:none;text-decoration:none;cursor:pointer;"]);
const InfoCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "InfoButtonStyles__InfoCard",
  componentId: "sc-1128tbr-2"
})(["position:absolute;display:flex;flex-direction:column;top:100%;left:0;background:linear-gradient(58deg,#09203f,#537895);color:azure;box-shadow:0px 4px 8px rgba(0,0,0,0.1);border-radius:5px;padding:15px;width:300px;@media (max-width:768px){width:260px;}"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
  displayName: "InfoButtonStyles__Icon",
  componentId: "sc-1128tbr-3"
})(["height:2.8rem;margin-top:-1rem;"]);
const InfoList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "InfoButtonStyles__InfoList",
  componentId: "sc-1128tbr-4"
})(["margin-left:-0.3rem;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "InfoButtonStyles__List",
  componentId: "sc-1128tbr-5"
})(["padding-bottom:0.3rem;"]);
const EmailButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "InfoButtonStyles__EmailButton",
  componentId: "sc-1128tbr-6"
})(["background:transparent;display:flex;align-items:center;flex-direction:row;flex-wrap:wrap;justify-content:center;border:none;outline:none !important;cursor:pointer;bottom:2rem;color:aliceblue;"]);
const Email = styled_components__WEBPACK_IMPORTED_MODULE_0___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
  displayName: "InfoButtonStyles__Email",
  componentId: "sc-1128tbr-7"
})(["z-index:3;width:1.5rem;height:1.5rem;margin-right:5px;"]);
const ContacWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "InfoButtonStyles__ContacWrapper",
  componentId: "sc-1128tbr-8"
})(["display:grid;grid-template-columns:repeat(5,2fr);max-width:25rem;align-content:center;padding-left:2rem;align-items:center;justify-items:center;"]);

/***/ }),

/***/ 9510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LanguageSwitchButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7987);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__]);
react_i18next__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function LanguageSwitchButton() {
  const {
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const {
    0: currentLanguage,
    1: setCurrentLanguage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    /*#__PURE__*/
    // <Wrapper>
    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(ToggleButton, {
      onClick: toggleLanguage,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FlagContainer, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(FlagIcon, {
          selected: currentLanguage === 'en',
          children: "\uD83C\uDDFA\uD83C\uDDF8"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(FlagIcon, {
          selected: currentLanguage === 'de',
          children: "\uD83C\uDDE9\uD83C\uDDEA"
        })]
      })
    }) // </Wrapper>

  );
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "LanguageSwitcherButton__Wrapper",
  componentId: "sc-1e3mjmz-0"
})(["z-index:10;"]);
const ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
  displayName: "LanguageSwitcherButton__ToggleButton",
  componentId: "sc-1e3mjmz-1"
})(["background-color:transparent;border:none;cursor:pointer;font-size:24px;position:relative;"]);
const FlagContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "LanguageSwitcherButton__FlagContainer",
  componentId: "sc-1e3mjmz-2"
})(["display:flex;position:absolute;top:-1.5rem;left:", ";transition:left 1s ease-in-out;"], ({
  selected
}) => selected ? '0' : '50%');
const FlagIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "LanguageSwitcherButton__FlagIcon",
  componentId: "sc-1e3mjmz-3"
})(["font-size:24px;opacity:", ";margin:0 5px;"], ({
  selected
}) => selected ? '1' : '0.5'); // import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import { useTranslation } from 'react-i18next';
// export default function LanguageSwitchButton({ onChangeLanguage }) {
//   const { i18n } = useTranslation();
//   const languages = [
//     { code: 'en', flag: '🇺🇸' },
//     { code: 'de', flag: '🇩🇪' },
//   ];
//   useEffect(() => {
//     // Stelle sicher, dass die Sprache nach dem ersten Rendern korrekt gesetzt wird
//     i18n.changeLanguage(i18n.language);
//   }, []);
//   return (
//     <Wrapper>
//       <SwitchButton
//         value={i18n.language}
//         onChange={(e) => onChangeLanguage(e.target.value)}
//       >
//         {languages.map((lang) => (
//           <SwitchOption key={lang.code} value={lang.code}>
//             {lang.flag}
//           </SwitchOption>
//         ))}
//       </SwitchButton>
//     </Wrapper>
//   );
// }
// const Wrapper = styled.div`
//   z-index: 10;
// `;
// const SwitchButton = styled.select`
//   background-color: transparent;
//   color: white;
//   border: none;
//   cursor: pointer;
// `;
// const SwitchOption = styled.option`
//   background-color: transparent;
// `;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3498:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__]);
([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({
  resources: {
    en: {
      translation: {
        start: 'Start',
        data: 'Data',
        listOne: 'To test the app, there is a test account where you only have to enter the word "test" in lower case as a username and password.',
        listTwo: 'Under "Insulin factor" and "Correction factor" the respective factors must first be created.',
        listThree: 'In the next step, under "Start", you can now start entering the current the current blood glucose value and the carbohydrates you want to consume. you would like to consume.',
        listFour: 'Then just click on "Confirm" and the amount of insulin to be injected is displayed. The calculation is done automatically taking into account the time of day and thus selects the appropriate factor.',
        listFive: 'In the "Data" area, you can display the data used and saved and also export it as a "PDF".',
        bloodsugar: 'Bloodsugar',
        bloodsugarlevel: 'Blood glucose level',
        currentbloodglucosevalue: ' Current blood glucose value',
        carbohydrates: 'Carbohydrates',
        howmanyKhd65g: 'how many Khd 65g',
        insulin: 'Insulin',
        factor: 'factor',
        whichinsulin1: 'Which insulin',
        whichinsulin2: 'is taken',
        chooseinsulin: 'Choose insulin',
        confirm: 'confirm',
        injectunits: 'Inject units',
        ofinsulin: 'of insulin',
        daytimefactor: 'Daytime factor',
        insulinfactor: 'Insulin factor',
        correction: 'Correction',
        saved: 'Saved',
        factormorning: 'Morning factor',
        factornoon: 'Lunch factor',
        factorevening: 'Evening factor',
        factorlate: 'Late factor',
        enter: 'enter',
        save: 'save',
        createinsulinfactor: 'Create insulin factor',
        createcorrectionfactor: 'Create correction factor',
        correctionfactor: 'Correction factor',
        correctionfactormorning: 'Correction factor morning',
        correctionfactornoon: 'Correction factor noon',
        correctionfactorevening: 'Correction factor evening',
        correctionfactorlate: 'Correction factor late',
        usedinsulin: 'Used insulin',
        injectedinsulin: 'Injected insulin',
        quantity: 'quantity',
        saveddatafrom: 'Saved data from',
        createdon: 'Created on',
        date: 'Date',
        export: 'Export as PDF',
        storedvalues: 'Stored values',
        contact: 'contact'
      }
    },
    de: {
      translation: {
        start: 'Start',
        data: 'Daten',
        listOne: 'Zum Testen der App gibt es einen Testaccount, bei dem man als Username und Passwort nur das Wort "test" kleingeschrieben eingeben muss.',
        listTwo: 'Unter "Insulin Faktor" und "Korrektur Faktor" müssen erst die jeweiligen Faktoren angelegt werden.',
        listThree: 'Im nächsten Schritt kann jetzt unter "Start" mit der Eingabe des aktuellen Blutzuckerwertes und der Kohlenhydrate, die man zu sich nehmen möchte, begonnen werden.',
        listFour: 'Im Anschluss klickt man nur noch auf "Bestätigen" und man bekommt die zu spritzende Insulin Menge angezeigt. Die Berechnung erfolgt automatisch unter Einbezug der Tageszeit und wählt so den entsprechenden Faktor.',
        listFive: 'Im Bereich "Daten" kann man sich die verwendeten und gespeicherten Daten anzeigen lassen und auch als "PDF" exportieren.',
        bloodsugar: 'Blutzucker',
        bloodsugarlevel: 'Blutzuckerwert',
        currentbloodglucosevalue: 'aktueller Blutzuckerwert',
        carbohydrates: 'Kohlenhydrate',
        howmanyKhd65g: 'wieviele Khd 65g',
        insulin: 'Insulin',
        factor: 'Faktor',
        whichinsulin1: 'Welches Insulin ',
        whichinsulin2: 'wird genommen',
        chooseinsulin: 'Insulin wählen',
        confirm: 'bestätigen',
        injectunits: 'Einheiten',
        ofinsulin: 'Insulin spritzen',
        daytimefactor: 'Tageszeit Faktor',
        insulinfactor: 'Insulin Faktor',
        correction: 'Korrektur',
        saved: 'Gespeicherter',
        factormorning: 'Faktor morgens',
        factornoon: 'Faktor mittags',
        factorevening: 'Faktor abends',
        factorlate: 'Faktor spät',
        enter: 'eingeben',
        save: 'speichern',
        createinsulinfactor: 'Insulinfaktor anlegen',
        createcorrectionfactor: 'Korrekturfaktor anlegen',
        correctionfactor: 'Korrekturfaktor',
        correctionfactormorning: 'Korrekturfaktor morgens',
        correctionfactornoon: 'Korrekturfaktor mittags',
        correctionfactorevening: 'Korrekturfaktor abends',
        correctionfactorlate: 'Korrekturfaktor spät',
        search: 'Suche',
        usedinsulin: 'Verwendetes Insulin',
        injectedinsulin: 'gespritzte Insulin',
        quantity: 'Menge',
        saveddatafrom: 'Gespeicherte Daten von',
        createdon: 'Erstellt am',
        date: 'Datum',
        export: 'Export als PDF',
        storedvalues: 'Gespeicherte Werte',
        contact: 'Kontakt'
      }
    }
  },
  lng: 'de',
  interpolation: {
    escapeValue: false
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__["default"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ LoginPage)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./components/Button/Button.js




function LoginButton({
  onClick,
  providerName,
  bgColor,
  icon
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledButton, {
    onClick: onClick,
    bgColor: bgColor,
    children: [/*#__PURE__*/jsx_runtime.jsx((image_default()), {
      src: icon,
      alt: `${providerName} icon`,
      width: "35px",
      height: "35px"
    }), /*#__PURE__*/jsx_runtime.jsx(Textstyling, {
      children: providerName
    })]
  });
}
const StyledButton = external_styled_components_default().button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1fp288r-0"
})(["all:unset;padding:0.2rem;display:flex;justify-content:center;align-items:center;gap:1rem;width:90%;height:3rem;background-color:", ";filter:drop-shadow(0 0 0.1em var(--drop-shadow));border-radius:0.5rem;color:#fff;font-size:1.5rem;margin-top:1.5rem;cursor:pointer;"], ({
  bgColor
}) => bgColor);
const Textstyling = external_styled_components_default().p.withConfig({
  displayName: "Button__Textstyling",
  componentId: "sc-1fp288r-1"
})(["padding-top:0.3rem;"]);
;// CONCATENATED MODULE: ./assets/github.svg
/* harmony default export */ const github = ({"src":"/_next/static/media/github.08d6a099.svg","height":36,"width":36,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./assets/googleLogoColor.svg
/* harmony default export */ const googleLogoColor = ({"src":"/_next/static/media/googleLogoColor.853401d6.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./assets/facebook.svg
/* harmony default export */ const facebook = ({"src":"/_next/static/media/facebook.b6fca2eb.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./components/Login/Login.js









function LoginPage() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(SingIn, {
      children: ["W\xE4hle deinen ", /*#__PURE__*/jsx_runtime.jsx("br", {}), " Login aus."]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(LoginButtons, {
      children: [/*#__PURE__*/jsx_runtime.jsx(LoginButton, {
        icon: googleLogoColor,
        providerName: "Google",
        bgColor: "#AA5437",
        onClick: () => (0,react_.signIn)('google')
      }), /*#__PURE__*/jsx_runtime.jsx(LoginButton, {
        icon: github,
        providerName: "GitHub",
        bgColor: "#24292e",
        onClick: () => (0,react_.signIn)('github')
      })]
    })]
  });
}
const SingIn = external_styled_components_default().p.withConfig({
  displayName: "Login__SingIn",
  componentId: "sc-15gexb5-0"
})(["justify-content:center;font-family:Cambria,Cochin,Georgia,Times,'Times New Roman',serif;font-size:2rem;color:aquamarine;font-weight:bold;"]);
const LoginButtons = external_styled_components_default().section.withConfig({
  displayName: "Login__LoginButtons",
  componentId: "sc-15gexb5-1"
})(["margin-top:4rem;"]);

/***/ }),

/***/ 5989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_savedDayFactorService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(999);
/* harmony import */ var _services_correctionFactorsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4621);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5856);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_HomeInput_HomeInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5013);
/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5444);
/* harmony import */ var _components_DeleteUserData_DeleteUserData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2717);
/* harmony import */ var _components_InfoButton_InfoButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1731);
/* harmony import */ var _components_LanguageSwitcher_LanguageSwitcherButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9510);
/* harmony import */ var _components_LanguageSwitcher_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3498);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9761);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6444);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_capacitor_core__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5893);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_HomeInput_HomeInput__WEBPACK_IMPORTED_MODULE_6__, _components_InfoButton_InfoButton__WEBPACK_IMPORTED_MODULE_9__, _components_LanguageSwitcher_LanguageSwitcherButton__WEBPACK_IMPORTED_MODULE_10__, _components_LanguageSwitcher_i18n__WEBPACK_IMPORTED_MODULE_11__, _ionic_react__WEBPACK_IMPORTED_MODULE_13__]);
([_components_HomeInput_HomeInput__WEBPACK_IMPORTED_MODULE_6__, _components_InfoButton_InfoButton__WEBPACK_IMPORTED_MODULE_9__, _components_LanguageSwitcher_LanguageSwitcherButton__WEBPACK_IMPORTED_MODULE_10__, _components_LanguageSwitcher_i18n__WEBPACK_IMPORTED_MODULE_11__, _ionic_react__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















async function getServerSideProps({
  req
}) {
  const factors = await (0,_services_savedDayFactorService__WEBPACK_IMPORTED_MODULE_1__/* .getAllDayFactors */ .U)();
  const correctionfactors = await (0,_services_correctionFactorsService__WEBPACK_IMPORTED_MODULE_2__/* .getAllCorrectionFactors */ .A)();
  const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_4__.getToken)({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    raw: true
  });
  const response = await fetch(`http://${req.headers.host}/api/setInsulinDatas/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return {
    props: {
      factors: factors,
      correctionfactors: correctionfactors
    }
  };
}
function Home({
  t,
  factors,
  correctionfactors
}) {
  const {
    data: session
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
  const {
    0: currentLanguage,
    1: setCurrentLanguage
  } = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)('en');

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
    setCurrentLanguage(newLanguage);
    _components_LanguageSwitcher_i18n__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z.changeLanguage(newLanguage);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(Wrapper, {
      children: [_capacitor_core__WEBPACK_IMPORTED_MODULE_14__.Capacitor.isNativePlatform() && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ionic_react__WEBPACK_IMPORTED_MODULE_13__/* .IonHeader */ .Gu, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ionic_react__WEBPACK_IMPORTED_MODULE_13__/* .IonToolbar */ .sr, {
          color: "primary",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ionic_react__WEBPACK_IMPORTED_MODULE_13__/* .IonTitle */ .wd, {
            children: "Simons Capacitor App"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_InfoButton_InfoButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(Sign, {
        children: session ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(Login, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_DeleteUserData_DeleteUserData__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), "Hallo ", '  ', session.user.name]
          }), ' ', '  ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(Atags, {
            href: "#",
            onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_5__.GoSignOut, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_HomeInput_HomeInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            session: session,
            factors: factors,
            correctionfactors: correctionfactors
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Login_Login__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(TestLogin, {
            href: "#",
            onClick: () => (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)('credentials'),
            children: "Test Anmelden"
          })]
        })
      })]
    })
  });
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "pages__Wrapper",
  componentId: "sc-1vfkcf4-0"
})(["display:grid;grid-template-rows:min-content auto 48px;height:inherit;justify-content:center;"]);
const Login = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "pages__Login",
  componentId: "sc-1vfkcf4-1"
})(["display:flex;justify-content:flex-start;align-items:baseline;color:orange;text-decoration:none;font-family:'Trebuchet MS','Lucida Sans Unicode','Lucida Grande','Lucida Sans',Arial,sans-serif;"]);
const Sign = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "pages__Sign",
  componentId: "sc-1vfkcf4-2"
})(["color:white;text-decoration:none;justify-content:center;text-align:center;font-size:1rem;z-index:2;"]);
const Atags = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "pages__Atags",
  componentId: "sc-1vfkcf4-3"
})(["display:flex;color:sandybrown;justify-content:end;text-align:center;margin:-1.3rem 0.2rem 0.3rem 0.1rem;padding:0.3rem 0.1rem 0rem 0.3rem;font-size:1rem;"]);
const TestLogin = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "pages__TestLogin",
  componentId: "sc-1vfkcf4-4"
})(["font-size:1.3rem;color:green;justify-content:space-evenly;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/EmailSend.495e11a8.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAwUlEQVR42iWJvQ4BURSEb6UTWkoaBRsNpaBBw0OIF/EslARbIH6yNiLZ7VBIbGlVJLzAmetMTPJlJvMZJvFCQdkn3mIJNz/DpB8opGJ8UrHY5BOhEnDr96UzmQh+JhKrPc7eMVPmukeKpTO5K2z+IhPtQe4qVluRvn5TblMMYYuheE6AaSnAkDiBLPQ70Jmqj7PilU/oVXw5kvJJulVfPDpT28Cpr3FrLrFprLAjurf86AzTcuG0XVw6c1jC3XL/8gf4HZ8JCOoo+AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 6506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/closeIcon.96d55cc0.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 3740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/infoIcon.bfc87572.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 1725:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var private_next_pages_document_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9911);
/* harmony import */ var private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5460);
/* harmony import */ var private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5989);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_js__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_index_js__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6444:
/***/ ((module) => {

module.exports = require("@capacitor/core");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 614:
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 5856:
/***/ ((module) => {

module.exports = require("react-icons/go");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 7987:
/***/ ((module) => {

module.exports = import("react-i18next");;

/***/ }),

/***/ 1395:
/***/ ((module) => {

module.exports = import("tslib");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [792,790,621,13,999], () => (__webpack_exec__(1725)));
module.exports = __webpack_exports__;

})();