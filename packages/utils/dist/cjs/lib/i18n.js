"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en = _interopRequireDefault(require("./locales/en"));

var _awsAmplify = require("aws-amplify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var i18nTranslate = {
  init: function init() {
    var lng = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "en";

    _awsAmplify.I18n.putVocabularies(_en["default"]);

    _awsAmplify.I18n.setLanguage(lng);
  },
  __: function __(phrase, values) {
    //console.log("OK ", phrase);
    var res = _awsAmplify.I18n.get(phrase);

    if (values && Object.keys(values).length > 0) {
      Object.keys(values).forEach(function (v) {
        //console.log("REPLACE ", v);
        var r = new RegExp("{{" + v + "}}", "g"); //console.log(r);

        res = res.replace(r, values[v]);
      }); //console.log("REPLACE ", res);
    }

    return res;
  }
};

var _default = _objectSpread({}, i18nTranslate);

exports["default"] = _default;