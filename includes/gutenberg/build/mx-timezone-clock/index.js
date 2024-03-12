/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./includes/gutenberg/src/mx-timezone-clock/edit.js":
/*!**********************************************************!*\
  !*** ./includes/gutenberg/src/mx-timezone-clock/edit.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./includes/gutenberg/src/mx-timezone-clock/editor.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block.json */ "./includes/gutenberg/src/mx-timezone-clock/block.json");
/* harmony import */ var timezones_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! timezones-list */ "./node_modules/timezones-list/dist/index.js");
/* harmony import */ var timezones_list__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(timezones_list__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var iso_639_1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! iso-639-1 */ "./node_modules/iso-639-1/src/index.js");
/* harmony import */ var iso_639_1__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(iso_639_1__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");












function Edit({
  attributes,
  setAttributes
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();

  // time zones
  const formattedTimezones = [];
  const _timezones = timezones_list__WEBPACK_IMPORTED_MODULE_9___default().sort((a, b) => {
    if (a.label < b.label) {
      return -1;
    }
    if (a.label > b.label) {
      return 1;
    }
    return 0;
  });
  _timezones.forEach(element => {
    let obj = {
      label: element.label,
      value: element.tzCode
    };
    formattedTimezones.push(obj);
  });

  // locales
  const formattedLocales = [];
  const locales = iso_639_1__WEBPACK_IMPORTED_MODULE_10___default().getAllCodes();
  locales.forEach(element => {
    let obj = {
      label: element,
      value: element
    };
    formattedLocales.push(obj);
  });

  // font sizes
  let formattedFontSizes = [];
  for (let size = 0; size <= 100; size++) {
    let obj = {
      label: size,
      value: size
    };
    formattedFontSizes.push(obj);
  }

  // image names
  let imageNames = [];
  for (let key = 1; key <= 30; key++) {
    const img = `clock-face${key}.png`;
    imageNames.push(img);
  }

  // image upload
  const ALLOWED_MEDIA_TYPES = ['image'];
  const imageData = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    if (attributes.mediaId) {
      return select('core').getEntityRecord('postType', 'attachment', attributes.mediaId);
    } else {
      return false;
    }
  }, [attributes]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (imageData?.media_details) {
      setAttributes({
        clock_upload: imageData.media_details.sizes.full.source_url
      });
    }
  }, [imageData]);

  // generate id
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    setAttributes({
      clock_id: 'mx-' + (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])()
    });
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (typeof mxmtzcRunClocks == 'object') {
      setTimeout(() => {
        mxmtzcRunClocks.initClockById('.' + attributes.clock_id);
        console.log('attempt to init');
      }, 2000);
    }
  }, [attributes]);
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "mx-settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Panel, {
    header: "Clock Properties"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Time Zone', 'mxmtzc-domain'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    onChange: time_zone => setAttributes({
      time_zone
    }),
    __nextHasNoMarginBottom: true,
    value: attributes.time_zone,
    options: formattedTimezones
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('City Name', 'mxmtzc-domain'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: attributes.city_name,
    onChange: city_name => setAttributes({
      city_name
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Time Format', 'mxmtzc-domain'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    onChange: time_format => setAttributes({
      time_format
    }),
    __nextHasNoMarginBottom: true,
    value: attributes.time_format,
    options: [{
      label: 24,
      value: 24
    }, {
      label: 12,
      value: 12
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Digital Clock', 'mxmtzc-domain'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    onChange: digital_clock => setAttributes({
      digital_clock
    }),
    __nextHasNoMarginBottom: true,
    value: attributes.digital_clock,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Yes', 'mxmtzc-domain'),
      value: 'true'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No', 'mxmtzc-domain'),
      value: 'false'
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clock Language', 'mxmtzc-domain'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    onChange: lang => setAttributes({
      lang
    }),
    __nextHasNoMarginBottom: true,
    value: attributes.lang,
    options: formattedLocales
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date Language', 'mxmtzc-domain'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    onChange: lang_for_date => setAttributes({
      lang_for_date
    }),
    __nextHasNoMarginBottom: true,
    value: attributes.lang_for_date,
    options: formattedLocales
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Dates', 'mxmtzc-domain'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    onChange: show_days => setAttributes({
      show_days
    }),
    __nextHasNoMarginBottom: true,
    value: attributes.show_days,
    options: [{
      label: 'Yes',
      value: 'true'
    }, {
      label: 'No',
      value: 'false'
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clock Font Size', 'mxmtzc-domain'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    onChange: clock_font_size => setAttributes({
      clock_font_size
    }),
    __nextHasNoMarginBottom: true,
    value: attributes.clock_font_size,
    options: formattedFontSizes
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Align', 'mxmtzc-domain'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    onChange: text_align => setAttributes({
      text_align
    }),
    __nextHasNoMarginBottom: true,
    value: attributes.text_align,
    options: [{
      label: 'Left',
      value: 'left'
    }, {
      label: 'Center',
      value: 'center'
    }, {
      label: 'Right',
      value: 'right'
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Seconds', 'mxmtzc-domain'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    onChange: show_seconds => setAttributes({
      show_seconds
    }),
    __nextHasNoMarginBottom: true,
    value: attributes.show_seconds,
    options: [{
      label: 'Yes',
      value: 'true'
    }, {
      label: 'No',
      value: 'false'
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Arrow Type', 'mxmtzc-domain'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    onChange: arrow_type => setAttributes({
      arrow_type
    }),
    __nextHasNoMarginBottom: true,
    value: attributes.arrow_type,
    options: [{
      label: 'Classical',
      value: 'classical'
    }, {
      label: 'Modern',
      value: 'modern'
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Super Simple', 'mxmtzc-domain'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    onChange: super_simple => setAttributes({
      super_simple
    }),
    __nextHasNoMarginBottom: true,
    value: attributes.super_simple,
    options: [{
      label: 'Yes',
      value: 'true'
    }, {
      label: 'No',
      value: 'false'
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Arrows Color', 'mxmtzc-domain'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
    onChange: arrows_color => setAttributes({
      arrows_color
    }),
    defaultValue: attributes.arrows_color
  }))), typeof mxdfmtzc_localizer === 'object' && mxdfmtzc_localizer.hasOwnProperty('image_folder') ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clock Type', 'mxmtzc-domain'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mx-timezone-clocks-types"
  }, imageNames.map((image, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: 'mx-timezone-clocks-type' + index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: mxdfmtzc_localizer.image_folder + image
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "radio",
      name: "mx-timezone-clocks-type",
      id: 'mx-timezone-clocks-type' + index,
      value: image,
      onChange: e => {
        setAttributes({
          clock_type: e.currentTarget.value
        });
      },
      checked: image === attributes.clock_type
    })));
  })))) : '', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Clock', 'mxmtzc-domain'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mx-timezone-clocks-upload-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      mediaId: media.id
    }),
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: attributes.mediaId,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      icon: "upload",
      text: attributes.mediaId ? 'Change Image' : 'Upload Image',
      variant: "secondary",
      onClick: open
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.mediaId && attributes?.clock_upload && attributes?.clock_upload !== 'false' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mx-timezone-clocks-uploaded-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.clock_upload,
    id: attributes.mediaId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    icon: "remove",
    variant: "secondary",
    isDestructive: "true",
    onClick: () => {
      setAttributes({
        clock_upload: 'false',
        mediaId: null
      });
    }
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "No image!"))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: "mx-render",
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default()), {
    block: _block_json__WEBPACK_IMPORTED_MODULE_8__.name,
    attributes: attributes
  }))];
}

/***/ }),

/***/ "./includes/gutenberg/src/mx-timezone-clock/index.js":
/*!***********************************************************!*\
  !*** ./includes/gutenberg/src/mx-timezone-clock/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./includes/gutenberg/src/mx-timezone-clock/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./includes/gutenberg/src/mx-timezone-clock/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./includes/gutenberg/src/mx-timezone-clock/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./includes/gutenberg/src/mx-timezone-clock/save.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./includes/gutenberg/src/mx-timezone-clock/save.js":
/*!**********************************************************!*\
  !*** ./includes/gutenberg/src/mx-timezone-clock/save.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
function save() {
  return null;
}

/***/ }),

/***/ "./includes/gutenberg/src/mx-timezone-clock/editor.scss":
/*!**************************************************************!*\
  !*** ./includes/gutenberg/src/mx-timezone-clock/editor.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./includes/gutenberg/src/mx-timezone-clock/style.scss":
/*!*************************************************************!*\
  !*** ./includes/gutenberg/src/mx-timezone-clock/style.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/timezones-list/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/timezones-list/dist/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const timezones_json_1 = __importDefault(__webpack_require__(/*! ./timezones.json */ "./node_modules/timezones-list/dist/timezones.json"));
exports["default"] = timezones_json_1.default;


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./node_modules/iso-639-1/src/data.js":
/*!********************************************!*\
  !*** ./node_modules/iso-639-1/src/data.js ***!
  \********************************************/
/***/ ((module) => {

const LANGUAGES_LIST = {
  aa: {
    name: 'Afar',
    nativeName: 'Afaraf',
  },
  ab: {
    name: 'Abkhaz',
    nativeName: 'аҧсуа бызшәа',
  },
  ae: {
    name: 'Avestan',
    nativeName: 'avesta',
  },
  af: {
    name: 'Afrikaans',
    nativeName: 'Afrikaans',
  },
  ak: {
    name: 'Akan',
    nativeName: 'Akan',
  },
  am: {
    name: 'Amharic',
    nativeName: 'አማርኛ',
  },
  an: {
    name: 'Aragonese',
    nativeName: 'aragonés',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'اَلْعَرَبِيَّةُ',
  },
  as: {
    name: 'Assamese',
    nativeName: 'অসমীয়া',
  },
  av: {
    name: 'Avaric',
    nativeName: 'авар мацӀ',
  },
  ay: {
    name: 'Aymara',
    nativeName: 'aymar aru',
  },
  az: {
    name: 'Azerbaijani',
    nativeName: 'azərbaycan dili',
  },
  ba: {
    name: 'Bashkir',
    nativeName: 'башҡорт теле',
  },
  be: {
    name: 'Belarusian',
    nativeName: 'беларуская мова',
  },
  bg: {
    name: 'Bulgarian',
    nativeName: 'български език',
  },
  bi: {
    name: 'Bislama',
    nativeName: 'Bislama',
  },
  bm: {
    name: 'Bambara',
    nativeName: 'bamanankan',
  },
  bn: {
    name: 'Bengali',
    nativeName: 'বাংলা',
  },
  bo: {
    name: 'Tibetan',
    nativeName: 'བོད་ཡིག',
  },
  br: {
    name: 'Breton',
    nativeName: 'brezhoneg',
  },
  bs: {
    name: 'Bosnian',
    nativeName: 'bosanski jezik',
  },
  ca: {
    name: 'Catalan',
    nativeName: 'Català',
  },
  ce: {
    name: 'Chechen',
    nativeName: 'нохчийн мотт',
  },
  ch: {
    name: 'Chamorro',
    nativeName: 'Chamoru',
  },
  co: {
    name: 'Corsican',
    nativeName: 'corsu',
  },
  cr: {
    name: 'Cree',
    nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ',
  },
  cs: {
    name: 'Czech',
    nativeName: 'čeština',
  },
  cu: {
    name: 'Old Church Slavonic',
    nativeName: 'ѩзыкъ словѣньскъ',
  },
  cv: {
    name: 'Chuvash',
    nativeName: 'чӑваш чӗлхи',
  },
  cy: {
    name: 'Welsh',
    nativeName: 'Cymraeg',
  },
  da: {
    name: 'Danish',
    nativeName: 'Dansk',
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
  },
  dv: {
    name: 'Divehi',
    nativeName: 'ދިވެހި',
  },
  dz: {
    name: 'Dzongkha',
    nativeName: 'རྫོང་ཁ',
  },
  ee: {
    name: 'Ewe',
    nativeName: 'Eʋegbe',
  },
  el: {
    name: 'Greek',
    nativeName: 'Ελληνικά',
  },
  en: {
    name: 'English',
    nativeName: 'English',
  },
  eo: {
    name: 'Esperanto',
    nativeName: 'Esperanto',
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
  },
  et: {
    name: 'Estonian',
    nativeName: 'eesti',
  },
  eu: {
    name: 'Basque',
    nativeName: 'euskara',
  },
  fa: {
    name: 'Persian',
    nativeName: 'فارسی',
  },
  ff: {
    name: 'Fula',
    nativeName: 'Fulfulde',
  },
  fi: {
    name: 'Finnish',
    nativeName: 'suomi',
  },
  fj: {
    name: 'Fijian',
    nativeName: 'vosa Vakaviti',
  },
  fo: {
    name: 'Faroese',
    nativeName: 'Føroyskt',
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
  },
  fy: {
    name: 'Western Frisian',
    nativeName: 'Frysk',
  },
  ga: {
    name: 'Irish',
    nativeName: 'Gaeilge',
  },
  gd: {
    name: 'Scottish Gaelic',
    nativeName: 'Gàidhlig',
  },
  gl: {
    name: 'Galician',
    nativeName: 'galego',
  },
  gn: {
    name: 'Guaraní',
    nativeName: "Avañe'ẽ",
  },
  gu: {
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
  },
  gv: {
    name: 'Manx',
    nativeName: 'Gaelg',
  },
  ha: {
    name: 'Hausa',
    nativeName: 'هَوُسَ',
  },
  he: {
    name: 'Hebrew',
    nativeName: 'עברית',
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी',
  },
  ho: {
    name: 'Hiri Motu',
    nativeName: 'Hiri Motu',
  },
  hr: {
    name: 'Croatian',
    nativeName: 'Hrvatski',
  },
  ht: {
    name: 'Haitian',
    nativeName: 'Kreyòl ayisyen',
  },
  hu: {
    name: 'Hungarian',
    nativeName: 'magyar',
  },
  hy: {
    name: 'Armenian',
    nativeName: 'Հայերեն',
  },
  hz: {
    name: 'Herero',
    nativeName: 'Otjiherero',
  },
  ia: {
    name: 'Interlingua',
    nativeName: 'Interlingua',
  },
  id: {
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
  },
  ie: {
    name: 'Interlingue',
    nativeName: 'Interlingue',
  },
  ig: {
    name: 'Igbo',
    nativeName: 'Asụsụ Igbo',
  },
  ii: {
    name: 'Nuosu',
    nativeName: 'ꆈꌠ꒿ Nuosuhxop',
  },
  ik: {
    name: 'Inupiaq',
    nativeName: 'Iñupiaq',
  },
  io: {
    name: 'Ido',
    nativeName: 'Ido',
  },
  is: {
    name: 'Icelandic',
    nativeName: 'Íslenska',
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
  },
  iu: {
    name: 'Inuktitut',
    nativeName: 'ᐃᓄᒃᑎᑐᑦ',
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
  },
  jv: {
    name: 'Javanese',
    nativeName: 'basa Jawa',
  },
  ka: {
    name: 'Georgian',
    nativeName: 'ქართული',
  },
  kg: {
    name: 'Kongo',
    nativeName: 'Kikongo',
  },
  ki: {
    name: 'Kikuyu',
    nativeName: 'Gĩkũyũ',
  },
  kj: {
    name: 'Kwanyama',
    nativeName: 'Kuanyama',
  },
  kk: {
    name: 'Kazakh',
    nativeName: 'қазақ тілі',
  },
  kl: {
    name: 'Kalaallisut',
    nativeName: 'kalaallisut',
  },
  km: {
    name: 'Khmer',
    nativeName: 'ខេមរភាសា',
  },
  kn: {
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어',
  },
  kr: {
    name: 'Kanuri',
    nativeName: 'Kanuri',
  },
  ks: {
    name: 'Kashmiri',
    nativeName: 'कश्मीरी',
  },
  ku: {
    name: 'Kurdish',
    nativeName: 'Kurdî',
  },
  kv: {
    name: 'Komi',
    nativeName: 'коми кыв',
  },
  kw: {
    name: 'Cornish',
    nativeName: 'Kernewek',
  },
  ky: {
    name: 'Kyrgyz',
    nativeName: 'Кыргызча',
  },
  la: {
    name: 'Latin',
    nativeName: 'latine',
  },
  lb: {
    name: 'Luxembourgish',
    nativeName: 'Lëtzebuergesch',
  },
  lg: {
    name: 'Ganda',
    nativeName: 'Luganda',
  },
  li: {
    name: 'Limburgish',
    nativeName: 'Limburgs',
  },
  ln: {
    name: 'Lingala',
    nativeName: 'Lingála',
  },
  lo: {
    name: 'Lao',
    nativeName: 'ພາສາລາວ',
  },
  lt: {
    name: 'Lithuanian',
    nativeName: 'lietuvių kalba',
  },
  lu: {
    name: 'Luba-Katanga',
    nativeName: 'Kiluba',
  },
  lv: {
    name: 'Latvian',
    nativeName: 'latviešu valoda',
  },
  mg: {
    name: 'Malagasy',
    nativeName: 'fiteny malagasy',
  },
  mh: {
    name: 'Marshallese',
    nativeName: 'Kajin M̧ajeļ',
  },
  mi: {
    name: 'Māori',
    nativeName: 'te reo Māori',
  },
  mk: {
    name: 'Macedonian',
    nativeName: 'македонски јазик',
  },
  ml: {
    name: 'Malayalam',
    nativeName: 'മലയാളം',
  },
  mn: {
    name: 'Mongolian',
    nativeName: 'Монгол хэл',
  },
  mr: {
    name: 'Marathi',
    nativeName: 'मराठी',
  },
  ms: {
    name: 'Malay',
    nativeName: 'Bahasa Melayu',
  },
  mt: {
    name: 'Maltese',
    nativeName: 'Malti',
  },
  my: {
    name: 'Burmese',
    nativeName: 'ဗမာစာ',
  },
  na: {
    name: 'Nauru',
    nativeName: 'Dorerin Naoero',
  },
  nb: {
    name: 'Norwegian Bokmål',
    nativeName: 'Norsk bokmål',
  },
  nd: {
    name: 'Northern Ndebele',
    nativeName: 'isiNdebele',
  },
  ne: {
    name: 'Nepali',
    nativeName: 'नेपाली',
  },
  ng: {
    name: 'Ndonga',
    nativeName: 'Owambo',
  },
  nl: {
    name: 'Dutch',
    nativeName: 'Nederlands',
  },
  nn: {
    name: 'Norwegian Nynorsk',
    nativeName: 'Norsk nynorsk',
  },
  no: {
    name: 'Norwegian',
    nativeName: 'Norsk',
  },
  nr: {
    name: 'Southern Ndebele',
    nativeName: 'isiNdebele',
  },
  nv: {
    name: 'Navajo',
    nativeName: 'Diné bizaad',
  },
  ny: {
    name: 'Chichewa',
    nativeName: 'chiCheŵa',
  },
  oc: {
    name: 'Occitan',
    nativeName: 'occitan',
  },
  oj: {
    name: 'Ojibwe',
    nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ',
  },
  om: {
    name: 'Oromo',
    nativeName: 'Afaan Oromoo',
  },
  or: {
    name: 'Oriya',
    nativeName: 'ଓଡ଼ିଆ',
  },
  os: {
    name: 'Ossetian',
    nativeName: 'ирон æвзаг',
  },
  pa: {
    name: 'Panjabi',
    nativeName: 'ਪੰਜਾਬੀ',
  },
  pi: {
    name: 'Pāli',
    nativeName: 'पाऴि',
  },
  pl: {
    name: 'Polish',
    nativeName: 'Polski',
  },
  ps: {
    name: 'Pashto',
    nativeName: 'پښتو',
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português',
  },
  qu: {
    name: 'Quechua',
    nativeName: 'Runa Simi',
  },
  rm: {
    name: 'Romansh',
    nativeName: 'rumantsch grischun',
  },
  rn: {
    name: 'Kirundi',
    nativeName: 'Ikirundi',
  },
  ro: {
    name: 'Romanian',
    nativeName: 'Română',
  },
  ru: {
    name: 'Russian',
    nativeName: 'Русский',
  },
  rw: {
    name: 'Kinyarwanda',
    nativeName: 'Ikinyarwanda',
  },
  sa: {
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्',
  },
  sc: {
    name: 'Sardinian',
    nativeName: 'sardu',
  },
  sd: {
    name: 'Sindhi',
    nativeName: 'सिन्धी',
  },
  se: {
    name: 'Northern Sami',
    nativeName: 'Davvisámegiella',
  },
  sg: {
    name: 'Sango',
    nativeName: 'yângâ tî sängö',
  },
  si: {
    name: 'Sinhala',
    nativeName: 'සිංහල',
  },
  sk: {
    name: 'Slovak',
    nativeName: 'slovenčina',
  },
  sl: {
    name: 'Slovenian',
    nativeName: 'slovenščina',
  },
  sm: {
    name: 'Samoan',
    nativeName: "gagana fa'a Samoa",
  },
  sn: {
    name: 'Shona',
    nativeName: 'chiShona',
  },
  so: {
    name: 'Somali',
    nativeName: 'Soomaaliga',
  },
  sq: {
    name: 'Albanian',
    nativeName: 'Shqip',
  },
  sr: {
    name: 'Serbian',
    nativeName: 'српски језик',
  },
  ss: {
    name: 'Swati',
    nativeName: 'SiSwati',
  },
  st: {
    name: 'Southern Sotho',
    nativeName: 'Sesotho',
  },
  su: {
    name: 'Sundanese',
    nativeName: 'Basa Sunda',
  },
  sv: {
    name: 'Swedish',
    nativeName: 'Svenska',
  },
  sw: {
    name: 'Swahili',
    nativeName: 'Kiswahili',
  },
  ta: {
    name: 'Tamil',
    nativeName: 'தமிழ்',
  },
  te: {
    name: 'Telugu',
    nativeName: 'తెలుగు',
  },
  tg: {
    name: 'Tajik',
    nativeName: 'тоҷикӣ',
  },
  th: {
    name: 'Thai',
    nativeName: 'ไทย',
  },
  ti: {
    name: 'Tigrinya',
    nativeName: 'ትግርኛ',
  },
  tk: {
    name: 'Turkmen',
    nativeName: 'Türkmençe',
  },
  tl: {
    name: 'Tagalog',
    nativeName: 'Wikang Tagalog',
  },
  tn: {
    name: 'Tswana',
    nativeName: 'Setswana',
  },
  to: {
    name: 'Tonga',
    nativeName: 'faka Tonga',
  },
  tr: {
    name: 'Turkish',
    nativeName: 'Türkçe',
  },
  ts: {
    name: 'Tsonga',
    nativeName: 'Xitsonga',
  },
  tt: {
    name: 'Tatar',
    nativeName: 'татар теле',
  },
  tw: {
    name: 'Twi',
    nativeName: 'Twi',
  },
  ty: {
    name: 'Tahitian',
    nativeName: 'Reo Tahiti',
  },
  ug: {
    name: 'Uyghur',
    nativeName: 'ئۇيغۇرچە‎',
  },
  uk: {
    name: 'Ukrainian',
    nativeName: 'Українська',
  },
  ur: {
    name: 'Urdu',
    nativeName: 'اردو',
  },
  uz: {
    name: 'Uzbek',
    nativeName: 'Ўзбек',
  },
  ve: {
    name: 'Venda',
    nativeName: 'Tshivenḓa',
  },
  vi: {
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
  },
  vo: {
    name: 'Volapük',
    nativeName: 'Volapük',
  },
  wa: {
    name: 'Walloon',
    nativeName: 'walon',
  },
  wo: {
    name: 'Wolof',
    nativeName: 'Wollof',
  },
  xh: {
    name: 'Xhosa',
    nativeName: 'isiXhosa',
  },
  yi: {
    name: 'Yiddish',
    nativeName: 'ייִדיש',
  },
  yo: {
    name: 'Yoruba',
    nativeName: 'Yorùbá',
  },
  za: {
    name: 'Zhuang',
    nativeName: 'Saɯ cueŋƅ',
  },
  zh: {
    name: 'Chinese',
    nativeName: '中文',
  },
  zu: {
    name: 'Zulu',
    nativeName: 'isiZulu',
  },
};

module.exports = LANGUAGES_LIST;


/***/ }),

/***/ "./node_modules/iso-639-1/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/iso-639-1/src/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const LANGUAGES_LIST = __webpack_require__(/*! ./data.js */ "./node_modules/iso-639-1/src/data.js");

const LANGUAGES = {};
const LANGUAGES_BY_NAME = {};
const LANGUAGE_CODES = [];
const LANGUAGE_NAMES = [];
const LANGUAGE_NATIVE_NAMES = [];

for (const code in LANGUAGES_LIST) {
  const { name, nativeName } = LANGUAGES_LIST[code];
  LANGUAGES[code] =
    LANGUAGES_BY_NAME[name.toLowerCase()] =
    LANGUAGES_BY_NAME[nativeName.toLowerCase()] =
      { code, name, nativeName };
  LANGUAGE_CODES.push(code);
  LANGUAGE_NAMES.push(name);
  LANGUAGE_NATIVE_NAMES.push(nativeName);
}

module.exports = class ISO6391 {
  static getLanguages(codes = []) {
    return codes.map(code =>
      ISO6391.validate(code)
        ? Object.assign({}, LANGUAGES[code])
        : { code, name: '', nativeName: '' }
    );
  }

  static getName(code) {
    return ISO6391.validate(code) ? LANGUAGES_LIST[code].name : '';
  }

  static getAllNames() {
    return LANGUAGE_NAMES.slice();
  }

  static getNativeName(code) {
    return ISO6391.validate(code) ? LANGUAGES_LIST[code].nativeName : '';
  }

  static getAllNativeNames() {
    return LANGUAGE_NATIVE_NAMES.slice();
  }

  static getCode(name) {
    name = name.toLowerCase();
    return LANGUAGES_BY_NAME.hasOwnProperty(name)
      ? LANGUAGES_BY_NAME[name].code
      : '';
  }

  static getAllCodes() {
    return LANGUAGE_CODES.slice();
  }

  static validate(code) {
    return LANGUAGES_LIST.hasOwnProperty(code);
  }
}


/***/ }),

/***/ "./includes/gutenberg/src/mx-timezone-clock/block.json":
/*!*************************************************************!*\
  !*** ./includes/gutenberg/src/mx-timezone-clock/block.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"mxdfmtzc/mx-timezone-clock","version":"0.1.3","title":"MX Timezone Clock","category":"widgets","icon":"clock","description":"Add MX Timezone Clock","supports":{"html":false},"attributes":{"clock_id":{"type":"string","default":""},"time_zone":{"type":"string","default":"Europe/London"},"city_name":{"type":"string","default":"London"},"time_format":{"type":"number","default":24},"digital_clock":{"type":"string","default":"false"},"lang":{"type":"string","default":"en"},"lang_for_date":{"type":"string","default":"en"},"show_days":{"type":"string","default":"false"},"clock_font_size":{"type":"number","default":14},"show_seconds":{"type":"string","default":"true"},"arrow_type":{"type":"string","default":"classical"},"super_simple":{"type":"string","default":"false"},"arrows_color":{"type":"string","default":"#333333"},"clock_type":{"type":"string","default":"clock-face2.png"},"clock_upload":{"type":"string","default":"false"},"mediaId":{"type":"string","default":null},"text_align":{"type":"string","default":"center"}},"textdomain":"mxmtzc-domain","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ }),

/***/ "./node_modules/timezones-list/dist/timezones.json":
/*!*********************************************************!*\
  !*** ./node_modules/timezones-list/dist/timezones.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"label":"Pacific/Midway (GMT-11:00)","tzCode":"Pacific/Midway","name":"(GMT-11:00) Midway","utc":"-11:00"},{"label":"Pacific/Niue (GMT-11:00)","tzCode":"Pacific/Niue","name":"(GMT-11:00) Alofi","utc":"-11:00"},{"label":"Pacific/Pago_Pago (GMT-11:00)","tzCode":"Pacific/Pago_Pago","name":"(GMT-11:00) Pago Pago, Tāfuna, Ta`ū, Taulaga","utc":"-11:00"},{"label":"America/Adak (GMT-10:00)","tzCode":"America/Adak","name":"(GMT-10:00) Adak","utc":"-10:00"},{"label":"Pacific/Honolulu (GMT-10:00)","tzCode":"Pacific/Honolulu","name":"(GMT-10:00) Honolulu, East Honolulu, Pearl City, Hilo, Kailua","utc":"-10:00"},{"label":"Pacific/Rarotonga (GMT-10:00)","tzCode":"Pacific/Rarotonga","name":"(GMT-10:00) Avarua","utc":"-10:00"},{"label":"Pacific/Tahiti (GMT-10:00)","tzCode":"Pacific/Tahiti","name":"(GMT-10:00) Faaa, Papeete, Punaauia, Pirae, Mahina","utc":"-10:00"},{"label":"Pacific/Marquesas (GMT-09:30)","tzCode":"Pacific/Marquesas","name":"(GMT-09:30) Taiohae","utc":"-09:30"},{"label":"America/Anchorage (GMT-09:00)","tzCode":"America/Anchorage","name":"(GMT-09:00) Anchorage, Fairbanks, Eagle River, Badger, Knik-Fairview","utc":"-09:00"},{"label":"America/Juneau (GMT-09:00)","tzCode":"America/Juneau","name":"(GMT-09:00) Juneau","utc":"-09:00"},{"label":"America/Metlakatla (GMT-09:00)","tzCode":"America/Metlakatla","name":"(GMT-09:00) Metlakatla","utc":"-09:00"},{"label":"America/Nome (GMT-09:00)","tzCode":"America/Nome","name":"(GMT-09:00) Nome","utc":"-09:00"},{"label":"America/Sitka (GMT-09:00)","tzCode":"America/Sitka","name":"(GMT-09:00) Sitka, Ketchikan","utc":"-09:00"},{"label":"America/Yakutat (GMT-09:00)","tzCode":"America/Yakutat","name":"(GMT-09:00) Yakutat","utc":"-09:00"},{"label":"Pacific/Gambier (GMT-09:00)","tzCode":"Pacific/Gambier","name":"(GMT-09:00) Gambier","utc":"-09:00"},{"label":"America/Los_Angeles (GMT-08:00)","tzCode":"America/Los_Angeles","name":"(GMT-08:00) Los Angeles, San Diego, San Jose, San Francisco, Seattle","utc":"-08:00"},{"label":"America/Tijuana (GMT-08:00)","tzCode":"America/Tijuana","name":"(GMT-08:00) Tijuana, Mexicali, Ensenada, Rosarito, Tecate","utc":"-08:00"},{"label":"America/Vancouver (GMT-08:00)","tzCode":"America/Vancouver","name":"(GMT-08:00) Vancouver, Surrey, Okanagan, Victoria, Burnaby","utc":"-08:00"},{"label":"Pacific/Pitcairn (GMT-08:00)","tzCode":"Pacific/Pitcairn","name":"(GMT-08:00) Adamstown","utc":"-08:00"},{"label":"America/Boise (GMT-07:00)","tzCode":"America/Boise","name":"(GMT-07:00) Boise, Meridian, Nampa, Idaho Falls, Pocatello","utc":"-07:00"},{"label":"America/Cambridge_Bay (GMT-07:00)","tzCode":"America/Cambridge_Bay","name":"(GMT-07:00) Cambridge Bay","utc":"-07:00"},{"label":"America/Chihuahua (GMT-07:00)","tzCode":"America/Chihuahua","name":"(GMT-07:00) Chihuahua, Ciudad Delicias, Cuauhtémoc, Parral, Nuevo Casas Grandes","utc":"-07:00"},{"label":"America/Creston (GMT-07:00)","tzCode":"America/Creston","name":"(GMT-07:00) Creston","utc":"-07:00"},{"label":"America/Dawson (GMT-07:00)","tzCode":"America/Dawson","name":"(GMT-07:00) Dawson","utc":"-07:00"},{"label":"America/Dawson_Creek (GMT-07:00)","tzCode":"America/Dawson_Creek","name":"(GMT-07:00) Fort St. John, Dawson Creek","utc":"-07:00"},{"label":"America/Denver (GMT-07:00)","tzCode":"America/Denver","name":"(GMT-07:00) Denver, El Paso, Albuquerque, Colorado Springs, Aurora","utc":"-07:00"},{"label":"America/Edmonton (GMT-07:00)","tzCode":"America/Edmonton","name":"(GMT-07:00) Calgary, Edmonton, Fort McMurray, Red Deer, Lethbridge","utc":"-07:00"},{"label":"America/Fort_Nelson (GMT-07:00)","tzCode":"America/Fort_Nelson","name":"(GMT-07:00) Fort Nelson","utc":"-07:00"},{"label":"America/Hermosillo (GMT-07:00)","tzCode":"America/Hermosillo","name":"(GMT-07:00) Hermosillo, Ciudad Obregón, Nogales, San Luis Río Colorado, Navojoa","utc":"-07:00"},{"label":"America/Inuvik (GMT-07:00)","tzCode":"America/Inuvik","name":"(GMT-07:00) Inuvik","utc":"-07:00"},{"label":"America/Mazatlan (GMT-07:00)","tzCode":"America/Mazatlan","name":"(GMT-07:00) Culiacán, Mazatlán, Tepic, Los Mochis, La Paz","utc":"-07:00"},{"label":"America/Ojinaga (GMT-07:00)","tzCode":"America/Ojinaga","name":"(GMT-07:00) Ciudad Juárez, Manuel Ojinaga, Ojinaga","utc":"-07:00"},{"label":"America/Phoenix (GMT-07:00)","tzCode":"America/Phoenix","name":"(GMT-07:00) Phoenix, Tucson, Mesa, Chandler, Gilbert","utc":"-07:00"},{"label":"America/Whitehorse (GMT-07:00)","tzCode":"America/Whitehorse","name":"(GMT-07:00) Whitehorse","utc":"-07:00"},{"label":"America/Yellowknife (GMT-07:00)","tzCode":"America/Yellowknife","name":"(GMT-07:00) Yellowknife","utc":"-07:00"},{"label":"America/Bahia_Banderas (GMT-06:00)","tzCode":"America/Bahia_Banderas","name":"(GMT-06:00) Mezcales, San Vicente, Bucerías, Valle de Banderas","utc":"-06:00"},{"label":"America/Belize (GMT-06:00)","tzCode":"America/Belize","name":"(GMT-06:00) Belize City, San Ignacio, Orange Walk, Belmopan, Dangriga","utc":"-06:00"},{"label":"America/Chicago (GMT-06:00)","tzCode":"America/Chicago","name":"(GMT-06:00) Chicago, Houston, San Antonio, Dallas, Austin","utc":"-06:00"},{"label":"America/Costa_Rica (GMT-06:00)","tzCode":"America/Costa_Rica","name":"(GMT-06:00) San José, Limón, San Francisco, Alajuela, Liberia","utc":"-06:00"},{"label":"America/El_Salvador (GMT-06:00)","tzCode":"America/El_Salvador","name":"(GMT-06:00) San Salvador, Soyapango, Santa Ana, San Miguel, Mejicanos","utc":"-06:00"},{"label":"America/Guatemala (GMT-06:00)","tzCode":"America/Guatemala","name":"(GMT-06:00) Guatemala City, Mixco, Villa Nueva, Petapa, San Juan Sacatepéquez","utc":"-06:00"},{"label":"America/Indiana/Knox (GMT-06:00)","tzCode":"America/Indiana/Knox","name":"(GMT-06:00) Knox","utc":"-06:00"},{"label":"America/Indiana/Tell_City (GMT-06:00)","tzCode":"America/Indiana/Tell_City","name":"(GMT-06:00) Tell City","utc":"-06:00"},{"label":"America/Managua (GMT-06:00)","tzCode":"America/Managua","name":"(GMT-06:00) Managua, León, Masaya, Chinandega, Matagalpa","utc":"-06:00"},{"label":"America/Matamoros (GMT-06:00)","tzCode":"America/Matamoros","name":"(GMT-06:00) Reynosa, Heroica Matamoros, Nuevo Laredo, Piedras Negras, Ciudad Acuña","utc":"-06:00"},{"label":"America/Menominee (GMT-06:00)","tzCode":"America/Menominee","name":"(GMT-06:00) Menominee, Iron Mountain, Kingsford, Ironwood, Iron River","utc":"-06:00"},{"label":"America/Merida (GMT-06:00)","tzCode":"America/Merida","name":"(GMT-06:00) Mérida, Campeche, Ciudad del Carmen, Kanasín, Valladolid","utc":"-06:00"},{"label":"America/Mexico_City (GMT-06:00)","tzCode":"America/Mexico_City","name":"(GMT-06:00) Mexico City, Iztapalapa, Ecatepec de Morelos, Guadalajara, Puebla","utc":"-06:00"},{"label":"America/Monterrey (GMT-06:00)","tzCode":"America/Monterrey","name":"(GMT-06:00) Monterrey, Saltillo, Guadalupe, Torreón, Victoria de Durango","utc":"-06:00"},{"label":"America/North_Dakota/Beulah (GMT-06:00)","tzCode":"America/North_Dakota/Beulah","name":"(GMT-06:00) Beulah","utc":"-06:00"},{"label":"America/North_Dakota/Center (GMT-06:00)","tzCode":"America/North_Dakota/Center","name":"(GMT-06:00) Center","utc":"-06:00"},{"label":"America/North_Dakota/New_Salem (GMT-06:00)","tzCode":"America/North_Dakota/New_Salem","name":"(GMT-06:00) Mandan","utc":"-06:00"},{"label":"America/Rainy_River (GMT-06:00)","tzCode":"America/Rainy_River","name":"(GMT-06:00) Rainy River","utc":"-06:00"},{"label":"America/Rankin_Inlet (GMT-06:00)","tzCode":"America/Rankin_Inlet","name":"(GMT-06:00) Rankin Inlet","utc":"-06:00"},{"label":"America/Regina (GMT-06:00)","tzCode":"America/Regina","name":"(GMT-06:00) Saskatoon, Regina, Prince Albert, Moose Jaw, North Battleford","utc":"-06:00"},{"label":"America/Resolute (GMT-06:00)","tzCode":"America/Resolute","name":"(GMT-06:00) Resolute","utc":"-06:00"},{"label":"America/Swift_Current (GMT-06:00)","tzCode":"America/Swift_Current","name":"(GMT-06:00) Swift Current","utc":"-06:00"},{"label":"America/Tegucigalpa (GMT-06:00)","tzCode":"America/Tegucigalpa","name":"(GMT-06:00) Tegucigalpa, San Pedro Sula, Choloma, La Ceiba, El Progreso","utc":"-06:00"},{"label":"America/Winnipeg (GMT-06:00)","tzCode":"America/Winnipeg","name":"(GMT-06:00) Winnipeg, Brandon, Kenora, Portage la Prairie, Thompson","utc":"-06:00"},{"label":"Pacific/Easter (GMT-06:00)","tzCode":"Pacific/Easter","name":"(GMT-06:00) Easter","utc":"-06:00"},{"label":"Pacific/Galapagos (GMT-06:00)","tzCode":"Pacific/Galapagos","name":"(GMT-06:00) Puerto Ayora, Puerto Baquerizo Moreno","utc":"-06:00"},{"label":"America/Atikokan (GMT-05:00)","tzCode":"America/Atikokan","name":"(GMT-05:00) Atikokan","utc":"-05:00"},{"label":"America/Bogota (GMT-05:00)","tzCode":"America/Bogota","name":"(GMT-05:00) Bogotá, Cali, Medellín, Barranquilla, Cartagena","utc":"-05:00"},{"label":"America/Cancun (GMT-05:00)","tzCode":"America/Cancun","name":"(GMT-05:00) Cancún, Chetumal, Playa del Carmen, Cozumel, Felipe Carrillo Puerto","utc":"-05:00"},{"label":"America/Cayman (GMT-05:00)","tzCode":"America/Cayman","name":"(GMT-05:00) George Town, West Bay, Bodden Town, East End, North Side","utc":"-05:00"},{"label":"America/Detroit (GMT-05:00)","tzCode":"America/Detroit","name":"(GMT-05:00) Detroit, Grand Rapids, Warren, Sterling Heights, Ann Arbor","utc":"-05:00"},{"label":"America/Eirunepe (GMT-05:00)","tzCode":"America/Eirunepe","name":"(GMT-05:00) Eirunepé, Benjamin Constant, Envira","utc":"-05:00"},{"label":"America/Grand_Turk (GMT-05:00)","tzCode":"America/Grand_Turk","name":"(GMT-05:00) Cockburn Town","utc":"-05:00"},{"label":"America/Guayaquil (GMT-05:00)","tzCode":"America/Guayaquil","name":"(GMT-05:00) Guayaquil, Quito, Cuenca, Santo Domingo de los Colorados, Machala","utc":"-05:00"},{"label":"America/Havana (GMT-05:00)","tzCode":"America/Havana","name":"(GMT-05:00) Havana, Santiago de Cuba, Camagüey, Holguín, Guantánamo","utc":"-05:00"},{"label":"America/Indiana/Indianapolis (GMT-05:00)","tzCode":"America/Indiana/Indianapolis","name":"(GMT-05:00) Indianapolis, Fort Wayne, South Bend, Carmel, Bloomington","utc":"-05:00"},{"label":"America/Indiana/Marengo (GMT-05:00)","tzCode":"America/Indiana/Marengo","name":"(GMT-05:00) Marengo","utc":"-05:00"},{"label":"America/Indiana/Petersburg (GMT-05:00)","tzCode":"America/Indiana/Petersburg","name":"(GMT-05:00) Petersburg","utc":"-05:00"},{"label":"America/Indiana/Vevay (GMT-05:00)","tzCode":"America/Indiana/Vevay","name":"(GMT-05:00) Vevay","utc":"-05:00"},{"label":"America/Indiana/Vincennes (GMT-05:00)","tzCode":"America/Indiana/Vincennes","name":"(GMT-05:00) Vincennes, Jasper, Washington, Huntingburg","utc":"-05:00"},{"label":"America/Indiana/Winamac (GMT-05:00)","tzCode":"America/Indiana/Winamac","name":"(GMT-05:00) Winamac","utc":"-05:00"},{"label":"America/Iqaluit (GMT-05:00)","tzCode":"America/Iqaluit","name":"(GMT-05:00) Iqaluit","utc":"-05:00"},{"label":"America/Jamaica (GMT-05:00)","tzCode":"America/Jamaica","name":"(GMT-05:00) Kingston, New Kingston, Spanish Town, Portmore, Montego Bay","utc":"-05:00"},{"label":"America/Kentucky/Louisville (GMT-05:00)","tzCode":"America/Kentucky/Louisville","name":"(GMT-05:00) Louisville, Jeffersonville, New Albany, Jeffersontown, Pleasure Ridge Park","utc":"-05:00"},{"label":"America/Kentucky/Monticello (GMT-05:00)","tzCode":"America/Kentucky/Monticello","name":"(GMT-05:00) Monticello","utc":"-05:00"},{"label":"America/Lima (GMT-05:00)","tzCode":"America/Lima","name":"(GMT-05:00) Lima, Arequipa, Callao, Trujillo, Chiclayo","utc":"-05:00"},{"label":"America/Nassau (GMT-05:00)","tzCode":"America/Nassau","name":"(GMT-05:00) Nassau, Lucaya, Freeport, West End, Cooper’s Town","utc":"-05:00"},{"label":"America/New_York (GMT-05:00)","tzCode":"America/New_York","name":"(GMT-05:00) New York City, Brooklyn, Queens, Philadelphia, Manhattan","utc":"-05:00"},{"label":"America/Nipigon (GMT-05:00)","tzCode":"America/Nipigon","name":"(GMT-05:00) Nipigon","utc":"-05:00"},{"label":"America/Panama (GMT-05:00)","tzCode":"America/Panama","name":"(GMT-05:00) Panamá, San Miguelito, Juan Díaz, David, Arraiján","utc":"-05:00"},{"label":"America/Pangnirtung (GMT-05:00)","tzCode":"America/Pangnirtung","name":"(GMT-05:00) Pangnirtung","utc":"-05:00"},{"label":"America/Port-au-Prince (GMT-05:00)","tzCode":"America/Port-au-Prince","name":"(GMT-05:00) Port-au-Prince, Carrefour, Delmas 73, Pétionville, Port-de-Paix","utc":"-05:00"},{"label":"America/Rio_Branco (GMT-05:00)","tzCode":"America/Rio_Branco","name":"(GMT-05:00) Rio Branco, Cruzeiro do Sul, Sena Madureira, Tarauacá, Feijó","utc":"-05:00"},{"label":"America/Thunder_Bay (GMT-05:00)","tzCode":"America/Thunder_Bay","name":"(GMT-05:00) Thunder Bay","utc":"-05:00"},{"label":"America/Toronto (GMT-05:00)","tzCode":"America/Toronto","name":"(GMT-05:00) Toronto, Montréal, Ottawa, Mississauga, Québec","utc":"-05:00"},{"label":"America/Anguilla (GMT-04:00)","tzCode":"America/Anguilla","name":"(GMT-04:00) The Valley, Blowing Point Village, Sandy Ground Village, The Quarter, Sandy Hill","utc":"-04:00"},{"label":"America/Antigua (GMT-04:00)","tzCode":"America/Antigua","name":"(GMT-04:00) Saint John’s, Piggotts, Bolands, Codrington, Parham","utc":"-04:00"},{"label":"America/Aruba (GMT-04:00)","tzCode":"America/Aruba","name":"(GMT-04:00) Oranjestad, Tanki Leendert, San Nicolas, Santa Cruz, Paradera","utc":"-04:00"},{"label":"America/Asuncion (GMT-04:00)","tzCode":"America/Asuncion","name":"(GMT-04:00) Asunción, Ciudad del Este, San Lorenzo, Capiatá, Lambaré","utc":"-04:00"},{"label":"America/Barbados (GMT-04:00)","tzCode":"America/Barbados","name":"(GMT-04:00) Bridgetown, Speightstown, Oistins, Bathsheba, Holetown","utc":"-04:00"},{"label":"America/Blanc-Sablon (GMT-04:00)","tzCode":"America/Blanc-Sablon","name":"(GMT-04:00) Lévis","utc":"-04:00"},{"label":"America/Boa_Vista (GMT-04:00)","tzCode":"America/Boa_Vista","name":"(GMT-04:00) Boa Vista","utc":"-04:00"},{"label":"America/Campo_Grande (GMT-04:00)","tzCode":"America/Campo_Grande","name":"(GMT-04:00) Campo Grande, Dourados, Corumbá, Três Lagoas, Ponta Porã","utc":"-04:00"},{"label":"America/Caracas (GMT-04:00)","tzCode":"America/Caracas","name":"(GMT-04:00) Caracas, Maracaibo, Maracay, Valencia, Barquisimeto","utc":"-04:00"},{"label":"America/Cuiaba (GMT-04:00)","tzCode":"America/Cuiaba","name":"(GMT-04:00) Cuiabá, Várzea Grande, Rondonópolis, Sinop, Barra do Garças","utc":"-04:00"},{"label":"America/Curacao (GMT-04:00)","tzCode":"America/Curacao","name":"(GMT-04:00) Willemstad, Sint Michiel Liber","utc":"-04:00"},{"label":"America/Dominica (GMT-04:00)","tzCode":"America/Dominica","name":"(GMT-04:00) Roseau, Portsmouth, Berekua, Saint Joseph, Wesley","utc":"-04:00"},{"label":"America/Glace_Bay (GMT-04:00)","tzCode":"America/Glace_Bay","name":"(GMT-04:00) Sydney, Glace Bay, Sydney Mines","utc":"-04:00"},{"label":"America/Goose_Bay (GMT-04:00)","tzCode":"America/Goose_Bay","name":"(GMT-04:00) Labrador City, Happy Valley-Goose Bay","utc":"-04:00"},{"label":"America/Grenada (GMT-04:00)","tzCode":"America/Grenada","name":"(GMT-04:00) Saint George\'s, Gouyave, Grenville, Victoria, Saint David’s","utc":"-04:00"},{"label":"America/Guadeloupe (GMT-04:00)","tzCode":"America/Guadeloupe","name":"(GMT-04:00) Les Abymes, Baie-Mahault, Le Gosier, Petit-Bourg, Sainte-Anne","utc":"-04:00"},{"label":"America/Guyana (GMT-04:00)","tzCode":"America/Guyana","name":"(GMT-04:00) Georgetown, Linden, New Amsterdam, Anna Regina, Bartica","utc":"-04:00"},{"label":"America/Halifax (GMT-04:00)","tzCode":"America/Halifax","name":"(GMT-04:00) Halifax, Dartmouth, Charlottetown, Lower Sackville, Truro","utc":"-04:00"},{"label":"America/Kralendijk (GMT-04:00)","tzCode":"America/Kralendijk","name":"(GMT-04:00) Kralendijk, Oranjestad, The Bottom","utc":"-04:00"},{"label":"America/La_Paz (GMT-04:00)","tzCode":"America/La_Paz","name":"(GMT-04:00) Santa Cruz de la Sierra, Cochabamba, La Paz, Sucre, Oruro","utc":"-04:00"},{"label":"America/Lower_Princes (GMT-04:00)","tzCode":"America/Lower_Princes","name":"(GMT-04:00) Cul de Sac, Lower Prince’s Quarter, Koolbaai, Philipsburg","utc":"-04:00"},{"label":"America/Manaus (GMT-04:00)","tzCode":"America/Manaus","name":"(GMT-04:00) Manaus, Itacoatiara, Parintins, Manacapuru, Coari","utc":"-04:00"},{"label":"America/Marigot (GMT-04:00)","tzCode":"America/Marigot","name":"(GMT-04:00) Marigot","utc":"-04:00"},{"label":"America/Martinique (GMT-04:00)","tzCode":"America/Martinique","name":"(GMT-04:00) Fort-de-France, Le Lamentin, Le Robert, Sainte-Marie, Le François","utc":"-04:00"},{"label":"America/Moncton (GMT-04:00)","tzCode":"America/Moncton","name":"(GMT-04:00) Moncton, Saint John, Fredericton, Dieppe, Miramichi","utc":"-04:00"},{"label":"America/Montserrat (GMT-04:00)","tzCode":"America/Montserrat","name":"(GMT-04:00) Brades, Saint Peters, Plymouth","utc":"-04:00"},{"label":"America/Porto_Velho (GMT-04:00)","tzCode":"America/Porto_Velho","name":"(GMT-04:00) Porto Velho, Ji Paraná, Vilhena, Ariquemes, Cacoal","utc":"-04:00"},{"label":"America/Port_of_Spain (GMT-04:00)","tzCode":"America/Port_of_Spain","name":"(GMT-04:00) Chaguanas, Mon Repos, San Fernando, Port of Spain, Rio Claro","utc":"-04:00"},{"label":"America/Puerto_Rico (GMT-04:00)","tzCode":"America/Puerto_Rico","name":"(GMT-04:00) San Juan, Bayamón, Carolina, Ponce, Caguas","utc":"-04:00"},{"label":"America/Santiago (GMT-04:00)","tzCode":"America/Santiago","name":"(GMT-04:00) Santiago, Puente Alto, Antofagasta, Viña del Mar, Valparaíso","utc":"-04:00"},{"label":"America/Santo_Domingo (GMT-04:00)","tzCode":"America/Santo_Domingo","name":"(GMT-04:00) Santo Domingo, Santiago de los Caballeros, Santo Domingo Oeste, Santo Domingo Este, San Pedro de Macorís","utc":"-04:00"},{"label":"America/St_Barthelemy (GMT-04:00)","tzCode":"America/St_Barthelemy","name":"(GMT-04:00) Gustavia","utc":"-04:00"},{"label":"America/St_Kitts (GMT-04:00)","tzCode":"America/St_Kitts","name":"(GMT-04:00) Basseterre, Fig Tree, Market Shop, Saint Paul’s, Middle Island","utc":"-04:00"},{"label":"America/St_Lucia (GMT-04:00)","tzCode":"America/St_Lucia","name":"(GMT-04:00) Castries, Bisee, Vieux Fort, Micoud, Soufrière","utc":"-04:00"},{"label":"America/St_Thomas (GMT-04:00)","tzCode":"America/St_Thomas","name":"(GMT-04:00) Saint Croix, Charlotte Amalie, Cruz Bay","utc":"-04:00"},{"label":"America/St_Vincent (GMT-04:00)","tzCode":"America/St_Vincent","name":"(GMT-04:00) Kingstown, Kingstown Park, Georgetown, Barrouallie, Port Elizabeth","utc":"-04:00"},{"label":"America/Thule (GMT-04:00)","tzCode":"America/Thule","name":"(GMT-04:00) Thule","utc":"-04:00"},{"label":"America/Tortola (GMT-04:00)","tzCode":"America/Tortola","name":"(GMT-04:00) Road Town","utc":"-04:00"},{"label":"Atlantic/Bermuda (GMT-04:00)","tzCode":"Atlantic/Bermuda","name":"(GMT-04:00) Hamilton","utc":"-04:00"},{"label":"America/St_Johns (GMT-03:30)","tzCode":"America/St_Johns","name":"(GMT-03:30) St. John\'s, Mount Pearl, Corner Brook, Conception Bay South, Bay Roberts","utc":"-03:30"},{"label":"America/Araguaina (GMT-03:00)","tzCode":"America/Araguaina","name":"(GMT-03:00) Palmas, Araguaína, Gurupi, Miracema do Tocantins, Porto Franco","utc":"-03:00"},{"label":"America/Argentina/Buenos_Aires (GMT-03:00)","tzCode":"America/Argentina/Buenos_Aires","name":"(GMT-03:00) Buenos Aires, La Plata, Mar del Plata, Morón, Bahía Blanca","utc":"-03:00"},{"label":"America/Argentina/Catamarca (GMT-03:00)","tzCode":"America/Argentina/Catamarca","name":"(GMT-03:00) San Fernando del Valle de Catamarca, Trelew, Puerto Madryn, Esquel, Rawson","utc":"-03:00"},{"label":"America/Argentina/Cordoba (GMT-03:00)","tzCode":"America/Argentina/Cordoba","name":"(GMT-03:00) Córdoba, Rosario, Santa Fe, Resistencia, Santiago del Estero","utc":"-03:00"},{"label":"America/Argentina/Jujuy (GMT-03:00)","tzCode":"America/Argentina/Jujuy","name":"(GMT-03:00) San Salvador de Jujuy, San Pedro de Jujuy, Libertador General San Martín, Palpalá, La Quiaca","utc":"-03:00"},{"label":"America/Argentina/La_Rioja (GMT-03:00)","tzCode":"America/Argentina/La_Rioja","name":"(GMT-03:00) La Rioja, Chilecito, Arauco, Chamical","utc":"-03:00"},{"label":"America/Argentina/Mendoza (GMT-03:00)","tzCode":"America/Argentina/Mendoza","name":"(GMT-03:00) Mendoza, San Rafael, San Martín","utc":"-03:00"},{"label":"America/Argentina/Rio_Gallegos (GMT-03:00)","tzCode":"America/Argentina/Rio_Gallegos","name":"(GMT-03:00) Comodoro Rivadavia, Río Gallegos, Caleta Olivia, Pico Truncado, Puerto Deseado","utc":"-03:00"},{"label":"America/Argentina/Salta (GMT-03:00)","tzCode":"America/Argentina/Salta","name":"(GMT-03:00) Salta, Neuquén, Santa Rosa, San Carlos de Bariloche, Cipolletti","utc":"-03:00"},{"label":"America/Argentina/San_Juan (GMT-03:00)","tzCode":"America/Argentina/San_Juan","name":"(GMT-03:00) San Juan, Chimbas, Santa Lucía, Pocito, Caucete","utc":"-03:00"},{"label":"America/Argentina/San_Luis (GMT-03:00)","tzCode":"America/Argentina/San_Luis","name":"(GMT-03:00) San Luis, Villa Mercedes, La Punta, Merlo, Justo Daract","utc":"-03:00"},{"label":"America/Argentina/Tucuman (GMT-03:00)","tzCode":"America/Argentina/Tucuman","name":"(GMT-03:00) San Miguel de Tucumán, Yerba Buena, Tafí Viejo, Alderetes, Aguilares","utc":"-03:00"},{"label":"America/Argentina/Ushuaia (GMT-03:00)","tzCode":"America/Argentina/Ushuaia","name":"(GMT-03:00) Ushuaia, Río Grande","utc":"-03:00"},{"label":"America/Bahia (GMT-03:00)","tzCode":"America/Bahia","name":"(GMT-03:00) Salvador, Feira de Santana, Vitória da Conquista, Itabuna, Camaçari","utc":"-03:00"},{"label":"America/Belem (GMT-03:00)","tzCode":"America/Belem","name":"(GMT-03:00) Belém, Ananindeua, Macapá, Parauapebas, Marabá","utc":"-03:00"},{"label":"America/Cayenne (GMT-03:00)","tzCode":"America/Cayenne","name":"(GMT-03:00) Cayenne, Matoury, Saint-Laurent-du-Maroni, Kourou, Rémire-Montjoly","utc":"-03:00"},{"label":"America/Fortaleza (GMT-03:00)","tzCode":"America/Fortaleza","name":"(GMT-03:00) Fortaleza, São Luís, Natal, Teresina, João Pessoa","utc":"-03:00"},{"label":"America/Godthab (GMT-03:00)","tzCode":"America/Godthab","name":"(GMT-03:00) Nuuk, Sisimiut, Ilulissat, Qaqortoq, Aasiaat","utc":"-03:00"},{"label":"America/Maceio (GMT-03:00)","tzCode":"America/Maceio","name":"(GMT-03:00) Maceió, Aracaju, Arapiraca, Nossa Senhora do Socorro, São Cristóvão","utc":"-03:00"},{"label":"America/Miquelon (GMT-03:00)","tzCode":"America/Miquelon","name":"(GMT-03:00) Saint-Pierre, Miquelon","utc":"-03:00"},{"label":"America/Montevideo (GMT-03:00)","tzCode":"America/Montevideo","name":"(GMT-03:00) Montevideo, Salto, Paysandú, Las Piedras, Rivera","utc":"-03:00"},{"label":"America/Paramaribo (GMT-03:00)","tzCode":"America/Paramaribo","name":"(GMT-03:00) Paramaribo, Lelydorp, Brokopondo, Nieuw Nickerie, Moengo","utc":"-03:00"},{"label":"America/Punta_Arenas (GMT-03:00)","tzCode":"America/Punta_Arenas","name":"(GMT-03:00) Punta Arenas, Puerto Natales","utc":"-03:00"},{"label":"America/Recife (GMT-03:00)","tzCode":"America/Recife","name":"(GMT-03:00) Recife, Jaboatão, Jaboatão dos Guararapes, Olinda, Paulista","utc":"-03:00"},{"label":"America/Santarem (GMT-03:00)","tzCode":"America/Santarem","name":"(GMT-03:00) Santarém, Altamira, Itaituba, Oriximiná, Alenquer","utc":"-03:00"},{"label":"America/Sao_Paulo (GMT-03:00)","tzCode":"America/Sao_Paulo","name":"(GMT-03:00) São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, Curitiba","utc":"-03:00"},{"label":"Antarctica/Palmer (GMT-03:00)","tzCode":"Antarctica/Palmer","name":"(GMT-03:00) Palmer","utc":"-03:00"},{"label":"Antarctica/Rothera (GMT-03:00)","tzCode":"Antarctica/Rothera","name":"(GMT-03:00) Rothera","utc":"-03:00"},{"label":"Atlantic/Stanley (GMT-03:00)","tzCode":"Atlantic/Stanley","name":"(GMT-03:00) Stanley","utc":"-03:00"},{"label":"America/Noronha (GMT-02:00)","tzCode":"America/Noronha","name":"(GMT-02:00) Itamaracá","utc":"-02:00"},{"label":"Atlantic/South_Georgia (GMT-02:00)","tzCode":"Atlantic/South_Georgia","name":"(GMT-02:00) Grytviken","utc":"-02:00"},{"label":"America/Scoresbysund (GMT-01:00)","tzCode":"America/Scoresbysund","name":"(GMT-01:00) Scoresbysund","utc":"-01:00"},{"label":"Atlantic/Azores (GMT-01:00)","tzCode":"Atlantic/Azores","name":"(GMT-01:00) Ponta Delgada, Lagoa, Angra do Heroísmo, Rosto de Cão, Rabo de Peixe","utc":"-01:00"},{"label":"Atlantic/Cape_Verde (GMT-01:00)","tzCode":"Atlantic/Cape_Verde","name":"(GMT-01:00) Praia, Mindelo, Santa Maria, Cova Figueira, Santa Cruz","utc":"-01:00"},{"label":"Africa/Abidjan (GMT+00:00)","tzCode":"Africa/Abidjan","name":"(GMT+00:00) Abidjan, Abobo, Bouaké, Daloa, San-Pédro","utc":"+00:00"},{"label":"Africa/Accra (GMT+00:00)","tzCode":"Africa/Accra","name":"(GMT+00:00) Accra, Kumasi, Tamale, Takoradi, Atsiaman","utc":"+00:00"},{"label":"Africa/Bamako (GMT+00:00)","tzCode":"Africa/Bamako","name":"(GMT+00:00) Bamako, Sikasso, Mopti, Koutiala, Ségou","utc":"+00:00"},{"label":"Africa/Banjul (GMT+00:00)","tzCode":"Africa/Banjul","name":"(GMT+00:00) Serekunda, Brikama, Bakau, Banjul, Farafenni","utc":"+00:00"},{"label":"Africa/Bissau (GMT+00:00)","tzCode":"Africa/Bissau","name":"(GMT+00:00) Bissau, Bafatá, Gabú, Bissorã, Bolama","utc":"+00:00"},{"label":"Africa/Casablanca (GMT+00:00)","tzCode":"Africa/Casablanca","name":"(GMT+00:00) Casablanca, Rabat, Fès, Sale, Marrakesh","utc":"+00:00"},{"label":"Africa/Conakry (GMT+00:00)","tzCode":"Africa/Conakry","name":"(GMT+00:00) Camayenne, Conakry, Nzérékoré, Kindia, Kankan","utc":"+00:00"},{"label":"Africa/Dakar (GMT+00:00)","tzCode":"Africa/Dakar","name":"(GMT+00:00) Dakar, Pikine, Touba, Thiès, Thiès Nones","utc":"+00:00"},{"label":"Africa/El_Aaiun (GMT+00:00)","tzCode":"Africa/El_Aaiun","name":"(GMT+00:00) Laayoune, Dakhla, Laayoune Plage","utc":"+00:00"},{"label":"Africa/Freetown (GMT+00:00)","tzCode":"Africa/Freetown","name":"(GMT+00:00) Freetown, Bo, Kenema, Koidu, Makeni","utc":"+00:00"},{"label":"Africa/Lome (GMT+00:00)","tzCode":"Africa/Lome","name":"(GMT+00:00) Lomé, Sokodé, Kara, Atakpamé, Kpalimé","utc":"+00:00"},{"label":"Africa/Monrovia (GMT+00:00)","tzCode":"Africa/Monrovia","name":"(GMT+00:00) Monrovia, Gbarnga, Kakata, Bensonville, Harper","utc":"+00:00"},{"label":"Africa/Nouakchott (GMT+00:00)","tzCode":"Africa/Nouakchott","name":"(GMT+00:00) Nouakchott, Nouadhibou, Néma, Kaédi, Rosso","utc":"+00:00"},{"label":"Africa/Ouagadougou (GMT+00:00)","tzCode":"Africa/Ouagadougou","name":"(GMT+00:00) Ouagadougou, Bobo-Dioulasso, Koudougou, Ouahigouya, Banfora","utc":"+00:00"},{"label":"Africa/Sao_Tome (GMT+00:00)","tzCode":"Africa/Sao_Tome","name":"(GMT+00:00) São Tomé, Santo António","utc":"+00:00"},{"label":"America/Danmarkshavn (GMT+00:00)","tzCode":"America/Danmarkshavn","name":"(GMT+00:00) Danmarkshavn","utc":"+00:00"},{"label":"Antarctica/Troll (GMT+00:00)","tzCode":"Antarctica/Troll","name":"(GMT+00:00) Troll","utc":"+00:00"},{"label":"Atlantic/Canary (GMT+00:00)","tzCode":"Atlantic/Canary","name":"(GMT+00:00) Las Palmas de Gran Canaria, Santa Cruz de Tenerife, La Laguna, Telde, Arona","utc":"+00:00"},{"label":"Atlantic/Faroe (GMT+00:00)","tzCode":"Atlantic/Faroe","name":"(GMT+00:00) Tórshavn, Klaksvík, Fuglafjørður, Tvøroyri, Miðvágur","utc":"+00:00"},{"label":"Atlantic/Madeira (GMT+00:00)","tzCode":"Atlantic/Madeira","name":"(GMT+00:00) Funchal, Câmara de Lobos, São Martinho, Caniço, Machico","utc":"+00:00"},{"label":"Atlantic/Reykjavik (GMT+00:00)","tzCode":"Atlantic/Reykjavik","name":"(GMT+00:00) Reykjavík, Kópavogur, Hafnarfjörður, Akureyri, Garðabær","utc":"+00:00"},{"label":"Atlantic/St_Helena (GMT+00:00)","tzCode":"Atlantic/St_Helena","name":"(GMT+00:00) Jamestown, Georgetown, Edinburgh of the Seven Seas","utc":"+00:00"},{"label":"Europe/Dublin (GMT+00:00)","tzCode":"Europe/Dublin","name":"(GMT+00:00) Dublin, Cork, Luimneach, Gaillimh, Tallaght","utc":"+00:00"},{"label":"Europe/Guernsey (GMT+00:00)","tzCode":"Europe/Guernsey","name":"(GMT+00:00) Saint Peter Port, St Martin, Saint Sampson, St Anne, Saint Saviour","utc":"+00:00"},{"label":"Europe/Isle_of_Man (GMT+00:00)","tzCode":"Europe/Isle_of_Man","name":"(GMT+00:00) Douglas, Ramsey, Peel, Port Erin, Castletown","utc":"+00:00"},{"label":"Europe/Jersey (GMT+00:00)","tzCode":"Europe/Jersey","name":"(GMT+00:00) Saint Helier, Le Hocq","utc":"+00:00"},{"label":"Europe/Lisbon (GMT+00:00)","tzCode":"Europe/Lisbon","name":"(GMT+00:00) Lisbon, Porto, Amadora, Braga, Setúbal","utc":"+00:00"},{"label":"Europe/London (GMT+00:00)","tzCode":"Europe/London","name":"(GMT+00:00) London, Birmingham, Liverpool, Sheffield, Bristol","utc":"+00:00"},{"label":"Africa/Algiers (GMT+01:00)","tzCode":"Africa/Algiers","name":"(GMT+01:00) Algiers, Boumerdas, Oran, Tébessa, Constantine","utc":"+01:00"},{"label":"Africa/Bangui (GMT+01:00)","tzCode":"Africa/Bangui","name":"(GMT+01:00) Bangui, Bimbo, Mbaïki, Berbérati, Kaga Bandoro","utc":"+01:00"},{"label":"Africa/Brazzaville (GMT+01:00)","tzCode":"Africa/Brazzaville","name":"(GMT+01:00) Brazzaville, Pointe-Noire, Dolisie, Kayes, Owando","utc":"+01:00"},{"label":"Africa/Ceuta (GMT+01:00)","tzCode":"Africa/Ceuta","name":"(GMT+01:00) Ceuta, Melilla","utc":"+01:00"},{"label":"Africa/Douala (GMT+01:00)","tzCode":"Africa/Douala","name":"(GMT+01:00) Douala, Yaoundé, Garoua, Kousséri, Bamenda","utc":"+01:00"},{"label":"Africa/Kinshasa (GMT+01:00)","tzCode":"Africa/Kinshasa","name":"(GMT+01:00) Kinshasa, Masina, Kikwit, Mbandaka, Matadi","utc":"+01:00"},{"label":"Africa/Lagos (GMT+01:00)","tzCode":"Africa/Lagos","name":"(GMT+01:00) Lagos, Kano, Ibadan, Kaduna, Port Harcourt","utc":"+01:00"},{"label":"Africa/Libreville (GMT+01:00)","tzCode":"Africa/Libreville","name":"(GMT+01:00) Libreville, Port-Gentil, Franceville, Oyem, Moanda","utc":"+01:00"},{"label":"Africa/Luanda (GMT+01:00)","tzCode":"Africa/Luanda","name":"(GMT+01:00) Luanda, N’dalatando, Huambo, Lobito, Benguela","utc":"+01:00"},{"label":"Africa/Malabo (GMT+01:00)","tzCode":"Africa/Malabo","name":"(GMT+01:00) Bata, Malabo, Ebebiyin, Aconibe, Añisoc","utc":"+01:00"},{"label":"Africa/Ndjamena (GMT+01:00)","tzCode":"Africa/Ndjamena","name":"(GMT+01:00) N\'Djamena, Moundou, Sarh, Abéché, Kelo","utc":"+01:00"},{"label":"Africa/Niamey (GMT+01:00)","tzCode":"Africa/Niamey","name":"(GMT+01:00) Niamey, Zinder, Maradi, Agadez, Alaghsas","utc":"+01:00"},{"label":"Africa/Porto-Novo (GMT+01:00)","tzCode":"Africa/Porto-Novo","name":"(GMT+01:00) Cotonou, Abomey-Calavi, Djougou, Porto-Novo, Parakou","utc":"+01:00"},{"label":"Africa/Tunis (GMT+01:00)","tzCode":"Africa/Tunis","name":"(GMT+01:00) Tunis, Sfax, Sousse, Kairouan, Bizerte","utc":"+01:00"},{"label":"Africa/Windhoek (GMT+01:00)","tzCode":"Africa/Windhoek","name":"(GMT+01:00) Windhoek, Rundu, Walvis Bay, Oshakati, Swakopmund","utc":"+01:00"},{"label":"Arctic/Longyearbyen (GMT+01:00)","tzCode":"Arctic/Longyearbyen","name":"(GMT+01:00) Longyearbyen, Olonkinbyen","utc":"+01:00"},{"label":"Europe/Amsterdam (GMT+01:00)","tzCode":"Europe/Amsterdam","name":"(GMT+01:00) Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven","utc":"+01:00"},{"label":"Europe/Andorra (GMT+01:00)","tzCode":"Europe/Andorra","name":"(GMT+01:00) Andorra la Vella, les Escaldes, Encamp, Sant Julià de Lòria, la Massana","utc":"+01:00"},{"label":"Europe/Belgrade (GMT+01:00)","tzCode":"Europe/Belgrade","name":"(GMT+01:00) Belgrade, Pristina, Niš, Novi Sad, Prizren","utc":"+01:00"},{"label":"Europe/Berlin (GMT+01:00)","tzCode":"Europe/Berlin","name":"(GMT+01:00) Berlin, Hamburg, Munich, Köln, Frankfurt am Main","utc":"+01:00"},{"label":"Europe/Bratislava (GMT+01:00)","tzCode":"Europe/Bratislava","name":"(GMT+01:00) Bratislava, Košice, Prešov, Nitra, Žilina","utc":"+01:00"},{"label":"Europe/Brussels (GMT+01:00)","tzCode":"Europe/Brussels","name":"(GMT+01:00) Brussels, Antwerpen, Gent, Charleroi, Liège","utc":"+01:00"},{"label":"Europe/Budapest (GMT+01:00)","tzCode":"Europe/Budapest","name":"(GMT+01:00) Budapest, Debrecen, Miskolc, Szeged, Pécs","utc":"+01:00"},{"label":"Europe/Copenhagen (GMT+01:00)","tzCode":"Europe/Copenhagen","name":"(GMT+01:00) Copenhagen, Århus, Odense, Aalborg, Frederiksberg","utc":"+01:00"},{"label":"Europe/Gibraltar (GMT+01:00)","tzCode":"Europe/Gibraltar","name":"(GMT+01:00) Gibraltar","utc":"+01:00"},{"label":"Europe/Ljubljana (GMT+01:00)","tzCode":"Europe/Ljubljana","name":"(GMT+01:00) Ljubljana, Maribor, Celje, Kranj, Velenje","utc":"+01:00"},{"label":"Europe/Luxembourg (GMT+01:00)","tzCode":"Europe/Luxembourg","name":"(GMT+01:00) Luxembourg, Esch-sur-Alzette, Dudelange, Schifflange, Bettembourg","utc":"+01:00"},{"label":"Europe/Madrid (GMT+01:00)","tzCode":"Europe/Madrid","name":"(GMT+01:00) Madrid, Barcelona, Valencia, Sevilla, Zaragoza","utc":"+01:00"},{"label":"Europe/Malta (GMT+01:00)","tzCode":"Europe/Malta","name":"(GMT+01:00) Birkirkara, Qormi, Mosta, Żabbar, San Pawl il-Baħar","utc":"+01:00"},{"label":"Europe/Monaco (GMT+01:00)","tzCode":"Europe/Monaco","name":"(GMT+01:00) Monaco, Monte-Carlo, La Condamine","utc":"+01:00"},{"label":"Europe/Oslo (GMT+01:00)","tzCode":"Europe/Oslo","name":"(GMT+01:00) Oslo, Bergen, Trondheim, Stavanger, Drammen","utc":"+01:00"},{"label":"Europe/Paris (GMT+01:00)","tzCode":"Europe/Paris","name":"(GMT+01:00) Paris, Marseille, Lyon, Toulouse, Nice","utc":"+01:00"},{"label":"Europe/Podgorica (GMT+01:00)","tzCode":"Europe/Podgorica","name":"(GMT+01:00) Podgorica, Nikšić, Herceg Novi, Pljevlja, Budva","utc":"+01:00"},{"label":"Europe/Prague (GMT+01:00)","tzCode":"Europe/Prague","name":"(GMT+01:00) Prague, Brno, Ostrava, Pilsen, Olomouc","utc":"+01:00"},{"label":"Europe/Rome (GMT+01:00)","tzCode":"Europe/Rome","name":"(GMT+01:00) Rome, Milan, Naples, Turin, Palermo","utc":"+01:00"},{"label":"Europe/San_Marino (GMT+01:00)","tzCode":"Europe/San_Marino","name":"(GMT+01:00) Serravalle, Borgo Maggiore, San Marino, Domagnano, Fiorentino","utc":"+01:00"},{"label":"Europe/Sarajevo (GMT+01:00)","tzCode":"Europe/Sarajevo","name":"(GMT+01:00) Sarajevo, Banja Luka, Zenica, Tuzla, Mostar","utc":"+01:00"},{"label":"Europe/Skopje (GMT+01:00)","tzCode":"Europe/Skopje","name":"(GMT+01:00) Skopje, Bitola, Kumanovo, Prilep, Tetovo","utc":"+01:00"},{"label":"Europe/Stockholm (GMT+01:00)","tzCode":"Europe/Stockholm","name":"(GMT+01:00) Stockholm, Göteborg, Malmö, Uppsala, Sollentuna","utc":"+01:00"},{"label":"Europe/Tirane (GMT+01:00)","tzCode":"Europe/Tirane","name":"(GMT+01:00) Tirana, Durrës, Elbasan, Vlorë, Shkodër","utc":"+01:00"},{"label":"Europe/Vaduz (GMT+01:00)","tzCode":"Europe/Vaduz","name":"(GMT+01:00) Schaan, Vaduz, Triesen, Balzers, Eschen","utc":"+01:00"},{"label":"Europe/Vatican (GMT+01:00)","tzCode":"Europe/Vatican","name":"(GMT+01:00) Vatican City","utc":"+01:00"},{"label":"Europe/Vienna (GMT+01:00)","tzCode":"Europe/Vienna","name":"(GMT+01:00) Vienna, Graz, Linz, Favoriten, Donaustadt","utc":"+01:00"},{"label":"Europe/Warsaw (GMT+01:00)","tzCode":"Europe/Warsaw","name":"(GMT+01:00) Warsaw, Łódź, Kraków, Wrocław, Poznań","utc":"+01:00"},{"label":"Europe/Zagreb (GMT+01:00)","tzCode":"Europe/Zagreb","name":"(GMT+01:00) Zagreb, Split, Rijeka, Osijek, Zadar","utc":"+01:00"},{"label":"Europe/Zurich (GMT+01:00)","tzCode":"Europe/Zurich","name":"(GMT+01:00) Zürich, Genève, Basel, Lausanne, Bern","utc":"+01:00"},{"label":"Africa/Blantyre (GMT+02:00)","tzCode":"Africa/Blantyre","name":"(GMT+02:00) Lilongwe, Blantyre, Mzuzu, Zomba, Kasungu","utc":"+02:00"},{"label":"Africa/Bujumbura (GMT+02:00)","tzCode":"Africa/Bujumbura","name":"(GMT+02:00) Bujumbura, Muyinga, Gitega, Ruyigi, Ngozi","utc":"+02:00"},{"label":"Africa/Cairo (GMT+02:00)","tzCode":"Africa/Cairo","name":"(GMT+02:00) Cairo, Alexandria, Giza, Port Said, Suez","utc":"+02:00"},{"label":"Africa/Gaborone (GMT+02:00)","tzCode":"Africa/Gaborone","name":"(GMT+02:00) Gaborone, Francistown, Molepolole, Selebi-Phikwe, Maun","utc":"+02:00"},{"label":"Africa/Harare (GMT+02:00)","tzCode":"Africa/Harare","name":"(GMT+02:00) Harare, Bulawayo, Chitungwiza, Mutare, Gweru","utc":"+02:00"},{"label":"Africa/Johannesburg (GMT+02:00)","tzCode":"Africa/Johannesburg","name":"(GMT+02:00) Cape Town, Durban, Johannesburg, Soweto, Pretoria","utc":"+02:00"},{"label":"Africa/Juba (GMT+02:00)","tzCode":"Africa/Juba","name":"(GMT+02:00) Juba, Winejok, Malakal, Wau, Kuacjok","utc":"+02:00"},{"label":"Africa/Khartoum (GMT+02:00)","tzCode":"Africa/Khartoum","name":"(GMT+02:00) Khartoum, Omdurman, Nyala, Port Sudan, Kassala","utc":"+02:00"},{"label":"Africa/Kigali (GMT+02:00)","tzCode":"Africa/Kigali","name":"(GMT+02:00) Kigali, Butare, Gitarama, Musanze, Gisenyi","utc":"+02:00"},{"label":"Africa/Lubumbashi (GMT+02:00)","tzCode":"Africa/Lubumbashi","name":"(GMT+02:00) Lubumbashi, Mbuji-Mayi, Kisangani, Kananga, Likasi","utc":"+02:00"},{"label":"Africa/Lusaka (GMT+02:00)","tzCode":"Africa/Lusaka","name":"(GMT+02:00) Lusaka, Kitwe, Ndola, Kabwe, Chingola","utc":"+02:00"},{"label":"Africa/Maputo (GMT+02:00)","tzCode":"Africa/Maputo","name":"(GMT+02:00) Maputo, Matola, Beira, Nampula, Chimoio","utc":"+02:00"},{"label":"Africa/Maseru (GMT+02:00)","tzCode":"Africa/Maseru","name":"(GMT+02:00) Maseru, Mafeteng, Leribe, Maputsoe, Mohale’s Hoek","utc":"+02:00"},{"label":"Africa/Mbabane (GMT+02:00)","tzCode":"Africa/Mbabane","name":"(GMT+02:00) Manzini, Mbabane, Big Bend, Malkerns, Nhlangano","utc":"+02:00"},{"label":"Africa/Tripoli (GMT+02:00)","tzCode":"Africa/Tripoli","name":"(GMT+02:00) Tripoli, Benghazi, Mişrātah, Tarhuna, Al Khums","utc":"+02:00"},{"label":"Asia/Amman (GMT+02:00)","tzCode":"Asia/Amman","name":"(GMT+02:00) Amman, Zarqa, Irbid, Russeifa, Wādī as Sīr","utc":"+02:00"},{"label":"Asia/Beirut (GMT+02:00)","tzCode":"Asia/Beirut","name":"(GMT+02:00) Beirut, Ra’s Bayrūt, Tripoli, Sidon, Tyre","utc":"+02:00"},{"label":"Asia/Damascus (GMT+02:00)","tzCode":"Asia/Damascus","name":"(GMT+02:00) Aleppo, Damascus, Homs, Ḩamāh, Latakia","utc":"+02:00"},{"label":"Asia/Famagusta (GMT+02:00)","tzCode":"Asia/Famagusta","name":"(GMT+02:00) Famagusta, Kyrenia, Protaras, Paralímni, Lápithos","utc":"+02:00"},{"label":"Asia/Gaza (GMT+02:00)","tzCode":"Asia/Gaza","name":"(GMT+02:00) Gaza, Khān Yūnis, Jabālyā, Rafaḩ, Dayr al Balaḩ","utc":"+02:00"},{"label":"Asia/Hebron (GMT+02:00)","tzCode":"Asia/Hebron","name":"(GMT+02:00) East Jerusalem, Hebron, Nablus, Battir, Ţūlkarm","utc":"+02:00"},{"label":"Asia/Jerusalem (GMT+02:00)","tzCode":"Asia/Jerusalem","name":"(GMT+02:00) Jerusalem, Tel Aviv, West Jerusalem, Haifa, Ashdod","utc":"+02:00"},{"label":"Asia/Nicosia (GMT+02:00)","tzCode":"Asia/Nicosia","name":"(GMT+02:00) Nicosia, Limassol, Larnaca, Stróvolos, Paphos","utc":"+02:00"},{"label":"Europe/Athens (GMT+02:00)","tzCode":"Europe/Athens","name":"(GMT+02:00) Athens, Thessaloníki, Pátra, Piraeus, Lárisa","utc":"+02:00"},{"label":"Europe/Bucharest (GMT+02:00)","tzCode":"Europe/Bucharest","name":"(GMT+02:00) Bucharest, Sector 3, Sector 6, Sector 2, Iaşi","utc":"+02:00"},{"label":"Europe/Chisinau (GMT+02:00)","tzCode":"Europe/Chisinau","name":"(GMT+02:00) Chisinau, Tiraspol, Bălţi, Bender, Rîbniţa","utc":"+02:00"},{"label":"Europe/Helsinki (GMT+02:00)","tzCode":"Europe/Helsinki","name":"(GMT+02:00) Helsinki, Espoo, Tampere, Vantaa, Turku","utc":"+02:00"},{"label":"Europe/Kaliningrad (GMT+02:00)","tzCode":"Europe/Kaliningrad","name":"(GMT+02:00) Kaliningrad, Chernyakhovsk, Sovetsk, Baltiysk, Gusev","utc":"+02:00"},{"label":"Europe/Kyiv (GMT+02:00)","tzCode":"Europe/Kyiv","name":"(GMT+02:00) Kyiv, Kharkiv, Donetsk, Odesa, Dnipro","utc":"+02:00"},{"label":"Europe/Mariehamn (GMT+02:00)","tzCode":"Europe/Mariehamn","name":"(GMT+02:00) Mariehamn","utc":"+02:00"},{"label":"Europe/Riga (GMT+02:00)","tzCode":"Europe/Riga","name":"(GMT+02:00) Riga, Daugavpils, Liepāja, Jelgava, Jūrmala","utc":"+02:00"},{"label":"Europe/Sofia (GMT+02:00)","tzCode":"Europe/Sofia","name":"(GMT+02:00) Sofia, Plovdiv, Varna, Burgas, Ruse","utc":"+02:00"},{"label":"Europe/Tallinn (GMT+02:00)","tzCode":"Europe/Tallinn","name":"(GMT+02:00) Tallinn, Tartu, Narva, Kohtla-Järve, Pärnu","utc":"+02:00"},{"label":"Europe/Uzhgorod (GMT+02:00)","tzCode":"Europe/Uzhgorod","name":"(GMT+02:00) Uzhgorod, Mukachevo, Khust, Berehove, Tyachiv","utc":"+02:00"},{"label":"Europe/Vilnius (GMT+02:00)","tzCode":"Europe/Vilnius","name":"(GMT+02:00) Vilnius, Kaunas, Klaipėda, Šiauliai, Panevėžys","utc":"+02:00"},{"label":"Europe/Zaporizhzhia (GMT+02:00)","tzCode":"Europe/Zaporizhzhia","name":"(GMT+02:00) Luhansk, Sevastopol, Sievierodonetsk, Alchevsk, Lysychansk","utc":"+02:00"},{"label":"Africa/Addis_Ababa (GMT+03:00)","tzCode":"Africa/Addis_Ababa","name":"(GMT+03:00) Addis Ababa, Dire Dawa, Mek\'ele, Nazrēt, Bahir Dar","utc":"+03:00"},{"label":"Africa/Asmara (GMT+03:00)","tzCode":"Africa/Asmara","name":"(GMT+03:00) Asmara, Keren, Massawa, Assab, Mendefera","utc":"+03:00"},{"label":"Africa/Dar_es_Salaam (GMT+03:00)","tzCode":"Africa/Dar_es_Salaam","name":"(GMT+03:00) Dar es Salaam, Mwanza, Zanzibar, Arusha, Mbeya","utc":"+03:00"},{"label":"Africa/Djibouti (GMT+03:00)","tzCode":"Africa/Djibouti","name":"(GMT+03:00) Djibouti, \'Ali Sabieh, Tadjourah, Obock, Dikhil","utc":"+03:00"},{"label":"Africa/Kampala (GMT+03:00)","tzCode":"Africa/Kampala","name":"(GMT+03:00) Kampala, Gulu, Lira, Mbarara, Jinja","utc":"+03:00"},{"label":"Africa/Mogadishu (GMT+03:00)","tzCode":"Africa/Mogadishu","name":"(GMT+03:00) Mogadishu, Hargeysa, Berbera, Kismayo, Marka","utc":"+03:00"},{"label":"Africa/Nairobi (GMT+03:00)","tzCode":"Africa/Nairobi","name":"(GMT+03:00) Nairobi, Mombasa, Nakuru, Eldoret, Kisumu","utc":"+03:00"},{"label":"Antarctica/Syowa (GMT+03:00)","tzCode":"Antarctica/Syowa","name":"(GMT+03:00) Syowa","utc":"+03:00"},{"label":"Asia/Aden (GMT+03:00)","tzCode":"Asia/Aden","name":"(GMT+03:00) Sanaa, Al Ḩudaydah, Taiz, Aden, Mukalla","utc":"+03:00"},{"label":"Asia/Baghdad (GMT+03:00)","tzCode":"Asia/Baghdad","name":"(GMT+03:00) Baghdad, Basrah, Al Mawşil al Jadīdah, Al Başrah al Qadīmah, Mosul","utc":"+03:00"},{"label":"Asia/Bahrain (GMT+03:00)","tzCode":"Asia/Bahrain","name":"(GMT+03:00) Manama, Al Muharraq, Ar Rifā‘, Dār Kulayb, Madīnat Ḩamad","utc":"+03:00"},{"label":"Asia/Kuwait (GMT+03:00)","tzCode":"Asia/Kuwait","name":"(GMT+03:00) Al Aḩmadī, Ḩawallī, As Sālimīyah, Şabāḩ as Sālim, Al Farwānīyah","utc":"+03:00"},{"label":"Asia/Qatar (GMT+03:00)","tzCode":"Asia/Qatar","name":"(GMT+03:00) Doha, Ar Rayyān, Umm Şalāl Muḩammad, Al Wakrah, Al Khawr","utc":"+03:00"},{"label":"Asia/Riyadh (GMT+03:00)","tzCode":"Asia/Riyadh","name":"(GMT+03:00) Riyadh, Jeddah, Mecca, Medina, Sulţānah","utc":"+03:00"},{"label":"Europe/Istanbul (GMT+03:00)","tzCode":"Europe/Istanbul","name":"(GMT+03:00) Istanbul, Ankara, İzmir, Bursa, Adana","utc":"+03:00"},{"label":"Europe/Kirov (GMT+03:00)","tzCode":"Europe/Kirov","name":"(GMT+03:00) Kirov, Kirovo-Chepetsk, Vyatskiye Polyany, Slobodskoy, Kotel’nich","utc":"+03:00"},{"label":"Europe/Minsk (GMT+03:00)","tzCode":"Europe/Minsk","name":"(GMT+03:00) Minsk, Homyel\', Mahilyow, Vitebsk, Hrodna","utc":"+03:00"},{"label":"Europe/Moscow (GMT+03:00)","tzCode":"Europe/Moscow","name":"(GMT+03:00) Moscow, Saint Petersburg, Nizhniy Novgorod, Kazan, Rostov-na-Donu","utc":"+03:00"},{"label":"Europe/Simferopol (GMT+03:00)","tzCode":"Europe/Simferopol","name":"(GMT+03:00) Simferopol, Kerch, Yevpatoriya, Yalta, Feodosiya","utc":"+03:00"},{"label":"Europe/Volgograd (GMT+03:00)","tzCode":"Europe/Volgograd","name":"(GMT+03:00) Volgograd, Volzhskiy, Kamyshin, Mikhaylovka, Uryupinsk","utc":"+03:00"},{"label":"Indian/Antananarivo (GMT+03:00)","tzCode":"Indian/Antananarivo","name":"(GMT+03:00) Antananarivo, Toamasina, Antsirabe, Fianarantsoa, Mahajanga","utc":"+03:00"},{"label":"Indian/Comoro (GMT+03:00)","tzCode":"Indian/Comoro","name":"(GMT+03:00) Moroni, Moutsamoudou, Fomboni, Domoni, Tsimbeo","utc":"+03:00"},{"label":"Indian/Mayotte (GMT+03:00)","tzCode":"Indian/Mayotte","name":"(GMT+03:00) Mamoudzou, Koungou, Dzaoudzi, Dembeni, Sada","utc":"+03:00"},{"label":"Asia/Tehran (GMT+03:30)","tzCode":"Asia/Tehran","name":"(GMT+03:30) Tehran, Mashhad, Isfahan, Karaj, Tabriz","utc":"+03:30"},{"label":"Asia/Baku (GMT+04:00)","tzCode":"Asia/Baku","name":"(GMT+04:00) Baku, Ganja, Sumqayıt, Lankaran, Yevlakh","utc":"+04:00"},{"label":"Asia/Dubai (GMT+04:00)","tzCode":"Asia/Dubai","name":"(GMT+04:00) Dubai, Sharjah, Abu Dhabi, Ajman City, Ras Al Khaimah City","utc":"+04:00"},{"label":"Asia/Muscat (GMT+04:00)","tzCode":"Asia/Muscat","name":"(GMT+04:00) Muscat, Seeb, Şalālah, Bawshar, Sohar","utc":"+04:00"},{"label":"Asia/Tbilisi (GMT+04:00)","tzCode":"Asia/Tbilisi","name":"(GMT+04:00) Tbilisi, Kutaisi, Batumi, Sokhumi, Zugdidi","utc":"+04:00"},{"label":"Asia/Yerevan (GMT+04:00)","tzCode":"Asia/Yerevan","name":"(GMT+04:00) Yerevan, Gyumri, Vanadzor, Vagharshapat, Hrazdan","utc":"+04:00"},{"label":"Europe/Astrakhan (GMT+04:00)","tzCode":"Europe/Astrakhan","name":"(GMT+04:00) Astrakhan, Akhtubinsk, Znamensk, Kharabali, Kamyzyak","utc":"+04:00"},{"label":"Europe/Samara (GMT+04:00)","tzCode":"Europe/Samara","name":"(GMT+04:00) Samara, Togliatti-on-the-Volga, Izhevsk, Syzran’, Novokuybyshevsk","utc":"+04:00"},{"label":"Europe/Saratov (GMT+04:00)","tzCode":"Europe/Saratov","name":"(GMT+04:00) Saratov, Balakovo, Engel’s, Balashov, Vol’sk","utc":"+04:00"},{"label":"Europe/Ulyanovsk (GMT+04:00)","tzCode":"Europe/Ulyanovsk","name":"(GMT+04:00) Ulyanovsk, Dimitrovgrad, Inza, Barysh, Novoul’yanovsk","utc":"+04:00"},{"label":"Indian/Mahe (GMT+04:00)","tzCode":"Indian/Mahe","name":"(GMT+04:00) Victoria, Anse Boileau, Bel Ombre, Beau Vallon, Cascade","utc":"+04:00"},{"label":"Indian/Mauritius (GMT+04:00)","tzCode":"Indian/Mauritius","name":"(GMT+04:00) Port Louis, Beau Bassin-Rose Hill, Vacoas, Curepipe, Quatre Bornes","utc":"+04:00"},{"label":"Indian/Reunion (GMT+04:00)","tzCode":"Indian/Reunion","name":"(GMT+04:00) Saint-Denis, Saint-Paul, Saint-Pierre, Le Tampon, Saint-André","utc":"+04:00"},{"label":"Asia/Kabul (GMT+04:30)","tzCode":"Asia/Kabul","name":"(GMT+04:30) Kabul, Kandahār, Mazār-e Sharīf, Herāt, Jalālābād","utc":"+04:30"},{"label":"Antarctica/Mawson (GMT+05:00)","tzCode":"Antarctica/Mawson","name":"(GMT+05:00) Mawson","utc":"+05:00"},{"label":"Asia/Aqtau (GMT+05:00)","tzCode":"Asia/Aqtau","name":"(GMT+05:00) Shevchenko, Zhanaozen, Beyneu, Shetpe, Yeraliyev","utc":"+05:00"},{"label":"Asia/Aqtobe (GMT+05:00)","tzCode":"Asia/Aqtobe","name":"(GMT+05:00) Aktobe, Kandyagash, Shalqar, Khromtau, Embi","utc":"+05:00"},{"label":"Asia/Ashgabat (GMT+05:00)","tzCode":"Asia/Ashgabat","name":"(GMT+05:00) Ashgabat, Türkmenabat, Daşoguz, Mary, Balkanabat","utc":"+05:00"},{"label":"Asia/Atyrau (GMT+05:00)","tzCode":"Asia/Atyrau","name":"(GMT+05:00) Atyrau, Qulsary, Shalkar, Balykshi, Maqat","utc":"+05:00"},{"label":"Asia/Dushanbe (GMT+05:00)","tzCode":"Asia/Dushanbe","name":"(GMT+05:00) Dushanbe, Khujand, Kŭlob, Bokhtar, Istaravshan","utc":"+05:00"},{"label":"Asia/Karachi (GMT+05:00)","tzCode":"Asia/Karachi","name":"(GMT+05:00) Karachi, Lahore, Faisalabad, Rawalpindi, Multan","utc":"+05:00"},{"label":"Asia/Oral (GMT+05:00)","tzCode":"Asia/Oral","name":"(GMT+05:00) Oral, Aqsay, Zhänibek, Tasqala, Zhumysker","utc":"+05:00"},{"label":"Asia/Qyzylorda (GMT+05:00)","tzCode":"Asia/Qyzylorda","name":"(GMT+05:00) Kyzylorda, Baikonur, Novokazalinsk, Aral, Chiili","utc":"+05:00"},{"label":"Asia/Samarkand (GMT+05:00)","tzCode":"Asia/Samarkand","name":"(GMT+05:00) Samarkand, Bukhara, Nukus, Qarshi, Jizzax","utc":"+05:00"},{"label":"Asia/Tashkent (GMT+05:00)","tzCode":"Asia/Tashkent","name":"(GMT+05:00) Tashkent, Namangan, Andijon, Qo‘qon, Chirchiq","utc":"+05:00"},{"label":"Asia/Yekaterinburg (GMT+05:00)","tzCode":"Asia/Yekaterinburg","name":"(GMT+05:00) Yekaterinburg, Chelyabinsk, Ufa, Perm, Orenburg","utc":"+05:00"},{"label":"Indian/Kerguelen (GMT+05:00)","tzCode":"Indian/Kerguelen","name":"(GMT+05:00) Port-aux-Français","utc":"+05:00"},{"label":"Indian/Maldives (GMT+05:00)","tzCode":"Indian/Maldives","name":"(GMT+05:00) Male, Fuvahmulah, Hithadhoo, Kulhudhuffushi, Thinadhoo","utc":"+05:00"},{"label":"Asia/Colombo (GMT+05:30)","tzCode":"Asia/Colombo","name":"(GMT+05:30) Colombo, Dehiwala-Mount Lavinia, Moratuwa, Jaffna, Negombo","utc":"+05:30"},{"label":"Asia/Kolkata (GMT+05:30)","tzCode":"Asia/Kolkata","name":"(GMT+05:30) Mumbai, Delhi, Bengaluru, Kolkata, Chennai","utc":"+05:30"},{"label":"Asia/Kathmandu (GMT+05:45)","tzCode":"Asia/Kathmandu","name":"(GMT+05:45) Kathmandu, Pokhara, Pātan, Biratnagar, Birgañj","utc":"+05:45"},{"label":"Antarctica/Vostok (GMT+06:00)","tzCode":"Antarctica/Vostok","name":"(GMT+06:00) Vostok","utc":"+06:00"},{"label":"Asia/Almaty (GMT+06:00)","tzCode":"Asia/Almaty","name":"(GMT+06:00) Almaty, Karagandy, Shymkent, Taraz, Nur-Sultan","utc":"+06:00"},{"label":"Asia/Bishkek (GMT+06:00)","tzCode":"Asia/Bishkek","name":"(GMT+06:00) Bishkek, Osh, Jalal-Abad, Karakol, Tokmok","utc":"+06:00"},{"label":"Asia/Dhaka (GMT+06:00)","tzCode":"Asia/Dhaka","name":"(GMT+06:00) Dhaka, Chattogram, Khulna, Rājshāhi, Comilla","utc":"+06:00"},{"label":"Asia/Omsk (GMT+06:00)","tzCode":"Asia/Omsk","name":"(GMT+06:00) Omsk, Tara, Kalachinsk, Znamenskoye, Tavricheskoye","utc":"+06:00"},{"label":"Asia/Qostanay (GMT+06:00)","tzCode":"Asia/Qostanay","name":"(GMT+06:00) Kostanay, Rudnyy, Dzhetygara, Arkalyk, Lisakovsk","utc":"+06:00"},{"label":"Asia/Thimphu (GMT+06:00)","tzCode":"Asia/Thimphu","name":"(GMT+06:00) himphu, Punākha, Tsirang, Phuntsholing, Pemagatshel","utc":"+06:00"},{"label":"Asia/Urumqi (GMT+06:00)","tzCode":"Asia/Urumqi","name":"(GMT+06:00) Zhongshan, Ürümqi, Zhanjiang, Shihezi, Huocheng","utc":"+06:00"},{"label":"Indian/Chagos (GMT+06:00)","tzCode":"Indian/Chagos","name":"(GMT+06:00) British Indian Ocean Territory","utc":"+06:00"},{"label":"Asia/Yangon (GMT+06:30)","tzCode":"Asia/Yangon","name":"(GMT+06:30) Yangon, Mandalay, Nay Pyi Taw, Mawlamyine, Kyain Seikgyi Township","utc":"+06:30"},{"label":"Indian/Cocos (GMT+06:30)","tzCode":"Indian/Cocos","name":"(GMT+06:30) West Island","utc":"+06:30"},{"label":"Antarctica/Davis (GMT+07:00)","tzCode":"Antarctica/Davis","name":"(GMT+07:00) Davis","utc":"+07:00"},{"label":"Asia/Bangkok (GMT+07:00)","tzCode":"Asia/Bangkok","name":"(GMT+07:00) Bangkok, Hanoi, Haiphong, Samut Prakan, Mueang Nonthaburi","utc":"+07:00"},{"label":"Asia/Barnaul (GMT+07:00)","tzCode":"Asia/Barnaul","name":"(GMT+07:00) Barnaul, Biysk, Rubtsovsk, Novoaltaysk, Gorno-Altaysk","utc":"+07:00"},{"label":"Asia/Hovd (GMT+07:00)","tzCode":"Asia/Hovd","name":"(GMT+07:00) Khovd, Ölgii, Ulaangom, Uliastay, Altai","utc":"+07:00"},{"label":"Asia/Ho_Chi_Minh (GMT+07:00)","tzCode":"Asia/Ho_Chi_Minh","name":"(GMT+07:00) Ho Chi Minh City, Da Nang, Biên Hòa, Nha Trang, Cần Thơ","utc":"+07:00"},{"label":"Asia/Jakarta (GMT+07:00)","tzCode":"Asia/Jakarta","name":"(GMT+07:00) Jakarta, Surabaya, Medan, Bandung, Bekasi","utc":"+07:00"},{"label":"Asia/Krasnoyarsk (GMT+07:00)","tzCode":"Asia/Krasnoyarsk","name":"(GMT+07:00) Krasnoyarsk, Abakan, Norilsk, Achinsk, Kyzyl","utc":"+07:00"},{"label":"Asia/Novokuznetsk (GMT+07:00)","tzCode":"Asia/Novokuznetsk","name":"(GMT+07:00) Novokuznetsk, Kemerovo, Prokop’yevsk, Leninsk-Kuznetsky, Kiselëvsk","utc":"+07:00"},{"label":"Asia/Novosibirsk (GMT+07:00)","tzCode":"Asia/Novosibirsk","name":"(GMT+07:00) Novosibirsk, Berdsk, Iskitim, Akademgorodok, Kuybyshev","utc":"+07:00"},{"label":"Asia/Phnom_Penh (GMT+07:00)","tzCode":"Asia/Phnom_Penh","name":"(GMT+07:00) Phnom Penh, Takeo, Sihanoukville, Battambang, Siem Reap","utc":"+07:00"},{"label":"Asia/Pontianak (GMT+07:00)","tzCode":"Asia/Pontianak","name":"(GMT+07:00) Pontianak, Tanjung Pinang, Palangkaraya, Singkawang, Sampit","utc":"+07:00"},{"label":"Asia/Tomsk (GMT+07:00)","tzCode":"Asia/Tomsk","name":"(GMT+07:00) Tomsk, Seversk, Strezhevoy, Kolpashevo, Asino","utc":"+07:00"},{"label":"Asia/Vientiane (GMT+07:00)","tzCode":"Asia/Vientiane","name":"(GMT+07:00) Vientiane, Pakse, Thakhèk, Savannakhet, Luang Prabang","utc":"+07:00"},{"label":"Indian/Christmas (GMT+07:00)","tzCode":"Indian/Christmas","name":"(GMT+07:00) Flying Fish Cove","utc":"+07:00"},{"label":"Asia/Brunei (GMT+08:00)","tzCode":"Asia/Brunei","name":"(GMT+08:00) Bandar Seri Begawan, Kuala Belait, Seria, Tutong, Bangar","utc":"+08:00"},{"label":"Asia/Choibalsan (GMT+08:00)","tzCode":"Asia/Choibalsan","name":"(GMT+08:00) Baruun-Urt, Choibalsan","utc":"+08:00"},{"label":"Asia/Hong_Kong (GMT+08:00)","tzCode":"Asia/Hong_Kong","name":"(GMT+08:00) Hong Kong, Kowloon, Tsuen Wan, Yuen Long Kau Hui, Tung Chung","utc":"+08:00"},{"label":"Asia/Irkutsk (GMT+08:00)","tzCode":"Asia/Irkutsk","name":"(GMT+08:00) Irkutsk, Ulan-Ude, Bratsk, Angarsk, Ust’-Ilimsk","utc":"+08:00"},{"label":"Asia/Kuala_Lumpur (GMT+08:00)","tzCode":"Asia/Kuala_Lumpur","name":"(GMT+08:00) Kota Bharu, Kuala Lumpur, Klang, Kampung Baru Subang, Johor Bahru","utc":"+08:00"},{"label":"Asia/Kuching (GMT+08:00)","tzCode":"Asia/Kuching","name":"(GMT+08:00) Kuching, Kota Kinabalu, Sandakan, Tawau, Miri","utc":"+08:00"},{"label":"Asia/Macau (GMT+08:00)","tzCode":"Asia/Macau","name":"(GMT+08:00) Macau","utc":"+08:00"},{"label":"Asia/Makassar (GMT+08:00)","tzCode":"Asia/Makassar","name":"(GMT+08:00) Makassar, Denpasar, City of Balikpapan, Banjarmasin, Manado","utc":"+08:00"},{"label":"Asia/Manila (GMT+08:00)","tzCode":"Asia/Manila","name":"(GMT+08:00) Quezon City, Manila, Caloocan City, Budta, Davao","utc":"+08:00"},{"label":"Asia/Shanghai (GMT+08:00)","tzCode":"Asia/Shanghai","name":"(GMT+08:00) Shanghai, Beijing, Tianjin, Guangzhou, Shenzhen","utc":"+08:00"},{"label":"Asia/Singapore (GMT+08:00)","tzCode":"Asia/Singapore","name":"(GMT+08:00) Singapore, Woodlands","utc":"+08:00"},{"label":"Asia/Taipei (GMT+08:00)","tzCode":"Asia/Taipei","name":"(GMT+08:00) Taipei, Kaohsiung, Taichung, Tainan, Banqiao","utc":"+08:00"},{"label":"Asia/Ulaanbaatar (GMT+08:00)","tzCode":"Asia/Ulaanbaatar","name":"(GMT+08:00) Ulan Bator, Erdenet, Darhan, Hovd, Mörön","utc":"+08:00"},{"label":"Australia/Perth (GMT+08:00)","tzCode":"Australia/Perth","name":"(GMT+08:00) Perth, Rockingham, Mandurah, Bunbury, Albany","utc":"+08:00"},{"label":"Australia/Eucla (GMT+08:45)","tzCode":"Australia/Eucla","name":"(GMT+08:45) Eucla","utc":"+08:45"},{"label":"Asia/Chita (GMT+09:00)","tzCode":"Asia/Chita","name":"(GMT+09:00) Chita, Krasnokamensk, Borzya, Petrovsk-Zabaykal’skiy, Aginskoye","utc":"+09:00"},{"label":"Asia/Dili (GMT+09:00)","tzCode":"Asia/Dili","name":"(GMT+09:00) Dili, Maliana, Suai, Likisá, Aileu","utc":"+09:00"},{"label":"Asia/Jayapura (GMT+09:00)","tzCode":"Asia/Jayapura","name":"(GMT+09:00) Ambon, Jayapura, Sorong, Ternate, Abepura","utc":"+09:00"},{"label":"Asia/Khandyga (GMT+09:00)","tzCode":"Asia/Khandyga","name":"(GMT+09:00) Khandyga","utc":"+09:00"},{"label":"Asia/Pyongyang (GMT+09:00)","tzCode":"Asia/Pyongyang","name":"(GMT+09:00) Pyongyang, Hamhŭng, Namp’o, Sunch’ŏn, Hŭngnam","utc":"+09:00"},{"label":"Asia/Seoul (GMT+09:00)","tzCode":"Asia/Seoul","name":"(GMT+09:00) Seoul, Busan, Incheon, Daegu, Daejeon","utc":"+09:00"},{"label":"Asia/Tokyo (GMT+09:00)","tzCode":"Asia/Tokyo","name":"(GMT+09:00) Tokyo, Yokohama, Osaka, Nagoya, Sapporo","utc":"+09:00"},{"label":"Asia/Yakutsk (GMT+09:00)","tzCode":"Asia/Yakutsk","name":"(GMT+09:00) Yakutsk, Blagoveshchensk, Belogorsk, Neryungri, Svobodnyy","utc":"+09:00"},{"label":"Pacific/Palau (GMT+09:00)","tzCode":"Pacific/Palau","name":"(GMT+09:00) Koror, Koror Town, Kloulklubed, Ulimang, Mengellang","utc":"+09:00"},{"label":"Australia/Adelaide (GMT+09:30)","tzCode":"Australia/Adelaide","name":"(GMT+09:30) Adelaide, Adelaide Hills, Mount Gambier, Morphett Vale, Gawler","utc":"+09:30"},{"label":"Australia/Broken_Hill (GMT+09:30)","tzCode":"Australia/Broken_Hill","name":"(GMT+09:30) Broken Hill","utc":"+09:30"},{"label":"Australia/Darwin (GMT+09:30)","tzCode":"Australia/Darwin","name":"(GMT+09:30) Darwin, Alice Springs, Palmerston, Howard Springs","utc":"+09:30"},{"label":"Antarctica/DumontDUrville (GMT+10:00)","tzCode":"Antarctica/DumontDUrville","name":"(GMT+10:00) DumontDUrville","utc":"+10:00"},{"label":"Antarctica/Macquarie (GMT+10:00)","tzCode":"Antarctica/Macquarie","name":"(GMT+10:00) Macquarie","utc":"+10:00"},{"label":"Asia/Ust-Nera (GMT+10:00)","tzCode":"Asia/Ust-Nera","name":"(GMT+10:00) Ust-Nera","utc":"+10:00"},{"label":"Asia/Vladivostok (GMT+10:00)","tzCode":"Asia/Vladivostok","name":"(GMT+10:00) Vladivostok, Khabarovsk, Khabarovsk Vtoroy, Komsomolsk-on-Amur, Ussuriysk","utc":"+10:00"},{"label":"Australia/Brisbane (GMT+10:00)","tzCode":"Australia/Brisbane","name":"(GMT+10:00) Brisbane, Gold Coast, Logan City, Townsville, Cairns","utc":"+10:00"},{"label":"Australia/Currie (GMT+10:00)","tzCode":"Australia/Currie","name":"(GMT+10:00) Currie","utc":"+10:00"},{"label":"Australia/Hobart (GMT+10:00)","tzCode":"Australia/Hobart","name":"(GMT+10:00) Hobart, Launceston, Burnie, Devonport, Sandy Bay","utc":"+10:00"},{"label":"Australia/Lindeman (GMT+10:00)","tzCode":"Australia/Lindeman","name":"(GMT+10:00) Lindeman","utc":"+10:00"},{"label":"Australia/Melbourne (GMT+10:00)","tzCode":"Australia/Melbourne","name":"(GMT+10:00) Melbourne, Geelong, Bendigo, Ballarat, Melbourne City Centre","utc":"+10:00"},{"label":"Australia/Sydney (GMT+10:00)","tzCode":"Australia/Sydney","name":"(GMT+10:00) Sydney, Canberra, Newcastle, Wollongong, Maitland","utc":"+10:00"},{"label":"Pacific/Chuuk (GMT+10:00)","tzCode":"Pacific/Chuuk","name":"(GMT+10:00) Weno, Colonia","utc":"+10:00"},{"label":"Pacific/Guam (GMT+10:00)","tzCode":"Pacific/Guam","name":"(GMT+10:00) Dededo Village, Yigo Village, Tamuning, Tamuning-Tumon-Harmon Village, Mangilao Village","utc":"+10:00"},{"label":"Pacific/Port_Moresby (GMT+10:00)","tzCode":"Pacific/Port_Moresby","name":"(GMT+10:00) Port Moresby, Lae, Mount Hagen, Popondetta, Madang","utc":"+10:00"},{"label":"Pacific/Saipan (GMT+10:00)","tzCode":"Pacific/Saipan","name":"(GMT+10:00) Saipan, San Jose Village","utc":"+10:00"},{"label":"Australia/Lord_Howe (GMT+10:30)","tzCode":"Australia/Lord_Howe","name":"(GMT+10:30) Lord Howe","utc":"+10:30"},{"label":"Antarctica/Casey (GMT+11:00)","tzCode":"Antarctica/Casey","name":"(GMT+11:00) Casey","utc":"+11:00"},{"label":"Asia/Magadan (GMT+11:00)","tzCode":"Asia/Magadan","name":"(GMT+11:00) Magadan, Ust-Nera, Susuman, Ola","utc":"+11:00"},{"label":"Asia/Sakhalin (GMT+11:00)","tzCode":"Asia/Sakhalin","name":"(GMT+11:00) Yuzhno-Sakhalinsk, Korsakov, Kholmsk, Okha, Nevel’sk","utc":"+11:00"},{"label":"Asia/Srednekolymsk (GMT+11:00)","tzCode":"Asia/Srednekolymsk","name":"(GMT+11:00) Srednekolymsk","utc":"+11:00"},{"label":"Pacific/Bougainville (GMT+11:00)","tzCode":"Pacific/Bougainville","name":"(GMT+11:00) Arawa, Buka","utc":"+11:00"},{"label":"Pacific/Efate (GMT+11:00)","tzCode":"Pacific/Efate","name":"(GMT+11:00) Port-Vila, Luganville, Isangel, Sola, Lakatoro","utc":"+11:00"},{"label":"Pacific/Guadalcanal (GMT+11:00)","tzCode":"Pacific/Guadalcanal","name":"(GMT+11:00) Honiara, Malango, Auki, Gizo, Buala","utc":"+11:00"},{"label":"Pacific/Kosrae (GMT+11:00)","tzCode":"Pacific/Kosrae","name":"(GMT+11:00) Tofol","utc":"+11:00"},{"label":"Pacific/Norfolk (GMT+11:00)","tzCode":"Pacific/Norfolk","name":"(GMT+11:00) Kingston","utc":"+11:00"},{"label":"Pacific/Noumea (GMT+11:00)","tzCode":"Pacific/Noumea","name":"(GMT+11:00) Nouméa, Mont-Dore, Dumbéa, Païta, Wé","utc":"+11:00"},{"label":"Pacific/Pohnpei (GMT+11:00)","tzCode":"Pacific/Pohnpei","name":"(GMT+11:00) Kolonia, Kolonia Town, Palikir - National Government Center","utc":"+11:00"},{"label":"Antarctica/McMurdo (GMT+12:00)","tzCode":"Antarctica/McMurdo","name":"(GMT+12:00) McMurdo","utc":"+12:00"},{"label":"Asia/Anadyr (GMT+12:00)","tzCode":"Asia/Anadyr","name":"(GMT+12:00) Anadyr, Bilibino","utc":"+12:00"},{"label":"Asia/Kamchatka (GMT+12:00)","tzCode":"Asia/Kamchatka","name":"(GMT+12:00) Petropavlovsk-Kamchatsky, Yelizovo, Vilyuchinsk, Klyuchi, Mil’kovo","utc":"+12:00"},{"label":"Pacific/Auckland (GMT+12:00)","tzCode":"Pacific/Auckland","name":"(GMT+12:00) Auckland, Wellington, Christchurch, Manukau City, North Shore","utc":"+12:00"},{"label":"Pacific/Fiji (GMT+12:00)","tzCode":"Pacific/Fiji","name":"(GMT+12:00) Suva, Lautoka, Nadi, Labasa, Ba","utc":"+12:00"},{"label":"Pacific/Funafuti (GMT+12:00)","tzCode":"Pacific/Funafuti","name":"(GMT+12:00) Funafuti, Savave Village, Tanrake Village, Toga Village, Asau Village","utc":"+12:00"},{"label":"Pacific/Kwajalein (GMT+12:00)","tzCode":"Pacific/Kwajalein","name":"(GMT+12:00) Ebaye, Jabat","utc":"+12:00"},{"label":"Pacific/Majuro (GMT+12:00)","tzCode":"Pacific/Majuro","name":"(GMT+12:00) Majuro, Arno, Jabor, Wotje, Mili","utc":"+12:00"},{"label":"Pacific/Nauru (GMT+12:00)","tzCode":"Pacific/Nauru","name":"(GMT+12:00) Yaren, Baiti, Anabar, Uaboe, Ijuw","utc":"+12:00"},{"label":"Pacific/Tarawa (GMT+12:00)","tzCode":"Pacific/Tarawa","name":"(GMT+12:00) Tarawa, Betio Village, Bikenibeu Village","utc":"+12:00"},{"label":"Pacific/Wake (GMT+12:00)","tzCode":"Pacific/Wake","name":"(GMT+12:00) Wake","utc":"+12:00"},{"label":"Pacific/Wallis (GMT+12:00)","tzCode":"Pacific/Wallis","name":"(GMT+12:00) Mata-Utu, Leava, Alo","utc":"+12:00"},{"label":"Pacific/Chatham (GMT+12:45)","tzCode":"Pacific/Chatham","name":"(GMT+12:45) Waitangi","utc":"+12:45"},{"label":"Pacific/Apia (GMT+13:00)","tzCode":"Pacific/Apia","name":"(GMT+13:00) Apia, Asau, Mulifanua, Afega, Leulumoega","utc":"+13:00"},{"label":"Pacific/Enderbury (GMT+13:00)","tzCode":"Pacific/Enderbury","name":"(GMT+13:00) Enderbury","utc":"+13:00"},{"label":"Pacific/Fakaofo (GMT+13:00)","tzCode":"Pacific/Fakaofo","name":"(GMT+13:00) Atafu Village, Nukunonu, Fale old settlement","utc":"+13:00"},{"label":"Pacific/Tongatapu (GMT+13:00)","tzCode":"Pacific/Tongatapu","name":"(GMT+13:00) Nuku‘alofa, Lapaha, Neiafu, Pangai, ‘Ohonua","utc":"+13:00"},{"label":"Pacific/Kiritimati (GMT+14:00)","tzCode":"Pacific/Kiritimati","name":"(GMT+14:00) Kiritimati","utc":"+14:00"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"mx-timezone-clock/index": 0,
/******/ 			"mx-timezone-clock/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmxdfmtzc_npm_handler"] = globalThis["webpackChunkmxdfmtzc_npm_handler"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["mx-timezone-clock/style-index"], () => (__webpack_require__("./includes/gutenberg/src/mx-timezone-clock/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map