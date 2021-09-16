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
        className: "col-md-12 col-lg-6 p-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-md-8 col-lg-10 aboutCard",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "profile-card-4 text-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: "/assets/images/me.jpg",
              alt: "me",
              width: "535",
              height: "510"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
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
                  lineNumber: 69,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "profile-description",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "linear-wipe-big",
                  children: "Hello, my name is Brandon Ford and this is my portfolio! I made this not only to showcase my various assignments and projects throughout my journey, but to also demonstrate skills in React and Next.js. For other versions of this portfolio please visit my Github!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
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
                          lineNumber: 78,
                          columnNumber: 30
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        className: "btn btn-floating m-1 icons",
                        href: "https://www.linkedin.com/in/brandonfordd/",
                        role: "button",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                          className: "fab fa-linkedin"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 81,
                          columnNumber: 30
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
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
                          lineNumber: 84,
                          columnNumber: 30
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 83,
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
                          lineNumber: 87,
                          columnNumber: 30
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        role: "button",
                        target: "_blank",
                        className: "btn btn-floating m-1 resumePBtn noWrap ",
                        href: "/assets/downloads/brandonford_resume.pdf",
                        download: true,
                        children: [" Download Resume ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                          className: "far fa-file-pdf"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 89,
                          columnNumber: 186
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-12 col-lg-6 p-5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-sm-12 col-md-12 col-lg-12 container skillsWrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "container d-flex ",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "skillsTitle container",
              children: [" Skills", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                id: "gear1",
                className: "fa fa-5x fa-gear spin p-primary-color"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                id: "gear2",
                className: "fa fa-5x fa-gear spin-back p-tertiary-color"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                id: "gear3",
                className: "fa fa-5x fa-gear spin-back p-tertiary-color"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-12",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
              className: "hrSkills"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
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
                  lineNumber: 110,
                  columnNumber: 54
                }, this), " Front End Web Development "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "75%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.skillbarOne
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
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
                  lineNumber: 115,
                  columnNumber: 47
                }, this), " HTML  "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "95%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.oneS
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
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
                  lineNumber: 120,
                  columnNumber: 47
                }, this), " CSS Frameworks |", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  children: " Bootstrap, Foundation"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 99
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "90%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.twoS
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
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
                  lineNumber: 125,
                  columnNumber: 47
                }, this), " JavaScript |", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  children: " JQuery, Node, Moment"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 96
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "80%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.threeS
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 124,
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
                  lineNumber: 130,
                  columnNumber: 47
                }, this), " React | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  children: " Next.js, Webpack, GraphQL"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 88
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "70%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.fourS
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
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
                  lineNumber: 137,
                  columnNumber: 54
                }, this), " Back End Web Development "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "60%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.skillbarTwo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
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
                  lineNumber: 142,
                  columnNumber: 47
                }, this), " Databases |", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  children: " MySql, MongoDB "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 94
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "45%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.fiveS
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 141,
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
                  lineNumber: 147,
                  columnNumber: 47
                }, this), " APIs "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "90%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.sixS
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 146,
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
                  lineNumber: 152,
                  columnNumber: 47
                }, this), " Servers |", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  children: " Heroku, Apollo, Express"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 90
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "70%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.sevenS
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 151,
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
                  lineNumber: 157,
                  columnNumber: 47
                }, this), "Network ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 96
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "50%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.eightS
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
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
                  lineNumber: 164,
                  columnNumber: 47
                }, this), " Software Development Life Cycle "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "90%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.skillbarThree
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
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
                  lineNumber: 169,
                  columnNumber: 47
                }, this), " Development  | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  children: " Inspect, Insomia, Next.js "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 97
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "95%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.nineS
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
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
                  lineNumber: 174,
                  columnNumber: 47
                }, this), " Testing "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "90%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.tenS
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
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
                  lineNumber: 179,
                  columnNumber: 47
                }, this), " Analysis "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "80%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.elevenS
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
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
                  lineNumber: 184,
                  columnNumber: 47
                }, this), " Deployment | ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  children: " Heroku, Vercel, Github "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 103
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skill-bar-percent",
                children: "90%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "skillbar-bar",
                style: styles.twelveS
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
                className: "hrAbout"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "contact",
    className: "contact container mt-5",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "section-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Like to reach out? Contact me from the form below and watch out for an email!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        "data-aos": "fade-in",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-lg-5 d-flex align-items-stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 d-flex align-items-stretch",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            action: "forms/contact.php",
            method: "post",
            className: "php-email-form",
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
                  columnNumber: 17
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
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-group col-md-5",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  htmlFor: "exampleInputEmail1",
                  children: "Email address"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 17
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
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-group col-md-4",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  htmlFor: "name",
                  children: "Subject"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 17
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
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: "message",
                children: "Message"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 15
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
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "submit",
              className: "btn p-btn-color custom-length",
              onClick: e => {
                handleSubmit(e);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 3
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
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "react-bootstrap/Dropdown");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/DropdownButton */ "react-bootstrap/DropdownButton");
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar, {
    expand: "lg",
    className: "navbar sticky-top navbar-expand-lg p-background-color ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Brand, {
      className: "navbar-brand p-font-color nav-brand-custom swing linear-wipe",
      href: "/",
      children: " Brandon Ford's Portfolio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Toggle, {
      className: "navbar-toggler navbarBtn custom-toggler",
      "aria-controls": "basic-navbar-nav"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Collapse, {
      id: "basic-navbar-nav",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, {
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
            lineNumber: 25,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#projects",
            onClick: () => handlePageChange('Projects') // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            ,
            className: currentPage === 'Projects' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc',
            children: "My Work"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
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
            lineNumber: 46,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item nav-item-dropdown",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "m-lc",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_3___default()), {
              title: "Resume",
              id: "resume-dropdown",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default().Item), {
                href: "#resume",
                onClick: () => handlePageChange('Resume'),
                children: "View Resume"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default().Item), {
                href: "/assets/downloads/brandonford_resume.pdf",
                download: true,
                children: "Download Resume"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/react */ "@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\15714\\Documents\\code\\personal\\next-portfolio\\pages\\Projects\\index.js";


 // images and gifs imports

function Projects() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container work-body",
    id: "work",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "projectsTitle",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "fas fa-angle-double-right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 37
      }, this), " Projects"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card customCard",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "card-img-top main-img-height",
        src: "/assets/images/pandorabox_screenshot.png",
        alt: "patienttracker",
        layout: "responsive",
        width: 6,
        height: 3.7
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card-body main-card-body d-flex flex-column",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "card-title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
            children: "Pandoras Box"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "card-text h5",
          children: "Full stack application foLLowing the M.E.R.N diagram. This application utilizes technology's like Next.js, React, and GraghQL to help the workflow and better the quality of the application all together. Below are the links for the GitHub repository and Vercel webpage!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card-footer",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-center mt-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            rel: "noreferrer",
            href: "https://github.com/AustinJoo97/Pandoras-Box",
            className: "btn p-btn-color btn-lg  custom-length-pm",
            role: "button",
            "aria-pressed": "true",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "GitHub "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 187
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fab fa-github-square"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 201
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            rel: "noreferrer",
            href: "https://github.com/AustinJoo97/Pandoras-Box",
            className: "btn btn-secondary btn-lg  custom-length-sm",
            role: "button",
            "aria-pressed": "true",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fas fa-window-maximize"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 189
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card customCard",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "card-img-top main-img-height",
        src: "/assets/gifs/patienttrackergif.gif",
        alt: "patienttracker",
        layout: "responsive",
        width: 6,
        height: 3.7
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card-body main-card-body d-flex flex-column",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "card-title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
            children: "MVC Patient Tracker"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "card-text h5",
          children: ["Full stack application following MVC paradigm for creating, updating, sorting and deleting patient records. Below are the links for the GitHub repository and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            className: "herkou",
            children: "Heroku"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 197
          }, this), " webpage!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card-footer",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-center mt-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            rel: "noreferrer",
            href: "https://github.com/Captain63/patient-records-tracker",
            className: "btn p-btn-color btn-lg  custom-length-pm",
            role: "button",
            "aria-pressed": "true",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "GitHub "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 196
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fab fa-github-square"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 210
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            rel: "noreferrer",
            href: "https://patient-records-tracker.herokuapp.com",
            className: "btn btn-secondary btn-lg  custom-length-sm",
            role: "button",
            "aria-pressed": "true",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fas fa-window-maximize"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 191
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card customCard",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "card-img-top main-img-height",
        src: "/assets/images/moivenight_screenshot.png",
        alt: "moivenightdoneright",
        layout: "responsive",
        width: 6,
        height: 3.7
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card-body main-card-body d-flex flex-column",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "card-title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
            children: "Movie Night.. Done Right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 38
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "card-text h5",
          children: ["This assignment was my first group Project! Using ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            className: "html",
            children: "html"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 89
          }, this), ", ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            className: "css",
            children: "css"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 119
          }, this), ", and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            className: "javascript",
            children: "javascript"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 151
          }, this), " we made a movie catalog! Below are the links for the GitHub repository and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            className: "herkou",
            children: "Heroku"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 267
          }, this), " webpage!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card-footer",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-center mt-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            rel: "noreferrer",
            href: "https://github.com/AustinJoo97/MovieNightDoneRight",
            className: "btn p-btn-color btn-lg  custom-length-pm",
            role: "button",
            "aria-pressed": "true",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "GitHub "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 194
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fab fa-github-square"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 208
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            rel: "noreferrer",
            href: "https://austinjoo97.github.io/MovieNightDoneRight/",
            className: "btn btn-secondary btn-lg  custom-length-sm",
            role: "button",
            "aria-pressed": "true",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fas fa-window-maximize"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 196
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "assignmentsTitleWrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "assignmentsTitle",
        id: "assignments",
        children: ["Assignments ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fas fa-angle-double-left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 71
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row row-cols-1 row-cols-md-3 g-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/gifs/mern.gif",
            alt: "mern",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "M.E.R.N"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 43
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: [" Full stack web application utilizing the mern work stack. Below is the link to the Github and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "herkou",
                children: "Heroku"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 135
              }, this), " page"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/mern-book-search",
                className: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 195
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 209
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://joli-vin-25718.herokuapp.com/",
                className: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                  className: "iconify",
                  icon: "simple-icons:heroku",
                  "data-inline": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 186
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/gifs/pwa.gif",
            alt: "pwa",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Progressive Web Application"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 43
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: [" Full stack web application to track your spending's on the fly by utilizing webpack to run offline. Below is the link to the Github and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "herkou",
                children: "Heroku"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 182
              }, this), " page"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/progressive-web-app",
                className: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 198
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 212
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://calm-crag-38234.herokuapp.com/",
                className: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                  className: "iconify",
                  icon: "simple-icons:heroku",
                  "data-inline": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 187
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/gifs/mdb_workout.gif",
            alt: "mdb_workout",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Workout Tracker/MongoDB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 43
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: [" Full stack web application to track workout's, utilizing MongoDB for the backend. Below is the link to the Github and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "herkou",
                children: "Heroku"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 164
              }, this), " page"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/mvc_techblog",
                className: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 191
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 205
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://infinite-sands-02853.herokuapp.com/",
                className: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                  className: "iconify",
                  icon: "simple-icons:heroku",
                  "data-inline": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 192
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/images/regex-url.png",
            alt: "regextutorial",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Regex Tutorial"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 43
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: " This is a tutorial describing how the regex for matching a URL works. Below is the repository for the Gist on Github!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://gist.github.com/brandonfordd/2fc4ca41dec6a856e25334ac65ba7dac",
                className: "btn p-btn-color btn-lg custom-length-pp",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub Gist "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 216
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 235
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/images/mvctech.png",
            alt: "mvctech",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "MVC Techblog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 43
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: [" Building a full stack website for tech bloggers to post, update, and delete blogs! Below is the link to the Github and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "herkou",
                children: "Heroku"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 160
              }, this), " page"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/mvc_techblog",
                className: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 191
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 205
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://immense-lake-51774.herokuapp.com/",
                className: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                  className: "iconify",
                  icon: "simple-icons:heroku",
                  "data-inline": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 190
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/gifs/sql_gif.gif",
            alt: "mysqltracker",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Employee Tracker"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 43
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: "Using MySql we were task with designing a database for sorting and tracking employee! Below is the Github for more information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/sql_employee_tracker",
                className: "btn p-btn-color btn-lg custom-length-pp",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 199
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 213
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/gifs/categories.gif",
            alt: "ecommercebackend",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "E-Commerce Backend"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 43
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: " Using MySql we were task with building the back end for an e-commerce site using Express.js and Sequelize. Below is the GitHub repository for more information!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/e_commerce_backend",
                className: "btn p-btn-color btn-lg custom-length-pp",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 197
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 211
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/gifs/notetaker_ppreview.gif",
            alt: "notetaker",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Express Note Taker"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 43
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: ["This is a Express Note taking application deployed on ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "herkou",
                children: "Heroku"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 94
              }, this), " to show backend server development! Below are the links for the GitHub repository and deploy ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "herkou",
                children: "Heroku"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 220
              }, this), " page!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/notetaker",
                className: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 188
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 202
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://intense-retreat-13384.herokuapp.com/",
                className: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                  className: "iconify",
                  icon: "simple-icons:heroku",
                  "data-inline": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 193
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/gifs/readme_preview.gif",
            alt: "readme_generator",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Readme Generator"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 43
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: ["Using ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "node",
                children: "node.js"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 46
              }, this), " and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "javascript",
                children: "Javascript"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 82
              }, this), " you can generate custom readme files for any work flow. Below are the links for the GitHub repository for more information!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/readme_generator",
                className: "btn p-btn-color btn-lg custom-length-pp",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 195
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 209
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/gifs/team_profile.gif",
            alt: "teamcard_generator",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Team Profile Generator"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 43
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: ["Using ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "node",
                children: "node.js"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 46
              }, this), " and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "javascript",
                children: "Javascript"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 82
              }, this), " you can generate custom Team Profile html file to fit any work flow. Below are the links for the GitHub repository for more information!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/teamcard_generator",
                className: "btn p-btn-color btn-lg custom-length-pp",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 197
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 211
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard  ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/images/screenshot-weatherapp.png",
            alt: "weather_app",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Weather Dashboard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 42
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: ["This is a weather dashboard made with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "moment",
                children: "OpenWeather Api"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 78
              }, this), "! Below are the links for the GitHub repository and webpage"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/weather_app",
                className: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 190
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 204
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://brandonfordd.github.io/weather_app/",
                className: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fas fa-window-maximize"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 192
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/images/screenshot-passgen.png",
            alt: "password_generator",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Password Generator"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 42
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text h",
              children: ["This is a password generator made with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "javascript",
                children: "javascript"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 81
              }, this), "! Below are the links for the GitHub repository and webpage"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/password_generator",
                className: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 197
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 211
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://brandonfordd.github.io/password_generator/",
                className: "btn btn-secondary btn-lg  custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fas fa-window-maximize"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 200
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/images/screenshot-javaquiz.png",
            alt: "javascript_quiz",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Javascript Quiz"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 42
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: ["This is a Javascript Quiz using only ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "javascript",
                children: "javascript"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 77
              }, this), "! Below are the links for the GitHub repository and webpage"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/javascript_quiz",
                className: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 194
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 208
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://brandonfordd.github.io/javascript_quiz/",
                className: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fas fa-window-maximize"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 196
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/images/screenshot-dayplanner.png",
            alt: "day_planner",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Day Planner"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 42
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: ["This is a day planner using ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "javascript",
                children: "Javascript"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 68
              }, this), " and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "moment",
                children: "moment.js"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 113
              }, this), "! Below are the links for the GitHub repository and webpage"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/day_planner",
                className: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 190
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 204
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://brandonfordd.github.io/day_planner/",
                className: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fas fa-window-maximize"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 192
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col paddingTop",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card h-100 customCard",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: "card-img-top main-img-height",
            src: "/assets/images/horiseon_site.png",
            alt: "horiseon_website",
            layout: "responsive",
            width: 6,
            height: 3.5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body group-card-body d-flex flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "card-title ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ins", {
                children: "Horison Site Refractment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 284,
                columnNumber: 43
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "card-text",
              children: ["This assignment was to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                className: "refract",
                children: "refract"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 63
              }, this), " a pre-made site called Horison! Below are the links for the GitHub repository and webpage!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-footer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "text-center mt-auto",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://github.com/brandonfordd/horiseon_refactor",
                className: "btn p-btn-color btn-lg custom-length-ps",
                role: "button",
                "aria-pressed": "true",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "GitHub "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 289,
                  columnNumber: 196
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-github-square"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 289,
                  columnNumber: 210
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://brandonfordd.github.io/horiseon_refactor/",
                className: "btn btn-secondary btn-lg custom-length-ss",
                role: "button",
                "aria-pressed": "true",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fas fa-window-maximize"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 290,
                  columnNumber: 198
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 7
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "resume",
    className: "resume container mt-5",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "section-title",
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
        className: "row rowResume",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-lg-6",
          "data-aos": "fade-up",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "resume-title",
            children: "Summary"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "resume-item pb-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Brandon Ford"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
                children: "Reliable, quality-focused construction technician/ upcoming Web Developer seeking opportunities to learn new skills and develop on the job experience in the technology industry. Through my work experience and personal interests, I am a quick study and can learn new skills with hands-on training. Looking forward to providing my skills in an environment where I can grow and make a difference."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 18
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Ashbrun 20147, Virginia"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "(571) 420-9520"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "brandon.ford.617@gmail.com"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "resume-title",
            children: "Education"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "resume-item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: " Advanced Javascript & Front and Back End Web Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              children: "2021 - 2021"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
                children: "George Washington University, Ashburn , VA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 18
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: " An online Bootcamp designed to teach advanced javascript skill to develop websites, build a career in web development, and learn technical skills in the Javascript language. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-lg-6",
          "data-aos": "fade-up",
          "data-aos-delay": "100",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "resume-title",
            children: "Professional Experience"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "resume-item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Construction Technician "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              children: "2018 - 2021"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
                children: "Connor Construction, Arlington, VA "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 18
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Lead crew member for home improvement projects providing guidance, distribute work tasks, and inspect sites after completion."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Interacts with customers and home-owners representing the company and providing excellent customers service."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Gained practical hands-on knowledge of different aspects of home remodeling such as dry-wall, insulation, flooring, and other duties."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Monitor worksite to ensure compliance with safety regulations."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: " Earned a reputation as a trusted technician."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Train new employees on proper handling of equipment and safety."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Perform special duties for other projects and assist others when needed."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "resume-item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Front-Desk Assistant"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              children: "2017 - 2018"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
                children: "La Fitness, Leeseburg, VA"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 18
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Checked in guests looking to work out and made sure no one snuck in."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Help sales by calling guests who had overdue payments and making sale calls for new memberships."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: " Clear weights and sets at the end of each day."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: "Helps guests who had issues with there memberships."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);

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
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().display),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
        currentPage: currentPage,
        handlePageChange: handlePageChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().headerImg),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
          className: "img-fluid",
          src: "/assets/images/forest_main.jpg",
          alt: "forest",
          layout: "responsive",
          width: 2560,
          height: 734
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), renderPage(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
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
	"footer": "Home_footer__1WdhD",
	"headerImg": "Home_headerImg__2rj2W"
};


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "@iconify/react":
/*!*********************************!*\
  !*** external "@iconify/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@iconify/react");

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

/***/ "react-bootstrap/Dropdown":
/*!*******************************************!*\
  !*** external "react-bootstrap/Dropdown" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ "react-bootstrap/DropdownButton":
/*!*************************************************!*\
  !*** external "react-bootstrap/DropdownButton" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/DropdownButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQVVGLGNBQWMsQ0FBQ0UsSUFBRCxDQUFqRDs7QUFFQSxzQkFDRTtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQUEsMkJBQ0U7QUFBSyxRQUFFLEVBQUMsU0FBUjtBQUFrQixlQUFTLEVBQUVsRSx3RUFBN0I7QUFBQSw4QkFFRSw4REFBQyxnREFBRDtBQUFZLG1CQUFXLEVBQUU0QyxXQUF6QjtBQUFzQyx3QkFBZ0IsRUFBRUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBSyxpQkFBUyxFQUFFN0MsMEVBQWhCO0FBQUEsK0JBQ0EsOERBQUMsbURBQUQ7QUFBTyxtQkFBUyxFQUFDLFdBQWpCO0FBQTZCLGFBQUcsRUFBQyxnQ0FBakM7QUFBa0UsYUFBRyxFQUFDLFFBQXRFO0FBQStFLGdCQUFNLEVBQUMsWUFBdEY7QUFBbUcsZUFBSyxFQUFFLElBQTFHO0FBQWdILGdCQUFNLEVBQUU7QUFBeEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixFQU9HaUUsVUFBVSxFQVBiLGVBUUUsOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOzs7Ozs7Ozs7O0FDNUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEEsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0M7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3BhZ2VzL0Fib3V0L2luZGV4LmpzIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vcGFnZXMvQ29udGFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3BhZ2VzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3BhZ2VzL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vLi9wYWdlcy9Qcm9qZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3BhZ2VzL1Jlc3VtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvL2V4dGVybmFsIFwiQGljb25pZnkvcmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Ecm9wZG93blwiIiwid2VicGFjazovL25leHQtcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlMTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xudmFyIF90b0Jhc2U2NCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjRcIik7XG52YXIgX2ltYWdlQ29uZmlnID0gcmVxdWlyZShcIi4uL3NlcnZlci9pbWFnZS1jb25maWdcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldCgpO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWU7XG59XG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFtcbiAgICAnbGF6eScsXG4gICAgJ2VhZ2VyJyxcbiAgICB1bmRlZmluZWRcbl07XG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIGRlZmF1bHRMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2ltZ2l4JyxcbiAgICAgICAgaW1naXhMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgICBjbG91ZGluYXJ5TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdha2FtYWknLFxuICAgICAgICBha2FtYWlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2N1c3RvbScsXG4gICAgICAgIGN1c3RvbUxvYWRlclxuICAgIF0sIFxuXSk7XG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAgICdmaWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdpbnRyaW5zaWMnLFxuICAgICdyZXNwb25zaXZlJyxcbiAgICB1bmRlZmluZWQsIFxuXTtcbmZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLmRlZmF1bHQgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYykge1xuICAgIHJldHVybiBzcmMuc3JjICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgKGlzU3RhdGljUmVxdWlyZShzcmMpIHx8IGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO1xufVxuY29uc3QgeyBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMgLCBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzICwgbG9hZGVyOiBjb25maWdMb2FkZXIgLCBwYXRoOiBjb25maWdQYXRoICwgZG9tYWluczogY29uZmlnRG9tYWlucyAsICB9ID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgfHwgX2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbXG4gICAgLi4uY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgLi4uY29uZmlnSW1hZ2VTaXplc1xuXTtcbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmFsbFNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmZ1bmN0aW9uIGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcykge1xuICAgIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGhSZSA9IC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO1xuICAgICAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtYXRjaDsgbWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7IG1hdGNoKXtcbiAgICAgICAgICAgIHBlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoKHMpPT5zID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8IGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHdpZHRocyA9IFtcbiAgICAgICAgLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgICAgW1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovIFxuICAgICAgICBdLm1hcCgodyk9PmFsbFNpemVzLmZpbmQoKHApPT5wID49IHdcbiAgICAgICAgICAgICkgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSksIFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzLFxuICAgICAgICBraW5kOiAneCdcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7IHNyYyAsIHVub3B0aW1pemVkICwgbGF5b3V0ICwgd2lkdGggLCBxdWFsaXR5ICwgc2l6ZXMgLCBsb2FkZXIgIH0pIHtcbiAgICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHdpZHRocyAsIGtpbmQgIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpO1xuICAgIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICAgICAgc3JjU2V0OiB3aWR0aHMubWFwKCh3LCBpKT0+YCR7bG9hZGVyKHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd1xuICAgICAgICAgICAgfSl9ICR7a2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxfSR7a2luZH1gXG4gICAgICAgICkuam9pbignLCAnKSxcbiAgICAgICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgICAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgICAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICAgICAgc3JjOiBsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aHNbbGFzdF1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50KHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtcbiAgICBpZiAobG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHJvb3Q6IGNvbmZpZ1BhdGhcbiAgICAgICAgfSwgbG9hZGVyUHJvcHMpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO1xufVxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmMsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsICFpc1Zpc2libGUgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IHRydWUsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9KSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiB0cnVlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiAoaW1nKT0+e1xuICAgICAgICAgICAgc2V0UmVmKGltZyk7XG4gICAgICAgICAgICBoYW5kbGVMb2FkaW5nKGltZywgc3JjU3RyaW5nLCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2tpbGxiYXJPbmU6IHtcclxuICAgIHdpZHRoOiAnNzUlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigxNzAsIDU1LCA1MCknLFxyXG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0ZWQtYm9yZGVyU2tpbGxDIDEuNXMgaW5maW5pdGUnLFxyXG4gIH0sXHJcbiAgc2tpbGxiYXJUd286IHtcclxuICAgIHdpZHRoOiAnNjAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigxNzAsIDU1LCA1MCknLFxyXG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0ZWQtYm9yZGVyU2tpbGxDIDEuNXMgaW5maW5pdGUnLFxyXG4gIH0sXHJcbiAgc2tpbGxiYXJUaHJlZToge1xyXG4gICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDE3MCwgNTUsIDUwKScsXHJcbiAgICBhbmltYXRpb246ICdhbmltYXRlZC1ib3JkZXJTa2lsbEMgMS41cyBpbmZpbml0ZScsXHJcbiAgfSxcclxuICBvbmVTOiB7XHJcbiAgICB3aWR0aDogJzk1JScsXHJcbiAgfSxcclxuICB0d29TOiB7XHJcbiAgICB3aWR0aDogJzkwJScsXHJcbiAgfSxcclxuICB0aHJlZVM6IHtcclxuICAgIHdpZHRoOiAnODAlJyxcclxuICB9LFxyXG4gIGZvdXJTOiB7XHJcbiAgICB3aWR0aDogJzcwJScsXHJcbiAgfSxcclxuICBmaXZlUzoge1xyXG4gICAgd2lkdGg6ICc0NSUnLFxyXG4gIH0sXHJcbiAgc2l4Uzoge1xyXG4gICAgd2lkdGg6ICc5MCUnLFxyXG4gIH0sXHJcbiAgc2V2ZW5TOiB7XHJcbiAgICB3aWR0aDogJzcwJScsXHJcbiAgfSxcclxuICBlaWdodFM6IHtcclxuICAgIHdpZHRoOiAnNTAlJyxcclxuICB9LFxyXG4gIG5pbmVTOiB7XHJcbiAgICB3aWR0aDogJzk1JScsXHJcbiAgfSxcclxuICB0ZW5TOiB7XHJcbiAgICB3aWR0aDogJzkwJScsXHJcbiAgfSxcclxuICBlbGV2ZW5TOiB7XHJcbiAgICB3aWR0aDogJzgwJScsXHJcbiAgfSxcclxuICB0d2VsdmVTOiB7XHJcbiAgICB3aWR0aDogJzkwJScsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtLWF1dG9DXCIgaWQ9XCJhYm91dC1tZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy02IHAtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBjb2wtbGctMTAgYWJvdXRDYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jYXJkLTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvaW1hZ2VzL21lLmpwZ1wiIGFsdD1cIm1lXCIgd2lkdGg9XCI1MzVcIiBoZWlnaHQ9XCI1MTBcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtbmFtZVwiIGlkPVwiY29udGFjdHNcIj4gIEJyYW5kb24gRm9yZFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkBicmFuZG9uZm9yZGQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5lYXItd2lwZS1iaWdcIj5IZWxsbywgbXkgbmFtZSBpcyBCcmFuZG9uIEZvcmQgYW5kIHRoaXMgaXMgbXkgcG9ydGZvbGlvISBJIG1hZGUgdGhpcyBub3Qgb25seSB0byBzaG93Y2FzZSBteSB2YXJpb3VzIGFzc2lnbm1lbnRzIGFuZCBwcm9qZWN0cyB0aHJvdWdob3V0IG15IGpvdXJuZXksIGJ1dCB0byBhbHNvIGRlbW9uc3RyYXRlIHNraWxscyBpbiBSZWFjdCBhbmQgTmV4dC5qcy4gRm9yIG90aGVyIHZlcnNpb25zIG9mIHRoaXMgcG9ydGZvbGlvIHBsZWFzZSB2aXNpdCBteSBHaXRodWIhPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTEgcGItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cImJ0biBidG4tZmxvYXRpbmcgbS0xIGljb25zXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icmFuZG9uZm9yZGRcIiByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1mbG9hdGluZyBtLTEgaWNvbnNcIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2JyYW5kb25mb3JkZC9cIiByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW5cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cImJ0biBidG4tZmxvYXRpbmcgbS0xIGljb25zXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYnJhbmRvbmZvcmRkZC9cIiByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1mbG9hdGluZyBtLTEgaWNvbnNcIiBocmVmPVwibWFpbHRvOmJyYW5kb24uZm9yZC42MTdAZ21haWwuY29tXCIgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdvb2dsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBidG4tZmxvYXRpbmcgbS0xIHJlc3VtZVBCdG4gbm9XcmFwIFwiIGhyZWY9XCIvYXNzZXRzL2Rvd25sb2Fkcy9icmFuZG9uZm9yZF9yZXN1bWUucGRmXCIgZG93bmxvYWQ+IERvd25sb2FkIFJlc3VtZSA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZmlsZS1wZGZcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy02IHAtNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC0xMiBjb2wtbGctMTIgY29udGFpbmVyIHNraWxsc1dyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNraWxsc1RpdGxlIGNvbnRhaW5lclwiPiBTa2lsbHNcclxuICAgICAgICAgICAgICA8aSBpZD1cImdlYXIxXCIgY2xhc3NOYW1lPVwiZmEgZmEtNXggZmEtZ2VhciBzcGluIHAtcHJpbWFyeS1jb2xvclwiPjwvaT5cclxuICAgICAgICAgICAgICA8aSBpZD1cImdlYXIyXCIgY2xhc3NOYW1lPVwiZmEgZmEtNXggZmEtZ2VhciBzcGluLWJhY2sgcC10ZXJ0aWFyeS1jb2xvclwiPjwvaT5cclxuICAgICAgICAgICAgICA8aSBpZD1cImdlYXIzXCIgY2xhc3NOYW1lPVwiZmEgZmEtNXggZmEtZ2VhciBzcGluLWJhY2sgcC10ZXJ0aWFyeS1jb2xvclwiPjwvaT4gICAgICAgIFxyXG4gICAgICAgICAgICA8L2gxPiAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJTa2lsbHNcIj48L2hyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyIHNraWxsYmFyVG9wXCIgZGF0YS1wZXJjZW50PVwiNzUlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci10aXRsZSBub1dyYXBcIj48aSBjbGFzc05hbWU9XCJmYXIgZmEtd2luZG93LW1heGltaXplXCI+PC9pPiBGcm9udCBFbmQgV2ViIERldmVsb3BtZW50IDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtYmFyLXBlcmNlbnRcIj43NSU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLWJhclwiIHN0eWxlPXtzdHlsZXMuc2tpbGxiYXJPbmV9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhclwiIGRhdGEtcGVyY2VudD1cIjk1JVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItdGl0bGVcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtaHRtbDVcIj48L2k+IEhUTUwgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtYmFyLXBlcmNlbnRcIj45NSU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLWJhclwiIHN0eWxlPXtzdHlsZXMub25lU30+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyXCIgZGF0YS1wZXJjZW50PVwiOTAlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci10aXRsZVwiPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1jc3MzLWFsdFwiPjwvaT4gQ1NTIEZyYW1ld29ya3MgfDxpPiBCb290c3RyYXAsIEZvdW5kYXRpb248L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1iYXItcGVyY2VudFwiPjkwJTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItYmFyXCIgc3R5bGU9e3N0eWxlcy50d29TfT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXJcIiBkYXRhLXBlcmNlbnQ9XCI4MCVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLXRpdGxlXCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWpzLXNxdWFyZVwiPjwvaT4gSmF2YVNjcmlwdCB8PGk+IEpRdWVyeSwgTm9kZSwgTW9tZW50PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtYmFyLXBlcmNlbnRcIj44MCU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLWJhclwiIHN0eWxlPXtzdHlsZXMudGhyZWVTfT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXJcIiBkYXRhLXBlcmNlbnQ9XCI3MCVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLXRpdGxlXCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLXJlYWN0XCI+PC9pPiBSZWFjdCB8IDxpPiBOZXh0LmpzLCBXZWJwYWNrLCBHcmFwaFFMPC9pPiA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWJhci1wZXJjZW50XCI+NzAlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci1iYXJcIiBzdHlsZT17c3R5bGVzLmZvdXJTfT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyXCIgZGF0YS1wZXJjZW50PVwiNjAlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci10aXRsZSBub1dyYXBcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdG9vbHNcIj48L2k+IEJhY2sgRW5kIFdlYiBEZXZlbG9wbWVudCA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWJhci1wZXJjZW50XCI+NjAlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci1iYXJcIiBzdHlsZT17c3R5bGVzLnNraWxsYmFyVHdvfT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXJcIiBkYXRhLXBlcmNlbnQ9XCI0NSVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLXRpdGxlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWRhdGFiYXNlXCI+PC9pPiBEYXRhYmFzZXMgfDxpPiBNeVNxbCwgTW9uZ29EQiA8L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1iYXItcGVyY2VudFwiPjQ1JTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItYmFyXCIgc3R5bGU9e3N0eWxlcy5maXZlU30+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyXCIgZGF0YS1wZXJjZW50PVwiOTAlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci10aXRsZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS13cmVuY2hcIj48L2k+IEFQSXMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1iYXItcGVyY2VudFwiPjkwJTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItYmFyXCIgc3R5bGU9e3N0eWxlcy5zaXhTfT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXJcIiBkYXRhLXBlcmNlbnQ9XCI3MCVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLXRpdGxlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlcnZlclwiPjwvaT4gU2VydmVycyB8PGk+IEhlcm9rdSwgQXBvbGxvLCBFeHByZXNzPC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtYmFyLXBlcmNlbnRcIj43MCU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLWJhclwiIHN0eWxlPXtzdHlsZXMuc2V2ZW5TfT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXJcIiBkYXRhLXBlcmNlbnQ9XCI1MCVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLXRpdGxlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLW5ldHdvcmstd2lyZWRcIj4gPC9pPk5ldHdvcmsgPGk+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtYmFyLXBlcmNlbnRcIj41MCU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLWJhclwiIHN0eWxlPXtzdHlsZXMuZWlnaHRTfT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXJcIiBkYXRhLXBlcmNlbnQ9XCI5MCVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLXRpdGxlXCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLXB1c2hlZFwiPjwvaT4gU29mdHdhcmUgRGV2ZWxvcG1lbnQgTGlmZSBDeWNsZSA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWJhci1wZXJjZW50XCI+OTAlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci1iYXJcIiBzdHlsZT17c3R5bGVzLnNraWxsYmFyVGhyZWV9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhclwiIGRhdGEtcGVyY2VudD1cIjk1JVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItdGl0bGVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtc2l0ZW1hcFwiPjwvaT4gRGV2ZWxvcG1lbnQgIHwgPGk+IEluc3BlY3QsIEluc29taWEsIE5leHQuanMgPC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtYmFyLXBlcmNlbnRcIj45NSU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLWJhclwiIHN0eWxlPXtzdHlsZXMubmluZVN9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhclwiIGRhdGEtcGVyY2VudD1cIjkwJVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItdGl0bGVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdmlhbFwiPjwvaT4gVGVzdGluZyA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWJhci1wZXJjZW50XCI+OTAlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci1iYXJcIiBzdHlsZT17c3R5bGVzLnRlblN9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhclwiIGRhdGEtcGVyY2VudD1cIjgwJVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItdGl0bGVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hhcnQtYmFyXCI+PC9pPiBBbmFseXNpcyA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWJhci1wZXJjZW50XCI+ODAlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhci1iYXJcIiBzdHlsZT17c3R5bGVzLmVsZXZlblN9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbGJhclwiIGRhdGEtcGVyY2VudD1cIjkwJVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxiYXItdGl0bGVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xpcGJvYXJkLWNoZWNrXCI+PC9pPiBEZXBsb3ltZW50IHwgPGk+IEhlcm9rdSwgVmVyY2VsLCBHaXRodWIgPC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtYmFyLXBlcmNlbnRcIj45MCU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsYmFyLWJhclwiIHN0eWxlPXtzdHlsZXMudHdlbHZlU30+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyQWJvdXRcIj48L2hyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzdWJqZWN0LCBzZXRTdWJqZWN0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHsgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coJ1NlbmRpbmcnKVxuICAgIGxldCBkYXRhID0ge1xuICAgICAgbmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgc3ViamVjdCxcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gIGZldGNoKCcvYXBpL2NvbnRhY3QnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSByZWNlaXZlZCcpXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSBzdWNjZWVkZWQhJylcbiAgICAgICAgc2V0U3VibWl0dGVkKHRydWUpXG4gICAgICAgIHNldE5hbWUoJycpXG4gICAgICAgIHNldEVtYWlsKCcnKVxuICAgICAgICBzZXRTdWJqZWN0KCcnKVxuICAgICAgICBzZXRNZXNzYWdlKCcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICA8ZGl2IGlkPVwiY29udGFjdFwiIGNsYXNzTmFtZT1cImNvbnRhY3QgY29udGFpbmVyIG10LTVcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgIDxoMj5Db250YWN0PC9oMj5cbiAgICAgICAgPHA+TGlrZSB0byByZWFjaCBvdXQ/IENvbnRhY3QgbWUgZnJvbSB0aGUgZm9ybSBiZWxvdyBhbmQgd2F0Y2ggb3V0IGZvciBhbiBlbWFpbCFcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGRhdGEtYW9zPVwiZmFkZS1pblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGQtZmxleCBhbGlnbi1pdGVtcy1zdHJldGNoXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBkLWZsZXggYWxpZ24taXRlbXMtc3RyZXRjaFwiPlxuICAgICAgICAgIDxmb3JtIGFjdGlvbj1cImZvcm1zL2NvbnRhY3QucGhwXCIgbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cInBocC1lbWFpbC1mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm5hbWVcIiAgb25DaGFuZ2U9eyhlKT0+e3NldE5hbWUoZS50YXJnZXQudmFsdWUpfX0gbmFtZT0nbmFtZScgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZW1haWxcIiBvbkNoYW5nZT17KGUpPT57c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfX0gbmFtZT0nZW1haWwnIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5TdWJqZWN0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInN1YmplY3RcIiAgb25DaGFuZ2U9eyhlKT0+e3NldFN1YmplY3QoZS50YXJnZXQudmFsdWUpfX0gbmFtZT0nc3ViamVjdCcgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9XCI1XCIgaWQ9XCJtZXNzYWdlXCIgb25DaGFuZ2U9eyhlKT0+e3NldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfX0gbmFtZT0nbWVzc2FnZScgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPVwiYnRuIHAtYnRuLWNvbG9yIGN1c3RvbS1sZW5ndGhcIiBvbkNsaWNrPXsoZSk9PntoYW5kbGVTdWJtaXQoZSl9fS8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgKVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcih7IGN1cnJlbnRQYWdlLCBoYW5kbGVQYWdlQ2hhbmdlIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9ID5cclxuICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC0zXCI+wqkgMjAyMSBTaXRlIGNyZWF0ZWQgd2l0aCDwn5KaIGJ5IEJyYW5kb24gRm9yZDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ecm9wZG93bic7XHJcbmltcG9ydCBEcm9wZG93bkJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvRHJvcGRvd25CdXR0b24nO1xyXG5cclxuXHJcbmltcG9ydCB7IE5hdmJhcixOYXYsTmF2RHJvcGRvd24sRm9ybSxGb3JtQ29udHJvbCxCdXR0b24sTmF2SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG4vLyBIZXJlIHdlIGFyZSB1c2luZyBvYmplY3QgZGVzdHJ1Y3R1cmluZyBhc3NpZ25tZW50IHRvIHBsdWNrIG9mZiBvdXIgdmFyaWFibGVzIGZyb20gdGhlIHByb3BzIG9iamVjdFxyXG4vLyBXZSBhc3NpZ24gdGhlbSB0byB0aGVpciBvd24gdmFyaWFibGUgbmFtZXNcclxuZnVuY3Rpb24gTmF2aWdhdGlvbih7IGN1cnJlbnRQYWdlLCBoYW5kbGVQYWdlQ2hhbmdlIH0pIHtcclxuXHJcbiAgY29uc3QgW3Nob3dOYXZzLCBzZXRTaG93TmF2c10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPE5hdmJhciBleHBhbmQ9XCJsZ1wiIGNsYXNzTmFtZT1cIm5hdmJhciBzdGlja3ktdG9wIG5hdmJhci1leHBhbmQtbGcgcC1iYWNrZ3JvdW5kLWNvbG9yIFwiPiBcclxuICAgICAgICA8TmF2YmFyLkJyYW5kIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIHAtZm9udC1jb2xvciBuYXYtYnJhbmQtY3VzdG9tIHN3aW5nIGxpbmVhci13aXBlXCIgXHJcbiAgICAgICAgICBocmVmPVwiL1wiPiBCcmFuZG9uIEZvcmQmYXBvcztzIFBvcnRmb2xpb1xyXG4gICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyIG5hdmJhckJ0biBjdXN0b20tdG9nZ2xlclwiIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI2Fib3V0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDaGFuZ2UoJ0Fib3V0Jyl9XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgY29uZGl0aW9uYWwgKHRlcm5hcnkpIG9wZXJhdG9yIHRoYXQgY2hlY2tzIHRvIHNlZSBpZiB0aGUgY3VycmVudCBwYWdlIGlzIFwiSG9tZVwiXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBpdCBpcywgd2Ugc2V0IHRoZSBjdXJyZW50IHBhZ2UgdG8gJ25hdi1saW5rLWFjdGl2ZScsIG90aGVyd2lzZSB3ZSBzZXQgaXQgdG8gJ25hdi1saW5rJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50UGFnZSA9PT0gJ0Fib3V0JyA/ICduYXYtbGluayBwLWZvbnQtY29sb3IgbS1sYyBhY3RpdmUnIDogJ25hdi1saW5rIHAtZm9udC1jb2xvciBtLWxjJ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjcHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZSgnUHJvamVjdHMnKX1cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgY3VycmVudFBhZ2UgaXMgYEFib3V0YCwgYW5kIGlmIHNvIHdlIHVzZSB0aGUgYWN0aXZlIGxpbmsgY2xhc3MgZnJvbSBib290c3RyYXAuIE90aGVyd2lzZSwgd2Ugc2V0IGl0IHRvIGEgbm9ybWFsIG5hdi1saW5rXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N1cnJlbnRQYWdlID09PSAnUHJvamVjdHMnID8gJ25hdi1saW5rIHAtZm9udC1jb2xvciBtLWxjIGFjdGl2ZScgOiAnbmF2LWxpbmsgcC1mb250LWNvbG9yIG0tbGMnfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE15IFdvcmtcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI2NvbnRhY3RcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZSgnQ29udGFjdCcpfVxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBjdXJyZW50UGFnZSBpcyBgQmxvZ2AsIGFuZCBpZiBzbyB3ZSB1c2UgdGhlIGFjdGl2ZSBsaW5rIGNsYXNzIGZyb20gYm9vdHN0cmFwLiBPdGhlcndpc2UsIHdlIHNldCBpdCB0byBhIG5vcm1hbCBuYXYtbGlua1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50UGFnZSA9PT0gJ0NvbnRhY3QnID8gJ25hdi1saW5rIHAtZm9udC1jb2xvciBtLWxjIGFjdGl2ZScgOiAnbmF2LWxpbmsgcC1mb250LWNvbG9yIG0tbGMnfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBuYXYtaXRlbS1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1sY1wiPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVzdW1lXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJyZXN1bWUtZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3Jlc3VtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZSgnUmVzdW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBWaWV3IFJlc3VtZVxyXG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYXNzZXRzL2Rvd25sb2Fkcy9icmFuZG9uZm9yZF9yZXN1bWUucGRmXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIERvd25sb2FkIFJlc3VtZVxyXG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgICBcclxuICAgICAgXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdAaWNvbmlmeS9yZWFjdCc7XHJcbi8vIGltYWdlcyBhbmQgZ2lmcyBpbXBvcnRzXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHdvcmstYm9keVwiIGlkPVwid29ya1wiPlxyXG5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInByb2plY3RzVGl0bGVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPiBQcm9qZWN0czwvaDE+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY3VzdG9tQ2FyZFwiPlxyXG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvcGFuZG9yYWJveF9zY3JlZW5zaG90LnBuZ1wiIGFsdD1cInBhdGllbnR0cmFja2VyXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIHdpZHRoPXs2fSBoZWlnaHQ9ezMuN30gLz4gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgbWFpbi1jYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjxpbnM+UGFuZG9yYXMgQm94PC9pbnM+PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBoNVwiPkZ1bGwgc3RhY2sgYXBwbGljYXRpb24gZm9MTG93aW5nIHRoZSBNLkUuUi5OIGRpYWdyYW0uIFRoaXMgYXBwbGljYXRpb24gdXRpbGl6ZXMgdGVjaG5vbG9neSZhcG9zO3MgbGlrZSBOZXh0LmpzLCBSZWFjdCwgYW5kIEdyYWdoUUwgdG8gaGVscCB0aGUgd29ya2Zsb3cgYW5kIGJldHRlciB0aGUgcXVhbGl0eSBvZiB0aGUgYXBwbGljYXRpb24gYWxsIHRvZ2V0aGVyLiBCZWxvdyBhcmUgdGhlIGxpbmtzIGZvciB0aGUgR2l0SHViIHJlcG9zaXRvcnkgYW5kIFZlcmNlbCB3ZWJwYWdlITwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQXVzdGluSm9vOTcvUGFuZG9yYXMtQm94XCIgY2xhc3NOYW1lPVwiYnRuIHAtYnRuLWNvbG9yIGJ0bi1sZyAgY3VzdG9tLWxlbmd0aC1wbVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0F1c3Rpbkpvbzk3L1BhbmRvcmFzLUJveFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZyAgY3VzdG9tLWxlbmd0aC1zbVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRvdy1tYXhpbWl6ZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY3VzdG9tQ2FyZFwiPlxyXG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9naWZzL3BhdGllbnR0cmFja2VyZ2lmLmdpZlwiIGFsdD1cInBhdGllbnR0cmFja2VyXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIHdpZHRoPXs2fSBoZWlnaHQ9ezMuN30gLz4gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgbWFpbi1jYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjxpbnM+TVZDIFBhdGllbnQgVHJhY2tlcjwvaW5zPjwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgaDVcIj5GdWxsIHN0YWNrIGFwcGxpY2F0aW9uIGZvbGxvd2luZyBNVkMgcGFyYWRpZ20gZm9yIGNyZWF0aW5nLCB1cGRhdGluZywgc29ydGluZyBhbmQgZGVsZXRpbmcgcGF0aWVudCByZWNvcmRzLiBCZWxvdyBhcmUgdGhlIGxpbmtzIGZvciB0aGUgR2l0SHViIHJlcG9zaXRvcnkgYW5kIDxiIGNsYXNzTmFtZT1cImhlcmtvdVwiPkhlcm9rdTwvYj4gd2VicGFnZSE8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NhcHRhaW42My9wYXRpZW50LXJlY29yZHMtdHJhY2tlclwiIGNsYXNzTmFtZT1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgIGN1c3RvbS1sZW5ndGgtcG1cIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxiPkdpdEh1YiA8L2I+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1Yi1zcXVhcmVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vcGF0aWVudC1yZWNvcmRzLXRyYWNrZXIuaGVyb2t1YXBwLmNvbVwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZyAgY3VzdG9tLWxlbmd0aC1zbVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRvdy1tYXhpbWl6ZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY3VzdG9tQ2FyZFwiPlxyXG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbW9pdmVuaWdodF9zY3JlZW5zaG90LnBuZ1wiIGFsdD1cIm1vaXZlbmlnaHRkb25lcmlnaHRcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My43fSAvPiAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgbWFpbi1jYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjxpbnM+TW92aWUgTmlnaHQuLiBEb25lIFJpZ2h0PC9pbnM+PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBoNVwiPlRoaXMgYXNzaWdubWVudCB3YXMgbXkgZmlyc3QgZ3JvdXAgUHJvamVjdCEgVXNpbmcgPGIgY2xhc3NOYW1lPVwiaHRtbFwiPmh0bWw8L2I+LCA8YiBjbGFzc05hbWU9XCJjc3NcIj5jc3M8L2I+LCBhbmQgPGIgY2xhc3NOYW1lPVwiamF2YXNjcmlwdFwiPmphdmFzY3JpcHQ8L2I+IHdlIG1hZGUgYSBtb3ZpZSBjYXRhbG9nISBCZWxvdyBhcmUgdGhlIGxpbmtzIGZvciB0aGUgR2l0SHViIHJlcG9zaXRvcnkgYW5kIDxiIGNsYXNzTmFtZT1cImhlcmtvdVwiPkhlcm9rdTwvYj4gd2VicGFnZSE8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0F1c3Rpbkpvbzk3L01vdmllTmlnaHREb25lUmlnaHRcIiBjbGFzc05hbWU9XCJidG4gcC1idG4tY29sb3IgYnRuLWxnICBjdXN0b20tbGVuZ3RoLXBtXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48Yj5HaXRIdWIgPC9iPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2F1c3Rpbmpvbzk3LmdpdGh1Yi5pby9Nb3ZpZU5pZ2h0RG9uZVJpZ2h0L1wiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZyAgY3VzdG9tLWxlbmd0aC1zbVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRvdy1tYXhpbWl6ZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2lnbm1lbnRzVGl0bGVXcmFwcGVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFzc2lnbm1lbnRzVGl0bGVcIiBpZD1cImFzc2lnbm1lbnRzXCI+QXNzaWdubWVudHMgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0XCI+PC9pPjwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LWNvbHMtMSByb3ctY29scy1tZC0zIGctNFwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYWRkaW5nVG9wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC0xMDAgY3VzdG9tQ2FyZFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIG1haW4taW1nLWhlaWdodFwiIHNyYz1cIi9hc3NldHMvZ2lmcy9tZXJuLmdpZlwiIGFsdD1cIm1lcm5cIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My41fSAvPiAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGdyb3VwLWNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBcIj48aW5zPk0uRS5SLk48L2lucz48L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPiBGdWxsIHN0YWNrIHdlYiBhcHBsaWNhdGlvbiB1dGlsaXppbmcgdGhlIG1lcm4gd29yayBzdGFjay4gQmVsb3cgaXMgdGhlIGxpbmsgdG8gdGhlIEdpdGh1YiBhbmQgPGIgY2xhc3NOYW1lPVwiaGVya291XCI+SGVyb2t1PC9iPiBwYWdlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JyYW5kb25mb3JkZC9tZXJuLWJvb2stc2VhcmNoXCIgY2xhc3NOYW1lPVwiYnRuIHAtYnRuLWNvbG9yIGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXBzXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48Yj5HaXRIdWIgPC9iPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9qb2xpLXZpbi0yNTcxOC5oZXJva3VhcHAuY29tL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXNzXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48SWNvbiBjbGFzc05hbWU9XCJpY29uaWZ5XCIgaWNvbj1cInNpbXBsZS1pY29uczpoZXJva3VcIiBkYXRhLWlubGluZT1cImZhbHNlXCIvPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGFkZGluZ1RvcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwIGN1c3RvbUNhcmRcIj5cclxuICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9naWZzL3B3YS5naWZcIiBhbHQ9XCJwd2FcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My41fSAvPiAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBncm91cC1jYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgXCI+PGlucz5Qcm9ncmVzc2l2ZSBXZWIgQXBwbGljYXRpb248L2lucz48L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPiBGdWxsIHN0YWNrIHdlYiBhcHBsaWNhdGlvbiB0byB0cmFjayB5b3VyIHNwZW5kaW5nJmFwb3M7cyBvbiB0aGUgZmx5IGJ5IHV0aWxpemluZyB3ZWJwYWNrIHRvIHJ1biBvZmZsaW5lLiBCZWxvdyBpcyB0aGUgbGluayB0byB0aGUgR2l0aHViIGFuZCA8YiBjbGFzc05hbWU9XCJoZXJrb3VcIj5IZXJva3U8L2I+IHBhZ2U8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icmFuZG9uZm9yZGQvcHJvZ3Jlc3NpdmUtd2ViLWFwcFwiIGNsYXNzTmFtZT1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vY2FsbS1jcmFnLTM4MjM0Lmhlcm9rdWFwcC5jb20vXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnIGN1c3RvbS1sZW5ndGgtc3NcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxJY29uIGNsYXNzTmFtZT1cImljb25pZnlcIiBpY29uPVwic2ltcGxlLWljb25zOmhlcm9rdVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIi8+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYWRkaW5nVG9wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC0xMDAgY3VzdG9tQ2FyZFwiPlxyXG4gICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBtYWluLWltZy1oZWlnaHRcIiBzcmM9XCIvYXNzZXRzL2dpZnMvbWRiX3dvcmtvdXQuZ2lmXCIgYWx0PVwibWRiX3dvcmtvdXRcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My41fSAvPiAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBncm91cC1jYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgXCI+PGlucz5Xb3Jrb3V0IFRyYWNrZXIvTW9uZ29EQjwvaW5zPjwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+IEZ1bGwgc3RhY2sgd2ViIGFwcGxpY2F0aW9uIHRvIHRyYWNrIHdvcmtvdXQmYXBvcztzLCB1dGlsaXppbmcgTW9uZ29EQiBmb3IgdGhlIGJhY2tlbmQuIEJlbG93IGlzIHRoZSBsaW5rIHRvIHRoZSBHaXRodWIgYW5kIDxiIGNsYXNzTmFtZT1cImhlcmtvdVwiPkhlcm9rdTwvYj4gcGFnZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JyYW5kb25mb3JkZC9tdmNfdGVjaGJsb2dcIiBjbGFzc05hbWU9XCJidG4gcC1idG4tY29sb3IgYnRuLWxnIGN1c3RvbS1sZW5ndGgtcHNcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxiPkdpdEh1YiA8L2I+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1Yi1zcXVhcmVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2luZmluaXRlLXNhbmRzLTAyODUzLmhlcm9rdWFwcC5jb20vXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnIGN1c3RvbS1sZW5ndGgtc3NcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxJY29uIGNsYXNzTmFtZT1cImljb25pZnlcIiBpY29uPVwic2ltcGxlLWljb25zOmhlcm9rdVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIi8+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYWRkaW5nVG9wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC0xMDAgY3VzdG9tQ2FyZFwiPlxyXG4gICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBtYWluLWltZy1oZWlnaHRcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9yZWdleC11cmwucG5nXCIgYWx0PVwicmVnZXh0dXRvcmlhbFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjV9IC8+ICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZ3JvdXAtY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIFwiPjxpbnM+UmVnZXggVHV0b3JpYWw8L2lucz48L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPiBUaGlzIGlzIGEgdHV0b3JpYWwgZGVzY3JpYmluZyBob3cgdGhlIHJlZ2V4IGZvciBtYXRjaGluZyBhIFVSTCB3b3Jrcy4gQmVsb3cgaXMgdGhlIHJlcG9zaXRvcnkgZm9yIHRoZSBHaXN0IG9uIEdpdGh1YiE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2JyYW5kb25mb3JkZC8yZmM0Y2E0MWRlYzZhODU2ZTI1MzM0YWM2NWJhN2RhY1wiIGNsYXNzTmFtZT1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wcFwiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIEdpc3QgPC9iPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGFkZGluZ1RvcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwIGN1c3RvbUNhcmRcIj5cclxuICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbXZjdGVjaC5wbmdcIiBhbHQ9XCJtdmN0ZWNoXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIHdpZHRoPXs2fSBoZWlnaHQ9ezMuNX0gLz4gICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZ3JvdXAtY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIFwiPjxpbnM+TVZDIFRlY2hibG9nPC9pbnM+PC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj4gQnVpbGRpbmcgYSBmdWxsIHN0YWNrIHdlYnNpdGUgZm9yIHRlY2ggYmxvZ2dlcnMgdG8gcG9zdCwgdXBkYXRlLCBhbmQgZGVsZXRlIGJsb2dzISBCZWxvdyBpcyB0aGUgbGluayB0byB0aGUgR2l0aHViIGFuZCA8YiBjbGFzc05hbWU9XCJoZXJrb3VcIj5IZXJva3U8L2I+IHBhZ2U8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icmFuZG9uZm9yZGQvbXZjX3RlY2hibG9nXCIgY2xhc3NOYW1lPVwiYnRuIHAtYnRuLWNvbG9yIGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXBzXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48Yj5HaXRIdWIgPC9iPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9pbW1lbnNlLWxha2UtNTE3NzQuaGVyb2t1YXBwLmNvbS9cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbGcgY3VzdG9tLWxlbmd0aC1zc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PEljb24gY2xhc3NOYW1lPVwiaWNvbmlmeVwiIGljb249XCJzaW1wbGUtaWNvbnM6aGVyb2t1XCIgZGF0YS1pbmxpbmU9XCJmYWxzZVwiLz48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBhZGRpbmdUb3BcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoLTEwMCBjdXN0b21DYXJkXCI+XHJcbiAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIG1haW4taW1nLWhlaWdodFwiIHNyYz1cIi9hc3NldHMvZ2lmcy9zcWxfZ2lmLmdpZlwiIGFsdD1cIm15c3FsdHJhY2tlclwiIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjV9IC8+ICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGdyb3VwLWNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBcIj48aW5zPkVtcGxveWVlIFRyYWNrZXI8L2lucz48L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlVzaW5nIE15U3FsIHdlIHdlcmUgdGFzayB3aXRoIGRlc2lnbmluZyBhIGRhdGFiYXNlIGZvciBzb3J0aW5nIGFuZCB0cmFja2luZyBlbXBsb3llZSEgQmVsb3cgaXMgdGhlIEdpdGh1YiBmb3IgbW9yZSBpbmZvcm1hdGlvbjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JyYW5kb25mb3JkZC9zcWxfZW1wbG95ZWVfdHJhY2tlclwiIGNsYXNzTmFtZT1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wcFwiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBhZGRpbmdUb3BcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoLTEwMCBjdXN0b21DYXJkXCI+XHJcbiAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIG1haW4taW1nLWhlaWdodFwiIHNyYz1cIi9hc3NldHMvZ2lmcy9jYXRlZ29yaWVzLmdpZlwiIGFsdD1cImVjb21tZXJjZWJhY2tlbmRcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My41fSAvPiAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBncm91cC1jYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgXCI+PGlucz5FLUNvbW1lcmNlIEJhY2tlbmQ8L2lucz48L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPiBVc2luZyBNeVNxbCB3ZSB3ZXJlIHRhc2sgd2l0aCBidWlsZGluZyB0aGUgYmFjayBlbmQgZm9yIGFuIGUtY29tbWVyY2Ugc2l0ZSB1c2luZyBFeHByZXNzLmpzIGFuZCBTZXF1ZWxpemUuIEJlbG93IGlzIHRoZSBHaXRIdWIgcmVwb3NpdG9yeSBmb3IgbW9yZSBpbmZvcm1hdGlvbiE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icmFuZG9uZm9yZGQvZV9jb21tZXJjZV9iYWNrZW5kXCIgY2xhc3NOYW1lPVwiYnRuIHAtYnRuLWNvbG9yIGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXBwXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48Yj5HaXRIdWIgPC9iPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGFkZGluZ1RvcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwIGN1c3RvbUNhcmRcIj5cclxuICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9naWZzL25vdGV0YWtlcl9wcHJldmlldy5naWZcIiBhbHQ9XCJub3RldGFrZXJcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My41fSAvPiAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGdyb3VwLWNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBcIj48aW5zPkV4cHJlc3MgTm90ZSBUYWtlcjwvaW5zPjwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+VGhpcyBpcyBhIEV4cHJlc3MgTm90ZSB0YWtpbmcgYXBwbGljYXRpb24gZGVwbG95ZWQgb24gPGIgY2xhc3NOYW1lPVwiaGVya291XCI+SGVyb2t1PC9iPiB0byBzaG93IGJhY2tlbmQgc2VydmVyIGRldmVsb3BtZW50ISBCZWxvdyBhcmUgdGhlIGxpbmtzIGZvciB0aGUgR2l0SHViIHJlcG9zaXRvcnkgYW5kIGRlcGxveSA8YiBjbGFzc05hbWU9XCJoZXJrb3VcIj5IZXJva3U8L2I+IHBhZ2UhPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnJhbmRvbmZvcmRkL25vdGV0YWtlclwiIGNsYXNzTmFtZT1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vaW50ZW5zZS1yZXRyZWF0LTEzMzg0Lmhlcm9rdWFwcC5jb20vXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnIGN1c3RvbS1sZW5ndGgtc3NcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxJY29uIGNsYXNzTmFtZT1cImljb25pZnlcIiBpY29uPVwic2ltcGxlLWljb25zOmhlcm9rdVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIi8+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYWRkaW5nVG9wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC0xMDAgY3VzdG9tQ2FyZFwiPlxyXG4gICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBtYWluLWltZy1oZWlnaHRcIiBzcmM9XCIvYXNzZXRzL2dpZnMvcmVhZG1lX3ByZXZpZXcuZ2lmXCIgYWx0PVwicmVhZG1lX2dlbmVyYXRvclwiIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjV9IC8+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBncm91cC1jYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgXCI+PGlucz5SZWFkbWUgR2VuZXJhdG9yPC9pbnM+PC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5Vc2luZyA8YiBjbGFzc05hbWU9XCJub2RlXCI+bm9kZS5qczwvYj4gYW5kIDxiIGNsYXNzTmFtZT1cImphdmFzY3JpcHRcIj5KYXZhc2NyaXB0PC9iPiB5b3UgY2FuIGdlbmVyYXRlIGN1c3RvbSByZWFkbWUgZmlsZXMgZm9yIGFueSB3b3JrIGZsb3cuIEJlbG93IGFyZSB0aGUgbGlua3MgZm9yIHRoZSBHaXRIdWIgcmVwb3NpdG9yeSBmb3IgbW9yZSBpbmZvcm1hdGlvbiE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icmFuZG9uZm9yZGQvcmVhZG1lX2dlbmVyYXRvclwiIGNsYXNzTmFtZT1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wcFwiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBhZGRpbmdUb3BcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoLTEwMCBjdXN0b21DYXJkXCI+XHJcbiAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIG1haW4taW1nLWhlaWdodFwiIHNyYz1cIi9hc3NldHMvZ2lmcy90ZWFtX3Byb2ZpbGUuZ2lmXCIgYWx0PVwidGVhbWNhcmRfZ2VuZXJhdG9yXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIHdpZHRoPXs2fSBoZWlnaHQ9ezMuNX0gLz4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGdyb3VwLWNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBcIj48aW5zPlRlYW0gUHJvZmlsZSBHZW5lcmF0b3I8L2lucz48L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlVzaW5nIDxiIGNsYXNzTmFtZT1cIm5vZGVcIj5ub2RlLmpzPC9iPiBhbmQgPGIgY2xhc3NOYW1lPVwiamF2YXNjcmlwdFwiPkphdmFzY3JpcHQ8L2I+IHlvdSBjYW4gZ2VuZXJhdGUgY3VzdG9tIFRlYW0gUHJvZmlsZSBodG1sIGZpbGUgdG8gZml0IGFueSB3b3JrIGZsb3cuIEJlbG93IGFyZSB0aGUgbGlua3MgZm9yIHRoZSBHaXRIdWIgcmVwb3NpdG9yeSBmb3IgbW9yZSBpbmZvcm1hdGlvbiE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icmFuZG9uZm9yZGQvdGVhbWNhcmRfZ2VuZXJhdG9yXCIgY2xhc3NOYW1lPVwiYnRuIHAtYnRuLWNvbG9yIGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXBwXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48Yj5HaXRIdWIgPC9iPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGFkZGluZ1RvcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwIGN1c3RvbUNhcmQgIFwiPlxyXG4gICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBtYWluLWltZy1oZWlnaHRcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90LXdlYXRoZXJhcHAucG5nXCIgYWx0PVwid2VhdGhlcl9hcHBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My41fSAvPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZ3JvdXAtY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+PGlucz5XZWF0aGVyIERhc2hib2FyZDwvaW5zPjwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+VGhpcyBpcyBhIHdlYXRoZXIgZGFzaGJvYXJkIG1hZGUgd2l0aCA8YiBjbGFzc05hbWU9XCJtb21lbnRcIj5PcGVuV2VhdGhlciBBcGk8L2I+ISBCZWxvdyBhcmUgdGhlIGxpbmtzIGZvciB0aGUgR2l0SHViIHJlcG9zaXRvcnkgYW5kIHdlYnBhZ2U8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icmFuZG9uZm9yZGQvd2VhdGhlcl9hcHBcIiBjbGFzc05hbWU9XCJidG4gcC1idG4tY29sb3IgYnRuLWxnIGN1c3RvbS1sZW5ndGgtcHNcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxiPkdpdEh1YiA8L2I+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1Yi1zcXVhcmVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2JyYW5kb25mb3JkZC5naXRodWIuaW8vd2VhdGhlcl9hcHAvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnIGN1c3RvbS1sZW5ndGgtc3NcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS13aW5kb3ctbWF4aW1pemVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwYWRkaW5nVG9wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC0xMDAgY3VzdG9tQ2FyZFwiPlxyXG4gICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBtYWluLWltZy1oZWlnaHRcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90LXBhc3NnZW4ucG5nXCIgYWx0PVwicGFzc3dvcmRfZ2VuZXJhdG9yXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIHdpZHRoPXs2fSBoZWlnaHQ9ezMuNX0gLz4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGdyb3VwLWNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjxpbnM+UGFzc3dvcmQgR2VuZXJhdG9yPC9pbnM+PC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHQgaFwiPlRoaXMgaXMgYSBwYXNzd29yZCBnZW5lcmF0b3IgbWFkZSB3aXRoIDxiIGNsYXNzTmFtZT1cImphdmFzY3JpcHRcIj5qYXZhc2NyaXB0PC9iPiEgQmVsb3cgYXJlIHRoZSBsaW5rcyBmb3IgdGhlIEdpdEh1YiByZXBvc2l0b3J5IGFuZCB3ZWJwYWdlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnJhbmRvbmZvcmRkL3Bhc3N3b3JkX2dlbmVyYXRvclwiIGNsYXNzTmFtZT1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vYnJhbmRvbmZvcmRkLmdpdGh1Yi5pby9wYXNzd29yZF9nZW5lcmF0b3IvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnICBjdXN0b20tbGVuZ3RoLXNzXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtd2luZG93LW1heGltaXplXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGFkZGluZ1RvcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwIGN1c3RvbUNhcmRcIj5cclxuICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdC1qYXZhcXVpei5wbmdcIiBhbHQ9XCJqYXZhc2NyaXB0X3F1aXpcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My41fSAvPiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZ3JvdXAtY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+PGlucz5KYXZhc2NyaXB0IFF1aXo8L2lucz48L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlRoaXMgaXMgYSBKYXZhc2NyaXB0IFF1aXogdXNpbmcgb25seSA8YiBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+amF2YXNjcmlwdDwvYj4hIEJlbG93IGFyZSB0aGUgbGlua3MgZm9yIHRoZSBHaXRIdWIgcmVwb3NpdG9yeSBhbmQgd2VicGFnZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JyYW5kb25mb3JkZC9qYXZhc2NyaXB0X3F1aXpcIiBjbGFzc05hbWU9XCJidG4gcC1idG4tY29sb3IgYnRuLWxnIGN1c3RvbS1sZW5ndGgtcHNcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxiPkdpdEh1YiA8L2I+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1Yi1zcXVhcmVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2JyYW5kb25mb3JkZC5naXRodWIuaW8vamF2YXNjcmlwdF9xdWl6L1wiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXNzXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtd2luZG93LW1heGltaXplXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGFkZGluZ1RvcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwIGN1c3RvbUNhcmRcIj5cclxuICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc2NyZWVuc2hvdC1kYXlwbGFubmVyLnBuZ1wiIGFsdD1cImRheV9wbGFubmVyXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIHdpZHRoPXs2fSBoZWlnaHQ9ezMuNX0gLz4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGdyb3VwLWNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjxpbnM+RGF5IFBsYW5uZXI8L2lucz48L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlRoaXMgaXMgYSBkYXkgcGxhbm5lciB1c2luZyA8YiBjbGFzc05hbWU9XCJqYXZhc2NyaXB0XCI+SmF2YXNjcmlwdDwvYj4gYW5kIDxiIGNsYXNzTmFtZT1cIm1vbWVudFwiPm1vbWVudC5qczwvYj4hIEJlbG93IGFyZSB0aGUgbGlua3MgZm9yIHRoZSBHaXRIdWIgcmVwb3NpdG9yeSBhbmQgd2VicGFnZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JyYW5kb25mb3JkZC9kYXlfcGxhbm5lclwiIGNsYXNzTmFtZT1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vYnJhbmRvbmZvcmRkLmdpdGh1Yi5pby9kYXlfcGxhbm5lci9cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbGcgY3VzdG9tLWxlbmd0aC1zc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRvdy1tYXhpbWl6ZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBhZGRpbmdUb3BcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoLTEwMCBjdXN0b21DYXJkXCI+XHJcbiAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIG1haW4taW1nLWhlaWdodFwiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2hvcmlzZW9uX3NpdGUucG5nXCIgYWx0PVwiaG9yaXNlb25fd2Vic2l0ZVwiIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjV9IC8+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBncm91cC1jYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgXCI+PGlucz5Ib3Jpc29uIFNpdGUgUmVmcmFjdG1lbnQ8L2lucz48L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlRoaXMgYXNzaWdubWVudCB3YXMgdG8gPGIgY2xhc3NOYW1lPVwicmVmcmFjdFwiPnJlZnJhY3Q8L2I+IGEgcHJlLW1hZGUgc2l0ZSBjYWxsZWQgSG9yaXNvbiEgQmVsb3cgYXJlIHRoZSBsaW5rcyBmb3IgdGhlIEdpdEh1YiByZXBvc2l0b3J5IGFuZCB3ZWJwYWdlITwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JyYW5kb25mb3JkZC9ob3Jpc2Vvbl9yZWZhY3RvclwiIGNsYXNzTmFtZT1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vYnJhbmRvbmZvcmRkLmdpdGh1Yi5pby9ob3Jpc2Vvbl9yZWZhY3Rvci9cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbGcgY3VzdG9tLWxlbmd0aC1zc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRvdy1tYXhpbWl6ZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxocj48L2hyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJyZXN1bWVcIiBjbGFzc05hbWU9XCJyZXN1bWUgY29udGFpbmVyIG10LTVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+UmVzdW1lPC9oMj5cclxuICAgICAgICAgIDxwPldlbGNvbWUgdG8gbXkgcmVzdW1lISBCZWxvdyB5b3UmYXBvcztsbCBmaW5kIG15IHByZXZpb3VzIHdvcmsgZXhwZXJpZW5jZSBhbmQga25vd2xlZGdlISBFbmpveSBhbmQgQ29udGFjdCBtZSBpZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zOik8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93UmVzdW1lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXN1bWUtdGl0bGVcIj5TdW1tYXJ5PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bWUtaXRlbSBwYi0wXCI+XHJcbiAgICAgICAgICAgICAgPGg0PkJyYW5kb24gRm9yZDwvaDQ+XHJcbiAgICAgICAgICAgICAgPHA+PGVtPlxyXG4gICAgICAgICAgICAgICAgUmVsaWFibGUsIHF1YWxpdHktZm9jdXNlZCBjb25zdHJ1Y3Rpb24gdGVjaG5pY2lhbi8gdXBjb21pbmcgV2ViIERldmVsb3BlclxyXG4gICAgICAgICAgICAgICAgc2Vla2luZyBvcHBvcnR1bml0aWVzIHRvIGxlYXJuIG5ldyBza2lsbHMgYW5kIGRldmVsb3Agb24gdGhlIGpvYiBleHBlcmllbmNlIGluIHRoZVxyXG4gICAgICAgICAgICAgICAgdGVjaG5vbG9neSBpbmR1c3RyeS4gVGhyb3VnaCBteSB3b3JrIGV4cGVyaWVuY2UgYW5kIHBlcnNvbmFsIGludGVyZXN0cywgSSBhbSBhXHJcbiAgICAgICAgICAgICAgICBxdWljayBzdHVkeSBhbmQgY2FuIGxlYXJuIG5ldyBza2lsbHMgd2l0aCBoYW5kcy1vbiB0cmFpbmluZy4gTG9va2luZyBmb3J3YXJkIHRvXHJcbiAgICAgICAgICAgICAgICBwcm92aWRpbmcgbXkgc2tpbGxzIGluIGFuIGVudmlyb25tZW50IHdoZXJlIEkgY2FuIGdyb3cgYW5kIG1ha2UgYSBkaWZmZXJlbmNlLlxyXG4gICAgICAgICAgICAgIDwvZW0+PC9wPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5Bc2hicnVuIDIwMTQ3LCBWaXJnaW5pYTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+KDU3MSkgNDIwLTk1MjA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPmJyYW5kb24uZm9yZC42MTdAZ21haWwuY29tPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXN1bWUtdGl0bGVcIj5FZHVjYXRpb248L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGg0PiBBZHZhbmNlZCBKYXZhc2NyaXB0ICZhbXA7IEZyb250IGFuZCBCYWNrIEVuZCBXZWIgRGVzaWduPC9oND5cclxuICAgICAgICAgICAgICA8aDU+MjAyMSAtIDIwMjE8L2g1PlxyXG4gICAgICAgICAgICAgIDxwPjxlbT5HZW9yZ2UgV2FzaGluZ3RvbiBVbml2ZXJzaXR5LCBBc2hidXJuICwgVkE8L2VtPjwvcD5cclxuICAgICAgICAgICAgICA8cD4gQW4gb25saW5lIEJvb3RjYW1wIGRlc2lnbmVkIHRvIHRlYWNoIGFkdmFuY2VkIGphdmFzY3JpcHQgc2tpbGwgdG8gZGV2ZWxvcCB3ZWJzaXRlcywgYnVpbGQgYSBjYXJlZXIgaW4gd2ViIGRldmVsb3BtZW50LCBhbmQgbGVhcm4gdGVjaG5pY2FsIHNraWxscyBpbiB0aGUgSmF2YXNjcmlwdCBsYW5ndWFnZS4gPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMTAwXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXN1bWUtdGl0bGVcIj5Qcm9mZXNzaW9uYWwgRXhwZXJpZW5jZTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8aDQ+Q29uc3RydWN0aW9uIFRlY2huaWNpYW4gPC9oND5cclxuICAgICAgICAgICAgICA8aDU+MjAxOCAtIDIwMjE8L2g1PlxyXG4gICAgICAgICAgICAgIDxwPjxlbT5Db25ub3IgQ29uc3RydWN0aW9uLCBBcmxpbmd0b24sIFZBIDwvZW0+PC9wPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5MZWFkIGNyZXcgbWVtYmVyIGZvciBob21lIGltcHJvdmVtZW50IHByb2plY3RzIHByb3ZpZGluZyBndWlkYW5jZSwgZGlzdHJpYnV0ZSB3b3JrIHRhc2tzLCBhbmQgaW5zcGVjdCBzaXRlcyBhZnRlciBjb21wbGV0aW9uLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+SW50ZXJhY3RzIHdpdGggY3VzdG9tZXJzIGFuZCBob21lLW93bmVycyByZXByZXNlbnRpbmcgdGhlIGNvbXBhbnkgYW5kIHByb3ZpZGluZyBleGNlbGxlbnQgY3VzdG9tZXJzIHNlcnZpY2UuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5HYWluZWQgcHJhY3RpY2FsIGhhbmRzLW9uIGtub3dsZWRnZSBvZiBkaWZmZXJlbnQgYXNwZWN0cyBvZiBob21lIHJlbW9kZWxpbmcgc3VjaCBhcyBkcnktd2FsbCwgaW5zdWxhdGlvbiwgZmxvb3JpbmcsIGFuZCBvdGhlciBkdXRpZXMuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5Nb25pdG9yIHdvcmtzaXRlIHRvIGVuc3VyZSBjb21wbGlhbmNlIHdpdGggc2FmZXR5IHJlZ3VsYXRpb25zLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+IEVhcm5lZCBhIHJlcHV0YXRpb24gYXMgYSB0cnVzdGVkIHRlY2huaWNpYW4uPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5UcmFpbiBuZXcgZW1wbG95ZWVzIG9uIHByb3BlciBoYW5kbGluZyBvZiBlcXVpcG1lbnQgYW5kIHNhZmV0eS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlBlcmZvcm0gc3BlY2lhbCBkdXRpZXMgZm9yIG90aGVyIHByb2plY3RzIGFuZCBhc3Npc3Qgb3RoZXJzIHdoZW4gbmVlZGVkLjwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8aDQ+RnJvbnQtRGVzayBBc3Npc3RhbnQ8L2g0PlxyXG4gICAgICAgICAgICAgIDxoNT4yMDE3IC0gMjAxODwvaDU+XHJcbiAgICAgICAgICAgICAgPHA+PGVtPkxhIEZpdG5lc3MsIExlZXNlYnVyZywgVkE8L2VtPjwvcD5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+Q2hlY2tlZCBpbiBndWVzdHMgbG9va2luZyB0byB3b3JrIG91dCBhbmQgbWFkZSBzdXJlIG5vIG9uZSBzbnVjayBpbi48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkhlbHAgc2FsZXMgYnkgY2FsbGluZyBndWVzdHMgd2hvIGhhZCBvdmVyZHVlIHBheW1lbnRzIGFuZCBtYWtpbmcgc2FsZSBjYWxscyBmb3IgbmV3IG1lbWJlcnNoaXBzLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+IENsZWFyIHdlaWdodHMgYW5kIHNldHMgYXQgdGhlIGVuZCBvZiBlYWNoIGRheS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkhlbHBzIGd1ZXN0cyB3aG8gaGFkIGlzc3VlcyB3aXRoIHRoZXJlIG1lbWJlcnNoaXBzLjwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vUHJvamVjdHMnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xyXG5pbXBvcnQgUmVzdW1lIGZyb20gJy4vUmVzdW1lJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpb0NvbnRhaW5lcigpIHtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKCdBYm91dCcpO1xyXG5cclxuICAvLyBUaGlzIG1ldGhvZCBpcyBjaGVja2luZyB0byBzZWUgd2hhdCB0aGUgdmFsdWUgb2YgYGN1cnJlbnRQYWdlYCBpcy4gRGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBjdXJyZW50UGFnZSwgd2UgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIGNvbXBvbmVudCB0byByZW5kZXIuXHJcbiAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50UGFnZSA9PT0gJ0Fib3V0Jykge1xyXG4gICAgICByZXR1cm4gPEFib3V0IC8+O1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRQYWdlID09PSAnQ29udGFjdCcpIHtcclxuICAgICAgcmV0dXJuIDxDb250YWN0IC8+O1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRQYWdlID09PSAnUHJvamVjdHMnKSB7XHJcbiAgICAgIHJldHVybiA8UHJvamVjdHMgLz47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPFJlc3VtZSAvPjtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2UpID0+IHNldEN1cnJlbnRQYWdlKHBhZ2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIm1haW5cIj5cclxuICAgICAgPGRpdiBpZD1cImRpc3BsYXlcIiBjbGFzc05hbWU9e3N0eWxlcy5kaXNwbGF5fT5cclxuICAgICAgICB7LyogV2UgYXJlIHBhc3NpbmcgdGhlIGN1cnJlbnRQYWdlIGZyb20gc3RhdGUgYW5kIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgaXQgKi99XHJcbiAgICAgICAgPE5hdmlnYXRpb24gY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSBoYW5kbGVQYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVySW1nfT5cclxuICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvZm9yZXN0X21haW4uanBnXCIgYWx0PVwiZm9yZXN0XCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIHdpZHRoPXsyNTYwfSBoZWlnaHQ9ezczNH0gLz4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEhlcmUgd2UgYXJlIGNhbGxpbmcgdGhlIHJlbmRlclBhZ2UgbWV0aG9kIHdoaWNoIHdpbGwgcmV0dXJuIGEgY29tcG9uZW50ICAqL31cclxuICAgICAgICB7cmVuZGVyUGFnZSgpfVxyXG4gICAgICAgIDxGb290ZXIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5wdXRHcm91cFwiOiBcIkhvbWVfaW5wdXRHcm91cF9fM2oxSEFcIixcblx0XCJpbnB1dExhYmVsXCI6IFwiSG9tZV9pbnB1dExhYmVsX185dEFYZlwiLFxuXHRcImlucHV0RmllbGRcIjogXCJIb21lX2lucHV0RmllbGRfXzNnb3dWXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwiaGVhZGVySW1nXCI6IFwiSG9tZV9oZWFkZXJJbWdfXzJyajJXXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGljb25pZnkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Ecm9wZG93bkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwicyIsImtpbmQiLCJtYXAiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJwbGFjZWhvbGRlciIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcGFyYW0iLCJwcmlvcml0eSIsImxvYWRpbmciLCJsYXp5Qm91bmRhcnkiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlZiIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwidXJsIiwiVVJMIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInVzZVJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsImVsIiwiY3VycmVudCIsInRhZ05hbWUiLCJvYnNlcnZlIiwidXNlRWZmZWN0IiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwiUmVhY3QiLCJJbWFnZSIsInN0eWxlcyIsInNraWxsYmFyT25lIiwiYmFja2dyb3VuZENvbG9yIiwiYW5pbWF0aW9uIiwic2tpbGxiYXJUd28iLCJza2lsbGJhclRocmVlIiwib25lUyIsInR3b1MiLCJ0aHJlZVMiLCJmb3VyUyIsImZpdmVTIiwic2l4UyIsInNldmVuUyIsImVpZ2h0UyIsIm5pbmVTIiwidGVuUyIsImVsZXZlblMiLCJ0d2VsdmVTIiwiQWJvdXQiLCJGb3JtIiwiSGVhZCIsIkhvbWUiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJzdWJqZWN0Iiwic2V0U3ViamVjdCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9nIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJyZXMiLCJzdGF0dXMiLCJGb290ZXIiLCJjdXJyZW50UGFnZSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJmb290ZXIiLCJEcm9wZG93biIsIkRyb3Bkb3duQnV0dG9uIiwiTmF2YmFyIiwiTmF2IiwiTmF2RHJvcGRvd24iLCJGb3JtQ29udHJvbCIsIkJ1dHRvbiIsIk5hdkl0ZW0iLCJMaW5rIiwiTmF2aWdhdGlvbiIsInNob3dOYXZzIiwic2V0U2hvd05hdnMiLCJJY29uIiwiUHJvamVjdHMiLCJSZXN1bWUiLCJDb250YWN0IiwiUG9ydGZvbGlvQ29udGFpbmVyIiwic2V0Q3VycmVudFBhZ2UiLCJyZW5kZXJQYWdlIiwicGFnZSIsImhlYWRlckltZyJdLCJzb3VyY2VSb290IjoiIn0=