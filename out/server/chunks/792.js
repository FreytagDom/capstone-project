exports.id = 792;
exports.ids = [792];
exports.modules = {

/***/ 6085:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "addBasePath", ({
  enumerable: true,
  get: function () {
    return addBasePath;
  }
}));

const _addpathprefix = __webpack_require__(1751);

const _normalizetrailingslash = __webpack_require__(6962);

const basePath =  false || "";

function addBasePath(path, required) {
  return (0, _normalizetrailingslash.normalizePathTrailingSlash)( false ? 0 : (0, _addpathprefix.addPathPrefix)(path, basePath));
}

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 4318:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "addLocale", ({
  enumerable: true,
  get: function () {
    return addLocale;
  }
}));

const _normalizetrailingslash = __webpack_require__(6962);

const addLocale = function (path) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (false) {}

  return path;
};

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 2038:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
0 && (0);

function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}

_export(exports, {
  PrefetchKind: function () {
    return PrefetchKind;
  },
  ACTION_REFRESH: function () {
    return ACTION_REFRESH;
  },
  ACTION_NAVIGATE: function () {
    return ACTION_NAVIGATE;
  },
  ACTION_RESTORE: function () {
    return ACTION_RESTORE;
  },
  ACTION_SERVER_PATCH: function () {
    return ACTION_SERVER_PATCH;
  },
  ACTION_PREFETCH: function () {
    return ACTION_PREFETCH;
  },
  ACTION_FAST_REFRESH: function () {
    return ACTION_FAST_REFRESH;
  },
  ACTION_SERVER_ACTION: function () {
    return ACTION_SERVER_ACTION;
  }
});

const ACTION_REFRESH = "refresh";
const ACTION_NAVIGATE = "navigate";
const ACTION_RESTORE = "restore";
const ACTION_SERVER_PATCH = "server-patch";
const ACTION_PREFETCH = "prefetch";
const ACTION_FAST_REFRESH = "fast-refresh";
const ACTION_SERVER_ACTION = "server-action";
var PrefetchKind;

(function (PrefetchKind) {
  PrefetchKind["AUTO"] = "auto";
  PrefetchKind["FULL"] = "full";
  PrefetchKind["TEMPORARY"] = "temporary";
})(PrefetchKind || (PrefetchKind = {}));

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 8693:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
  enumerable: true,
  get: function () {
    return getDomainLocale;
  }
}));

const _normalizetrailingslash = __webpack_require__(6962);

const basePath = (/* unused pure expression or super */ null && ( false || ""));

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 2590:
/***/ ((module, exports, __webpack_require__) => {

"use client";
"use strict";

const _excluded = ["src", "srcSet", "sizes", "height", "width", "decoding", "className", "style", "fetchPriority", "placeholder", "loading", "unoptimized", "fill", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Image", ({
  enumerable: true,
  get: function () {
    return Image;
  }
}));

const _interop_require_default = __webpack_require__(167);

const _interop_require_wildcard = __webpack_require__(8760);

const _react = /*#__PURE__*/_interop_require_wildcard._(__webpack_require__(6689));

const _reactdom = __webpack_require__(6405);

const _head = /*#__PURE__*/_interop_require_default._(__webpack_require__(1597));

const _getimgprops = __webpack_require__(5132);

const _imageconfig = __webpack_require__(5843);

const _imageconfigcontext = __webpack_require__(744);

const _warnonce = __webpack_require__(618);

const _routercontext = __webpack_require__(4964);

const _imageloader = /*#__PURE__*/_interop_require_default._(__webpack_require__(1586)); // This is replaced by webpack define plugin


const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true};

if (true) {
  globalThis.__NEXT_IMAGE_IMPORTED = true;
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
  const src = img == null ? void 0 : img.src;

  if (!img || img["data-loaded-src"] === src) {
    return;
  }

  img["data-loaded-src"] = src;
  const p = "decode" in img ? img.decode() : Promise.resolve();
  p.catch(() => {}).then(() => {
    if (!img.parentElement || !img.isConnected) {
      // Exit early in case of race condition:
      // - onload() is called
      // - decode() is called but incomplete
      // - unmount is called
      // - decode() completes
      return;
    }

    if (placeholder !== "empty") {
      setBlurComplete(true);
    }

    if (onLoadRef == null ? void 0 : onLoadRef.current) {
      // Since we don't have the SyntheticEvent here,
      // we must create one with the same shape.
      // See https://reactjs.org/docs/events.html
      const event = new Event("load");
      Object.defineProperty(event, "target", {
        writable: false,
        value: img
      });
      let prevented = false;
      let stopped = false;
      onLoadRef.current(_objectSpread(_objectSpread({}, event), {}, {
        nativeEvent: event,
        currentTarget: img,
        target: img,
        isDefaultPrevented: () => prevented,
        isPropagationStopped: () => stopped,
        persist: () => {},
        preventDefault: () => {
          prevented = true;
          event.preventDefault();
        },
        stopPropagation: () => {
          stopped = true;
          event.stopPropagation();
        }
      }));
    }

    if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
      onLoadingCompleteRef.current(img);
    }

    if (false) {}
  });
}

function getDynamicProps(fetchPriority) {
  const [majorStr, minorStr] = _react.version.split(".");

  const major = parseInt(majorStr, 10);
  const minor = parseInt(minorStr, 10);

  if (major > 18 || major === 18 && minor >= 3) {
    // In React 18.3.0 or newer, we must use camelCase
    // prop to avoid "Warning: Invalid DOM property".
    // See https://github.com/facebook/react/pull/25927
    return {
      fetchPriority
    };
  } // In React 18.2.0 or older, we must use lowercase prop
  // to avoid "Warning: Invalid DOM property".


  return {
    fetchpriority: fetchPriority
  };
}

const ImageElement = /*#__PURE__*/(0, _react.forwardRef)((param, forwardedRef) => {
  let {
    src,
    srcSet,
    sizes,
    height,
    width,
    decoding,
    className,
    style,
    fetchPriority,
    placeholder,
    loading,
    unoptimized,
    fill,
    onLoadRef,
    onLoadingCompleteRef,
    setBlurComplete,
    setShowAltText,
    onLoad,
    onError
  } = param,
      rest = _objectWithoutProperties(param, _excluded);

  return /*#__PURE__*/_react.default.createElement("img", _objectSpread(_objectSpread(_objectSpread({}, rest), getDynamicProps(fetchPriority)), {}, {
    // It's intended to keep `loading` before `src` because React updates
    // props in order which causes Safari/Firefox to not lazy load properly.
    // See https://github.com/facebook/react/issues/25883
    loading: loading,
    width: width,
    height: height,
    decoding: decoding,
    "data-nimg": fill ? "fill" : "1",
    className: className,
    style: style,
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    sizes: sizes,
    srcSet: srcSet,
    src: src,
    ref: (0, _react.useCallback)(img => {
      if (forwardedRef) {
        if (typeof forwardedRef === "function") forwardedRef(img);else if (typeof forwardedRef === "object") {
          // @ts-ignore - .current is read only it's usually assigned by react internally
          forwardedRef.current = img;
        }
      }

      if (!img) {
        return;
      }

      if (onError) {
        // If the image has an error before react hydrates, then the error is lost.
        // The workaround is to wait until the image is mounted which is after hydration,
        // then we set the src again to trigger the error handler (if there was an error).
        // eslint-disable-next-line no-self-assign
        img.src = img.src;
      }

      if (false) {}

      if (img.complete) {
        handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
      }
    }, [src, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, onError, unoptimized, forwardedRef]),
    onLoad: event => {
      const img = event.currentTarget;
      handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
    },
    onError: event => {
      // if the real image fails to load, this will ensure "alt" is visible
      setShowAltText(true);

      if (placeholder !== "empty") {
        // If the real image fails to load, this will still remove the placeholder.
        setBlurComplete(true);
      }

      if (onError) {
        onError(event);
      }
    }
  }));
});

function ImagePreload(param) {
  let {
    isAppRouter,
    imgAttributes
  } = param;

  const opts = _objectSpread({
    as: "image",
    imageSrcSet: imgAttributes.srcSet,
    imageSizes: imgAttributes.sizes,
    crossOrigin: imgAttributes.crossOrigin,
    referrerPolicy: imgAttributes.referrerPolicy
  }, getDynamicProps(imgAttributes.fetchPriority));

  if (isAppRouter && _reactdom.preload) {
    // See https://github.com/facebook/react/pull/26940
    (0, _reactdom.preload)(imgAttributes.src, // @ts-expect-error TODO: upgrade to `@types/react-dom@18.3.x`
    opts);
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", _objectSpread({
    key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    // Note how we omit the `href` attribute, as it would only be relevant
    // for browsers that do not support `imagesrcset`, and in those cases
    // it would cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    href: imgAttributes.srcSet ? undefined : imgAttributes.src
  }, opts)));
}

const Image = /*#__PURE__*/(0, _react.forwardRef)((props, forwardedRef) => {
  const pagesRouter = (0, _react.useContext)(_routercontext.RouterContext); // We're in the app directory if there is no pages router.

  const isAppRouter = !pagesRouter;
  const configContext = (0, _react.useContext)(_imageconfigcontext.ImageConfigContext);
  const config = (0, _react.useMemo)(() => {
    const c = configEnv || configContext || _imageconfig.imageConfigDefault;
    const allSizes = [...c.deviceSizes, ...c.imageSizes].sort((a, b) => a - b);
    const deviceSizes = c.deviceSizes.sort((a, b) => a - b);
    return _objectSpread(_objectSpread({}, c), {}, {
      allSizes,
      deviceSizes
    });
  }, [configContext]);
  const {
    onLoad,
    onLoadingComplete
  } = props;
  const onLoadRef = (0, _react.useRef)(onLoad);
  (0, _react.useEffect)(() => {
    onLoadRef.current = onLoad;
  }, [onLoad]);
  const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
  (0, _react.useEffect)(() => {
    onLoadingCompleteRef.current = onLoadingComplete;
  }, [onLoadingComplete]);
  const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
  const [showAltText, setShowAltText] = (0, _react.useState)(false);
  const {
    props: imgAttributes,
    meta: imgMeta
  } = (0, _getimgprops.getImgProps)(props, {
    defaultLoader: _imageloader.default,
    imgConf: config,
    blurComplete,
    showAltText
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(ImageElement, _objectSpread(_objectSpread({}, imgAttributes), {}, {
    unoptimized: imgMeta.unoptimized,
    placeholder: imgMeta.placeholder,
    fill: imgMeta.fill,
    onLoadRef: onLoadRef,
    onLoadingCompleteRef: onLoadingCompleteRef,
    setBlurComplete: setBlurComplete,
    setShowAltText: setShowAltText,
    ref: forwardedRef
  })), imgMeta.priority ? /*#__PURE__*/_react.default.createElement(ImagePreload, {
    isAppRouter: isAppRouter,
    imgAttributes: imgAttributes
  }) : null);
});

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 6512:
/***/ ((module, exports, __webpack_require__) => {

"use client";
"use strict";

const _excluded = ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _default;
  }
}));

const _interop_require_default = __webpack_require__(167);

const _react = /*#__PURE__*/_interop_require_default._(__webpack_require__(6689));

const _resolvehref = __webpack_require__(7782);

const _islocalurl = __webpack_require__(1109);

const _formaturl = __webpack_require__(3938);

const _utils = __webpack_require__(9232);

const _addlocale = __webpack_require__(4318);

const _routercontext = __webpack_require__(4964);

const _approutercontext = __webpack_require__(3280);

const _useintersection = __webpack_require__(6675);

const _getdomainlocale = __webpack_require__(8693);

const _addbasepath = __webpack_require__(6085);

const _routerreducertypes = __webpack_require__(2038);

const prefetched = new Set();

function prefetch(router, href, as, options, appOptions, isAppRouter) {
  if (true) {
    return;
  } // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.


  if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
    return;
  } // We should only dedupe requests when experimental.optimisticClientCache is
  // disabled.


  if (!options.bypassPrefetchedCheck) {
    const locale = // Let the link's locale prop override the default router locale.
    typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
    const prefetchedKey = href + "%" + as + "%" + locale; // If we've already fetched the key, then don't prefetch it again!

    if (prefetched.has(prefetchedKey)) {
      return;
    } // Mark this URL as prefetched.


    prefetched.add(prefetchedKey);
  }

  const prefetchPromise = isAppRouter ? router.prefetch(href, appOptions) : router.prefetch(href, as, options); // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  Promise.resolve(prefetchPromise).catch(err => {
    if (false) {}
  });
}

function isModifiedEvent(event) {
  const eventTarget = event.currentTarget;
  const target = eventTarget.getAttribute("target");
  return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
  const {
    nodeName
  } = e.currentTarget; // anchors inside an svg have a lowercase nodeName

  const isAnchorNodeName = nodeName.toUpperCase() === "A";

  if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
  !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault();

  const navigate = () => {
    // If the router is an NextRouter instance it will have `beforePopState`
    const routerScroll = scroll != null ? scroll : true;

    if ("beforePopState" in router) {
      router[replace ? "replace" : "push"](href, as, {
        shallow,
        locale,
        scroll: routerScroll
      });
    } else {
      router[replace ? "replace" : "push"](as || href, {
        forceOptimisticNavigation: !prefetchEnabled,
        scroll: routerScroll
      });
    }
  };

  if (isAppRouter) {
    _react.default.startTransition(navigate);
  } else {
    navigate();
  }
}

function formatStringOrUrl(urlObjOrString) {
  if (typeof urlObjOrString === "string") {
    return urlObjOrString;
  }

  return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */


const Link = /*#__PURE__*/_react.default.forwardRef(function LinkComponent(props, forwardedRef) {
  let children;

  const {
    href: hrefProp,
    as: asProp,
    children: childrenProp,
    prefetch: prefetchProp = null,
    passHref,
    replace,
    shallow,
    scroll,
    locale,
    onClick,
    onMouseEnter: onMouseEnterProp,
    onTouchStart: onTouchStartProp,
    // @ts-expect-error this is inlined as a literal boolean not a string
    legacyBehavior = true === false
  } = props,
        restProps = _objectWithoutProperties(props, _excluded);

  children = childrenProp;

  if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  }

  const pagesRouter = _react.default.useContext(_routercontext.RouterContext);

  const appRouter = _react.default.useContext(_approutercontext.AppRouterContext);

  const router = pagesRouter != null ? pagesRouter : appRouter; // We're in the app directory if there is no pages router.

  const isAppRouter = !pagesRouter;
  const prefetchEnabled = prefetchProp !== false;
  /**
   * The possible states for prefetch are:
   * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
   * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
   * - false: we will not prefetch if in the viewport at all
   */

  const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;

  if (false) { var createPropError; }

  if (false) {}

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    if (!pagesRouter) {
      const resolvedHref = formatStringOrUrl(hrefProp);
      return {
        href: resolvedHref,
        as: asProp ? formatStringOrUrl(asProp) : resolvedHref
      };
    }

    const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
    return {
      href: resolvedHref,
      as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
    };
  }, [pagesRouter, hrefProp, asProp]);

  const previousHref = _react.default.useRef(href);

  const previousAs = _react.default.useRef(as); // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (legacyBehavior) {
    if (false) {} else {
      child = _react.default.Children.only(children);
    }
  } else {
    if (false) {}
  }

  const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
  const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
    rootMargin: "200px"
  });

  const setRef = _react.default.useCallback(el => {
    // Before the link getting observed, check if visible state need to be reset
    if (previousAs.current !== as || previousHref.current !== href) {
      resetVisible();
      previousAs.current = as;
      previousHref.current = href;
    }

    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === "function") childRef(el);else if (typeof childRef === "object") {
        childRef.current = el;
      }
    }
  }, [as, childRef, href, resetVisible, setIntersectionRef]); // Prefetch the URL if we haven't already and it's visible.


  _react.default.useEffect(() => {
    // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
    if (false) {}

    if (!router) {
      return;
    } // If we don't need to prefetch the URL, don't do prefetch.


    if (!isVisible || !prefetchEnabled) {
      return;
    } // Prefetch the URL.


    prefetch(router, href, as, {
      locale
    }, {
      kind: appPrefetchKind
    }, isAppRouter);
  }, [as, href, isVisible, locale, prefetchEnabled, pagesRouter == null ? void 0 : pagesRouter.locale, router, isAppRouter, appPrefetchKind]);

  const childProps = {
    ref: setRef,

    onClick(e) {
      if (false) {}

      if (!legacyBehavior && typeof onClick === "function") {
        onClick(e);
      }

      if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
        child.props.onClick(e);
      }

      if (!router) {
        return;
      }

      if (e.defaultPrevented) {
        return;
      }

      linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
    },

    onMouseEnter(e) {
      if (!legacyBehavior && typeof onMouseEnterProp === "function") {
        onMouseEnterProp(e);
      }

      if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
        child.props.onMouseEnter(e);
      }

      if (!router) {
        return;
      }

      if ((!prefetchEnabled || false) && isAppRouter) {
        return;
      }

      prefetch(router, href, as, {
        locale,
        priority: true,
        // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
        bypassPrefetchedCheck: true
      }, {
        kind: appPrefetchKind
      }, isAppRouter);
    },

    onTouchStart(e) {
      if (!legacyBehavior && typeof onTouchStartProp === "function") {
        onTouchStartProp(e);
      }

      if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
        child.props.onTouchStart(e);
      }

      if (!router) {
        return;
      }

      if (!prefetchEnabled && isAppRouter) {
        return;
      }

      prefetch(router, href, as, {
        locale,
        priority: true,
        // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
        bypassPrefetchedCheck: true
      }, {
        kind: appPrefetchKind
      }, isAppRouter);
    }

  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user.
  // If the url is absolute, we can bypass the logic to prepend the domain and locale.

  if ((0, _utils.isAbsoluteUrl)(as)) {
    childProps.href = as;
  } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
    const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
    childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
  }

  return legacyBehavior ? /*#__PURE__*/_react.default.cloneElement(child, childProps) : /*#__PURE__*/_react.default.createElement("a", _objectSpread(_objectSpread({}, restProps), childProps), children);
});

const _default = Link;

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 6962:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "normalizePathTrailingSlash", ({
  enumerable: true,
  get: function () {
    return normalizePathTrailingSlash;
  }
}));

const _removetrailingslash = __webpack_require__(3297);

const _parsepath = __webpack_require__(8854);

const normalizePathTrailingSlash = path => {
  if (!path.startsWith("/") || undefined) {
    return path;
  }

  const {
    pathname,
    query,
    hash
  } = (0, _parsepath.parsePath)(path);

  if (false) {}

  return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 6682:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
0 && (0);

function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}

_export(exports, {
  requestIdleCallback: function () {
    return requestIdleCallback;
  },
  cancelIdleCallback: function () {
    return cancelIdleCallback;
  }
});

const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return self.setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 6675:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "useIntersection", ({
  enumerable: true,
  get: function () {
    return useIntersection;
  }
}));

const _react = __webpack_require__(6689);

const _requestidlecallback = __webpack_require__(6682);

const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];

function createObserver(options) {
  const id = {
    root: options.root || null,
    margin: options.rootMargin || ""
  };
  const existing = idList.find(obj => obj.root === id.root && obj.margin === id.margin);
  let instance;

  if (existing) {
    instance = observers.get(existing);

    if (instance) {
      return instance;
    }
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  instance = {
    id,
    observer,
    elements
  };
  idList.push(id);
  observers.set(id, instance);
  return instance;
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
      const index = idList.findIndex(obj => obj.root === id.root && obj.margin === id.margin);

      if (index > -1) {
        idList.splice(index, 1);
      }
    }
  };
}

function useIntersection(param) {
  let {
    rootRef,
    rootMargin,
    disabled
  } = param;
  const isDisabled = disabled || !hasIntersectionObserver;
  const [visible, setVisible] = (0, _react.useState)(false);
  const elementRef = (0, _react.useRef)(null);
  const setElement = (0, _react.useCallback)(element => {
    elementRef.current = element;
  }, []);
  (0, _react.useEffect)(() => {
    if (hasIntersectionObserver) {
      if (isDisabled || visible) return;
      const element = elementRef.current;

      if (element && element.tagName) {
        const unobserve = observe(element, isVisible => isVisible && setVisible(isVisible), {
          root: rootRef == null ? void 0 : rootRef.current,
          rootMargin
        });
        return unobserve;
      }
    } else {
      if (!visible) {
        const idleCallback = (0, _requestidlecallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestidlecallback.cancelIdleCallback)(idleCallback);
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isDisabled, rootMargin, rootRef, visible, elementRef.current]);
  const resetVisible = (0, _react.useCallback)(() => {
    setVisible(false);
  }, []);
  return [setElement, visible, resetVisible];
}

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 1492:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const _excluded = ["strategy", "src", "children", "dangerouslySetInnerHTML"],
      _excluded2 = ["strategy"],
      _excluded3 = ["crossOrigin", "nonce"],
      _excluded4 = ["strategy", "children", "dangerouslySetInnerHTML", "src"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
0 && (0);

function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}

_export(exports, {
  Head: function () {
    return Head;
  },
  NextScript: function () {
    return NextScript;
  },
  Html: function () {
    return Html;
  },
  Main: function () {
    return Main;
  },

  /**
  * `Document` component handles the initial `document` markup and renders only on the server side.
  * Commonly used for implementing server side rendering for `css-in-js` libraries.
  */
  default: function () {
    return Document;
  }
});

const _react = /*#__PURE__*/_interop_require_default(__webpack_require__(6689));

const _constants = __webpack_require__(6724);

const _getpagefiles = __webpack_require__(4140);

const _htmlescape = __webpack_require__(9716);

const _iserror = /*#__PURE__*/_interop_require_default(__webpack_require__(676));

const _htmlcontext = __webpack_require__(8743);

function _interop_require_default(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/** Set of pages that have triggered a large data warning on production mode. */


const largePageDataWarnings = new Set();

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getpagefiles.getPageFiles)(buildManifest, "/_app");
  const pageFiles =  true && inAmpMode ? [] : (0, _getpagefiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    assetQueryString,
    disableOptimizedLoading,
    crossOrigin
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith(".js") && !polyfill.endsWith(".module.js")).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || crossOrigin,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${assetQueryString}`
  }));
}

function hasComponentProps(child) {
  return !!child && !!child.props;
}

function AmpStyles({
  styles
}) {
  if (!styles) return null; // try to parse styles from fragment for backwards compat

  const curStyles = Array.isArray(styles) ? styles : [];

  if ( // @ts-ignore Property 'props' does not exist on type ReactElement
  styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
  Array.isArray(styles.props.children)) {
    const hasStyles = el => {
      var _el_props, _el_props_dangerouslySetInnerHTML;

      return el == null ? void 0 : (_el_props = el.props) == null ? void 0 : (_el_props_dangerouslySetInnerHTML = _el_props.dangerouslySetInnerHTML) == null ? void 0 : _el_props_dangerouslySetInnerHTML.__html;
    }; // @ts-ignore Property 'props' does not exist on type ReactElement


    styles.props.children.forEach(child => {
      if (Array.isArray(child)) {
        child.forEach(el => hasStyles(el) && curStyles.push(el));
      } else if (hasStyles(child)) {
        curStyles.push(child);
      }
    });
  }
  /* Add custom styles before AMP styles to prevent accidental overrides */


  return /*#__PURE__*/_react.default.createElement("style", {
    "amp-custom": "",
    dangerouslySetInnerHTML: {
      __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join("").replace(/\/\*# sourceMappingURL=.*\*\//g, "").replace(/\/\*@ sourceURL=.*?\*\//g, "")
    }
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    assetQueryString,
    disableOptimizedLoading,
    crossOrigin
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith(".js") || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${assetQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || crossOrigin
    });
  });
}

function getScripts(context, props, files) {
  var _buildManifest_lowPriorityFiles;

  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    assetQueryString,
    disableOptimizedLoading,
    crossOrigin
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith(".js"));
  const lowPriorityScripts = (_buildManifest_lowPriorityFiles = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest_lowPriorityFiles.filter(file => file.endsWith(".js"));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${assetQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || crossOrigin
    });
  });
}

function getPreNextWorkerScripts(context, props) {
  const {
    assetPrefix,
    scriptLoader,
    crossOrigin,
    nextScriptWorkers
  } = context; // disable `nextScriptWorkers` in edge runtime

  if (!nextScriptWorkers || "nodejs" === "edge") return null;

  try {
    let {
      partytownSnippet
    } = require("@builder.io/partytown/integration");

    const children = Array.isArray(props.children) ? props.children : [props.children]; // Check to see if the user has defined their own Partytown configuration

    const userDefinedConfig = children.find(child => {
      var _child_props, _child_props_dangerouslySetInnerHTML;

      return hasComponentProps(child) && (child == null ? void 0 : (_child_props = child.props) == null ? void 0 : (_child_props_dangerouslySetInnerHTML = _child_props.dangerouslySetInnerHTML) == null ? void 0 : _child_props_dangerouslySetInnerHTML.__html.length) && "data-partytown-config" in child.props;
    });
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !userDefinedConfig && /*#__PURE__*/_react.default.createElement("script", {
      "data-partytown-config": "",
      dangerouslySetInnerHTML: {
        __html: `
            partytown = {
              lib: "${assetPrefix}/_next/static/~partytown/"
            };
          `
      }
    }), /*#__PURE__*/_react.default.createElement("script", {
      "data-partytown": "",
      dangerouslySetInnerHTML: {
        __html: partytownSnippet()
      }
    }), (scriptLoader.worker || []).map((file, index) => {
      const {
        strategy,
        src,
        children: scriptChildren,
        dangerouslySetInnerHTML
      } = file,
            scriptProps = _objectWithoutProperties(file, _excluded);

      let srcProps = {};

      if (src) {
        // Use external src if provided
        srcProps.src = src;
      } else if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
        // Embed inline script if provided with dangerouslySetInnerHTML
        srcProps.dangerouslySetInnerHTML = {
          __html: dangerouslySetInnerHTML.__html
        };
      } else if (scriptChildren) {
        // Embed inline script if provided with children
        srcProps.dangerouslySetInnerHTML = {
          __html: typeof scriptChildren === "string" ? scriptChildren : Array.isArray(scriptChildren) ? scriptChildren.join("") : ""
        };
      } else {
        throw new Error("Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script");
      }

      return /*#__PURE__*/_react.default.createElement("script", _objectSpread(_objectSpread(_objectSpread({}, srcProps), scriptProps), {}, {
        type: "text/partytown",
        key: src || index,
        nonce: props.nonce,
        "data-nscript": "worker",
        crossOrigin: props.crossOrigin || crossOrigin
      }));
    }));
  } catch (err) {
    if ((0, _iserror.default)(err) && err.code !== "MODULE_NOT_FOUND") {
      console.warn(`Warning: ${err.message}`);
    }

    return null;
  }
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading,
    crossOrigin
  } = context;
  const webWorkerScripts = getPreNextWorkerScripts(context, props);
  const beforeInteractiveScripts = (scriptLoader.beforeInteractive || []).filter(script => script.src).map((file, index) => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, _excluded2);

    return /*#__PURE__*/_react.default.createElement("script", _objectSpread(_objectSpread({}, scriptProps), {}, {
      key: scriptProps.src || index,
      defer: scriptProps.defer ?? !disableOptimizedLoading,
      nonce: props.nonce,
      "data-nscript": "beforeInteractive",
      crossOrigin: props.crossOrigin || crossOrigin
    }));
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, webWorkerScripts, beforeInteractiveScripts);
}

function getHeadHTMLProps(props) {
  const {
    crossOrigin,
    nonce
  } = props,
        restProps = _objectWithoutProperties(props, _excluded3); // This assignment is necessary for additional type checking to avoid unsupported attributes in <head>


  const headProps = restProps;
  return headProps;
}

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes("?") ? "&" : "?"}amp=1`;
}

function getNextFontLinkTags(nextFontManifest, dangerousAsPath, assetPrefix = "") {
  if (!nextFontManifest) {
    return {
      preconnect: null,
      preload: null
    };
  }

  const appFontsEntry = nextFontManifest.pages["/_app"];
  const pageFontsEntry = nextFontManifest.pages[dangerousAsPath];
  const preloadedFontFiles = [...(appFontsEntry ?? []), ...(pageFontsEntry ?? [])]; // If no font files should preload but there's an entry for the path, add a preconnect tag.

  const preconnectToSelf = !!(preloadedFontFiles.length === 0 && (appFontsEntry || pageFontsEntry));
  return {
    preconnect: preconnectToSelf ? /*#__PURE__*/_react.default.createElement("link", {
      "data-next-font": nextFontManifest.pagesUsingSizeAdjust ? "size-adjust" : "",
      rel: "preconnect",
      href: "/",
      crossOrigin: "anonymous"
    }) : null,
    preload: preloadedFontFiles ? preloadedFontFiles.map(fontFile => {
      const ext = /\.(woff|woff2|eot|ttf|otf)$/.exec(fontFile)[1];
      return /*#__PURE__*/_react.default.createElement("link", {
        key: fontFile,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(fontFile)}`,
        as: "font",
        type: `font/${ext}`,
        crossOrigin: "anonymous",
        "data-next-font": fontFile.includes("-s") ? "size-adjust" : ""
      });
    }) : null
  };
}

class Head extends _react.default.Component {
  getCssLinks(files) {
    const {
      assetPrefix,
      assetQueryString,
      dynamicImports,
      crossOrigin,
      optimizeCss,
      optimizeFonts
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith(".css"));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith(".css"))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (!optimizeCss) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${assetQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || crossOrigin
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${assetQueryString}`,
        crossOrigin: this.props.crossOrigin || crossOrigin,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? "" : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ""
      }));
    });

    if ( true && optimizeFonts) {
      cssLinkElements = this.makeStylesheetInert(cssLinkElements);
    }

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      assetQueryString,
      crossOrigin
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith(".js")) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${assetQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || crossOrigin
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      assetQueryString,
      scriptLoader,
      crossOrigin
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith(".js");
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || crossOrigin
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${assetQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || crossOrigin
    }))];
  }

  getBeforeInteractiveInlineScripts() {
    const {
      scriptLoader
    } = this.context;
    const {
      nonce,
      crossOrigin
    } = this.props;
    return (scriptLoader.beforeInteractive || []).filter(script => !script.src && (script.dangerouslySetInnerHTML || script.children)).map((file, index) => {
      const {
        strategy,
        children,
        dangerouslySetInnerHTML,
        src
      } = file,
            scriptProps = _objectWithoutProperties(file, _excluded4);

      let html = "";

      if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
        html = dangerouslySetInnerHTML.__html;
      } else if (children) {
        html = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
      }

      return /*#__PURE__*/_react.default.createElement("script", _objectSpread(_objectSpread({}, scriptProps), {}, {
        dangerouslySetInnerHTML: {
          __html: html
        },
        key: scriptProps.id || index,
        nonce: nonce,
        "data-nscript": "beforeInteractive",
        crossOrigin: crossOrigin || undefined
      }));
    });
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      var _c_props, _c_props1;

      if ((c == null ? void 0 : c.type) === "link" && (c == null ? void 0 : (_c_props = c.props) == null ? void 0 : _c_props.href) && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => {
        var _c_props, _c_props_href;

        return c == null ? void 0 : (_c_props = c.props) == null ? void 0 : (_c_props_href = _c_props.href) == null ? void 0 : _c_props_href.startsWith(url);
      })) {
        const newProps = _objectSpread(_objectSpread({}, c.props || {}), {}, {
          "data-href": c.props.href,
          href: undefined
        });

        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c == null ? void 0 : (_c_props1 = c.props) == null ? void 0 : _c_props1.children) {
        const newProps = _objectSpread(_objectSpread({}, c.props || {}), {}, {
          children: this.makeStylesheetInert(c.props.children)
        });

        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      }

      return c; // @types/react bug. Returned value from .map will not be `null` if you pass in `[null]`
    }).filter(Boolean);
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading,
      optimizeCss,
      optimizeFonts,
      assetPrefix,
      nextFontManifest
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        let metaTag;

        if (this.context.strictNextHead) {
          metaTag = /*#__PURE__*/_react.default.createElement("meta", {
            name: "next-head",
            content: "1"
          });
        }

        if (c && c.type === "link" && c.props["rel"] === "preload" && c.props["as"] === "style") {
          metaTag && cssPreloads.push(metaTag);
          cssPreloads.push(c);
        } else {
          if (c) {
            if (metaTag && (c.type !== "meta" || !c.props["charSet"])) {
              otherHeadElements.push(metaTag);
            }

            otherHeadElements.push(c);
          }
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (false) {}

    if ( true && optimizeFonts && !( true && inAmpMode)) {
      children = this.makeStylesheetInert(children);
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if ( true && inAmpMode) {
        let badProp = "";

        if (type === "meta" && props.name === "viewport") {
          badProp = 'name="viewport"';
        } else if (type === "link" && props.rel === "canonical") {
          hasCanonicalRel = true;
        } else if (type === "script") {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf("ampproject") < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === "text/javascript")) {
            badProp = "<script";
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += "/>";
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === "link" && props.rel === "amphtml") {
          hasAmphtmlRel = true;
        }
      }

      return child; // @types/react bug. Returned value from .map will not be `null` if you pass in `[null]`
    });
    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page,  true && inAmpMode);
    const nextFontLinkTags = getNextFontLinkTags(nextFontManifest, dangerousAsPath, assetPrefix);
    return /*#__PURE__*/_react.default.createElement("head", getHeadHTMLProps(this.props), this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode":  true && inAmpMode ? "true" : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode":  true && inAmpMode ? "true" : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), head, this.context.strictNextHead ? null : /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), children, optimizeFonts && /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-font-preconnect"
    }), nextFontLinkTags.preconnect, nextFontLinkTags.preload,  true && inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (__webpack_require__(6368).cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), /*#__PURE__*/_react.default.createElement(AmpStyles, {
      styles: styles
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !( true && inAmpMode) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getBeforeInteractiveInlineScripts(), !optimizeCss && this.getCssLinks(files), !optimizeCss && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": this.props.nonce ?? ""
    }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files), optimizeCss && this.getCssLinks(files), optimizeCss && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": this.props.nonce ?? ""
    }), this.context.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)

    /*#__PURE__*/
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

var _ = {
  writable: true,
  value: (() => {
    Head.contextType = _htmlcontext.HtmlContext;
  })()
};

function handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props) {
  var _children_find, _children_find_props, _children_find1, _children_find_props1;

  if (!props.children) return;
  const scriptLoaderItems = [];
  const children = Array.isArray(props.children) ? props.children : [props.children];
  const headChildren = (_children_find = children.find(child => child.type === Head)) == null ? void 0 : (_children_find_props = _children_find.props) == null ? void 0 : _children_find_props.children;
  const bodyChildren = (_children_find1 = children.find(child => child.type === "body")) == null ? void 0 : (_children_find_props1 = _children_find1.props) == null ? void 0 : _children_find_props1.children; // Scripts with beforeInteractive can be placed inside Head or <body> so children of both needs to be traversed

  const combinedChildren = [...(Array.isArray(headChildren) ? headChildren : [headChildren]), ...(Array.isArray(bodyChildren) ? bodyChildren : [bodyChildren])];

  _react.default.Children.forEach(combinedChildren, child => {
    var _child_type;

    if (!child) return; // When using the `next/script` component, register it in script loader.

    if ((_child_type = child.type) == null ? void 0 : _child_type.__nextScript) {
      if (child.props.strategy === "beforeInteractive") {
        scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
        return;
      } else if (["lazyOnload", "afterInteractive", "worker"].includes(child.props.strategy)) {
        scriptLoaderItems.push(child.props);
        return;
      }
    }
  });

  __NEXT_DATA__.scriptLoader = scriptLoaderItems;
}

class NextScript extends _react.default.Component {
  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(context) {
    const {
      __NEXT_DATA__,
      largePageDataBytes
    } = context;

    try {
      const data = JSON.stringify(__NEXT_DATA__);

      if (largePageDataWarnings.has(__NEXT_DATA__.page)) {
        return (0, _htmlescape.htmlEscapeJsonString)(data);
      }

      const bytes =  false ? 0 : Buffer.from(data).byteLength;

      const prettyBytes = (__webpack_require__(5955)/* ["default"] */ .Z);

      if (largePageDataBytes && bytes > largePageDataBytes) {
        if (true) {
          largePageDataWarnings.add(__NEXT_DATA__.page);
        }

        console.warn(`Warning: data for page "${__NEXT_DATA__.page}"${__NEXT_DATA__.page === context.dangerousAsPath ? "" : ` (path "${context.dangerousAsPath}")`} is ${prettyBytes(bytes)} which exceeds the threshold of ${prettyBytes(largePageDataBytes)}, this amount of data can reduce performance.\nSee more info here: https://nextjs.org/docs/messages/large-page-data`);
      }

      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if ((0, _iserror.default)(err) && err.message.indexOf("circular structure") !== -1) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      assetQueryString,
      disableOptimizedLoading,
      crossOrigin
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if ( true && inAmpMode) {
      if (true) {
        return null;
      }

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || crossOrigin,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${assetQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || crossOrigin,
        "data-ampdevmode": true
      })));
    }

    if (false) {}

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page,  true && inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${assetQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || crossOrigin
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || crossOrigin,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

var _2 = {
  writable: true,
  value: (() => {
    NextScript.contextType = _htmlcontext.HtmlContext;
  })()
};

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale,
    scriptLoader,
    __NEXT_DATA__
  } = (0, _htmlcontext.useHtmlContext)();
  docComponentsRendered.Html = true;
  handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props);
  return /*#__PURE__*/_react.default.createElement("html", _objectSpread(_objectSpread({}, props), {}, {
    lang: props.lang || locale || undefined,
    amp:  true && inAmpMode ? "" : undefined,
    "data-ampdevmode":  true && inAmpMode && false ? 0 : undefined
  }));
}

function Main() {
  const {
    docComponentsRendered
  } = (0, _htmlcontext.useHtmlContext)();
  docComponentsRendered.Main = true; // @ts-ignore

  return /*#__PURE__*/_react.default.createElement("next-js-internal-body-render-target", null);
}

class Document extends _react.default.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static getInitialProps(ctx) {
    return ctx.defaultGetInitialProps(ctx);
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

} // Add a special property to the built-in `Document` component so later we can
// identify if a user customized `Document` is used or not.


const InternalFunctionDocument = function InternalFunctionDocument() {
  return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
};

Document[_constants.NEXT_BUILTIN_DOCUMENT] = InternalFunctionDocument;

/***/ }),

/***/ 9989:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
0 && (0);

function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}

_export(exports, {
  noSSR: function () {
    return noSSR;
  },
  default: function () {
    return dynamic;
  }
});

const _interop_require_default = __webpack_require__(167);

const _react = /*#__PURE__*/_interop_require_default._(__webpack_require__(6689));

const _loadable = /*#__PURE__*/_interop_require_default._(__webpack_require__(5832));

const isServerSide = true; // Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.

function convertModule(mod) {
  return {
    default: (mod == null ? void 0 : mod.default) || mod
  };
}

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: param => {
      let {
        error,
        isLoading,
        pastDelay
      } = param;
      if (!pastDelay) return null;

      if (false) {}

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === "function") {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === "object") {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const loaderFn = loadableOptions.loader;

  const loader = () => loaderFn != null ? loaderFn().then(convertModule) : Promise.resolve(convertModule(() => null)); // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(() => import('../hello-world'), {ssr: false}).


  if (typeof loadableOptions.ssr === "boolean" && !loadableOptions.ssr) {
    delete loadableOptions.webpack;
    delete loadableOptions.modules;
    return noSSR(loadableFn, loadableOptions);
  }

  return loadableFn(_objectSpread(_objectSpread({}, loadableOptions), {}, {
    loader: loader
  }));
}

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 1597:
/***/ ((module, exports, __webpack_require__) => {

"use client";
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
0 && (0);

function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}

_export(exports, {
  defaultHead: function () {
    return defaultHead;
  },
  default: function () {
    return _default;
  }
});

const _interop_require_default = __webpack_require__(167);

const _interop_require_wildcard = __webpack_require__(8760);

const _react = /*#__PURE__*/_interop_require_wildcard._(__webpack_require__(6689));

const _sideeffect = /*#__PURE__*/_interop_require_default._(__webpack_require__(2470));

const _ampcontext = __webpack_require__(3918);

const _headmanagercontext = __webpack_require__(2796);

const _ampmode = __webpack_require__(5732);

const _warnonce = __webpack_require__(618);

function defaultHead(inAmpMode) {
  if (inAmpMode === void 0) inAmpMode = false;
  const head = [/*#__PURE__*/_react.default.createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === "string" || typeof child === "number") {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react.default.Fragment) {
    return list.concat( // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
    _react.default.Children.toArray(child.props.children).reduce( // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
    (fragmentList, fragmentChild) => {
      if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

const METATYPES = ["name", "httpEquiv", "charSet", "itemProp"];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  const keys = new Set();
  const tags = new Set();
  const metaTypes = new Set();
  const metaCategories = {};
  return h => {
    let isUnique = true;
    let hasKey = false;

    if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
      hasKey = true;
      const key = h.key.slice(h.key.indexOf("$") + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case "title":
      case "base":
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case "meta":
        for (let i = 0, len = METATYPES.length; i < len; i++) {
          const metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === "charSet") {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            const category = h.props[metatype];
            const categories = metaCategories[metatype] || new Set();

            if ((metatype !== "name" || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */


function reduceComponents(headChildrenElements, props) {
  const {
    inAmpMode
  } = props;
  return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i) => {
    const key = c.key || i;

    if ( true && !inAmpMode) {
      if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
      ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(url => c.props["href"].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps["data-href"] = newProps["href"];
        newProps["href"] = undefined; // Add this attribute to make it easy to identify optimized tags

        newProps["data-optimized-fonts"] = true;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      }
    }

    if (false) {}

    return /*#__PURE__*/_react.default.cloneElement(c, {
      key
    });
  });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */


function Head(param) {
  let {
    children
  } = param;
  const ampState = (0, _react.useContext)(_ampcontext.AmpStateContext);
  const headManager = (0, _react.useContext)(_headmanagercontext.HeadManagerContext);
  return /*#__PURE__*/_react.default.createElement(_sideeffect.default, {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _ampmode.isInAmpMode)(ampState)
  }, children);
}

const _default = Head;

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 3956:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
0 && (0);

function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}

_export(exports, {
  default: function () {
    return _default;
  },
  unstable_getImgProps: function () {
    return unstable_getImgProps;
  }
});

const _interop_require_default = __webpack_require__(167);

const _getimgprops = __webpack_require__(5132);

const _warnonce = __webpack_require__(618);

const _imagecomponent = __webpack_require__(2590);

const _imageloader = /*#__PURE__*/_interop_require_default._(__webpack_require__(1586));

const unstable_getImgProps = imgProps => {
  (0, _warnonce.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
  const {
    props
  } = (0, _getimgprops.getImgProps)(imgProps, {
    defaultLoader: _imageloader.default,
    // This is replaced by webpack define plugin
    imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true}
  });

  for (const [key, value] of Object.entries(props)) {
    if (value === undefined) {
      delete props[key];
    }
  }

  return {
    props
  };
};

const _default = _imagecomponent.Image;

/***/ }),

/***/ 1586:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _default;
  }
}));

function defaultLoader(param) {
  let {
    config,
    src,
    width,
    quality
  } = param;

  if (false) {}

  return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
} // We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js


defaultLoader.__next_img_default = true;
const _default = defaultLoader;

/***/ }),

/***/ 6787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createAnimation)
/* harmony export */ });
/* harmony import */ var _index5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5560);
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1824);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


let animationPrefix;
/**
 * Web Animations requires hyphenated CSS properties
 * to be written in camelCase when animating
 */

const processKeyframes = keyframes => {
  keyframes.forEach(keyframe => {
    for (const key in keyframe) {
      // eslint-disable-next-line no-prototype-builtins
      if (keyframe.hasOwnProperty(key)) {
        const value = keyframe[key];

        if (key === 'easing') {
          const newKey = 'animation-timing-function';
          keyframe[newKey] = value;
          delete keyframe[key];
        } else {
          const newKey = convertCamelCaseToHypen(key);

          if (newKey !== key) {
            keyframe[newKey] = value;
            delete keyframe[key];
          }
        }
      }
    }
  });
  return keyframes;
};

const convertCamelCaseToHypen = str => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

const getAnimationPrefix = el => {
  if (animationPrefix === undefined) {
    const supportsUnprefixed = el.style.animationName !== undefined;
    const supportsWebkitPrefix = el.style.webkitAnimationName !== undefined;
    animationPrefix = !supportsUnprefixed && supportsWebkitPrefix ? '-webkit-' : '';
  }

  return animationPrefix;
};

const setStyleProperty = (element, propertyName, value) => {
  const prefix = propertyName.startsWith('animation') ? getAnimationPrefix(element) : '';
  element.style.setProperty(prefix + propertyName, value);
};

const removeStyleProperty = (element, propertyName) => {
  const prefix = propertyName.startsWith('animation') ? getAnimationPrefix(element) : '';
  element.style.removeProperty(prefix + propertyName);
};

const animationEnd = (el, callback) => {
  let unRegTrans;
  const opts = {
    passive: true
  };

  const unregister = () => {
    if (unRegTrans) {
      unRegTrans();
    }
  };

  const onTransitionEnd = ev => {
    if (el === ev.target) {
      unregister();
      callback(ev);
    }
  };

  if (el) {
    el.addEventListener('webkitAnimationEnd', onTransitionEnd, opts);
    el.addEventListener('animationend', onTransitionEnd, opts);

    unRegTrans = () => {
      el.removeEventListener('webkitAnimationEnd', onTransitionEnd, opts);
      el.removeEventListener('animationend', onTransitionEnd, opts);
    };
  }

  return unregister;
}; // TODO(FW-2832): type


const generateKeyframeRules = (keyframes = []) => {
  return keyframes.map(keyframe => {
    const offset = keyframe.offset;
    const frameString = [];

    for (const property in keyframe) {
      // eslint-disable-next-line no-prototype-builtins
      if (keyframe.hasOwnProperty(property) && property !== 'offset') {
        frameString.push(`${property}: ${keyframe[property]};`);
      }
    }

    return `${offset * 100}% { ${frameString.join(' ')} }`;
  }).join(' ');
};

const keyframeIds = [];

const generateKeyframeName = keyframeRules => {
  let index = keyframeIds.indexOf(keyframeRules);

  if (index < 0) {
    index = keyframeIds.push(keyframeRules) - 1;
  }

  return `ion-animation-${index}`;
};

const getStyleContainer = element => {
  // getRootNode is not always available in SSR environments.
  // TODO(FW-2832): types
  const rootNode = element.getRootNode !== undefined ? element.getRootNode() : element;
  return rootNode.head || rootNode;
};

const createKeyframeStylesheet = (keyframeName, keyframeRules, element) => {
  var _a;

  const styleContainer = getStyleContainer(element);
  const keyframePrefix = getAnimationPrefix(element);
  const existingStylesheet = styleContainer.querySelector('#' + keyframeName);

  if (existingStylesheet) {
    return existingStylesheet;
  }

  const stylesheet = ((_a = element.ownerDocument) !== null && _a !== void 0 ? _a : document).createElement('style');
  stylesheet.id = keyframeName;
  stylesheet.textContent = `@${keyframePrefix}keyframes ${keyframeName} { ${keyframeRules} } @${keyframePrefix}keyframes ${keyframeName}-alt { ${keyframeRules} }`;
  styleContainer.appendChild(stylesheet);
  return stylesheet;
};

const addClassToArray = (classes = [], className) => {
  if (className !== undefined) {
    const classNameToAppend = Array.isArray(className) ? className : [className];
    return [...classes, ...classNameToAppend];
  }

  return classes;
};

const createAnimation = animationId => {
  let _delay;

  let _duration;

  let _easing;

  let _iterations;

  let _fill;

  let _direction;

  let _keyframes = [];
  let beforeAddClasses = [];
  let beforeRemoveClasses = [];
  let initialized = false;
  let parentAnimation;
  let beforeStylesValue = {};
  let afterAddClasses = [];
  let afterRemoveClasses = [];
  let afterStylesValue = {};
  let numAnimationsRunning = 0;
  let shouldForceLinearEasing = false;
  let shouldForceSyncPlayback = false;
  let cssAnimationsTimerFallback;
  let forceDirectionValue;
  let forceDurationValue;
  let forceDelayValue;
  let willComplete = true;
  let finished = false;
  let shouldCalculateNumAnimations = true;
  let keyframeName;
  let ani;
  let paused = false;
  const id = animationId;
  const onFinishCallbacks = [];
  const onFinishOneTimeCallbacks = [];
  const onStopOneTimeCallbacks = [];
  const elements = [];
  const childAnimations = [];
  const stylesheets = [];
  const _beforeAddReadFunctions = [];
  const _beforeAddWriteFunctions = [];
  const _afterAddReadFunctions = [];
  const _afterAddWriteFunctions = [];
  const webAnimations = [];
  const supportsAnimationEffect = typeof AnimationEffect === 'function' || _index5_js__WEBPACK_IMPORTED_MODULE_0__.w !== undefined && typeof _index5_js__WEBPACK_IMPORTED_MODULE_0__.w.AnimationEffect === 'function';
  const supportsWebAnimations = typeof Element === 'function' && typeof Element.prototype.animate === 'function' && supportsAnimationEffect;
  const ANIMATION_END_FALLBACK_PADDING_MS = 100;

  const getWebAnimations = () => {
    return webAnimations;
  };

  const destroy = clearStyleSheets => {
    childAnimations.forEach(childAnimation => {
      childAnimation.destroy(clearStyleSheets);
    });
    cleanUp(clearStyleSheets);
    elements.length = 0;
    childAnimations.length = 0;
    _keyframes.length = 0;
    clearOnFinish();
    initialized = false;
    shouldCalculateNumAnimations = true;
    return ani;
  };
  /**
   * Cancels any Web Animations, removes
   * any animation properties from the
   * animation's elements, and removes the
   * animation's stylesheets from the DOM.
   */


  const cleanUp = clearStyleSheets => {
    cleanUpElements();

    if (clearStyleSheets) {
      cleanUpStyleSheets();
    }
  };

  const resetFlags = () => {
    shouldForceLinearEasing = false;
    shouldForceSyncPlayback = false;
    shouldCalculateNumAnimations = true;
    forceDirectionValue = undefined;
    forceDurationValue = undefined;
    forceDelayValue = undefined;
    numAnimationsRunning = 0;
    finished = false;
    willComplete = true;
    paused = false;
  };

  const isRunning = () => {
    return numAnimationsRunning !== 0 && !paused;
  };
  /**
   * @internal
   * Remove a callback from a chosen callback array
   * @param callbackToRemove: A reference to the callback that should be removed
   * @param callbackObjects: An array of callbacks that callbackToRemove should be removed from.
   */


  const clearCallback = (callbackToRemove, callbackObjects) => {
    const index = callbackObjects.findIndex(callbackObject => callbackObject.c === callbackToRemove);

    if (index > -1) {
      callbackObjects.splice(index, 1);
    }
  };
  /**
   * @internal
   * Add a callback to be fired when an animation is stopped/cancelled.
   * @param callback: A reference to the callback that should be fired
   * @param opts: Any options associated with this particular callback
   */


  const onStop = (callback, opts) => {
    onStopOneTimeCallbacks.push({
      c: callback,
      o: opts
    });
    return ani;
  };

  const onFinish = (callback, opts) => {
    const callbacks = (opts === null || opts === void 0 ? void 0 : opts.oneTimeCallback) ? onFinishOneTimeCallbacks : onFinishCallbacks;
    callbacks.push({
      c: callback,
      o: opts
    });
    return ani;
  };

  const clearOnFinish = () => {
    onFinishCallbacks.length = 0;
    onFinishOneTimeCallbacks.length = 0;
    return ani;
  };
  /**
   * Cancels any Web Animations and removes
   * any animation properties from the
   * the animation's elements.
   */


  const cleanUpElements = () => {
    if (supportsWebAnimations) {
      webAnimations.forEach(animation => {
        animation.cancel();
      });
      webAnimations.length = 0;
    } else {
      const elementsArray = elements.slice();
      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.r)(() => {
        elementsArray.forEach(element => {
          removeStyleProperty(element, 'animation-name');
          removeStyleProperty(element, 'animation-duration');
          removeStyleProperty(element, 'animation-timing-function');
          removeStyleProperty(element, 'animation-iteration-count');
          removeStyleProperty(element, 'animation-delay');
          removeStyleProperty(element, 'animation-play-state');
          removeStyleProperty(element, 'animation-fill-mode');
          removeStyleProperty(element, 'animation-direction');
        });
      });
    }
  };
  /**
   * Removes the animation's stylesheets
   * from the DOM.
   */


  const cleanUpStyleSheets = () => {
    stylesheets.forEach(stylesheet => {
      /**
       * When sharing stylesheets, it's possible
       * for another animation to have already
       * cleaned up a particular stylesheet
       */
      if (stylesheet === null || stylesheet === void 0 ? void 0 : stylesheet.parentNode) {
        stylesheet.parentNode.removeChild(stylesheet);
      }
    });
    stylesheets.length = 0;
  };

  const beforeAddRead = readFn => {
    _beforeAddReadFunctions.push(readFn);

    return ani;
  };

  const beforeAddWrite = writeFn => {
    _beforeAddWriteFunctions.push(writeFn);

    return ani;
  };

  const afterAddRead = readFn => {
    _afterAddReadFunctions.push(readFn);

    return ani;
  };

  const afterAddWrite = writeFn => {
    _afterAddWriteFunctions.push(writeFn);

    return ani;
  };

  const beforeAddClass = className => {
    beforeAddClasses = addClassToArray(beforeAddClasses, className);
    return ani;
  };

  const beforeRemoveClass = className => {
    beforeRemoveClasses = addClassToArray(beforeRemoveClasses, className);
    return ani;
  };
  /**
   * Set CSS inline styles to the animation's
   * elements before the animation begins.
   */


  const beforeStyles = (styles = {}) => {
    beforeStylesValue = styles;
    return ani;
  };
  /**
   * Clear CSS inline styles from the animation's
   * elements before the animation begins.
   */


  const beforeClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      beforeStylesValue[property] = '';
    }

    return ani;
  };

  const afterAddClass = className => {
    afterAddClasses = addClassToArray(afterAddClasses, className);
    return ani;
  };

  const afterRemoveClass = className => {
    afterRemoveClasses = addClassToArray(afterRemoveClasses, className);
    return ani;
  };

  const afterStyles = (styles = {}) => {
    afterStylesValue = styles;
    return ani;
  };

  const afterClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      afterStylesValue[property] = '';
    }

    return ani;
  };

  const getFill = () => {
    if (_fill !== undefined) {
      return _fill;
    }

    if (parentAnimation) {
      return parentAnimation.getFill();
    }

    return 'both';
  };

  const getDirection = () => {
    if (forceDirectionValue !== undefined) {
      return forceDirectionValue;
    }

    if (_direction !== undefined) {
      return _direction;
    }

    if (parentAnimation) {
      return parentAnimation.getDirection();
    }

    return 'normal';
  };

  const getEasing = () => {
    if (shouldForceLinearEasing) {
      return 'linear';
    }

    if (_easing !== undefined) {
      return _easing;
    }

    if (parentAnimation) {
      return parentAnimation.getEasing();
    }

    return 'linear';
  };

  const getDuration = () => {
    if (shouldForceSyncPlayback) {
      return 0;
    }

    if (forceDurationValue !== undefined) {
      return forceDurationValue;
    }

    if (_duration !== undefined) {
      return _duration;
    }

    if (parentAnimation) {
      return parentAnimation.getDuration();
    }

    return 0;
  };

  const getIterations = () => {
    if (_iterations !== undefined) {
      return _iterations;
    }

    if (parentAnimation) {
      return parentAnimation.getIterations();
    }

    return 1;
  };

  const getDelay = () => {
    if (forceDelayValue !== undefined) {
      return forceDelayValue;
    }

    if (_delay !== undefined) {
      return _delay;
    }

    if (parentAnimation) {
      return parentAnimation.getDelay();
    }

    return 0;
  };

  const getKeyframes = () => {
    return _keyframes;
  };

  const direction = animationDirection => {
    _direction = animationDirection;
    update(true);
    return ani;
  };

  const fill = animationFill => {
    _fill = animationFill;
    update(true);
    return ani;
  };

  const delay = animationDelay => {
    _delay = animationDelay;
    update(true);
    return ani;
  };

  const easing = animationEasing => {
    _easing = animationEasing;
    update(true);
    return ani;
  };

  const duration = animationDuration => {
    /**
     * CSS Animation Durations of 0ms work fine on Chrome
     * but do not run on Safari, so force it to 1ms to
     * get it to run on both platforms.
     */
    if (!supportsWebAnimations && animationDuration === 0) {
      animationDuration = 1;
    }

    _duration = animationDuration;
    update(true);
    return ani;
  };

  const iterations = animationIterations => {
    _iterations = animationIterations;
    update(true);
    return ani;
  };

  const parent = animation => {
    parentAnimation = animation;
    return ani;
  };

  const addElement = el => {
    if (el != null) {
      if (el.nodeType === 1) {
        elements.push(el);
      } else if (el.length >= 0) {
        for (let i = 0; i < el.length; i++) {
          elements.push(el[i]);
        }
      } else {
        console.error('Invalid addElement value');
      }
    }

    return ani;
  };

  const addAnimation = animationToAdd => {
    if (animationToAdd != null) {
      if (Array.isArray(animationToAdd)) {
        for (const animation of animationToAdd) {
          animation.parent(ani);
          childAnimations.push(animation);
        }
      } else {
        animationToAdd.parent(ani);
        childAnimations.push(animationToAdd);
      }
    }

    return ani;
  };

  const keyframes = keyframeValues => {
    const different = _keyframes !== keyframeValues;
    _keyframes = keyframeValues;

    if (different) {
      updateKeyframes(_keyframes);
    }

    return ani;
  };

  const updateKeyframes = keyframeValues => {
    if (supportsWebAnimations) {
      getWebAnimations().forEach(animation => {
        /**
         * animation.effect's type is AnimationEffect.
         * However, in this case we have a more specific
         * type of AnimationEffect called KeyframeEffect which
         * inherits from AnimationEffect. As a result,
         * we cast animation.effect to KeyframeEffect.
         */
        const keyframeEffect = animation.effect;
        /**
         * setKeyframes is not supported in all browser
         * versions that Ionic supports, so we need to
         * check for support before using it.
         */
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions

        if (keyframeEffect.setKeyframes) {
          keyframeEffect.setKeyframes(keyframeValues);
        } else {
          const newEffect = new KeyframeEffect(keyframeEffect.target, keyframeValues, keyframeEffect.getTiming());
          animation.effect = newEffect;
        }
      });
    } else {
      initializeCSSAnimation();
    }
  };
  /**
   * Run all "before" animation hooks.
   */


  const beforeAnimation = () => {
    // Runs all before read callbacks
    _beforeAddReadFunctions.forEach(callback => callback()); // Runs all before write callbacks


    _beforeAddWriteFunctions.forEach(callback => callback()); // Updates styles and classes before animation runs


    const addClasses = beforeAddClasses;
    const removeClasses = beforeRemoveClasses;
    const styles = beforeStylesValue;
    elements.forEach(el => {
      const elementClassList = el.classList;
      addClasses.forEach(c => elementClassList.add(c));
      removeClasses.forEach(c => elementClassList.remove(c));

      for (const property in styles) {
        // eslint-disable-next-line no-prototype-builtins
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
  };
  /**
   * Run all "after" animation hooks.
   */


  const afterAnimation = () => {
    clearCSSAnimationsTimeout(); // Runs all after read callbacks

    _afterAddReadFunctions.forEach(callback => callback()); // Runs all after write callbacks


    _afterAddWriteFunctions.forEach(callback => callback()); // Updates styles and classes before animation ends


    const currentStep = willComplete ? 1 : 0;
    const addClasses = afterAddClasses;
    const removeClasses = afterRemoveClasses;
    const styles = afterStylesValue;
    elements.forEach(el => {
      const elementClassList = el.classList;
      addClasses.forEach(c => elementClassList.add(c));
      removeClasses.forEach(c => elementClassList.remove(c));

      for (const property in styles) {
        // eslint-disable-next-line no-prototype-builtins
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
    /**
     * Clean up any value coercion before
     * the user callbacks fire otherwise
     * they may get stale values. For example,
     * if someone calls progressStart(0) the
     * animation may still be reversed.
     */

    forceDurationValue = undefined;
    forceDirectionValue = undefined;
    forceDelayValue = undefined;
    onFinishCallbacks.forEach(onFinishCallback => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.forEach(onFinishCallback => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.length = 0;
    shouldCalculateNumAnimations = true;

    if (willComplete) {
      finished = true;
    }

    willComplete = true;
  };

  const animationFinish = () => {
    if (numAnimationsRunning === 0) {
      return;
    }

    numAnimationsRunning--;

    if (numAnimationsRunning === 0) {
      afterAnimation();

      if (parentAnimation) {
        parentAnimation.animationFinish();
      }
    }
  };

  const initializeCSSAnimation = (toggleAnimationName = true) => {
    cleanUpStyleSheets();
    const processedKeyframes = processKeyframes(_keyframes);
    elements.forEach(element => {
      if (processedKeyframes.length > 0) {
        const keyframeRules = generateKeyframeRules(processedKeyframes);
        keyframeName = animationId !== undefined ? animationId : generateKeyframeName(keyframeRules);
        const stylesheet = createKeyframeStylesheet(keyframeName, keyframeRules, element);
        stylesheets.push(stylesheet);
        setStyleProperty(element, 'animation-duration', `${getDuration()}ms`);
        setStyleProperty(element, 'animation-timing-function', getEasing());
        setStyleProperty(element, 'animation-delay', `${getDelay()}ms`);
        setStyleProperty(element, 'animation-fill-mode', getFill());
        setStyleProperty(element, 'animation-direction', getDirection());
        const iterationsCount = getIterations() === Infinity ? 'infinite' : getIterations().toString();
        setStyleProperty(element, 'animation-iteration-count', iterationsCount);
        setStyleProperty(element, 'animation-play-state', 'paused');

        if (toggleAnimationName) {
          setStyleProperty(element, 'animation-name', `${stylesheet.id}-alt`);
        }

        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.r)(() => {
          setStyleProperty(element, 'animation-name', stylesheet.id || null);
        });
      }
    });
  };

  const initializeWebAnimation = () => {
    elements.forEach(element => {
      const animation = element.animate(_keyframes, {
        id,
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
      animation.pause();
      webAnimations.push(animation);
    });

    if (webAnimations.length > 0) {
      webAnimations[0].onfinish = () => {
        animationFinish();
      };
    }
  };

  const initializeAnimation = (toggleAnimationName = true) => {
    beforeAnimation();

    if (_keyframes.length > 0) {
      if (supportsWebAnimations) {
        initializeWebAnimation();
      } else {
        initializeCSSAnimation(toggleAnimationName);
      }
    }

    initialized = true;
  };

  const setAnimationStep = step => {
    step = Math.min(Math.max(step, 0), 0.9999);

    if (supportsWebAnimations) {
      webAnimations.forEach(animation => {
        // When creating the animation the delay is guaranteed to be set to a number.
        animation.currentTime = animation.effect.getComputedTiming().delay + getDuration() * step;
        animation.pause();
      });
    } else {
      const animationDuration = `-${getDuration() * step}ms`;
      elements.forEach(element => {
        if (_keyframes.length > 0) {
          setStyleProperty(element, 'animation-delay', animationDuration);
          setStyleProperty(element, 'animation-play-state', 'paused');
        }
      });
    }
  };

  const updateWebAnimation = step => {
    webAnimations.forEach(animation => {
      animation.effect.updateTiming({
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
    });

    if (step !== undefined) {
      setAnimationStep(step);
    }
  };

  const updateCSSAnimation = (toggleAnimationName = true, step) => {
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.r)(() => {
      elements.forEach(element => {
        setStyleProperty(element, 'animation-name', keyframeName || null);
        setStyleProperty(element, 'animation-duration', `${getDuration()}ms`);
        setStyleProperty(element, 'animation-timing-function', getEasing());
        setStyleProperty(element, 'animation-delay', step !== undefined ? `-${step * getDuration()}ms` : `${getDelay()}ms`);
        setStyleProperty(element, 'animation-fill-mode', getFill() || null);
        setStyleProperty(element, 'animation-direction', getDirection() || null);
        const iterationsCount = getIterations() === Infinity ? 'infinite' : getIterations().toString();
        setStyleProperty(element, 'animation-iteration-count', iterationsCount);

        if (toggleAnimationName) {
          setStyleProperty(element, 'animation-name', `${keyframeName}-alt`);
        }

        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.r)(() => {
          setStyleProperty(element, 'animation-name', keyframeName || null);
        });
      });
    });
  };

  const update = (deep = false, toggleAnimationName = true, step) => {
    if (deep) {
      childAnimations.forEach(animation => {
        animation.update(deep, toggleAnimationName, step);
      });
    }

    if (supportsWebAnimations) {
      updateWebAnimation(step);
    } else {
      updateCSSAnimation(toggleAnimationName, step);
    }

    return ani;
  };

  const progressStart = (forceLinearEasing = false, step) => {
    childAnimations.forEach(animation => {
      animation.progressStart(forceLinearEasing, step);
    });
    pauseAnimation();
    shouldForceLinearEasing = forceLinearEasing;

    if (!initialized) {
      initializeAnimation();
    }

    update(false, true, step);
    return ani;
  };

  const progressStep = step => {
    childAnimations.forEach(animation => {
      animation.progressStep(step);
    });
    setAnimationStep(step);
    return ani;
  };

  const progressEnd = (playTo, step, dur) => {
    shouldForceLinearEasing = false;
    childAnimations.forEach(animation => {
      animation.progressEnd(playTo, step, dur);
    });

    if (dur !== undefined) {
      forceDurationValue = dur;
    }

    finished = false;
    willComplete = true;

    if (playTo === 0) {
      forceDirectionValue = getDirection() === 'reverse' ? 'normal' : 'reverse';

      if (forceDirectionValue === 'reverse') {
        willComplete = false;
      }

      if (supportsWebAnimations) {
        update();
        setAnimationStep(1 - step);
      } else {
        forceDelayValue = (1 - step) * getDuration() * -1;
        update(false, false);
      }
    } else if (playTo === 1) {
      if (supportsWebAnimations) {
        update();
        setAnimationStep(step);
      } else {
        forceDelayValue = step * getDuration() * -1;
        update(false, false);
      }
    }

    if (playTo !== undefined && !parentAnimation) {
      play();
    }

    return ani;
  };

  const pauseAnimation = () => {
    if (initialized) {
      if (supportsWebAnimations) {
        webAnimations.forEach(animation => {
          animation.pause();
        });
      } else {
        elements.forEach(element => {
          setStyleProperty(element, 'animation-play-state', 'paused');
        });
      }

      paused = true;
    }
  };

  const pause = () => {
    childAnimations.forEach(animation => {
      animation.pause();
    });
    pauseAnimation();
    return ani;
  };

  const onAnimationEndFallback = () => {
    cssAnimationsTimerFallback = undefined;
    animationFinish();
  };

  const clearCSSAnimationsTimeout = () => {
    if (cssAnimationsTimerFallback) {
      clearTimeout(cssAnimationsTimerFallback);
    }
  };

  const playCSSAnimations = () => {
    clearCSSAnimationsTimeout();
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.r)(() => {
      elements.forEach(element => {
        if (_keyframes.length > 0) {
          setStyleProperty(element, 'animation-play-state', 'running');
        }
      });
    });

    if (_keyframes.length === 0 || elements.length === 0) {
      animationFinish();
    } else {
      /**
       * This is a catchall in the event that a CSS Animation did not finish.
       * The Web Animations API has mechanisms in place for preventing this.
       * CSS Animations will not fire an `animationend` event
       * for elements with `display: none`. The Web Animations API
       * accounts for this, but using raw CSS Animations requires
       * this workaround.
       */
      const animationDelay = getDelay() || 0;
      const animationDuration = getDuration() || 0;
      const animationIterations = getIterations() || 1; // No need to set a timeout when animation has infinite iterations

      if (isFinite(animationIterations)) {
        cssAnimationsTimerFallback = setTimeout(onAnimationEndFallback, animationDelay + animationDuration * animationIterations + ANIMATION_END_FALLBACK_PADDING_MS);
      }

      animationEnd(elements[0], () => {
        clearCSSAnimationsTimeout();
        /**
         * Ensure that clean up
         * is always done a frame
         * before the onFinish handlers
         * are fired. Otherwise, there
         * may be flickering if a new
         * animation is started on the same
         * element too quickly
         */

        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.r)(() => {
          clearCSSAnimationPlayState();
          (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.r)(animationFinish);
        });
      });
    }
  };

  const clearCSSAnimationPlayState = () => {
    elements.forEach(element => {
      removeStyleProperty(element, 'animation-duration');
      removeStyleProperty(element, 'animation-delay');
      removeStyleProperty(element, 'animation-play-state');
    });
  };

  const playWebAnimations = () => {
    webAnimations.forEach(animation => {
      animation.play();
    });

    if (_keyframes.length === 0 || elements.length === 0) {
      animationFinish();
    }
  };

  const resetAnimation = () => {
    if (supportsWebAnimations) {
      setAnimationStep(0);
      updateWebAnimation();
    } else {
      updateCSSAnimation();
    }
  };

  const play = opts => {
    return new Promise(resolve => {
      if (opts === null || opts === void 0 ? void 0 : opts.sync) {
        shouldForceSyncPlayback = true;
        onFinish(() => shouldForceSyncPlayback = false, {
          oneTimeCallback: true
        });
      }

      if (!initialized) {
        initializeAnimation();
      }

      if (finished) {
        resetAnimation();
        finished = false;
      }

      if (shouldCalculateNumAnimations) {
        numAnimationsRunning = childAnimations.length + 1;
        shouldCalculateNumAnimations = false;
      }
      /**
       * When one of these callbacks fires we
       * need to clear the other's callback otherwise
       * you can potentially get these callbacks
       * firing multiple times if the play method
       * is subsequently called.
       * Example:
       * animation.play() (onStop and onFinish callbacks are registered)
       * animation.stop() (onStop callback is fired, onFinish is not)
       * animation.play() (onStop and onFinish callbacks are registered)
       * Total onStop callbacks: 1
       * Total onFinish callbacks: 2
       */


      const onStopCallback = () => {
        clearCallback(onFinishCallback, onFinishOneTimeCallbacks);
        resolve();
      };

      const onFinishCallback = () => {
        clearCallback(onStopCallback, onStopOneTimeCallbacks);
        resolve();
      };
      /**
       * The play method resolves when an animation
       * run either finishes or is cancelled.
       */


      onFinish(onFinishCallback, {
        oneTimeCallback: true
      });
      onStop(onStopCallback, {
        oneTimeCallback: true
      });
      childAnimations.forEach(animation => {
        animation.play();
      });

      if (supportsWebAnimations) {
        playWebAnimations();
      } else {
        playCSSAnimations();
      }

      paused = false;
    });
  };
  /**
   * Stops an animation and resets it state to the
   * beginning. This does not fire any onFinish
   * callbacks because the animation did not finish.
   * However, since the animation was not destroyed
   * (i.e. the animation could run again) we do not
   * clear the onFinish callbacks.
   */


  const stop = () => {
    childAnimations.forEach(animation => {
      animation.stop();
    });

    if (initialized) {
      cleanUpElements();
      initialized = false;
    }

    resetFlags();
    onStopOneTimeCallbacks.forEach(onStopCallback => onStopCallback.c(0, ani));
    onStopOneTimeCallbacks.length = 0;
  };

  const from = (property, value) => {
    const firstFrame = _keyframes[0];

    if (firstFrame !== undefined && (firstFrame.offset === undefined || firstFrame.offset === 0)) {
      firstFrame[property] = value;
    } else {
      _keyframes = [{
        offset: 0,
        [property]: value
      }, ..._keyframes];
    }

    return ani;
  };

  const to = (property, value) => {
    const lastFrame = _keyframes[_keyframes.length - 1];

    if (lastFrame !== undefined && (lastFrame.offset === undefined || lastFrame.offset === 1)) {
      lastFrame[property] = value;
    } else {
      _keyframes = [..._keyframes, {
        offset: 1,
        [property]: value
      }];
    }

    return ani;
  };

  const fromTo = (property, fromValue, toValue) => {
    return from(property, fromValue).to(property, toValue);
  };

  return ani = {
    parentAnimation,
    elements,
    childAnimations,
    id,
    animationFinish,
    from,
    to,
    fromTo,
    parent,
    play,
    pause,
    stop,
    destroy,
    keyframes,
    addAnimation,
    addElement,
    update,
    fill,
    direction,
    iterations,
    duration,
    easing,
    delay,
    getWebAnimations,
    getKeyframes,
    getFill,
    getDirection,
    getDelay,
    getIterations,
    getEasing,
    getDuration,
    afterAddRead,
    afterAddWrite,
    afterClearStyles,
    afterStyles,
    afterRemoveClass,
    afterAddClass,
    beforeAddRead,
    beforeAddWrite,
    beforeClearStyles,
    beforeStyles,
    beforeRemoveClass,
    beforeAddClass,
    onFinish,
    isRunning,
    progressStart,
    progressStep,
    progressEnd
  };
};



/***/ }),

/***/ 1154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getTimeGivenProgression)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 */

/**
 * EXPERIMENTAL
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return an empty array.
 */
const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
  return solveCubicBezier(p0[1], p1[1], p2[1], p3[1], progression).map(tValue => {
    return solveCubicParametricEquation(p0[0], p1[0], p2[0], p3[0], tValue);
  });
};
/**
 * Solve a cubic equation in one dimension (time)
 */


const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
  const partA = 3 * p1 * Math.pow(t - 1, 2);
  const partB = -3 * p2 * t + 3 * p2 + p3 * t;
  const partC = p0 * Math.pow(t - 1, 3);
  return t * (partA + t * partB) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */


const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
  p0 -= refPoint;
  p1 -= refPoint;
  p2 -= refPoint;
  p3 -= refPoint;
  const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
  return roots.filter(root => root >= 0 && root <= 1);
};

const solveQuadraticEquation = (a, b, c) => {
  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else {
    return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }
};

const solveCubicEquation = (a, b, c, d) => {
  if (a === 0) {
    return solveQuadraticEquation(b, c, d);
  }

  b /= a;
  c /= a;
  d /= a;
  const p = (3 * c - b * b) / 3;
  const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;

  if (p === 0) {
    return [Math.pow(-q, 1 / 3)];
  } else if (q === 0) {
    return [Math.sqrt(-p), -Math.sqrt(-p)];
  }

  const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

  if (discriminant === 0) {
    return [Math.pow(q / 2, 1 / 2) - b / 3];
  } else if (discriminant > 0) {
    return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow(q / 2 + Math.sqrt(discriminant), 1 / 3) - b / 3];
  }

  const r = Math.sqrt(Math.pow(-(p / 3), 3));
  const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
  const s = 2 * Math.pow(r, 1 / 3);
  return [s * Math.cos(phi / 3) - b / 3, s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3, s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3];
};



/***/ }),

/***/ 5477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ attachComponent),
/* harmony export */   d: () => (/* binding */ detachComponent)
/* harmony export */ });
/* unused harmony export C */
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1824);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
 // TODO(FW-2832): types

const attachComponent = async (delegate, container, component, cssClasses, componentProps, inline) => {
  var _a;

  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }

  if (!inline && typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }

  const el = typeof component === 'string' ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;

  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }

  if (componentProps) {
    Object.assign(el, componentProps);
  }

  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};

const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};

const CoreDelegate = () => {
  let BaseComponent;
  let Reference;

  const attachViewToDom = async (parentElement, userComponent, userComponentProps = {}, cssClasses = []) => {
    var _a, _b;

    BaseComponent = parentElement;
    let ChildComponent;
    /**
     * If passing in a component via the `component` props
     * we need to append it inside of our overlay component.
     */

    if (userComponent) {
      /**
       * If passing in the tag name, create
       * the element otherwise just get a reference
       * to the component.
       */
      const el = typeof userComponent === 'string' ? (_a = BaseComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(userComponent) : userComponent;
      /**
       * Add any css classes passed in
       * via the cssClasses prop on the overlay.
       */

      cssClasses.forEach(c => el.classList.add(c));
      /**
       * Add any props passed in
       * via the componentProps prop on the overlay.
       */

      Object.assign(el, userComponentProps);
      /**
       * Finally, append the component
       * inside of the overlay component.
       */

      BaseComponent.appendChild(el);
      ChildComponent = el;
      await new Promise(resolve => componentOnReady(el, resolve));
    } else if (BaseComponent.children.length > 0 && (BaseComponent.tagName === 'ION-MODAL' || BaseComponent.tagName === 'ION-POPOVER')) {
      /**
       * The delegate host wrapper el is only needed for modals and popovers
       * because they allow the dev to provide custom content to the overlay.
       */
      const root = ChildComponent = BaseComponent.children[0];

      if (!root.classList.contains('ion-delegate-host')) {
        /**
         * If the root element is not a delegate host, it means
         * that the overlay has not been presented yet and we need
         * to create the containing element with the specified classes.
         */
        const el = (_b = BaseComponent.ownerDocument) === null || _b === void 0 ? void 0 : _b.createElement('div'); // Add a class to track if the root element was created by the delegate.

        el.classList.add('ion-delegate-host');
        cssClasses.forEach(c => el.classList.add(c)); // Move each child from the original template to the new parent element.

        el.append(...BaseComponent.children); // Append the new parent element to the original parent element.

        BaseComponent.appendChild(el);
        /**
         * Update the ChildComponent to be the
         * newly created div in the event that one
         * does not already exist.
         */

        ChildComponent = el;
      }
    }
    /**
     * Get the root of the app and
     * add the overlay there.
     */


    const app = document.querySelector('ion-app') || document.body;
    /**
     * Create a placeholder comment so that
     * we can return this component to where
     * it was previously.
     */

    Reference = document.createComment('ionic teleport');
    BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
    app.appendChild(BaseComponent);
    /**
     * We return the child component rather than the overlay
     * reference itself since modal and popover will
     * use this to wait for any Ionic components in the child view
     * to be ready (i.e. componentOnReady) when using the
     * lazy loaded component bundle.
     *
     * However, we fall back to returning BaseComponent
     * in the event that a modal or popover is presented
     * with no child content.
     */

    return ChildComponent !== null && ChildComponent !== void 0 ? ChildComponent : BaseComponent;
  };

  const removeViewFromDom = () => {
    /**
     * Return component to where it was previously in the DOM.
     */
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }

    return Promise.resolve();
  };

  return {
    attachViewToDom,
    removeViewFromDom
  };
};



/***/ }),

/***/ 1824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ componentOnReady),
/* harmony export */   d: () => (/* binding */ inheritAttributes),
/* harmony export */   i: () => (/* binding */ inheritAriaAttributes),
/* harmony export */   l: () => (/* binding */ hasLazyBuild),
/* harmony export */   m: () => (/* binding */ clamp),
/* harmony export */   p: () => (/* binding */ assert),
/* harmony export */   r: () => (/* binding */ raf),
/* harmony export */   s: () => (/* binding */ shallowEqualStringMap)
/* harmony export */ });
/* unused harmony exports a, b, e, f, g, h, j, k, n, o, q, t, u, v */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const transitionEndAsync = (el, expectedDuration = 0) => {
  return new Promise(resolve => {
    transitionEnd(el, expectedDuration, resolve);
  });
};
/**
 * Allows developer to wait for a transition
 * to finish and fallback to a timer if the
 * transition is cancelled or otherwise
 * never finishes. Also see transitionEndAsync
 * which is an await-able version of this.
 */


const transitionEnd = (el, expectedDuration = 0, callback) => {
  let unRegTrans;
  let animationTimeout;
  const opts = {
    passive: true
  };
  const ANIMATION_FALLBACK_TIMEOUT = 500;

  const unregister = () => {
    if (unRegTrans) {
      unRegTrans();
    }
  };

  const onTransitionEnd = ev => {
    if (ev === undefined || el === ev.target) {
      unregister();
      callback(ev);
    }
  };

  if (el) {
    el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
    el.addEventListener('transitionend', onTransitionEnd, opts);
    animationTimeout = setTimeout(onTransitionEnd, expectedDuration + ANIMATION_FALLBACK_TIMEOUT);

    unRegTrans = () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
        animationTimeout = undefined;
      }

      el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
      el.removeEventListener('transitionend', onTransitionEnd, opts);
    };
  }

  return unregister;
};
/**
 * Waits for a component to be ready for
 * both custom element and non-custom element builds.
 * If non-custom element build, el.componentOnReady
 * will be used.
 * For custom element builds, we wait a frame
 * so that the inner contents of the component
 * have a chance to render.
 *
 * Use this utility rather than calling
 * el.componentOnReady yourself.
 */


const componentOnReady = (el, callback) => {
  if (el.componentOnReady) {
    // eslint-disable-next-line custom-rules/no-component-on-ready-method
    el.componentOnReady().then(resolvedEl => callback(resolvedEl));
  } else {
    raf(() => callback(el));
  }
};
/**
 * This functions checks if a Stencil component is using
 * the lazy loaded build of Stencil. Returns `true` if
 * the component is lazy loaded. Returns `false` otherwise.
 */


const hasLazyBuild = stencilEl => {
  return stencilEl.componentOnReady !== undefined;
};
/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `ion-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */


const inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach(attr => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);

      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }

      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
/**
 * List of available ARIA attributes + `role`.
 * Removed deprecated attributes.
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
 */


const ariaAttributes = ['role', 'aria-activedescendant', 'aria-atomic', 'aria-autocomplete', 'aria-braillelabel', 'aria-brailleroledescription', 'aria-busy', 'aria-checked', 'aria-colcount', 'aria-colindex', 'aria-colindextext', 'aria-colspan', 'aria-controls', 'aria-current', 'aria-describedby', 'aria-description', 'aria-details', 'aria-disabled', 'aria-errormessage', 'aria-expanded', 'aria-flowto', 'aria-haspopup', 'aria-hidden', 'aria-invalid', 'aria-keyshortcuts', 'aria-label', 'aria-labelledby', 'aria-level', 'aria-live', 'aria-multiline', 'aria-multiselectable', 'aria-orientation', 'aria-owns', 'aria-placeholder', 'aria-posinset', 'aria-pressed', 'aria-readonly', 'aria-relevant', 'aria-required', 'aria-roledescription', 'aria-rowcount', 'aria-rowindex', 'aria-rowindextext', 'aria-rowspan', 'aria-selected', 'aria-setsize', 'aria-sort', 'aria-valuemax', 'aria-valuemin', 'aria-valuenow', 'aria-valuetext'];
/**
 * Returns an array of aria attributes that should be copied from
 * the shadow host element to a target within the light DOM.
 * @param el The element that the attributes should be copied from.
 * @param ignoreList The list of aria-attributes to ignore reflecting and removing from the host.
 * Use this in instances where we manually specify aria attributes on the `<Host>` element.
 */

const inheritAriaAttributes = (el, ignoreList) => {
  let attributesToInherit = ariaAttributes;

  if (ignoreList && ignoreList.length > 0) {
    attributesToInherit = attributesToInherit.filter(attr => !ignoreList.includes(attr));
  }

  return inheritAttributes(el, attributesToInherit);
};

const addEventListener = (el, eventName, callback, opts) => {
  var _a;

  if (false) {}

  return el.addEventListener(eventName, callback, opts);
};

const removeEventListener = (el, eventName, callback, opts) => {
  var _a;

  if (false) {}

  return el.removeEventListener(eventName, callback, opts);
};
/**
 * Gets the root context of a shadow dom element
 * On newer browsers this will be the shadowRoot,
 * but for older browser this may just be the
 * element itself.
 *
 * Useful for whenever you need to explicitly
 * do "myElement.shadowRoot!.querySelector(...)".
 */


const getElementRoot = (el, fallback = el) => {
  return el.shadowRoot || fallback;
};
/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */


const raf = h => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(h);
  }

  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(h);
  }

  return setTimeout(h);
};

const hasShadowDom = el => {
  return !!el.shadowRoot && !!el.attachShadow;
};

const findItemLabel = componentEl => {
  const itemEl = componentEl.closest('ion-item');

  if (itemEl) {
    return itemEl.querySelector('ion-label');
  }

  return null;
};

const focusElement = el => {
  el.focus();
  /**
   * When programmatically focusing an element,
   * the focus-visible utility will not run because
   * it is expecting a keyboard event to have triggered this;
   * however, there are times when we need to manually control
   * this behavior so we call the `setFocus` method on ion-app
   * which will let us explicitly set the elements to focus.
   */

  if (el.classList.contains('ion-focusable')) {
    const app = el.closest('ion-app');

    if (app) {
      app.setFocus([el]);
    }
  }
};
/**
 * This method is used for Ionic's input components that use Shadow DOM. In
 * order to properly label the inputs to work with screen readers, we need
 * to get the text content of the label outside of the shadow root and pass
 * it to the input inside of the shadow root.
 *
 * Referencing label elements by id from outside of the component is
 * impossible due to the shadow boundary, read more here:
 * https://developer.salesforce.com/blogs/2020/01/accessibility-for-web-components.html
 *
 * @param componentEl The shadow element that needs the aria label
 * @param inputId The unique identifier for the input
 */


const getAriaLabel = (componentEl, inputId) => {
  let labelText; // If the user provides their own label via the aria-labelledby attr
  // we should use that instead of looking for an ion-label

  const labelledBy = componentEl.getAttribute('aria-labelledby'); // Grab the id off of the component in case they are using
  // a custom label using the label element

  const componentId = componentEl.id;
  let labelId = labelledBy !== null && labelledBy.trim() !== '' ? labelledBy : inputId + '-lbl';
  let label = labelledBy !== null && labelledBy.trim() !== '' ? document.getElementById(labelledBy) : findItemLabel(componentEl);

  if (label) {
    if (labelledBy === null) {
      label.id = labelId;
    }

    labelText = label.textContent;
    label.setAttribute('aria-hidden', 'true'); // if there is no label, check to see if the user has provided
    // one by setting an id on the component and using the label element
  } else if (componentId.trim() !== '') {
    label = document.querySelector(`label[for="${componentId}"]`);

    if (label) {
      if (label.id !== '') {
        labelId = label.id;
      } else {
        label.id = labelId = `${componentId}-lbl`;
      }

      labelText = label.textContent;
    }
  }

  return {
    label,
    labelId,
    labelText
  };
};
/**
 * This method is used to add a hidden input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param always Add a hidden input even if the container does not use Shadow
 * @param container The element where the input will be added
 * @param name The name of the input
 * @param value The value of the input
 * @param disabled If true, the input is disabled
 */


const renderHiddenInput = (always, container, name, value, disabled) => {
  if (always || hasShadowDom(container)) {
    let input = container.querySelector('input.aux-input');

    if (!input) {
      input = container.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.classList.add('aux-input');
      container.appendChild(input);
    }

    input.disabled = disabled;
    input.name = name;
    input.value = value || '';
  }
};

const clamp = (min, n, max) => {
  return Math.max(min, Math.min(n, max));
};

const assert = (actual, reason) => {
  if (!actual) {
    const message = 'ASSERT: ' + reason;
    console.error(message);
    debugger; // eslint-disable-line

    throw new Error(message);
  }
};

const now = ev => {
  return ev.timeStamp || Date.now();
};

const pointerCoord = ev => {
  // get X coordinates for either a mouse click
  // or a touch depending on the given event
  if (ev) {
    const changedTouches = ev.changedTouches;

    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      return {
        x: touch.clientX,
        y: touch.clientY
      };
    }

    if (ev.pageX !== undefined) {
      return {
        x: ev.pageX,
        y: ev.pageY
      };
    }
  }

  return {
    x: 0,
    y: 0
  };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */


const isEndSide = side => {
  const isRTL = document.dir === 'rtl';

  switch (side) {
    case 'start':
      return isRTL;

    case 'end':
      return !isRTL;

    default:
      throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`);
  }
};

const debounceEvent = (event, wait) => {
  const original = event._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait)
  };
};

const debounce = (func, wait = 0) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};
/**
 * Check whether the two string maps are shallow equal.
 *
 * undefined is treated as an empty map.
 *
 * @returns whether the keys are the same and the values are shallow equal.
 */


const shallowEqualStringMap = (map1, map2) => {
  map1 !== null && map1 !== void 0 ? map1 : map1 = {};
  map2 !== null && map2 !== void 0 ? map2 : map2 = {};

  if (map1 === map2) {
    return true;
  }

  const keys1 = Object.keys(map1);

  if (keys1.length !== Object.keys(map2).length) {
    return false;
  }

  for (const k1 of keys1) {
    if (!(k1 in map2)) {
      return false;
    }

    if (map1[k1] !== map2[k1]) {
      return false;
    }
  }

  return true;
};



/***/ }),

/***/ 6873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ LIFECYCLE_WILL_LEAVE),
/* harmony export */   c: () => (/* binding */ LIFECYCLE_DID_LEAVE),
/* harmony export */   d: () => (/* binding */ LIFECYCLE_WILL_UNLOAD),
/* harmony export */   g: () => (/* binding */ getIonPageElement),
/* harmony export */   l: () => (/* binding */ lifecycle),
/* harmony export */   s: () => (/* binding */ setPageHidden),
/* harmony export */   t: () => (/* binding */ transition)
/* harmony export */ });
/* unused harmony exports L, a, e, w */
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8179);
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1824);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const LIFECYCLE_WILL_ENTER = 'ionViewWillEnter';
const LIFECYCLE_DID_ENTER = 'ionViewDidEnter';
const LIFECYCLE_WILL_LEAVE = 'ionViewWillLeave';
const LIFECYCLE_DID_LEAVE = 'ionViewDidLeave';
const LIFECYCLE_WILL_UNLOAD = 'ionViewWillUnload';

const iosTransitionAnimation = () => __webpack_require__.e(/* import() */ 726).then(__webpack_require__.bind(__webpack_require__, 9726));

const mdTransitionAnimation = () => __webpack_require__.e(/* import() */ 686).then(__webpack_require__.bind(__webpack_require__, 6686)); // TODO(FW-2832): types


const transition = opts => {
  return new Promise((resolve, reject) => {
    (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .writeTask */ .Iu)(() => {
      beforeTransition(opts);
      runTransition(opts).then(result => {
        if (result.animation) {
          result.animation.destroy();
        }

        afterTransition(opts);
        resolve(result);
      }, error => {
        afterTransition(opts);
        reject(error);
      });
    });
  });
};

const beforeTransition = opts => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  setZIndex(enteringEl, leavingEl, opts.direction);

  if (opts.showGoBack) {
    enteringEl.classList.add('can-go-back');
  } else {
    enteringEl.classList.remove('can-go-back');
  }

  setPageHidden(enteringEl, false);
  /**
   * When transitioning, the page should not
   * respond to click events. This resolves small
   * issues like users double tapping the ion-back-button.
   * These pointer events are removed in `afterTransition`.
   */

  enteringEl.style.setProperty('pointer-events', 'none');

  if (leavingEl) {
    setPageHidden(leavingEl, false);
    leavingEl.style.setProperty('pointer-events', 'none');
  }
};

const runTransition = async opts => {
  const animationBuilder = await getAnimationBuilder(opts);
  const ani = animationBuilder && _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .Build */ .Z5.isBrowser ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

  return ani;
};

const afterTransition = opts => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  enteringEl.classList.remove('ion-page-invisible');
  enteringEl.style.removeProperty('pointer-events');

  if (leavingEl !== undefined) {
    leavingEl.classList.remove('ion-page-invisible');
    leavingEl.style.removeProperty('pointer-events');
  }
};

const getAnimationBuilder = async opts => {
  if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
    return undefined;
  }

  if (opts.animationBuilder) {
    return opts.animationBuilder;
  }

  const getAnimation = opts.mode === 'ios' ? (await iosTransitionAnimation()).iosTransitionAnimation : (await mdTransitionAnimation()).mdTransitionAnimation;
  return getAnimation;
};

const animation = async (animationBuilder, opts) => {
  await waitForReady(opts, true);
  const trans = animationBuilder(opts.baseEl, opts);
  fireWillEvents(opts.enteringEl, opts.leavingEl);
  const didComplete = await playTransition(trans, opts);

  if (opts.progressCallback) {
    opts.progressCallback(undefined);
  }

  if (didComplete) {
    fireDidEvents(opts.enteringEl, opts.leavingEl);
  }

  return {
    hasCompleted: didComplete,
    animation: trans
  };
};

const noAnimation = async opts => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  await waitForReady(opts, false);
  fireWillEvents(enteringEl, leavingEl);
  fireDidEvents(enteringEl, leavingEl);
  return {
    hasCompleted: true
  };
};

const waitForReady = async (opts, defaultDeep) => {
  const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;

  if (deep) {
    await Promise.all([deepReady(opts.enteringEl), deepReady(opts.leavingEl)]);
  }

  await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};

const notifyViewReady = async (viewIsReady, enteringEl) => {
  if (viewIsReady) {
    await viewIsReady(enteringEl);
  }
};

const playTransition = (trans, opts) => {
  const progressCallback = opts.progressCallback;
  const promise = new Promise(resolve => {
    trans.onFinish(currentStep => resolve(currentStep === 1));
  }); // cool, let's do this, start the transition

  if (progressCallback) {
    // this is a swipe to go back, just get the transition progress ready
    // kick off the swipe animation start
    trans.progressStart(true);
    progressCallback(trans);
  } else {
    // only the top level transition should actually start "play"
    // kick it off and let it play through
    // ******** DOM WRITE ****************
    trans.play();
  } // create a callback for when the animation is done


  return promise;
};

const fireWillEvents = (enteringEl, leavingEl) => {
  lifecycle(leavingEl, LIFECYCLE_WILL_LEAVE);
  lifecycle(enteringEl, LIFECYCLE_WILL_ENTER);
};

const fireDidEvents = (enteringEl, leavingEl) => {
  lifecycle(enteringEl, LIFECYCLE_DID_ENTER);
  lifecycle(leavingEl, LIFECYCLE_DID_LEAVE);
};

const lifecycle = (el, eventName) => {
  if (el) {
    const ev = new CustomEvent(eventName, {
      bubbles: false,
      cancelable: false
    });
    el.dispatchEvent(ev);
  }
};
/**
 * Wait two request animation frame loops.
 * This allows the framework implementations enough time to mount
 * the user-defined contents. This is often needed when using inline
 * modals and popovers that accept user components. For popover,
 * the contents must be mounted for the popover to be sized correctly.
 * For modals, the contents must be mounted for iOS to run the
 * transition correctly.
 *
 * On Angular and React, a single raf is enough time, but for Vue
 * we need to wait two rafs. As a result we are using two rafs for
 * all frameworks to ensure contents are mounted.
 */


const waitForMount = () => {
  return new Promise(resolve => raf(() => raf(() => resolve())));
};

const deepReady = async el => {
  const element = el;

  if (element) {
    if (element.componentOnReady != null) {
      // eslint-disable-next-line custom-rules/no-component-on-ready-method
      const stencilEl = await element.componentOnReady();

      if (stencilEl != null) {
        return;
      }
      /**
       * Custom elements in Stencil will have __registerHost.
       */

    } else if (element.__registerHost != null) {
      /**
       * Non-lazy loaded custom elements need to wait
       * one frame for component to be loaded.
       */
      const waitForCustomElement = new Promise(resolve => (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.r)(resolve));
      await waitForCustomElement;
      return;
    }

    await Promise.all(Array.from(element.children).map(deepReady));
  }
};

const setPageHidden = (el, hidden) => {
  if (hidden) {
    el.setAttribute('aria-hidden', 'true');
    el.classList.add('ion-page-hidden');
  } else {
    el.hidden = false;
    el.removeAttribute('aria-hidden');
    el.classList.remove('ion-page-hidden');
  }
};

const setZIndex = (enteringEl, leavingEl, direction) => {
  if (enteringEl !== undefined) {
    enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
  }

  if (leavingEl !== undefined) {
    leavingEl.style.zIndex = '100';
  }
};

const getIonPageElement = element => {
  if (element.classList.contains('ion-page')) {
    return element;
  }

  const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');

  if (ionPage) {
    return ionPage;
  } // idk, return the original element so at least something animates and we don't have a null pointer


  return element;
};



/***/ }),

/***/ 5560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ doc),
/* harmony export */   w: () => (/* binding */ win)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const win =  false ? 0 : undefined;
const doc = typeof document !== 'undefined' ? document : undefined;


/***/ }),

/***/ 2230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ printRequiredElementError),
/* harmony export */   p: () => (/* binding */ printIonWarning)
/* harmony export */ });
/* unused harmony export a */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Logs a warning to the console with an Ionic prefix
 * to indicate the library that is warning the developer.
 *
 * @param message - The string message to be logged to the console.
 */
const printIonWarning = (message, ...params) => {
  return console.warn(`[Ionic Warning]: ${message}`, ...params);
};
/*
 * Logs an error to the console with an Ionic prefix
 * to indicate the library that is warning the developer.
 *
 * @param message - The string message to be logged to the console.
 * @param params - Additional arguments to supply to the console.error.
 */


const printIonError = (message, ...params) => {
  return console.error(`[Ionic Error]: ${message}`, ...params);
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within a specific selector.
 *
 * @param el The web component element this is requiring the element.
 * @param targetSelectors The selector or selectors that were not found.
 */


const printRequiredElementError = (el, ...targetSelectors) => {
  return console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(' or ')}.`);
};



/***/ }),

/***/ 4849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ defineCustomElement)
});

// UNUSED EXPORTS: IonHeader

// EXTERNAL MODULE: ./node_modules/@stencil/core/internal/client/index.js
var client = __webpack_require__(8179);
// EXTERNAL MODULE: ./node_modules/@ionic/core/components/helpers.js
var helpers = __webpack_require__(1824);
// EXTERNAL MODULE: ./node_modules/@ionic/core/components/index6.js
var index6 = __webpack_require__(2230);
;// CONCATENATED MODULE: ./node_modules/@ionic/core/components/index8.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const ION_CONTENT_TAG_NAME = 'ION-CONTENT';
const ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
const ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */

const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;

const isIonContent = el => el.tagName === ION_CONTENT_TAG_NAME;
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */


const getScrollElement = async el => {
  if (isIonContent(el)) {
    await new Promise(resolve => (0,helpers.c)(el, resolve));
    return el.getScrollElement();
  }

  return el;
};
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */


const findIonContent = el => {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);

  if (customContentHost) {
    return customContentHost;
  }

  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */


const findClosestIonContent = el => {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */


const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }

  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */


const scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }

  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */


const printIonContentErrorMsg = el => {
  return (0,index6.b)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */


const disableContentScrollY = contentEl => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */

    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};

const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};


// EXTERNAL MODULE: ./node_modules/@ionic/core/components/theme.js
var theme = __webpack_require__(8343);
// EXTERNAL MODULE: ./node_modules/@ionic/core/components/ionic-global.js
var ionic_global = __webpack_require__(3790);
;// CONCATENATED MODULE: ./node_modules/@ionic/core/components/ion-header.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const TRANSITION = 'all 0.2s ease-in-out';

const cloneElement = tagName => {
  const getCachedEl = document.querySelector(`${tagName}.ion-cloned-element`);

  if (getCachedEl !== null) {
    return getCachedEl;
  }

  const clonedEl = document.createElement(tagName);
  clonedEl.classList.add('ion-cloned-element');
  clonedEl.style.setProperty('display', 'none');
  document.body.appendChild(clonedEl);
  return clonedEl;
};

const createHeaderIndex = headerEl => {
  if (!headerEl) {
    return;
  }

  const toolbars = headerEl.querySelectorAll('ion-toolbar');
  return {
    el: headerEl,
    toolbars: Array.from(toolbars).map(toolbar => {
      const ionTitleEl = toolbar.querySelector('ion-title');
      return {
        el: toolbar,
        background: toolbar.shadowRoot.querySelector('.toolbar-background'),
        ionTitleEl,
        innerTitleEl: ionTitleEl ? ionTitleEl.shadowRoot.querySelector('.toolbar-title') : null,
        ionButtonsEl: Array.from(toolbar.querySelectorAll('ion-buttons'))
      };
    })
  };
};

const handleContentScroll = (scrollEl, scrollHeaderIndex, contentEl) => {
  (0,client/* readTask */.wj)(() => {
    const scrollTop = scrollEl.scrollTop;
    const scale = (0,helpers.m)(1, 1 + -scrollTop / 500, 1.1); // Native refresher should not cause titles to scale

    const nativeRefresher = contentEl.querySelector('ion-refresher.refresher-native');

    if (nativeRefresher === null) {
      (0,client/* writeTask */.Iu)(() => {
        scaleLargeTitles(scrollHeaderIndex.toolbars, scale);
      });
    }
  });
};

const setToolbarBackgroundOpacity = (headerEl, opacity) => {
  /**
   * Fading in the backdrop opacity
   * should happen after the large title
   * has collapsed, so it is handled
   * by handleHeaderFade()
   */
  if (headerEl.collapse === 'fade') {
    return;
  }

  if (opacity === undefined) {
    headerEl.style.removeProperty('--opacity-scale');
  } else {
    headerEl.style.setProperty('--opacity-scale', opacity.toString());
  }
};

const handleToolbarBorderIntersection = (ev, mainHeaderIndex, scrollTop) => {
  if (!ev[0].isIntersecting) {
    return;
  }
  /**
   * There is a bug in Safari where overflow scrolling on a non-body element
   * does not always reset the scrollTop position to 0 when letting go. It will
   * set to 1 once the rubber band effect has ended. This causes the background to
   * appear slightly on certain app setups.
   *
   * Additionally, we check if user is rubber banding (scrolling is negative)
   * as this can mean they are using pull to refresh. Once the refresher starts,
   * the content is transformed which can cause the intersection observer to erroneously
   * fire here as well.
   */


  const scale = ev[0].intersectionRatio > 0.9 || scrollTop <= 0 ? 0 : (1 - ev[0].intersectionRatio) * 100 / 75;
  setToolbarBackgroundOpacity(mainHeaderIndex.el, scale === 1 ? undefined : scale);
};
/**
 * If toolbars are intersecting, hide the scrollable toolbar content
 * and show the primary toolbar content. If the toolbars are not intersecting,
 * hide the primary toolbar content and show the scrollable toolbar content
 */


const handleToolbarIntersection = (ev, // TODO(FW-2832): type (IntersectionObserverEntry[] triggers errors which should be sorted)
mainHeaderIndex, scrollHeaderIndex, scrollEl) => {
  (0,client/* writeTask */.Iu)(() => {
    const scrollTop = scrollEl.scrollTop;
    handleToolbarBorderIntersection(ev, mainHeaderIndex, scrollTop);
    const event = ev[0];
    const intersection = event.intersectionRect;
    const intersectionArea = intersection.width * intersection.height;
    const rootArea = event.rootBounds.width * event.rootBounds.height;
    const isPageHidden = intersectionArea === 0 && rootArea === 0;
    const leftDiff = Math.abs(intersection.left - event.boundingClientRect.left);
    const rightDiff = Math.abs(intersection.right - event.boundingClientRect.right);
    const isPageTransitioning = intersectionArea > 0 && (leftDiff >= 5 || rightDiff >= 5);

    if (isPageHidden || isPageTransitioning) {
      return;
    }

    if (event.isIntersecting) {
      setHeaderActive(mainHeaderIndex, false);
      setHeaderActive(scrollHeaderIndex);
    } else {
      /**
       * There is a bug with IntersectionObserver on Safari
       * where `event.isIntersecting === false` when cancelling
       * a swipe to go back gesture. Checking the intersection
       * x, y, width, and height provides a workaround. This bug
       * does not happen when using Safari + Web Animations,
       * only Safari + CSS Animations.
       */
      const hasValidIntersection = intersection.x === 0 && intersection.y === 0 || intersection.width !== 0 && intersection.height !== 0;

      if (hasValidIntersection && scrollTop > 0) {
        setHeaderActive(mainHeaderIndex);
        setHeaderActive(scrollHeaderIndex, false);
        setToolbarBackgroundOpacity(mainHeaderIndex.el);
      }
    }
  });
};

const setHeaderActive = (headerIndex, active = true) => {
  const headerEl = headerIndex.el;

  if (active) {
    headerEl.classList.remove('header-collapse-condense-inactive');
    headerEl.removeAttribute('aria-hidden');
  } else {
    headerEl.classList.add('header-collapse-condense-inactive');
    headerEl.setAttribute('aria-hidden', 'true');
  }
};

const scaleLargeTitles = (toolbars = [], scale = 1, transition = false) => {
  toolbars.forEach(toolbar => {
    const ionTitle = toolbar.ionTitleEl;
    const titleDiv = toolbar.innerTitleEl;

    if (!ionTitle || ionTitle.size !== 'large') {
      return;
    }

    titleDiv.style.transition = transition ? TRANSITION : '';
    titleDiv.style.transform = `scale3d(${scale}, ${scale}, 1)`;
  });
};

const handleHeaderFade = (scrollEl, baseEl, condenseHeader) => {
  (0,client/* readTask */.wj)(() => {
    const scrollTop = scrollEl.scrollTop;
    const baseElHeight = baseEl.clientHeight;
    const fadeStart = condenseHeader ? condenseHeader.clientHeight : 0;
    /**
     * If we are using fade header with a condense
     * header, then the toolbar backgrounds should
     * not begin to fade in until the condense
     * header has fully collapsed.
     *
     * Additionally, the main content should not
     * overflow out of the container until the
     * condense header has fully collapsed. When
     * using just the condense header the content
     * should overflow out of the container.
     */

    if (condenseHeader !== null && scrollTop < fadeStart) {
      baseEl.style.setProperty('--opacity-scale', '0');
      scrollEl.style.setProperty('clip-path', `inset(${baseElHeight}px 0px 0px 0px)`);
      return;
    }

    const distanceToStart = scrollTop - fadeStart;
    const fadeDuration = 10;
    const scale = (0,helpers.m)(0, distanceToStart / fadeDuration, 1);
    (0,client/* writeTask */.Iu)(() => {
      scrollEl.style.removeProperty('clip-path');
      baseEl.style.setProperty('--opacity-scale', scale.toString());
    });
  });
};

const headerIosCss = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:0px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}ion-header:not(.header-collapse-main):has(~ion-content ion-header[collapse=condense],~ion-content ion-header.header-collapse-condense){opacity:0}";
const headerMdCss = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}";
const Header = /*@__PURE__*/(0,client/* proxyCustomElement */.GH)(class Header extends client/* HTMLElement */.mv {
  constructor() {
    super();

    this.__registerHost();

    this.inheritedAttributes = {};

    this.setupFadeHeader = async (contentEl, condenseHeader) => {
      const scrollEl = this.scrollEl = await getScrollElement(contentEl);
      /**
       * Handle fading of toolbars on scroll
       */

      this.contentScrollCallback = () => {
        handleHeaderFade(this.scrollEl, this.el, condenseHeader);
      };

      scrollEl.addEventListener('scroll', this.contentScrollCallback);
      handleHeaderFade(this.scrollEl, this.el, condenseHeader);
    };

    this.collapse = undefined;
    this.translucent = false;
  }

  componentWillLoad() {
    this.inheritedAttributes = (0,helpers.i)(this.el);
  }

  componentDidLoad() {
    this.checkCollapsibleHeader();
  }

  componentDidUpdate() {
    this.checkCollapsibleHeader();
  }

  disconnectedCallback() {
    this.destroyCollapsibleHeader();
  }

  async checkCollapsibleHeader() {
    const mode = (0,ionic_global.b)(this);

    if (mode !== 'ios') {
      return;
    }

    const {
      collapse
    } = this;
    const hasCondense = collapse === 'condense';
    const hasFade = collapse === 'fade';
    this.destroyCollapsibleHeader();

    if (hasCondense) {
      const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
      const contentEl = pageEl ? findIonContent(pageEl) : null; // Cloned elements are always needed in iOS transition

      (0,client/* writeTask */.Iu)(() => {
        const title = cloneElement('ion-title');
        title.size = 'large';
        cloneElement('ion-back-button');
      });
      await this.setupCondenseHeader(contentEl, pageEl);
    } else if (hasFade) {
      const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
      const contentEl = pageEl ? findIonContent(pageEl) : null;

      if (!contentEl) {
        printIonContentErrorMsg(this.el);
        return;
      }

      const condenseHeader = contentEl.querySelector('ion-header[collapse="condense"]');
      await this.setupFadeHeader(contentEl, condenseHeader);
    }
  }

  destroyCollapsibleHeader() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = undefined;
    }

    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener('scroll', this.contentScrollCallback);
      this.contentScrollCallback = undefined;
    }

    if (this.collapsibleMainHeader) {
      this.collapsibleMainHeader.classList.remove('header-collapse-main');
      this.collapsibleMainHeader = undefined;
    }
  }

  async setupCondenseHeader(contentEl, pageEl) {
    if (!contentEl || !pageEl) {
      printIonContentErrorMsg(this.el);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.scrollEl = await getScrollElement(contentEl);
    const headers = pageEl.querySelectorAll('ion-header');
    this.collapsibleMainHeader = Array.from(headers).find(header => header.collapse !== 'condense');

    if (!this.collapsibleMainHeader) {
      return;
    }

    const mainHeaderIndex = createHeaderIndex(this.collapsibleMainHeader);
    const scrollHeaderIndex = createHeaderIndex(this.el);

    if (!mainHeaderIndex || !scrollHeaderIndex) {
      return;
    }

    setHeaderActive(mainHeaderIndex, false);
    setToolbarBackgroundOpacity(mainHeaderIndex.el, 0);
    /**
     * Handle interaction between toolbar collapse and
     * showing/hiding content in the primary ion-header
     * as well as progressively showing/hiding the main header
     * border as the top-most toolbar collapses or expands.
     */

    const toolbarIntersection = ev => {
      handleToolbarIntersection(ev, mainHeaderIndex, scrollHeaderIndex, this.scrollEl);
    };

    this.intersectionObserver = new IntersectionObserver(toolbarIntersection, {
      root: contentEl,
      threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });
    this.intersectionObserver.observe(scrollHeaderIndex.toolbars[scrollHeaderIndex.toolbars.length - 1].el);
    /**
     * Handle scaling of large iOS titles and
     * showing/hiding border on last toolbar
     * in primary header
     */

    this.contentScrollCallback = () => {
      handleContentScroll(this.scrollEl, scrollHeaderIndex, contentEl);
    };

    this.scrollEl.addEventListener('scroll', this.contentScrollCallback);
    (0,client/* writeTask */.Iu)(() => {
      if (this.collapsibleMainHeader !== undefined) {
        this.collapsibleMainHeader.classList.add('header-collapse-main');
      }
    });
  }

  render() {
    const {
      translucent,
      inheritedAttributes
    } = this;
    const mode = (0,ionic_global.b)(this);
    const collapse = this.collapse || 'none'; // banner role must be at top level, so remove role if inside a menu

    const roleType = (0,theme.h)('ion-menu', this.el) ? 'none' : 'banner';
    return (0,client.h)(client/* Host */.AA, Object.assign({
      role: roleType,
      class: {
        [mode]: true,
        // Used internally for styling
        [`header-${mode}`]: true,
        [`header-translucent`]: this.translucent,
        [`header-collapse-${collapse}`]: true,
        [`header-translucent-${mode}`]: this.translucent
      }
    }, inheritedAttributes), mode === 'ios' && translucent && (0,client.h)("div", {
      class: "header-background"
    }), (0,client.h)("slot", null));
  }

  get el() {
    return this;
  }

  static get style() {
    return {
      ios: headerIosCss,
      md: headerMdCss
    };
  }

}, [36, "ion-header", {
  "collapse": [1],
  "translucent": [4]
}]);

function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }

  const components = ["ion-header"];
  components.forEach(tagName => {
    switch (tagName) {
      case "ion-header":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Header);
        }

        break;
    }
  });
}

const IonHeader = (/* unused pure expression or super */ null && (Header));
const defineCustomElement = defineCustomElement$1;


/***/ }),

/***/ 8732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* unused harmony export IonNav */
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8179);
/* harmony import */ var _cubic_bezier_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1154);
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1824);
/* harmony import */ var _index6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2230);
/* harmony import */ var _index2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6873);
/* harmony import */ var _ionic_global_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3790);
/* harmony import */ var _framework_delegate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5477);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */







const VIEW_STATE_NEW = 1;
const VIEW_STATE_ATTACHED = 2;
const VIEW_STATE_DESTROYED = 3; // TODO(FW-2832): types

class ViewController {
  constructor(component, params) {
    this.component = component;
    this.params = params;
    this.state = VIEW_STATE_NEW;
  }

  async init(container) {
    this.state = VIEW_STATE_ATTACHED;

    if (!this.element) {
      const component = this.component;
      this.element = await (0,_framework_delegate_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.delegate, container, component, ['ion-page', 'ion-page-invisible'], this.params);
    }
  }
  /**
   * DOM WRITE
   */


  _destroy() {
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.p)(this.state !== VIEW_STATE_DESTROYED, 'view state must be ATTACHED');
    const element = this.element;

    if (element) {
      if (this.delegate) {
        this.delegate.removeViewFromDom(element.parentElement, element);
      } else {
        element.remove();
      }
    }

    this.nav = undefined;
    this.state = VIEW_STATE_DESTROYED;
  }

}

const matches = (view, id, params) => {
  if (!view) {
    return false;
  }

  if (view.component !== id) {
    return false;
  }

  return (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.s)(view.params, params);
};

const convertToView = (page, params) => {
  if (!page) {
    return null;
  }

  if (page instanceof ViewController) {
    return page;
  }

  return new ViewController(page, params);
};

const convertToViews = pages => {
  return pages.map(page => {
    if (page instanceof ViewController) {
      return page;
    }

    if ('component' in page) {
      return convertToView(page.component, page.componentProps === null ? undefined : page.componentProps);
    }

    return convertToView(page, undefined);
  }).filter(v => v !== null);
};

const navCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";
const Nav = /*@__PURE__*/(0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__/* .proxyCustomElement */ .GH)(class Nav extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__/* .HTMLElement */ .mv {
  constructor() {
    super();

    this.__registerHost();

    this.__attachShadow();

    this.ionNavWillLoad = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__/* .createEvent */ .yM)(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__/* .createEvent */ .yM)(this, "ionNavWillChange", 3);
    this.ionNavDidChange = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__/* .createEvent */ .yM)(this, "ionNavDidChange", 3);
    this.transInstr = [];
    this.gestureOrAnimationInProgress = false;
    this.useRouter = false;
    this.isTransitioning = false;
    this.destroyed = false;
    this.views = [];
    this.didLoad = false;
    this.delegate = undefined;
    this.swipeGesture = undefined;
    this.animated = true;
    this.animation = undefined;
    this.rootParams = undefined;
    this.root = undefined;
  }

  swipeGestureChanged() {
    if (this.gesture) {
      this.gesture.enable(this.swipeGesture === true);
    }
  }

  rootChanged() {
    const isDev = _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__/* .Build */ .Z5.isDev;

    if (this.root === undefined) {
      return;
    }

    if (this.didLoad === false) {
      /**
       * If the component has not loaded yet, we can skip setting up the root component.
       * It will be called when `componentDidLoad` fires.
       */
      return;
    }

    if (!this.useRouter) {
      if (this.root !== undefined) {
        this.setRoot(this.root, this.rootParams);
      }
    } else if (isDev) {
      (0,_index6_js__WEBPACK_IMPORTED_MODULE_3__.p)('<ion-nav> does not support a root attribute when using ion-router.', this.el);
    }
  }

  componentWillLoad() {
    this.useRouter = document.querySelector('ion-router') !== null && this.el.closest('[no-router]') === null;

    if (this.swipeGesture === undefined) {
      const mode = (0,_ionic_global_js__WEBPACK_IMPORTED_MODULE_4__.b)(this);
      this.swipeGesture = _ionic_global_js__WEBPACK_IMPORTED_MODULE_4__.c.getBoolean('swipeBackEnabled', mode === 'ios');
    }

    this.ionNavWillLoad.emit();
  }

  async componentDidLoad() {
    // We want to set this flag before any watch callbacks are manually called
    this.didLoad = true;
    this.rootChanged();
    this.gesture = (await __webpack_require__.e(/* import() */ 397).then(__webpack_require__.bind(__webpack_require__, 5397))).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
    this.swipeGestureChanged();
  }

  connectedCallback() {
    this.destroyed = false;
  }

  disconnectedCallback() {
    for (const view of this.views) {
      (0,_index2_js__WEBPACK_IMPORTED_MODULE_5__.l)(view.element, _index2_js__WEBPACK_IMPORTED_MODULE_5__.d);

      view._destroy();
    } // Release swipe back gesture and transition.


    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }

    this.transInstr.length = 0;
    this.views.length = 0;
    this.destroyed = true;
  }
  /**
   * Push a new component onto the current navigation stack. Pass any additional
   * information along as an object. This additional information is accessible
   * through NavParams.
   *
   * @param component The component to push onto the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */


  push(component, componentProps, opts, done) {
    return this.insert(-1, component, componentProps, opts, done);
  }
  /**
   * Inserts a component into the navigation stack at the specified index.
   * This is useful to add a component at any point in the navigation stack.
   *
   * @param insertIndex The index to insert the component at in the stack.
   * @param component The component to insert into the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */


  insert(insertIndex, component, componentProps, opts, done) {
    return this.insertPages(insertIndex, [{
      component,
      componentProps
    }], opts, done);
  }
  /**
   * Inserts an array of components into the navigation stack at the specified index.
   * The last component in the array will become instantiated as a view, and animate
   * in to become the active view.
   *
   * @param insertIndex The index to insert the components at in the stack.
   * @param insertComponents The components to insert into the navigation stack.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */


  insertPages(insertIndex, insertComponents, opts, done) {
    return this.queueTrns({
      insertStart: insertIndex,
      insertViews: insertComponents,
      opts
    }, done);
  }
  /**
   * Pop a component off of the navigation stack. Navigates back from the current
   * component.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */


  pop(opts, done) {
    return this.removeIndex(-1, 1, opts, done);
  }
  /**
   * Pop to a specific index in the navigation stack.
   *
   * @param indexOrViewCtrl The index or view controller to pop to.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */


  popTo(indexOrViewCtrl, opts, done) {
    const ti = {
      removeStart: -1,
      removeCount: -1,
      opts
    };

    if (typeof indexOrViewCtrl === 'object' && indexOrViewCtrl.component) {
      ti.removeView = indexOrViewCtrl;
      ti.removeStart = 1;
    } else if (typeof indexOrViewCtrl === 'number') {
      ti.removeStart = indexOrViewCtrl + 1;
    }

    return this.queueTrns(ti, done);
  }
  /**
   * Navigate back to the root of the stack, no matter how far back that is.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */


  popToRoot(opts, done) {
    return this.removeIndex(1, -1, opts, done);
  }
  /**
   * Removes a component from the navigation stack at the specified index.
   *
   * @param startIndex The number to begin removal at.
   * @param removeCount The number of components to remove.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */


  removeIndex(startIndex, removeCount = 1, opts, done) {
    return this.queueTrns({
      removeStart: startIndex,
      removeCount,
      opts
    }, done);
  }
  /**
   * Set the root for the current navigation stack to a component.
   *
   * @param component The component to set as the root of the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */


  setRoot(component, componentProps, opts, done) {
    return this.setPages([{
      component,
      componentProps
    }], opts, done);
  }
  /**
   * Set the views of the current navigation stack and navigate to the last view.
   * By default animations are disabled, but they can be enabled by passing options
   * to the navigation controller. Navigation parameters can also be passed to the
   * individual pages in the array.
   *
   * @param views The list of views to set as the navigation stack.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */


  setPages(views, opts, done) {
    opts !== null && opts !== void 0 ? opts : opts = {}; // if animation wasn't set to true then default it to NOT animate

    if (opts.animated !== true) {
      opts.animated = false;
    }

    return this.queueTrns({
      insertStart: 0,
      insertViews: views,
      removeStart: 0,
      removeCount: -1,
      opts
    }, done);
  }
  /**
   * Called by the router to update the view.
   *
   * @param id The component tag.
   * @param params The component params.
   * @param direction A direction hint.
   * @param animation an AnimationBuilder.
   *
   * @return the status.
   * @internal
   */


  setRouteId(id, params, direction, animation) {
    const active = this.getActiveSync();

    if (matches(active, id, params)) {
      return Promise.resolve({
        changed: false,
        element: active.element
      });
    }

    let resolve;
    const promise = new Promise(r => resolve = r);
    let finish;
    const commonOpts = {
      updateURL: false,
      viewIsReady: enteringEl => {
        let mark;
        const p = new Promise(r => mark = r);
        resolve({
          changed: true,
          element: enteringEl,
          markVisible: async () => {
            mark();
            await finish;
          }
        });
        return p;
      }
    };

    if (direction === 'root') {
      finish = this.setRoot(id, params, commonOpts);
    } else {
      // Look for a view matching the target in the view stack.
      const viewController = this.views.find(v => matches(v, id, params));

      if (viewController) {
        finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), {
          direction: 'back',
          animationBuilder: animation
        }));
      } else if (direction === 'forward') {
        finish = this.push(id, params, Object.assign(Object.assign({}, commonOpts), {
          animationBuilder: animation
        }));
      } else if (direction === 'back') {
        finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), {
          direction: 'back',
          animated: true,
          animationBuilder: animation
        }));
      }
    }

    return promise;
  }
  /**
   * Called by <ion-router> to retrieve the current component.
   *
   * @internal
   */


  async getRouteId() {
    const active = this.getActiveSync();

    if (active) {
      return {
        id: active.element.tagName,
        params: active.params,
        element: active.element
      };
    }

    return undefined;
  }
  /**
   * Get the active view.
   */


  async getActive() {
    return this.getActiveSync();
  }
  /**
   * Get the view at the specified index.
   *
   * @param index The index of the view.
   */


  async getByIndex(index) {
    return this.views[index];
  }
  /**
   * Returns `true` if the current view can go back.
   *
   * @param view The view to check.
   */


  async canGoBack(view) {
    return this.canGoBackSync(view);
  }
  /**
   * Get the previous view.
   *
   * @param view The view to get.
   */


  async getPrevious(view) {
    return this.getPreviousSync(view);
  }

  getLength() {
    return this.views.length;
  }

  getActiveSync() {
    return this.views[this.views.length - 1];
  }

  canGoBackSync(view = this.getActiveSync()) {
    return !!(view && this.getPreviousSync(view));
  }

  getPreviousSync(view = this.getActiveSync()) {
    if (!view) {
      return undefined;
    }

    const views = this.views;
    const index = views.indexOf(view);
    return index > 0 ? views[index - 1] : undefined;
  }
  /**
   * Adds a navigation stack change to the queue and schedules it to run.
   *
   * @returns Whether the transition succeeds.
   */


  async queueTrns(ti, done) {
    var _a, _b;

    if (this.isTransitioning && ((_a = ti.opts) === null || _a === void 0 ? void 0 : _a.skipIfBusy)) {
      return false;
    }

    const promise = new Promise((resolve, reject) => {
      ti.resolve = resolve;
      ti.reject = reject;
    });
    ti.done = done;
    /**
     * If using router, check to see if navigation hooks
     * will allow us to perform this transition. This
     * is required in order for hooks to work with
     * the ion-back-button or swipe to go back.
     */

    if (ti.opts && ti.opts.updateURL !== false && this.useRouter) {
      const router = document.querySelector('ion-router');

      if (router) {
        const canTransition = await router.canTransition();

        if (canTransition === false) {
          return false;
        }

        if (typeof canTransition === 'string') {
          router.push(canTransition, ti.opts.direction || 'back');
          return false;
        }
      }
    } // Normalize empty


    if (((_b = ti.insertViews) === null || _b === void 0 ? void 0 : _b.length) === 0) {
      ti.insertViews = undefined;
    } // Enqueue transition instruction


    this.transInstr.push(ti); // if there isn't a transition already happening
    // then this will kick off this transition

    this.nextTrns();
    return promise;
  }

  success(result, ti) {
    if (this.destroyed) {
      this.fireError('nav controller was destroyed', ti);
      return;
    }

    if (ti.done) {
      ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
    }

    ti.resolve(result.hasCompleted);

    if (ti.opts.updateURL !== false && this.useRouter) {
      const router = document.querySelector('ion-router');

      if (router) {
        const direction = result.direction === 'back' ? 'back' : 'forward';
        router.navChanged(direction);
      }
    }
  }

  failed(rejectReason, ti) {
    if (this.destroyed) {
      this.fireError('nav controller was destroyed', ti);
      return;
    }

    this.transInstr.length = 0;
    this.fireError(rejectReason, ti);
  }

  fireError(rejectReason, ti) {
    if (ti.done) {
      ti.done(false, false, rejectReason);
    }

    if (ti.reject && !this.destroyed) {
      ti.reject(rejectReason);
    } else {
      ti.resolve(false);
    }
  }
  /**
   * Consumes the next transition in the queue.
   *
   * @returns whether the transition is executed.
   */


  nextTrns() {
    // this is the framework's bread 'n butta function
    // only one transition is allowed at any given time
    if (this.isTransitioning) {
      return false;
    } // there is no transition happening right now, executes the next instructions.


    const ti = this.transInstr.shift();

    if (!ti) {
      return false;
    }

    this.runTransition(ti);
    return true;
  }
  /** Executes all the transition instruction from the queue. */


  async runTransition(ti) {
    try {
      // set that this nav is actively transitioning
      this.ionNavWillChange.emit();
      this.isTransitioning = true;
      this.prepareTI(ti);
      const leavingView = this.getActiveSync();
      const enteringView = this.getEnteringView(ti, leavingView);

      if (!leavingView && !enteringView) {
        throw new Error('no views in the stack to be removed');
      }

      if (enteringView && enteringView.state === VIEW_STATE_NEW) {
        await enteringView.init(this.el);
      }

      this.postViewInit(enteringView, leavingView, ti); // Needs transition?

      const requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;

      if (requiresTransition && ti.opts && leavingView) {
        const isBackDirection = ti.opts.direction === 'back';
        /**
         * If heading back, use the entering page's animation
         * unless otherwise specified by the developer.
         */

        if (isBackDirection) {
          ti.opts.animationBuilder = ti.opts.animationBuilder || (enteringView === null || enteringView === void 0 ? void 0 : enteringView.animationBuilder);
        }

        leavingView.animationBuilder = ti.opts.animationBuilder;
      }

      let result;

      if (requiresTransition) {
        result = await this.transition(enteringView, leavingView, ti);
      } else {
        // transition is not required, so we are already done!
        // they're inserting/removing the views somewhere in the middle or
        // beginning, so visually nothing needs to animate/transition
        // resolve immediately because there's no animation that's happening
        result = {
          hasCompleted: true,
          requiresTransition: false
        };
      }

      this.success(result, ti);
      this.ionNavDidChange.emit();
    } catch (rejectReason) {
      this.failed(rejectReason, ti);
    }

    this.isTransitioning = false;
    this.nextTrns();
  }

  prepareTI(ti) {
    var _a, _b;

    var _c;

    const viewsLength = this.views.length;
    (_a = ti.opts) !== null && _a !== void 0 ? _a : ti.opts = {};
    (_b = (_c = ti.opts).delegate) !== null && _b !== void 0 ? _b : _c.delegate = this.delegate;

    if (ti.removeView !== undefined) {
      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.p)(ti.removeStart !== undefined, 'removeView needs removeStart');
      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.p)(ti.removeCount !== undefined, 'removeView needs removeCount');
      const index = this.views.indexOf(ti.removeView);

      if (index < 0) {
        throw new Error('removeView was not found');
      }

      ti.removeStart += index;
    }

    if (ti.removeStart !== undefined) {
      if (ti.removeStart < 0) {
        ti.removeStart = viewsLength - 1;
      }

      if (ti.removeCount < 0) {
        ti.removeCount = viewsLength - ti.removeStart;
      }

      ti.leavingRequiresTransition = ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
    }

    if (ti.insertViews) {
      // allow -1 to be passed in to auto push it on the end
      // and clean up the index if it's larger then the size of the stack
      if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
        ti.insertStart = viewsLength;
      }

      ti.enteringRequiresTransition = ti.insertStart === viewsLength;
    }

    const insertViews = ti.insertViews;

    if (!insertViews) {
      return;
    }

    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.p)(insertViews.length > 0, 'length can not be zero');
    const viewControllers = convertToViews(insertViews);

    if (viewControllers.length === 0) {
      throw new Error('invalid views to insert');
    } // Check all the inserted view are correct


    for (const view of viewControllers) {
      view.delegate = ti.opts.delegate;
      const nav = view.nav;

      if (nav && nav !== this) {
        throw new Error('inserted view was already inserted');
      }

      if (view.state === VIEW_STATE_DESTROYED) {
        throw new Error('inserted view was already destroyed');
      }
    }

    ti.insertViews = viewControllers;
  }
  /**
   * Returns the view that will be entered considering the transition instructions.
   *
   * @param ti The instructions.
   * @param leavingView The view being left or undefined if none.
   *
   * @returns The view that will be entered, undefined if none.
   */


  getEnteringView(ti, leavingView) {
    // The last inserted view will be entered when view are inserted.
    const insertViews = ti.insertViews;

    if (insertViews !== undefined) {
      return insertViews[insertViews.length - 1];
    } // When views are deleted, we will enter the last view that is not removed and not the view being left.


    const removeStart = ti.removeStart;

    if (removeStart !== undefined) {
      const views = this.views;
      const removeEnd = removeStart + ti.removeCount;

      for (let i = views.length - 1; i >= 0; i--) {
        const view = views[i];

        if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
          return view;
        }
      }
    }

    return undefined;
  }
  /**
   * Adds and Removes the views from the navigation stack.
   *
   * @param enteringView The view being entered.
   * @param leavingView The view being left.
   * @param ti The instructions.
   */


  postViewInit(enteringView, leavingView, ti) {
    var _a, _b, _c;

    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.p)(leavingView || enteringView, 'Both leavingView and enteringView are null');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.p)(ti.resolve, 'resolve must be valid');
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.p)(ti.reject, 'reject must be valid'); // Compute the views to remove.

    const opts = ti.opts;
    const {
      insertViews,
      removeStart,
      removeCount
    } = ti;
    /** Records the view to destroy */

    let destroyQueue; // there are views to remove

    if (removeStart !== undefined && removeCount !== undefined) {
      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.p)(removeStart >= 0, 'removeStart can not be negative');
      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.p)(removeCount >= 0, 'removeCount can not be negative');
      destroyQueue = [];

      for (let i = removeStart; i < removeStart + removeCount; i++) {
        const view = this.views[i];

        if (view !== undefined && view !== enteringView && view !== leavingView) {
          destroyQueue.push(view);
        }
      } // default the direction to "back"


      (_a = opts.direction) !== null && _a !== void 0 ? _a : opts.direction = 'back';
    }

    const finalNumViews = this.views.length + ((_b = insertViews === null || insertViews === void 0 ? void 0 : insertViews.length) !== null && _b !== void 0 ? _b : 0) - (removeCount !== null && removeCount !== void 0 ? removeCount : 0);
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.p)(finalNumViews >= 0, 'final balance can not be negative');

    if (finalNumViews === 0) {
      console.warn(`You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`, this, this.el);
      throw new Error('navigation stack needs at least one root page');
    } // At this point the transition can not be rejected, any throw should be an error
    // Insert the new views in the stack.


    if (insertViews) {
      // add the views to the
      let insertIndex = ti.insertStart;

      for (const view of insertViews) {
        this.insertViewAt(view, insertIndex);
        insertIndex++;
      }

      if (ti.enteringRequiresTransition) {
        // default to forward if not already set
        (_c = opts.direction) !== null && _c !== void 0 ? _c : opts.direction = 'forward';
      }
    } // if the views to be removed are in the beginning or middle
    // and there is not a view that needs to visually transition out
    // then just destroy them and don't transition anything
    // batch all of lifecycles together
    // let's make sure, callbacks are zoned


    if (destroyQueue && destroyQueue.length > 0) {
      for (const view of destroyQueue) {
        (0,_index2_js__WEBPACK_IMPORTED_MODULE_5__.l)(view.element, _index2_js__WEBPACK_IMPORTED_MODULE_5__.b);
        (0,_index2_js__WEBPACK_IMPORTED_MODULE_5__.l)(view.element, _index2_js__WEBPACK_IMPORTED_MODULE_5__.c);
        (0,_index2_js__WEBPACK_IMPORTED_MODULE_5__.l)(view.element, _index2_js__WEBPACK_IMPORTED_MODULE_5__.d);
      } // once all lifecycle events has been delivered, we can safely detroy the views


      for (const view of destroyQueue) {
        this.destroyView(view);
      }
    }
  }

  async transition(enteringView, leavingView, ti) {
    // we should animate (duration > 0) if the pushed page is not the first one (startup)
    // or if it is a portal (modal, actionsheet, etc.)
    const opts = ti.opts;
    const progressCallback = opts.progressAnimation ? ani => {
      /**
       * Because this progress callback is called asynchronously
       * it is possible for the gesture to start and end before
       * the animation is ever set. In that scenario, we should
       * immediately call progressEnd so that the transition promise
       * resolves and the gesture does not get locked up.
       */
      if (ani !== undefined && !this.gestureOrAnimationInProgress) {
        this.gestureOrAnimationInProgress = true;
        ani.onFinish(() => {
          this.gestureOrAnimationInProgress = false;
        }, {
          oneTimeCallback: true
        });
        /**
         * Playing animation to beginning
         * with a duration of 0 prevents
         * any flickering when the animation
         * is later cleaned up.
         */

        ani.progressEnd(0, 0, 0);
      } else {
        this.sbAni = ani;
      }
    } : undefined;
    const mode = (0,_ionic_global_js__WEBPACK_IMPORTED_MODULE_4__.b)(this);
    const enteringEl = enteringView.element; // eslint-disable-next-line @typescript-eslint/prefer-optional-chain

    const leavingEl = leavingView && leavingView.element;
    const animationOpts = Object.assign(Object.assign({
      mode,
      showGoBack: this.canGoBackSync(enteringView),
      baseEl: this.el,
      progressCallback,
      animated: this.animated && _ionic_global_js__WEBPACK_IMPORTED_MODULE_4__.c.getBoolean('animated', true),
      enteringEl,
      leavingEl
    }, opts), {
      animationBuilder: opts.animationBuilder || this.animation || _ionic_global_js__WEBPACK_IMPORTED_MODULE_4__.c.get('navAnimation')
    });
    const {
      hasCompleted
    } = await (0,_index2_js__WEBPACK_IMPORTED_MODULE_5__.t)(animationOpts);
    return this.transitionFinish(hasCompleted, enteringView, leavingView, opts);
  }

  transitionFinish(hasCompleted, enteringView, leavingView, opts) {
    /**
     * If the transition did not complete, the leavingView will still be the active
     * view on the stack. Otherwise unmount all the views after the enteringView.
     */
    const activeView = hasCompleted ? enteringView : leavingView;

    if (activeView) {
      this.unmountInactiveViews(activeView);
    }

    return {
      hasCompleted,
      requiresTransition: true,
      enteringView,
      leavingView,
      direction: opts.direction
    };
  }
  /**
   * Inserts a view at the specified index.
   *
   * When the view already is in the stack it will be moved to the new position.
   *
   * @param view The view to insert.
   * @param index The index where to insert the view.
   */


  insertViewAt(view, index) {
    const views = this.views;
    const existingIndex = views.indexOf(view);

    if (existingIndex > -1) {
      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.p)(view.nav === this, 'view is not part of the nav'); // The view already in the stack, removes it.

      views.splice(existingIndex, 1); // and add it back at the requested index.

      views.splice(index, 0, view);
    } else {
      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.p)(!view.nav, 'nav is used'); // this is a new view to add to the stack
      // create the new entering view

      view.nav = this;
      views.splice(index, 0, view);
    }
  }
  /**
   * Removes a view from the stack.
   *
   * @param view The view to remove.
   */


  removeView(view) {
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.p)(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, 'view state should be loaded or destroyed');
    const views = this.views;
    const index = views.indexOf(view);
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.p)(index > -1, 'view must be part of the stack');

    if (index >= 0) {
      views.splice(index, 1);
    }
  }

  destroyView(view) {
    view._destroy();

    this.removeView(view);
  }
  /**
   * Unmounts all inactive views after the specified active view.
   *
   * DOM WRITE
   *
   * @param activeView The view that is actively visible in the stack. Used to calculate which views to unmount.
   */


  unmountInactiveViews(activeView) {
    // ok, cleanup time!! Destroy all of the views that are
    // INACTIVE and come after the active view
    // only do this if the views exist, though
    if (this.destroyed) {
      return;
    }

    const views = this.views;
    const activeViewIndex = views.indexOf(activeView);

    for (let i = views.length - 1; i >= 0; i--) {
      const view = views[i];
      /**
       * When inserting multiple views via insertPages
       * the last page will be transitioned to, but the
       * others will not be. As a result, a DOM element
       * will only be created for the last page inserted.
       * As a result, it is possible to have views in the
       * stack that do not have `view.element` yet.
       */

      const element = view.element;

      if (element) {
        if (i > activeViewIndex) {
          // this view comes after the active view
          // let's unload it
          (0,_index2_js__WEBPACK_IMPORTED_MODULE_5__.l)(element, _index2_js__WEBPACK_IMPORTED_MODULE_5__.d);
          this.destroyView(view);
        } else if (i < activeViewIndex) {
          // this view comes before the active view
          // and it is not a portal then ensure it is hidden
          (0,_index2_js__WEBPACK_IMPORTED_MODULE_5__.s)(element, true);
        }
      }
    }
  }

  canStart() {
    return !this.gestureOrAnimationInProgress && !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.canGoBackSync();
  }

  onStart() {
    this.gestureOrAnimationInProgress = true;
    this.pop({
      direction: 'back',
      progressAnimation: true
    });
  }

  onMove(stepValue) {
    if (this.sbAni) {
      this.sbAni.progressStep(stepValue);
    }
  }

  onEnd(shouldComplete, stepValue, dur) {
    if (this.sbAni) {
      this.sbAni.onFinish(() => {
        this.gestureOrAnimationInProgress = false;
      }, {
        oneTimeCallback: true
      }); // Account for rounding errors in JS

      let newStepValue = shouldComplete ? -0.001 : 0.001;
      /**
       * Animation will be reversed here, so need to
       * reverse the easing curve as well
       *
       * Additionally, we need to account for the time relative
       * to the new easing curve, as `stepValue` is going to be given
       * in terms of a linear curve.
       */

      if (!shouldComplete) {
        this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)');
        newStepValue += (0,_cubic_bezier_js__WEBPACK_IMPORTED_MODULE_6__.g)([0, 0], [1, 0], [0.68, 0.28], [1, 1], stepValue)[0];
      } else {
        newStepValue += (0,_cubic_bezier_js__WEBPACK_IMPORTED_MODULE_6__.g)([0, 0], [0.32, 0.72], [0, 1], [1, 1], stepValue)[0];
      }

      this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
    } else {
      this.gestureOrAnimationInProgress = false;
    }
  }

  render() {
    return (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("slot", null);
  }

  get el() {
    return this;
  }

  static get watchers() {
    return {
      "swipeGesture": ["swipeGestureChanged"],
      "root": ["rootChanged"]
    };
  }

  static get style() {
    return navCss;
  }

}, [1, "ion-nav", {
  "delegate": [16],
  "swipeGesture": [1028, "swipe-gesture"],
  "animated": [4],
  "animation": [16],
  "rootParams": [16],
  "root": [1],
  "push": [64],
  "insert": [64],
  "insertPages": [64],
  "pop": [64],
  "popTo": [64],
  "popToRoot": [64],
  "removeIndex": [64],
  "setRoot": [64],
  "setPages": [64],
  "setRouteId": [64],
  "getRouteId": [64],
  "getActive": [64],
  "getByIndex": [64],
  "canGoBack": [64],
  "getPrevious": [64]
}, undefined, {
  "swipeGesture": ["swipeGestureChanged"],
  "root": ["rootChanged"]
}]);

function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }

  const components = ["ion-nav"];
  components.forEach(tagName => {
    switch (tagName) {
      case "ion-nav":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Nav);
        }

        break;
    }
  });
}

const IonNav = (/* unused pure expression or super */ null && (Nav));
const defineCustomElement = defineCustomElement$1;


/***/ }),

/***/ 7501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ defineCustomElement)
});

// UNUSED EXPORTS: IonRouterOutlet

// EXTERNAL MODULE: ./node_modules/@stencil/core/internal/client/index.js
var client = __webpack_require__(8179);
// EXTERNAL MODULE: ./node_modules/@ionic/core/components/cubic-bezier.js
var cubic_bezier = __webpack_require__(1154);
// EXTERNAL MODULE: ./node_modules/@ionic/core/components/framework-delegate.js
var framework_delegate = __webpack_require__(5477);
// EXTERNAL MODULE: ./node_modules/@ionic/core/components/helpers.js
var helpers = __webpack_require__(1824);
;// CONCATENATED MODULE: ./node_modules/@ionic/core/components/lock-controller.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

/**
 * Creates a lock controller.
 *
 * Claiming a lock means that nothing else can acquire the lock until it is released.
 * This can momentarily prevent execution of code that needs to wait for the earlier code to finish.
 * For example, this can be used to prevent multiple transitions from occurring at the same time.
 */
const createLockController = () => {
  let waitPromise;
  /**
   * When lock() is called, the lock is claimed.
   * Once a lock has been claimed, it cannot be claimed again until it is released.
   * When this function gets resolved, the lock is released, allowing it to be claimed again.
   *
   * @example ```tsx
   * const unlock = await this.lockController.lock();
   * // do other stuff
   * unlock();
   * ```
   */

  const lock = async () => {
    const p = waitPromise;
    let resolve;
    waitPromise = new Promise(r => resolve = r);

    if (p !== undefined) {
      await p;
    }

    return resolve;
  };

  return {
    lock
  };
};


// EXTERNAL MODULE: ./node_modules/@ionic/core/components/index2.js
var index2 = __webpack_require__(6873);
// EXTERNAL MODULE: ./node_modules/@ionic/core/components/ionic-global.js
var ionic_global = __webpack_require__(3790);
;// CONCATENATED MODULE: ./node_modules/@ionic/core/components/ion-router-outlet.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */







const routerOutletCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";
const RouterOutlet = /*@__PURE__*/(0,client/* proxyCustomElement */.GH)(class RouterOutlet extends client/* HTMLElement */.mv {
  constructor() {
    super();

    this.__registerHost();

    this.__attachShadow();

    this.ionNavWillLoad = (0,client/* createEvent */.yM)(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = (0,client/* createEvent */.yM)(this, "ionNavWillChange", 3);
    this.ionNavDidChange = (0,client/* createEvent */.yM)(this, "ionNavDidChange", 3);
    this.lockController = createLockController();
    this.gestureOrAnimationInProgress = false;
    this.mode = (0,ionic_global.b)(this);
    this.delegate = undefined;
    this.animated = true;
    this.animation = undefined;
    this.swipeHandler = undefined;
  }

  swipeHandlerChanged() {
    if (this.gesture) {
      this.gesture.enable(this.swipeHandler !== undefined);
    }
  }

  async connectedCallback() {
    const onStart = () => {
      this.gestureOrAnimationInProgress = true;

      if (this.swipeHandler) {
        this.swipeHandler.onStart();
      }
    };

    this.gesture = (await __webpack_require__.e(/* import() */ 397).then(__webpack_require__.bind(__webpack_require__, 5397))).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => onStart(), step => {
      var _a;

      return (_a = this.ani) === null || _a === void 0 ? void 0 : _a.progressStep(step);
    }, (shouldComplete, step, dur) => {
      if (this.ani) {
        this.ani.onFinish(() => {
          this.gestureOrAnimationInProgress = false;

          if (this.swipeHandler) {
            this.swipeHandler.onEnd(shouldComplete);
          }
        }, {
          oneTimeCallback: true
        }); // Account for rounding errors in JS

        let newStepValue = shouldComplete ? -0.001 : 0.001;
        /**
         * Animation will be reversed here, so need to
         * reverse the easing curve as well
         *
         * Additionally, we need to account for the time relative
         * to the new easing curve, as `stepValue` is going to be given
         * in terms of a linear curve.
         */

        if (!shouldComplete) {
          this.ani.easing('cubic-bezier(1, 0, 0.68, 0.28)');
          newStepValue += (0,cubic_bezier.g)([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
        } else {
          newStepValue += (0,cubic_bezier.g)([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
        }

        this.ani.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
      } else {
        this.gestureOrAnimationInProgress = false;
      }
    });
    this.swipeHandlerChanged();
  }

  componentWillLoad() {
    this.ionNavWillLoad.emit();
  }

  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  /** @internal */


  async commit(enteringEl, leavingEl, opts) {
    const unlock = await this.lockController.lock();
    let changed = false;

    try {
      changed = await this.transition(enteringEl, leavingEl, opts);
    } catch (e) {
      console.error(e);
    }

    unlock();
    return changed;
  }
  /** @internal */


  async setRouteId(id, params, direction, animation) {
    const changed = await this.setRoot(id, params, {
      duration: direction === 'root' ? 0 : undefined,
      direction: direction === 'back' ? 'back' : 'forward',
      animationBuilder: animation
    });
    return {
      changed,
      element: this.activeEl
    };
  }
  /** @internal */


  async getRouteId() {
    const active = this.activeEl;
    return active ? {
      id: active.tagName,
      element: active,
      params: this.activeParams
    } : undefined;
  }

  async setRoot(component, params, opts) {
    if (this.activeComponent === component && (0,helpers.s)(params, this.activeParams)) {
      return false;
    } // attach entering view to DOM


    const leavingEl = this.activeEl;
    const enteringEl = await (0,framework_delegate.a)(this.delegate, this.el, component, ['ion-page', 'ion-page-invisible'], params);
    this.activeComponent = component;
    this.activeEl = enteringEl;
    this.activeParams = params; // commit animation

    await this.commit(enteringEl, leavingEl, opts);
    await (0,framework_delegate.d)(this.delegate, leavingEl);
    return true;
  }

  async transition(enteringEl, leavingEl, opts = {}) {
    if (leavingEl === enteringEl) {
      return false;
    } // emit nav will change event


    this.ionNavWillChange.emit();
    const {
      el,
      mode
    } = this;
    const animated = this.animated && ionic_global.c.getBoolean('animated', true);
    const animationBuilder = opts.animationBuilder || this.animation || ionic_global.c.get('navAnimation');
    await (0,index2.t)(Object.assign(Object.assign({
      mode,
      animated,
      enteringEl,
      leavingEl,
      baseEl: el,

      /**
       * We need to wait for all Stencil components
       * to be ready only when using the lazy
       * loaded bundle.
       */
      deepWait: (0,helpers.l)(el),
      progressCallback: opts.progressAnimation ? ani => {
        /**
         * Because this progress callback is called asynchronously
         * it is possible for the gesture to start and end before
         * the animation is ever set. In that scenario, we should
         * immediately call progressEnd so that the transition promise
         * resolves and the gesture does not get locked up.
         */
        if (ani !== undefined && !this.gestureOrAnimationInProgress) {
          this.gestureOrAnimationInProgress = true;
          ani.onFinish(() => {
            this.gestureOrAnimationInProgress = false;

            if (this.swipeHandler) {
              this.swipeHandler.onEnd(false);
            }
          }, {
            oneTimeCallback: true
          });
          /**
           * Playing animation to beginning
           * with a duration of 0 prevents
           * any flickering when the animation
           * is later cleaned up.
           */

          ani.progressEnd(0, 0, 0);
        } else {
          this.ani = ani;
        }
      } : undefined
    }, opts), {
      animationBuilder
    })); // emit nav changed event

    this.ionNavDidChange.emit();
    return true;
  }

  render() {
    return (0,client.h)("slot", null);
  }

  get el() {
    return this;
  }

  static get watchers() {
    return {
      "swipeHandler": ["swipeHandlerChanged"]
    };
  }

  static get style() {
    return routerOutletCss;
  }

}, [1, "ion-router-outlet", {
  "mode": [1025],
  "delegate": [16],
  "animated": [4],
  "animation": [16],
  "swipeHandler": [16],
  "commit": [64],
  "setRouteId": [64],
  "getRouteId": [64]
}, undefined, {
  "swipeHandler": ["swipeHandlerChanged"]
}]);

function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }

  const components = ["ion-router-outlet"];
  components.forEach(tagName => {
    switch (tagName) {
      case "ion-router-outlet":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, RouterOutlet);
        }

        break;
    }
  });
}

const IonRouterOutlet = (/* unused pure expression or super */ null && (RouterOutlet));
const defineCustomElement = defineCustomElement$1;


/***/ }),

/***/ 8594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ defineCustomElement)
});

// UNUSED EXPORTS: IonTabBar

// EXTERNAL MODULE: ./node_modules/@stencil/core/internal/client/index.js
var client = __webpack_require__(8179);
// EXTERNAL MODULE: ./node_modules/@ionic/core/components/index5.js
var index5 = __webpack_require__(5560);
;// CONCATENATED MODULE: ./node_modules/@ionic/core/components/capacitor.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const getCapacitor = () => {
  if (index5.w !== undefined) {
    return index5.w.Capacitor;
  }

  return undefined;
};


;// CONCATENATED MODULE: ./node_modules/@ionic/core/components/keyboard.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

var KeyboardResize;

(function (KeyboardResize) {
  /**
   * Only the `body` HTML element will be resized.
   * Relative units are not affected, because the viewport does not change.
   *
   * @since 1.0.0
   */
  KeyboardResize["Body"] = "body";
  /**
   * Only the `ion-app` HTML element will be resized.
   * Use it only for Ionic Framework apps.
   *
   * @since 1.0.0
   */

  KeyboardResize["Ionic"] = "ionic";
  /**
   * The whole native Web View will be resized when the keyboard shows/hides.
   * This affects the `vh` relative unit.
   *
   * @since 1.0.0
   */

  KeyboardResize["Native"] = "native";
  /**
   * Neither the app nor the Web View are resized.
   *
   * @since 1.0.0
   */

  KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));

const Keyboard = {
  getEngine() {
    const capacitor = getCapacitor();

    if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable('Keyboard')) {
      return capacitor.Plugins.Keyboard;
    }

    return undefined;
  },

  getResizeMode() {
    const engine = this.getEngine();

    if (!(engine === null || engine === void 0 ? void 0 : engine.getResizeMode)) {
      return Promise.resolve(undefined);
    }

    return engine.getResizeMode().catch(e => {
      if (e.code === ExceptionCode.Unimplemented) {
        // If the native implementation is not available
        // we treat it the same as if the plugin is not available.
        return undefined;
      }

      throw e;
    });
  }

};

;// CONCATENATED MODULE: ./node_modules/@ionic/core/components/keyboard-controller.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


/**
 * The element that resizes when the keyboard opens
 * is going to depend on the resize mode
 * which is why we check that here.
 */

const getResizeContainer = resizeMode => {
  /**
   * If doc is undefined then we are
   * in an SSR environment, so the keyboard
   * adjustment does not apply.
   * If the webview does not resize then there
   * is no container to resize.
   */
  if (index5.d === undefined || resizeMode === KeyboardResize.None || resizeMode === undefined) {
    return null;
  }
  /**
   * The three remaining resize modes: Native, Ionic, and Body
   * all cause `ion-app` to resize, so we can listen for changes
   * on that. In the event `ion-app` is not available then
   * we can fall back to `body`.
   */


  const ionApp = index5.d.querySelector('ion-app');
  return ionApp !== null && ionApp !== void 0 ? ionApp : index5.d.body;
};
/**
 * Get the height of ion-app or body.
 * This is used for determining if the webview
 * has resized before the keyboard closed.
 * */


const getResizeContainerHeight = resizeMode => {
  const containerElement = getResizeContainer(resizeMode);
  return containerElement === null ? 0 : containerElement.clientHeight;
};
/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */


const createKeyboardController = async keyboardChangeCallback => {
  let keyboardWillShowHandler;
  let keyboardWillHideHandler;
  let keyboardVisible;
  /**
   * This lets us determine if the webview content
   * has resized as a result of the keyboard.
   */

  let initialResizeContainerHeight;

  const init = async () => {
    const resizeOptions = await Keyboard.getResizeMode();
    const resizeMode = resizeOptions === undefined ? undefined : resizeOptions.mode;

    keyboardWillShowHandler = () => {
      /**
       * We need to compute initialResizeContainerHeight right before
       * the keyboard opens to guarantee the resize container is visible.
       * The resize container may not be visible if we compute this
       * as soon as the keyboard controller is created.
       * We should only need to do this once to avoid additional clientHeight
       * computations.
       */
      if (initialResizeContainerHeight === undefined) {
        initialResizeContainerHeight = getResizeContainerHeight(resizeMode);
      }

      keyboardVisible = true;
      fireChangeCallback(keyboardVisible, resizeMode);
    };

    keyboardWillHideHandler = () => {
      keyboardVisible = false;
      fireChangeCallback(keyboardVisible, resizeMode);
    };

    index5.w === null || index5.w === void 0 ? void 0 : index5.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
    index5.w === null || index5.w === void 0 ? void 0 : index5.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
  };

  const fireChangeCallback = (state, resizeMode) => {
    if (keyboardChangeCallback) {
      keyboardChangeCallback(state, createResizePromiseIfNeeded(resizeMode));
    }
  };
  /**
   * Code responding to keyboard lifecycles may need
   * to show/hide content once the webview has
   * resized as a result of the keyboard showing/hiding.
   * createResizePromiseIfNeeded provides a way for code to wait for the
   * resize event that was triggered as a result of the keyboard.
   */


  const createResizePromiseIfNeeded = resizeMode => {
    if (
    /**
     * If we are in an SSR environment then there is
     * no window to resize. Additionally, if there
     * is no resize mode or the resize mode is "None"
     * then initialResizeContainerHeight will be 0
     */
    initialResizeContainerHeight === 0 ||
    /**
     * If the keyboard is closed before the webview resizes initially
     * then the webview will never resize.
     */
    initialResizeContainerHeight === getResizeContainerHeight(resizeMode)) {
      return;
    }
    /**
     * Get the resize container so we can
     * attach the ResizeObserver below to
     * the correct element.
     */


    const containerElement = getResizeContainer(resizeMode);

    if (containerElement === null) {
      return;
    }
    /**
     * Some part of the web content should resize,
     * and we need to listen for a resize.
     */


    return new Promise(resolve => {
      const callback = () => {
        /**
         * As per the spec, the ResizeObserver
         * will fire when observation starts if
         * the observed element is rendered and does not
         * have a size of 0 x 0. However, the watched element
         * may or may not have resized by the time this first
         * callback is fired. As a result, we need to check
         * the dimensions of the element.
         *
         * https://www.w3.org/TR/resize-observer/#intro
         */
        if (containerElement.clientHeight === initialResizeContainerHeight) {
          /**
           * The resize happened, so stop listening
           * for resize on this element.
           */
          ro.disconnect();
          resolve();
        }
      };
      /**
       * In Capacitor there can be delay between when the window
       * resizes and when the container element resizes, so we cannot
       * rely on a 'resize' event listener on the window.
       * Instead, we need to determine when the container
       * element resizes using a ResizeObserver.
       */


      const ro = new ResizeObserver(callback);
      ro.observe(containerElement);
    });
  };

  const destroy = () => {
    index5.w === null || index5.w === void 0 ? void 0 : index5.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
    index5.w === null || index5.w === void 0 ? void 0 : index5.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
    keyboardWillShowHandler = keyboardWillHideHandler = undefined;
  };

  const isKeyboardVisible = () => keyboardVisible;

  await init();
  return {
    init,
    destroy,
    isKeyboardVisible
  };
};


// EXTERNAL MODULE: ./node_modules/@ionic/core/components/theme.js
var theme = __webpack_require__(8343);
// EXTERNAL MODULE: ./node_modules/@ionic/core/components/ionic-global.js
var ionic_global = __webpack_require__(3790);
;// CONCATENATED MODULE: ./node_modules/@ionic/core/components/ion-tab-bar.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const tabBarIosCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}";
const tabBarMdCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, #595959));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}";
const TabBar = /*@__PURE__*/(0,client/* proxyCustomElement */.GH)(class TabBar extends client/* HTMLElement */.mv {
  constructor() {
    super();

    this.__registerHost();

    this.__attachShadow();

    this.ionTabBarChanged = (0,client/* createEvent */.yM)(this, "ionTabBarChanged", 7);
    this.ionTabBarLoaded = (0,client/* createEvent */.yM)(this, "ionTabBarLoaded", 7);
    this.keyboardCtrl = null;
    this.keyboardVisible = false;
    this.color = undefined;
    this.selectedTab = undefined;
    this.translucent = false;
  }

  selectedTabChanged() {
    if (this.selectedTab !== undefined) {
      this.ionTabBarChanged.emit({
        tab: this.selectedTab
      });
    }
  }

  componentWillLoad() {
    this.selectedTabChanged();
  }

  async connectedCallback() {
    this.keyboardCtrl = await createKeyboardController(async (keyboardOpen, waitForResize) => {
      /**
       * If the keyboard is hiding, then we need to wait
       * for the webview to resize. Otherwise, the tab bar
       * will flicker before the webview resizes.
       */
      if (keyboardOpen === false && waitForResize !== undefined) {
        await waitForResize;
      }

      this.keyboardVisible = keyboardOpen; // trigger re-render by updating state
    });
  }

  disconnectedCallback() {
    if (this.keyboardCtrl) {
      this.keyboardCtrl.destroy();
    }
  }

  componentDidLoad() {
    this.ionTabBarLoaded.emit();
  }

  render() {
    const {
      color,
      translucent,
      keyboardVisible
    } = this;
    const mode = (0,ionic_global.b)(this);
    const shouldHide = keyboardVisible && this.el.getAttribute('slot') !== 'top';
    return (0,client.h)(client/* Host */.AA, {
      role: "tablist",
      "aria-hidden": shouldHide ? 'true' : null,
      class: (0,theme.c)(color, {
        [mode]: true,
        'tab-bar-translucent': translucent,
        'tab-bar-hidden': shouldHide
      })
    }, (0,client.h)("slot", null));
  }

  get el() {
    return this;
  }

  static get watchers() {
    return {
      "selectedTab": ["selectedTabChanged"]
    };
  }

  static get style() {
    return {
      ios: tabBarIosCss,
      md: tabBarMdCss
    };
  }

}, [33, "ion-tab-bar", {
  "color": [513],
  "selectedTab": [1, "selected-tab"],
  "translucent": [4],
  "keyboardVisible": [32]
}, undefined, {
  "selectedTab": ["selectedTabChanged"]
}]);

function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }

  const components = ["ion-tab-bar"];
  components.forEach(tagName => {
    switch (tagName) {
      case "ion-tab-bar":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, TabBar);
        }

        break;
    }
  });
}

const IonTabBar = (/* unused pure expression or super */ null && (TabBar));
const defineCustomElement = defineCustomElement$1;


/***/ }),

/***/ 6623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ ion_tab_button_defineCustomElement)
});

// UNUSED EXPORTS: IonTabButton

// EXTERNAL MODULE: ./node_modules/@stencil/core/internal/client/index.js
var client = __webpack_require__(8179);
// EXTERNAL MODULE: ./node_modules/@ionic/core/components/helpers.js
var helpers = __webpack_require__(1824);
// EXTERNAL MODULE: ./node_modules/@ionic/core/components/ionic-global.js
var ionic_global = __webpack_require__(3790);
;// CONCATENATED MODULE: ./node_modules/@ionic/core/components/ripple-effect.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const rippleEffectCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}";
const RippleEffect = /*@__PURE__*/(0,client/* proxyCustomElement */.GH)(class RippleEffect extends client/* HTMLElement */.mv {
  constructor() {
    super();

    this.__registerHost();

    this.__attachShadow();

    this.type = 'bounded';
  }
  /**
   * Adds the ripple effect to the parent element.
   *
   * @param x The horizontal coordinate of where the ripple should start.
   * @param y The vertical coordinate of where the ripple should start.
   */


  async addRipple(x, y) {
    return new Promise(resolve => {
      (0,client/* readTask */.wj)(() => {
        const rect = this.el.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const hypotenuse = Math.sqrt(width * width + height * height);
        const maxDim = Math.max(height, width);
        const maxRadius = this.unbounded ? maxDim : hypotenuse + PADDING;
        const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
        const finalScale = maxRadius / initialSize;
        let posX = x - rect.left;
        let posY = y - rect.top;

        if (this.unbounded) {
          posX = width * 0.5;
          posY = height * 0.5;
        }

        const styleX = posX - initialSize * 0.5;
        const styleY = posY - initialSize * 0.5;
        const moveX = width * 0.5 - posX;
        const moveY = height * 0.5 - posY;
        (0,client/* writeTask */.Iu)(() => {
          const div = document.createElement('div');
          div.classList.add('ripple-effect');
          const style = div.style;
          style.top = styleY + 'px';
          style.left = styleX + 'px';
          style.width = style.height = initialSize + 'px';
          style.setProperty('--final-scale', `${finalScale}`);
          style.setProperty('--translate-end', `${moveX}px, ${moveY}px`);
          const container = this.el.shadowRoot || this.el;
          container.appendChild(div);
          setTimeout(() => {
            resolve(() => {
              removeRipple(div);
            });
          }, 225 + 100);
        });
      });
    });
  }

  get unbounded() {
    return this.type === 'unbounded';
  }

  render() {
    const mode = (0,ionic_global.b)(this);
    return (0,client.h)(client/* Host */.AA, {
      role: "presentation",
      class: {
        [mode]: true,
        unbounded: this.unbounded
      }
    });
  }

  get el() {
    return this;
  }

  static get style() {
    return rippleEffectCss;
  }

}, [1, "ion-ripple-effect", {
  "type": [1],
  "addRipple": [64]
}]);

const removeRipple = ripple => {
  ripple.classList.add('fade-out');
  setTimeout(() => {
    ripple.remove();
  }, 200);
};

const PADDING = 10;
const INITIAL_ORIGIN_SCALE = 0.5;

function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }

  const components = ["ion-ripple-effect"];
  components.forEach(tagName => {
    switch (tagName) {
      case "ion-ripple-effect":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, RippleEffect);
        }

        break;
    }
  });
}


;// CONCATENATED MODULE: ./node_modules/@ionic/core/components/ion-tab-button.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const tabButtonIosCss = ":host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:30px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:calc(50% + 35px)}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start:dir(rtl)) ::slotted(ion-badge),:host(.tab-layout-icon-end:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}}}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:calc(50% + 30px)}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide:dir(rtl)) ::slotted(ion-badge),:host(.tab-has-label-only:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}}}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
const tabButtonMdCss = ":host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}@supports (inset-inline-start: 0){::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}}@supports not (inset-inline-start: 0){::slotted(ion-badge){left:calc(50% + 6px)}:host-context([dir=rtl]) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}@supports selector(:dir(rtl)){::slotted(ion-badge):dir(rtl){left:unset;right:unset;right:calc(50% + 6px)}}}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-bottom:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){left:80%}:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge){left:unset;right:unset;right:80%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-start:dir(rtl)) ::slotted(ion-badge),:host(.tab-layout-icon-end:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:80%}}}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}@supports (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}}@supports not (inset-inline-start: 0){:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){left:70%}:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge){left:unset;right:unset;right:70%}@supports selector(:dir(rtl)){:host(.tab-layout-icon-hide:dir(rtl)) ::slotted(ion-badge),:host(.tab-has-label-only:dir(rtl)) ::slotted(ion-badge){left:unset;right:unset;right:70%}}}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}";
const TabButton = /*@__PURE__*/(0,client/* proxyCustomElement */.GH)(class TabButton extends client/* HTMLElement */.mv {
  constructor() {
    super();

    this.__registerHost();

    this.__attachShadow();

    this.ionTabButtonClick = (0,client/* createEvent */.yM)(this, "ionTabButtonClick", 7);
    this.inheritedAttributes = {};

    this.onKeyUp = ev => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        this.selectTab(ev);
      }
    };

    this.onClick = ev => {
      this.selectTab(ev);
    };

    this.disabled = false;
    this.download = undefined;
    this.href = undefined;
    this.rel = undefined;
    this.layout = undefined;
    this.selected = false;
    this.tab = undefined;
    this.target = undefined;
  }

  onTabBarChanged(ev) {
    const dispatchedFrom = ev.target;
    const parent = this.el.parentElement;

    if (ev.composedPath().includes(parent) || (dispatchedFrom === null || dispatchedFrom === void 0 ? void 0 : dispatchedFrom.contains(this.el))) {
      this.selected = this.tab === ev.detail.tab;
    }
  }

  componentWillLoad() {
    this.inheritedAttributes = Object.assign({}, (0,helpers.d)(this.el, ['aria-label']));

    if (this.layout === undefined) {
      this.layout = ionic_global.c.get('tabButtonLayout', 'icon-top');
    }
  }

  selectTab(ev) {
    if (this.tab !== undefined) {
      if (!this.disabled) {
        this.ionTabButtonClick.emit({
          tab: this.tab,
          href: this.href,
          selected: this.selected
        });
      }

      ev.preventDefault();
    }
  }

  get hasLabel() {
    return !!this.el.querySelector('ion-label');
  }

  get hasIcon() {
    return !!this.el.querySelector('ion-icon');
  }

  render() {
    const {
      disabled,
      hasIcon,
      hasLabel,
      href,
      rel,
      target,
      layout,
      selected,
      tab,
      inheritedAttributes
    } = this;
    const mode = (0,ionic_global.b)(this);
    const attrs = {
      download: this.download,
      href,
      rel,
      target
    };
    return (0,client.h)(client/* Host */.AA, {
      onClick: this.onClick,
      onKeyup: this.onKeyUp,
      id: tab !== undefined ? `tab-button-${tab}` : null,
      class: {
        [mode]: true,
        'tab-selected': selected,
        'tab-disabled': disabled,
        'tab-has-label': hasLabel,
        'tab-has-icon': hasIcon,
        'tab-has-label-only': hasLabel && !hasIcon,
        'tab-has-icon-only': hasIcon && !hasLabel,
        [`tab-layout-${layout}`]: true,
        'ion-activatable': true,
        'ion-selectable': true,
        'ion-focusable': true
      }
    }, (0,client.h)("a", Object.assign({}, attrs, {
      class: "button-native",
      part: "native",
      role: "tab",
      "aria-selected": selected ? 'true' : null,
      "aria-disabled": disabled ? 'true' : null,
      tabindex: disabled ? '-1' : undefined
    }, inheritedAttributes), (0,client.h)("span", {
      class: "button-inner"
    }, (0,client.h)("slot", null)), mode === 'md' && (0,client.h)("ion-ripple-effect", {
      type: "unbounded"
    })));
  }

  get el() {
    return this;
  }

  static get style() {
    return {
      ios: tabButtonIosCss,
      md: tabButtonMdCss
    };
  }

}, [33, "ion-tab-button", {
  "disabled": [4],
  "download": [1],
  "href": [1],
  "rel": [1],
  "layout": [1025],
  "selected": [1028],
  "tab": [1],
  "target": [1]
}, [[8, "ionTabBarChanged", "onTabBarChanged"]]]);

function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }

  const components = ["ion-tab-button", "ion-ripple-effect"];
  components.forEach(tagName => {
    switch (tagName) {
      case "ion-tab-button":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, TabButton);
        }

        break;

      case "ion-ripple-effect":
        if (!customElements.get(tagName)) {
          defineCustomElement();
        }

        break;
    }
  });
}

const IonTabButton = (/* unused pure expression or super */ null && (TabButton));
const ion_tab_button_defineCustomElement = defineCustomElement$1;


/***/ }),

/***/ 5381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* unused harmony export IonTitle */
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8179);
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8343);
/* harmony import */ var _ionic_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3790);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const titleIosCss = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:min(1.0625rem, 20.4px);font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(:dir(rtl)){left:unset;right:unset;right:0}}}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:min(0.8125rem, 23.4px);font-weight:normal}:host(.title-large){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:2px;padding-bottom:4px;-webkit-transform-origin:left center;transform-origin:left center;position:static;-ms-flex-align:end;align-items:flex-end;min-width:100%;font-size:min(2.125rem, 61.2px);font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000);font-family:var(--ion-font-family)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit;width:auto}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large:dir(rtl)) .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}";
const titleMdCss = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:0.9375rem;font-weight:normal}";
const ToolbarTitle = /*@__PURE__*/(0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .proxyCustomElement */ .GH)(class ToolbarTitle extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .HTMLElement */ .mv {
  constructor() {
    super();

    this.__registerHost();

    this.__attachShadow();

    this.ionStyle = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .createEvent */ .yM)(this, "ionStyle", 7);
    this.color = undefined;
    this.size = undefined;
  }

  sizeChanged() {
    this.emitStyle();
  }

  connectedCallback() {
    this.emitStyle();
  }

  emitStyle() {
    const size = this.getSize();
    this.ionStyle.emit({
      [`title-${size}`]: true
    });
  }

  getSize() {
    return this.size !== undefined ? this.size : 'default';
  }

  render() {
    const mode = (0,_ionic_global_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);
    const size = this.getSize();
    return (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .Host */ .AA, {
      class: (0,_theme_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.color, {
        [mode]: true,
        [`title-${size}`]: true,
        'title-rtl': document.dir === 'rtl'
      })
    }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "toolbar-title"
    }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }

  get el() {
    return this;
  }

  static get watchers() {
    return {
      "size": ["sizeChanged"]
    };
  }

  static get style() {
    return {
      ios: titleIosCss,
      md: titleMdCss
    };
  }

}, [33, "ion-title", {
  "color": [513],
  "size": [1]
}, undefined, {
  "size": ["sizeChanged"]
}]);

function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }

  const components = ["ion-title"];
  components.forEach(tagName => {
    switch (tagName) {
      case "ion-title":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, ToolbarTitle);
        }

        break;
    }
  });
}

const IonTitle = (/* unused pure expression or super */ null && (ToolbarTitle));
const defineCustomElement = defineCustomElement$1;


/***/ }),

/***/ 9274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* unused harmony export IonToolbar */
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8179);
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8343);
/* harmony import */ var _ionic_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3790);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const toolbarIosCss = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}";
const toolbarMdCss = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}";
const Toolbar = /*@__PURE__*/(0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .proxyCustomElement */ .GH)(class Toolbar extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .HTMLElement */ .mv {
  constructor() {
    super();

    this.__registerHost();

    this.__attachShadow();

    this.childrenStyles = new Map();
    this.color = undefined;
  }

  componentWillLoad() {
    const buttons = Array.from(this.el.querySelectorAll('ion-buttons'));
    const firstButtons = buttons.find(button => {
      return button.slot === 'start';
    });

    if (firstButtons) {
      firstButtons.classList.add('buttons-first-slot');
    }

    const buttonsReversed = buttons.reverse();
    const lastButtons = buttonsReversed.find(button => button.slot === 'end') || buttonsReversed.find(button => button.slot === 'primary') || buttonsReversed.find(button => button.slot === 'secondary');

    if (lastButtons) {
      lastButtons.classList.add('buttons-last-slot');
    }
  }

  childrenStyle(ev) {
    ev.stopPropagation();
    const tagName = ev.target.tagName;
    const updatedStyles = ev.detail;
    const newStyles = {};
    const childStyles = this.childrenStyles.get(tagName) || {};
    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach(key => {
      const childKey = `toolbar-${key}`;
      const newValue = updatedStyles[key];

      if (newValue !== childStyles[childKey]) {
        hasStyleChange = true;
      }

      if (newValue) {
        newStyles[childKey] = true;
      }
    });

    if (hasStyleChange) {
      this.childrenStyles.set(tagName, newStyles);
      (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .forceUpdate */ .xE)(this);
    }
  }

  render() {
    const mode = (0,_ionic_global_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);
    const childStyles = {};
    this.childrenStyles.forEach(value => {
      Object.assign(childStyles, value);
    });
    return (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .Host */ .AA, {
      class: Object.assign(Object.assign({}, childStyles), (0,_theme_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.color, {
        [mode]: true,
        'in-toolbar': (0,_theme_js__WEBPACK_IMPORTED_MODULE_2__.h)('ion-toolbar', this.el)
      }))
    }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "toolbar-background"
    }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "toolbar-container"
    }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "start"
    }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "secondary"
    }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "toolbar-content"
    }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "primary"
    }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "end"
    })));
  }

  get el() {
    return this;
  }

  static get style() {
    return {
      ios: toolbarIosCss,
      md: toolbarMdCss
    };
  }

}, [33, "ion-toolbar", {
  "color": [513]
}, [[0, "ionStyle", "childrenStyle"]]]);

function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }

  const components = ["ion-toolbar"];
  components.forEach(tagName => {
    switch (tagName) {
      case "ion-toolbar":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Toolbar);
        }

        break;
    }
  });
}

const IonToolbar = (/* unused pure expression or super */ null && (Toolbar));
const defineCustomElement = defineCustomElement$1;


/***/ }),

/***/ 3790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ getIonMode),
/* harmony export */   c: () => (/* binding */ config),
/* harmony export */   i: () => (/* binding */ initialize)
/* harmony export */ });
/* unused harmony exports a, g */
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8179);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
 // TODO(FW-2832): types

class Config {
  constructor() {
    this.m = new Map();
  }

  reset(configObj) {
    this.m = new Map(Object.entries(configObj));
  }

  get(key, fallback) {
    const value = this.m.get(key);
    return value !== undefined ? value : fallback;
  }

  getBoolean(key, fallback = false) {
    const val = this.m.get(key);

    if (val === undefined) {
      return fallback;
    }

    if (typeof val === 'string') {
      return val === 'true';
    }

    return !!val;
  }

  getNumber(key, fallback) {
    const val = parseFloat(this.m.get(key));
    return isNaN(val) ? fallback !== undefined ? fallback : NaN : val;
  }

  set(key, value) {
    this.m.set(key, value);
  }

}

const config = /*@__PURE__*/new Config();

const configFromSession = win => {
  try {
    const configStr = win.sessionStorage.getItem(IONIC_SESSION_KEY);
    return configStr !== null ? JSON.parse(configStr) : {};
  } catch (e) {
    return {};
  }
};

const saveConfig = (win, c) => {
  try {
    win.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(c));
  } catch (e) {
    return;
  }
};

const configFromURL = win => {
  const configObj = {};
  win.location.search.slice(1).split('&').map(entry => entry.split('=')).map(([key, value]) => [decodeURIComponent(key), decodeURIComponent(value)]).filter(([key]) => startsWith(key, IONIC_PREFIX)).map(([key, value]) => [key.slice(IONIC_PREFIX.length), value]).forEach(([key, value]) => {
    configObj[key] = value;
  });
  return configObj;
};

const startsWith = (input, search) => {
  return input.substr(0, search.length) === search;
};

const IONIC_PREFIX = 'ionic:';
const IONIC_SESSION_KEY = 'ionic-persist-config';

const getPlatforms = win => setupPlatforms(win);

const isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === 'string') {
    platform = winOrPlatform;
    winOrPlatform = undefined;
  }

  return getPlatforms(winOrPlatform).includes(platform);
};

const setupPlatforms = (win = window) => {
  if (typeof win === 'undefined') {
    return [];
  }

  win.Ionic = win.Ionic || {};
  let platforms = win.Ionic.platforms;

  if (platforms == null) {
    platforms = win.Ionic.platforms = detectPlatforms(win);
    platforms.forEach(p => win.document.documentElement.classList.add(`plt-${p}`));
  }

  return platforms;
};

const detectPlatforms = win => {
  const customPlatformMethods = config.get('platform');
  return Object.keys(PLATFORMS_MAP).filter(p => {
    const customMethod = customPlatformMethods === null || customPlatformMethods === void 0 ? void 0 : customPlatformMethods[p];
    return typeof customMethod === 'function' ? customMethod(win) : PLATFORMS_MAP[p](win);
  });
};

const isMobileWeb = win => isMobile(win) && !isHybrid(win);

const isIpad = win => {
  // iOS 12 and below
  if (testUserAgent(win, /iPad/i)) {
    return true;
  } // iOS 13+


  if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
    return true;
  }

  return false;
};

const isIphone = win => testUserAgent(win, /iPhone/i);

const isIOS = win => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);

const isAndroid = win => testUserAgent(win, /android|sink/i);

const isAndroidTablet = win => {
  return isAndroid(win) && !testUserAgent(win, /mobile/i);
};

const isPhablet = win => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
};

const isTablet = win => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return isIpad(win) || isAndroidTablet(win) || smallest > 460 && smallest < 820 && largest > 780 && largest < 1400;
};

const isMobile = win => matchMedia(win, '(any-pointer:coarse)');

const isDesktop = win => !isMobile(win);

const isHybrid = win => isCordova(win) || isCapacitorNative(win);

const isCordova = win => !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);

const isCapacitorNative = win => {
  const capacitor = win['Capacitor'];
  return !!(capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNative);
};

const isElectron = win => testUserAgent(win, /electron/i);

const isPWA = win => {
  var _a;

  return !!(((_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, '(display-mode: standalone)').matches) || win.navigator.standalone);
};

const testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);

const matchMedia = (win, query) => {
  var _a;

  return (_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, query).matches;
};

const PLATFORMS_MAP = {
  ipad: isIpad,
  iphone: isIphone,
  ios: isIOS,
  android: isAndroid,
  phablet: isPhablet,
  tablet: isTablet,
  cordova: isCordova,
  capacitor: isCapacitorNative,
  electron: isElectron,
  pwa: isPWA,
  mobile: isMobile,
  mobileweb: isMobileWeb,
  desktop: isDesktop,
  hybrid: isHybrid
}; // TODO(FW-2832): types

let defaultMode;

const getIonMode = ref => {
  return ref && (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .getMode */ .iJ)(ref) || defaultMode;
};

const initialize = (userConfig = {}) => {
  if (true) {
    return;
  }

  const doc = window.document;
  const win = window;
  const Ionic = win.Ionic = win.Ionic || {};
  const platformHelpers = {};

  if (userConfig._ael) {
    platformHelpers.ael = userConfig._ael;
  }

  if (userConfig._rel) {
    platformHelpers.rel = userConfig._rel;
  }

  if (userConfig._ce) {
    platformHelpers.ce = userConfig._ce;
  }

  (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .setPlatformHelpers */ .TX)(platformHelpers); // create the Ionic.config from raw config object (if it exists)
  // and convert Ionic.config into a ConfigApi that has a get() fn

  const configObj = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, configFromSession(win)), {
    persistConfig: false
  }), Ionic.config), configFromURL(win)), userConfig);
  config.reset(configObj);

  if (config.getBoolean('persistConfig')) {
    saveConfig(win, configObj);
  } // Setup platforms


  setupPlatforms(win); // first see if the mode was set as an attribute on <html>
  // which could have been set by the user, or by pre-rendering
  // otherwise get the mode via config settings, and fallback to md

  Ionic.config = config;
  Ionic.mode = defaultMode = config.get('mode', doc.documentElement.getAttribute('mode') || (isPlatform(win, 'ios') ? 'ios' : 'md'));
  config.set('mode', defaultMode);
  doc.documentElement.setAttribute('mode', defaultMode);
  doc.documentElement.classList.add(defaultMode);

  if (config.getBoolean('_testing')) {
    config.set('animated', false);
  }

  const isIonicElement = elm => {
    var _a;

    return (_a = elm.tagName) === null || _a === void 0 ? void 0 : _a.startsWith('ION-');
  };

  const isAllowedIonicModeValue = elmMode => ['ios', 'md'].includes(elmMode);

  (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .setMode */ .PM)(elm => {
    while (elm) {
      const elmMode = elm.mode || elm.getAttribute('mode');

      if (elmMode) {
        if (isAllowedIonicModeValue(elmMode)) {
          return elmMode;
        } else if (isIonicElement(elm)) {
          console.warn('Invalid ionic mode: "' + elmMode + '", expected: "ios" or "md"');
        }
      }

      elm = elm.parentElement;
    }

    return defaultMode;
  });
};



/***/ }),

/***/ 8343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createColorClasses),
/* harmony export */   h: () => (/* binding */ hostContext)
/* harmony export */ });
/* unused harmony exports g, o */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */


const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};

const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }

  return [];
};

const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};

const SCHEME = /^[a-z][a-z0-9+\-.]*:/;

const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');

    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }

      return router.push(url, direction, animation);
    }
  }

  return false;
};



/***/ }),

/***/ 9761:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gu: () => (/* binding */ IonHeader),
/* harmony export */   bg: () => (/* binding */ setupIonicReact),
/* harmony export */   sr: () => (/* binding */ IonToolbar),
/* harmony export */   wd: () => (/* binding */ IonTitle)
/* harmony export */ });
/* unused harmony exports CreateAnimation, DefaultIonLifeCycleContext, IonAccordion, IonAccordionGroup, IonActionSheet, IonAlert, IonApp, IonAvatar, IonBackButton, IonBackdrop, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonLifeCycleContext, IonList, IonListHeader, IonLoading, IonMenu, IonMenuButton, IonMenuToggle, IonModal, IonNav, IonNavLink, IonNote, IonPage, IonPicker, IonPopover, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRedirect, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRoute, IonRouterContext, IonRouterLink, IonRouterOutlet, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSkeletonText, IonSpinner, IonSplitPane, IonTab, IonTabBar, IonTabButton, IonTabs, IonTabsContext, IonText, IonTextarea, IonThumbnail, IonToast, IonToggle, LocationHistory, NavContext, NavManager, RouteManagerContext, StackContext, ViewLifeCycleManager, ViewStacks, generateId, getConfig, getPlatforms, isPlatform, useIonActionSheet, useIonAlert, useIonLoading, useIonModal, useIonPicker, useIonPopover, useIonRouter, useIonToast, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter, useIonViewWillLeave, withIonLifeCycle */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ionic_core_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1824);
/* harmony import */ var _ionic_core_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6787);
/* harmony import */ var _ionic_core_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3790);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1395);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_core_components_ion_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4849);
/* harmony import */ var _ionic_core_components_ion_nav_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8732);
/* harmony import */ var _ionic_core_components_ion_title_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5381);
/* harmony import */ var _ionic_core_components_ion_toolbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9274);
/* harmony import */ var _ionic_core_components_ion_router_outlet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7501);
/* harmony import */ var _ionic_core_components_ion_tab_bar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8594);
/* harmony import */ var _ionic_core_components_ion_tab_button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6623);
/* harmony import */ var ionicons_components_ion_icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(374);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tslib__WEBPACK_IMPORTED_MODULE_1__]);
tslib__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

























































































const IonLifeCycleContext = /*@__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  onIonViewWillEnter: () => {
    return;
  },
  ionViewWillEnter: () => {
    return;
  },
  onIonViewDidEnter: () => {
    return;
  },
  ionViewDidEnter: () => {
    return;
  },
  onIonViewWillLeave: () => {
    return;
  },
  ionViewWillLeave: () => {
    return;
  },
  onIonViewDidLeave: () => {
    return;
  },
  ionViewDidLeave: () => {
    return;
  },
  cleanupIonViewWillEnter: () => {
    return;
  },
  cleanupIonViewDidEnter: () => {
    return;
  },
  cleanupIonViewWillLeave: () => {
    return;
  },
  cleanupIonViewDidLeave: () => {
    return;
  }
});
const DefaultIonLifeCycleContext = class {
  constructor() {
    this.ionViewWillEnterCallbacks = [];
    this.ionViewDidEnterCallbacks = [];
    this.ionViewWillLeaveCallbacks = [];
    this.ionViewDidLeaveCallbacks = [];
    this.ionViewWillEnterDestructorCallbacks = [];
    this.ionViewDidEnterDestructorCallbacks = [];
    this.ionViewWillLeaveDestructorCallbacks = [];
    this.ionViewDidLeaveDestructorCallbacks = [];
  }

  onIonViewWillEnter(callback) {
    if (callback.id) {
      const index = this.ionViewWillEnterCallbacks.findIndex(x => x.id === callback.id);

      if (index > -1) {
        this.ionViewWillEnterCallbacks[index] = callback;
      } else {
        this.ionViewWillEnterCallbacks.push(callback);
      }
    } else {
      this.ionViewWillEnterCallbacks.push(callback);
    }
  }

  teardownCallback(callback, callbacks) {
    // Find any destructors that have been registered for the callback
    const matches = callbacks.filter(x => x.id === callback.id);

    if (matches.length !== 0) {
      // Execute the destructor for each matching item
      matches.forEach(match => {
        if (match && typeof match.destructor === 'function') {
          match.destructor();
        }
      }); // Remove all matching items from the array

      callbacks = callbacks.filter(x => x.id !== callback.id);
    }
  }
  /**
   * Tears down the user-provided ionViewWillEnter lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */


  cleanupIonViewWillEnter(callback) {
    this.teardownCallback(callback, this.ionViewWillEnterDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewDidEnter lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */


  cleanupIonViewDidEnter(callback) {
    this.teardownCallback(callback, this.ionViewDidEnterDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewWillLeave lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */


  cleanupIonViewWillLeave(callback) {
    this.teardownCallback(callback, this.ionViewWillLeaveDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewDidLeave lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */


  cleanupIonViewDidLeave(callback) {
    this.teardownCallback(callback, this.ionViewDidLeaveDestructorCallbacks);
  }

  ionViewWillEnter() {
    this.ionViewWillEnterCallbacks.forEach(cb => {
      const destructor = cb();

      if (cb.id) {
        this.ionViewWillEnterDestructorCallbacks.push({
          id: cb.id,
          destructor
        });
      }
    });
  }

  onIonViewDidEnter(callback) {
    if (callback.id) {
      const index = this.ionViewDidEnterCallbacks.findIndex(x => x.id === callback.id);

      if (index > -1) {
        this.ionViewDidEnterCallbacks[index] = callback;
      } else {
        this.ionViewDidEnterCallbacks.push(callback);
      }
    } else {
      this.ionViewDidEnterCallbacks.push(callback);
    }
  }

  ionViewDidEnter() {
    this.ionViewDidEnterCallbacks.forEach(cb => {
      const destructor = cb();

      if (cb.id) {
        this.ionViewDidEnterDestructorCallbacks.push({
          id: cb.id,
          destructor
        });
      }
    });
  }

  onIonViewWillLeave(callback) {
    if (callback.id) {
      const index = this.ionViewWillLeaveCallbacks.findIndex(x => x.id === callback.id);

      if (index > -1) {
        this.ionViewWillLeaveCallbacks[index] = callback;
      } else {
        this.ionViewWillLeaveCallbacks.push(callback);
      }
    } else {
      this.ionViewWillLeaveCallbacks.push(callback);
    }
  }

  ionViewWillLeave() {
    this.ionViewWillLeaveCallbacks.forEach(cb => {
      const destructor = cb();

      if (cb.id) {
        this.ionViewWillLeaveDestructorCallbacks.push({
          id: cb.id,
          destructor
        });
      }
    });
  }

  onIonViewDidLeave(callback) {
    if (callback.id) {
      const index = this.ionViewDidLeaveCallbacks.findIndex(x => x.id === callback.id);

      if (index > -1) {
        this.ionViewDidLeaveCallbacks[index] = callback;
      } else {
        this.ionViewDidLeaveCallbacks.push(callback);
      }
    } else {
      this.ionViewDidLeaveCallbacks.push(callback);
    }
  }

  ionViewDidLeave() {
    this.ionViewDidLeaveCallbacks.forEach(cb => {
      const destructor = cb();

      if (cb.id) {
        this.ionViewDidLeaveDestructorCallbacks.push({
          id: cb.id,
          destructor
        });
      }
    });
    this.componentCanBeDestroyed();
  }

  onComponentCanBeDestroyed(callback) {
    this.componentCanBeDestroyedCallback = callback;
  }

  componentCanBeDestroyed() {
    if (this.componentCanBeDestroyedCallback) {
      this.componentCanBeDestroyedCallback();
    }
  }

}; // TODO(FW-2959): types

const withIonLifeCycle = WrappedComponent => {
  return class IonLifeCycle extends React.Component {
    constructor(props) {
      super(props);
      this.componentRef = /*#__PURE__*/React.createRef();
    }

    componentDidMount() {
      const element = this.componentRef.current;
      this.context.onIonViewWillEnter(() => {
        if (element && element.ionViewWillEnter) {
          element.ionViewWillEnter();
        }
      });
      this.context.onIonViewDidEnter(() => {
        if (element && element.ionViewDidEnter) {
          element.ionViewDidEnter();
        }
      });
      this.context.onIonViewWillLeave(() => {
        if (element && element.ionViewWillLeave) {
          element.ionViewWillLeave();
        }
      });
      this.context.onIonViewDidLeave(() => {
        if (element && element.ionViewDidLeave) {
          element.ionViewDidLeave();
        }
      });
    }

    render() {
      return /*#__PURE__*/React.createElement(IonLifeCycleContext.Consumer, null, context => {
        this.context = context;
        return /*#__PURE__*/React.createElement(WrappedComponent, Object.assign({
          ref: this.componentRef
        }, this.props));
      });
    }

  };
};

const useIonViewWillEnter = (callback, deps = []) => {
  const context = useContext(IonLifeCycleContext);
  const id = useRef();
  id.current = id.current || Math.floor(Math.random() * 1000000);
  useEffect(() => {
    callback.id = id.current;
    context.onIonViewWillEnter(callback);
    return () => {
      context.cleanupIonViewWillEnter(callback);
    };
  }, deps);
};

const useIonViewDidEnter = (callback, deps = []) => {
  const context = useContext(IonLifeCycleContext);
  const id = useRef();
  id.current = id.current || Math.floor(Math.random() * 1000000);
  useEffect(() => {
    callback.id = id.current;
    context.onIonViewDidEnter(callback);
    return () => {
      context.cleanupIonViewDidEnter(callback);
    };
  }, deps);
};

const useIonViewWillLeave = (callback, deps = []) => {
  const context = useContext(IonLifeCycleContext);
  const id = useRef();
  id.current = id.current || Math.floor(Math.random() * 1000000);
  useEffect(() => {
    callback.id = id.current;
    context.onIonViewWillLeave(callback);
    return () => {
      context.cleanupIonViewWillLeave(callback);
    };
  }, deps);
};

const useIonViewDidLeave = (callback, deps = []) => {
  const context = useContext(IonLifeCycleContext);
  const id = useRef();
  id.current = id.current || Math.floor(Math.random() * 1000000);
  useEffect(() => {
    callback.id = id.current;
    context.onIonViewDidLeave(callback);
    return () => {
      context.cleanupIonViewDidLeave(callback);
    };
  }, deps);
};

const NavContext = /*@__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  getIonRedirect: () => undefined,
  getIonRoute: () => undefined,
  getPageManager: () => undefined,
  getStackManager: () => undefined,
  goBack: route => {
    if (false) {}
  },
  navigate: path => {
    if (false) {}
  },
  hasIonicRouter: () => false,
  routeInfo: undefined,
  setCurrentTab: () => undefined,
  changeTab: (_tab, path) => {
    if (false) {}
  },
  resetTab: (_tab, path) => {
    if (false) {}
  }
});

const dashToPascalCase = str => str.toLowerCase().split('-').map(segment => segment.charAt(0).toUpperCase() + segment.slice(1)).join('');

const camelToDashCase = str => str.replace(/([A-Z])/g, m => `-${m[0].toLowerCase()}`);

const attachProps = (node, newProps, oldProps = {}) => {
  // some test frameworks don't render DOM elements, so we test here to make sure we are dealing with DOM first
  if (node instanceof Element) {
    // add any classes in className to the class list
    const className = getClassName(node.classList, newProps, oldProps);

    if (className !== '') {
      node.className = className;
    }

    Object.keys(newProps).forEach(name => {
      if (name === 'children' || name === 'style' || name === 'ref' || name === 'class' || name === 'className' || name === 'forwardedRef') {
        return;
      }

      if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
        const eventName = name.substring(2);
        const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);

        if (!isCoveredByReact(eventNameLc)) {
          syncEvent(node, eventNameLc, newProps[name]);
        }
      } else {
        node[name] = newProps[name];
        const propType = typeof newProps[name];

        if (propType === 'string') {
          node.setAttribute(camelToDashCase(name), newProps[name]);
        }
      }
    });
  }
};

const getClassName = (classList, newProps, oldProps) => {
  const newClassProp = newProps.className || newProps.class;
  const oldClassProp = oldProps.className || oldProps.class; // map the classes to Maps for performance

  const currentClasses = arrayToMap(classList);
  const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(' ') : []);
  const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(' ') : []);
  const finalClassNames = []; // loop through each of the current classes on the component
  // to see if it should be a part of the classNames added

  currentClasses.forEach(currentClass => {
    if (incomingPropClasses.has(currentClass)) {
      // add it as its already included in classnames coming in from newProps
      finalClassNames.push(currentClass);
      incomingPropClasses.delete(currentClass);
    } else if (!oldPropClasses.has(currentClass)) {
      // add it as it has NOT been removed by user
      finalClassNames.push(currentClass);
    }
  });
  incomingPropClasses.forEach(s => finalClassNames.push(s));
  return finalClassNames.join(' ');
};
/**
 * Transforms a React event name to a browser event name.
 */


const transformReactEventName = eventNameSuffix => {
  switch (eventNameSuffix) {
    case 'doubleclick':
      return 'dblclick';
  }

  return eventNameSuffix;
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */


const isCoveredByReact = eventNameSuffix => {
  if (typeof document === 'undefined') {
    return true;
  } else {
    const eventName = 'on' + transformReactEventName(eventNameSuffix);
    let isSupported = (eventName in document);

    if (!isSupported) {
      const element = document.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    return isSupported;
  }
};

const syncEvent = (node, eventName, newEventHandler) => {
  const eventStore = node.__events || (node.__events = {});
  const oldEventHandler = eventStore[eventName]; // Remove old listener so they don't double up.

  if (oldEventHandler) {
    node.removeEventListener(eventName, oldEventHandler);
  } // Bind new listener.


  node.addEventListener(eventName, eventStore[eventName] = function handler(e) {
    if (newEventHandler) {
      newEventHandler.call(this, e);
    }
  });
};

const arrayToMap = arr => {
  const map = new Map();
  arr.forEach(s => map.set(s, s));
  return map;
};

const setRef = (ref, value) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref != null) {
    // Cast as a MutableRef so we can assign current
    ref.current = value;
  }
};

const mergeRefs = (...refs) => {
  return value => {
    refs.forEach(ref => {
      setRef(ref, value);
    });
  };
};

const createForwardRef$1 = (ReactComponent, displayName) => {
  const forwardRef = (props, ref) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReactComponent, Object.assign({}, props, {
      forwardedRef: ref
    }));
  };

  forwardRef.displayName = displayName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(forwardRef);
};

const defineCustomElement = (tagName, customElement) => {
  if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
    customElements.define(tagName, customElement);
  }
};

const createReactComponent = (tagName, ReactComponentContext, manipulatePropsFunction, defineCustomElement) => {
  if (defineCustomElement !== undefined) {
    defineCustomElement();
  }

  const displayName = dashToPascalCase(tagName);
  const ReactComponent = class extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    constructor(props) {
      super(props);

      this.setComponentElRef = element => {
        this.componentEl = element;
      };
    }

    componentDidMount() {
      this.componentDidUpdate(this.props);
    }

    componentDidUpdate(prevProps) {
      attachProps(this.componentEl, this.props, prevProps);
    }

    render() {
      const _a = this.props,
            {
        children,
        forwardedRef,
        style,
        className,
        ref
      } = _a,
            cProps = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "forwardedRef", "style", "className", "ref"]);

      let propsToPass = Object.keys(cProps).reduce((acc, name) => {
        const value = cProps[name];

        if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
          const eventName = name.substring(2).toLowerCase();

          if (typeof document !== 'undefined' && isCoveredByReact(eventName)) {
            acc[name] = value;
          }
        } else {
          // we should only render strings, booleans, and numbers as attrs in html.
          // objects, functions, arrays etc get synced via properties on mount.
          const type = typeof value;

          if (type === 'string' || type === 'boolean' || type === 'number') {
            acc[camelToDashCase(name)] = value;
          }
        }

        return acc;
      }, {});

      if (manipulatePropsFunction) {
        propsToPass = manipulatePropsFunction(this.props, propsToPass);
      }

      const newProps = Object.assign(Object.assign({}, propsToPass), {
        ref: mergeRefs(forwardedRef, this.setComponentElRef),
        style
      });
      /**
       * We use createElement here instead of
       * React.createElement to work around a
       * bug in Vite (https://github.com/vitejs/vite/issues/6104).
       * React.createElement causes all elements to be rendered
       * as <tagname> instead of the actual Web Component.
       */

      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tagName, newProps, children);
    }

    static get displayName() {
      return displayName;
    }

  }; // If context was passed to createReactComponent then conditionally add it to the Component Class

  if (ReactComponentContext) {
    ReactComponent.contextType = ReactComponentContext;
  }

  return createForwardRef$1(ReactComponent, displayName);
};
/* eslint-disable */

/* tslint:disable */

/* auto-generated react proxies */


const IonAccordion = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-accordion', undefined, undefined, defineCustomElement$1)));
const IonAccordionGroup = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-accordion-group', undefined, undefined, defineCustomElement$2)));
const IonAvatar = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-avatar', undefined, undefined, defineCustomElement$3)));
const IonBackdrop = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-backdrop', undefined, undefined, defineCustomElement$4)));
const IonBadge = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-badge', undefined, undefined, defineCustomElement$5)));
const IonBreadcrumbs = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-breadcrumbs', undefined, undefined, defineCustomElement$6)));
const IonButtons = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-buttons', undefined, undefined, defineCustomElement$7)));
const IonCardContent = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-card-content', undefined, undefined, defineCustomElement$8)));
const IonCardHeader = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-card-header', undefined, undefined, defineCustomElement$9)));
const IonCardSubtitle = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-card-subtitle', undefined, undefined, defineCustomElement$a)));
const IonCardTitle = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-card-title', undefined, undefined, defineCustomElement$b)));
const IonCheckbox = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-checkbox', undefined, undefined, defineCustomElement$c)));
const IonChip = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-chip', undefined, undefined, defineCustomElement$d)));
const IonCol = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-col', undefined, undefined, defineCustomElement$e)));
const IonContent = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-content', undefined, undefined, defineCustomElement$f)));
const IonDatetime = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-datetime', undefined, undefined, defineCustomElement$g)));
const IonDatetimeButton = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-datetime-button', undefined, undefined, defineCustomElement$h)));
const IonFab = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-fab', undefined, undefined, defineCustomElement$i)));
const IonFabList = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-fab-list', undefined, undefined, defineCustomElement$j)));
const IonFooter = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-footer', undefined, undefined, defineCustomElement$k)));
const IonGrid = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-grid', undefined, undefined, defineCustomElement$l)));
const IonHeader = /*@__PURE__*/createReactComponent('ion-header', undefined, undefined, _ionic_core_components_ion_header_js__WEBPACK_IMPORTED_MODULE_4__/* .defineCustomElement */ .M);
const IonImg = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-img', undefined, undefined, defineCustomElement$n)));
const IonInfiniteScroll = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-infinite-scroll', undefined, undefined, defineCustomElement$o)));
const IonInfiniteScrollContent = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-infinite-scroll-content', undefined, undefined, defineCustomElement$p)));
const IonInput = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-input', undefined, undefined, defineCustomElement$q)));
const IonItemDivider = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-item-divider', undefined, undefined, defineCustomElement$r)));
const IonItemGroup = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-item-group', undefined, undefined, defineCustomElement$s)));
const IonItemOptions = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-item-options', undefined, undefined, defineCustomElement$t)));
const IonItemSliding = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-item-sliding', undefined, undefined, defineCustomElement$u)));
const IonLabel = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-label', undefined, undefined, defineCustomElement$v)));
const IonList = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-list', undefined, undefined, defineCustomElement$w)));
const IonListHeader = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-list-header', undefined, undefined, defineCustomElement$x)));
const IonMenu = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-menu', undefined, undefined, defineCustomElement$y)));
const IonMenuButton = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-menu-button', undefined, undefined, defineCustomElement$z)));
const IonMenuToggle = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-menu-toggle', undefined, undefined, defineCustomElement$A)));
const IonNavLink = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-nav-link', undefined, undefined, defineCustomElement$B)));
const IonNote = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-note', undefined, undefined, defineCustomElement$C)));
const IonProgressBar = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-progress-bar', undefined, undefined, defineCustomElement$D)));
const IonRadio = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-radio', undefined, undefined, defineCustomElement$E)));
const IonRadioGroup = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-radio-group', undefined, undefined, defineCustomElement$F)));
const IonRange = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-range', undefined, undefined, defineCustomElement$G)));
const IonRefresher = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-refresher', undefined, undefined, defineCustomElement$H)));
const IonRefresherContent = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-refresher-content', undefined, undefined, defineCustomElement$I)));
const IonReorder = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-reorder', undefined, undefined, defineCustomElement$J)));
const IonReorderGroup = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-reorder-group', undefined, undefined, defineCustomElement$K)));
const IonRippleEffect = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-ripple-effect', undefined, undefined, defineCustomElement$L)));
const IonRow = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-row', undefined, undefined, defineCustomElement$M)));
const IonSearchbar = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-searchbar', undefined, undefined, defineCustomElement$N)));
const IonSegment = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-segment', undefined, undefined, defineCustomElement$O)));
const IonSegmentButton = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-segment-button', undefined, undefined, defineCustomElement$P)));
const IonSelect = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-select', undefined, undefined, defineCustomElement$Q)));
const IonSelectOption = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-select-option', undefined, undefined, defineCustomElement$R)));
const IonSkeletonText = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-skeleton-text', undefined, undefined, defineCustomElement$S)));
const IonSpinner = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-spinner', undefined, undefined, defineCustomElement$T)));
const IonSplitPane = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-split-pane', undefined, undefined, defineCustomElement$U)));
const IonTab = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-tab', undefined, undefined, defineCustomElement$V)));
const IonText = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-text', undefined, undefined, defineCustomElement$W)));
const IonTextarea = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-textarea', undefined, undefined, defineCustomElement$X)));
const IonThumbnail = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-thumbnail', undefined, undefined, defineCustomElement$Y)));
const IonTitle = /*@__PURE__*/createReactComponent('ion-title', undefined, undefined, _ionic_core_components_ion_title_js__WEBPACK_IMPORTED_MODULE_5__/* .defineCustomElement */ .M);
const IonToggle = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-toggle', undefined, undefined, defineCustomElement$_)));
const IonToolbar = /*@__PURE__*/createReactComponent('ion-toolbar', undefined, undefined, _ionic_core_components_ion_toolbar_js__WEBPACK_IMPORTED_MODULE_6__/* .defineCustomElement */ .M);

const createForwardRef = (ReactComponent, // TODO(FW-2959): type
displayName) => {
  const forwardRef = (props, ref) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReactComponent, Object.assign({}, props, {
      forwardedRef: ref
    }));
  };

  forwardRef.displayName = displayName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(forwardRef);
};

const isPlatform = platform => {
  return isPlatform$1(window, platform);
};

const getPlatforms = () => {
  return getPlatforms$1(window);
};

const getConfig = () => {
  if (false) {}

  return null;
};

const createRoutingComponent = (tagName, customElement) => {
  defineCustomElement(tagName, customElement);
  const displayName = dashToPascalCase(tagName);
  const ReactComponent = class extends React.Component {
    constructor(props) {
      super(props);

      this.handleClick = e => {
        const {
          routerLink,
          routerDirection,
          routerOptions,
          routerAnimation
        } = this.props;

        if (routerLink !== undefined) {
          e.preventDefault();
          this.context.navigate(routerLink, routerDirection, undefined, routerAnimation, routerOptions);
        }
      }; // Create a local ref to to attach props to the wrapped element.


      this.ref = /*#__PURE__*/React.createRef(); // React refs must be stable (not created inline).

      this.stableMergedRefs = mergeRefs(this.ref, this.props.forwardedRef);
    }

    componentDidMount() {
      this.componentDidUpdate(this.props);
    }

    componentDidUpdate(prevProps) {
      const node = this.ref.current;
      attachProps(node, this.props, prevProps);
    }

    render() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _a = this.props,
            {
        children,
        forwardedRef,
        style,
        className,
        ref
      } = _a,
            cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);

      const propsToPass = Object.keys(cProps).reduce((acc, name) => {
        if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
          const eventName = name.substring(2).toLowerCase();

          if (isCoveredByReact(eventName)) {
            acc[name] = cProps[name];
          }
        } else if (['string', 'boolean', 'number'].includes(typeof cProps[name])) {
          acc[camelToDashCase(name)] = cProps[name];
        }

        return acc;
      }, {});
      const newProps = Object.assign(Object.assign({}, propsToPass), {
        ref: this.stableMergedRefs,
        style
      });

      if (this.props.routerLink && !this.props.href) {
        newProps.href = this.props.routerLink;
      }

      if (newProps.onClick) {
        const oldClick = newProps.onClick;

        newProps.onClick = e => {
          oldClick(e);

          if (!e.defaultPrevented) {
            this.handleClick(e);
          }
        };
      } else {
        newProps.onClick = this.handleClick;
      }

      return /*#__PURE__*/createElement(tagName, newProps, children);
    }

    static get displayName() {
      return displayName;
    }

    static get contextType() {
      return NavContext;
    }

  };
  return createForwardRef(ReactComponent, displayName);
};

const IonRouterLink = /*@__PURE__*/(/* unused pure expression or super */ null && (createRoutingComponent('ion-router-link', IonRouterLink$1)));
const IonButton = /*@__PURE__*/(/* unused pure expression or super */ null && (createRoutingComponent('ion-button', IonButton$1)));
const IonCard = /*@__PURE__*/(/* unused pure expression or super */ null && (createRoutingComponent('ion-card', IonCard$1)));
const IonFabButton = /*@__PURE__*/(/* unused pure expression or super */ null && (createRoutingComponent('ion-fab-button', IonFabButton$1)));
const IonItem = /*@__PURE__*/(/* unused pure expression or super */ null && (createRoutingComponent('ion-item', IonItem$1)));
const IonItemOption = /*@__PURE__*/(/* unused pure expression or super */ null && (createRoutingComponent('ion-item-option', IonItemOption$1)));
const IonBreadcrumb = /*@__PURE__*/(/* unused pure expression or super */ null && (createRoutingComponent('ion-breadcrumb', IonBreadcrumb$1)));
/**
 * The @stencil/react-output-target will bind event listeners for any
 * attached props that use the `on` prefix. This function will remove
 * those event listeners when the component is unmounted.
 *
 * This prevents memory leaks and React state updates on unmounted components.
 */

const detachProps = (node, props) => {
  if (node instanceof Element) {
    Object.keys(props).forEach(name => {
      if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
        const eventName = name.substring(2);
        const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);

        if (!isCoveredByReact(eventNameLc)) {
          /**
           * Detach custom event bindings (not built-in React events)
           * that were added by the @stencil/react-output-target attachProps function.
           */
          detachEvent(node, eventNameLc);
        }
      }
    });
  }
};

const detachEvent = (node, eventName) => {
  const eventStore = node.__events || (node.__events = {});
  /**
   * If the event listener was added by attachProps, it will
   * be stored in the __events object.
   */

  const eventHandler = eventStore[eventName];

  if (eventHandler) {
    node.removeEventListener(eventName, eventHandler);
    eventStore[eventName] = undefined;
  }
};

const createInlineOverlayComponent = (tagName, defineCustomElement, hasDelegateHost) => {
  if (defineCustomElement) {
    defineCustomElement();
  }

  const displayName = dashToPascalCase(tagName);
  const ReactComponent = class extends React.Component {
    constructor(props) {
      super(props);

      this.handleIonMount = () => {
        /**
         * Mount the inner component when the
         * overlay is about to open.
         *
         * For ion-popover, this is when `ionMount` is emitted.
         * For other overlays, this is when `willPresent` is emitted.
         */
        this.setState({
          isOpen: true
        });
      };

      this.handleWillPresent = evt => {
        this.setState({
          isOpen: true
        });
        /**
         * Manually call the onWillPresent
         * handler if present as setState will
         * cause the event handlers to be
         * destroyed and re-created.
         */

        this.props.onWillPresent && this.props.onWillPresent(evt);
      };

      this.handleDidDismiss = evt => {
        const wrapper = this.wrapperRef.current;
        const el = this.ref.current;
        /**
         * This component might be unmounted already, if the containing
         * element was removed while the overlay was still open. (For
         * example, if an item contains an inline overlay with a button
         * that removes the item.)
         */

        if (wrapper && el) {
          el.append(wrapper);
          this.setState({
            isOpen: false
          });
        }

        this.props.onDidDismiss && this.props.onDidDismiss(evt);
      }; // Create a local ref to to attach props to the wrapped element.


      this.ref = /*#__PURE__*/React.createRef(); // React refs must be stable (not created inline).

      this.stableMergedRefs = mergeRefs(this.ref, this.props.forwardedRef); // Component is hidden by default

      this.state = {
        isOpen: false
      }; // Create a local ref to the inner child element.

      this.wrapperRef = /*#__PURE__*/React.createRef();
    }

    componentDidMount() {
      var _a, _b, _c;

      this.componentDidUpdate(this.props);
      (_a = this.ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener('ionMount', this.handleIonMount);
      (_b = this.ref.current) === null || _b === void 0 ? void 0 : _b.addEventListener('willPresent', this.handleWillPresent);
      (_c = this.ref.current) === null || _c === void 0 ? void 0 : _c.addEventListener('didDismiss', this.handleDidDismiss);
    }

    componentDidUpdate(prevProps) {
      const node = this.ref.current;
      /**
       * onDidDismiss and onWillPresent have manual implementations that
       * will invoke the original handler. We need to filter those out
       * so they don't get attached twice and called twice.
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

      const _a = this.props,
            cProps = __rest(_a, ["onDidDismiss", "onWillPresent"]);

      attachProps(node, cProps, prevProps);
    }

    componentWillUnmount() {
      const node = this.ref.current;
      /**
       * If the overlay is being unmounted, but is still
       * open, this means the unmount was triggered outside
       * of the overlay being dismissed.
       *
       * This can happen with:
       * - The parent component being unmounted
       * - The overlay being conditionally rendered
       * - A route change (push/pop/replace)
       *
       * Unmounting the overlay at this stage should skip
       * the dismiss lifecycle, including skipping the transition.
       *
       */

      if (node && this.state.isOpen) {
        /**
         * Detach the local event listener that performs the state updates,
         * before dismissing the overlay, to prevent the callback handlers
         * executing after the component has been unmounted. This is to
         * avoid memory leaks.
         */
        node.removeEventListener('didDismiss', this.handleDidDismiss);
        node.remove();
        detachProps(node, this.props);
      }
    }

    render() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _a = this.props,
            {
        children,
        forwardedRef,
        style,
        className,
        ref
      } = _a,
            cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);

      const propsToPass = Object.keys(cProps).reduce((acc, name) => {
        if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
          const eventName = name.substring(2).toLowerCase();

          if (isCoveredByReact(eventName)) {
            acc[name] = cProps[name];
          }
        } else if (['string', 'boolean', 'number'].includes(typeof cProps[name])) {
          acc[camelToDashCase(name)] = cProps[name];
        }

        return acc;
      }, {});
      const newProps = Object.assign(Object.assign({}, propsToPass), {
        ref: this.stableMergedRefs,
        style
      });
      /**
       * Some overlays need `.ion-page` so content
       * takes up the full size of the parent overlay.
       */

      const getWrapperClasses = () => {
        if (hasDelegateHost) {
          return `${DELEGATE_HOST} ion-page`;
        }

        return DELEGATE_HOST;
      };

      return /*#__PURE__*/createElement('template', {}, /*#__PURE__*/createElement(tagName, newProps,
      /**
       * We only want the inner component
       * to be mounted if the overlay is open,
       * so conditionally render the component
       * based on the isOpen state.
       */
      this.state.isOpen || this.props.keepContentsMounted ? /*#__PURE__*/createElement('div', {
        ref: this.wrapperRef,
        className: getWrapperClasses()
      }, children) : null));
    }

    static get displayName() {
      return displayName;
    }

  };
  return createForwardRef(ReactComponent, displayName);
};

const DELEGATE_HOST = 'ion-delegate-host';
const IonAlert = /*@__PURE__*/(/* unused pure expression or super */ null && (createInlineOverlayComponent('ion-alert', defineCustomElement$10)));
const IonLoading = /*@__PURE__*/(/* unused pure expression or super */ null && (createInlineOverlayComponent('ion-loading', defineCustomElement$11)));
const IonToast = /*@__PURE__*/(/* unused pure expression or super */ null && (createInlineOverlayComponent('ion-toast', defineCustomElement$12)));
const IonPicker = /*@__PURE__*/(/* unused pure expression or super */ null && (createInlineOverlayComponent('ion-picker', defineCustomElement$13)));
const IonActionSheet = /*@__PURE__*/(/* unused pure expression or super */ null && (createInlineOverlayComponent('ion-action-sheet', defineCustomElement$14)));
const IonModal = /*@__PURE__*/(/* unused pure expression or super */ null && (createInlineOverlayComponent('ion-modal', defineCustomElement$15, true)));
const IonPopover = /*@__PURE__*/(/* unused pure expression or super */ null && (createInlineOverlayComponent('ion-popover', defineCustomElement$16)));
const IonContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  addOverlay: () => {
    return;
  },
  removeOverlay: () => {
    return;
  }
});
/**
 * Manages overlays that are added via the useOverlay hook.
 * This is a standalone component so changes to its children don't cause other descendant
 * components to re-render when overlays are added. However, we need to communicate with the IonContext
 * that is set up in <IonApp />, so we register callbacks so when overlays are added to IonContext,
 * they ultimately added here.
 */

const IonOverlayManager = ({
  onAddOverlay,
  onRemoveOverlay
}) => {
  /**
   * Because of the way we're passing around the addOverlay and removeOverlay
   * callbacks, by the time they finally get called, they use a stale reference
   * to the state that only has the initial values. So if two overlays are opened
   * at the same time, both using useIonModal or similar (such as through nesting),
   * the second will erase the first from the overlays list. This causes the content
   * of the first overlay to unmount.
   *
   * We wrap the state in useRef to ensure the two callbacks always use the most
   * up-to-date version.
   *
   * Further reading: https://stackoverflow.com/a/56554056
   */
  const {
    0: overlays,
    1: setOverlays
  } = useState({});
  const overlaysRef = useRef({});
  useEffect(() => {
    /* Setup the callbacks that get called from <IonApp /> */
    onAddOverlay(addOverlay);
    onRemoveOverlay(removeOverlay);
  }, []);

  const addOverlay = (id, component, containerElement) => {
    const newOverlays = Object.assign({}, overlaysRef.current);
    newOverlays[id] = {
      component,
      containerElement
    };
    /**
     * In order for this function to use the latest data
     * we need to update the ref synchronously.
     * However, updating a ref does not cause a re-render
     * which is why we still update the state.
     *
     * Note that updating the ref in the body
     * of IonOverlayManager is not sufficient
     * because that relies on overlaysRef being
     * updated as part of React's render loop. State updates
     * are batched, so updating the state twice in quick succession does
     * not necessarily result in 2 separate render calls.
     * This means if two modals are added one after the other,
     * the first modal will not have been added to
     * overlaysRef since React has not re-rendered yet.
     * More info: https://react.dev/reference/react/useState#setstate-caveats
     */

    overlaysRef.current = newOverlays;
    setOverlays(newOverlays);
  };

  const removeOverlay = id => {
    const newOverlays = Object.assign({}, overlaysRef.current);
    delete newOverlays[id];
    /**
     * In order for this function to use the latest data
     * we need to update the ref synchronously.
     * However, updating a ref does not cause a re-render
     * which is why we still update the state.
     *
     * Note that updating the ref in the body
     * of IonOverlayManager is not sufficient
     * because that relies on overlaysRef being
     * updated as part of React's render loop. State updates
     * are batched, so updating the state twice in quick succession does
     * not necessarily result in 2 separate render calls.
     * This means if two modals are added one after the other,
     * the first modal will not have been added to
     * overlaysRef since React has not re-rendered yet.
     * More info: https://react.dev/reference/react/useState#setstate-caveats
     */

    overlaysRef.current = newOverlays;
    setOverlays(newOverlays);
  };

  const overlayKeys = Object.keys(overlays);
  return /*#__PURE__*/React.createElement(React.Fragment, null, overlayKeys.map(key => {
    const overlay = overlays[key];
    return /*#__PURE__*/ReactDOM.createPortal(overlay.component, overlay.containerElement, `overlay-${key}`);
  }));
};

const IonTabButtonInner = /*@__PURE__*/createReactComponent('ion-tab-button', undefined, undefined, _ionic_core_components_ion_tab_button_js__WEBPACK_IMPORTED_MODULE_7__/* .defineCustomElement */ .M);
const IonTabBarInner = /*@__PURE__*/createReactComponent('ion-tab-bar', undefined, undefined, _ionic_core_components_ion_tab_bar_js__WEBPACK_IMPORTED_MODULE_8__/* .defineCustomElement */ .M);
const IonBackButtonInner = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-back-button', undefined, undefined, defineCustomElement$1b)));
const IonRouterOutletInner = /*@__PURE__*/createReactComponent('ion-router-outlet', undefined, undefined, _ionic_core_components_ion_router_outlet_js__WEBPACK_IMPORTED_MODULE_9__/* .defineCustomElement */ .M);
const IonAppInner = /*@__PURE__*/(/* unused pure expression or super */ null && (createReactComponent('ion-app', undefined, undefined, defineCustomElement$1c))); // ionicons

const IonIconInner = /*@__PURE__*/createReactComponent('ion-icon', undefined, undefined, ionicons_components_ion_icon_js__WEBPACK_IMPORTED_MODULE_3__/* .defineCustomElement */ .M);

const IonApp = /*@__PURE__*/(/* unused pure expression or super */ null && ((() => class extends React.Component {
  constructor(props) {
    super(props);
    /*
      Wire up methods to call into IonOverlayManager
    */

    this.ionContext = {
      addOverlay: (id, overlay, containerElement) => {
        if (this.addOverlayCallback) {
          this.addOverlayCallback(id, overlay, containerElement);
        }
      },
      removeOverlay: id => {
        if (this.removeOverlayCallback) {
          this.removeOverlayCallback(id);
        }
      }
    };
  }

  render() {
    return /*#__PURE__*/React.createElement(IonContext.Provider, {
      value: this.ionContext
    }, /*#__PURE__*/React.createElement(IonAppInner, Object.assign({}, this.props), this.props.children), /*#__PURE__*/React.createElement(IonOverlayManager, {
      onAddOverlay: callback => {
        this.addOverlayCallback = callback;
      },
      onRemoveOverlay: callback => {
        this.removeOverlayCallback = callback;
      }
    }));
  }

  static get displayName() {
    return 'IonApp';
  }

})()));

const StackContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  registerIonPage: () => undefined,
  isInOutlet: () => false
});

class PageManager extends (react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent) {
  constructor(props) {
    super(props);
    this.ionPageElementRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef(); // React refs must be stable (not created inline).

    this.stableMergedRefs = mergeRefs(this.ionPageElementRef, this.props.forwardedRef);
    /**
     * This binds the scope of the following methods to the class scope.
     * The `.bind` method returns a new function, so we need to assign it
     * in the constructor rather than when adding or removing the listeners
     * to avoid creating a new function.
     */

    this.ionViewWillEnterHandler = this.ionViewWillEnterHandler.bind(this);
    this.ionViewDidEnterHandler = this.ionViewDidEnterHandler.bind(this);
    this.ionViewWillLeaveHandler = this.ionViewWillLeaveHandler.bind(this);
    this.ionViewDidLeaveHandler = this.ionViewDidLeaveHandler.bind(this);
  }

  componentDidMount() {
    if (this.ionPageElementRef.current) {
      if (this.context.isInOutlet()) {
        this.ionPageElementRef.current.classList.add('ion-page-invisible');
      }

      this.context.registerIonPage(this.ionPageElementRef.current, this.props.routeInfo);
      this.ionPageElementRef.current.addEventListener('ionViewWillEnter', this.ionViewWillEnterHandler);
      this.ionPageElementRef.current.addEventListener('ionViewDidEnter', this.ionViewDidEnterHandler);
      this.ionPageElementRef.current.addEventListener('ionViewWillLeave', this.ionViewWillLeaveHandler);
      this.ionPageElementRef.current.addEventListener('ionViewDidLeave', this.ionViewDidLeaveHandler);
    }
  }

  componentWillUnmount() {
    if (this.ionPageElementRef.current) {
      this.ionPageElementRef.current.removeEventListener('ionViewWillEnter', this.ionViewWillEnterHandler);
      this.ionPageElementRef.current.removeEventListener('ionViewDidEnter', this.ionViewDidEnterHandler);
      this.ionPageElementRef.current.removeEventListener('ionViewWillLeave', this.ionViewWillLeaveHandler);
      this.ionPageElementRef.current.removeEventListener('ionViewDidLeave', this.ionViewDidLeaveHandler);
    }
  }

  ionViewWillEnterHandler() {
    this.ionLifeCycleContext.ionViewWillEnter();
  }

  ionViewDidEnterHandler() {
    this.ionLifeCycleContext.ionViewDidEnter();
  }

  ionViewWillLeaveHandler() {
    this.ionLifeCycleContext.ionViewWillLeave();
  }

  ionViewDidLeaveHandler() {
    this.ionLifeCycleContext.ionViewDidLeave();
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _a = this.props,
          {
      className,
      children,
      routeInfo,
      forwardedRef
    } = _a,
          props = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["className", "children", "routeInfo", "forwardedRef"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IonLifeCycleContext.Consumer, null, context => {
      this.ionLifeCycleContext = context;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", Object.assign({
        className: className ? `${className} ion-page` : `ion-page`,
        ref: this.stableMergedRefs
      }, props), children);
    });
  }

  static get contextType() {
    return StackContext;
  }

}

class IonPageInternal extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    const _a = this.props,
          {
      className,
      children,
      forwardedRef
    } = _a,
          props = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["className", "children", "forwardedRef"]);

    return this.context.hasIonicRouter() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PageManager, Object.assign({
      className: className ? `${className}` : '',
      routeInfo: this.context.routeInfo,
      forwardedRef: forwardedRef
    }, props), children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", Object.assign({
      className: className ? `ion-page ${className}` : 'ion-page',
      ref: forwardedRef
    }, props), children);
  }

  static get displayName() {
    return 'IonPage';
  }

  static get contextType() {
    return NavContext;
  }

}

const IonPage = createForwardRef(IonPageInternal, 'IonPage');
const ids = {
  main: 0
};

const generateId = (type = 'main') => {
  var _a;

  const id = ((_a = ids[type]) !== null && _a !== void 0 ? _a : 0) + 1;
  ids[type] = id;
  return id.toString();
};

const ReactDelegate = (addView, removeView) => {
  const refMap = new WeakMap();
  const reactDelegateId = `react-delegate-${generateId()}`; // Incrementing counter to generate unique keys for each view

  let id = 0;

  const attachViewToDom = async (parentElement, component, propsOrDataObj, cssClasses) => {
    const div = document.createElement('div');
    cssClasses && div.classList.add(...cssClasses);
    parentElement.appendChild(div);
    const componentWithProps = component(propsOrDataObj);
    const key = `${reactDelegateId}-${id++}`;
    const hostComponent = /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(componentWithProps, div, key);
    refMap.set(div, hostComponent);
    addView(hostComponent);
    return Promise.resolve(div);
  };

  const removeViewFromDom = (_container, component) => {
    const hostComponent = refMap.get(component);
    hostComponent && removeView(hostComponent);
    component.remove();
    return Promise.resolve();
  };

  return {
    attachViewToDom,
    removeViewFromDom
  };
};

const IonNavInner = createReactComponent('ion-nav', undefined, undefined, _ionic_core_components_ion_nav_js__WEBPACK_IMPORTED_MODULE_10__/* .defineCustomElement */ .M); // eslint-disable-next-line @typescript-eslint/no-unused-vars

const IonNavInternal = _a => {
  var {
    children,
    forwardedRef
  } = _a,
      restOfProps = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "forwardedRef"]);

  const {
    0: views,
    1: setViews
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  /**
   * Allows us to create React components that are rendered within
   * the context of the IonNav component.
   */

  const addView = view => setViews(existingViews => [...existingViews, view]);

  const removeView = view => setViews(existingViews => existingViews.filter(v => v !== view));

  const delegate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ReactDelegate(addView, removeView), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IonNavInner, Object.assign({
    delegate: delegate,
    ref: forwardedRef
  }, restOfProps), views);
};

const IonNav = createForwardRef(IonNavInternal, 'IonNav');
const IonTabsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  activeTab: undefined,
  selectTab: () => false
});
const HTMLElementSSR = typeof HTMLElement !== 'undefined' ? HTMLElement : class {};

class OutletPageManager extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.outletIsReady = false;
    /**
     * This binds the scope of the following methods to the class scope.
     * The `.bind` method returns a new function, so we need to assign it
     * in the constructor rather than when adding or removing the listeners
     * to avoid creating a new function.
     */

    this.ionViewWillEnterHandler = this.ionViewWillEnterHandler.bind(this);
    this.ionViewDidEnterHandler = this.ionViewDidEnterHandler.bind(this);
    this.ionViewWillLeaveHandler = this.ionViewWillLeaveHandler.bind(this);
    this.ionViewDidLeaveHandler = this.ionViewDidLeaveHandler.bind(this);
  }

  componentDidMount() {
    if (this.ionRouterOutlet) {
      /**
       * This avoids multiple raf calls
       * when React unmounts + remounts components.
       */
      if (!this.outletIsReady) {
        (0,_ionic_core_components__WEBPACK_IMPORTED_MODULE_11__.c)(this.ionRouterOutlet, () => {
          this.outletIsReady = true;
          this.context.registerIonPage(this.ionRouterOutlet, this.props.routeInfo);
        });
      }

      this.ionRouterOutlet.addEventListener('ionViewWillEnter', this.ionViewWillEnterHandler);
      this.ionRouterOutlet.addEventListener('ionViewDidEnter', this.ionViewDidEnterHandler);
      this.ionRouterOutlet.addEventListener('ionViewWillLeave', this.ionViewWillLeaveHandler);
      this.ionRouterOutlet.addEventListener('ionViewDidLeave', this.ionViewDidLeaveHandler);
    }
  }

  componentWillUnmount() {
    if (this.ionRouterOutlet) {
      this.ionRouterOutlet.removeEventListener('ionViewWillEnter', this.ionViewWillEnterHandler);
      this.ionRouterOutlet.removeEventListener('ionViewDidEnter', this.ionViewDidEnterHandler);
      this.ionRouterOutlet.removeEventListener('ionViewWillLeave', this.ionViewWillLeaveHandler);
      this.ionRouterOutlet.removeEventListener('ionViewDidLeave', this.ionViewDidLeaveHandler);
    }
  }

  ionViewWillEnterHandler() {
    this.ionLifeCycleContext.ionViewWillEnter();
  }

  ionViewDidEnterHandler() {
    this.ionLifeCycleContext.ionViewDidEnter();
  }

  ionViewWillLeaveHandler() {
    this.ionLifeCycleContext.ionViewWillLeave();
  }

  ionViewDidLeaveHandler() {
    this.ionLifeCycleContext.ionViewDidLeave();
  }

  render() {
    const _a = this.props,
          {
      StackManager,
      children,
      routeInfo
    } = _a,
          props = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["StackManager", "children", "routeInfo"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IonLifeCycleContext.Consumer, null, context => {
      this.ionLifeCycleContext = context;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StackManager, {
        routeInfo: routeInfo
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IonRouterOutletInner, Object.assign({
        setRef: val => this.ionRouterOutlet = val
      }, props), children));
    });
  }

  static get contextType() {
    return StackContext;
  }

}

class IonRouterOutletContainer extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    const StackManager = this.context.getStackManager();

    const _a = this.props,
          {
      children,
      forwardedRef
    } = _a,
          props = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["children", "forwardedRef"]);

    return this.context.hasIonicRouter() ? props.ionPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OutletPageManager, Object.assign({
      StackManager: StackManager,
      routeInfo: this.context.routeInfo
    }, props), children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StackManager, {
      routeInfo: this.context.routeInfo
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IonRouterOutletInner, Object.assign({}, props, {
      forwardedRef: forwardedRef
    }), children)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IonRouterOutletInner, Object.assign({
      ref: forwardedRef
    }, this.props), this.props.children);
  }

  static get contextType() {
    return NavContext;
  }

}

const IonRouterOutlet = createForwardRef(IonRouterOutletContainer, 'IonRouterOutlet');

const IonTabButton = /*@__PURE__*/(() => class extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.handleIonTabButtonClick = this.handleIonTabButtonClick.bind(this);
  }

  handleIonTabButtonClick() {
    if (this.props.onClick) {
      this.props.onClick(new CustomEvent('ionTabButtonClick', {
        detail: {
          tab: this.props.tab,
          href: this.props.href,
          routeOptions: this.props.routerOptions
        }
      }));
    }
  }

  render() {
    /**
     * onClick is excluded from the props, since it has a custom
     * implementation within IonTabBar.tsx. Calling onClick within this
     * component would result in duplicate handler calls.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _a = this.props,
          rest = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["onClick"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IonTabButtonInner, Object.assign({
      onIonTabButtonClick: this.handleIonTabButtonClick
    }, rest));
  }

  static get displayName() {
    return 'IonTabButton';
  }

})(); // TODO(FW-2959): types


class IonTabBarUnwrapped extends (react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent) {
  constructor(props) {
    super(props); // eslint-disable-next-line

    this.setActiveTabOnContext = _tab => {};

    const tabs = {};
    react__WEBPACK_IMPORTED_MODULE_0___default().Children.forEach(props.children, child => {
      var _a, _b, _c, _d;

      if (child != null && typeof child === 'object' && child.props && (child.type === IonTabButton || child.type.isTabButton)) {
        tabs[child.props.tab] = {
          originalHref: child.props.href,
          currentHref: child.props.href,
          originalRouteOptions: child.props.href === ((_a = props.routeInfo) === null || _a === void 0 ? void 0 : _a.pathname) ? (_b = props.routeInfo) === null || _b === void 0 ? void 0 : _b.routeOptions : undefined,
          currentRouteOptions: child.props.href === ((_c = props.routeInfo) === null || _c === void 0 ? void 0 : _c.pathname) ? (_d = props.routeInfo) === null || _d === void 0 ? void 0 : _d.routeOptions : undefined
        };
      }
    });
    this.state = {
      tabs
    };
    this.onTabButtonClick = this.onTabButtonClick.bind(this);
    this.renderTabButton = this.renderTabButton.bind(this);
    this.setActiveTabOnContext = this.setActiveTabOnContext.bind(this);
    this.selectTab = this.selectTab.bind(this);
  }

  componentDidMount() {
    const tabs = this.state.tabs;
    const tabKeys = Object.keys(tabs);
    const activeTab = tabKeys.find(key => {
      const href = tabs[key].originalHref;
      return this.props.routeInfo.pathname.startsWith(href);
    });

    if (activeTab) {
      this.setState({
        activeTab
      });
    }
  }

  componentDidUpdate() {
    if (this.state.activeTab) {
      this.setActiveTabOnContext(this.state.activeTab);
    }
  }

  selectTab(tab) {
    const tabUrl = this.state.tabs[tab];

    if (tabUrl) {
      this.onTabButtonClick(new CustomEvent('ionTabButtonClick', {
        detail: {
          href: tabUrl.currentHref,
          tab,
          selected: tab === this.state.activeTab,
          routeOptions: undefined
        }
      }));
      return true;
    }

    return false;
  }

  static getDerivedStateFromProps(props, state) {
    var _a, _b, _c;

    const tabs = Object.assign({}, state.tabs);
    const tabKeys = Object.keys(state.tabs);
    const activeTab = tabKeys.find(key => {
      const href = state.tabs[key].originalHref;
      return props.routeInfo.pathname.startsWith(href);
    }); // Check to see if the tab button href has changed, and if so, update it in the tabs state

    react__WEBPACK_IMPORTED_MODULE_0___default().Children.forEach(props.children, child => {
      if (child != null && typeof child === 'object' && child.props && (child.type === IonTabButton || child.type.isTabButton)) {
        const tab = tabs[child.props.tab];

        if (!tab || tab.originalHref !== child.props.href) {
          tabs[child.props.tab] = {
            originalHref: child.props.href,
            currentHref: child.props.href,
            originalRouteOptions: child.props.routeOptions,
            currentRouteOptions: child.props.routeOptions
          };
        }
      }
    });
    const {
      activeTab: prevActiveTab
    } = state;

    if (activeTab && prevActiveTab) {
      const prevHref = state.tabs[prevActiveTab].currentHref;
      const prevRouteOptions = state.tabs[prevActiveTab].currentRouteOptions;

      if (activeTab !== prevActiveTab || prevHref !== ((_a = props.routeInfo) === null || _a === void 0 ? void 0 : _a.pathname) || prevRouteOptions !== ((_b = props.routeInfo) === null || _b === void 0 ? void 0 : _b.routeOptions)) {
        tabs[activeTab] = {
          originalHref: tabs[activeTab].originalHref,
          currentHref: props.routeInfo.pathname + (props.routeInfo.search || ''),
          originalRouteOptions: tabs[activeTab].originalRouteOptions,
          currentRouteOptions: (_c = props.routeInfo) === null || _c === void 0 ? void 0 : _c.routeOptions
        };

        if (props.routeInfo.routeAction === 'pop' && activeTab !== prevActiveTab) {
          // If navigating back and the tabs change, set the prev tab back to its original href
          tabs[prevActiveTab] = {
            originalHref: tabs[prevActiveTab].originalHref,
            currentHref: tabs[prevActiveTab].originalHref,
            originalRouteOptions: tabs[prevActiveTab].originalRouteOptions,
            currentRouteOptions: tabs[prevActiveTab].currentRouteOptions
          };
        }
      }
    }

    activeTab && props.onSetCurrentTab(activeTab, props.routeInfo);
    return {
      activeTab,
      tabs
    };
  }

  onTabButtonClick(e, onClickFn) {
    const tappedTab = this.state.tabs[e.detail.tab];
    const originalHref = tappedTab.originalHref;
    const currentHref = e.detail.href;
    const {
      activeTab: prevActiveTab
    } = this.state;

    if (onClickFn) {
      /**
       * If the user provides an onClick function, we call it
       * with the original event.
       */
      onClickFn(e);
    } // this.props.onSetCurrentTab(e.detail.tab, this.props.routeInfo);
    // Clicking the current tab will bring you back to the original href


    if (prevActiveTab === e.detail.tab) {
      if (originalHref !== currentHref) {
        this.context.resetTab(e.detail.tab, originalHref, tappedTab.originalRouteOptions);
      }
    } else {
      if (this.props.onIonTabsWillChange) {
        this.props.onIonTabsWillChange(new CustomEvent('ionTabWillChange', {
          detail: {
            tab: e.detail.tab
          }
        }));
      }

      if (this.props.onIonTabsDidChange) {
        this.props.onIonTabsDidChange(new CustomEvent('ionTabDidChange', {
          detail: {
            tab: e.detail.tab
          }
        }));
      }

      this.setActiveTabOnContext(e.detail.tab);
      this.context.changeTab(e.detail.tab, currentHref, e.detail.routeOptions);
    }
  }

  renderTabButton(activeTab) {
    return child => {
      var _a, _b;

      if (child != null && child.props && (child.type === IonTabButton || child.type.isTabButton)) {
        const href = child.props.tab === activeTab ? (_a = this.props.routeInfo) === null || _a === void 0 ? void 0 : _a.pathname : this.state.tabs[child.props.tab].currentHref;
        const routeOptions = child.props.tab === activeTab ? (_b = this.props.routeInfo) === null || _b === void 0 ? void 0 : _b.routeOptions : this.state.tabs[child.props.tab].currentRouteOptions;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
          href,
          routeOptions,
          onClick: ev => this.onTabButtonClick(ev, child.props.onClick)
        });
      }

      return null;
    };
  }

  render() {
    const {
      activeTab
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IonTabBarInner, Object.assign({}, this.props, {
      selectedTab: activeTab
    }), react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(this.props.children, this.renderTabButton(activeTab)));
  }

  static get contextType() {
    return NavContext;
  }

}

const IonTabBarContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(_a => {
  var {
    forwardedRef
  } = _a,
      props = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["forwardedRef"]);

  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NavContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IonTabBarUnwrapped, Object.assign({
    ref: forwardedRef
  }, props, {
    routeInfo: props.routeInfo || context.routeInfo || {
      pathname: window.location.pathname
    },
    onSetCurrentTab: context.setCurrentTab
  }), props.children);
});
const IonTabBar = createForwardRef(IonTabBarContainer, 'IonTabBar');

class IonTabsElement extends (/* unused pure expression or super */ null && (HTMLElementSSR)) {
  constructor() {
    super();
  }

} // TODO(FW-2959): types


if (false) {}

const hostStyles = {
  display: 'flex',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  contain: 'layout size style'
};
const tabsInner = {
  position: 'relative',
  flex: 1,
  contain: 'layout size style'
};

const IonTabs = /*@__PURE__*/(/* unused pure expression or super */ null && ((() => class extends React.Component {
  constructor(props) {
    super(props);
    this.routerOutletRef = /*#__PURE__*/React.createRef();
    this.tabBarRef = /*#__PURE__*/React.createRef();
    this.ionTabContextState = {
      activeTab: undefined,
      selectTab: () => false
    };
  }

  componentDidMount() {
    if (this.tabBarRef.current) {
      // Grab initial value
      this.ionTabContextState.activeTab = this.tabBarRef.current.state.activeTab; // Override method

      this.tabBarRef.current.setActiveTabOnContext = tab => {
        this.ionTabContextState.activeTab = tab;
      };

      this.ionTabContextState.selectTab = this.tabBarRef.current.selectTab;
    }
  }

  render() {
    let outlet;
    let tabBar;

    const _a = this.props,
          {
      className,
      onIonTabsDidChange,
      onIonTabsWillChange
    } = _a,
          props = __rest(_a, ["className", "onIonTabsDidChange", "onIonTabsWillChange"]);

    const children = typeof this.props.children === 'function' ? this.props.children(this.ionTabContextState) : this.props.children;
    React.Children.forEach(children, child => {
      // eslint-disable-next-line no-prototype-builtins
      if (child == null || typeof child !== 'object' || !child.hasOwnProperty('type')) {
        return;
      }

      if (child.type === IonRouterOutlet || child.type.isRouterOutlet) {
        outlet = /*#__PURE__*/React.cloneElement(child);
      } else if (child.type === Fragment && child.props.children[0].type === IonRouterOutlet) {
        outlet = child.props.children[0];
      }

      let childProps = {
        ref: this.tabBarRef
      };
      /**
       * Only pass these props
       * down from IonTabs to IonTabBar
       * if they are defined, otherwise
       * if you have a handler set on
       * IonTabBar it will be overridden.
       */

      if (onIonTabsDidChange !== undefined) {
        childProps = Object.assign(Object.assign({}, childProps), {
          onIonTabsDidChange
        });
      }

      if (onIonTabsWillChange !== undefined) {
        childProps = Object.assign(Object.assign({}, childProps), {
          onIonTabsWillChange
        });
      }

      if (child.type === IonTabBar || child.type.isTabBar) {
        tabBar = /*#__PURE__*/React.cloneElement(child, childProps);
      } else if (child.type === Fragment && (child.props.children[1].type === IonTabBar || child.props.children[1].type.isTabBar)) {
        tabBar = /*#__PURE__*/React.cloneElement(child.props.children[1], childProps);
      }
    });

    if (!outlet) {
      throw new Error('IonTabs must contain an IonRouterOutlet');
    }

    if (!tabBar) {
      throw new Error('IonTabs needs a IonTabBar');
    }

    return /*#__PURE__*/React.createElement(IonTabsContext.Provider, {
      value: this.ionTabContextState
    }, this.context.hasIonicRouter() ? /*#__PURE__*/React.createElement(PageManager, Object.assign({
      className: className ? `${className}` : '',
      routeInfo: this.context.routeInfo
    }, props), /*#__PURE__*/React.createElement("ion-tabs", {
      className: "ion-tabs",
      style: hostStyles
    }, tabBar.props.slot === 'top' ? tabBar : null, /*#__PURE__*/React.createElement("div", {
      style: tabsInner,
      className: "tabs-inner"
    }, outlet), tabBar.props.slot === 'bottom' ? tabBar : null)) : /*#__PURE__*/React.createElement("div", Object.assign({
      className: className ? `${className}` : 'ion-tabs'
    }, props, {
      style: hostStyles
    }), tabBar.props.slot === 'top' ? tabBar : null, /*#__PURE__*/React.createElement("div", {
      style: tabsInner,
      className: "tabs-inner"
    }, outlet), tabBar.props.slot === 'bottom' ? tabBar : null));
  }

  static get contextType() {
    return NavContext;
  }

})()));

const IonBackButton = /*@__PURE__*/(/* unused pure expression or super */ null && ((() => class extends React.Component {
  constructor() {
    super(...arguments);

    this.clickButton = e => {
      /**
       * If ion-back-button is being used inside
       * of ion-nav then we should not interact with
       * the router.
       */
      if (e.target && e.target.closest('ion-nav') !== null) {
        return;
      }

      const {
        defaultHref,
        routerAnimation
      } = this.props;

      if (this.context.hasIonicRouter()) {
        e.stopPropagation();
        this.context.goBack(defaultHref, routerAnimation);
      } else if (defaultHref !== undefined) {
        window.location.href = defaultHref;
      }
    };
  }

  render() {
    return /*#__PURE__*/React.createElement(IonBackButtonInner, Object.assign({
      onClick: this.clickButton
    }, this.props));
  }

  static get displayName() {
    return 'IonBackButton';
  }

  static get contextType() {
    return NavContext;
  }

})()));

class IonIconContainer extends (react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent) {
  constructor(props) {
    super(props);

    if (this.props.name) {
      console.warn('In Ionic React, you import icons from "ionicons/icons" and set the icon you imported to the "icon" property. Setting the "name" property has no effect.');
    }
  }

  render() {
    var _a, _b;

    const _c = this.props,
          {
      icon,
      ios,
      md,
      mode
    } = _c,
          rest = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_c, ["icon", "ios", "md", "mode"]);

    let iconToUse;
    const config = getConfig();
    const iconMode = mode || (config === null || config === void 0 ? void 0 : config.get('mode'));

    if (ios || md) {
      if (iconMode === 'ios') {
        iconToUse = (_a = ios !== null && ios !== void 0 ? ios : md) !== null && _a !== void 0 ? _a : icon;
      } else {
        iconToUse = (_b = md !== null && md !== void 0 ? md : ios) !== null && _b !== void 0 ? _b : icon;
      }
    } else {
      iconToUse = icon;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IonIconInner, Object.assign({
      ref: this.props.forwardedRef,
      icon: iconToUse
    }, rest), this.props.children);
  }

  static get contextType() {
    return NavContext;
  }

}

const IonIcon = createForwardRef(IonIconContainer, 'IonIcon');

class IonRoute extends (react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent) {
  render() {
    const IonRouteInner = this.context.getIonRoute();

    if (!this.context.hasIonicRouter() || !IonRoute) {
      console.error('You either do not have an Ionic Router package, or your router does not support using <IonRoute>');
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IonRouteInner, Object.assign({}, this.props));
  }

  static get contextType() {
    return NavContext;
  }

}

class IonRedirect extends (react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent) {
  render() {
    const IonRedirectInner = this.context.getIonRedirect();

    if (!this.context.hasIonicRouter() || !IonRedirect) {
      console.error('You either do not have an Ionic Router package, or your router does not support using <IonRedirect>');
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IonRedirectInner, Object.assign({}, this.props));
  }

  static get contextType() {
    return NavContext;
  }

}

const IonRouterContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  routeInfo: undefined,
  push: () => {
    throw new Error('An Ionic Router is required for IonRouterContext');
  },
  back: () => {
    throw new Error('An Ionic Router is required for IonRouterContext');
  },
  canGoBack: () => {
    throw new Error('An Ionic Router is required for IonRouterContext');
  },
  nativeBack: () => {
    throw new Error('An Ionic Router is required for IonRouterContext');
  }
});
/**
 * A hook for more direct control over routing in an Ionic React application. Allows you to pass additional meta-data to the router before the call to the native router.
 */

function useIonRouter() {
  const context = useContext(IonRouterContext);
  return useMemo(() => ({
    back: context.back,
    push: context.push,
    goBack: context.back,
    canGoBack: context.canGoBack,
    routeInfo: context.routeInfo
  }), [context.back, context.push, context.canGoBack, context.routeInfo]);
}

class CreateAnimation extends (react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent) {
  constructor(props) {
    super(props);
    this.nodes = new Map();
    this.animation = (0,_ionic_core_components__WEBPACK_IMPORTED_MODULE_12__.c)(props.id);
  }

  setupAnimation(props) {
    const animation = this.animation;

    if (this.nodes.size > 0) {
      animation.addElement(Array.from(this.nodes.values()));
    }

    checkConfig(animation, props);
    checkPlayback(animation, props);
  }

  componentDidMount() {
    const props = this.props;
    this.setupAnimation(props);
  }

  componentDidUpdate(prevProps) {
    const animation = this.animation;
    const props = this.props;
    checkConfig(animation, props, prevProps);
    checkProgress(animation, props, prevProps);
    checkPlayback(animation, props, prevProps);
  }

  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, (child, id) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
      ref: el => this.nodes.set(id, el)
    })));
  }

}

const checkConfig = (animation, currentProps = {}, prevProps = {}) => {
  const reservedProps = ['children', 'progressStart', 'progressStep', 'progressEnd', 'pause', 'stop', 'destroy', 'play', 'from', 'to', 'fromTo', 'onFinish'];

  for (const key in currentProps) {
    if ( // eslint-disable-next-line no-prototype-builtins
    currentProps.hasOwnProperty(key) && !reservedProps.includes(key) && currentProps[key] !== prevProps[key]) {
      animation[key](currentProps[key]);
    }
  }

  const fromValues = currentProps.from;

  if (fromValues && fromValues !== prevProps.from) {
    const values = Array.isArray(fromValues) ? fromValues : [fromValues];
    values.forEach(val => animation.from(val.property, val.value));
  }

  const toValues = currentProps.to;

  if (toValues && toValues !== prevProps.to) {
    const values = Array.isArray(toValues) ? toValues : [toValues];
    values.forEach(val => animation.to(val.property, val.value));
  }

  const fromToValues = currentProps.fromTo;

  if (fromToValues && fromToValues !== prevProps.fromTo) {
    const values = Array.isArray(fromToValues) ? fromToValues : [fromToValues];
    values.forEach(val => animation.fromTo(val.property, val.fromValue, val.toValue));
  }

  const onFinishValues = currentProps.onFinish;

  if (onFinishValues && onFinishValues !== prevProps.onFinish) {
    const values = Array.isArray(onFinishValues) ? onFinishValues : [onFinishValues];
    values.forEach(val => animation.onFinish(val.callback, val.opts));
  }
};

const checkProgress = (animation, currentProps = {}, prevProps = {}) => {
  var _a, _b, _c, _d, _e;

  const {
    progressStart,
    progressStep,
    progressEnd
  } = currentProps;

  if (progressStart && (((_a = prevProps.progressStart) === null || _a === void 0 ? void 0 : _a.forceLinearEasing) !== (progressStart === null || progressStart === void 0 ? void 0 : progressStart.forceLinearEasing) || ((_b = prevProps.progressStart) === null || _b === void 0 ? void 0 : _b.step) !== (progressStart === null || progressStart === void 0 ? void 0 : progressStart.step))) {
    animation.progressStart(progressStart.forceLinearEasing, progressStart.step);
  }

  if (progressStep && ((_c = prevProps.progressStep) === null || _c === void 0 ? void 0 : _c.step) !== (progressStep === null || progressStep === void 0 ? void 0 : progressStep.step)) {
    animation.progressStep(progressStep.step);
  }

  if (progressEnd && (((_d = prevProps.progressEnd) === null || _d === void 0 ? void 0 : _d.playTo) !== (progressEnd === null || progressEnd === void 0 ? void 0 : progressEnd.playTo) || ((_e = prevProps.progressEnd) === null || _e === void 0 ? void 0 : _e.step) !== (progressEnd === null || progressEnd === void 0 ? void 0 : progressEnd.step) || (prevProps === null || prevProps === void 0 ? void 0 : prevProps.dur) !== (progressEnd === null || progressEnd === void 0 ? void 0 : progressEnd.dur))) {
    animation.progressEnd(progressEnd.playTo, progressEnd.step, progressEnd.dur);
  }
};

const checkPlayback = (animation, currentProps = {}, prevProps = {}) => {
  if (!prevProps.play && currentProps.play) {
    animation.play();
  }

  if (!prevProps.pause && currentProps.pause) {
    animation.pause();
  }

  if (!prevProps.stop && currentProps.stop) {
    animation.stop();
  }

  if (!prevProps.destroy && currentProps.destroy) {
    animation.destroy();
  }
};

function useController(displayName, controller, defineCustomElement) {
  const overlayRef = useRef();
  const didDismissEventName = useMemo(() => `on${displayName}DidDismiss`, [displayName]);
  const didPresentEventName = useMemo(() => `on${displayName}DidPresent`, [displayName]);
  const willDismissEventName = useMemo(() => `on${displayName}WillDismiss`, [displayName]);
  const willPresentEventName = useMemo(() => `on${displayName}WillPresent`, [displayName]);
  defineCustomElement();
  const present = useCallback(async options => {
    if (overlayRef.current) {
      return;
    }

    const {
      onDidDismiss,
      onWillDismiss,
      onDidPresent,
      onWillPresent
    } = options,
          rest = __rest(options, ["onDidDismiss", "onWillDismiss", "onDidPresent", "onWillPresent"]);

    const handleDismiss = event => {
      if (onDidDismiss) {
        onDidDismiss(event);
      }

      overlayRef.current = undefined;
    };

    overlayRef.current = await controller.create(Object.assign({}, rest));
    attachProps(overlayRef.current, {
      [didDismissEventName]: handleDismiss,
      [didPresentEventName]: e => onDidPresent && onDidPresent(e),
      [willDismissEventName]: e => onWillDismiss && onWillDismiss(e),
      [willPresentEventName]: e => onWillPresent && onWillPresent(e)
    });
    overlayRef.current.present();
  }, [controller]);
  const dismiss = useCallback(async () => {
    overlayRef.current && (await overlayRef.current.dismiss());
    overlayRef.current = undefined;
  }, []);
  return {
    present,
    dismiss
  };
}
/**
 * A hook for presenting/dismissing an IonActionSheet component
 * @returns Returns the present and dismiss methods in an array
 */


function useIonActionSheet() {
  const controller = useController('IonActionSheet', actionSheetController, defineCustomElement$14);
  const present = useCallback((buttonsOrOptions, header) => {
    if (Array.isArray(buttonsOrOptions)) {
      return controller.present({
        buttons: buttonsOrOptions,
        header
      });
    } else {
      return controller.present(buttonsOrOptions);
    }
  }, [controller.present]);
  return [present, controller.dismiss];
}
/**
 * A hook for presenting/dismissing an IonAlert component
 * @returns Returns the present and dismiss methods in an array
 */


function useIonAlert() {
  const controller = useController('IonAlert', alertController, defineCustomElement$10);
  const present = useCallback((messageOrOptions, buttons) => {
    if (typeof messageOrOptions === 'string') {
      return controller.present({
        message: messageOrOptions,
        buttons: buttons !== null && buttons !== void 0 ? buttons : [{
          text: 'Ok'
        }]
      });
    } else {
      return controller.present(messageOrOptions);
    }
  }, [controller.present]);
  return [present, controller.dismiss];
}
/**
 * A hook for presenting/dismissing an IonToast component
 * @returns Returns the present and dismiss methods in an array
 */


function useIonToast() {
  const controller = useController('IonToast', toastController, defineCustomElement$12);
  const present = useCallback((messageOrOptions, duration) => {
    if (typeof messageOrOptions === 'string') {
      return controller.present({
        message: messageOrOptions,
        duration
      });
    } else {
      return controller.present(messageOrOptions);
    }
  }, [controller.present]);
  return [present, controller.dismiss];
}

function useOverlay(displayName, controller, defineCustomElement, component, componentProps) {
  const overlayRef = useRef();
  const containerElRef = useRef();
  const didDismissEventName = useMemo(() => `on${displayName}DidDismiss`, [displayName]);
  const didPresentEventName = useMemo(() => `on${displayName}DidPresent`, [displayName]);
  const willDismissEventName = useMemo(() => `on${displayName}WillDismiss`, [displayName]);
  const willPresentEventName = useMemo(() => `on${displayName}WillPresent`, [displayName]);
  const {
    0: isOpen,
    1: setIsOpen
  } = useState(false);
  const ionContext = useContext(IonContext);
  const {
    0: overlayId
  } = useState(generateId('overlay'));
  defineCustomElement();
  useEffect(() => {
    if (isOpen && component && containerElRef.current) {
      if ( /*#__PURE__*/React.isValidElement(component)) {
        ionContext.addOverlay(overlayId, component, containerElRef.current);
      } else {
        const element = /*#__PURE__*/createElement(component, componentProps);
        ionContext.addOverlay(overlayId, element, containerElRef.current);
      }
    }
  }, [component, containerElRef.current, isOpen, componentProps]);
  const present = useCallback(async options => {
    if (overlayRef.current) {
      return;
    }

    const {
      onDidDismiss,
      onWillDismiss,
      onDidPresent,
      onWillPresent
    } = options,
          rest = __rest(options, ["onDidDismiss", "onWillDismiss", "onDidPresent", "onWillPresent"]);

    if (typeof document !== 'undefined') {
      containerElRef.current = document.createElement('div');
    }

    overlayRef.current = await controller.create(Object.assign(Object.assign({}, rest), {
      component: containerElRef.current
    }));
    attachProps(overlayRef.current, {
      [didDismissEventName]: handleDismiss,
      [didPresentEventName]: e => onDidPresent && onDidPresent(e),
      [willDismissEventName]: e => onWillDismiss && onWillDismiss(e),
      [willPresentEventName]: e => onWillPresent && onWillPresent(e)
    });
    overlayRef.current.present();
    setIsOpen(true);

    function handleDismiss(event) {
      if (onDidDismiss) {
        onDidDismiss(event);
      }

      overlayRef.current = undefined;
      containerElRef.current = undefined;
      setIsOpen(false);
      ionContext.removeOverlay(overlayId);
    }
  }, []);
  const dismiss = useCallback(async (data, role) => {
    overlayRef.current && (await overlayRef.current.dismiss(data, role));
    overlayRef.current = undefined;
    containerElRef.current = undefined;
  }, []);
  return {
    present,
    dismiss
  };
} // TODO(FW-2959): types

/**
 * A hook for presenting/dismissing an IonModal component
 * @param component The component that the modal will show. Can be a React Component, a functional component, or a JSX Element
 * @param componentProps The props that will be passed to the component, if required
 * @returns Returns the present and dismiss methods in an array
 */


function useIonModal(component, componentProps) {
  const controller = useOverlay('IonModal', modalController, defineCustomElement$15, component, componentProps);
  const present = useCallback((options = {}) => {
    controller.present(options);
  }, [controller.present]);
  return [present, controller.dismiss];
} // TODO(FW-2959): types

/**
 * A hook for presenting/dismissing an IonPicker component
 * @param component The component that the popover will show. Can be a React Component, a functional component, or a JSX Element
 * @param componentProps The props that will be passed to the component, if required
 * @returns Returns the present and dismiss methods in an array
 */


function useIonPopover(component, componentProps) {
  const controller = useOverlay('IonPopover', popoverController, defineCustomElement$16, component, componentProps);
  const present = useCallback((options = {}) => {
    controller.present(options);
  }, [controller.present]);
  return [present, controller.dismiss];
}
/**
 * A hook for presenting/dismissing an IonPicker component
 * @returns Returns the present and dismiss methods in an array
 */


function useIonPicker() {
  const controller = useController('IonPicker', pickerController, defineCustomElement$13);
  const present = useCallback((columnsOrOptions, buttons) => {
    if (Array.isArray(columnsOrOptions)) {
      return controller.present({
        columns: columnsOrOptions,
        buttons: buttons !== null && buttons !== void 0 ? buttons : [{
          text: 'Ok'
        }]
      });
    } else {
      return controller.present(columnsOrOptions);
    }
  }, [controller.present]);
  return [present, controller.dismiss];
}
/**
 * A hook for presenting/dismissing an IonLoading component
 * @returns Returns the present and dismiss methods in an array
 */


function useIonLoading() {
  const controller = useController('IonLoading', loadingController, defineCustomElement$11);
  const present = useCallback((messageOrOptions = {}, duration, spinner) => {
    if (typeof messageOrOptions === 'string') {
      return controller.present({
        message: messageOrOptions,
        duration,
        spinner
      });
    } else {
      return controller.present(messageOrOptions);
    }
  }, [controller.present]);
  return [present, controller.dismiss];
}

const setupIonicReact = (config = {}) => {
  /**
   * By default Ionic Framework hides elements that
   * are not hydrated, but in the CE build there is no
   * hydration.
   * TODO FW-2797: Remove when all integrations have been
   * migrated to CE build.
   */
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('ion-ce');
  }

  (0,_ionic_core_components__WEBPACK_IMPORTED_MODULE_13__.i)(Object.assign({}, config));
}; // TODO(FW-2959): types


const RouteManagerContext = /*@__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  addViewItem: () => undefined,
  canGoBack: () => undefined,
  clearOutlet: () => undefined,
  createViewItem: () => undefined,
  findViewItemByPathname: () => undefined,
  findLeavingViewItemByRouteInfo: () => undefined,
  findViewItemByRouteInfo: () => undefined,
  getChildrenToRender: () => undefined,
  goBack: () => undefined,
  unMountViewItem: () => undefined
});

class ViewLifeCycleManager extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.ionLifeCycleContext = new DefaultIonLifeCycleContext();
    this._isMounted = false;
    this.ionLifeCycleContext.onComponentCanBeDestroyed(() => {
      if (!this.props.mount) {
        if (this._isMounted) {
          this.setState({
            show: false
          }, () => this.props.removeView());
        }
      }
    });
    this.state = {
      show: true
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      show
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IonLifeCycleContext.Provider, {
      value: this.ionLifeCycleContext
    }, show && this.props.children);
  }

} // const RESTRICT_SIZE = 100;


class LocationHistory {
  constructor() {
    this.locationHistory = [];
    this.tabHistory = {};
  }

  add(routeInfo) {
    if (routeInfo.routeAction === 'push' || routeInfo.routeAction == null) {
      this._add(routeInfo);
    } else if (routeInfo.routeAction === 'pop') {
      this._pop(routeInfo);
    } else if (routeInfo.routeAction === 'replace') {
      this._replace(routeInfo);
    }

    if (routeInfo.routeDirection === 'root') {
      this._clear();

      this._add(routeInfo);
    }
  }

  clearTabStack(tab) {
    const routeInfos = this._getRouteInfosByKey(tab);

    if (routeInfos) {
      routeInfos.forEach(ri => {
        this.locationHistory = this.locationHistory.filter(x => x.id !== ri.id);
      });
      this.tabHistory[tab] = [];
    }
  }

  update(routeInfo) {
    const locationIndex = this.locationHistory.findIndex(x => x.id === routeInfo.id);

    if (locationIndex > -1) {
      this.locationHistory.splice(locationIndex, 1, routeInfo);
    }

    const tabArray = this.tabHistory[routeInfo.tab || ''];

    if (tabArray) {
      const tabIndex = tabArray.findIndex(x => x.id === routeInfo.id);

      if (tabIndex > -1) {
        tabArray.splice(tabIndex, 1, routeInfo);
      } else {
        tabArray.push(routeInfo);
      }
    } else if (routeInfo.tab) {
      this.tabHistory[routeInfo.tab] = [routeInfo];
    }
  }

  _add(routeInfo) {
    const routeInfos = this._getRouteInfosByKey(routeInfo.tab);

    if (routeInfos) {
      // If the latest routeInfo is the same (going back and forth between tabs), replace it
      if (this._areRoutesEqual(routeInfos[routeInfos.length - 1], routeInfo)) {
        routeInfos.pop();
      }

      routeInfos.push(routeInfo);
    }

    this.locationHistory.push(routeInfo);
  }

  _areRoutesEqual(route1, route2) {
    if (!route1 || !route2) {
      return false;
    }

    return route1.pathname === route2.pathname && route1.search === route2.search;
  }

  _pop(routeInfo) {
    const routeInfos = this._getRouteInfosByKey(routeInfo.tab);

    if (routeInfos) {
      // Pop the previous route
      routeInfos.pop(); // Replace the current route with an updated version

      routeInfos.pop();
      routeInfos.push(routeInfo);
    } // Pop the previous route


    this.locationHistory.pop(); // Replace the current route with an updated version

    this.locationHistory.pop();
    this.locationHistory.push(routeInfo);
  }

  _replace(routeInfo) {
    const routeInfos = this._getRouteInfosByKey(routeInfo.tab);

    routeInfos && routeInfos.pop();
    this.locationHistory.pop();

    this._add(routeInfo);
  }

  _clear() {
    const keys = Object.keys(this.tabHistory);
    keys.forEach(k => this.tabHistory[k] = []);
    this.locationHistory = [];
  }

  _getRouteInfosByKey(key) {
    let routeInfos;

    if (key) {
      routeInfos = this.tabHistory[key];

      if (!routeInfos) {
        routeInfos = this.tabHistory[key] = [];
      }
    }

    return routeInfos;
  }

  getFirstRouteInfoForTab(tab) {
    const routeInfos = this._getRouteInfosByKey(tab);

    if (routeInfos) {
      return routeInfos[0];
    }

    return undefined;
  }

  getCurrentRouteInfoForTab(tab) {
    const routeInfos = this._getRouteInfosByKey(tab);

    if (routeInfos) {
      return routeInfos[routeInfos.length - 1];
    }

    return undefined;
  }

  findLastLocation(routeInfo) {
    const routeInfos = this._getRouteInfosByKey(routeInfo.tab);

    if (routeInfos) {
      for (let i = routeInfos.length - 2; i >= 0; i--) {
        const ri = routeInfos[i];

        if (ri) {
          if (ri.pathname === routeInfo.pushedByRoute) {
            return ri;
          }
        }
      }
    }

    for (let i = this.locationHistory.length - 2; i >= 0; i--) {
      const ri = this.locationHistory[i];

      if (ri) {
        if (ri.pathname === routeInfo.pushedByRoute) {
          return ri;
        }
      }
    }

    return undefined;
  }

  previous() {
    return this.locationHistory[this.locationHistory.length - 2] || this.locationHistory[this.locationHistory.length - 1];
  }

  current() {
    return this.locationHistory[this.locationHistory.length - 1];
  }

  canGoBack() {
    return this.locationHistory.length > 1;
  }

}

class NavManager extends (react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent) {
  constructor(props) {
    super(props);
    this.ionRouterContextValue = {
      push: (pathname, routerDirection, routeAction, routerOptions, animationBuilder) => {
        this.navigate(pathname, routerDirection, routeAction, animationBuilder, routerOptions);
      },
      back: animationBuilder => {
        this.goBack(undefined, animationBuilder);
      },
      canGoBack: () => this.props.locationHistory.canGoBack(),
      nativeBack: () => this.props.onNativeBack(),
      routeInfo: this.props.routeInfo
    };
    this.state = {
      goBack: this.goBack.bind(this),
      hasIonicRouter: () => true,
      navigate: this.navigate.bind(this),
      getIonRedirect: this.getIonRedirect.bind(this),
      getIonRoute: this.getIonRoute.bind(this),
      getStackManager: this.getStackManager.bind(this),
      getPageManager: this.getPageManager.bind(this),
      routeInfo: this.props.routeInfo,
      setCurrentTab: this.props.onSetCurrentTab,
      changeTab: this.props.onChangeTab,
      resetTab: this.props.onResetTab
    };
  }

  componentDidMount() {
    if (typeof document !== 'undefined') {
      this.handleHardwareBackButton = this.handleHardwareBackButton.bind(this);
      document.addEventListener('ionBackButton', this.handleHardwareBackButton);
    }
  }

  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      document.removeEventListener('ionBackButton', this.handleHardwareBackButton);
    }
  }

  handleHardwareBackButton(e) {
    e.detail.register(0, processNextHandler => {
      this.nativeGoBack();
      processNextHandler();
    });
  }

  goBack(route, animationBuilder) {
    this.props.onNavigateBack(route, animationBuilder);
  }

  nativeGoBack() {
    this.props.onNativeBack();
  }

  navigate(path, direction = 'forward', action = 'push', animationBuilder, options, tab) {
    this.props.onNavigate(path, action, direction, animationBuilder, options, tab);
  }

  getPageManager() {
    return PageManager;
  }

  getIonRedirect() {
    return this.props.ionRedirect;
  }

  getIonRoute() {
    return this.props.ionRoute;
  }

  getStackManager() {
    return this.props.stackManager;
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavContext.Provider, {
      value: Object.assign(Object.assign({}, this.state), {
        routeInfo: this.props.routeInfo
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IonRouterContext.Provider, {
      value: Object.assign(Object.assign({}, this.ionRouterContextValue), {
        routeInfo: this.props.routeInfo
      })
    }, this.props.children));
  }

}

class ViewStacks {
  constructor() {
    this.viewStacks = {};
    this.add = this.add.bind(this);
    this.clear = this.clear.bind(this);
    this.getViewItemsForOutlet = this.getViewItemsForOutlet.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(viewItem) {
    const {
      outletId
    } = viewItem;

    if (!this.viewStacks[outletId]) {
      this.viewStacks[outletId] = [viewItem];
    } else {
      this.viewStacks[outletId].push(viewItem);
    }
  }

  clear(outletId) {
    // Give some time for the leaving views to transition before removing
    return setTimeout(() => {
      delete this.viewStacks[outletId];
    }, 500);
  }

  getViewItemsForOutlet(outletId) {
    return this.viewStacks[outletId] || [];
  }

  remove(viewItem) {
    const {
      outletId
    } = viewItem;
    const viewStack = this.viewStacks[outletId];

    if (viewStack) {
      const viewItemToRemove = viewStack.find(x => x.id === viewItem.id);

      if (viewItemToRemove) {
        viewItemToRemove.mount = false;
        this.viewStacks[outletId] = viewStack.filter(x => x.id !== viewItemToRemove.id);
      }
    }
  }

  getStackIds() {
    return Object.keys(this.viewStacks);
  }

  getAllViewItems() {
    const keys = this.getStackIds();
    const viewItems = [];
    keys.forEach(k => {
      viewItems.push(...this.viewStacks[k]);
    });
    return viewItems;
  }

}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AA: () => (/* binding */ Host),
/* harmony export */   GH: () => (/* binding */ proxyCustomElement),
/* harmony export */   Iu: () => (/* binding */ writeTask),
/* harmony export */   K3: () => (/* binding */ getAssetPath),
/* harmony export */   PM: () => (/* binding */ setMode),
/* harmony export */   TX: () => (/* binding */ setPlatformHelpers),
/* harmony export */   Z5: () => (/* binding */ Build),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   iJ: () => (/* binding */ getMode),
/* harmony export */   mv: () => (/* binding */ H),
/* harmony export */   wj: () => (/* binding */ readTask),
/* harmony export */   xE: () => (/* binding */ forceUpdate),
/* harmony export */   yM: () => (/* binding */ createEvent)
/* harmony export */ });
/* unused harmony exports Fragment, H, STENCIL_DEV_MODE, addHostEventListeners, bootstrapLazy, cmpModules, connectedCallback, consoleDevError, consoleDevInfo, consoleDevWarn, consoleError, defineCustomElement, disconnectedCallback, doc, forceModeUpdate, getElement, getHostRef, getRenderingRef, getValue, insertVdomAnnotations, isMemberInElement, loadModule, modeResolutionChain, nextTick, parsePropertyValue, plt, postUpdateComponent, promiseResolve, proxyComponent, registerHost, registerInstance, renderVdom, setAssetPath, setErrorHandler, setNonce, setPlatformOptions, setValue, styles, supportsConstructableStylesheets, supportsListenerOptions, supportsShadow, win */
/* harmony import */ var _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4949);
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/snabbdom/snabbdom/blob/master/LICENSE
 *
 * Modified for Stencil's renderer and slot projection
 */
let scopeId;
let contentRef;
let hostTagName;
let customError;
let i = 0;
let useNativeShadowDom = false;
let checkSlotFallbackVisibility = false;
let checkSlotRelocate = false;
let isSvgMode = false;
let renderingRef = null;
let queueCongestion = 0;
let queuePending = false;
/*
 Stencil Client Platform v4.10.0 | MIT Licensed | https://stenciljs.com
 */


const Build = {
  isDev: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev ? true : false,
  isBrowser: true,
  isServer: false,
  isTesting: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isTesting ? true : false
};

const getAssetPath = path => {
  const assetUrl = new URL(path, plt.$resourcesUrl$);
  return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};

const setAssetPath = path => plt.$resourcesUrl$ = path;

const createTime = (fnName, tagName = '') => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.profile && performance.mark) {
    const key = `st:${fnName}:${tagName}:${i++}`; // Start

    performance.mark(key); // End

    return () => performance.measure(`[Stencil] ${fnName}() <${tagName}>`, key);
  } else {
    return () => {
      return;
    };
  }
};

const uniqueTime = (key, measureText) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.profile && performance.mark) {
    if (performance.getEntriesByName(key, 'mark').length === 0) {
      performance.mark(key);
    }

    return () => {
      if (performance.getEntriesByName(measureText, 'measure').length === 0) {
        performance.measure(measureText, key);
      }
    };
  } else {
    return () => {
      return;
    };
  }
};

const inspect = ref => {
  const hostRef = getHostRef(ref);

  if (!hostRef) {
    return undefined;
  }

  const flags = hostRef.$flags$;
  const hostElement = hostRef.$hostElement$;
  return {
    renderCount: hostRef.$renderCount$,
    flags: {
      hasRendered: !!(flags & 2
      /* HOST_FLAGS.hasRendered */
      ),
      hasConnected: !!(flags & 1
      /* HOST_FLAGS.hasConnected */
      ),
      isWaitingForChildren: !!(flags & 4
      /* HOST_FLAGS.isWaitingForChildren */
      ),
      isConstructingInstance: !!(flags & 8
      /* HOST_FLAGS.isConstructingInstance */
      ),
      isQueuedForUpdate: !!(flags & 16
      /* HOST_FLAGS.isQueuedForUpdate */
      ),
      hasInitializedComponent: !!(flags & 32
      /* HOST_FLAGS.hasInitializedComponent */
      ),
      hasLoadedComponent: !!(flags & 64
      /* HOST_FLAGS.hasLoadedComponent */
      ),
      isWatchReady: !!(flags & 128
      /* HOST_FLAGS.isWatchReady */
      ),
      isListenReady: !!(flags & 256
      /* HOST_FLAGS.isListenReady */
      ),
      needsRerender: !!(flags & 512
      /* HOST_FLAGS.needsRerender */
      )
    },
    instanceValues: hostRef.$instanceValues$,
    ancestorComponent: hostRef.$ancestorComponent$,
    hostElement,
    lazyInstance: hostRef.$lazyInstance$,
    vnode: hostRef.$vnode$,
    modeName: hostRef.$modeName$,
    onReadyPromise: hostRef.$onReadyPromise$,
    onReadyResolve: hostRef.$onReadyResolve$,
    onInstancePromise: hostRef.$onInstancePromise$,
    onInstanceResolve: hostRef.$onInstanceResolve$,
    onRenderResolve: hostRef.$onRenderResolve$,
    queuedListeners: hostRef.$queuedListeners$,
    rmListeners: hostRef.$rmListeners$,
    ['s-id']: hostElement['s-id'],
    ['s-cr']: hostElement['s-cr'],
    ['s-lr']: hostElement['s-lr'],
    ['s-p']: hostElement['s-p'],
    ['s-rc']: hostElement['s-rc'],
    ['s-sc']: hostElement['s-sc']
  };
};

const installDevTools = () => {
  if (BUILD.devTools) {
    const stencil = win.stencil = win.stencil || {};
    const originalInspect = stencil.inspect;

    stencil.inspect = ref => {
      let result = inspect(ref);

      if (!result && typeof originalInspect === 'function') {
        result = originalInspect(ref);
      }

      return result;
    };
  }
};

const CONTENT_REF_ID = 'r';
const ORG_LOCATION_ID = 'o';
const SLOT_NODE_ID = 's';
const TEXT_NODE_ID = 't';
const HYDRATE_ID = 's-id';
const HYDRATED_STYLE_ID = 'sty-id';
const HYDRATE_CHILD_ID = 'c-id';
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
/**
 * Constant for styles to be globally applied to `slot-fb` elements for pseudo-slot behavior.
 *
 * Two cascading rules must be used instead of a `:not()` selector due to Stencil browser
 * support as of Stencil v4.
 */

const SLOT_FB_CSS = 'slot-fb{display:contents}slot-fb[hidden]{display:none}';
const XLINK_NS = 'http://www.w3.org/1999/xlink';
const FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS = ['formAssociatedCallback', 'formResetCallback', 'formDisabledCallback', 'formStateRestoreCallback'];
/**
 * Default style mode id
 */

/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */

const EMPTY_OBJ = {};
/**
 * Namespaces
 */

const SVG_NS = 'http://www.w3.org/2000/svg';
const HTML_NS = 'http://www.w3.org/1999/xhtml';

const isDef = v => v != null;
/**
 * Check whether a value is a 'complex type', defined here as an object or a
 * function.
 *
 * @param o the value to check
 * @returns whether it's a complex type or not
 */


const isComplexType = o => {
  // https://jsperf.com/typeof-fn-object/5
  o = typeof o;
  return o === 'object' || o === 'function';
};
/**
 * Helper method for querying a `meta` tag that contains a nonce value
 * out of a DOM's head.
 *
 * @param doc The DOM containing the `head` to query against
 * @returns The content of the meta tag representing the nonce value, or `undefined` if no tag
 * exists or the tag has no content.
 */


function queryNonceMetaTagContent(doc) {
  var _a, _b, _c;

  return (_c = (_b = (_a = doc.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute('content')) !== null && _c !== void 0 ? _c : undefined;
}
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;


const h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];

  const walk = c => {
    for (let i = 0; i < c.length; i++) {
      child = c[i];

      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== 'boolean') {
        if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
          child = String(child);
        } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev && typeof nodeName !== 'function' && child.$flags$ === undefined) {
          consoleDevError(`vNode passed as children has unexpected type.
Make sure it's using the correct h() function.
Empty objects can also be the cause, look for JSX comments that became objects.`);
        }

        if (simple && lastSimple) {
          // If the previous child was simple (string), we merge both
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          // Append a new vNode, if it's text, we create a text vNode
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }

        lastSimple = simple;
      }
    }
  };

  walk(children);

  if (vnodeData) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev && nodeName === 'input') {
      validateInputProperties(vnodeData);
    }

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomKey && vnodeData.key) {
      key = vnodeData.key;
    }

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation && vnodeData.name) {
      slotName = vnodeData.name;
    } // normalize class / className attributes


    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomClass) {
      const classData = vnodeData.className || vnodeData.class;

      if (classData) {
        vnodeData.class = typeof classData !== 'object' ? classData : Object.keys(classData).filter(k => classData[k]).join(' ');
      }
    }
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev && vNodeChildren.some(isHost)) {
    consoleDevError(`The <Host> must be the single root component. Make sure:
- You are NOT using hostData() and <Host> in the same component.
- <Host> is used once, and it's the single root component of the render() function.`);
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomFunctional && typeof nodeName === 'function') {
    // nodeName is a functional component
    return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
  }

  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;

  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomKey) {
    vnode.$key$ = key;
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation) {
    vnode.$name$ = slotName;
  }

  return vnode;
};
/**
 * A utility function for creating a virtual DOM node from a tag and some
 * possible text content.
 *
 * @param tag the tag for this element
 * @param text possible text content for the node
 * @returns a newly-minted virtual DOM node
 */


const newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomAttribute) {
    vnode.$attrs$ = null;
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomKey) {
    vnode.$key$ = null;
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation) {
    vnode.$name$ = null;
  }

  return vnode;
};

const Host = {};
/**
 * Check whether a given node is a Host node or not
 *
 * @param node the virtual DOM node to check
 * @returns whether it's a Host node or not
 */

const isHost = node => node && node.$tag$ === Host;
/**
 * Implementation of {@link d.FunctionalUtilities} for Stencil's VDom.
 *
 * Note that these functions convert from {@link d.VNode} to
 * {@link d.ChildNode} to give functional component developers a friendly
 * interface.
 */


const vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
/**
 * Convert a {@link d.VNode} to a {@link d.ChildNode} in order to present a
 * friendlier public interface (hence, 'convertToPublic').
 *
 * @param node the virtual DOM node to convert
 * @returns a converted child node
 */

const convertToPublic = node => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
/**
 * Convert a {@link d.ChildNode} back to an equivalent {@link d.VNode} in
 * order to use the resulting object in the virtual DOM. The initial object was
 * likely created as part of presenting a public API, so converting it back
 * involved making it 'private' again (hence, `convertToPrivate`).
 *
 * @param node the child node to convert
 * @returns a converted virtual DOM node
 */


const convertToPrivate = node => {
  if (typeof node.vtag === 'function') {
    const vnodeData = Object.assign({}, node.vattrs);

    if (node.vkey) {
      vnodeData.key = node.vkey;
    }

    if (node.vname) {
      vnodeData.name = node.vname;
    }

    return h(node.vtag, vnodeData, ...(node.vchildren || []));
  }

  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};
/**
 * Validates the ordering of attributes on an input element
 *
 * @param inputElm the element to validate
 */


const validateInputProperties = inputElm => {
  const props = Object.keys(inputElm);
  const value = props.indexOf('value');

  if (value === -1) {
    return;
  }

  const typeIndex = props.indexOf('type');
  const minIndex = props.indexOf('min');
  const maxIndex = props.indexOf('max');
  const stepIndex = props.indexOf('step');

  if (value < typeIndex || value < minIndex || value < maxIndex || value < stepIndex) {
    consoleDevWarn(`The "value" prop of <input> should be set after "min", "max", "type" and "step"`);
  }
};
/**
 * Entrypoint of the client-side hydration process. Facilitates calls to hydrate the
 * document and all its nodes.
 *
 * This process will also reconstruct the shadow root and slot DOM nodes for components using shadow DOM.
 *
 * @param hostElm The element to hydrate.
 * @param tagName The element's tag name.
 * @param hostId The host ID assigned to the element by the server.
 * @param hostRef The host reference for the element.
 */


const initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
  const endHydrate = createTime('hydrateClient', tagName);
  const shadowRoot = hostElm.shadowRoot;
  const childRenderNodes = [];
  const slotNodes = [];
  const shadowRootNodes = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom && shadowRoot ? [] : null;
  const vnode = hostRef.$vnode$ = newVNode(tagName, null);

  if (!plt.$orgLocNodes$) {
    initializeDocumentHydrate(doc.body, plt.$orgLocNodes$ = new Map());
  }

  hostElm[HYDRATE_ID] = hostId;
  hostElm.removeAttribute(HYDRATE_ID);
  clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
  childRenderNodes.map(c => {
    const orgLocationId = c.$hostId$ + '.' + c.$nodeId$;
    const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
    const node = c.$elm$; // Put the node back in its original location since the native Shadow DOM
    // can handle rendering it its correct location now

    if (orgLocationNode && supportsShadow && orgLocationNode['s-en'] === '') {
      orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
    }

    if (!shadowRoot) {
      node['s-hn'] = tagName;

      if (orgLocationNode) {
        node['s-ol'] = orgLocationNode;
        node['s-ol']['s-nr'] = node;
      }
    }

    plt.$orgLocNodes$.delete(orgLocationId);
  });

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom && shadowRoot) {
    shadowRootNodes.map(shadowRootNode => {
      if (shadowRootNode) {
        shadowRoot.appendChild(shadowRootNode);
      }
    });
  }

  endHydrate();
};
/**
 * Recursively constructs the virtual node tree for a host element and its children.
 * The tree is constructed by parsing the annotations set on the nodes by the server.
 *
 * In addition to constructing the vNode tree, we also track information about the node's
 * descendants like which are slots, which should exist in the shadow root, and which
 * are nodes that should be rendered as children of the parent node.
 *
 * @param parentVNode The vNode representing the parent node.
 * @param childRenderNodes An array of all child nodes in the parent's node tree.
 * @param slotNodes An array of all slot nodes in the parent's node tree.
 * @param shadowRootNodes An array all nodes that should be rendered in the shadow root in the parent's node tree.
 * @param hostElm The parent element.
 * @param node The node to construct the vNode tree for.
 * @param hostId The host ID assigned to the element by the server.
 */


const clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) => {
  let childNodeType;
  let childIdSplt;
  let childVNode;
  let i;

  if (node.nodeType === 1
  /* NODE_TYPE.ElementNode */
  ) {
    childNodeType = node.getAttribute(HYDRATE_CHILD_ID);

    if (childNodeType) {
      // got the node data from the element's attribute
      // `${hostId}.${nodeId}.${depth}.${index}`
      childIdSplt = childNodeType.split('.');

      if (childIdSplt[0] === hostId || childIdSplt[0] === '0') {
        childVNode = {
          $flags$: 0,
          $hostId$: childIdSplt[0],
          $nodeId$: childIdSplt[1],
          $depth$: childIdSplt[2],
          $index$: childIdSplt[3],
          $tag$: node.tagName.toLowerCase(),
          $elm$: node,
          $attrs$: null,
          $children$: null,
          $key$: null,
          $name$: null,
          $text$: null
        };
        childRenderNodes.push(childVNode);
        node.removeAttribute(HYDRATE_CHILD_ID); // this is a new child vnode
        // so ensure its parent vnode has the vchildren array

        if (!parentVNode.$children$) {
          parentVNode.$children$ = [];
        } // add our child vnode to a specific index of the vnode's children


        parentVNode.$children$[childVNode.$index$] = childVNode; // this is now the new parent vnode for all the next child checks

        parentVNode = childVNode;

        if (shadowRootNodes && childVNode.$depth$ === '0') {
          shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
        }
      }
    } // recursively drill down, end to start so we can remove nodes


    for (i = node.childNodes.length - 1; i >= 0; i--) {
      clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.childNodes[i], hostId);
    }

    if (node.shadowRoot) {
      // keep drilling down through the shadow root nodes
      for (i = node.shadowRoot.childNodes.length - 1; i >= 0; i--) {
        clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i], hostId);
      }
    }
  } else if (node.nodeType === 8
  /* NODE_TYPE.CommentNode */
  ) {
    // `${COMMENT_TYPE}.${hostId}.${nodeId}.${depth}.${index}`
    childIdSplt = node.nodeValue.split('.');

    if (childIdSplt[1] === hostId || childIdSplt[1] === '0') {
      // comment node for either the host id or a 0 host id
      childNodeType = childIdSplt[0];
      childVNode = {
        $flags$: 0,
        $hostId$: childIdSplt[1],
        $nodeId$: childIdSplt[2],
        $depth$: childIdSplt[3],
        $index$: childIdSplt[4],
        $elm$: node,
        $attrs$: null,
        $children$: null,
        $key$: null,
        $name$: null,
        $tag$: null,
        $text$: null
      };

      if (childNodeType === TEXT_NODE_ID) {
        childVNode.$elm$ = node.nextSibling;

        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3
        /* NODE_TYPE.TextNode */
        ) {
          childVNode.$text$ = childVNode.$elm$.textContent;
          childRenderNodes.push(childVNode); // remove the text comment since it's no longer needed

          node.remove();

          if (!parentVNode.$children$) {
            parentVNode.$children$ = [];
          }

          parentVNode.$children$[childVNode.$index$] = childVNode;

          if (shadowRootNodes && childVNode.$depth$ === '0') {
            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
          }
        }
      } else if (childVNode.$hostId$ === hostId) {
        // this comment node is specifically for this host id
        if (childNodeType === SLOT_NODE_ID) {
          // `${SLOT_NODE_ID}.${hostId}.${nodeId}.${depth}.${index}.${slotName}`;
          childVNode.$tag$ = 'slot';

          if (childIdSplt[5]) {
            node['s-sn'] = childVNode.$name$ = childIdSplt[5];
          } else {
            node['s-sn'] = '';
          }

          node['s-sr'] = true;

          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom && shadowRootNodes) {
            // browser support shadowRoot and this is a shadow dom component
            // create an actual slot element
            childVNode.$elm$ = doc.createElement(childVNode.$tag$);

            if (childVNode.$name$) {
              // add the slot name attribute
              childVNode.$elm$.setAttribute('name', childVNode.$name$);
            } // insert the new slot element before the slot comment


            node.parentNode.insertBefore(childVNode.$elm$, node); // remove the slot comment since it's not needed for shadow

            node.remove();

            if (childVNode.$depth$ === '0') {
              shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
            }
          }

          slotNodes.push(childVNode);

          if (!parentVNode.$children$) {
            parentVNode.$children$ = [];
          }

          parentVNode.$children$[childVNode.$index$] = childVNode;
        } else if (childNodeType === CONTENT_REF_ID) {
          // `${CONTENT_REF_ID}.${hostId}`;
          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom && shadowRootNodes) {
            // remove the content ref comment since it's not needed for shadow
            node.remove();
          } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation) {
            hostElm['s-cr'] = node;
            node['s-cn'] = true;
          }
        }
      }
    }
  } else if (parentVNode && parentVNode.$tag$ === 'style') {
    const vnode = newVNode(null, node.textContent);
    vnode.$elm$ = node;
    vnode.$index$ = '0';
    parentVNode.$children$ = [vnode];
  }
};
/**
 * Recursively locate any comments representing an original location for a node in a node's
 * children or shadowRoot children.
 *
 * @param node The node to search.
 * @param orgLocNodes A map of the original location annotation and the current node being searched.
 */


const initializeDocumentHydrate = (node, orgLocNodes) => {
  if (node.nodeType === 1
  /* NODE_TYPE.ElementNode */
  ) {
    let i = 0;

    for (; i < node.childNodes.length; i++) {
      initializeDocumentHydrate(node.childNodes[i], orgLocNodes);
    }

    if (node.shadowRoot) {
      for (i = 0; i < node.shadowRoot.childNodes.length; i++) {
        initializeDocumentHydrate(node.shadowRoot.childNodes[i], orgLocNodes);
      }
    }
  } else if (node.nodeType === 8
  /* NODE_TYPE.CommentNode */
  ) {
    const childIdSplt = node.nodeValue.split('.');

    if (childIdSplt[0] === ORG_LOCATION_ID) {
      orgLocNodes.set(childIdSplt[1] + '.' + childIdSplt[2], node);
      node.nodeValue = ''; // useful to know if the original location is
      // the root light-dom of a shadow dom component

      node['s-en'] = childIdSplt[3];
    }
  }
}; // Private


const computeMode = elm => modeResolutionChain.map(h => h(elm)).find(m => !!m); // Public


const setMode = handler => modeResolutionChain.push(handler);

const getMode = ref => getHostRef(ref).$modeName$;
/**
 * Parse a new property value for a given property type.
 *
 * While the prop value can reasonably be expected to be of `any` type as far as TypeScript's type checker is concerned,
 * it is not safe to assume that the string returned by evaluating `typeof propValue` matches:
 *   1. `any`, the type given to `propValue` in the function signature
 *   2. the type stored from `propType`.
 *
 * This function provides the capability to parse/coerce a property's value to potentially any other JavaScript type.
 *
 * Property values represented in TSX preserve their type information. In the example below, the number 0 is passed to
 * a component. This `propValue` will preserve its type information (`typeof propValue === 'number'`). Note that is
 * based on the type of the value being passed in, not the type declared of the class member decorated with `@Prop`.
 * ```tsx
 * <my-cmp prop-val={0}></my-cmp>
 * ```
 *
 * HTML prop values on the other hand, will always a string
 *
 * @param propValue the new value to coerce to some type
 * @param propType the type of the prop, expressed as a binary number
 * @returns the parsed/coerced value
 */


const parsePropertyValue = (propValue, propType) => {
  // ensure this value is of the correct prop type
  if (propValue != null && !isComplexType(propValue)) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.propBoolean && propType & 4
    /* MEMBER_FLAGS.Boolean */
    ) {
      // per the HTML spec, any string value means it is a boolean true value
      // but we'll cheat here and say that the string "false" is the boolean false
      return propValue === 'false' ? false : propValue === '' || !!propValue;
    }

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.propNumber && propType & 2
    /* MEMBER_FLAGS.Number */
    ) {
      // force it to be a number
      return parseFloat(propValue);
    }

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.propString && propType & 1
    /* MEMBER_FLAGS.String */
    ) {
      // could have been passed as a number or boolean
      // but we still want it as a string
      return String(propValue);
    } // redundant return here for better minification


    return propValue;
  } // not sure exactly what type we want
  // so no need to change to a different type


  return propValue;
};

const getElement = ref => _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad ? getHostRef(ref).$hostElement$ : ref;

const createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: detail => {
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev && !elm.isConnected) {
        consoleDevWarn(`The "${name}" event was emitted, but the dispatcher node is no longer connected to the dom.`);
      }

      return emitEvent(elm, name, {
        bubbles: !!(flags & 4
        /* EVENT_FLAGS.Bubbles */
        ),
        composed: !!(flags & 2
        /* EVENT_FLAGS.Composed */
        ),
        cancelable: !!(flags & 1
        /* EVENT_FLAGS.Cancellable */
        ),
        detail
      });
    }
  };
};
/**
 * Helper function to create & dispatch a custom Event on a provided target
 * @param elm the target of the Event
 * @param name the name to give the custom Event
 * @param opts options for configuring a custom Event
 * @returns the custom Event
 */


const emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};

const rootAppliedStyles = /*@__PURE__*/new WeakMap();

const registerStyle = (scopeId, cssText, allowCS) => {
  let style = styles.get(scopeId);

  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();

    if (typeof style === 'string') {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }

  styles.set(scopeId, style);
};

const addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;

  const scopeId = getScopeId(cmpMeta, mode);
  const style = styles.get(scopeId);

  if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.attachStyles) {
    return scopeId;
  } // if an element is NOT connected then getRootNode() will return the wrong root node
  // so the fallback is to always use the document for the root node in those cases


  styleContainerNode = styleContainerNode.nodeType === 11
  /* NODE_TYPE.DocumentFragment */
  ? styleContainerNode : doc;

  if (style) {
    if (typeof style === 'string') {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;

      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
      }

      if (!appliedStyles.has(scopeId)) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateClientSide && styleContainerNode.host && (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId}"]`))) {
          // This is only happening on native shadow-dom, do not needs CSS var shim
          styleElm.innerHTML = style;
        } else {
          styleElm = doc.createElement('style');
          styleElm.innerHTML = style; // Apply CSP nonce to the style tag if it exists

          const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);

          if (nonce != null) {
            styleElm.setAttribute('nonce', nonce);
          }

          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateServerSide || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hotModuleReplacement) {
            styleElm.setAttribute(HYDRATED_STYLE_ID, scopeId);
          }

          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
        } // Add styles for `slot-fb` elements if we're using slots outside the Shadow DOM


        if (cmpMeta.$flags$ & 4
        /* CMP_FLAGS.hasSlotRelocation */
        ) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }

        if (appliedStyles) {
          appliedStyles.add(scopeId);
        }
      }
    } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.constructableCSS && !styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }

  return scopeId;
};

const attachStyles = hostRef => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
  const scopeId = addStyle(_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom && supportsShadow && elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta, hostRef.$modeName$);

  if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.scoped) && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.cssAnnotations && flags & 10
  /* CMP_FLAGS.needsScopedEncapsulation */
  ) {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    // DOM WRITE!!
    elm['s-sc'] = scopeId;
    elm.classList.add(scopeId + '-h');

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.scoped && flags & 2
    /* CMP_FLAGS.scopedCssEncapsulation */
    ) {
      elm.classList.add(scopeId + '-s');
    }
  }

  endAttachStyles();
};

const getScopeId = (cmp, mode) => 'sc-' + (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.mode && mode && cmp.$flags$ & 32
/* CMP_FLAGS.hasMode */
? cmp.$tagName$ + '-' + mode : cmp.$tagName$);

const convertScopedToShadow = css => css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{');
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */

/**
 * When running a VDom render set properties present on a VDom node onto the
 * corresponding HTML element.
 *
 * Note that this function has special functionality for the `class`,
 * `style`, `key`, and `ref` attributes, as well as event handlers (like
 * `onClick`, etc). All others are just passed through as-is.
 *
 * @param elm the HTMLElement onto which attributes should be set
 * @param memberName the name of the attribute to set
 * @param oldValue the old value for the attribute
 * @param newValue the new value for the attribute
 * @param isSvg whether we're in an svg context or not
 * @param flags bitflags for Vdom variables
 */


const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomClass && memberName === 'class') {
      const classList = elm.classList;
      const oldClasses = parseClassList(oldValue);
      const newClasses = parseClassList(newValue);
      classList.remove(...oldClasses.filter(c => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter(c => c && !oldClasses.includes(c)));
    } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomStyle && memberName === 'style') {
      // update style attribute, css properties and values
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.updatable) {
        for (const prop in oldValue) {
          if (!newValue || newValue[prop] == null) {
            if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateServerSide && prop.includes('-')) {
              elm.style.removeProperty(prop);
            } else {
              elm.style[prop] = '';
            }
          }
        }
      }

      for (const prop in newValue) {
        if (!oldValue || newValue[prop] !== oldValue[prop]) {
          if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateServerSide && prop.includes('-')) {
            elm.style.setProperty(prop, newValue[prop]);
          } else {
            elm.style[prop] = newValue[prop];
          }
        }
      }
    } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomKey && memberName === 'key') ;else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomRef && memberName === 'ref') {
      // minifier will clean this up
      if (newValue) {
        newValue(elm);
      }
    } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomListener && (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad ? !isProp : !elm.__lookupSetter__(memberName)) && memberName[0] === 'o' && memberName[1] === 'n') {
      // Event Handlers
      // so if the member name starts with "on" and the 3rd characters is
      // a capital letter, and it's not already a member on the element,
      // then we're assuming it's an event listener
      if (memberName[2] === '-') {
        // on- prefixed events
        // allows to be explicit about the dom event to listen without any magic
        // under the hood:
        // <my-cmp on-click> // listens for "click"
        // <my-cmp on-Click> // listens for "Click"
        // <my-cmp on-ionChange> // listens for "ionChange"
        // <my-cmp on-EVENTS> // listens for "EVENTS"
        memberName = memberName.slice(3);
      } else if (isMemberInElement(win, ln)) {
        // standard event
        // the JSX attribute could have been "onMouseOver" and the
        // member name "onmouseover" is on the window's prototype
        // so let's add the listener "mouseover", which is all lowercased
        memberName = ln.slice(2);
      } else {
        // custom event
        // the JSX attribute could have been "onMyCustomEvent"
        // so let's trim off the "on" prefix and lowercase the first character
        // and add the listener "myCustomEvent"
        // except for the first character, we keep the event name case
        memberName = ln[2] + memberName.slice(3);
      }

      if (oldValue || newValue) {
        // Need to account for "capture" events.
        // If the event name ends with "Capture", we'll update the name to remove
        // the "Capture" suffix and make sure the event listener is setup to handle the capture event.
        const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX); // Make sure we only replace the last instance of "Capture"

        memberName = memberName.replace(CAPTURE_EVENT_REGEX, '');

        if (oldValue) {
          plt.rel(elm, memberName, oldValue, capture);
        }

        if (newValue) {
          plt.ael(elm, memberName, newValue, capture);
        }
      }
    } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomPropOrAttr) {
      // Set property if it exists and it's not a SVG
      const isComplex = isComplexType(newValue);

      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes('-')) {
            const n = newValue == null ? '' : newValue; // Workaround for Safari, moving the <input> caret when re-assigning the same valued

            if (memberName === 'list') {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e) {
          /**
           * in case someone tries to set a read-only property, e.g. "namespaceURI", we just ignore it
           */
        }
      }
      /**
       * Need to manually update attribute if:
       * - memberName is not an attribute
       * - if we are rendering the host element in order to reflect attribute
       * - if it's a SVG, since properties might not work in <svg>
       * - if the newValue is null/undefined or 'false'.
       */


      let xlink = false;

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomXlink) {
        if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
          memberName = ln;
          xlink = true;
        }
      }

      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === '') {
          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomXlink && xlink) {
            elm.removeAttributeNS(XLINK_NS, memberName);
          } else {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4
      /* VNODE_FLAGS.isHost */
      || isSvg) && !isComplex) {
        newValue = newValue === true ? '' : newValue;

        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomXlink && xlink) {
          elm.setAttributeNS(XLINK_NS, memberName, newValue);
        } else {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};

const parseClassListRegex = /\s/;
/**
 * Parsed a string of classnames into an array
 * @param value className string, e.g. "foo bar baz"
 * @returns list of classes, e.g. ["foo", "bar", "baz"]
 */

const parseClassList = value => !value ? [] : value.split(parseClassListRegex);

const CAPTURE_EVENT_SUFFIX = 'Capture';
const CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + '$');

const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
  // if the element passed in is a shadow root, which is a document fragment
  // then we want to be adding attrs/props to the shadow root's "host" element
  // if it's not a shadow root, then we add attrs/props to the same element
  const elm = newVnode.$elm$.nodeType === 11
  /* NODE_TYPE.DocumentFragment */
  && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.updatable) {
    // remove attributes no longer present on the vnode by setting them to undefined
    for (memberName in oldVnodeAttrs) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
      }
    }
  } // add new & update changed attributes


  for (memberName in newVnodeAttrs) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
  }
};
/**
 * Create a DOM Node corresponding to one of the children of a given VNode.
 *
 * @param oldParentVNode the parent VNode from the previous render
 * @param newParentVNode the parent VNode from the current render
 * @param childIndex the index of the VNode, in the _new_ parent node's
 * children, for which we will create a new DOM node
 * @param parentElm the parent DOM node which our new node will be a child of
 * @returns the newly created node
 */


const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  // tslint:disable-next-line: prefer-const
  const newVNode = newParentVNode.$children$[childIndex];
  let i = 0;
  let elm;
  let childNode;
  let oldVNode;

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation && !useNativeShadowDom) {
    // remember for later we need to check to relocate nodes
    checkSlotRelocate = true;

    if (newVNode.$tag$ === 'slot') {
      if (scopeId) {
        // scoped css needs to add its scoped id to the parent element
        parentElm.classList.add(scopeId + '-s');
      }

      newVNode.$flags$ |= newVNode.$children$ ? // slot element has fallback content
      2
      /* VNODE_FLAGS.isSlotFallback */
      : // slot element does not have fallback content
      1
      /* VNODE_FLAGS.isSlotReference */
      ;
    }
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev && newVNode.$elm$) {
    consoleDevError(`The JSX ${newVNode.$text$ !== null ? `"${newVNode.$text$}" text` : `"${newVNode.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`);
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomText && newVNode.$text$ !== null) {
    // create text node
    elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
  } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation && newVNode.$flags$ & 1
  /* VNODE_FLAGS.isSlotReference */
  ) {
    // create a slot reference node
    elm = newVNode.$elm$ = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDebug || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateServerSide ? slotReferenceDebugNode(newVNode) : doc.createTextNode('');
  } else {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.svg && !isSvgMode) {
      isSvgMode = newVNode.$tag$ === 'svg';
    } // create element


    elm = newVNode.$elm$ = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.svg ? doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation && newVNode.$flags$ & 2
    /* VNODE_FLAGS.isSlotFallback */
    ? 'slot-fb' : newVNode.$tag$) : doc.createElement(_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation && newVNode.$flags$ & 2
    /* VNODE_FLAGS.isSlotFallback */
    ? 'slot-fb' : newVNode.$tag$);

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.svg && isSvgMode && newVNode.$tag$ === 'foreignObject') {
      isSvgMode = false;
    } // add css classes, attrs, props, listeners, etc.


    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomAttribute) {
      updateElement(null, newVNode, isSvgMode);
    }

    if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.scoped) && isDef(scopeId) && elm['s-si'] !== scopeId) {
      // if there is a scopeId and this is the initial render
      // then let's add the scopeId as a css class
      elm.classList.add(elm['s-si'] = scopeId);
    }

    if (newVNode.$children$) {
      for (i = 0; i < newVNode.$children$.length; ++i) {
        // create the node
        childNode = createElm(oldParentVNode, newVNode, i, elm); // return node could have been null

        if (childNode) {
          // append our new node
          elm.appendChild(childNode);
        }
      }
    }

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.svg) {
      if (newVNode.$tag$ === 'svg') {
        // Only reset the SVG context when we're exiting <svg> element
        isSvgMode = false;
      } else if (elm.tagName === 'foreignObject') {
        // Reenter SVG context when we're exiting <foreignObject> element
        isSvgMode = true;
      }
    }
  } // This needs to always happen so we can hide nodes that are projected
  // to another component but don't end up in a slot


  elm['s-hn'] = hostTagName;

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation) {
    if (newVNode.$flags$ & (2
    /* VNODE_FLAGS.isSlotFallback */
    | 1
    /* VNODE_FLAGS.isSlotReference */
    )) {
      // remember the content reference comment
      elm['s-sr'] = true; // remember the content reference comment

      elm['s-cr'] = contentRef; // remember the slot name, or empty string for default slot

      elm['s-sn'] = newVNode.$name$ || ''; // check if we've got an old vnode for this slot

      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];

      if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.experimentalSlotFixes) {
          // we've got an old slot vnode and the wrapper is being replaced
          // so let's move the old slot content to the root of the element currently being rendered
          relocateToHostRoot(oldParentVNode.$elm$);
        } else {
          // we've got an old slot vnode and the wrapper is being replaced
          // so let's move the old slot content back to its original location
          putBackInOriginalLocation(oldParentVNode.$elm$, false);
        }
      }
    }
  }

  return elm;
};
/**
 * Relocates all child nodes of an element that were a part of a previous slot relocation
 * to the root of the Stencil component currently being rendered. This happens when a parent
 * element of a slot reference node dynamically changes and triggers a re-render. We cannot use
 * `putBackInOriginalLocation()` because that may relocate nodes to elements that will not be re-rendered
 * and so they will not be relocated again.
 *
 * @param parentElm The element potentially containing relocated nodes.
 */


const relocateToHostRoot = parentElm => {
  plt.$flags$ |= 1
  /* PLATFORM_FLAGS.isTmpDisconnected */
  ;
  const host = parentElm.closest(hostTagName.toLowerCase());

  if (host != null) {
    for (const childNode of Array.from(parentElm.childNodes)) {
      // Only relocate nodes that were slotted in
      if (childNode['s-sh'] != null) {
        host.insertBefore(childNode, null); // Reset so we can correctly move the node around again.

        childNode['s-sh'] = undefined; // Need to tell the render pipeline to check to relocate slot content again

        checkSlotRelocate = true;
      }
    }
  }

  plt.$flags$ &= ~1
  /* PLATFORM_FLAGS.isTmpDisconnected */
  ;
};

const putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1
  /* PLATFORM_FLAGS.isTmpDisconnected */
  ;
  const oldSlotChildNodes = parentElm.childNodes;

  for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
    const childNode = oldSlotChildNodes[i];

    if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
      // and relocate it back to it's original location
      parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode)); // remove the old original location comment entirely
      // later on the patch function will know what to do
      // and move this to the correct spot if need be

      childNode['s-ol'].remove();
      childNode['s-ol'] = undefined; // Reset so we can correctly move the node around again.

      childNode['s-sh'] = undefined;
      checkSlotRelocate = true;
    }

    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }

  plt.$flags$ &= ~1
  /* PLATFORM_FLAGS.isTmpDisconnected */
  ;
};
/**
 * Create DOM nodes corresponding to a list of {@link d.Vnode} objects and
 * add them to the DOM in the appropriate place.
 *
 * @param parentElm the DOM node which should be used as a parent for the new
 * DOM nodes
 * @param before a child of the `parentElm` which the new children should be
 * inserted before (optional)
 * @param parentVNode the parent virtual DOM node
 * @param vnodes the new child virtual DOM nodes to produce DOM nodes for
 * @param startIdx the index in the child virtual DOM nodes at which to start
 * creating DOM nodes (inclusive)
 * @param endIdx the index in the child virtual DOM nodes at which to stop
 * creating DOM nodes (inclusive)
 */


const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation && parentElm['s-cr'] && parentElm['s-cr'].parentNode || parentElm;
  let childNode;

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom && containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }

  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx, parentElm);

      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        containerElm.insertBefore(childNode, _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation ? referenceNode(before) : before);
      }
    }
  }
};
/**
 * Remove the DOM elements corresponding to a list of {@link d.VNode} objects.
 * This can be used to, for instance, clean up after a list of children which
 * should no longer be shown.
 *
 * This function also handles some of Stencil's slot relocation logic.
 *
 * @param vnodes a list of virtual DOM nodes to remove
 * @param startIdx the index at which to start removing nodes (inclusive)
 * @param endIdx the index at which to stop removing nodes (inclusive)
 */


const removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];

    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);

      if (elm) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation) {
          // we're removing this element
          // so it's possible we need to show slot fallback content now
          checkSlotFallbackVisibility = true;

          if (elm['s-ol']) {
            // remove the original location comment
            elm['s-ol'].remove();
          } else {
            // it's possible that child nodes of the node
            // that's being removed are slot nodes
            putBackInOriginalLocation(elm, true);
          }
        } // remove the vnode's element from the dom


        elm.remove();
      }
    }
  }
};
/**
 * Reconcile the children of a new VNode with the children of an old VNode by
 * traversing the two collections of children, identifying nodes that are
 * conserved or changed, calling out to `patch` to make any necessary
 * updates to the DOM, and rearranging DOM nodes as needed.
 *
 * The algorithm for reconciling children works by analyzing two 'windows' onto
 * the two arrays of children (`oldCh` and `newCh`). We keep track of the
 * 'windows' by storing start and end indices and references to the
 * corresponding array entries. Initially the two 'windows' are basically equal
 * to the entire array, but we progressively narrow the windows until there are
 * no children left to update by doing the following:
 *
 * 1. Skip any `null` entries at the beginning or end of the two arrays, so
 *    that if we have an initial array like the following we'll end up dealing
 *    only with a window bounded by the highlighted elements:
 *
 *    [null, null, VNode1 , ... , VNode2, null, null]
 *                 ^^^^^^         ^^^^^^
 *
 * 2. Check to see if the elements at the head and tail positions are equal
 *    across the windows. This will basically detect elements which haven't
 *    been added, removed, or changed position, i.e. if you had the following
 *    VNode elements (represented as HTML):
 *
 *    oldVNode: `<div><p><span>HEY</span></p></div>`
 *    newVNode: `<div><p><span>THERE</span></p></div>`
 *
 *    Then when comparing the children of the `<div>` tag we check the equality
 *    of the VNodes corresponding to the `<p>` tags and, since they are the
 *    same tag in the same position, we'd be able to avoid completely
 *    re-rendering the subtree under them with a new DOM element and would just
 *    call out to `patch` to handle reconciling their children and so on.
 *
 * 3. Check, for both windows, to see if the element at the beginning of the
 *    window corresponds to the element at the end of the other window. This is
 *    a heuristic which will let us identify _some_ situations in which
 *    elements have changed position, for instance it _should_ detect that the
 *    children nodes themselves have not changed but merely moved in the
 *    following example:
 *
 *    oldVNode: `<div><element-one /><element-two /></div>`
 *    newVNode: `<div><element-two /><element-one /></div>`
 *
 *    If we find cases like this then we also need to move the concrete DOM
 *    elements corresponding to the moved children to write the re-order to the
 *    DOM.
 *
 * 4. Finally, if VNodes have the `key` attribute set on them we check for any
 *    nodes in the old children which have the same key as the first element in
 *    our window on the new children. If we find such a node we handle calling
 *    out to `patch`, moving relevant DOM nodes, and so on, in accordance with
 *    what we find.
 *
 * Finally, once we've narrowed our 'windows' to the point that either of them
 * collapse (i.e. they have length 0) we then handle any remaining VNode
 * insertion or deletion that needs to happen to get a DOM state that correctly
 * reflects the new child VNodes. If, for instance, after our window on the old
 * children has collapsed we still have more nodes on the new children that
 * we haven't dealt with yet then we need to add them, or if the new children
 * collapse but we still have unhandled _old_ children then we need to make
 * sure the corresponding DOM nodes are removed.
 *
 * @param parentElm the node into which the parent VNode is rendered
 * @param oldCh the old children of the parent node
 * @param newVNode the new VNode which will replace the parent
 * @param newCh the new children of the parent node
 * @param isInitialRender whether or not this is the first render of the vdom
 */


const updateChildren = (parentElm, oldCh, newVNode, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      // VNode might have been moved left
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      // if the start nodes are the same then we should patch the new VNode
      // onto the old one, and increment our `newStartIdx` and `oldStartIdx`
      // indices to reflect that. We don't need to move any DOM Nodes around
      // since things are matched up in order.
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      // likewise, if the end nodes are the same we patch new onto old and
      // decrement our end indices, and also likewise in this case we don't
      // need to move any DOM Nodes.
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      // case: "Vnode moved right"
      //
      // We've found that the last node in our window on the new children is
      // the same VNode as the _first_ node in our window on the old children
      // we're dealing with now. Visually, this is the layout of these two
      // nodes:
      //
      // newCh: [..., newStartVnode , ... , newEndVnode , ...]
      //                                    ^^^^^^^^^^^
      // oldCh: [..., oldStartVnode , ... , oldEndVnode , ...]
      //              ^^^^^^^^^^^^^
      //
      // In this situation we need to patch `newEndVnode` onto `oldStartVnode`
      // and move the DOM element for `oldStartVnode`.
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation && (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }

      patch(oldStartVnode, newEndVnode, isInitialRender); // We need to move the element for `oldStartVnode` into a position which
      // will be appropriate for `newEndVnode`. For this we can use
      // `.insertBefore` and `oldEndVnode.$elm$.nextSibling`. If there is a
      // sibling for `oldEndVnode.$elm$` then we want to move the DOM node for
      // `oldStartVnode` between `oldEndVnode` and it's sibling, like so:
      //
      // <old-start-node />
      // <some-intervening-node />
      // <old-end-node />
      // <!-- ->              <-- `oldStartVnode.$elm$` should be inserted here
      // <next-sibling />
      //
      // If instead `oldEndVnode.$elm$` has no sibling then we just want to put
      // the node for `oldStartVnode` at the end of the children of
      // `parentElm`. Luckily, `Node.nextSibling` will return `null` if there
      // aren't any siblings, and passing `null` to `Node.insertBefore` will
      // append it to the children of the parent element.

      parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      // case: "Vnode moved left"
      //
      // We've found that the first node in our window on the new children is
      // the same VNode as the _last_ node in our window on the old children.
      // Visually, this is the layout of these two nodes:
      //
      // newCh: [..., newStartVnode , ... , newEndVnode , ...]
      //              ^^^^^^^^^^^^^
      // oldCh: [..., oldStartVnode , ... , oldEndVnode , ...]
      //                                    ^^^^^^^^^^^
      //
      // In this situation we need to patch `newStartVnode` onto `oldEndVnode`
      // (which will handle updating any changed attributes, reconciling their
      // children etc) but we also need to move the DOM node to which
      // `oldEndVnode` corresponds.
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation && (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }

      patch(oldEndVnode, newStartVnode, isInitialRender); // We've already checked above if `oldStartVnode` and `newStartVnode` are
      // the same node, so since we're here we know that they are not. Thus we
      // can move the element for `oldEndVnode` _before_ the element for
      // `oldStartVnode`, leaving `oldStartVnode` to be reconciled in the
      // future.

      parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      // Here we do some checks to match up old and new nodes based on the
      // `$key$` attribute, which is set by putting a `key="my-key"` attribute
      // in the JSX for a DOM element in the implementation of a Stencil
      // component.
      //
      // First we check to see if there are any nodes in the array of old
      // children which have the same key as the first node in the new
      // children.
      idxInOld = -1;

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomKey) {
        for (i = oldStartIdx; i <= oldEndIdx; ++i) {
          if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
            idxInOld = i;
            break;
          }
        }
      }

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomKey && idxInOld >= 0) {
        // We found a node in the old children which matches up with the first
        // node in the new children! So let's deal with that
        elmToMove = oldCh[idxInOld];

        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          // the tag doesn't match so we'll need a new DOM element
          node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender); // invalidate the matching old node so that we won't try to update it
          // again later on

          oldCh[idxInOld] = undefined;
          node = elmToMove.$elm$;
        }

        newStartVnode = newCh[++newStartIdx];
      } else {
        // We either didn't find an element in the old children that matches
        // the key of the first new child OR the build is not using `key`
        // attributes at all. In either case we need to create a new element
        // for the new node.
        node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
        newStartVnode = newCh[++newStartIdx];
      }

      if (node) {
        // if we created a new node then handle inserting it to the DOM
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation) {
          parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
        } else {
          oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
        }
      }
    }
  }

  if (oldStartIdx > oldEndIdx) {
    // we have some more new nodes to add which don't match up with old nodes
    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
  } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.updatable && newStartIdx > newEndIdx) {
    // there are nodes in the `oldCh` array which no longer correspond to nodes
    // in the new array, so lets remove them (which entails cleaning up the
    // relevant DOM nodes)
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
/**
 * Compare two VNodes to determine if they are the same
 *
 * **NB**: This function is an equality _heuristic_ based on the available
 * information set on the two VNodes and can be misleading under certain
 * circumstances. In particular, if the two nodes do not have `key` attrs
 * (available under `$key$` on VNodes) then the function falls back on merely
 * checking that they have the same tag.
 *
 * So, in other words, if `key` attrs are not set on VNodes which may be
 * changing order within a `children` array or something along those lines then
 * we could obtain a false negative and then have to do needless re-rendering
 * (i.e. we'd say two VNodes aren't equal when in fact they should be).
 *
 * @param leftVNode the first VNode to check
 * @param rightVNode the second VNode to check
 * @param isInitialRender whether or not this is the first render of the vdom
 * @returns whether they're equal or not
 */


const isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  // compare if two vnode to see if they're "technically" the same
  // need to have the same element tag, and same key to be the same
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation && leftVNode.$tag$ === 'slot') {
      return leftVNode.$name$ === rightVNode.$name$;
    } // this will be set if JSX tags in the build have `key` attrs set on them
    // we only want to check this if we're not on the first render since on
    // first render `leftVNode.$key$` will always be `null`, so we can be led
    // astray and, for instance, accidentally delete a DOM node that we want to
    // keep around.


    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomKey && !isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }

    return true;
  }

  return false;
};

const referenceNode = node => {
  // this node was relocated to a new location in the dom
  // because of some other component's slot
  // but we still have an html comment in place of where
  // it's original location was according to it's original vdom
  return node && node['s-ol'] || node;
};

const parentReferenceNode = node => (node['s-ol'] ? node['s-ol'] : node).parentNode;
/**
 * Handle reconciling an outdated VNode with a new one which corresponds to
 * it. This function handles flushing updates to the DOM and reconciling the
 * children of the two nodes (if any).
 *
 * @param oldVNode an old VNode whose DOM element and children we want to update
 * @param newVNode a new VNode representing an updated version of the old one
 * @param isInitialRender whether or not this is the first render of the vdom
 */


const patch = (oldVNode, newVNode, isInitialRender = false) => {
  const elm = newVNode.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode.$children$;
  const tag = newVNode.$tag$;
  const text = newVNode.$text$;
  let defaultHolder;

  if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomText || text === null) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.svg) {
      // test if we're rendering an svg element, or still rendering nodes inside of one
      // only add this to the when the compiler sees we're using an svg somewhere
      isSvgMode = tag === 'svg' ? true : tag === 'foreignObject' ? false : isSvgMode;
    }

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomAttribute || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.reflect) {
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slot && tag === 'slot') ;else {
        // either this is the first render of an element OR it's an update
        // AND we already know it's possible it could have changed
        // this updates the element's css classes, attrs, props, listeners, etc.
        updateElement(oldVNode, newVNode, isSvgMode);
      }
    }

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.updatable && oldChildren !== null && newChildren !== null) {
      // looks like there's child vnodes for both the old and new vnodes
      // so we need to call `updateChildren` to reconcile them
      updateChildren(elm, oldChildren, newVNode, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      // no old child vnodes, but there are new child vnodes to add
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.updatable && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomText && oldVNode.$text$ !== null) {
        // the old vnode was text, so be sure to clear it out
        elm.textContent = '';
      } // add the new vnode children


      addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
    } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.updatable && oldChildren !== null) {
      // no new child vnodes, but there are old child vnodes to remove
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.svg && isSvgMode && tag === 'svg') {
      isSvgMode = false;
    }
  } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomText && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation && (defaultHolder = elm['s-cr'])) {
    // this element has slotted content
    defaultHolder.parentNode.textContent = text;
  } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomText && oldVNode.$text$ !== text) {
    // update the text content for the text only vnode
    // and also only if the text is different than before
    elm.data = text;
  }
};
/**
 * Adjust the `.hidden` property as-needed on any nodes in a DOM subtree which
 * are slot fallbacks nodes.
 *
 * A slot fallback node should be visible by default. Then, it should be
 * conditionally hidden if:
 *
 * - it has a sibling with a `slot` property set to its slot name or if
 * - it is a default fallback slot node, in which case we hide if it has any
 *   content
 *
 * @param elm the element of interest
 */


const updateFallbackSlotVisibility = elm => {
  const childNodes = elm.childNodes;

  for (const childNode of childNodes) {
    if (childNode.nodeType === 1
    /* NODE_TYPE.ElementNode */
    ) {
      if (childNode['s-sr']) {
        // this is a slot fallback node
        // get the slot name for this slot reference node
        const slotName = childNode['s-sn']; // by default always show a fallback slot node
        // then hide it if there are other slots in the light dom

        childNode.hidden = false; // we need to check all of its sibling nodes in order to see if
        // `childNode` should be hidden

        for (const siblingNode of childNodes) {
          // Don't check the node against itself
          if (siblingNode !== childNode) {
            if (siblingNode['s-hn'] !== childNode['s-hn'] || slotName !== '') {
              // this sibling node is from a different component OR is a named
              // fallback slot node
              if (siblingNode.nodeType === 1
              /* NODE_TYPE.ElementNode */
              && (slotName === siblingNode.getAttribute('slot') || slotName === siblingNode['s-sn'])) {
                childNode.hidden = true;
                break;
              }
            } else {
              // this is a default fallback slot node
              // any element or text node (with content)
              // should hide the default fallback slot node
              if (siblingNode.nodeType === 1
              /* NODE_TYPE.ElementNode */
              || siblingNode.nodeType === 3
              /* NODE_TYPE.TextNode */
              && siblingNode.textContent.trim() !== '') {
                childNode.hidden = true;
                break;
              }
            }
          }
        }
      } // keep drilling down


      updateFallbackSlotVisibility(childNode);
    }
  }
};
/**
 * Component-global information about nodes which are either currently being
 * relocated or will be shortly.
 */


const relocateNodes = [];
/**
 * Mark the contents of a slot for relocation via adding references to them to
 * the {@link relocateNodes} data structure. The actual work of relocating them
 * will then be handled in {@link renderVdom}.
 *
 * @param elm a render node whose child nodes need to be relocated
 */

const markSlotContentForRelocation = elm => {
  // tslint:disable-next-line: prefer-const
  let node;
  let hostContentNodes;
  let j;

  for (const childNode of elm.childNodes) {
    // we need to find child nodes which are slot references so we can then try
    // to match them up with nodes that need to be relocated
    if (childNode['s-sr'] && (node = childNode['s-cr']) && node.parentNode) {
      // first get the content reference comment node ('s-cr'), then we get
      // its parent, which is where all the host content is now
      hostContentNodes = node.parentNode.childNodes;
      const slotName = childNode['s-sn']; // iterate through all the nodes under the location where the host was
      // originally rendered

      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j]; // check that the node is not a content reference node or a node
        // reference and then check that the host name does not match that of
        // childNode.
        // In addition, check that the slot either has not already been relocated, or
        // that its current location's host is not childNode's host. This is essentially
        // a check so that we don't try to relocate (and then hide) a node that is already
        // where it should be.

        if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn'] && (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.experimentalSlotFixes || !node['s-sh'] || node['s-sh'] !== childNode['s-hn'])) {
          // if `node` is located in the slot that `childNode` refers to (via the
          // `'s-sn'` property) then we need to relocate it from it's current spot
          // (under the host element parent) to the right slot location
          if (isNodeLocatedInSlot(node, slotName)) {
            // it's possible we've already decided to relocate this node
            let relocateNodeData = relocateNodes.find(r => r.$nodeToRelocate$ === node); // made some changes to slots
            // let's make sure we also double check
            // fallbacks are correctly hidden or shown

            checkSlotFallbackVisibility = true; // ensure that the slot-name attr is correct

            node['s-sn'] = node['s-sn'] || slotName;

            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$['s-sh'] = childNode['s-hn']; // we marked this node for relocation previously but didn't find
              // out the slot reference node to which it needs to be relocated
              // so write it down now!

              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node['s-sh'] = childNode['s-hn']; // add to our list of nodes to relocate

              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }

            if (node['s-sr']) {
              relocateNodes.map(relocateNode => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node['s-sn'])) {
                  relocateNodeData = relocateNodes.find(r => r.$nodeToRelocate$ === node);

                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some(r => r.$nodeToRelocate$ === node)) {
            // the node is not found within the slot (`childNode`) that we're
            // currently looking at, so we stick it into `relocateNodes` to
            // handle later. If we never find a home for this element then
            // we'll need to hide it
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    } // if we're dealing with any type of element (capable of itself being a
    // slot reference or containing one) then we recur


    if (childNode.nodeType === 1
    /* NODE_TYPE.ElementNode */
    ) {
      markSlotContentForRelocation(childNode);
    }
  }
};
/**
 * Check whether a node is located in a given named slot.
 *
 * @param nodeToRelocate the node of interest
 * @param slotName the slot name to check
 * @returns whether the node is located in the slot or not
 */


const isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1
  /* NODE_TYPE.ElementNode */
  ) {
    if (nodeToRelocate.getAttribute('slot') === null && slotName === '') {
      // if the node doesn't have a slot attribute, and the slot we're checking
      // is not a named slot, then we assume the node should be within the slot
      return true;
    }

    if (nodeToRelocate.getAttribute('slot') === slotName) {
      return true;
    }

    return false;
  }

  if (nodeToRelocate['s-sn'] === slotName) {
    return true;
  }

  return slotName === '';
};
/**
 * 'Nullify' any VDom `ref` callbacks on a VDom node or its children by calling
 * them with `null`. This signals that the DOM element corresponding to the VDom
 * node has been removed from the DOM.
 *
 * @param vNode a virtual DOM node
 */


const nullifyVNodeRefs = vNode => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomRef) {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
/**
 * The main entry point for Stencil's virtual DOM-based rendering engine
 *
 * Given a {@link d.HostRef} container and some virtual DOM nodes, this
 * function will handle creating a virtual DOM tree with a single root, patching
 * the current virtual DOM tree onto an old one (if any), dealing with slot
 * relocation, and reflecting attributes.
 *
 * @param hostRef data needed to root and render the virtual DOM tree, such as
 * the DOM node into which it should be rendered.
 * @param renderFnResults the virtual DOM nodes to be rendered
 * @param isInitialLoad whether or not this is the first call after page load
 */


const renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d, _e;

  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null); // if `renderFnResults` is a Host node then we can use it directly. If not,
  // we need to call `h` again to wrap the children of our component in a
  // 'dummy' Host node (well, an empty vnode) since `renderVdom` assumes
  // implicitly that the top-level vdom node is 1) an only child and 2)
  // contains attrs that need to be set on the host element.

  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName; // <Host> runtime check

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev && Array.isArray(renderFnResults) && renderFnResults.some(isHost)) {
    throw new Error(`The <Host> must be the single root component.
Looks like the render() function of "${hostTagName.toLowerCase()}" is returning an array that contains the <Host>.

The render() function should look like this instead:

render() {
  // Do not return an array
  return (
    <Host>{content}</Host>
  );
}
  `);
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.reflect && cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]);
  } // On the first render and *only* on the first render we want to check for
  // any attributes set on the host element which are also set on the vdom
  // node. If we find them, we override the value on the VDom node attrs with
  // the value from the host element, which allows developers building apps
  // with Stencil components to override e.g. the `role` attribute on a
  // component even if it's already set on the `Host`.


  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      // We have a special implementation in `setAccessor` for `style` and
      // `class` which reconciles values coming from the VDom with values
      // already present on the DOM element, so we don't want to override those
      // attributes on the VDom tree with values from the host element if they
      // are present.
      //
      // Likewise, `ref` and `key` are special internal values for the Stencil
      // runtime and we don't want to override those either.
      if (hostElm.hasAttribute(key) && !['key', 'ref', 'style', 'class'].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }

  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4
  /* VNODE_FLAGS.isHost */
  ;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom ? hostElm.shadowRoot || hostElm : hostElm;

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.scoped || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom) {
    scopeId = hostElm['s-sc'];
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation) {
    contentRef = hostElm['s-cr'];
    useNativeShadowDom = supportsShadow && (cmpMeta.$flags$ & 1
    /* CMP_FLAGS.shadowDomEncapsulation */
    ) !== 0; // always reset

    checkSlotFallbackVisibility = false;
  } // synchronous patch


  patch(oldVNode, rootVnode, isInitialLoad);

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation) {
    // while we're moving nodes around existing nodes, temporarily disable
    // the disconnectCallback from working
    plt.$flags$ |= 1
    /* PLATFORM_FLAGS.isTmpDisconnected */
    ;

    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);

      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;

        if (!nodeToRelocate['s-ol']) {
          // add a reference node marking this node's original location
          // keep a reference to this node for later lookups
          const orgLocationNode = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDebug || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateServerSide ? originalLocationDebugNode(nodeToRelocate) : doc.createTextNode('');
          orgLocationNode['s-nr'] = nodeToRelocate;
          nodeToRelocate.parentNode.insertBefore(nodeToRelocate['s-ol'] = orgLocationNode, nodeToRelocate);
        }
      }

      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;

        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode; // When determining where to insert content, the most simple case would be
          // to relocate the node immediately following the slot reference node. We do this
          // by getting a reference to the node immediately following the slot reference node
          // since we will use `insertBefore` to manipulate the DOM.
          //
          // If there is no node immediately following the slot reference node, then we will just
          // end up appending the node as the last child of the parent.

          let insertBeforeNode = slotRefNode.nextSibling; // If the node we're currently planning on inserting the new node before is an element,
          // we need to do some additional checks to make sure we're inserting the node in the correct order.
          // The use case here would be that we have multiple nodes being relocated to the same slot. So, we want
          // to make sure they get inserted into their new how in the same order they were declared in their original location.
          //
          // TODO(STENCIL-914): Remove `experimentalSlotFixes` check

          if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.experimentalSlotFixes || insertBeforeNode && insertBeforeNode.nodeType === 1
          /* NODE_TYPE.ElementNode */
          ) {
            let orgLocationNode = (_a = nodeToRelocate['s-ol']) === null || _a === void 0 ? void 0 : _a.previousSibling;

            while (orgLocationNode) {
              let refNode = (_b = orgLocationNode['s-nr']) !== null && _b !== void 0 ? _b : null;

              if (refNode && refNode['s-sn'] === nodeToRelocate['s-sn'] && parentNodeRef === refNode.parentNode) {
                refNode = refNode.nextSibling;

                if (!refNode || !refNode['s-nr']) {
                  insertBeforeNode = refNode;
                  break;
                }
              }

              orgLocationNode = orgLocationNode.previousSibling;
            }
          }

          if (!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode || nodeToRelocate.nextSibling !== insertBeforeNode) {
            // we've checked that it's worth while to relocate
            // since that the node to relocate
            // has a different next sibling or parent relocated
            if (nodeToRelocate !== insertBeforeNode) {
              if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.experimentalSlotFixes && !nodeToRelocate['s-hn'] && nodeToRelocate['s-ol']) {
                // probably a component in the index.html that doesn't have its hostname set
                nodeToRelocate['s-hn'] = nodeToRelocate['s-ol'].parentNode.nodeName;
              } // Add it back to the dom but in its new home
              // If we get to this point and `insertBeforeNode` is `null`, that means
              // we're just going to append the node as the last child of the parent. Passing
              // `null` as the second arg here will trigger that behavior.


              parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode); // Reset the `hidden` value back to what it was defined as originally
              // This solves a problem where a `slot` is dynamically rendered and `hidden` may have
              // been set on content originally, but now it has a slot to go to so it should have
              // the value it was defined as having in the DOM, not what we overrode it to.

              if (nodeToRelocate.nodeType === 1
              /* NODE_TYPE.ElementNode */
              ) {
                nodeToRelocate.hidden = (_c = nodeToRelocate['s-ih']) !== null && _c !== void 0 ? _c : false;
              }
            }
          }
        } else {
          // this node doesn't have a slot home to go to, so let's hide it
          if (nodeToRelocate.nodeType === 1
          /* NODE_TYPE.ElementNode */
          ) {
            // Store the initial value of `hidden` so we can reset it later when
            // moving nodes around.
            if (isInitialLoad) {
              nodeToRelocate['s-ih'] = (_d = nodeToRelocate.hidden) !== null && _d !== void 0 ? _d : false;
            }

            nodeToRelocate.hidden = true;
          }
        }
      }
    }

    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    } // done moving nodes around
    // allow the disconnect callback to work again


    plt.$flags$ &= ~1
    /* PLATFORM_FLAGS.isTmpDisconnected */
    ; // always reset

    relocateNodes.length = 0;
  } // Hide any elements that were projected through, but don't have a slot to go to.
  // Only an issue if there were no "slots" rendered. Otherwise, nodes are hidden correctly.
  // This _only_ happens for `scoped` components!


  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.experimentalScopedSlotChanges && cmpMeta.$flags$ & 2
  /* CMP_FLAGS.scopedCssEncapsulation */
  ) {
    for (const childNode of rootVnode.$elm$.childNodes) {
      if (childNode['s-hn'] !== hostTagName && !childNode['s-sh']) {
        // Store the initial value of `hidden` so we can reset it later when
        // moving nodes around.
        if (isInitialLoad && childNode['s-ih'] == null) {
          childNode['s-ih'] = (_e = childNode.hidden) !== null && _e !== void 0 ? _e : false;
        }

        childNode.hidden = true;
      }
    }
  }
}; // slot comment debug nodes only created with the `--debug` flag
// otherwise these nodes are text nodes w/out content


const slotReferenceDebugNode = slotVNode => doc.createComment(`<slot${slotVNode.$name$ ? ' name="' + slotVNode.$name$ + '"' : ''}> (host=${hostTagName.toLowerCase()})`);

const originalLocationDebugNode = nodeToRelocate => doc.createComment(`org-location for ` + (nodeToRelocate.localName ? `<${nodeToRelocate.localName}> (host=${nodeToRelocate['s-hn']})` : `[${nodeToRelocate.textContent}]`));

const attachToAncestor = (hostRef, ancestorComponent) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.asyncLoading && ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
    ancestorComponent['s-p'].push(new Promise(r => hostRef.$onRenderResolve$ = r));
  }
};

const scheduleUpdate = (hostRef, isInitialLoad) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.taskQueue && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.updatable) {
    hostRef.$flags$ |= 16
    /* HOST_FLAGS.isQueuedForUpdate */
    ;
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.asyncLoading && hostRef.$flags$ & 4
  /* HOST_FLAGS.isWaitingForChildren */
  ) {
    hostRef.$flags$ |= 512
    /* HOST_FLAGS.needsRerender */
    ;
    return;
  }

  attachToAncestor(hostRef, hostRef.$ancestorComponent$); // there is no ancestor component or the ancestor component
  // has already fired off its lifecycle update then
  // fire off the initial update

  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);

  return _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.taskQueue ? writeTask(dispatch) : dispatch();
};
/**
 * Dispatch initial-render and update lifecycle hooks, enqueuing calls to
 * component lifecycle methods like `componentWillLoad` as well as
 * {@link updateComponent}, which will kick off the virtual DOM re-render.
 *
 * @param hostRef a reference to a host DOM node
 * @param isInitialLoad whether we're on the initial load or not
 * @returns an empty Promise which is used to enqueue a series of operations for
 * the component
 */


const dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
  const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad ? hostRef.$lazyInstance$ : elm; // We're going to use this variable together with `enqueue` to implement a
  // little promise-based queue. We start out with it `undefined`. When we add
  // the first function to the queue we'll set this variable to be that
  // function's return value. When we attempt to add subsequent values to the
  // queue we'll check that value and, if it was a `Promise`, we'll then chain
  // the new function off of that `Promise` using `.then()`. This will give our
  // queue two nice properties:
  //
  // 1. If all functions added to the queue are synchronous they'll be called
  //    synchronously right away.
  // 2. If all functions added to the queue are asynchronous they'll all be
  //    called in order after `dispatchHooks` exits.

  let maybePromise;

  if (isInitialLoad) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hostListener) {
      hostRef.$flags$ |= 256
      /* HOST_FLAGS.isListenReady */
      ;

      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
        hostRef.$queuedListeners$ = undefined;
      }
    }

    emitLifecycleEvent(elm, 'componentWillLoad');

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.cmpWillLoad) {
      // If `componentWillLoad` returns a `Promise` then we want to wait on
      // whatever's going on in that `Promise` before we launch into
      // rendering the component, doing other lifecycle stuff, etc. So
      // in that case we assign the returned promise to the variable we
      // declared above to hold a possible 'queueing' Promise
      maybePromise = safeCall(instance, 'componentWillLoad');
    }
  } else {
    emitLifecycleEvent(elm, 'componentWillUpdate');

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.cmpWillUpdate) {
      // Like `componentWillLoad` above, we allow Stencil component
      // authors to return a `Promise` from this lifecycle callback, and
      // we specify that our runtime will wait for that `Promise` to
      // resolve before the component re-renders. So if the method
      // returns a `Promise` we need to keep it around!
      maybePromise = safeCall(instance, 'componentWillUpdate');
    }
  }

  emitLifecycleEvent(elm, 'componentWillRender');

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.cmpWillRender) {
    maybePromise = enqueue(maybePromise, () => safeCall(instance, 'componentWillRender'));
  }

  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
/**
 * This function uses a Promise to implement a simple first-in, first-out queue
 * of functions to be called.
 *
 * The queue is ordered on the basis of the first argument. If it's
 * `undefined`, then nothing is on the queue yet, so the provided function can
 * be called synchronously (although note that this function may return a
 * `Promise`). The idea is that then the return value of that enqueueing
 * operation is kept around, so that if it was a `Promise` then subsequent
 * functions can be enqueued by calling this function again with that `Promise`
 * as the first argument.
 *
 * @param maybePromise either a `Promise` which should resolve before the next function is called or an 'empty' sentinel
 * @param fn a function to enqueue
 * @returns either a `Promise` or the return value of the provided function
 */


const enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn) : fn();
/**
 * Check that a value is a `Promise`. To check, we first see if the value is an
 * instance of the `Promise` global. In a few circumstances, in particular if
 * the global has been overwritten, this is could be misleading, so we also do
 * a little 'duck typing' check to see if the `.then` property of the value is
 * defined and a function.
 *
 * @param maybePromise it might be a promise!
 * @returns whether it is or not
 */


const isPromisey = maybePromise => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === 'function';
/**
 * Update a component given reference to its host elements and so on.
 *
 * @param hostRef an object containing references to the element's host node,
 * VDom nodes, and other metadata
 * @param instance a reference to the underlying host element where it will be
 * rendered
 * @param isInitialLoad whether or not this function is being called as part of
 * the first render cycle
 */


const updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;

  const elm = hostRef.$hostElement$;
  const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
  const rc = elm['s-rc'];

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.style && isInitialLoad) {
    // DOM WRITE!
    attachStyles(hostRef);
  }

  const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev) {
    hostRef.$flags$ |= 1024
    /* HOST_FLAGS.devOnRender */
    ;
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateServerSide) {
    await callRender(hostRef, instance, elm, isInitialLoad);
  } else {
    callRender(hostRef, instance, elm, isInitialLoad);
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev) {
    hostRef.$renderCount$ = hostRef.$renderCount$ === undefined ? 1 : hostRef.$renderCount$ + 1;
    hostRef.$flags$ &= ~1024
    /* HOST_FLAGS.devOnRender */
    ;
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateServerSide) {
    try {
      // manually connected child components during server-side hydrate
      serverSideConnected(elm);

      if (isInitialLoad) {
        // using only during server-side hydrate
        if (hostRef.$cmpMeta$.$flags$ & 1
        /* CMP_FLAGS.shadowDomEncapsulation */
        ) {
          elm['s-en'] = '';
        } else if (hostRef.$cmpMeta$.$flags$ & 2
        /* CMP_FLAGS.scopedCssEncapsulation */
        ) {
          elm['s-en'] = 'c';
        }
      }
    } catch (e) {
      consoleError(e, elm);
    }
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.asyncLoading && rc) {
    // ok, so turns out there are some child host elements
    // waiting on this parent element to load
    // let's fire off all update callbacks waiting
    rc.map(cb => cb());
    elm['s-rc'] = undefined;
  }

  endRender();
  endUpdate();

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.asyncLoading) {
    const childrenPromises = (_a = elm['s-p']) !== null && _a !== void 0 ? _a : [];

    const postUpdate = () => postUpdateComponent(hostRef);

    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4
      /* HOST_FLAGS.isWaitingForChildren */
      ;
      childrenPromises.length = 0;
    }
  } else {
    postUpdateComponent(hostRef);
  }
};
/**
 * Handle making the call to the VDom renderer with the proper context given
 * various build variables
 *
 * @param hostRef an object containing references to the element's host node,
 * VDom nodes, and other metadata
 * @param instance a reference to the underlying host element where it will be
 * rendered
 * @param elm the Host element for the component
 * @param isInitialLoad whether or not this function is being called as part of
 * @returns an empty promise
 */


const callRender = (hostRef, instance, elm, isInitialLoad) => {
  // in order for bundlers to correctly tree-shake the BUILD object
  // we need to ensure BUILD is not deoptimized within a try/catch
  // https://rollupjs.org/guide/en/#treeshake tryCatchDeoptimization
  const allRenderFn = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.allRenderFn ? true : false;
  const lazyLoad = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad ? true : false;
  const taskQueue = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.taskQueue ? true : false;
  const updatable = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.updatable ? true : false;

  try {
    renderingRef = instance;
    /**
     * minification optimization: `allRenderFn` is `true` if all components have a `render`
     * method, so we can call the method immediately. If not, check before calling it.
     */

    instance = allRenderFn ? instance.render() : instance.render && instance.render();

    if (updatable && taskQueue) {
      hostRef.$flags$ &= ~16
      /* HOST_FLAGS.isQueuedForUpdate */
      ;
    }

    if (updatable || lazyLoad) {
      hostRef.$flags$ |= 2
      /* HOST_FLAGS.hasRendered */
      ;
    }

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hasRenderFn || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.reflect) {
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.vdomRender || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.reflect) {
        // looks like we've got child nodes to render into this host element
        // or we need to update the css class/attrs on the host element
        // DOM WRITE!
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateServerSide) {
          return Promise.resolve(instance).then(value => renderVdom(hostRef, value, isInitialLoad));
        } else {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      } else {
        const shadowRoot = elm.shadowRoot;

        if (hostRef.$cmpMeta$.$flags$ & 1
        /* CMP_FLAGS.shadowDomEncapsulation */
        ) {
          shadowRoot.textContent = instance;
        } else {
          elm.textContent = instance;
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }

  renderingRef = null;
  return null;
};

const getRenderingRef = () => renderingRef;

const postUpdateComponent = hostRef => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime('postUpdate', tagName);
  const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad ? hostRef.$lazyInstance$ : elm;
  const ancestorComponent = hostRef.$ancestorComponent$;

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.cmpDidRender) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev) {
      hostRef.$flags$ |= 1024
      /* HOST_FLAGS.devOnRender */
      ;
    }

    safeCall(instance, 'componentDidRender');

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev) {
      hostRef.$flags$ &= ~1024
      /* HOST_FLAGS.devOnRender */
      ;
    }
  }

  emitLifecycleEvent(elm, 'componentDidRender');

  if (!(hostRef.$flags$ & 64
  /* HOST_FLAGS.hasLoadedComponent */
  )) {
    hostRef.$flags$ |= 64
    /* HOST_FLAGS.hasLoadedComponent */
    ;

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.asyncLoading && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.cssAnnotations) {
      // DOM WRITE!
      addHydratedFlag(elm);
    }

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.cmpDidLoad) {
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev) {
        hostRef.$flags$ |= 2048
        /* HOST_FLAGS.devOnDidLoad */
        ;
      }

      safeCall(instance, 'componentDidLoad');

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev) {
        hostRef.$flags$ &= ~2048
        /* HOST_FLAGS.devOnDidLoad */
        ;
      }
    }

    emitLifecycleEvent(elm, 'componentDidLoad');
    endPostUpdate();

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.asyncLoading) {
      hostRef.$onReadyResolve$(elm);

      if (!ancestorComponent) {
        appDidLoad(tagName);
      }
    }
  } else {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.cmpDidUpdate) {
      // we've already loaded this component
      // fire off the user's componentDidUpdate method (if one was provided)
      // componentDidUpdate runs AFTER render() has been called
      // and all child components have finished updating
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev) {
        hostRef.$flags$ |= 1024
        /* HOST_FLAGS.devOnRender */
        ;
      }

      safeCall(instance, 'componentDidUpdate');

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev) {
        hostRef.$flags$ &= ~1024
        /* HOST_FLAGS.devOnRender */
        ;
      }
    }

    emitLifecycleEvent(elm, 'componentDidUpdate');
    endPostUpdate();
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.method && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad) {
    hostRef.$onInstanceResolve$(elm);
  } // load events fire from bottom to top
  // the deepest elements load first then bubbles up


  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.asyncLoading) {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = undefined;
    }

    if (hostRef.$flags$ & 512
    /* HOST_FLAGS.needsRerender */
    ) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }

    hostRef.$flags$ &= ~(4
    /* HOST_FLAGS.isWaitingForChildren */
    | 512
    /* HOST_FLAGS.needsRerender */
    );
  } // ( •_•)
  // ( •_•)>⌐■-■
  // (⌐■_■)

};

const forceUpdate = ref => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.updatable && (Build.isBrowser || Build.isTesting)) {
    const hostRef = getHostRef(ref);
    const isConnected = hostRef.$hostElement$.isConnected;

    if (isConnected && (hostRef.$flags$ & (2
    /* HOST_FLAGS.hasRendered */
    | 16
    /* HOST_FLAGS.isQueuedForUpdate */
    )) === 2
    /* HOST_FLAGS.hasRendered */
    ) {
      scheduleUpdate(hostRef, false);
    } // Returns "true" when the forced update was successfully scheduled


    return isConnected;
  }

  return false;
};

const appDidLoad = who => {
  // on appload
  // we have finish the first big initial render
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.cssAnnotations) {
    addHydratedFlag(doc.documentElement);
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.asyncQueue) {
    plt.$flags$ |= 2
    /* PLATFORM_FLAGS.appLoaded */
    ;
  }

  nextTick(() => emitEvent(win, 'appload', {
    detail: {
      namespace: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .NAMESPACE */ .A7
    }
  }));

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.profile && performance.measure) {
    performance.measure(`[Stencil] ${_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .NAMESPACE */ .A7} initial load (by ${who})`, 'st:app:start');
  }
};
/**
 * Allows to safely call a method, e.g. `componentDidLoad`, on an instance,
 * e.g. custom element node. If a build figures out that e.g. no component
 * has a `componentDidLoad` method, the instance method gets removed from the
 * output bundle and this function returns `undefined`.
 * @param instance any object that may or may not contain methods
 * @param method method name
 * @param arg single arbitrary argument
 * @returns result of method call if it exists, otherwise `undefined`
 */


const safeCall = (instance, method, arg) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e);
    }
  }

  return undefined;
};
/**
 * For debugging purposes as `BUILD.lifecycleDOMEvents` is `false` by default and will
 * get removed by the compiler. Used for timing events to see how long they take.
 * @param elm the target of the Event
 * @param lifecycleName name of the event
 */


const emitLifecycleEvent = (elm, lifecycleName) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lifecycleDOMEvents) {
    emitEvent(elm, 'stencil_' + lifecycleName, {
      bubbles: true,
      composed: true,
      detail: {
        namespace: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .NAMESPACE */ .A7
      }
    });
  }
};

const addHydratedFlag = elm => _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydratedClass ? elm.classList.add('hydrated') : _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydratedAttribute ? elm.setAttribute('hydrated', '') : undefined;

const serverSideConnected = elm => {
  const children = elm.children;

  if (children != null) {
    for (let i = 0, ii = children.length; i < ii; i++) {
      const childElm = children[i];

      if (typeof childElm.connectedCallback === 'function') {
        childElm.connectedCallback();
      }

      serverSideConnected(childElm);
    }
  }
};

const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);

const setValue = (ref, propName, newVal, cmpMeta) => {
  // check our new property value against our internal value
  const hostRef = getHostRef(ref);
  const elm = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad ? hostRef.$hostElement$ : ref;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad ? hostRef.$lazyInstance$ : elm;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]); // explicitly check for NaN on both sides, as `NaN === NaN` is always false

  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;

  if ((!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad || !(flags & 8
  /* HOST_FLAGS.isConstructingInstance */
  ) || oldVal === undefined) && didValueChange) {
    // gadzooks! the property's value has changed!!
    // set our new value!
    hostRef.$instanceValues$.set(propName, newVal);

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev) {
      if (hostRef.$flags$ & 1024
      /* HOST_FLAGS.devOnRender */
      ) {
        consoleDevWarn(`The state/prop "${propName}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`, '\nElement', elm, '\nNew value', newVal, '\nOld value', oldVal);
      } else if (hostRef.$flags$ & 2048
      /* HOST_FLAGS.devOnDidLoad */
      ) {
        consoleDevWarn(`The state/prop "${propName}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`, '\nElement', elm, '\nNew value', newVal, '\nOld value', oldVal);
      }
    }

    if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad || instance) {
      // get an array of method names of watch functions to call
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.watchCallback && cmpMeta.$watchers$ && flags & 128
      /* HOST_FLAGS.isWatchReady */
      ) {
        const watchMethods = cmpMeta.$watchers$[propName];

        if (watchMethods) {
          // this instance is watching for when this property changed
          watchMethods.map(watchMethodName => {
            try {
              // fire off each of the watch methods that are watching this property
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.updatable && (flags & (2
      /* HOST_FLAGS.hasRendered */
      | 16
      /* HOST_FLAGS.isQueuedForUpdate */
      )) === 2
      /* HOST_FLAGS.hasRendered */
      ) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.cmpShouldUpdate && instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        } // looks like this value actually changed, so we've got work to do!
        // but only if we've already rendered, otherwise just chill out
        // queue that we need to do an update, but don't worry about queuing
        // up millions cuz this function ensures it only runs once


        scheduleUpdate(hostRef, false);
      }
    }
  }
};
/**
 * Attach a series of runtime constructs to a compiled Stencil component
 * constructor, including getters and setters for the `@Prop` and `@State`
 * decorators, callbacks for when attributes change, and so on.
 *
 * @param Cstr the constructor for a component that we need to process
 * @param cmpMeta metadata collected previously about the component
 * @param flags a number used to store a series of bit flags
 * @returns a reference to the same constructor passed in (but now mutated)
 */


const proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a;

  const prototype = Cstr.prototype;
  /**
   * proxy form associated custom element lifecycle callbacks
   * @ref https://web.dev/articles/more-capable-form-controls#lifecycle_callbacks
   */

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.formAssociated && cmpMeta.$flags$ & 64
  /* CMP_FLAGS.formAssociated */
  && flags & 1
  /* PROXY_FLAGS.isElementConstructor */
  ) {
    FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS.forEach(cbName => Object.defineProperty(prototype, cbName, {
      value(...args) {
        const hostRef = getHostRef(this);
        const elm = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad ? hostRef.$hostElement$ : this;
        const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad ? hostRef.$lazyInstance$ : elm;

        if (!instance) {
          hostRef.$onReadyPromise$.then(instance => {
            const cb = instance[cbName];
            typeof cb === 'function' && cb.call(instance, ...args);
          });
        } else {
          const cb = instance[cbName];
          typeof cb === 'function' && cb.call(instance, ...args);
        }
      }

    }));
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.member && cmpMeta.$members$) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.watchCallback && Cstr.watchers) {
      cmpMeta.$watchers$ = Cstr.watchers;
    } // It's better to have a const than two Object.entries()


    const members = Object.entries(cmpMeta.$members$);
    members.map(([memberName, [memberFlags]]) => {
      if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.prop || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.state) && (memberFlags & 31
      /* MEMBER_FLAGS.Prop */
      || (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad || flags & 2
      /* PROXY_FLAGS.proxyState */
      ) && memberFlags & 32
      /* MEMBER_FLAGS.State */
      )) {
        // proxyComponent - prop
        Object.defineProperty(prototype, memberName, {
          get() {
            // proxyComponent, get value
            return getValue(this, memberName);
          },

          set(newValue) {
            // only during dev time
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev) {
              const ref = getHostRef(this);

              if ( // we are proxying the instance (not element)
              (flags & 1
              /* PROXY_FLAGS.isElementConstructor */
              ) === 0 && // the element is not constructing
              (ref && ref.$flags$ & 8
              /* HOST_FLAGS.isConstructingInstance */
              ) === 0 && // the member is a prop
              (memberFlags & 31
              /* MEMBER_FLAGS.Prop */
              ) !== 0 && // the member is not mutable
              (memberFlags & 1024
              /* MEMBER_FLAGS.Mutable */
              ) === 0) {
                consoleDevWarn(`@Prop() "${memberName}" on <${cmpMeta.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`);
              }
            } // proxyComponent, set value


            setValue(this, memberName, newValue, cmpMeta);
          },

          configurable: true,
          enumerable: true
        });
      } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.method && flags & 1
      /* PROXY_FLAGS.isElementConstructor */
      && memberFlags & 64
      /* MEMBER_FLAGS.Method */
      ) {
        // proxyComponent - method
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a;

            const ref = getHostRef(this);
            return (_a = ref === null || ref === void 0 ? void 0 : ref.$onInstancePromise$) === null || _a === void 0 ? void 0 : _a.then(() => {
              var _a;

              return (_a = ref.$lazyInstance$) === null || _a === void 0 ? void 0 : _a[memberName](...args);
            });
          }

        });
      }
    });

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.observeAttribute && (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad || flags & 1
    /* PROXY_FLAGS.isElementConstructor */
    )) {
      const attrNameToPropName = new Map();

      prototype.attributeChangedCallback = function (attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a;

          const propName = attrNameToPropName.get(attrName); //  In a web component lifecycle the attributeChangedCallback runs prior to connectedCallback
          //  in the case where an attribute was set inline.
          //  ```html
          //    <my-component some-attribute="some-value"></my-component>
          //  ```
          //
          //  There is an edge case where a developer sets the attribute inline on a custom element and then
          //  programmatically changes it before it has been upgraded as shown below:
          //
          //  ```html
          //    <!-- this component has _not_ been upgraded yet -->
          //    <my-component id="test" some-attribute="some-value"></my-component>
          //    <script>
          //      // grab non-upgraded component
          //      el = document.querySelector("#test");
          //      el.someAttribute = "another-value";
          //      // upgrade component
          //      customElements.define('my-component', MyComponent);
          //    </script>
          //  ```
          //  In this case if we do not un-shadow here and use the value of the shadowing property, attributeChangedCallback
          //  will be called with `newValue = "some-value"` and will set the shadowed property (this.someAttribute = "another-value")
          //  to the value that was set inline i.e. "some-value" from above example. When
          //  the connectedCallback attempts to un-shadow it will use "some-value" as the initial value rather than "another-value"
          //
          //  The case where the attribute was NOT set inline but was not set programmatically shall be handled/un-shadowed
          //  by connectedCallback as this attributeChangedCallback will not fire.
          //
          //  https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
          //
          //  TODO(STENCIL-16) we should think about whether or not we actually want to be reflecting the attributes to
          //  properties here given that this goes against best practices outlined here
          //  https://developers.google.com/web/fundamentals/web-components/best-practices#avoid-reentrancy

          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === 'number' && this[propName] == newValue) {
            // if the propName exists on the prototype of `Cstr`, this update may be a result of Stencil using native
            // APIs to reflect props as attributes. Calls to `setAttribute(someElement, propName)` will result in
            // `propName` to be converted to a `DOMString`, which may not be what we want for other primitive props.
            return;
          } else if (propName == null) {
            // At this point we should know this is not a "member", so we can treat it like watching an attribute
            // on a vanilla web component
            const hostRef = getHostRef(this);
            const flags = hostRef === null || hostRef === void 0 ? void 0 : hostRef.$flags$; // We only want to trigger the callback(s) if:
            // 1. The instance is ready
            // 2. The watchers are ready
            // 3. The value has changed

            if (flags && !(flags & 8
            /* HOST_FLAGS.isConstructingInstance */
            ) && flags & 128
            /* HOST_FLAGS.isWatchReady */
            && newValue !== oldValue) {
              const elm = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad ? hostRef.$hostElement$ : this;
              const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad ? hostRef.$lazyInstance$ : elm;
              const entry = (_a = cmpMeta.$watchers$) === null || _a === void 0 ? void 0 : _a[attrName];
              entry === null || entry === void 0 ? void 0 : entry.forEach(callbackName => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }

            return;
          }

          this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
        });
      }; // Create an array of attributes to observe
      // This list in comprised of all strings used within a `@Watch()` decorator
      // on a component as well as any Stencil-specific "members" (`@Prop()`s and `@State()`s).
      // As such, there is no way to guarantee type-safety here that a user hasn't entered
      // an invalid attribute.


      Cstr.observedAttributes = Array.from(new Set([...Object.keys((_a = cmpMeta.$watchers$) !== null && _a !== void 0 ? _a : {}), ...members.filter(([_, m]) => m[0] & 15
      /* MEMBER_FLAGS.HasAttribute */
      ).map(([propName, m]) => {
        var _a;

        const attrName = m[1] || propName;
        attrNameToPropName.set(attrName, propName);

        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.reflect && m[0] & 512
        /* MEMBER_FLAGS.ReflectAttr */
        ) {
          (_a = cmpMeta.$attrsToReflect$) === null || _a === void 0 ? void 0 : _a.push([propName, attrName]);
        }

        return attrName;
      })]));
    }
  }

  return Cstr;
};
/**
 * Initialize a Stencil component given a reference to its host element, its
 * runtime bookkeeping data structure, runtime metadata about the component,
 * and (optionally) an HMR version ID.
 *
 * @param elm a host element
 * @param hostRef the element's runtime bookkeeping object
 * @param cmpMeta runtime metadata for the Stencil component
 * @param hmrVersionId an (optional) HMR version ID
 */


const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr; // initializeComponent

  if ((hostRef.$flags$ & 32
  /* HOST_FLAGS.hasInitializedComponent */
  ) === 0) {
    // Let the runtime know that the component has been initialized
    hostRef.$flags$ |= 32
    /* HOST_FLAGS.hasInitializedComponent */
    ;

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateClientSide) {
      // lazy loaded components
      // request the component's implementation to be
      // wired up with the host element
      Cstr = loadModule(cmpMeta, hostRef, hmrVersionId);

      if (Cstr.then) {
        // Await creates a micro-task avoid if possible
        const endLoad = uniqueTime(`st:load:${cmpMeta.$tagName$}:${hostRef.$modeName$}`, `[Stencil] Load module for <${cmpMeta.$tagName$}>`);
        Cstr = await Cstr;
        endLoad();
      }

      if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDebug) && !Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.member && !Cstr.isProxied) {
        // we've never proxied this Constructor before
        // let's add the getters/setters to its prototype before
        // the first time we create an instance of the implementation
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.watchCallback) {
          cmpMeta.$watchers$ = Cstr.watchers;
        }

        proxyComponent(Cstr, cmpMeta, 2
        /* PROXY_FLAGS.proxyState */
        );
        Cstr.isProxied = true;
      }

      const endNewInstance = createTime('createInstance', cmpMeta.$tagName$); // ok, time to construct the instance
      // but let's keep track of when we start and stop
      // so that the getters/setters don't incorrectly step on data

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.member) {
        hostRef.$flags$ |= 8
        /* HOST_FLAGS.isConstructingInstance */
        ;
      } // construct the lazy-loaded component implementation
      // passing the hostRef is very important during
      // construction in order to directly wire together the
      // host element and the lazy-loaded instance


      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e);
      }

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.member) {
        hostRef.$flags$ &= ~8
        /* HOST_FLAGS.isConstructingInstance */
        ;
      }

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.watchCallback) {
        hostRef.$flags$ |= 128
        /* HOST_FLAGS.isWatchReady */
        ;
      }

      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$);
    } else {
      // sync constructor component
      Cstr = elm.constructor; // wait for the CustomElementRegistry to mark the component as ready before setting `isWatchReady`. Otherwise,
      // watchers may fire prematurely if `customElements.get()`/`customElements.whenDefined()` resolves _before_
      // Stencil has completed instantiating the component.

      customElements.whenDefined(cmpMeta.$tagName$).then(() => hostRef.$flags$ |= 128
      /* HOST_FLAGS.isWatchReady */
      );
    }

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.style && Cstr.style) {
      // this component has styles but we haven't registered them yet
      let style = Cstr.style;

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.mode && typeof style !== 'string') {
        style = style[hostRef.$modeName$ = computeMode(elm)];

        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateServerSide && hostRef.$modeName$) {
          elm.setAttribute('s-mode', hostRef.$modeName$);
        }
      }

      const scopeId = getScopeId(cmpMeta, hostRef.$modeName$);

      if (!styles.has(scopeId)) {
        const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);

        if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateServerSide && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom && // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDomShim && cmpMeta.$flags$ & 8
        /* CMP_FLAGS.needsShadowDomShim */
        ) {
          style = await __webpack_require__.e(/* import() */ 713).then(__webpack_require__.bind(__webpack_require__, 8713)).then(m => m.scopeCss(style, scopeId, false));
        }

        registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1
        /* CMP_FLAGS.shadowDomEncapsulation */
        ));
        endRegisterStyles();
      }
    }
  } // we've successfully created a lazy instance


  const ancestorComponent = hostRef.$ancestorComponent$;

  const schedule = () => scheduleUpdate(hostRef, true);

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.asyncLoading && ancestorComponent && ancestorComponent['s-rc']) {
    // this is the initial load and this component it has an ancestor component
    // but the ancestor component has NOT fired its will update lifecycle yet
    // so let's just cool our jets and wait for the ancestor to continue first
    // this will get fired off when the ancestor component
    // finally gets around to rendering its lazy self
    // fire off the initial update
    ancestorComponent['s-rc'].push(schedule);
  } else {
    schedule();
  }
};

const fireConnectedCallback = instance => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.connectedCallback) {
    safeCall(instance, 'connectedCallback');
  }
};

const connectedCallback = elm => {
  if ((plt.$flags$ & 1
  /* PLATFORM_FLAGS.isTmpDisconnected */
  ) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hostListenerTargetParent) {
      // only run if we have listeners being attached to a parent
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, true);
    }

    if (!(hostRef.$flags$ & 1
    /* HOST_FLAGS.hasConnected */
    )) {
      // first time this component has connected
      hostRef.$flags$ |= 1
      /* HOST_FLAGS.hasConnected */
      ;
      let hostId;

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateClientSide) {
        hostId = elm.getAttribute(HYDRATE_ID);

        if (hostId) {
          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom && supportsShadow && cmpMeta.$flags$ & 1
          /* CMP_FLAGS.shadowDomEncapsulation */
          ) {
            const scopeId = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.mode ? addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute('s-mode')) : addStyle(elm.shadowRoot, cmpMeta);
            elm.classList.remove(scopeId + '-h', scopeId + '-s');
          }

          initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
        }
      }

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotRelocation && !hostId) {
        // initUpdate
        // if the slot polyfill is required we'll need to put some nodes
        // in here to act as original content anchors as we move nodes around
        // host element has been connected to the DOM
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateServerSide || (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slot || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom) && // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ & (4
        /* CMP_FLAGS.hasSlotRelocation */
        | 8
        /* CMP_FLAGS.needsShadowDomShim */
        )) {
          setContentReference(elm);
        }
      }

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.asyncLoading) {
        // find the first ancestor component (if there is one) and register
        // this component as one of the actively loading child components for its ancestor
        let ancestorComponent = elm;

        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          // climb up the ancestors looking for the first
          // component that hasn't finished its lifecycle update yet
          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateClientSide && ancestorComponent.nodeType === 1
          /* NODE_TYPE.ElementNode */
          && ancestorComponent.hasAttribute('s-id') && ancestorComponent['s-p'] || ancestorComponent['s-p']) {
            // we found this components first ancestor component
            // keep a reference to this component's ancestor component
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      } // Lazy properties
      // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties


      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.prop && !_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hydrateServerSide && cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31
          /* MEMBER_FLAGS.Prop */
          && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.initializeNextTick) {
        // connectedCallback, taskQueue, initialLoad
        // angular sets attribute AFTER connectCallback
        // https://github.com/angular/angular/issues/18909
        // https://github.com/angular/angular/issues/19940
        nextTick(() => initializeComponent(elm, hostRef, cmpMeta));
      } else {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      // not the first time this has connected
      // reattach any event listeners to the host
      // since they would have been removed when disconnected
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, false); // fire off connectedCallback() on component instance

      if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$);
      } else if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$));
      }
    }

    endConnected();
  }
};

const setContentReference = elm => {
  // only required when we're NOT using native shadow dom (slot)
  // or this browser doesn't support native shadow dom
  // and this host element was NOT created with SSR
  // let's pick out the inner content for slot projection
  // create a node to represent where the original
  // content was first placed, which is useful later on
  const contentRefElm = elm['s-cr'] = doc.createComment(_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDebug ? `content-ref (host=${elm.localName})` : '');
  contentRefElm['s-cn'] = true;
  elm.insertBefore(contentRefElm, elm.firstChild);
};

const disconnectInstance = instance => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.disconnectedCallback) {
    safeCall(instance, 'disconnectedCallback');
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.cmpDidUnload) {
    safeCall(instance, 'componentDidUnload');
  }
};

const disconnectedCallback = async elm => {
  if ((plt.$flags$ & 1
  /* PLATFORM_FLAGS.isTmpDisconnected */
  ) === 0) {
    const hostRef = getHostRef(elm);

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hostListener) {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map(rmListener => rmListener());
        hostRef.$rmListeners$ = undefined;
      }
    }

    if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad) {
      disconnectInstance(elm);
    } else if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$);
    } else if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$));
    }
  }
};

const patchPseudoShadowDom = (hostElementPrototype, descriptorPrototype) => {
  patchCloneNode(hostElementPrototype);
  patchSlotAppendChild(hostElementPrototype);
  patchSlotAppend(hostElementPrototype);
  patchSlotPrepend(hostElementPrototype);
  patchSlotInsertAdjacentElement(hostElementPrototype);
  patchSlotInsertAdjacentHTML(hostElementPrototype);
  patchSlotInsertAdjacentText(hostElementPrototype);
  patchTextContent(hostElementPrototype);
  patchChildSlotNodes(hostElementPrototype, descriptorPrototype);
  patchSlotRemoveChild(hostElementPrototype);
};

const patchCloneNode = HostElementPrototype => {
  const orgCloneNode = HostElementPrototype.cloneNode;

  HostElementPrototype.cloneNode = function (deep) {
    const srcNode = this;
    const isShadowDom = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom ? srcNode.shadowRoot && supportsShadow : false;
    const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slot && !isShadowDom && deep) {
      let i = 0;
      let slotted, nonStencilNode;
      const stencilPrivates = ['s-id', 's-cr', 's-lr', 's-rc', 's-sc', 's-p', 's-cn', 's-sr', 's-sn', 's-hn', 's-ol', 's-nr', 's-si'];

      for (; i < srcNode.childNodes.length; i++) {
        slotted = srcNode.childNodes[i]['s-nr'];
        nonStencilNode = stencilPrivates.every(privateField => !srcNode.childNodes[i][privateField]);

        if (slotted) {
          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.appendChildSlotFix && clonedNode.__appendChild) {
            clonedNode.__appendChild(slotted.cloneNode(true));
          } else {
            clonedNode.appendChild(slotted.cloneNode(true));
          }
        }

        if (nonStencilNode) {
          clonedNode.appendChild(srcNode.childNodes[i].cloneNode(true));
        }
      }
    }

    return clonedNode;
  };
};
/**
 * Patches the `appendChild` method on a `scoped` Stencil component.
 * The patch will attempt to find a slot with the same name as the node being appended
 * and insert it into the slot reference if found. Otherwise, it falls-back to the original
 * `appendChild` method.
 *
 * @param HostElementPrototype The Stencil component to be patched
 */


const patchSlotAppendChild = HostElementPrototype => {
  HostElementPrototype.__appendChild = HostElementPrototype.appendChild;

  HostElementPrototype.appendChild = function (newChild) {
    const slotName = newChild['s-sn'] = getSlotName(newChild);
    const slotNode = getHostSlotNode(this.childNodes, slotName);

    if (slotNode) {
      const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
      const appendAfter = slotChildNodes[slotChildNodes.length - 1];
      const insertedNode = appendAfter.parentNode.insertBefore(newChild, appendAfter.nextSibling); // Check if there is fallback content that should be hidden

      updateFallbackSlotVisibility(this); // Force a re-render of the host element

      forceUpdate(this);
      return insertedNode;
    }

    return this.__appendChild(newChild);
  };
};
/**
 * Patches the `removeChild` method on a `scoped` Stencil component.
 * This patch attempts to remove the specified node from a slot reference
 * if the slot exists. Otherwise, it falls-back to the original `removeChild` method.
 *
 * @param ElementPrototype The Stencil component to be patched
 */


const patchSlotRemoveChild = ElementPrototype => {
  ElementPrototype.__removeChild = ElementPrototype.removeChild;

  ElementPrototype.removeChild = function (toRemove) {
    if (toRemove && typeof toRemove['s-sn'] !== 'undefined') {
      const slotNode = getHostSlotNode(this.childNodes, toRemove['s-sn']);

      if (slotNode) {
        // Get all slot content
        const slotChildNodes = getHostSlotChildNodes(slotNode, toRemove['s-sn']); // See if any of the slotted content matches the node to remove

        const existingNode = slotChildNodes.find(n => n === toRemove);

        if (existingNode) {
          existingNode.remove(); // Check if there is fallback content that should be displayed if that
          // was the last node in the slot

          updateFallbackSlotVisibility(this);
          return;
        }
      }
    }

    return this.__removeChild(toRemove);
  };
};
/**
 * Patches the `prepend` method for a slotted node inside a scoped component.
 *
 * @param HostElementPrototype the `Element` to be patched
 */


const patchSlotPrepend = HostElementPrototype => {
  const originalPrepend = HostElementPrototype.prepend;

  HostElementPrototype.prepend = function (...newChildren) {
    newChildren.forEach(newChild => {
      if (typeof newChild === 'string') {
        newChild = this.ownerDocument.createTextNode(newChild);
      }

      const slotName = newChild['s-sn'] = getSlotName(newChild);
      const slotNode = getHostSlotNode(this.childNodes, slotName);

      if (slotNode) {
        const slotPlaceholder = document.createTextNode('');
        slotPlaceholder['s-nr'] = newChild;

        slotNode['s-cr'].parentNode.__appendChild(slotPlaceholder);

        newChild['s-ol'] = slotPlaceholder;
        const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
        const appendAfter = slotChildNodes[0];
        return appendAfter.parentNode.insertBefore(newChild, appendAfter.nextSibling);
      }

      if (newChild.nodeType === 1 && !!newChild.getAttribute('slot')) {
        newChild.hidden = true;
      }

      return originalPrepend.call(this, newChild);
    });
  };
};
/**
 * Patches the `append` method for a slotted node inside a scoped component. The patched method uses
 * `appendChild` under-the-hood while creating text nodes for any new children that passed as bare strings.
 *
 * @param HostElementPrototype the `Element` to be patched
 */


const patchSlotAppend = HostElementPrototype => {
  HostElementPrototype.append = function (...newChildren) {
    newChildren.forEach(newChild => {
      if (typeof newChild === 'string') {
        newChild = this.ownerDocument.createTextNode(newChild);
      }

      this.appendChild(newChild);
    });
  };
};
/**
 * Patches the `insertAdjacentHTML` method for a slotted node inside a scoped component. Specifically,
 * we only need to patch the behavior for the specific `beforeend` and `afterbegin` positions so the element
 * gets inserted into the DOM in the correct location.
 *
 * @param HostElementPrototype the `Element` to be patched
 */


const patchSlotInsertAdjacentHTML = HostElementPrototype => {
  const originalInsertAdjacentHtml = HostElementPrototype.insertAdjacentHTML;

  HostElementPrototype.insertAdjacentHTML = function (position, text) {
    if (position !== 'afterbegin' && position !== 'beforeend') {
      return originalInsertAdjacentHtml.call(this, position, text);
    }

    const container = this.ownerDocument.createElement('_');
    let node;
    container.innerHTML = text;

    if (position === 'afterbegin') {
      while (node = container.firstChild) {
        this.prepend(node);
      }
    } else if (position === 'beforeend') {
      while (node = container.firstChild) {
        this.append(node);
      }
    }
  };
};
/**
 * Patches the `insertAdjacentText` method for a slotted node inside a scoped component. Specifically,
 * we only need to patch the behavior for the specific `beforeend` and `afterbegin` positions so the text node
 * gets inserted into the DOM in the correct location.
 *
 * @param HostElementPrototype the `Element` to be patched
 */


const patchSlotInsertAdjacentText = HostElementPrototype => {
  HostElementPrototype.insertAdjacentText = function (position, text) {
    this.insertAdjacentHTML(position, text);
  };
};
/**
 * Patches the `insertAdjacentElement` method for a slotted node inside a scoped component. Specifically,
 * we only need to patch the behavior for the specific `beforeend` and `afterbegin` positions so the element
 * gets inserted into the DOM in the correct location.
 *
 * @param HostElementPrototype the `Element` to be patched
 */


const patchSlotInsertAdjacentElement = HostElementPrototype => {
  const originalInsertAdjacentElement = HostElementPrototype.insertAdjacentElement;

  HostElementPrototype.insertAdjacentElement = function (position, element) {
    if (position !== 'afterbegin' && position !== 'beforeend') {
      return originalInsertAdjacentElement.call(this, position, element);
    }

    if (position === 'afterbegin') {
      this.prepend(element);
      return element;
    } else if (position === 'beforeend') {
      this.append(element);
      return element;
    }

    return element;
  };
};
/**
 * Patches the text content of an unnamed slotted node inside a scoped component
 * @param hostElementPrototype the `Element` to be patched
 */


const patchTextContent = hostElementPrototype => {
  const descriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent');
  Object.defineProperty(hostElementPrototype, '__textContent', descriptor);

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.experimentalScopedSlotChanges) {
    // Patch `textContent` to mimic shadow root behavior
    Object.defineProperty(hostElementPrototype, 'textContent', {
      // To mimic shadow root behavior, we need to return the text content of all
      // nodes in a slot reference node
      get() {
        const slotRefNodes = getAllChildSlotNodes(this.childNodes);
        const textContent = slotRefNodes.map(node => {
          var _a, _b;

          const text = []; // Need to get the text content of all nodes in the slot reference node

          let slotContent = node.nextSibling;

          while (slotContent && slotContent['s-sn'] === node['s-sn']) {
            if (slotContent.nodeType === 3
            /* NODE_TYPES.TEXT_NODE */
            || slotContent.nodeType === 1
            /* NODE_TYPES.ELEMENT_NODE */
            ) {
              text.push((_b = (_a = slotContent.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '');
            }

            slotContent = slotContent.nextSibling;
          }

          return text.filter(ref => ref !== '').join(' ');
        }).filter(text => text !== '').join(' '); // Pad the string to return

        return ' ' + textContent + ' ';
      },

      // To mimic shadow root behavior, we need to overwrite all nodes in a slot
      // reference node. If a default slot reference node exists, the text content will be
      // placed there. Otherwise, the new text node will be hidden
      set(value) {
        const slotRefNodes = getAllChildSlotNodes(this.childNodes);
        slotRefNodes.forEach(node => {
          // Remove the existing content of the slot
          let slotContent = node.nextSibling;

          while (slotContent && slotContent['s-sn'] === node['s-sn']) {
            const tmp = slotContent;
            slotContent = slotContent.nextSibling;
            tmp.remove();
          } // If this is a default slot, add the text node in the slot location.
          // Otherwise, destroy the slot reference node


          if (node['s-sn'] === '') {
            const textNode = this.ownerDocument.createTextNode(value);
            textNode['s-sn'] = '';
            node.parentElement.insertBefore(textNode, node.nextSibling);
          } else {
            node.remove();
          }
        });
      }

    });
  } else {
    Object.defineProperty(hostElementPrototype, 'textContent', {
      get() {
        var _a; // get the 'default slot', which would be the first slot in a shadow tree (if we were using one), whose name is
        // the empty string


        const slotNode = getHostSlotNode(this.childNodes, ''); // when a slot node is found, the textContent _may_ be found in the next sibling (text) node, depending on how
        // nodes were reordered during the vdom render. first try to get the text content from the sibling.

        if (((_a = slotNode === null || slotNode === void 0 ? void 0 : slotNode.nextSibling) === null || _a === void 0 ? void 0 : _a.nodeType) === 3
        /* NODE_TYPES.TEXT_NODE */
        ) {
          return slotNode.nextSibling.textContent;
        } else if (slotNode) {
          return slotNode.textContent;
        } else {
          // fallback to the original implementation
          return this.__textContent;
        }
      },

      set(value) {
        var _a; // get the 'default slot', which would be the first slot in a shadow tree (if we were using one), whose name is
        // the empty string


        const slotNode = getHostSlotNode(this.childNodes, ''); // when a slot node is found, the textContent _may_ need to be placed in the next sibling (text) node,
        // depending on how nodes were reordered during the vdom render. first try to set the text content on the
        // sibling.

        if (((_a = slotNode === null || slotNode === void 0 ? void 0 : slotNode.nextSibling) === null || _a === void 0 ? void 0 : _a.nodeType) === 3
        /* NODE_TYPES.TEXT_NODE */
        ) {
          slotNode.nextSibling.textContent = value;
        } else if (slotNode) {
          slotNode.textContent = value;
        } else {
          // we couldn't find a slot, but that doesn't mean that there isn't one. if this check ran before the DOM
          // loaded, we could have missed it. check for a content reference element on the scoped component and insert
          // it there
          this.__textContent = value;
          const contentRefElm = this['s-cr'];

          if (contentRefElm) {
            this.insertBefore(contentRefElm, this.firstChild);
          }
        }
      }

    });
  }
};

const patchChildSlotNodes = (elm, cmpMeta) => {
  class FakeNodeList extends Array {
    item(n) {
      return this[n];
    }

  } // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field


  if (cmpMeta.$flags$ & 8
  /* CMP_FLAGS.needsShadowDomShim */
  ) {
    const childNodesFn = elm.__lookupGetter__('childNodes');

    Object.defineProperty(elm, 'children', {
      get() {
        return this.childNodes.map(n => n.nodeType === 1);
      }

    });
    Object.defineProperty(elm, 'childElementCount', {
      get() {
        return elm.children.length;
      }

    });
    Object.defineProperty(elm, 'childNodes', {
      get() {
        const childNodes = childNodesFn.call(this);

        if ((plt.$flags$ & 1
        /* PLATFORM_FLAGS.isTmpDisconnected */
        ) === 0 && getHostRef(this).$flags$ & 2
        /* HOST_FLAGS.hasRendered */
        ) {
          const result = new FakeNodeList();

          for (let i = 0; i < childNodes.length; i++) {
            const slot = childNodes[i]['s-nr'];

            if (slot) {
              result.push(slot);
            }
          }

          return result;
        }

        return FakeNodeList.from(childNodes);
      }

    });
  }
};
/**
 * Recursively finds all slot reference nodes ('s-sr') in a series of child nodes.
 *
 * @param childNodes The set of child nodes to search for slot reference nodes.
 * @returns An array of slot reference nodes.
 */


const getAllChildSlotNodes = childNodes => {
  const slotRefNodes = [];

  for (const childNode of Array.from(childNodes)) {
    if (childNode['s-sr']) {
      slotRefNodes.push(childNode);
    }

    slotRefNodes.push(...getAllChildSlotNodes(childNode.childNodes));
  }

  return slotRefNodes;
};

const getSlotName = node => node['s-sn'] || node.nodeType === 1 && node.getAttribute('slot') || '';
/**
 * Recursively searches a series of child nodes for a slot with the provided name.
 * @param childNodes the nodes to search for a slot with a specific name.
 * @param slotName the name of the slot to match on.
 * @returns a reference to the slot node that matches the provided name, `null` otherwise
 */


const getHostSlotNode = (childNodes, slotName) => {
  let i = 0;
  let childNode;

  for (; i < childNodes.length; i++) {
    childNode = childNodes[i];

    if (childNode['s-sr'] && childNode['s-sn'] === slotName) {
      return childNode;
    }

    childNode = getHostSlotNode(childNode.childNodes, slotName);

    if (childNode) {
      return childNode;
    }
  }

  return null;
};

const getHostSlotChildNodes = (n, slotName) => {
  const childNodes = [n];

  while ((n = n.nextSibling) && n['s-sn'] === slotName) {
    childNodes.push(n);
  }

  return childNodes;
};

const defineCustomElement = (Cstr, compactMeta) => {
  customElements.define(compactMeta[1], proxyCustomElement(Cstr, compactMeta));
};

const proxyCustomElement = (Cstr, compactMeta) => {
  const cmpMeta = {
    $flags$: compactMeta[0],
    $tagName$: compactMeta[1]
  };

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.member) {
    cmpMeta.$members$ = compactMeta[2];
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hostListener) {
    cmpMeta.$listeners$ = compactMeta[3];
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.watchCallback) {
    cmpMeta.$watchers$ = Cstr.$watchers$;
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.reflect) {
    cmpMeta.$attrsToReflect$ = [];
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1
  /* CMP_FLAGS.shadowDomEncapsulation */
  ) {
    // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
    cmpMeta.$flags$ |= 8
    /* CMP_FLAGS.needsShadowDomShim */
    ;
  } // TODO(STENCIL-914): this check and `else` block can go away and be replaced by just the `scoped` check


  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.experimentalSlotFixes) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.scoped && cmpMeta.$flags$ & 2
    /* CMP_FLAGS.scopedCssEncapsulation */
    ) {
      // This check is intentionally not combined with the surrounding `experimentalSlotFixes` check
      // since, moving forward, we only want to patch the pseudo shadow DOM when the component is scoped
      patchPseudoShadowDom(Cstr.prototype, cmpMeta);
    }
  } else {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.slotChildNodesFix) {
      patchChildSlotNodes(Cstr.prototype, cmpMeta);
    }

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.cloneNodeFix) {
      patchCloneNode(Cstr.prototype);
    }

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.appendChildSlotFix) {
      patchSlotAppendChild(Cstr.prototype);
    }

    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.scopedSlotTextContentFix && cmpMeta.$flags$ & 2
    /* CMP_FLAGS.scopedCssEncapsulation */
    ) {
      patchTextContent(Cstr.prototype);
    }
  }

  const originalConnectedCallback = Cstr.prototype.connectedCallback;
  const originalDisconnectedCallback = Cstr.prototype.disconnectedCallback;
  Object.assign(Cstr.prototype, {
    __registerHost() {
      registerHost(this, cmpMeta);
    },

    connectedCallback() {
      connectedCallback(this);

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.connectedCallback && originalConnectedCallback) {
        originalConnectedCallback.call(this);
      }
    },

    disconnectedCallback() {
      disconnectedCallback(this);

      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.disconnectedCallback && originalDisconnectedCallback) {
        originalDisconnectedCallback.call(this);
      }
    },

    __attachShadow() {
      if (supportsShadow) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDelegatesFocus) {
          this.attachShadow({
            mode: 'open',
            delegatesFocus: !!(cmpMeta.$flags$ & 16
            /* CMP_FLAGS.shadowDelegatesFocus */
            )
          });
        } else {
          this.attachShadow({
            mode: 'open'
          });
        }
      } else {
        this.shadowRoot = this;
      }
    }

  });
  Cstr.is = cmpMeta.$tagName$;
  return proxyComponent(Cstr, cmpMeta, 1
  /* PROXY_FLAGS.isElementConstructor */
  | 2
  /* PROXY_FLAGS.proxyState */
  );
};

const forceModeUpdate = elm => {
  if (BUILD.style && BUILD.mode && !BUILD.lazyLoad) {
    const mode = computeMode(elm);
    const hostRef = getHostRef(elm);

    if (hostRef.$modeName$ !== mode) {
      const cmpMeta = hostRef.$cmpMeta$;
      const oldScopeId = elm['s-sc'];
      const scopeId = getScopeId(cmpMeta, mode);
      const style = elm.constructor.style[mode];
      const flags = cmpMeta.$flags$;

      if (style) {
        if (!styles.has(scopeId)) {
          registerStyle(scopeId, style, !!(flags & 1
          /* CMP_FLAGS.shadowDomEncapsulation */
          ));
        }

        hostRef.$modeName$ = mode;
        elm.classList.remove(oldScopeId + '-h', oldScopeId + '-s');
        attachStyles(hostRef);
        forceUpdate(elm);
      }
    }
  }
};
/**
 * Kick off hot-module-replacement for a component. In order to replace the
 * component in-place we:
 *
 * 1. get a reference to the {@link d.HostRef} for the element
 * 2. reset the element's runtime flags
 * 3. re-run the initialization logic for the element (via
 *    {@link initializeComponent})
 *
 * @param hostElement the host element for the component which we want to start
 * doing HMR
 * @param cmpMeta runtime metadata for the component
 * @param hmrVersionId the current HMR version ID
 */


const hmrStart = (hostElement, cmpMeta, hmrVersionId) => {
  // ¯\_(ツ)_/¯
  const hostRef = getHostRef(hostElement); // reset state flags to only have been connected

  hostRef.$flags$ = 1
  /* HOST_FLAGS.hasConnected */
  ; // TODO
  // detach any event listeners that may have been added
  // because we're not passing an exact event name it'll
  // remove all of this element's event, which is good
  // re-initialize the component

  initializeComponent(hostElement, hostRef, cmpMeta, hmrVersionId);
};

const bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;

  if (BUILD.profile && performance.mark) {
    performance.mark('st:app:start');
  }

  installDevTools();
  const endBootstrap = createTime('bootstrapLazy');
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements = win.customElements;
  const head = doc.head;
  const metaCharset = /*@__PURE__*/head.querySelector('meta[charset]');
  const dataStyles = /*@__PURE__*/doc.createElement('style');
  const deferredConnectedCallbacks = [];
  const styles = /*@__PURE__*/doc.querySelectorAll(`[${HYDRATED_STYLE_ID}]`);
  let appLoadFallback;
  let isBootstrapping = true;
  let i = 0;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;

  if (BUILD.asyncQueue) {
    if (options.syncQueue) {
      plt.$flags$ |= 4
      /* PLATFORM_FLAGS.queueSync */
      ;
    }
  }

  if (BUILD.hydrateClientSide) {
    // If the app is already hydrated there is not point to disable the
    // async queue. This will improve the first input delay
    plt.$flags$ |= 2
    /* PLATFORM_FLAGS.appLoaded */
    ;
  }

  if (BUILD.hydrateClientSide && BUILD.shadowDom) {
    for (; i < styles.length; i++) {
      registerStyle(styles[i].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(styles[i].innerHTML), true);
    }
  }

  let hasSlotRelocation = false;
  lazyBundles.map(lazyBundle => {
    lazyBundle[1].map(compactMeta => {
      var _a;

      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      }; // Check if we are using slots outside the shadow DOM in this component.
      // We'll use this information later to add styles for `slot-fb` elements

      if (cmpMeta.$flags$ & 4
      /* CMP_FLAGS.hasSlotRelocation */
      ) {
        hasSlotRelocation = true;
      }

      if (BUILD.member) {
        cmpMeta.$members$ = compactMeta[2];
      }

      if (BUILD.hostListener) {
        cmpMeta.$listeners$ = compactMeta[3];
      }

      if (BUILD.reflect) {
        cmpMeta.$attrsToReflect$ = [];
      }

      if (BUILD.watchCallback) {
        cmpMeta.$watchers$ = (_a = compactMeta[4]) !== null && _a !== void 0 ? _a : {};
      }

      if (BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1
      /* CMP_FLAGS.shadowDomEncapsulation */
      ) {
        // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ |= 8
        /* CMP_FLAGS.needsShadowDomShim */
        ;
      }

      const tagName = BUILD.transformTagName && options.transformTagName ? options.transformTagName(cmpMeta.$tagName$) : cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          // @ts-ignore
          super(self);
          self = this;
          registerHost(self, cmpMeta);

          if (BUILD.shadowDom && cmpMeta.$flags$ & 1
          /* CMP_FLAGS.shadowDomEncapsulation */
          ) {
            // this component is using shadow dom
            // and this browser supports shadow dom
            // add the read-only property "shadowRoot" to the host element
            // adding the shadow root build conditionals to minimize runtime
            if (supportsShadow) {
              if (BUILD.shadowDelegatesFocus) {
                self.attachShadow({
                  mode: 'open',
                  delegatesFocus: !!(cmpMeta.$flags$ & 16
                  /* CMP_FLAGS.shadowDelegatesFocus */
                  )
                });
              } else {
                self.attachShadow({
                  mode: 'open'
                });
              }
            } else if (!BUILD.hydrateServerSide && !('shadowRoot' in self)) {
              self.shadowRoot = self;
            }
          }
        }

        connectedCallback() {
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }

          if (isBootstrapping) {
            // connectedCallback will be processed once all components have been registered
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }

        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
        }

        componentOnReady() {
          return getHostRef(this).$onReadyPromise$;
        }

      }; // TODO(STENCIL-914): this check and `else` block can go away and be replaced by just the `scoped` check

      if (BUILD.experimentalSlotFixes) {
        // This check is intentionally not combined with the surrounding `experimentalSlotFixes` check
        // since, moving forward, we only want to patch the pseudo shadow DOM when the component is scoped
        if (BUILD.scoped && cmpMeta.$flags$ & 2
        /* CMP_FLAGS.scopedCssEncapsulation */
        ) {
          patchPseudoShadowDom(HostElement.prototype, cmpMeta);
        }
      } else {
        if (BUILD.slotChildNodesFix) {
          patchChildSlotNodes(HostElement.prototype, cmpMeta);
        }

        if (BUILD.cloneNodeFix) {
          patchCloneNode(HostElement.prototype);
        }

        if (BUILD.appendChildSlotFix) {
          patchSlotAppendChild(HostElement.prototype);
        }

        if (BUILD.scopedSlotTextContentFix && cmpMeta.$flags$ & 2
        /* CMP_FLAGS.scopedCssEncapsulation */
        ) {
          patchTextContent(HostElement.prototype);
        }
      } // if the component is formAssociated we need to set that on the host
      // element so that it will be ready for `attachInternals` to be called on
      // it later on


      if (BUILD.formAssociated && cmpMeta.$flags$ & 64
      /* CMP_FLAGS.formAssociated */
      ) {
        HostElement.formAssociated = true;
      }

      if (BUILD.hotModuleReplacement) {
        // if we're in an HMR dev build then we need to set up the callback
        // which will carry out the work of actually replacing the module for
        // this particular component
        HostElement.prototype['s-hmr'] = function (hmrVersionId) {
          hmrStart(this, cmpMeta, hmrVersionId);
        };
      }

      cmpMeta.$lazyBundleId$ = lazyBundle[0];

      if (!exclude.includes(tagName) && !customElements.get(tagName)) {
        cmpTags.push(tagName);
        customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1
        /* PROXY_FLAGS.isElementConstructor */
        ));
      }
    });
  }); // Add styles for `slot-fb` elements if any of our components are using slots outside the Shadow DOM

  if (hasSlotRelocation) {
    dataStyles.innerHTML += SLOT_FB_CSS;
  } // Add hydration styles


  if (BUILD.invisiblePrehydration && (BUILD.hydratedClass || BUILD.hydratedAttribute)) {
    dataStyles.innerHTML += cmpTags + HYDRATED_CSS;
  } // If we have styles, add them to the DOM


  if (dataStyles.innerHTML.length) {
    dataStyles.setAttribute('data-styles', ''); // Apply CSP nonce to the style tag if it exists

    const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);

    if (nonce != null) {
      dataStyles.setAttribute('nonce', nonce);
    } // Insert the styles into the document head
    // NOTE: this _needs_ to happen last so we can ensure the nonce (and other attributes) are applied


    head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
  } // Process deferred connectedCallbacks now all components have been registered


  isBootstrapping = false;

  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map(host => host.connectedCallback());
  } else {
    if (BUILD.profile) {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30, 'timeout'));
    } else {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  } // Fallback appLoad event


  endBootstrap();
};

const Fragment = (_, children) => children;

const addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hostListener && listeners) {
    // this is called immediately within the element's constructor
    // initialize our event listeners on the host element
    // we do this now so that we can listen to events that may
    // have fired even before the instance is ready
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hostListenerTargetParent) {
      // this component may have event listeners that should be attached to the parent
      if (attachParentListeners) {
        // this is being ran from within the connectedCallback
        // which is important so that we know the host element actually has a parent element
        // filter out the listeners to only have the ones that ARE being attached to the parent
        listeners = listeners.filter(([flags]) => flags & 32
        /* LISTENER_FLAGS.TargetParent */
        );
      } else {
        // this is being ran from within the component constructor
        // everything BUT the parent element listeners should be attached at this time
        // filter out the listeners that are NOT being attached to the parent
        listeners = listeners.filter(([flags]) => !(flags & 32
        /* LISTENER_FLAGS.TargetParent */
        ));
      }
    }

    listeners.map(([flags, name, method]) => {
      const target = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hostListenerTarget ? getHostListenerTarget(elm, flags) : elm;
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};

const hostListenerProxy = (hostRef, methodName) => ev => {
  try {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad) {
      if (hostRef.$flags$ & 256
      /* HOST_FLAGS.isListenReady */
      ) {
        // instance is ready, let's call it's member method for this event
        hostRef.$lazyInstance$[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    } else {
      hostRef.$hostElement$[methodName](ev);
    }
  } catch (e) {
    consoleError(e);
  }
};

const getHostListenerTarget = (elm, flags) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hostListenerTargetDocument && flags & 4
  /* LISTENER_FLAGS.TargetDocument */
  ) return doc;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hostListenerTargetWindow && flags & 8
  /* LISTENER_FLAGS.TargetWindow */
  ) return win;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hostListenerTargetBody && flags & 16
  /* LISTENER_FLAGS.TargetBody */
  ) return doc.body;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hostListenerTargetParent && flags & 32
  /* LISTENER_FLAGS.TargetParent */
  ) return elm.parentElement;
  return elm;
}; // prettier-ignore


const hostListenerOpts = flags => supportsListenerOptions ? {
  passive: (flags & 1
  /* LISTENER_FLAGS.Passive */
  ) !== 0,
  capture: (flags & 2
  /* LISTENER_FLAGS.Capture */
  ) !== 0
} : (flags & 2
/* LISTENER_FLAGS.Capture */
) !== 0;
/**
 * Assigns the given value to the nonce property on the runtime platform object.
 * During runtime, this value is used to set the nonce attribute on all dynamically created script and style tags.
 * @param nonce The value to be assigned to the platform nonce property.
 * @returns void
 */


const setNonce = nonce => plt.$nonce$ = nonce;

const setPlatformOptions = opts => Object.assign(plt, opts);
/**
 * Updates the DOM generated on the server with annotations such as node attributes and
 * comment nodes to facilitate future client-side hydration. These annotations are used for things
 * like moving elements back to their original hosts if using Shadow DOM on the client, and for quickly
 * reconstructing the vNode representations of the DOM.
 *
 * @param doc The DOM generated by the server.
 * @param staticComponents Any components that should be considered static and do not need client-side hydration.
 */


const insertVdomAnnotations = (doc, staticComponents) => {
  if (doc != null) {
    const docData = {
      hostIds: 0,
      rootLevelIds: 0,
      staticComponents: new Set(staticComponents)
    };
    const orgLocationNodes = [];
    parseVNodeAnnotations(doc, doc.body, docData, orgLocationNodes);
    orgLocationNodes.forEach(orgLocationNode => {
      var _a, _b;

      if (orgLocationNode != null && orgLocationNode['s-nr']) {
        const nodeRef = orgLocationNode['s-nr'];
        let hostId = nodeRef['s-host-id'];
        let nodeId = nodeRef['s-node-id'];
        let childId = `${hostId}.${nodeId}`;

        if (hostId == null) {
          hostId = 0;
          docData.rootLevelIds++;
          nodeId = docData.rootLevelIds;
          childId = `${hostId}.${nodeId}`;

          if (nodeRef.nodeType === 1
          /* NODE_TYPE.ElementNode */
          ) {
            nodeRef.setAttribute(HYDRATE_CHILD_ID, childId);
          } else if (nodeRef.nodeType === 3
          /* NODE_TYPE.TextNode */
          ) {
            if (hostId === 0) {
              const textContent = (_a = nodeRef.nodeValue) === null || _a === void 0 ? void 0 : _a.trim();

              if (textContent === '') {
                // useless whitespace node at the document root
                orgLocationNode.remove();
                return;
              }
            }

            const commentBeforeTextNode = doc.createComment(childId);
            commentBeforeTextNode.nodeValue = `${TEXT_NODE_ID}.${childId}`;
            (_b = nodeRef.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(commentBeforeTextNode, nodeRef);
          }
        }

        let orgLocationNodeId = `${ORG_LOCATION_ID}.${childId}`;
        const orgLocationParentNode = orgLocationNode.parentElement;

        if (orgLocationParentNode) {
          if (orgLocationParentNode['s-en'] === '') {
            // ending with a "." means that the parent element
            // of this node's original location is a SHADOW dom element
            // and this node is apart of the root level light dom
            orgLocationNodeId += `.`;
          } else if (orgLocationParentNode['s-en'] === 'c') {
            // ending with a ".c" means that the parent element
            // of this node's original location is a SCOPED element
            // and this node is apart of the root level light dom
            orgLocationNodeId += `.c`;
          }
        }

        orgLocationNode.nodeValue = orgLocationNodeId;
      }
    });
  }
};
/**
 * Recursively parses a node generated by the server and its children to set host and child id
 * attributes read during client-side hydration. This function also tracks whether each node is
 * an original location reference node meaning that a node has been moved via slot relocation.
 *
 * @param doc The DOM generated by the server.
 * @param node The node to parse.
 * @param docData An object containing metadata about the document.
 * @param orgLocationNodes An array of nodes that have been moved via slot relocation.
 */


const parseVNodeAnnotations = (doc, node, docData, orgLocationNodes) => {
  if (node == null) {
    return;
  }

  if (node['s-nr'] != null) {
    orgLocationNodes.push(node);
  }

  if (node.nodeType === 1
  /* NODE_TYPE.ElementNode */
  ) {
    node.childNodes.forEach(childNode => {
      const hostRef = getHostRef(childNode);

      if (hostRef != null && !docData.staticComponents.has(childNode.nodeName.toLowerCase())) {
        const cmpData = {
          nodeIds: 0
        };
        insertVNodeAnnotations(doc, childNode, hostRef.$vnode$, docData, cmpData);
      }

      parseVNodeAnnotations(doc, childNode, docData, orgLocationNodes);
    });
  }
};
/**
 * Insert attribute annotations on an element for its host ID and, potentially, its child ID.
 * Also makes calls to insert annotations on the element's children, keeping track of the depth of
 * the component tree.
 *
 * @param doc The DOM generated by the server.
 * @param hostElm The element to insert annotations for.
 * @param vnode The vNode representation of the element.
 * @param docData An object containing metadata about the document.
 * @param cmpData An object containing metadata about the component.
 */


const insertVNodeAnnotations = (doc, hostElm, vnode, docData, cmpData) => {
  if (vnode != null) {
    const hostId = ++docData.hostIds;
    hostElm.setAttribute(HYDRATE_ID, hostId);

    if (hostElm['s-cr'] != null) {
      hostElm['s-cr'].nodeValue = `${CONTENT_REF_ID}.${hostId}`;
    }

    if (vnode.$children$ != null) {
      const depth = 0;
      vnode.$children$.forEach((vnodeChild, index) => {
        insertChildVNodeAnnotations(doc, vnodeChild, cmpData, hostId, depth, index);
      });
    } // If this element does not already have a child ID and has a sibling comment node
    // representing a slot, we use the content of the comment to set the child ID attribute
    // on the host element.


    if (hostElm && vnode && vnode.$elm$ && !hostElm.hasAttribute(HYDRATE_CHILD_ID)) {
      const parent = hostElm.parentElement;

      if (parent && parent.childNodes) {
        const parentChildNodes = Array.from(parent.childNodes);
        const comment = parentChildNodes.find(node => node.nodeType === 8
        /* NODE_TYPE.CommentNode */
        && node['s-sr']);

        if (comment) {
          const index = parentChildNodes.indexOf(hostElm) - 1;
          vnode.$elm$.setAttribute(HYDRATE_CHILD_ID, `${comment['s-host-id']}.${comment['s-node-id']}.0.${index}`);
        }
      }
    }
  }
};
/**
 * Recursively analyzes the type of a child vNode and inserts annotations on the vNodes's element based on its type.
 * Element nodes receive a child ID attribute, text nodes have a comment with the child ID inserted before them,
 * and comment nodes representing a slot have their node value set to a slot node ID containing the child ID.
 *
 * @param doc The DOM generated by the server.
 * @param vnodeChild The vNode to insert annotations for.
 * @param cmpData An object containing metadata about the component.
 * @param hostId The host ID of this element's parent.
 * @param depth How deep this element sits in the component tree relative to its parent.
 * @param index The index of this element in its parent's children array.
 */


const insertChildVNodeAnnotations = (doc, vnodeChild, cmpData, hostId, depth, index) => {
  const childElm = vnodeChild.$elm$;

  if (childElm == null) {
    return;
  }

  const nodeId = cmpData.nodeIds++;
  const childId = `${hostId}.${nodeId}.${depth}.${index}`;
  childElm['s-host-id'] = hostId;
  childElm['s-node-id'] = nodeId;

  if (childElm.nodeType === 1
  /* NODE_TYPE.ElementNode */
  ) {
    childElm.setAttribute(HYDRATE_CHILD_ID, childId);
  } else if (childElm.nodeType === 3
  /* NODE_TYPE.TextNode */
  ) {
    const parentNode = childElm.parentNode;
    const nodeName = parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeName;

    if (nodeName !== 'STYLE' && nodeName !== 'SCRIPT') {
      const textNodeId = `${TEXT_NODE_ID}.${childId}`;
      const commentBeforeTextNode = doc.createComment(textNodeId);
      parentNode === null || parentNode === void 0 ? void 0 : parentNode.insertBefore(commentBeforeTextNode, childElm);
    }
  } else if (childElm.nodeType === 8
  /* NODE_TYPE.CommentNode */
  ) {
    if (childElm['s-sr']) {
      const slotName = childElm['s-sn'] || '';
      const slotNodeId = `${SLOT_NODE_ID}.${childId}.${slotName}`;
      childElm.nodeValue = slotNodeId;
    }
  }

  if (vnodeChild.$children$ != null) {
    // Increment depth each time we recur deeper into the tree
    const childDepth = depth + 1;
    vnodeChild.$children$.forEach((vnode, index) => {
      insertChildVNodeAnnotations(doc, vnode, cmpData, hostId, childDepth, index);
    });
  }
};
/**
 * A WeakMap mapping runtime component references to their corresponding host reference
 * instances.
 */


const hostRefs = /*@__PURE__*/new WeakMap();
/**
 * Given a {@link d.RuntimeRef} retrieve the corresponding {@link d.HostRef}
 *
 * @param ref the runtime ref of interest
 * @returns the Host reference (if found) or undefined
 */

const getHostRef = ref => hostRefs.get(ref);
/**
 * Register a lazy instance with the {@link hostRefs} object so it's
 * corresponding {@link d.HostRef} can be retrieved later.
 *
 * @param lazyInstance the lazy instance of interest
 * @param hostRef that instances `HostRef` object
 * @returns a reference to the host ref WeakMap
 */


const registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
/**
 * Register a host element for a Stencil component, setting up various metadata
 * and callbacks based on {@link BUILD} flags as well as the component's runtime
 * metadata.
 *
 * @param hostElement the host element to register
 * @param cmpMeta runtime metadata for that component
 * @returns a reference to the host ref WeakMap
 */


const registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: new Map()
  };

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev) {
    hostRef.$renderCount$ = 0;
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.method && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.lazyLoad) {
    hostRef.$onInstancePromise$ = new Promise(r => hostRef.$onInstanceResolve$ = r);
  }

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.asyncLoading) {
    hostRef.$onReadyPromise$ = new Promise(r => hostRef.$onReadyResolve$ = r);
    hostElement['s-p'] = [];
    hostElement['s-rc'] = [];
  }

  addHostEventListeners(hostElement, hostRef, cmpMeta.$listeners$, false);
  return hostRefs.set(hostElement, hostRef);
};

const isMemberInElement = (elm, memberName) => memberName in elm;

const consoleError = (e, el) => (customError || console.error)(e, el);

const STENCIL_DEV_MODE = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isTesting ? ['STENCIL:'] // E2E testing
: ['%cstencil', 'color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px'];

const consoleDevError = (...m) => console.error(...STENCIL_DEV_MODE, ...m);

const consoleDevWarn = (...m) => console.warn(...STENCIL_DEV_MODE, ...m);

const consoleDevInfo = (...m) => console.info(...STENCIL_DEV_MODE, ...m);

const setErrorHandler = handler => customError = handler;

const cmpModules = /*@__PURE__*/new Map();

const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  // loadModuleImport
  const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
  const bundleId = cmpMeta.$lazyBundleId$;

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.isDev && typeof bundleId !== 'string') {
    consoleDevError(`Trying to lazily load component <${cmpMeta.$tagName$}> with style mode "${hostRef.$modeName$}", but it does not exist.`);
    return undefined;
  }

  const module = !_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hotModuleReplacement ? cmpModules.get(bundleId) : false;

  if (module) {
    return module[exportName];
  }
  /*!__STENCIL_STATIC_IMPORT_SWITCH__*/


  return __webpack_require__(1993)(`./${bundleId}.entry.js${_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hotModuleReplacement && hmrVersionId ? '?s-hmr=' + hmrVersionId : ''}`).then(importedModule => {
    if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.hotModuleReplacement) {
      cmpModules.set(bundleId, importedModule);
    }

    return importedModule[exportName];
  }, consoleError);
};

const styles = /*@__PURE__*/new Map();
const modeResolutionChain = [];
const win =  false ? 0 : {};
const doc = win.document || {
  head: {}
};
const H = win.HTMLElement || class {};
const plt = {
  $flags$: 0,
  $resourcesUrl$: '',
  jmp: h => h(),
  raf: h => requestAnimationFrame(h),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};

const setPlatformHelpers = helpers => {
  Object.assign(plt, helpers);
};

const supportsShadow = // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDomShim && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.shadowDom ? /*@__PURE__*/(() => (doc.head.attachShadow + '').indexOf('[native') > -1)() : true;

const supportsListenerOptions = /*@__PURE__*/(() => {
  let supportsListenerOptions = false;

  try {
    doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
      get() {
        supportsListenerOptions = true;
      }

    }));
  } catch (e) {}

  return supportsListenerOptions;
})();

const promiseResolve = v => Promise.resolve(v);

const supportsConstructableStylesheets = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.constructableCSS ? /*@__PURE__*/(() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === 'function';
  } catch (e) {}

  return false;
})() : false;
const queueDomReads = [];
const queueDomWrites = [];
const queueDomWritesLow = [];

const queueTask = (queue, write) => cb => {
  queue.push(cb);

  if (!queuePending) {
    queuePending = true;

    if (write && plt.$flags$ & 4
    /* PLATFORM_FLAGS.queueSync */
    ) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};

const consume = queue => {
  for (let i = 0; i < queue.length; i++) {
    try {
      queue[i](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }

  queue.length = 0;
};

const consumeTimeout = (queue, timeout) => {
  let i = 0;
  let ts = 0;

  while (i < queue.length && (ts = performance.now()) < timeout) {
    try {
      queue[i++](ts);
    } catch (e) {
      consoleError(e);
    }
  }

  if (i === queue.length) {
    queue.length = 0;
  } else if (i !== 0) {
    queue.splice(0, i);
  }
};

const flush = () => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.asyncQueue) {
    queueCongestion++;
  } // always force a bunch of medium callbacks to run, but still have
  // a throttle on how many can run in a certain time
  // DOM READS!!!


  consume(queueDomReads); // DOM WRITES!!!

  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__/* .BUILD */ .m5.asyncQueue) {
    const timeout = (plt.$flags$ & 6
    /* PLATFORM_FLAGS.queueMask */
    ) === 2
    /* PLATFORM_FLAGS.appLoaded */
    ? performance.now() + 14 * Math.ceil(queueCongestion * (1.0 / 10.0)) : Infinity;
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);

    if (queueDomWrites.length > 0) {
      queueDomWritesLow.push(...queueDomWrites);
      queueDomWrites.length = 0;
    }

    if (queuePending = queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length > 0) {
      // still more to do yet, but we've run out of time
      // let's let this thing cool off and try again in the next tick
      plt.raf(flush);
    } else {
      queueCongestion = 0;
    }
  } else {
    consume(queueDomWrites);

    if (queuePending = queueDomReads.length > 0) {
      // still more to do yet, but we've run out of time
      // let's let this thing cool off and try again in the next tick
      plt.raf(flush);
    }
  }
};

const nextTick = cb => promiseResolve().then(cb);

const readTask = /*@__PURE__*/queueTask(queueDomReads, false);
const writeTask = /*@__PURE__*/queueTask(queueDomWrites, true);



/***/ }),

/***/ 374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ defineCustomElement)
});

// UNUSED EXPORTS: IonIcon

// EXTERNAL MODULE: ./node_modules/@stencil/core/internal/client/index.js
var client = __webpack_require__(8179);
;// CONCATENATED MODULE: ./node_modules/ionicons/components/utils.js

let CACHED_MAP;

const getIconMap = () => {
  if (true) {
    return new Map();
  } else {}
};

const addIcons = icons => {
  Object.keys(icons).forEach(name => {
    addToIconMap(name, icons[name]);
    /**
     * Developers can also pass in the SVG object directly
     * and Ionicons can map the object to a kebab case name.
     * Example: addIcons({ addCircleOutline });
     * This will create an "addCircleOutline" entry and
     * an "add-circle-outline" entry.
     * Usage: <ion-icon name="add-circle-outline"></ion-icon>
     * Using name="addCircleOutline" is valid too, but the
     * kebab case naming is preferred.
     */

    const toKebabCase = name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();

    if (name !== toKebabCase) {
      addToIconMap(toKebabCase, icons[name]);
    }
  });
};

const addToIconMap = (name, data) => {
  const map = getIconMap();
  const existingIcon = map.get(name);

  if (existingIcon === undefined) {
    map.set(name, data);
    /**
     * Importing and defining the same icon reference
     * multiple times should not yield a warning.
     */
  } else if (existingIcon !== data) {
    console.warn(`[Ionicons Warning]: Multiple icons were mapped to name "${name}". Ensure that multiple icons are not mapped to the same icon name.`);
  }
};

const getUrl = i => {
  let url = getSrc(i.src);

  if (url) {
    return url;
  }

  url = getName(i.name, i.icon, i.mode, i.ios, i.md);

  if (url) {
    return getNamedUrl(url, i);
  }

  if (i.icon) {
    url = getSrc(i.icon);

    if (url) {
      return url;
    }

    url = getSrc(i.icon[i.mode]);

    if (url) {
      return url;
    }
  }

  return null;
};

const getNamedUrl = (iconName, iconEl) => {
  const url = getIconMap().get(iconName);

  if (url) {
    return url;
  }

  try {
    return (0,client/* getAssetPath */.K3)(`svg/${iconName}.svg`);
  } catch (e) {
    /**
     * In the custom elements build version of ionicons, referencing an icon
     * by name will throw an invalid URL error because the asset path is not defined.
     * This catches that error and logs something that is more developer-friendly.
     * We also include a reference to the ion-icon element so developers can
     * figure out which instance of ion-icon needs to be updated.
     */
    console.warn(`[Ionicons Warning]: Could not load icon with name "${iconName}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, iconEl);
  }
};

const getName = (iconName, icon, mode, ios, md) => {
  // default to "md" if somehow the mode wasn't set
  mode = (mode && toLower(mode)) === 'ios' ? 'ios' : 'md'; // if an icon was passed in using the ios or md attributes
  // set the iconName to whatever was passed in

  if (ios && mode === 'ios') {
    iconName = toLower(ios);
  } else if (md && mode === 'md') {
    iconName = toLower(md);
  } else {
    if (!iconName && icon && !isSrc(icon)) {
      iconName = icon;
    }

    if (isStr(iconName)) {
      iconName = toLower(iconName);
    }
  }

  if (!isStr(iconName) || iconName.trim() === '') {
    return null;
  } // only allow alpha characters and dash


  const invalidChars = iconName.replace(/[a-z]|-|\d/gi, '');

  if (invalidChars !== '') {
    return null;
  }

  return iconName;
};

const getSrc = src => {
  if (isStr(src)) {
    src = src.trim();

    if (isSrc(src)) {
      return src;
    }
  }

  return null;
};

const isSrc = str => str.length > 0 && /(\/|\.)/.test(str);

const isStr = val => typeof val === 'string';

const toLower = val => val.toLowerCase();
/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `ion-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */


const inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach(attr => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);

      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }

      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */


const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }

  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};


;// CONCATENATED MODULE: ./node_modules/ionicons/components/ion-icon.js



const validateContent = svgContent => {
  const div = document.createElement('div');
  div.innerHTML = svgContent; // setup this way to ensure it works on our buddy IE

  for (let i = div.childNodes.length - 1; i >= 0; i--) {
    if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
      div.removeChild(div.childNodes[i]);
    }
  } // must only have 1 root element


  const svgElm = div.firstElementChild;

  if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
    const svgClass = svgElm.getAttribute('class') || '';
    svgElm.setAttribute('class', (svgClass + ' s-ion-icon').trim()); // root element must be an svg
    // lets double check we've got valid elements
    // do not allow scripts

    if (isValid(svgElm)) {
      return div.innerHTML;
    }
  }

  return '';
};

const isValid = elm => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === 'script') {
      return false;
    }

    for (let i = 0; i < elm.attributes.length; i++) {
      const name = elm.attributes[i].name;

      if (isStr(name) && name.toLowerCase().indexOf('on') === 0) {
        return false;
      }
    }

    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }

  return true;
};

const isSvgDataUrl = url => url.startsWith('data:image/svg+xml');

const isEncodedDataUrl = url => url.indexOf(';utf8,') !== -1;

const ioniconContent = new Map();
const requests = new Map();
let parser;

const getSvgContent = (url, sanitize) => {
  // see if we already have a request for this url
  let req = requests.get(url);

  if (!req) {
    if (typeof fetch !== 'undefined' && typeof document !== 'undefined') {
      /**
       * If the url is a data url of an svg, then try to parse it
       * with the DOMParser. This works with content security policies enabled.
       */
      if (isSvgDataUrl(url) && isEncodedDataUrl(url)) {
        if (!parser) {
          /**
           * Create an instance of the DOM parser. This creates a single
           * parser instance for the entire app, which is more efficient.
           */
          parser = new DOMParser();
        }

        const doc = parser.parseFromString(url, 'text/html');
        const svg = doc.querySelector('svg');

        if (svg) {
          ioniconContent.set(url, svg.outerHTML);
        }

        return Promise.resolve();
      } else {
        // we don't already have a request
        req = fetch(url).then(rsp => {
          if (rsp.ok) {
            return rsp.text().then(svgContent => {
              if (svgContent && sanitize !== false) {
                svgContent = validateContent(svgContent);
              }

              ioniconContent.set(url, svgContent || '');
            });
          }

          ioniconContent.set(url, '');
        }); // cache for the same requests

        requests.set(url, req);
      }
    } else {
      // set to empty for ssr scenarios and resolve promise
      ioniconContent.set(url, '');
      return Promise.resolve();
    }
  }

  return req;
};

const iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
const Icon = /*@__PURE__*/(0,client/* proxyCustomElement */.GH)(class Icon extends client/* HTMLElement */.mv {
  constructor() {
    super();

    this.__registerHost();

    this.__attachShadow();

    this.iconName = null;
    this.inheritedAttributes = {};
    this.didLoadIcon = false;
    this.svgContent = undefined;
    this.isVisible = false;
    this.mode = getIonMode();
    this.color = undefined;
    this.ios = undefined;
    this.md = undefined;
    this.flipRtl = undefined;
    this.name = undefined;
    this.src = undefined;
    this.icon = undefined;
    this.size = undefined;
    this.lazy = false;
    this.sanitize = true;
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
  }

  connectedCallback() {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.el, '50px', () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }

  componentDidLoad() {
    /**
     * Addresses an Angular issue where property values are assigned after the 'connectedCallback' but prior to the registration of watchers.
     * This enhancement ensures the loading of an icon when the component has finished rendering and the icon has yet to apply the SVG data.
     * This modification pertains to the usage of Angular's binding syntax:
     * `<ion-icon [name]="myIconName"></ion-icon>`
     */
    if (!this.didLoadIcon) {
      this.loadIcon();
    }
  }

  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }

  waitUntilVisible(el, rootMargin, cb) {
    if (client/* Build */.Z5.isBrowser && this.lazy && false && 0) {} else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      cb();
    }
  }

  loadIcon() {
    if (client/* Build */.Z5.isBrowser && this.isVisible) {
      const url = getUrl(this);

      if (url) {
        if (ioniconContent.has(url)) {
          // sync if it's already loaded
          this.svgContent = ioniconContent.get(url);
        } else {
          // async if it hasn't been loaded
          getSvgContent(url, this.sanitize).then(() => this.svgContent = ioniconContent.get(url));
        }

        this.didLoadIcon = true;
      }
    }

    this.iconName = getName(this.name, this.icon, this.mode, this.ios, this.md);
  }

  render() {
    const {
      flipRtl,
      iconName,
      inheritedAttributes,
      el
    } = this;
    const mode = this.mode || 'md'; // we have designated that arrows & chevrons should automatically flip (unless flip-rtl is set to false) because "back" is left in ltr and right in rtl, and "forward" is the opposite

    const shouldAutoFlip = iconName ? (iconName.includes('arrow') || iconName.includes('chevron')) && flipRtl !== false : false; // if shouldBeFlippable is true, the icon should change direction when `dir` changes

    const shouldBeFlippable = flipRtl || shouldAutoFlip;
    return (0,client.h)(client/* Host */.AA, Object.assign({
      role: "img",
      class: Object.assign(Object.assign({
        [mode]: true
      }, createColorClasses(this.color)), {
        [`icon-${this.size}`]: !!this.size,
        'flip-rtl': shouldBeFlippable,
        'icon-rtl': shouldBeFlippable && isRTL(el)
      })
    }, inheritedAttributes), client/* Build */.Z5.isBrowser && this.svgContent ? (0,client.h)("div", {
      class: "icon-inner",
      innerHTML: this.svgContent
    }) : (0,client.h)("div", {
      class: "icon-inner"
    }));
  }

  static get assetsDirs() {
    return ["svg"];
  }

  get el() {
    return this;
  }

  static get watchers() {
    return {
      "name": ["loadIcon"],
      "src": ["loadIcon"],
      "icon": ["loadIcon"],
      "ios": ["loadIcon"],
      "md": ["loadIcon"]
    };
  }

  static get style() {
    return iconCss;
  }

}, [1, "ion-icon", {
  "mode": [1025],
  "color": [1],
  "ios": [1],
  "md": [1],
  "flipRtl": [4, "flip-rtl"],
  "name": [513],
  "src": [1],
  "icon": [8],
  "size": [1],
  "lazy": [4],
  "sanitize": [4],
  "svgContent": [32],
  "isVisible": [32]
}]);

const getIonMode = () => client/* Build */.Z5.isBrowser && typeof document !== 'undefined' && document.documentElement.getAttribute('mode') || 'md';

const createColorClasses = color => {
  return color ? {
    'ion-color': true,
    [`ion-color-${color}`]: true
  } : null;
};

function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }

  const components = ["ion-icon"];
  components.forEach(tagName => {
    switch (tagName) {
      case "ion-icon":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Icon);
        }

        break;
    }
  });
}

const IonIcon = (/* unused pure expression or super */ null && (Icon));
const defineCustomElement = defineCustomElement$1;


/***/ }),

/***/ 7182:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "l", ({
    enumerable: true,
    get: function() {
        return hoist;
    }
}));
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ("then" in module && typeof module.then === "function") {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === "function" && name === "default") {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
}

//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ 676:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return isError;
    },
    getProperError: function() {
        return getProperError;
    }
});
const _isplainobject = __webpack_require__(8524);
function isError(err) {
    return typeof err === "object" && err !== null && "name" in err && "message" in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if (false) {}
    return new Error((0, _isplainobject.isPlainObject)(err) ? JSON.stringify(err) : err + "");
}

//# sourceMappingURL=is-error.js.map

/***/ }),

/***/ 5955:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return prettyBytes;
    }
}));
const UNITS = [
    "B",
    "kB",
    "MB",
    "GB",
    "TB",
    "PB",
    "EB",
    "ZB",
    "YB"
];
/*
Formats the given number using `Number#toLocaleString`.
- If locale is a string, the value is expected to be a locale-key (for example: `de`).
- If locale is true, the system default locale is used for translation.
- If no value for locale is specified, the number is returned unmodified.
*/ const toLocaleString = (number, locale)=>{
    let result = number;
    if (typeof locale === "string") {
        result = number.toLocaleString(locale);
    } else if (locale === true) {
        result = number.toLocaleString();
    }
    return result;
};
function prettyBytes(number, options) {
    if (!Number.isFinite(number)) {
        throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);
    }
    options = Object.assign({}, options);
    if (options.signed && number === 0) {
        return " 0 B";
    }
    const isNegative = number < 0;
    const prefix = isNegative ? "-" : options.signed ? "+" : "";
    if (isNegative) {
        number = -number;
    }
    if (number < 1) {
        const numberString = toLocaleString(number, options.locale);
        return prefix + numberString + " B";
    }
    const exponent = Math.min(Math.floor(Math.log10(number) / 3), UNITS.length - 1);
    number = Number((number / Math.pow(1000, exponent)).toPrecision(3));
    const numberString = toLocaleString(number, options.locale);
    const unit = UNITS[exponent];
    return prefix + numberString + " " + unit;
}

//# sourceMappingURL=pretty-bytes.js.map

/***/ }),

/***/ 5244:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "x", ({
    enumerable: true,
    get: function() {
        return RouteKind;
    }
}));
var RouteKind;
(function(RouteKind) {
    RouteKind[/**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ "PAGES"] = "PAGES";
    RouteKind[/**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ "PAGES_API"] = "PAGES_API";
    RouteKind[/**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ "APP_PAGE"] = "APP_PAGE";
    RouteKind[/**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ "APP_ROUTE"] = "APP_ROUTE";
})(RouteKind || (RouteKind = {}));

//# sourceMappingURL=route-kind.js.map

/***/ }),

/***/ 3185:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PagesRouteModule: function() {
        return PagesRouteModule;
    },
    default: function() {
        return _default;
    }
});
const _routemodule = __webpack_require__(3076);
const _render = __webpack_require__(3100);
class PagesRouteModule extends _routemodule.RouteModule {
    constructor(options){
        super(options);
        this.components = options.components;
    }
    render(req, res, context) {
        return (0, _render.renderToHTMLImpl)(req, res, context.page, context.query, context.renderOpts, {
            App: this.components.App,
            Document: this.components.Document
        });
    }
}
const _default = PagesRouteModule;

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 6859:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1492)


/***/ }),

/***/ 5152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(9989)


/***/ }),

/***/ 5675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3956)


/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(6512)


/***/ }),

/***/ 5251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(6689),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 5893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(5251);
} else {}


/***/ }),

/***/ 4949:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;


/**
 * A collection of default build flags for a Stencil project.
 *
 * This collection can be found throughout the Stencil codebase, often imported from the `@app-data` module like so:
 * ```ts
 * import { BUILD } from '@app-data';
 * ```
 * and is used to determine if a portion of the output of a Stencil _project_'s compilation step can be eliminated.
 *
 * e.g. When `BUILD.allRenderFn` evaluates to `false`, the compiler will eliminate conditional statements like:
 * ```ts
 * if (BUILD.allRenderFn) {
 *   // some code that will be eliminated if BUILD.allRenderFn is false
 * }
 * ```
 *
 * `@app-data`, the module that `BUILD` is imported from, is an alias for the `@stencil/core/internal/app-data`, and is
 * partially referenced by {@link STENCIL_APP_DATA_ID}. The `src/compiler/bundle/app-data-plugin.ts` references
 * `STENCIL_APP_DATA_ID` uses it to replace these defaults with {@link BuildConditionals} that are derived from a
 * Stencil project's contents (i.e. metadata from the components). This replacement happens at a Stencil project's
 * compile time. Such code can be found at `src/compiler/app-core/app-data.ts`.
 */
const BUILD = {
    allRenderFn: false,
    cmpDidLoad: true,
    cmpDidUnload: false,
    cmpDidUpdate: true,
    cmpDidRender: true,
    cmpWillLoad: true,
    cmpWillUpdate: true,
    cmpWillRender: true,
    connectedCallback: true,
    disconnectedCallback: true,
    element: true,
    event: true,
    hasRenderFn: true,
    lifecycle: true,
    hostListener: true,
    hostListenerTargetWindow: true,
    hostListenerTargetDocument: true,
    hostListenerTargetBody: true,
    hostListenerTargetParent: false,
    hostListenerTarget: true,
    member: true,
    method: true,
    mode: true,
    observeAttribute: true,
    prop: true,
    propMutable: true,
    reflect: true,
    scoped: true,
    shadowDom: true,
    slot: true,
    cssAnnotations: true,
    state: true,
    style: true,
    formAssociated: false,
    svg: true,
    updatable: true,
    vdomAttribute: true,
    vdomXlink: true,
    vdomClass: true,
    vdomFunctional: true,
    vdomKey: true,
    vdomListener: true,
    vdomRef: true,
    vdomPropOrAttr: true,
    vdomRender: true,
    vdomStyle: true,
    vdomText: true,
    watchCallback: true,
    taskQueue: true,
    hotModuleReplacement: false,
    isDebug: false,
    isDev: false,
    isTesting: false,
    hydrateServerSide: false,
    hydrateClientSide: false,
    lifecycleDOMEvents: false,
    lazyLoad: false,
    profile: false,
    slotRelocation: true,
    // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
    appendChildSlotFix: false,
    // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
    cloneNodeFix: false,
    hydratedAttribute: false,
    hydratedClass: true,
    scriptDataOpts: false,
    // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
    scopedSlotTextContentFix: false,
    // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
    shadowDomShim: false,
    // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
    slotChildNodesFix: false,
    invisiblePrehydration: true,
    propBoolean: true,
    propNumber: true,
    propString: true,
    constructableCSS: true,
    cmpShouldUpdate: true,
    devTools: false,
    shadowDelegatesFocus: true,
    initializeNextTick: false,
    asyncLoading: false,
    asyncQueue: false,
    transformTagName: false,
    attachStyles: true,
    // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
    experimentalSlotFixes: false,
};
const Env = {};
const NAMESPACE = /* default */ 'app';

exports.m5 = BUILD;
__webpack_unused_export__ = Env;
exports.A7 = NAMESPACE;


/***/ }),

/***/ 167:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ }),

/***/ 8760:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
exports._ = exports._interop_require_wildcard = _interop_require_wildcard;
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}


/***/ })

};
;