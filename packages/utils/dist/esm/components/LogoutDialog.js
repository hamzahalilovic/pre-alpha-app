"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _modal = require("@blend-ui/modal");

var _core = require("@blend-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18n = _interopRequireDefault(require("../lib/i18n"));

var _excluded = ["onClose", "onButtonClick"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

_i18n["default"].init();

var LogoutDialog = function LogoutDialog(_ref) {
  var onClose = _ref.onClose,
      onButtonClick = _ref.onButtonClick,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = (0, _core.useTheme)();

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      dialogOpen = _useState2[0],
      setDialogOpen = _useState2[1];

  var onCloseCheck = function onCloseCheck(e, action) {
    console.log("MODAL CLOSE ", e, action);
    onClose(e, action);
    e.preventDefault();
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_modal.Modal, _extends({
    isOpen: dialogOpen,
    closeOnEsc: false,
    closeOnOutsideClick: false,
    onClose: onCloseCheck,
    scrollBehavior: "inside",
    theme: theme,
    size: "566px"
  }, props), /*#__PURE__*/_react["default"].createElement(_modal.ModalContent, null, /*#__PURE__*/_react["default"].createElement(_modal.ModalHeader, null, /*#__PURE__*/_react["default"].createElement(_core.Text, {
    textStyle: "h5",
    color: theme.colors.baseError
  }, _i18n["default"].__("logoutTitle"))), /*#__PURE__*/_react["default"].createElement(_modal.ModalBody, {
    ml: 55,
    mr: 55
  }, /*#__PURE__*/_react["default"].createElement(_core.Text, {
    textStyle: "body",
    as: "p",
    textAlign: "center"
  }, _i18n["default"].__("logoutText"))), /*#__PURE__*/_react["default"].createElement(_modal.ModalFooter, null, /*#__PURE__*/_react["default"].createElement(_core.Box, {
    textAlign: "center",
    width: 1
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    className: "dialog-cancelButton",
    variation: "outline",
    colorStyle: "error",
    onClick: function onClick(e) {
      setDialogOpen(false);
      onButtonClick(e, "cancel");
      e.preventDefault();
    }
  }, _i18n["default"].__("cancelButton")), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    className: "dialog-logoutButton",
    ml: 20,
    onClick: function onClick(e) {
      setDialogOpen(false);
      onButtonClick(e, "logout");
      e.preventDefault();
    }
  }, _i18n["default"].__("logoutButton")))))));
};

LogoutDialog.propTypes = {
  onClose: _propTypes["default"].func.isRequired,
  onButtonClick: _propTypes["default"].func.isRequired
};
LogoutDialog.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LogoutDialog",
  "props": {
    "onClose": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    },
    "onButtonClick": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};
var _default = LogoutDialog;
exports["default"] = _default;