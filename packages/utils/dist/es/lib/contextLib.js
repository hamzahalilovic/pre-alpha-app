"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppContext = exports.AccountContext = void 0;
exports.useAccountContext = useAccountContext;
exports.useAppContext = useAppContext;

var _react = require("react");

var AppContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.AppContext = AppContext;

function useAppContext() {
  return (0, _react.useContext)(AppContext);
}

var AccountContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.AccountContext = AccountContext;

function useAccountContext() {
  return (0, _react.useContext)(AccountContext);
}