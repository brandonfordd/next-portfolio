(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": true,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": true,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
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
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
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
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/About/index.js":
/*!******************************!*\
  !*** ./pages/About/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\15714\\Documents\\code\\personal\\next-portfolio\\pages\\About\\index.js";


const styles = {
  skillbarOne: {
    width: '75%',
    backgroundColor: 'rgb(170, 55, 50)',
    animation: 'animated-borderSkillC 1.5s infinite'
  },
  skillbarTwo: {
    width: '60%',
    backgroundColor: 'rgb(170, 55, 50)',
    animation: 'animated-borderSkillC 1.5s infinite'
  },
  skillbarThree: {
    width: '90%',
    backgroundColor: 'rgb(170, 55, 50)',
    animation: 'animated-borderSkillC 1.5s infinite'
  },
  oneS: {
    width: '95%'
  },
  twoS: {
    width: '90%'
  },
  threeS: {
    width: '80%'
  },
  fourS: {
    width: '70%'
  },
  fiveS: {
    width: '45%'
  },
  sixS: {
    width: '90%'
  },
  sevenS: {
    width: '70%'
  },
  eightS: {
    width: '50%'
  },
  nineS: {
    width: '95%'
  },
  tenS: {
    width: '90%'
  },
  elevenS: {
    width: '80%'
  },
  twelveS: {
    width: '90%'
  }
};
function About() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container m-autoC",
    id: "about-me",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-12 col-lg-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-8 col-lg-10 aboutCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
            className: "hrAbout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "profile-card-4 text-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: "/assets/images/me.jpg",
              alt: "me",
              width: "535",
              height: "510"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "profile-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "profile-name",
                id: "contacts",
                children: ["  Brandon Ford", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: "@brandonfordd"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "profile-description  linear-wipe-big",
                children: "Hello! My name is Brandon Ford and this is my portfolio! I'm a beginner Software Engineer and Full Stack Web Developer based in the Northern Virginia area. Currently studying at a George Washington University bootcamp for Front-end and Back-end Web Development. Check below for some current projects!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "row",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "col-12",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "container p-1 pb-0",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "containerIcons",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        className: "btn btn-floating m-1 icons",
                        href: "https://github.com/brandonfordd",
                        role: "button",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                          className: "fab fa-github"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 79,
                          columnNumber: 30
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 78,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        className: "btn btn-floating m-1 icons",
                        href: "https://www.linkedin.com/in/brandon-ford617/",
                        role: "button",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                          className: "fab fa-linkedin"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 82,
                          columnNumber: 30
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 81,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        className: "btn btn-floating m-1 icons",
                        href: "https://www.instagram.com/brandonforddd/",
                        role: "button",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                          className: "fab fa-instagram"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 85,
                          columnNumber: 30
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        className: "btn btn-floating m-1 icons",
                        href: "mailto:brandon.ford.617@gmail.com",
                        role: "button",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                          className: "fab fa-google"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 88,
                          columnNumber: 30
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        role: "button",
                        target: "_blank",
                        className: "btn btn-floating m-1 resumePBtn noWrap ",
                        href: "assets/downloads/brandonford_resume.pdf",
                        children: ["Preview Resume ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                          className: "far fa-file-pdf"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 90,
                          columnNumber: 174
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
            className: "hrAbout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-sm-12 col-md-12 col-lg-6 container skillsWrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container d-flex ",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "skillsTitle container",
            children: [" Skills", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              id: "gear1",
              className: "fa fa-5x fa-gear spin p-primary-color"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              id: "gear2",
              className: "fa fa-5x fa-gear spin-back p-tertiary-color"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              id: "gear3",
              className: "fa fa-5x fa-gear spin-back p-tertiary-color"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
            className: "hrSkills"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar skillbarTop",
            "data-percent": "75%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title noWrap",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "far fa-window-maximize"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 54
              }, this), " Front End Web Development "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "75%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.skillbarOne
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar",
            "data-percent": "95%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-html5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 47
              }, this), " HTML  "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "95%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.oneS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar",
            "data-percent": "90%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-css3-alt"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 47
              }, this), " CSS Frameworks |", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                children: " Bootstrap, Foundation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 99
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "90%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.twoS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar",
            "data-percent": "80%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-js-square"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 47
              }, this), " JavaScript |", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                children: " JQuery, Node, Moment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 96
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "80%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.threeS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar",
            "data-percent": "70%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-react"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 47
              }, this), " React | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                children: " Next.js, Webpack, GraphQL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 88
              }, this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "70%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.fourS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar",
            "data-percent": "60%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title noWrap",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fas fa-tools"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 54
              }, this), " Back End Web Development "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "60%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.skillbarTwo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar",
            "data-percent": "45%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fas fa-database"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 47
              }, this), " Databases |", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                children: " MySql, MongoDB "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 94
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "45%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.fiveS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar",
            "data-percent": "90%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fas fa-wrench"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 47
              }, this), " APIs "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "90%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.sixS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar",
            "data-percent": "70%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fas fa-server"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 47
              }, this), " Servers |", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                children: " Heroku, Apollo, Express"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 90
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "70%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.sevenS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar",
            "data-percent": "50%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fas fa-network-wired",
                children: " "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 47
              }, this), "Network ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 96
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "50%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.eightS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar",
            "data-percent": "90%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fab fa-pushed"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 47
              }, this), " Software Development Life Cycle "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "90%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.skillbarThree
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar",
            "data-percent": "95%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fas fa-sitemap"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 47
              }, this), " Development  | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                children: " Inspect, Insomia, Next.js "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 97
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "95%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.nineS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar",
            "data-percent": "90%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fas fa-vial"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 47
              }, this), " Testing "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "90%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.tenS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar",
            "data-percent": "80%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fas fa-chart-bar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 47
              }, this), " Analysis "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "80%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.elevenS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "skillbar",
            "data-percent": "90%",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fas fa-clipboard-check"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 47
              }, this), " Deployment | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                children: " Heroku, Vercel, Github "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 103
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skill-bar-percent",
              children: "90%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "skillbar-bar",
              style: styles.twelveS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
              className: "hrAbout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/Contact/index.js":
/*!********************************!*\
  !*** ./pages/Contact/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\15714\\Documents\\code\\personal\\next-portfolio\\pages\\Contact\\index.js";





function Home() {
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: subject,
    1: setSubject
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: submitted,
    1: setSubmitted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Sending');
    let data = {
      name,
      email,
      subject,
      message
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      console.log('Response received');

      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "contact",
    class: "contact",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "section-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Like to reach out? Contact me from the form below and watch out for an email!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "row",
        "data-aos": "fade-in",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "col-lg-5 d-flex align-items-stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 d-flex align-items-stretch",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            action: "forms/contact.php",
            method: "post",
            class: "php-email-form",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-group col-md-3",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  htmlFor: "name",
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 13
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  className: "form-control",
                  id: "name",
                  onChange: e => {
                    setName(e.target.value);
                  },
                  name: "name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 11
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-group col-md-5",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  htmlFor: "exampleInputEmail1",
                  children: "Email address"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 13
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "email",
                  className: "form-control",
                  id: "email",
                  onChange: e => {
                    setEmail(e.target.value);
                  },
                  name: "email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 11
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-group col-md-4",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  htmlFor: "name",
                  children: "Subject"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 13
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  className: "form-control",
                  id: "subject",
                  onChange: e => {
                    setSubject(e.target.value);
                  },
                  name: "subject"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: "message",
                children: "Message"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 11
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                className: "form-control",
                rows: "5",
                id: "message",
                onChange: e => {
                  setMessage(e.target.value);
                },
                name: "message"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "submit",
              className: "btn p-btn-color custom-length",
              onClick: e => {
                handleSubmit(e);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 1
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 1
  }, this);
}

/***/ }),

/***/ "./pages/Footer.js":
/*!*************************!*\
  !*** ./pages/Footer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\15714\\Documents\\code\\personal\\next-portfolio\\pages\\Footer.js";



function Footer({
  currentPage,
  handlePageChange
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().footer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-center p-3",
      children: "\xA9 2021 Site created with \uD83D\uDC9A by Brandon Ford"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./pages/Navigation.js":
/*!*****************************!*\
  !*** ./pages/Navigation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\15714\\Documents\\code\\personal\\next-portfolio\\pages\\Navigation.js";


 // Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function Navigation({
  currentPage,
  handlePageChange
}) {
  const {
    0: showNavs,
    1: setShowNavs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
    expand: "lg",
    className: "navbar sticky-top navbar-expand-lg p-background-color ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, {
      className: "navbar-brand p-font-color nav-brand-custom swing linear-wipe",
      href: "/",
      children: " Brandon Ford's Portfolio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Toggle, {
      className: "navbar-toggler navbarBtn custom-toggler",
      "aria-controls": "basic-navbar-nav"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Collapse, {
      id: "basic-navbar-nav",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {
        className: "ml-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#about",
            onClick: () => handlePageChange('About') // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            ,
            className: currentPage === 'About' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc',
            children: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#projects",
            onClick: () => handlePageChange('Projects') // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            ,
            className: currentPage === 'Projects' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc',
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#contact",
            onClick: () => handlePageChange('Contact') // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            ,
            className: currentPage === 'Contact' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc',
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#resume",
            onClick: () => handlePageChange('Resume') // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            ,
            className: currentPage === 'Resume' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc',
            children: "Resume"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./pages/Projects/index.js":
/*!*********************************!*\
  !*** ./pages/Projects/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\15714\\Documents\\code\\personal\\next-portfolio\\pages\\Projects\\index.js";

 // images and gifs imports

function Projects() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    class: "container work-body",
    id: "work",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      class: "projectsTitle",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        class: "fas fa-angle-double-right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 31
      }, this), " Projects"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
      class: "hrProjects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "card customCard",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        class: "card-img-top main-img-height",
        src: "/assets/gifs/patienttrackergif.gif",
        alt: "patienttracker",
        layout: "responsive",
        width: 6,
        height: 3.7
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "card-body main-card-body d-flex flex-column",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          class: "card-title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
            children: "MVC Patient Tracker"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 32
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          class: "card-text h5",
          children: "Full-stack application following MVC paradigm for creating, updating, sorting and deleting patient records. Below are the links for the GitHub repository and webpage!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "card-footer",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "text-center mt-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            rel: "noreferrer",
            href: "https://github.com/Captain63/patient-records-tracker",
            class: "btn p-btn-color btn-lg  custom-length-pm",
            role: "button",
            "aria-pressed": "true",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "GitHub "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 190
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              class: "fab fa-github-square"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 204
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            rel: "noreferrer",
            href: "https://patient-records-tracker.herokuapp.com",
            class: "btn btn-secondary btn-lg  custom-length-sm",
            role: "button",
            "aria-pressed": "true",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              class: "fas fa-window-maximize"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 185
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "card customCard",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        class: "card-img-top main-img-height",
        src: "/assets/images/moivenight_screenshot.png",
        alt: "moivenightdoneright",
        layout: "responsive",
        width: 6,
        height: 3.7
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "card-body main-card-body d-flex flex-column",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          class: "card-title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
            children: "Movie Night.. Done Right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 32
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          class: "card-text h5",
          children: ["This assignment was my first group Project! Using ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            class: "html",
            children: "html"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 83
          }, this), ", ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            class: "css",
            children: "css"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 109
          }, this), ", and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            class: "javascript",
            children: "javascript"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 137
          }, this), " we made a movie catalog! Below are the links for the GitHub repository and webpage!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "card-footer",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "text-center mt-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            rel: "noreferrer",
            href: "https://github.com/AustinJoo97/MovieNightDoneRight",
            class: "btn p-btn-color btn-lg  custom-length-pm",
            role: "button",
            "aria-pressed": "true",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "GitHub "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 188
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              class: "fab fa-github-square"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 202
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            rel: "noreferrer",
            href: "https://austinjoo97.github.io/MovieNightDoneRight/",
            class: "btn btn-secondary btn-lg  custom-length-sm",
            role: "button",
            "aria-pressed": "true",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              class: "fas fa-window-maximize"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 190
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      class: "assignmentsTitle",
      id: "assignments",
      children: ["Assignments ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        class: "fas fa-angle-double-left"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 63
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
      class: "hrAssignments"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "row row-cols-1 row-cols-md-3 g-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            class: "card-img-top main-img-height",
            src: "/assets/images/regex-url.png",
            alt: "regextutorial",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              class: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Regex Tutorial"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              class: "card-text",
              children: " This is a tutorial describing how the regex for matching a URL works. Below is the repository for the Gist on Github!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "text-center mt-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://gist.github.com/brandonfordd/2fc4ca41dec6a856e25334ac65ba7dac",
                class: "btn p-btn-color btn-lg custom-length-pp",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub Gist "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 210
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 229
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            class: "card-img-top main-img-height",
            src: "/assets/images/mvctech.png",
            alt: "mvctech",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              class: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "MVC Techblog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              class: "card-text",
              children: [" Building a full stack website for tech bloggers to post, update, and delete blogs! Below is the link to the Github and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                class: "herkou",
                children: "Heroku"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 154
              }, this), " page"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/mvc_techblog",
                class: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 185
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 199
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "immense-lake-51774.herokuapp.com/",
                class: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  class: "iconify",
                  "data-icon": "simple-icons:heroku",
                  "data-inline": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 176
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            class: "card-img-top main-img-height",
            src: "/assets/gifs/sql_gif.gif",
            alt: "mysqltracker",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              class: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Employee Tracker"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              class: "card-text",
              children: "Using MySql we were task with designing a database for sorting and tracking employee! Below is the Github for more information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "text-center mt-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/sql_employee_tracker",
                class: "btn p-btn-color btn-lg custom-length-pp",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 193
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 207
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            class: "card-img-top main-img-height",
            src: "/assets/gifs/categories.gif",
            alt: "ecommercebackend",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              class: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "E-Commerce Backend"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              class: "card-text",
              children: " Using MySql we were task with building the back end for an e-commerce site using Express.js and Sequelize. Below is the GitHub repository for more information!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "text-center mt-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/e_commerce_backend",
                class: "btn p-btn-color btn-lg custom-length-pp",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 191
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 205
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            class: "card-img-top main-img-height",
            src: "/assets/gifs/notetaker_ppreview.gif",
            alt: "notetaker",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              class: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Express Note Taker"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              class: "card-text",
              children: ["This is a Express Note taking application deployed on ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                class: "herkou",
                children: "Heroku"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 88
              }, this), " to show backend server development! Below are the links for the GitHub repository and deploy ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                class: "herkou",
                children: "Heroku"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 210
              }, this), " page!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/notetaker",
                class: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 182
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 196
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://intense-retreat-13384.herokuapp.com/",
                class: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  class: "iconify",
                  "data-icon": "simple-icons:heroku",
                  "data-inline": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 187
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            class: "card-img-top main-img-height",
            src: "/assets/gifs/readme_preview.gif",
            alt: "readme_generator",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              class: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Readme Generator"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              class: "card-text",
              children: ["Using ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                class: "node",
                children: "node.js"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 40
              }, this), " and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                class: "javascript",
                children: "Javascript"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 72
              }, this), " you can generate custom readme files for any work flow. Below are the links for the GitHub repository for more information!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "text-center mt-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/readme_generator",
                class: "btn p-btn-color btn-lg custom-length-pp",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 189
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 203
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            class: "card-img-top main-img-height",
            src: "/assets/gifs/team_profile.gif",
            alt: "teamcard_generator",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              class: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Team Profile Generator"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              class: "card-text",
              children: ["Using ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                class: "node",
                children: "node.js"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 40
              }, this), " and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                class: "javascript",
                children: "Javascript"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 72
              }, this), " you can generate custom Team Profile html file to fit any work flow. Below are the links for the GitHub repository for more information!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "text-center mt-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/teamcard_generator",
                class: "btn p-btn-color btn-lg custom-length-pp",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 191
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 205
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "card h-100 customCard  ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            class: "card-img-top main-img-height",
            src: "/assets/images/screenshot-weatherapp.png",
            alt: "weather_app",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              class: "card-title",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Weather Dashboard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              class: "card-text",
              children: ["This is a weather dashboard made with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                class: "moment",
                children: "OpenWeather Api"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 72
              }, this), "! Below are the links for the GitHub repository and webpage"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/weather_app",
                class: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 184
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 198
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://brandonfordd.github.io/weather_app/",
                class: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fas fa-window-maximize"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 186
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            class: "card-img-top main-img-height",
            src: "/assets/images/screenshot-passgen.png",
            alt: "password_generator",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              class: "card-title",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Password Generator"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              class: "card-text h",
              children: ["This is a password generator made with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                class: "javascript",
                children: "javascript"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 75
              }, this), "! Below are the links for the GitHub repository and webpage"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/password_generator",
                class: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 191
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 205
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://brandonfordd.github.io/password_generator/",
                class: "btn btn-secondary btn-lg  custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fas fa-window-maximize"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 194
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            class: "card-img-top main-img-height",
            src: "/assets/images/screenshot-javaquiz.png",
            alt: "javascript_quiz",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              class: "card-title",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Javascript Quiz"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              class: "card-text",
              children: ["This is a Javascript Quiz using only ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                class: "javascript",
                children: "javascript"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 71
              }, this), "! Below are the links for the GitHub repository and webpage"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/javascript_quiz",
                class: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 188
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 202
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://brandonfordd.github.io/javascript_quiz/",
                class: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fas fa-window-maximize"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 190
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            class: "card-img-top main-img-height",
            src: "/assets/images/screenshot-dayplanner.png",
            alt: "day_planner",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              class: "card-title",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Day Planner"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 36
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              class: "card-text",
              children: ["This is a day planner using ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                class: "javascript",
                children: "Javascript"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 62
              }, this), " and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                class: "moment",
                children: "moment.js"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 103
              }, this), "! Below are the links for the GitHub repository and webpage"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/day_planner",
                class: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 184
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 198
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://brandonfordd.github.io/day_planner/",
                class: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fas fa-window-maximize"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 186
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            class: "card-img-top main-img-height",
            src: "/assets/images/horiseon_site.png",
            alt: "horiseon_website",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              class: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Horison Site Refractment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              class: "card-text",
              children: ["This assignment was to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                class: "refract",
                children: "refract"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 57
              }, this), " a pre-made site called Horison! Below are the links for the GitHub repository and webpage!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              class: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/horiseon_refactor",
                class: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 190
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 204
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://brandonfordd.github.io/horiseon_refactor/",
                class: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  class: "fas fa-window-maximize"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 192
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/Resume/index.js":
/*!*******************************!*\
  !*** ./pages/Resume/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Resume)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\15714\\Documents\\code\\personal\\next-portfolio\\pages\\Resume\\index.js";

function Resume() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "resume",
    class: "resume",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      class: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "section-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Resume"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Welcome to my resume! Below you'll find my previous work experience and knowledge! Enjoy and Contact me if you have any questions:)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        class: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "col-lg-6",
          "data-aos": "fade-up",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            class: "resume-title",
            children: "Summary"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "resume-item pb-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Brandon Ford"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
                children: "Reliable, quality-focused construction technician/ upcoming Web Developer seeking opportunities to learn new skills and develop on the job experience in the technology industry. Through my work experience and personal interests, I am a quick study and can learn new skills with hands-on training. Looking forward to providing my skills in an environment where I can grow and make a difference."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 18
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Ashbrun 20147, Virginia"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "(571) 420-9520"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "brandon.ford.617@gmail.com"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            class: "resume-title",
            children: "Education"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "resume-item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: " Advanced Javascript & Front and Back End Web Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              children: "2021 - 2021"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
                children: "George Washington University, Ashburn , VA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 18
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " An online Bootcamp designed to teach advanced javascript skill to develop websites, build a career in web development, and learn technical skills in the Javascript language. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          class: "col-lg-6",
          "data-aos": "fade-up",
          "data-aos-delay": "100",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            class: "resume-title",
            children: "Professional Experience"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "resume-item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Construction Technician "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              children: "2018 - 2021"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
                children: "Connor Construction, Arlington, VA "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 18
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Lead crew member for home improvement projects providing guidance, distribute work tasks, and inspect sites after completion."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Interacts with customers and home-owners representing the company and providing excellent customers service."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Gained practical hands-on knowledge of different aspects of home remodeling such as dry-wall, insulation, flooring, and other duties."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Monitor worksite to ensure compliance with safety regulations."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: " Earned a reputation as a trusted technician."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Train new employees on proper handling of equipment and safety."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Perform special duties for other projects and assist others when needed."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            class: "resume-item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Front-Desk Assistant"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              children: "2017 - 2018"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
                children: "La Fitness, Leeseburg, VA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 18
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Checked in guests looking to work out and made sure no one snuck in."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Help sales by calling guests who had overdue payments and making sale calls for new memberships."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: " Clear weights and sets at the end of each day."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Helps guests who had issues with there memberships."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PortfolioContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects */ "./pages/Projects/index.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation */ "./pages/Navigation.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./pages/Footer.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./About */ "./pages/About/index.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Contact */ "./pages/Contact/index.js");
/* harmony import */ var _Resume__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Resume */ "./pages/Resume/index.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\15714\\Documents\\code\\personal\\next-portfolio\\pages\\index.js";








function PortfolioContainer() {
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('About'); // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.

  const renderPage = () => {
    if (currentPage === 'About') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_About__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 14
      }, this);
    }

    if (currentPage === 'Contact') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Contact__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 14
      }, this);
    }

    if (currentPage === 'Projects') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 14
      }, this);
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Resume__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 12
    }, this);
  };

  const handlePageChange = page => setCurrentPage(page);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "main",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "display",
      class: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().display),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
        currentPage: currentPage,
        handlePageChange: handlePageChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), renderPage(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"inputGroup": "Home_inputGroup__3j1HA",
	"inputLabel": "Home_inputLabel__9tAXf",
	"inputField": "Home_inputField__3gowV",
	"footer": "Home_footer__1WdhD"
};


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxjQUFQO0FBQ0Q7O0FBQ0Qsd0JBQU8sOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0QsR0FYRDs7QUFhQSxRQUFNQyxnQkFBZ0IsR0FBSWtCLElBQUQsSUFBVUYsY0FBYyxDQUFDRSxJQUFELENBQWpEOztBQUVBLHNCQUNFO0FBQUssTUFBRSxFQUFDLE1BQVI7QUFBQSwyQkFDRTtBQUFLLFFBQUUsRUFBQyxTQUFSO0FBQWtCLFdBQUssRUFBRS9ELHdFQUF6QjtBQUFBLDhCQUVFLDhEQUFDLGdEQUFEO0FBQVksbUJBQVcsRUFBRTRDLFdBQXpCO0FBQXNDLHdCQUFnQixFQUFFQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFJR2lCLFVBQVUsRUFKYixlQUtFLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7Ozs7Ozs7OztBQ3pDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQSwyR0FBK0M7Ozs7Ozs7Ozs7OztBQ0EvQzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vcGFnZXMvQWJvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vLi9wYWdlcy9Db250YWN0L2luZGV4LmpzIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vcGFnZXMvRm9vdGVyLmpzIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vcGFnZXMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3BhZ2VzL1Byb2plY3RzL2luZGV4LmpzIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vcGFnZXMvUmVzdW1lL2luZGV4LmpzIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlMTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xudmFyIF90b0Jhc2U2NCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjRcIik7XG52YXIgX2ltYWdlQ29uZmlnID0gcmVxdWlyZShcIi4uL3NlcnZlci9pbWFnZS1jb25maWdcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldCgpO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWU7XG59XG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFtcbiAgICAnbGF6eScsXG4gICAgJ2VhZ2VyJyxcbiAgICB1bmRlZmluZWRcbl07XG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIGRlZmF1bHRMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2ltZ2l4JyxcbiAgICAgICAgaW1naXhMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgICBjbG91ZGluYXJ5TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdha2FtYWknLFxuICAgICAgICBha2FtYWlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2N1c3RvbScsXG4gICAgICAgIGN1c3RvbUxvYWRlclxuICAgIF0sIFxuXSk7XG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAgICdmaWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdpbnRyaW5zaWMnLFxuICAgICdyZXNwb25zaXZlJyxcbiAgICB1bmRlZmluZWQsIFxuXTtcbmZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLmRlZmF1bHQgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYykge1xuICAgIHJldHVybiBzcmMuc3JjICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgKGlzU3RhdGljUmVxdWlyZShzcmMpIHx8IGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO1xufVxuY29uc3QgeyBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMgLCBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzICwgbG9hZGVyOiBjb25maWdMb2FkZXIgLCBwYXRoOiBjb25maWdQYXRoICwgZG9tYWluczogY29uZmlnRG9tYWlucyAsICB9ID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgfHwgX2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbXG4gICAgLi4uY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgLi4uY29uZmlnSW1hZ2VTaXplc1xuXTtcbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmFsbFNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmZ1bmN0aW9uIGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcykge1xuICAgIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGhSZSA9IC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO1xuICAgICAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtYXRjaDsgbWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7IG1hdGNoKXtcbiAgICAgICAgICAgIHBlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoKHMpPT5zID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8IGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHdpZHRocyA9IFtcbiAgICAgICAgLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgICAgW1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovIFxuICAgICAgICBdLm1hcCgodyk9PmFsbFNpemVzLmZpbmQoKHApPT5wID49IHdcbiAgICAgICAgICAgICkgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSksIFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzLFxuICAgICAgICBraW5kOiAneCdcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7IHNyYyAsIHVub3B0aW1pemVkICwgbGF5b3V0ICwgd2lkdGggLCBxdWFsaXR5ICwgc2l6ZXMgLCBsb2FkZXIgIH0pIHtcbiAgICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHdpZHRocyAsIGtpbmQgIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpO1xuICAgIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICAgICAgc3JjU2V0OiB3aWR0aHMubWFwKCh3LCBpKT0+YCR7bG9hZGVyKHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd1xuICAgICAgICAgICAgfSl9ICR7a2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxfSR7a2luZH1gXG4gICAgICAgICkuam9pbignLCAnKSxcbiAgICAgICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgICAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgICAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICAgICAgc3JjOiBsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aHNbbGFzdF1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50KHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtcbiAgICBpZiAobG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHJvb3Q6IGNvbmZpZ1BhdGhcbiAgICAgICAgfSwgbG9hZGVyUHJvcHMpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO1xufVxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmMsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsICFpc1Zpc2libGUgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IHRydWUsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9KSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiB0cnVlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiAoaW1nKT0+e1xuICAgICAgICAgICAgc2V0UmVmKGltZyk7XG4gICAgICAgICAgICBoYW5kbGVMb2FkaW5nKGltZywgc3JjU3RyaW5nLCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2tpbGxiYXJPbmU6IHtcclxuICAgIHdpZHRoOiAnNzUlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigxNzAsIDU1LCA1MCknLFxyXG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0ZWQtYm9yZGVyU2tpbGxDIDEuNXMgaW5maW5pdGUnLFxyXG4gIH0sXHJcbiAgc2tpbGxiYXJUd286IHtcclxuICAgIHdpZHRoOiAnNjAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigxNzAsIDU1LCA1MCknLFxyXG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0ZWQtYm9yZGVyU2tpbGxDIDEuNXMgaW5maW5pdGUnLFxyXG4gIH0sXHJcbiAgc2tpbGxiYXJUaHJlZToge1xyXG4gICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDE3MCwgNTUsIDUwKScsXHJcbiAgICBhbmltYXRpb246ICdhbmltYXRlZC1ib3JkZXJTa2lsbEMgMS41cyBpbmZpbml0ZScsXHJcbiAgfSxcclxuICBvbmVTOiB7XHJcbiAgICB3aWR0aDogJzk1JScsXHJcbiAgfSxcclxuICB0d29TOiB7XHJcbiAgICB3aWR0aDogJzkwJScsXHJcbiAgfSxcclxuICB0aHJlZVM6IHtcclxuICAgIHdpZHRoOiAnODAlJyxcclxuICB9LFxyXG4gIGZvdXJTOiB7XHJcbiAgICB3aWR0aDogJzcwJScsXHJcbiAgfSxcclxuICBmaXZlUzoge1xyXG4gICAgd2lkdGg6ICc0NSUnLFxyXG4gIH0sXHJcbiAgc2l4Uzoge1xyXG4gICAgd2lkdGg6ICc5MCUnLFxyXG4gIH0sXHJcbiAgc2V2ZW5TOiB7XHJcbiAgICB3aWR0aDogJzcwJScsXHJcbiAgfSxcclxuICBlaWdodFM6IHtcclxuICAgIHdpZHRoOiAnNTAlJyxcclxuICB9LFxyXG4gIG5pbmVTOiB7XHJcbiAgICB3aWR0aDogJzk1JScsXHJcbiAgfSxcclxuICB0ZW5TOiB7XHJcbiAgICB3aWR0aDogJzkwJScsXHJcbiAgfSxcclxuICBlbGV2ZW5TOiB7XHJcbiAgICB3aWR0aDogJzgwJScsXHJcbiAgfSxcclxuICB0d2VsdmVTOiB7XHJcbiAgICB3aWR0aDogJzkwJScsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtLWF1dG9DXCIgaWQ9XCJhYm91dC1tZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy02XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IGNvbC1sZy0xMCBhYm91dENhcmRcIj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyQWJvdXRcIj48L2hyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtY2FyZC00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYXNzZXRzL2ltYWdlcy9tZS5qcGdcIiBhbHQ9XCJtZVwiIHdpZHRoPVwiNTM1XCIgaGVpZ2h0PVwiNTEwXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLW5hbWVcIiBpZD1cImNvbnRhY3RzXCI+ICBCcmFuZG9uIEZvcmRcclxuICAgICAgICAgICAgICAgICAgICA8cD5AYnJhbmRvbmZvcmRkPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtZGVzY3JpcHRpb24gIGxpbmVhci13aXBlLWJpZ1wiPlxyXG4gICAgICAgICAgICAgICAgICBIZWxsbyEgTXkgbmFtZSBpcyBCcmFuZG9uIEZvcmQgYW5kIHRoaXMgaXMgbXkgcG9ydGZvbGlvISBJJ20gYSBiZWdpbm5lciBTb2Z0d2FyZSBFbmdpbmVlciBhbmQgRnVsbCBTdGFjayBXZWIgRGV2ZWxvcGVyIGJhc2VkIGluIHRoZSBOb3J0aGVybiBWaXJnaW5pYSBhcmVhLiBDdXJyZW50bHkgc3R1ZHlpbmcgYXQgYSBHZW9yZ2UgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IGJvb3RjYW1wIGZvciBGcm9udC1lbmQgYW5kIEJhY2stZW5kIFdlYiBEZXZlbG9wbWVudC4gQ2hlY2sgYmVsb3cgZm9yIHNvbWUgY3VycmVudCBwcm9qZWN0cyE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC0xIHBiLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJJY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJidG4gYnRuLWZsb2F0aW5nIG0tMSBpY29uc1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnJhbmRvbmZvcmRkXCIgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cImJ0biBidG4tZmxvYXRpbmcgbS0xIGljb25zXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9icmFuZG9uLWZvcmQ2MTcvXCIgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJidG4gYnRuLWZsb2F0aW5nIG0tMSBpY29uc1wiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2JyYW5kb25mb3JkZGQvXCIgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cImJ0biBidG4tZmxvYXRpbmcgbS0xIGljb25zXCIgaHJlZj1cIm1haWx0bzpicmFuZG9uLmZvcmQuNjE3QGdtYWlsLmNvbVwiIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1nb29nbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG4gYnRuLWZsb2F0aW5nIG0tMSByZXN1bWVQQnRuIG5vV3JhcCBcIiBocmVmPVwiYXNzZXRzL2Rvd25sb2Fkcy9icmFuZG9uZm9yZF9yZXN1bWUucGRmXCI+UHJldmlldyBSZXN1bWUgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWZpbGUtcGRmXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJockFib3V0XCI+PC9ocj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctNiBjb250YWluZXIgc2tpbGxzV3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2tpbGxzVGl0bGUgY29udGFpbmVyXCI+IFNraWxsc1xyXG4gICAgICAgICAgICAgIDxpIGlkPVwiZ2VhcjFcIiBjbGFzc05hbWU9XCJmYSBmYS01eCBmYS1nZWFyIHNwaW4gcC1wcmltYXJ5LWNvbG9yXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxpIGlkPVwiZ2VhcjJcIiBjbGFzc05hbWU9XCJmYSBmYS01eCBmYS1nZWFyIHNwaW4tYmFjayBwLXRlcnRpYXJ5LWNvbG9yXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxpIGlkPVwiZ2VhcjNcIiBjbGFzc05hbWU9XCJmYSBmYS01eCBmYS1nZWFyIHNwaW4tYmFjayBwLXRlcnRpYXJ5LWNvbG9yXCI+PC9pPiAgICAgICAgXHJcbiAgICAgICAgICAgIDwvaDE+ICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJoclNraWxsc1wiPjwvaHI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXIgc2tpbGxiYXJUb3BcIiBkYXRhLXBlcmNlbnQ9XCI3NSVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLXRpdGxlIG5vV3JhcFwiPjxpIGNsYXNzTmFtZT1cImZhciBmYS13aW5kb3ctbWF4aW1pemVcIj48L2k+IEZyb250IEVuZCBXZWIgRGV2ZWxvcG1lbnQgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1iYXItcGVyY2VudFwiPjc1JTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItYmFyXCIgc3R5bGU9e3N0eWxlcy5za2lsbGJhck9uZX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyXCIgZGF0YS1wZXJjZW50PVwiOTUlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci10aXRsZVwiPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1odG1sNVwiPjwvaT4gSFRNTCAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1iYXItcGVyY2VudFwiPjk1JTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItYmFyXCIgc3R5bGU9e3N0eWxlcy5vbmVTfT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXJcIiBkYXRhLXBlcmNlbnQ9XCI5MCVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLXRpdGxlXCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWNzczMtYWx0XCI+PC9pPiBDU1MgRnJhbWV3b3JrcyB8PGk+IEJvb3RzdHJhcCwgRm91bmRhdGlvbjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWJhci1wZXJjZW50XCI+OTAlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci1iYXJcIiBzdHlsZT17c3R5bGVzLnR3b1N9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhclwiIGRhdGEtcGVyY2VudD1cIjgwJVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItdGl0bGVcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtanMtc3F1YXJlXCI+PC9pPiBKYXZhU2NyaXB0IHw8aT4gSlF1ZXJ5LCBOb2RlLCBNb21lbnQ8L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1iYXItcGVyY2VudFwiPjgwJTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItYmFyXCIgc3R5bGU9e3N0eWxlcy50aHJlZVN9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhclwiIGRhdGEtcGVyY2VudD1cIjcwJVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItdGl0bGVcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtcmVhY3RcIj48L2k+IFJlYWN0IHwgPGk+IE5leHQuanMsIFdlYnBhY2ssIEdyYXBoUUw8L2k+IDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtYmFyLXBlcmNlbnRcIj43MCU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLWJhclwiIHN0eWxlPXtzdHlsZXMuZm91clN9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXJcIiBkYXRhLXBlcmNlbnQ9XCI2MCVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLXRpdGxlIG5vV3JhcFwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS10b29sc1wiPjwvaT4gQmFjayBFbmQgV2ViIERldmVsb3BtZW50IDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtYmFyLXBlcmNlbnRcIj42MCU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLWJhclwiIHN0eWxlPXtzdHlsZXMuc2tpbGxiYXJUd299PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhclwiIGRhdGEtcGVyY2VudD1cIjQ1JVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItdGl0bGVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtZGF0YWJhc2VcIj48L2k+IERhdGFiYXNlcyB8PGk+IE15U3FsLCBNb25nb0RCIDwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWJhci1wZXJjZW50XCI+NDUlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci1iYXJcIiBzdHlsZT17c3R5bGVzLmZpdmVTfT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXJcIiBkYXRhLXBlcmNlbnQ9XCI5MCVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLXRpdGxlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdyZW5jaFwiPjwvaT4gQVBJcyA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWJhci1wZXJjZW50XCI+OTAlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci1iYXJcIiBzdHlsZT17c3R5bGVzLnNpeFN9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhclwiIGRhdGEtcGVyY2VudD1cIjcwJVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItdGl0bGVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VydmVyXCI+PC9pPiBTZXJ2ZXJzIHw8aT4gSGVyb2t1LCBBcG9sbG8sIEV4cHJlc3M8L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1iYXItcGVyY2VudFwiPjcwJTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItYmFyXCIgc3R5bGU9e3N0eWxlcy5zZXZlblN9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhclwiIGRhdGEtcGVyY2VudD1cIjUwJVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItdGl0bGVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtbmV0d29yay13aXJlZFwiPiA8L2k+TmV0d29yayA8aT48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1iYXItcGVyY2VudFwiPjUwJTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItYmFyXCIgc3R5bGU9e3N0eWxlcy5laWdodFN9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhclwiIGRhdGEtcGVyY2VudD1cIjkwJVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItdGl0bGVcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtcHVzaGVkXCI+PC9pPiBTb2Z0d2FyZSBEZXZlbG9wbWVudCBMaWZlIEN5Y2xlIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtYmFyLXBlcmNlbnRcIj45MCU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLWJhclwiIHN0eWxlPXtzdHlsZXMuc2tpbGxiYXJUaHJlZX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyXCIgZGF0YS1wZXJjZW50PVwiOTUlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci10aXRsZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaXRlbWFwXCI+PC9pPiBEZXZlbG9wbWVudCAgfCA8aT4gSW5zcGVjdCwgSW5zb21pYSwgTmV4dC5qcyA8L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1iYXItcGVyY2VudFwiPjk1JTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItYmFyXCIgc3R5bGU9e3N0eWxlcy5uaW5lU30+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyXCIgZGF0YS1wZXJjZW50PVwiOTAlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci10aXRsZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS12aWFsXCI+PC9pPiBUZXN0aW5nIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtYmFyLXBlcmNlbnRcIj45MCU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLWJhclwiIHN0eWxlPXtzdHlsZXMudGVuU30+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyXCIgZGF0YS1wZXJjZW50PVwiODAlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci10aXRsZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGFydC1iYXJcIj48L2k+IEFuYWx5c2lzIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtYmFyLXBlcmNlbnRcIj44MCU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLWJhclwiIHN0eWxlPXtzdHlsZXMuZWxldmVuU30+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyXCIgZGF0YS1wZXJjZW50PVwiOTAlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci10aXRsZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbGlwYm9hcmQtY2hlY2tcIj48L2k+IERlcGxveW1lbnQgfCA8aT4gSGVyb2t1LCBWZXJjZWwsIEdpdGh1YiA8L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1iYXItcGVyY2VudFwiPjkwJTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItYmFyXCIgc3R5bGU9e3N0eWxlcy50d2VsdmVTfT48L2Rpdj5cclxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJBYm91dFwiPjwvaHI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3N1YmplY3QsIHNldFN1YmplY3RdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4geyBcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZygnU2VuZGluZycpXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBzdWJqZWN0LFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHJlY2VpdmVkJylcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHN1Y2NlZWRlZCEnKVxuICAgICAgICBzZXRTdWJtaXR0ZWQodHJ1ZSlcbiAgICAgICAgc2V0TmFtZSgnJylcbiAgICAgICAgc2V0RW1haWwoJycpXG4gICAgICAgIHNldFN1YmplY3QoJycpXG4gICAgICAgIHNldE1lc3NhZ2UoJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG48c2VjdGlvbiBpZD1cImNvbnRhY3RcIiBjbGFzcz1cImNvbnRhY3RcIj5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5cbiAgICA8aDI+Q29udGFjdDwvaDI+XG4gICAgPHA+TGlrZSB0byByZWFjaCBvdXQ/IENvbnRhY3QgbWUgZnJvbSB0aGUgZm9ybSBiZWxvdyBhbmQgd2F0Y2ggb3V0IGZvciBhbiBlbWFpbCFcbiAgICA8L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicm93XCIgZGF0YS1hb3M9XCJmYWRlLWluXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1sZy01IGQtZmxleCBhbGlnbi1pdGVtcy1zdHJldGNoXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1mbGV4IGFsaWduLWl0ZW1zLXN0cmV0Y2hcIj5cbiAgICAgIDxmb3JtIGFjdGlvbj1cImZvcm1zL2NvbnRhY3QucGhwXCIgbWV0aG9kPVwicG9zdFwiIGNsYXNzPVwicGhwLWVtYWlsLWZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJuYW1lXCIgIG9uQ2hhbmdlPXsoZSk9PntzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX19IG5hbWU9J25hbWUnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC01XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZW1haWxcIiBvbkNoYW5nZT17KGUpPT57c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfX0gbmFtZT0nZW1haWwnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5TdWJqZWN0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwic3ViamVjdFwiICBvbkNoYW5nZT17KGUpPT57c2V0U3ViamVjdChlLnRhcmdldC52YWx1ZSl9fSBuYW1lPSdzdWJqZWN0JyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9XCI1XCIgaWQ9XCJtZXNzYWdlXCIgb25DaGFuZ2U9eyhlKT0+e3NldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfX0gbmFtZT0nbWVzc2FnZScgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT1cImJ0biBwLWJ0bi1jb2xvciBjdXN0b20tbGVuZ3RoXCIgb25DbGljaz17KGUpPT57aGFuZGxlU3VibWl0KGUpfX0vPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuPC9zZWN0aW9uPlxuICApXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKHsgY3VycmVudFBhZ2UsIGhhbmRsZVBhZ2VDaGFuZ2UgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0gPlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTNcIj7CqSAyMDIxIFNpdGUgY3JlYXRlZCB3aXRoIPCfkpogYnkgQnJhbmRvbiBGb3JkPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBOYXZiYXIsTmF2LE5hdkRyb3Bkb3duLEZvcm0sRm9ybUNvbnRyb2wsQnV0dG9uLE5hdkl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuLy8gSGVyZSB3ZSBhcmUgdXNpbmcgb2JqZWN0IGRlc3RydWN0dXJpbmcgYXNzaWdubWVudCB0byBwbHVjayBvZmYgb3VyIHZhcmlhYmxlcyBmcm9tIHRoZSBwcm9wcyBvYmplY3RcclxuLy8gV2UgYXNzaWduIHRoZW0gdG8gdGhlaXIgb3duIHZhcmlhYmxlIG5hbWVzXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb24oeyBjdXJyZW50UGFnZSwgaGFuZGxlUGFnZUNoYW5nZSB9KSB7XHJcblxyXG4gIGNvbnN0IFtzaG93TmF2cywgc2V0U2hvd05hdnNdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxOYXZiYXIgZXhwYW5kPVwibGdcIiBjbGFzc05hbWU9XCJuYXZiYXIgc3RpY2t5LXRvcCBuYXZiYXItZXhwYW5kLWxnIHAtYmFja2dyb3VuZC1jb2xvciBcIj4gXHJcbiAgICAgICAgPE5hdmJhci5CcmFuZCBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBwLWZvbnQtY29sb3IgbmF2LWJyYW5kLWN1c3RvbSBzd2luZyBsaW5lYXItd2lwZVwiIFxyXG4gICAgICAgICAgaHJlZj1cIi9cIj4gQnJhbmRvbiBGb3JkJ3MgUG9ydGZvbGlvXHJcbiAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgPE5hdmJhci5Ub2dnbGUgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXIgbmF2YmFyQnRuIGN1c3RvbS10b2dnbGVyXCIgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxyXG4gICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjYWJvdXRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZSgnQWJvdXQnKX1cclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBjb25kaXRpb25hbCAodGVybmFyeSkgb3BlcmF0b3IgdGhhdCBjaGVja3MgdG8gc2VlIGlmIHRoZSBjdXJyZW50IHBhZ2UgaXMgXCJIb21lXCJcclxuICAgICAgICAgICAgICAgIC8vIElmIGl0IGlzLCB3ZSBzZXQgdGhlIGN1cnJlbnQgcGFnZSB0byAnbmF2LWxpbmstYWN0aXZlJywgb3RoZXJ3aXNlIHdlIHNldCBpdCB0byAnbmF2LWxpbmsnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N1cnJlbnRQYWdlID09PSAnQWJvdXQnID8gJ25hdi1saW5rIHAtZm9udC1jb2xvciBtLWxjIGFjdGl2ZScgOiAnbmF2LWxpbmsgcC1mb250LWNvbG9yIG0tbGMnfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNwcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdlQ2hhbmdlKCdQcm9qZWN0cycpfVxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBjdXJyZW50UGFnZSBpcyBgQWJvdXRgLCBhbmQgaWYgc28gd2UgdXNlIHRoZSBhY3RpdmUgbGluayBjbGFzcyBmcm9tIGJvb3RzdHJhcC4gT3RoZXJ3aXNlLCB3ZSBzZXQgaXQgdG8gYSBub3JtYWwgbmF2LWxpbmtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudFBhZ2UgPT09ICdQcm9qZWN0cycgPyAnbmF2LWxpbmsgcC1mb250LWNvbG9yIG0tbGMgYWN0aXZlJyA6ICduYXYtbGluayBwLWZvbnQtY29sb3IgbS1sYyd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUHJvamVjdHNcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI2NvbnRhY3RcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZSgnQ29udGFjdCcpfVxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBjdXJyZW50UGFnZSBpcyBgQmxvZ2AsIGFuZCBpZiBzbyB3ZSB1c2UgdGhlIGFjdGl2ZSBsaW5rIGNsYXNzIGZyb20gYm9vdHN0cmFwLiBPdGhlcndpc2UsIHdlIHNldCBpdCB0byBhIG5vcm1hbCBuYXYtbGlua1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50UGFnZSA9PT0gJ0NvbnRhY3QnID8gJ25hdi1saW5rIHAtZm9udC1jb2xvciBtLWxjIGFjdGl2ZScgOiAnbmF2LWxpbmsgcC1mb250LWNvbG9yIG0tbGMnfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI3Jlc3VtZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdlQ2hhbmdlKCdSZXN1bWUnKX1cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgY3VycmVudFBhZ2UgaXMgYENvbnRhY3RgLCBhbmQgaWYgc28gd2UgdXNlIHRoZSBhY3RpdmUgbGluayBjbGFzcyBmcm9tIGJvb3RzdHJhcC4gT3RoZXJ3aXNlLCB3ZSBzZXQgaXQgdG8gYSBub3JtYWwgbmF2LWxpbmtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudFBhZ2UgPT09ICdSZXN1bWUnID8gJ25hdi1saW5rIHAtZm9udC1jb2xvciBtLWxjIGFjdGl2ZScgOiAnbmF2LWxpbmsgcC1mb250LWNvbG9yIG0tbGMnfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFJlc3VtZVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICA8L05hdmJhcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbi8vIGltYWdlcyBhbmQgZ2lmcyBpbXBvcnRzXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgd29yay1ib2R5XCIgaWQ9XCJ3b3JrXCI+XHJcbiAgICA8aDEgY2xhc3M9XCJwcm9qZWN0c1RpdGxlXCI+PGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPiBQcm9qZWN0czwvaDE+XHJcbiAgICA8aHIgY2xhc3M9XCJoclByb2plY3RzXCI+PC9ocj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIGN1c3RvbUNhcmRcIj5cclxuICAgICAgPEltYWdlIGNsYXNzPVwiY2FyZC1pbWctdG9wIG1haW4taW1nLWhlaWdodFwiIHNyYz1cIi9hc3NldHMvZ2lmcy9wYXRpZW50dHJhY2tlcmdpZi5naWZcIiBhbHQ9XCJwYXRpZW50dHJhY2tlclwiIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjd9IC8+IFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IG1haW4tY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cImNhcmQtdGl0bGVcIj48aW5zPk1WQyBQYXRpZW50IFRyYWNrZXI8L2lucz48L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IGg1XCI+RnVsbC1zdGFjayBhcHBsaWNhdGlvbiBmb2xsb3dpbmcgTVZDIHBhcmFkaWdtIGZvciBjcmVhdGluZywgdXBkYXRpbmcsIHNvcnRpbmcgYW5kIGRlbGV0aW5nIHBhdGllbnQgcmVjb3Jkcy4gQmVsb3cgYXJlIHRoZSBsaW5rcyBmb3IgdGhlIEdpdEh1YiByZXBvc2l0b3J5IGFuZCB3ZWJwYWdlITwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9DYXB0YWluNjMvcGF0aWVudC1yZWNvcmRzLXRyYWNrZXJcIiBjbGFzcz1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgIGN1c3RvbS1sZW5ndGgtcG1cIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxiPkdpdEh1YiA8L2I+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vcGF0aWVudC1yZWNvcmRzLXRyYWNrZXIuaGVyb2t1YXBwLmNvbVwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnICBjdXN0b20tbGVuZ3RoLXNtXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48aSBjbGFzcz1cImZhcyBmYS13aW5kb3ctbWF4aW1pemVcIj48L2k+PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIGN1c3RvbUNhcmRcIj5cclxuICAgIDxJbWFnZSBjbGFzcz1cImNhcmQtaW1nLXRvcCBtYWluLWltZy1oZWlnaHRcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9tb2l2ZW5pZ2h0X3NjcmVlbnNob3QucG5nXCIgYWx0PVwibW9pdmVuaWdodGRvbmVyaWdodFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjd9IC8+ICBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBtYWluLWNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJjYXJkLXRpdGxlXCI+PGlucz5Nb3ZpZSBOaWdodC4uIERvbmUgUmlnaHQ8L2lucz48L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IGg1XCI+VGhpcyBhc3NpZ25tZW50IHdhcyBteSBmaXJzdCBncm91cCBQcm9qZWN0ISBVc2luZyA8YiBjbGFzcz1cImh0bWxcIj5odG1sPC9iPiwgPGIgY2xhc3M9XCJjc3NcIj5jc3M8L2I+LCBhbmQgPGIgY2xhc3M9XCJqYXZhc2NyaXB0XCI+amF2YXNjcmlwdDwvYj4gd2UgbWFkZSBhIG1vdmllIGNhdGFsb2chIEJlbG93IGFyZSB0aGUgbGlua3MgZm9yIHRoZSBHaXRIdWIgcmVwb3NpdG9yeSBhbmQgd2VicGFnZSE8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtYXV0b1wiPlxyXG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQXVzdGluSm9vOTcvTW92aWVOaWdodERvbmVSaWdodFwiIGNsYXNzPVwiYnRuIHAtYnRuLWNvbG9yIGJ0bi1sZyAgY3VzdG9tLWxlbmd0aC1wbVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzcz1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9hdXN0aW5qb285Ny5naXRodWIuaW8vTW92aWVOaWdodERvbmVSaWdodC9cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZyAgY3VzdG9tLWxlbmd0aC1zbVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGkgY2xhc3M9XCJmYXMgZmEtd2luZG93LW1heGltaXplXCI+PC9pPjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxoMSBjbGFzcz1cImFzc2lnbm1lbnRzVGl0bGVcIiBpZD1cImFzc2lnbm1lbnRzXCI+QXNzaWdubWVudHMgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG91YmxlLWxlZnRcIj48L2k+PC9oMT5cclxuICAgIDxociBjbGFzcz1cImhyQXNzaWdubWVudHNcIj48L2hyPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyByb3ctY29scy0xIHJvdy1jb2xzLW1kLTMgZy00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGFkZGluZ1RvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGgtMTAwIGN1c3RvbUNhcmRcIj5cclxuICAgICAgICA8SW1hZ2UgY2xhc3M9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvcmVnZXgtdXJsLnBuZ1wiIGFsdD1cInJlZ2V4dHV0b3JpYWxcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My41fSAvPiAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGdyb3VwLWNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSBcIj48aW5zPlJlZ2V4IFR1dG9yaWFsPC9pbnM+PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj4gVGhpcyBpcyBhIHR1dG9yaWFsIGRlc2NyaWJpbmcgaG93IHRoZSByZWdleCBmb3IgbWF0Y2hpbmcgYSBVUkwgd29ya3MuIEJlbG93IGlzIHRoZSByZXBvc2l0b3J5IGZvciB0aGUgR2lzdCBvbiBHaXRodWIhPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2JyYW5kb25mb3JkZC8yZmM0Y2E0MWRlYzZhODU2ZTI1MzM0YWM2NWJhN2RhY1wiIGNsYXNzPVwiYnRuIHAtYnRuLWNvbG9yIGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXBwXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48Yj5HaXRIdWIgR2lzdCA8L2I+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sIHBhZGRpbmdUb3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBoLTEwMCBjdXN0b21DYXJkXCI+XHJcbiAgICAgICAgPEltYWdlIGNsYXNzPVwiY2FyZC1pbWctdG9wIG1haW4taW1nLWhlaWdodFwiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL212Y3RlY2gucG5nXCIgYWx0PVwibXZjdGVjaFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjV9IC8+ICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGdyb3VwLWNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSBcIj48aW5zPk1WQyBUZWNoYmxvZzwvaW5zPjwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+IEJ1aWxkaW5nIGEgZnVsbCBzdGFjayB3ZWJzaXRlIGZvciB0ZWNoIGJsb2dnZXJzIHRvIHBvc3QsIHVwZGF0ZSwgYW5kIGRlbGV0ZSBibG9ncyEgQmVsb3cgaXMgdGhlIGxpbmsgdG8gdGhlIEdpdGh1YiBhbmQgPGIgY2xhc3M9XCJoZXJrb3VcIj5IZXJva3U8L2I+IHBhZ2U8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JyYW5kb25mb3JkZC9tdmNfdGVjaGJsb2dcIiBjbGFzcz1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzcz1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImltbWVuc2UtbGFrZS01MTc3NC5oZXJva3VhcHAuY29tL1wiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnIGN1c3RvbS1sZW5ndGgtc3NcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaWNvbj1cInNpbXBsZS1pY29uczpoZXJva3VcIiBkYXRhLWlubGluZT1cImZhbHNlXCI+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGFkZGluZ1RvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGgtMTAwIGN1c3RvbUNhcmRcIj5cclxuICAgICAgICA8SW1hZ2UgY2xhc3M9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9naWZzL3NxbF9naWYuZ2lmXCIgYWx0PVwibXlzcWx0cmFja2VyXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIHdpZHRoPXs2fSBoZWlnaHQ9ezMuNX0gLz4gICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgZ3JvdXAtY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIFwiPjxpbnM+RW1wbG95ZWUgVHJhY2tlcjwvaW5zPjwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+VXNpbmcgTXlTcWwgd2Ugd2VyZSB0YXNrIHdpdGggZGVzaWduaW5nIGEgZGF0YWJhc2UgZm9yIHNvcnRpbmcgYW5kIHRyYWNraW5nIGVtcGxveWVlISBCZWxvdyBpcyB0aGUgR2l0aHViIGZvciBtb3JlIGluZm9ybWF0aW9uPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icmFuZG9uZm9yZGQvc3FsX2VtcGxveWVlX3RyYWNrZXJcIiBjbGFzcz1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wcFwiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzcz1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGFkZGluZ1RvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGgtMTAwIGN1c3RvbUNhcmRcIj5cclxuICAgICAgICA8SW1hZ2UgY2xhc3M9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9naWZzL2NhdGVnb3JpZXMuZ2lmXCIgYWx0PVwiZWNvbW1lcmNlYmFja2VuZFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjV9IC8+ICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGdyb3VwLWNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSBcIj48aW5zPkUtQ29tbWVyY2UgQmFja2VuZDwvaW5zPjwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+IFVzaW5nIE15U3FsIHdlIHdlcmUgdGFzayB3aXRoIGJ1aWxkaW5nIHRoZSBiYWNrIGVuZCBmb3IgYW4gZS1jb21tZXJjZSBzaXRlIHVzaW5nIEV4cHJlc3MuanMgYW5kIFNlcXVlbGl6ZS4gQmVsb3cgaXMgdGhlIEdpdEh1YiByZXBvc2l0b3J5IGZvciBtb3JlIGluZm9ybWF0aW9uITwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnJhbmRvbmZvcmRkL2VfY29tbWVyY2VfYmFja2VuZFwiIGNsYXNzPVwiYnRuIHAtYnRuLWNvbG9yIGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXBwXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48Yj5HaXRIdWIgPC9iPjxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1Yi1zcXVhcmVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbCBwYWRkaW5nVG9wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgaC0xMDAgY3VzdG9tQ2FyZFwiPlxyXG4gICAgICAgIDxJbWFnZSBjbGFzcz1cImNhcmQtaW1nLXRvcCBtYWluLWltZy1oZWlnaHRcIiBzcmM9XCIvYXNzZXRzL2dpZnMvbm90ZXRha2VyX3BwcmV2aWV3LmdpZlwiIGFsdD1cIm5vdGV0YWtlclwiIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjV9IC8+ICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgZ3JvdXAtY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIFwiPjxpbnM+RXhwcmVzcyBOb3RlIFRha2VyPC9pbnM+PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj5UaGlzIGlzIGEgRXhwcmVzcyBOb3RlIHRha2luZyBhcHBsaWNhdGlvbiBkZXBsb3llZCBvbiA8YiBjbGFzcz1cImhlcmtvdVwiPkhlcm9rdTwvYj4gdG8gc2hvdyBiYWNrZW5kIHNlcnZlciBkZXZlbG9wbWVudCEgQmVsb3cgYXJlIHRoZSBsaW5rcyBmb3IgdGhlIEdpdEh1YiByZXBvc2l0b3J5IGFuZCBkZXBsb3kgPGIgY2xhc3M9XCJoZXJrb3VcIj5IZXJva3U8L2I+IHBhZ2UhPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icmFuZG9uZm9yZGQvbm90ZXRha2VyXCIgY2xhc3M9XCJidG4gcC1idG4tY29sb3IgYnRuLWxnIGN1c3RvbS1sZW5ndGgtcHNcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxiPkdpdEh1YiA8L2I+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2ludGVuc2UtcmV0cmVhdC0xMzM4NC5oZXJva3VhcHAuY29tL1wiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnIGN1c3RvbS1sZW5ndGgtc3NcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaWNvbj1cInNpbXBsZS1pY29uczpoZXJva3VcIiBkYXRhLWlubGluZT1cImZhbHNlXCI+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGFkZGluZ1RvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGgtMTAwIGN1c3RvbUNhcmRcIj5cclxuICAgICAgICA8SW1hZ2UgY2xhc3M9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9naWZzL3JlYWRtZV9wcmV2aWV3LmdpZlwiIGFsdD1cInJlYWRtZV9nZW5lcmF0b3JcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My41fSAvPiBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgZ3JvdXAtY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIFwiPjxpbnM+UmVhZG1lIEdlbmVyYXRvcjwvaW5zPjwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+VXNpbmcgPGIgY2xhc3M9XCJub2RlXCI+bm9kZS5qczwvYj4gYW5kIDxiIGNsYXNzPVwiamF2YXNjcmlwdFwiPkphdmFzY3JpcHQ8L2I+IHlvdSBjYW4gZ2VuZXJhdGUgY3VzdG9tIHJlYWRtZSBmaWxlcyBmb3IgYW55IHdvcmsgZmxvdy4gQmVsb3cgYXJlIHRoZSBsaW5rcyBmb3IgdGhlIEdpdEh1YiByZXBvc2l0b3J5IGZvciBtb3JlIGluZm9ybWF0aW9uITwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnJhbmRvbmZvcmRkL3JlYWRtZV9nZW5lcmF0b3JcIiBjbGFzcz1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wcFwiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzcz1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGFkZGluZ1RvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGgtMTAwIGN1c3RvbUNhcmRcIj5cclxuICAgICAgICA8SW1hZ2UgY2xhc3M9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9naWZzL3RlYW1fcHJvZmlsZS5naWZcIiBhbHQ9XCJ0ZWFtY2FyZF9nZW5lcmF0b3JcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My41fSAvPiBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgZ3JvdXAtY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIFwiPjxpbnM+VGVhbSBQcm9maWxlIEdlbmVyYXRvcjwvaW5zPjwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+VXNpbmcgPGIgY2xhc3M9XCJub2RlXCI+bm9kZS5qczwvYj4gYW5kIDxiIGNsYXNzPVwiamF2YXNjcmlwdFwiPkphdmFzY3JpcHQ8L2I+IHlvdSBjYW4gZ2VuZXJhdGUgY3VzdG9tIFRlYW0gUHJvZmlsZSBodG1sIGZpbGUgdG8gZml0IGFueSB3b3JrIGZsb3cuIEJlbG93IGFyZSB0aGUgbGlua3MgZm9yIHRoZSBHaXRIdWIgcmVwb3NpdG9yeSBmb3IgbW9yZSBpbmZvcm1hdGlvbiE8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JyYW5kb25mb3JkZC90ZWFtY2FyZF9nZW5lcmF0b3JcIiBjbGFzcz1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wcFwiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzcz1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGFkZGluZ1RvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGgtMTAwIGN1c3RvbUNhcmQgIFwiPlxyXG4gICAgICAgIDxJbWFnZSBjbGFzcz1cImNhcmQtaW1nLXRvcCBtYWluLWltZy1oZWlnaHRcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90LXdlYXRoZXJhcHAucG5nXCIgYWx0PVwid2VhdGhlcl9hcHBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My41fSAvPiBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgZ3JvdXAtY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+PGlucz5XZWF0aGVyIERhc2hib2FyZDwvaW5zPjwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+VGhpcyBpcyBhIHdlYXRoZXIgZGFzaGJvYXJkIG1hZGUgd2l0aCA8YiBjbGFzcz1cIm1vbWVudFwiPk9wZW5XZWF0aGVyIEFwaTwvYj4hIEJlbG93IGFyZSB0aGUgbGlua3MgZm9yIHRoZSBHaXRIdWIgcmVwb3NpdG9yeSBhbmQgd2VicGFnZTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnJhbmRvbmZvcmRkL3dlYXRoZXJfYXBwXCIgY2xhc3M9XCJidG4gcC1idG4tY29sb3IgYnRuLWxnIGN1c3RvbS1sZW5ndGgtcHNcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxiPkdpdEh1YiA8L2I+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2JyYW5kb25mb3JkZC5naXRodWIuaW8vd2VhdGhlcl9hcHAvXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbGcgY3VzdG9tLWxlbmd0aC1zc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGkgY2xhc3M9XCJmYXMgZmEtd2luZG93LW1heGltaXplXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGFkZGluZ1RvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGgtMTAwIGN1c3RvbUNhcmRcIj5cclxuICAgICAgICA8SW1hZ2UgY2xhc3M9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdC1wYXNzZ2VuLnBuZ1wiIGFsdD1cInBhc3N3b3JkX2dlbmVyYXRvclwiIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjV9IC8+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBncm91cC1jYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj48aW5zPlBhc3N3b3JkIEdlbmVyYXRvcjwvaW5zPjwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IGhcIj5UaGlzIGlzIGEgcGFzc3dvcmQgZ2VuZXJhdG9yIG1hZGUgd2l0aCA8YiBjbGFzcz1cImphdmFzY3JpcHRcIj5qYXZhc2NyaXB0PC9iPiEgQmVsb3cgYXJlIHRoZSBsaW5rcyBmb3IgdGhlIEdpdEh1YiByZXBvc2l0b3J5IGFuZCB3ZWJwYWdlPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icmFuZG9uZm9yZGQvcGFzc3dvcmRfZ2VuZXJhdG9yXCIgY2xhc3M9XCJidG4gcC1idG4tY29sb3IgYnRuLWxnIGN1c3RvbS1sZW5ndGgtcHNcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxiPkdpdEh1YiA8L2I+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2JyYW5kb25mb3JkZC5naXRodWIuaW8vcGFzc3dvcmRfZ2VuZXJhdG9yL1wiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnICBjdXN0b20tbGVuZ3RoLXNzXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48aSBjbGFzcz1cImZhcyBmYS13aW5kb3ctbWF4aW1pemVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbCBwYWRkaW5nVG9wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgaC0xMDAgY3VzdG9tQ2FyZFwiPlxyXG4gICAgICAgIDxJbWFnZSBjbGFzcz1cImNhcmQtaW1nLXRvcCBtYWluLWltZy1oZWlnaHRcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90LWphdmFxdWl6LnBuZ1wiIGFsdD1cImphdmFzY3JpcHRfcXVpelwiIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjV9IC8+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBncm91cC1jYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj48aW5zPkphdmFzY3JpcHQgUXVpejwvaW5zPjwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+VGhpcyBpcyBhIEphdmFzY3JpcHQgUXVpeiB1c2luZyBvbmx5IDxiIGNsYXNzPVwiamF2YXNjcmlwdFwiPmphdmFzY3JpcHQ8L2I+ISBCZWxvdyBhcmUgdGhlIGxpbmtzIGZvciB0aGUgR2l0SHViIHJlcG9zaXRvcnkgYW5kIHdlYnBhZ2U8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JyYW5kb25mb3JkZC9qYXZhc2NyaXB0X3F1aXpcIiBjbGFzcz1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzcz1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vYnJhbmRvbmZvcmRkLmdpdGh1Yi5pby9qYXZhc2NyaXB0X3F1aXovXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbGcgY3VzdG9tLWxlbmd0aC1zc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGkgY2xhc3M9XCJmYXMgZmEtd2luZG93LW1heGltaXplXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGFkZGluZ1RvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGgtMTAwIGN1c3RvbUNhcmRcIj5cclxuICAgICAgICA8SW1hZ2UgY2xhc3M9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdC1kYXlwbGFubmVyLnBuZ1wiIGFsdD1cImRheV9wbGFubmVyXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIHdpZHRoPXs2fSBoZWlnaHQ9ezMuNX0gLz4gXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGdyb3VwLWNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPjxpbnM+RGF5IFBsYW5uZXI8L2lucz48L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlRoaXMgaXMgYSBkYXkgcGxhbm5lciB1c2luZyA8YiBjbGFzcz1cImphdmFzY3JpcHRcIj5KYXZhc2NyaXB0PC9iPiBhbmQgPGIgY2xhc3M9XCJtb21lbnRcIj5tb21lbnQuanM8L2I+ISBCZWxvdyBhcmUgdGhlIGxpbmtzIGZvciB0aGUgR2l0SHViIHJlcG9zaXRvcnkgYW5kIHdlYnBhZ2U8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JyYW5kb25mb3JkZC9kYXlfcGxhbm5lclwiIGNsYXNzPVwiYnRuIHAtYnRuLWNvbG9yIGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXBzXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48Yj5HaXRIdWIgPC9iPjxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1Yi1zcXVhcmVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9icmFuZG9uZm9yZGQuZ2l0aHViLmlvL2RheV9wbGFubmVyL1wiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnIGN1c3RvbS1sZW5ndGgtc3NcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXdpbmRvdy1tYXhpbWl6ZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sIHBhZGRpbmdUb3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBoLTEwMCBjdXN0b21DYXJkXCI+XHJcbiAgICAgICAgPEltYWdlIGNsYXNzPVwiY2FyZC1pbWctdG9wIG1haW4taW1nLWhlaWdodFwiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2hvcmlzZW9uX3NpdGUucG5nXCIgYWx0PVwiaG9yaXNlb25fd2Vic2l0ZVwiIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjV9IC8+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBncm91cC1jYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgXCI+PGlucz5Ib3Jpc29uIFNpdGUgUmVmcmFjdG1lbnQ8L2lucz48L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlRoaXMgYXNzaWdubWVudCB3YXMgdG8gPGIgY2xhc3M9XCJyZWZyYWN0XCI+cmVmcmFjdDwvYj4gYSBwcmUtbWFkZSBzaXRlIGNhbGxlZCBIb3Jpc29uISBCZWxvdyBhcmUgdGhlIGxpbmtzIGZvciB0aGUgR2l0SHViIHJlcG9zaXRvcnkgYW5kIHdlYnBhZ2UhPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icmFuZG9uZm9yZGQvaG9yaXNlb25fcmVmYWN0b3JcIiBjbGFzcz1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzcz1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vYnJhbmRvbmZvcmRkLmdpdGh1Yi5pby9ob3Jpc2Vvbl9yZWZhY3Rvci9cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXNzXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48aSBjbGFzcz1cImZhcyBmYS13aW5kb3ctbWF4aW1pemVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGhyPjwvaHI+XHJcbiAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VtZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJyZXN1bWVcIiBjbGFzcz1cInJlc3VtZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+UmVzdW1lPC9oMj5cclxuICAgICAgICAgIDxwPldlbGNvbWUgdG8gbXkgcmVzdW1lISBCZWxvdyB5b3UnbGwgZmluZCBteSBwcmV2aW91cyB3b3JrIGV4cGVyaWVuY2UgYW5kIGtub3dsZWRnZSEgRW5qb3kgYW5kIENvbnRhY3QgbWUgaWYgeW91IGhhdmUgYW55IHF1ZXN0aW9uczopPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicmVzdW1lLXRpdGxlXCI+U3VtbWFyeTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bWUtaXRlbSBwYi0wXCI+XHJcbiAgICAgICAgICAgICAgPGg0PkJyYW5kb24gRm9yZDwvaDQ+XHJcbiAgICAgICAgICAgICAgPHA+PGVtPlxyXG4gICAgICAgICAgICAgICAgUmVsaWFibGUsIHF1YWxpdHktZm9jdXNlZCBjb25zdHJ1Y3Rpb24gdGVjaG5pY2lhbi8gdXBjb21pbmcgV2ViIERldmVsb3BlclxyXG4gICAgICAgICAgICAgICAgc2Vla2luZyBvcHBvcnR1bml0aWVzIHRvIGxlYXJuIG5ldyBza2lsbHMgYW5kIGRldmVsb3Agb24gdGhlIGpvYiBleHBlcmllbmNlIGluIHRoZVxyXG4gICAgICAgICAgICAgICAgdGVjaG5vbG9neSBpbmR1c3RyeS4gVGhyb3VnaCBteSB3b3JrIGV4cGVyaWVuY2UgYW5kIHBlcnNvbmFsIGludGVyZXN0cywgSSBhbSBhXHJcbiAgICAgICAgICAgICAgICBxdWljayBzdHVkeSBhbmQgY2FuIGxlYXJuIG5ldyBza2lsbHMgd2l0aCBoYW5kcy1vbiB0cmFpbmluZy4gTG9va2luZyBmb3J3YXJkIHRvXHJcbiAgICAgICAgICAgICAgICBwcm92aWRpbmcgbXkgc2tpbGxzIGluIGFuIGVudmlyb25tZW50IHdoZXJlIEkgY2FuIGdyb3cgYW5kIG1ha2UgYSBkaWZmZXJlbmNlLlxyXG4gICAgICAgICAgICAgIDwvZW0+PC9wPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5Bc2hicnVuIDIwMTQ3LCBWaXJnaW5pYTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+KDU3MSkgNDIwLTk1MjA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPmJyYW5kb24uZm9yZC42MTdAZ21haWwuY29tPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInJlc3VtZS10aXRsZVwiPkVkdWNhdGlvbjwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bWUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxoND4gQWR2YW5jZWQgSmF2YXNjcmlwdCAmYW1wOyBGcm9udCBhbmQgQmFjayBFbmQgV2ViIERlc2lnbjwvaDQ+XHJcbiAgICAgICAgICAgICAgPGg1PjIwMjEgLSAyMDIxPC9oNT5cclxuICAgICAgICAgICAgICA8cD48ZW0+R2VvcmdlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSwgQXNoYnVybiAsIFZBPC9lbT48L3A+XHJcbiAgICAgICAgICAgICAgPHA+IEFuIG9ubGluZSBCb290Y2FtcCBkZXNpZ25lZCB0byB0ZWFjaCBhZHZhbmNlZCBqYXZhc2NyaXB0IHNraWxsIHRvIGRldmVsb3Agd2Vic2l0ZXMsIGJ1aWxkIGEgY2FyZWVyIGluIHdlYiBkZXZlbG9wbWVudCwgYW5kIGxlYXJuIHRlY2huaWNhbCBza2lsbHMgaW4gdGhlIEphdmFzY3JpcHQgbGFuZ3VhZ2UuIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMTAwXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInJlc3VtZS10aXRsZVwiPlByb2Zlc3Npb25hbCBFeHBlcmllbmNlPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VtZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGg0PkNvbnN0cnVjdGlvbiBUZWNobmljaWFuIDwvaDQ+XHJcbiAgICAgICAgICAgICAgPGg1PjIwMTggLSAyMDIxPC9oNT5cclxuICAgICAgICAgICAgICA8cD48ZW0+Q29ubm9yIENvbnN0cnVjdGlvbiwgQXJsaW5ndG9uLCBWQSA8L2VtPjwvcD5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+TGVhZCBjcmV3IG1lbWJlciBmb3IgaG9tZSBpbXByb3ZlbWVudCBwcm9qZWN0cyBwcm92aWRpbmcgZ3VpZGFuY2UsIGRpc3RyaWJ1dGUgd29yayB0YXNrcywgYW5kIGluc3BlY3Qgc2l0ZXMgYWZ0ZXIgY29tcGxldGlvbi48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkludGVyYWN0cyB3aXRoIGN1c3RvbWVycyBhbmQgaG9tZS1vd25lcnMgcmVwcmVzZW50aW5nIHRoZSBjb21wYW55IGFuZCBwcm92aWRpbmcgZXhjZWxsZW50IGN1c3RvbWVycyBzZXJ2aWNlLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+R2FpbmVkIHByYWN0aWNhbCBoYW5kcy1vbiBrbm93bGVkZ2Ugb2YgZGlmZmVyZW50IGFzcGVjdHMgb2YgaG9tZSByZW1vZGVsaW5nIHN1Y2ggYXMgZHJ5LXdhbGwsIGluc3VsYXRpb24sIGZsb29yaW5nLCBhbmQgb3RoZXIgZHV0aWVzLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+TW9uaXRvciB3b3Jrc2l0ZSB0byBlbnN1cmUgY29tcGxpYW5jZSB3aXRoIHNhZmV0eSByZWd1bGF0aW9ucy48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPiBFYXJuZWQgYSByZXB1dGF0aW9uIGFzIGEgdHJ1c3RlZCB0ZWNobmljaWFuLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+VHJhaW4gbmV3IGVtcGxveWVlcyBvbiBwcm9wZXIgaGFuZGxpbmcgb2YgZXF1aXBtZW50IGFuZCBzYWZldHkuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5QZXJmb3JtIHNwZWNpYWwgZHV0aWVzIGZvciBvdGhlciBwcm9qZWN0cyBhbmQgYXNzaXN0IG90aGVycyB3aGVuIG5lZWRlZC48L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdW1lLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8aDQ+RnJvbnQtRGVzayBBc3Npc3RhbnQ8L2g0PlxyXG4gICAgICAgICAgICAgIDxoNT4yMDE3IC0gMjAxODwvaDU+XHJcbiAgICAgICAgICAgICAgPHA+PGVtPkxhIEZpdG5lc3MsIExlZXNlYnVyZywgVkE8L2VtPjwvcD5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+Q2hlY2tlZCBpbiBndWVzdHMgbG9va2luZyB0byB3b3JrIG91dCBhbmQgbWFkZSBzdXJlIG5vIG9uZSBzbnVjayBpbi48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkhlbHAgc2FsZXMgYnkgY2FsbGluZyBndWVzdHMgd2hvIGhhZCBvdmVyZHVlIHBheW1lbnRzIGFuZCBtYWtpbmcgc2FsZSBjYWxscyBmb3IgbmV3IG1lbWJlcnNoaXBzLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+IENsZWFyIHdlaWdodHMgYW5kIHNldHMgYXQgdGhlIGVuZCBvZiBlYWNoIGRheS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkhlbHBzIGd1ZXN0cyB3aG8gaGFkIGlzc3VlcyB3aXRoIHRoZXJlIG1lbWJlcnNoaXBzLjwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL1Byb2plY3RzJztcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcbmltcG9ydCBBYm91dCBmcm9tICcuL0Fib3V0JztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcclxuaW1wb3J0IFJlc3VtZSBmcm9tICcuL1Jlc3VtZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW9Db250YWluZXIoKSB7XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgnQWJvdXQnKTtcclxuXHJcbiAgLy8gVGhpcyBtZXRob2QgaXMgY2hlY2tpbmcgdG8gc2VlIHdoYXQgdGhlIHZhbHVlIG9mIGBjdXJyZW50UGFnZWAgaXMuIERlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgY3VycmVudFBhZ2UsIHdlIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyBjb21wb25lbnQgdG8gcmVuZGVyLlxyXG4gIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFBhZ2UgPT09ICdBYm91dCcpIHtcclxuICAgICAgcmV0dXJuIDxBYm91dCAvPjtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50UGFnZSA9PT0gJ0NvbnRhY3QnKSB7XHJcbiAgICAgIHJldHVybiA8Q29udGFjdCAvPjtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50UGFnZSA9PT0gJ1Byb2plY3RzJykge1xyXG4gICAgICByZXR1cm4gPFByb2plY3RzIC8+O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxSZXN1bWUgLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlKSA9PiBzZXRDdXJyZW50UGFnZShwYWdlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJtYWluXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJkaXNwbGF5XCIgY2xhc3M9e3N0eWxlcy5kaXNwbGF5fT5cclxuICAgICAgICB7LyogV2UgYXJlIHBhc3NpbmcgdGhlIGN1cnJlbnRQYWdlIGZyb20gc3RhdGUgYW5kIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgaXQgKi99XHJcbiAgICAgICAgPE5hdmlnYXRpb24gY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSBoYW5kbGVQYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfSAvPlxyXG4gICAgICAgIHsvKiBIZXJlIHdlIGFyZSBjYWxsaW5nIHRoZSByZW5kZXJQYWdlIG1ldGhvZCB3aGljaCB3aWxsIHJldHVybiBhIGNvbXBvbmVudCAgKi99XHJcbiAgICAgICAge3JlbmRlclBhZ2UoKX1cclxuICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImlucHV0R3JvdXBcIjogXCJIb21lX2lucHV0R3JvdXBfXzNqMUhBXCIsXG5cdFwiaW5wdXRMYWJlbFwiOiBcIkhvbWVfaW5wdXRMYWJlbF9fOXRBWGZcIixcblx0XCJpbnB1dEZpZWxkXCI6IFwiSG9tZV9pbnB1dEZpZWxkX18zZ293VlwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0IiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZm9yRWFjaCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImIiLCJnZXRXaWR0aHMiLCJ3aWR0aCIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsIm1hcCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0Iiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImFkZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibG9hZGluZyIsImxhenlCb3VuZGFyeSIsImNsYXNzTmFtZSIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJjb25zb2xlIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJsdXJTdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJmbG93IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJ1cmwiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidXNlUmVmIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJ1c2VFZmZlY3QiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvcHRpb25zIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJSZWFjdCIsIkltYWdlIiwic3R5bGVzIiwic2tpbGxiYXJPbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhbmltYXRpb24iLCJza2lsbGJhclR3byIsInNraWxsYmFyVGhyZWUiLCJvbmVTIiwidHdvUyIsInRocmVlUyIsImZvdXJTIiwiZml2ZVMiLCJzaXhTIiwic2V2ZW5TIiwiZWlnaHRTIiwibmluZVMiLCJ0ZW5TIiwiZWxldmVuUyIsInR3ZWx2ZVMiLCJBYm91dCIsIkZvcm0iLCJIZWFkIiwiSG9tZSIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInN1YmplY3QiLCJzZXRTdWJqZWN0IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2ciLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJlcyIsInN0YXR1cyIsIkZvb3RlciIsImN1cnJlbnRQYWdlIiwiaGFuZGxlUGFnZUNoYW5nZSIsImZvb3RlciIsIk5hdmJhciIsIk5hdiIsIk5hdkRyb3Bkb3duIiwiRm9ybUNvbnRyb2wiLCJCdXR0b24iLCJOYXZJdGVtIiwiTGluayIsIk5hdmlnYXRpb24iLCJzaG93TmF2cyIsInNldFNob3dOYXZzIiwiUHJvamVjdHMiLCJSZXN1bWUiLCJDb250YWN0IiwiUG9ydGZvbGlvQ29udGFpbmVyIiwic2V0Q3VycmVudFBhZ2UiLCJyZW5kZXJQYWdlIiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=