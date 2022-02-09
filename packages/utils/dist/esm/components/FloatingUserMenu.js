"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserMenu = exports["default"] = exports.UserMenuContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _autoId = require("@reach/auto-id");

var _modal = require("@blend-ui/modal");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _core = require("@blend-ui/core");

var _icons = require("@blend-ui/icons");

var _bxHome = _interopRequireDefault(require("@iconify/icons-bx/bx-home"));

var _bxBell = _interopRequireDefault(require("@iconify/icons-bx/bx-bell"));

var _bxHistory = _interopRequireDefault(require("@iconify/icons-bx/bx-history"));

var _logout = _interopRequireDefault(require("@iconify/icons-fe/logout"));

var _displayApp = require("./assets/display-app.js");

var _Notifications = require("./Notifications");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _api = require("../graphql/api");

var _subscriptions = require("../graphql/subscriptions");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var positionVariation = function positionVariation(props) {
  var pos = null;

  if (props.positionOption === "top-left") {
    pos = (0, _styledComponents.css)(["top:0;left:0;align-items:flex-start;"]);
  }

  if (props.positionOption === "top-right") {
    pos = (0, _styledComponents.css)(["top:0;right:0;align-items:flex-end;"]);
  }

  if (props.positionOption === "top-center") {
    pos = (0, _styledComponents.css)(["top:0;"]);
  }

  if (props.positionOption === "left-middle") {
    pos = (0, _styledComponents.css)(["top:50%;left:0;align-items:flex-start;"]);
  }

  if (props.positionOption === "bottom-left") {
    pos = (0, _styledComponents.css)(["bottom:0;left:0;align-items:flex-start;"]);
  }

  if (props.positionOption === "bottom-right") {
    pos = (0, _styledComponents.css)(["bottom:0;right:0;"]);
  }

  if (props.positionOption === "bottom-center") {
    pos = (0, _styledComponents.css)(["bottom:0;"]);
  }

  if (props.positionOption === "right-middle") {
    pos = (0, _styledComponents.css)(["right:0;top:50%;align-items:flex-end;"]);
  }

  if (props.positionOption === "center-middle") {
    pos = (0, _styledComponents.css)(["top:50%;"]);
  }

  return [pos];
};

var alertVariation = function alertVariation(props) {
  //console.log("ALERT ", props);
  var styles = props.theme.componentStyles.alert[props.componentStyle];
  return [styles];
};

var Base = _styledComponents["default"].div.withConfig({
  displayName: "FloatingUserMenu__Base",
  componentId: "sc-1l71k97-0"
})(["position:fixed;top:0;right:0;display:flex;align-items:flex-end;justify-content:center;flex-direction:column;min-width:100px;overflow:hidden;z-index:30;", ";", ""], function (props) {
  return props.theme.baseStyles;
}, _styledSystem.space);

var MenuBase = _styledComponents["default"].div.withConfig({
  displayName: "FloatingUserMenu__MenuBase",
  componentId: "sc-1l71k97-1"
})(["min-width:350px;background:#f5f8f7;box-shadow:-4px 0px 8px rgba(91,92,91,0.1);border:0;border-top-left-radius:20px;border-bottom-left-radius:20px;height:100vh;padding-top:25px;z-index:32;"]);

var IconBar = _styledComponents["default"].div.withConfig({
  displayName: "FloatingUserMenu__IconBar",
  componentId: "sc-1l71k97-2"
})(["display:flex;flex-direction:row;justify-content:flex-end;align-items:center;padding-right:25px;"]);

var IconDiv = _styledComponents["default"].div.withConfig({
  displayName: "FloatingUserMenu__IconDiv",
  componentId: "sc-1l71k97-3"
})(["margin:8px;justify-content:center;height:24px;"]);

var LabelDiv = _styledComponents["default"].div.withConfig({
  displayName: "FloatingUserMenu__LabelDiv",
  componentId: "sc-1l71k97-4"
})(["justify-content:center;font-weight:600;margin-right:8px;"]);

var TextDiv = _styledComponents["default"].div.withConfig({
  displayName: "FloatingUserMenu__TextDiv",
  componentId: "sc-1l71k97-5"
})(["justify-content:center;font-weight:400;"]);

var UserMenuContext = /*#__PURE__*/(0, _react.createContext)({});
exports.UserMenuContext = UserMenuContext;

function useIsMountedRef() {
  var isMountedRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    isMountedRef.current = true;
    return function () {
      return isMountedRef.current = false;
    };
  });
  return isMountedRef;
}

var ModalDiv = _styledComponents["default"].div.withConfig({
  displayName: "FloatingUserMenu__ModalDiv",
  componentId: "sc-1l71k97-6"
})(["position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:31;background-color:rgba(30,29,29,0.1);"]);

var Badge = _styledComponents["default"].span.withConfig({
  displayName: "FloatingUserMenu__Badge",
  componentId: "sc-1l71k97-7"
})(["position:absolute;top:", ";right:", ";padding:3.5px 5.5px;border-radius:50%;background:red;font-size:10px;line-height:10px;color:white;font-weight:700;"], function (props) {
  return props.isOpen ? "20px" : "9px";
}, function (props) {
  return props.isOpen ? "143px" : "9px";
});

var UserMenuContextProvider = function UserMenuContextProvider(_ref) {
  var _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? "15px" : _ref$offset,
      id = _ref.id,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? "top-right" : _ref$position,
      theme = _ref.theme,
      onExit = _ref.onExit,
      onHome = _ref.onHome,
      children = _ref.children;
  var defaultTheme = (0, _core.useTheme)();
  theme = theme || defaultTheme;
  var menuContext = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      userMenu = _useState2[0],
      setUserMenu = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var isMountedRef = useIsMountedRef();

  var _useState5 = (0, _react.useState)([false, true, false, false]),
      _useState6 = _slicedToArray(_useState5, 2),
      iconButtons = _useState6[0],
      setIconButtons = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      notificationCount = _useState8[0],
      setNotificationCount = _useState8[1];

  var _useState9 = (0, _react.useState)([/*#__PURE__*/_react["default"].createElement("option", {
    key: "notification-all"
  }, "All")]),
      _useState10 = _slicedToArray(_useState9, 2),
      notificationTypeList = _useState10[0],
      setNotificationTypeList = _useState10[1];

  var uuid = (0, _autoId.useId)();

  var _id = id || uuid;

  var portalId = "blend-usermenu-portal-".concat(_id);
  var menuId = "blend-usermenu-".concat(_id);
  var root = (0, _react.useRef)(null);
  var totalNotifications = (0, _react.useRef)(0);

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      notificationCards = _useState12[0],
      setNotificationCards = _useState12[1];

  var activeUser = (0, _react.useRef)({});
  var clientHandler = (0, _react.useRef)(null);
  var prifinaQraphQLHandler = (0, _react.useRef)(null);
  var subscriptionHandler = (0, _react.useRef)(null); //({ AppIcon, title, date, msg, footer })

  var notificationList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var notifications, cardList;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _api.listSystemNotificationsByDateQuery)(prifinaQraphQLHandler.current, {
                owner: activeUser.current.uuid,
                filter: {
                  status: {
                    eq: 0
                  }
                },
                sortDirection: "DESC"
              });

            case 2:
              notifications = _context.sent;
              console.log("NOTIFICATION LIST", notifications);
              cardList = notifications.data.listSystemNotificationsByDate.items.map(function (c, i) {
                return /*#__PURE__*/_react["default"].createElement(_Notifications.NotificationCard, {
                  mb: 5,
                  key: "nn-" + i,
                  AppIcon: _displayApp.DisplayAppIcon,
                  title: c.type,
                  date: new Date(c.createdAt).toLocaleString(),
                  msg: c.body,
                  footer: ""
                });
              });
              return _context.abrupt("return", cardList);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function notificationList() {
      return _ref2.apply(this, arguments);
    };
  }();

  var iconClick = function iconClick(e, i) {
    console.log("CLICK ", i);

    if (i === 0) {
      // logout
      setIsOpen(false);
      onExit();
    } else if (i === 3) {
      setIsOpen(false);
      onHome();
    } else {
      var buttons = iconButtons.map(function (ic) {
        return false;
      });
      buttons[i] = true;

      if (i === 1) {
        notificationList().then(function (list) {
          console.log("NEW LIST...", list);
          setNotificationCards(list);
          setIconButtons(buttons);
        });
      } else {
        setIconButtons(buttons);
      }

      console.log("ICONS ", iconButtons, buttons);
    } //MenuArea = userMenu.options.recentApps;

  };

  var subscribeNotification = function subscribeNotification(GRAPHQL, variables) {
    //return null;
    console.log("SYSTEM NOTIFICATION SUBS ", variables);
    return GRAPHQL.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: (0, _graphqlTag["default"])(_subscriptions.newSystemNotification),
      variables: variables
    }).subscribe({
      next: function next(_ref3) {
        var provider = _ref3.provider,
            value = _ref3.value;
        console.log("NOTIFICATION SUBS RESULTS ", value);
        onUpdate(1);
      },
      error: function error(_error) {
        return console.warn(_error);
      }
    });
  };

  (0, _react.useEffect)(function () {
    // notifications is the default open button...
    if (isOpen) {
      // user menu open click...
      //console.log("USERMENU OPEN....");
      notificationList().then(function (list) {
        console.log("NEW2 LIST...", list);
        setNotificationCards(list);
      });
    }
  }, [isOpen]);
  (0, _react.useEffect)(function () {
    root.current = document.createElement("div");
    root.current.id = portalId;
    document.body.appendChild(root.current);
    return function () {
      if (root.current) document.body.removeChild(root.current); // unsubscribe...

      if (subscriptionHandler.current) {
        console.log("UNSUBS CORE HANDLER");
        subscriptionHandler.current.unsubscribe();
      }
    };
  }, []);

  var onUpdate = function onUpdate(cnt) {
    console.log("UPDATE NOTIFICATION ", cnt, notificationCount, totalNotifications.current);
    totalNotifications.current += cnt;
    setNotificationCount(totalNotifications.current);
  };

  var show = (0, _react.useCallback)(function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var id = Math.random().toString(36).substr(2, 9);
    console.log("MENU SHOW OPTIONS ", options);

    var menuOptions = _objectSpread({}, options);

    var menu = {
      id: id,
      options: menuOptions
    };
    prifinaQraphQLHandler.current = menu.options.PrifinaGraphQLHandler;
    subscriptionHandler.current = subscribeNotification(menu.options.PrifinaGraphQLHandler, {
      owner: menu.options.prifinaID
    });
    totalNotifications.current = menu.options.notifications || 0;
    setNotificationCount(totalNotifications.current);
    setUserMenu(menu);
    return menu;
  }, []);
  var setActiveUser = (0, _react.useCallback)(function (user) {
    activeUser.current = user;
  }, []);
  var setClientHandler = (0, _react.useCallback)(function (handler) {
    clientHandler.current = handler;
  }, []);
  var setPrifinaGraphQLHandler = (0, _react.useCallback)(function (handler) {
    prifinaQraphQLHandler.current = handler;
  }, []);

  var notificationSelectChange = function notificationSelectChange(e) {};

  var notificationButtonClick = function notificationButtonClick(e) {};

  var notificationCloseClick = function notificationCloseClick(e) {};

  menuContext.current = {
    userMenu: userMenu,
    show: show,
    setClientHandler: setClientHandler,
    setActiveUser: setActiveUser,
    setPrifinaGraphQLHandler: setPrifinaGraphQLHandler
  };
  var baseProps = {
    positionOption: position,
    theme: theme,
    id: menuId
  };
  return /*#__PURE__*/_react["default"].createElement(UserMenuContext.Provider, {
    value: menuContext
  }, children, root.current && /*#__PURE__*/_react["default"].createElement(_modal.Portal, {
    container: root.current
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(Base, baseProps, userMenu && !isOpen && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Avatar, {
    id: "userMenu-avatar",
    src: userMenu.options.avatar,
    initials: userMenu.options.initials,
    alt: "avatar",
    width: userMenu.options.width || 32,
    style: {
      curson: "pointer",
      margin: offset,
      filter: "drop-shadow(0px 4px 8px rgba(91, 92, 91, 0.25))"
    },
    effect: userMenu.options.effect || null
    /*
    onMouseEnter={e => {
      setAvatarWidth(42);
    }}
    onMouseLeave={e => {
      setAvatarWidth(32);
    }}
    */
    ,
    onClick: function onClick() {
      setIsOpen(function (prev) {
        return !prev;
      });
    },
    className: "UserMenuAvatar"
  }), notificationCount > 0 && /*#__PURE__*/_react["default"].createElement(Badge, {
    isOpen: false
  }, notificationCount > 99 ? "99+" : notificationCount)), isOpen && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(ModalDiv, {
    onClick: function onClick() {
      setIsOpen(function (prev) {
        return !prev;
      });
    }
  }), /*#__PURE__*/_react["default"].createElement(MenuBase, null, /*#__PURE__*/_react["default"].createElement(IconBar, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      borderRadius: "50%",
      marginLeft: "15px",
      boxShadow: "-4px 0px 8px rgba(91, 92, 91, 0.1)",
      background: "linear-gradient(180deg, #FFFFFF 0%, #E6E8ED 100%)",
      position: "relative",
      left: "-112px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_icons.BlendIcon, {
    className: "userMenu-logout",
    iconify: _logout["default"],
    color: "#00847A",
    onClick: function onClick(e) {
      return iconClick(e, 0);
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      borderRadius: "50%",
      marginLeft: "15px",
      boxShadow: "0px 4px 4px rgba(0, 132, 122, 0.6)",
      background: "linear-gradient(180deg, #FFFFFF 0%, #E6E8ED 100%)"
    }
  }, /*#__PURE__*/_react["default"].createElement(_icons.BlendIcon, {
    iconify: _bxBell["default"],
    color: "#00847A",
    onClick: function onClick(e) {
      return iconClick(e, 1);
    }
  })), notificationCount > 0 && /*#__PURE__*/_react["default"].createElement(Badge, {
    isOpen: true
  }, notificationCount > 99 ? "99+" : notificationCount), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      borderRadius: "50%",
      marginLeft: "15px",
      boxShadow: "-4px 0px 8px rgba(91, 92, 91, 0.1)",
      background: "linear-gradient(180deg, #FFFFFF 0%, #E6E8ED 100%)"
    }
  }, /*#__PURE__*/_react["default"].createElement(_icons.BlendIcon, {
    iconify: _bxHistory["default"],
    color: "#00847A",
    onClick: function onClick(e) {
      return iconClick(e, 2);
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      borderRadius: "50%",
      marginLeft: "15px",
      marginRight: "20px",
      boxShadow: "-4px 0px 8px rgba(91, 92, 91, 0.1)",
      background: "linear-gradient(180deg, #FFFFFF 0%, #E6E8ED 100%)"
    }
  }, /*#__PURE__*/_react["default"].createElement(_icons.BlendIcon, {
    iconify: _bxHome["default"],
    color: "#00847A",
    onClick: function onClick(e) {
      return iconClick(e, 3);
    }
  })), /*#__PURE__*/_react["default"].createElement(_core.Avatar, {
    src: userMenu.options.avatar,
    initials: userMenu.options.initials,
    width: userMenu.options.width || 32,
    alt: "avatar",
    style: {
      curson: "pointer",
      filter: "drop-shadow(0px 4px 8px rgba(91, 92, 91, 0.25))"
    }
  })), iconButtons[1] && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      margin: "25px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Notifications.NotificationHeader, {
    title: "Notifications",
    selectOnChange: notificationSelectChange,
    buttonOnClick: notificationButtonClick,
    closeClick: notificationCloseClick,
    options: notificationTypeList
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: "5px",
      height: "calc(100vh - 200px)",
      overflowY: "scroll"
    }
  }, notificationCards)), iconButtons[2] && /*#__PURE__*/_react["default"].createElement("div", null, userMenu.options.RecentApps)))))));
};

UserMenuContextProvider.propTypes = {
  offset: _propTypes["default"].string,
  id: _propTypes["default"].string,
  position: _propTypes["default"].string,
  theme: _propTypes["default"].instanceOf(Object),
  onExit: _propTypes["default"].func,
  onHome: _propTypes["default"].func,
  children: _propTypes["default"].instanceOf(Array)
};
/* Hook */
// ==============================

var useUserMenu = function useUserMenu() {
  var menuContext = (0, _react.useContext)(UserMenuContext);
  console.log("CONTEXT ", menuContext);
  var menu = (0, _react.useMemo)(function () {
    return menuContext.current;
  }, [menuContext]);
  return menu;
};
/* @component */


exports.useUserMenu = useUserMenu;
UserMenuContextProvider.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UserMenuContextProvider",
  "props": {
    "offset": {
      "defaultValue": {
        "value": "\"15px\"",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "position": {
      "defaultValue": {
        "value": "\"top-right\"",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "id": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "theme": {
      "type": {
        "name": "instanceOf",
        "value": "Object"
      },
      "required": false,
      "description": ""
    },
    "onExit": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "onHome": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "instanceOf",
        "value": "Array"
      },
      "required": false,
      "description": ""
    }
  }
};
var _default = UserMenuContextProvider;
exports["default"] = _default;