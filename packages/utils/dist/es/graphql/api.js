"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyCodeMutation = exports.updateUserProfileMutation = exports.updatePrifinaUserMutation = exports.updateActivityMutation = exports.sendVerificationMutation = exports.newAppVersionMutation = exports.listSystemNotificationsQuery = exports.listSystemNotificationsByDateQuery = exports.listDataSourcesQuery = exports.listAppsQuery = exports.listAppMarketQuery = exports.installWidgetMutation = exports.getVerificationQuery = exports.getSystemNotificationCountQuery = exports.getRequestTokenQuery = exports.getPrifinaWidgetsQuery = exports.getPrifinaUserQuery = exports.getPrifinaSessionQuery = exports.getPrifinaAppsQuery = exports.getLoginUserIdentityPoolQuery = exports.getInstalledAppsQuery = exports.getHeaderQuery = exports.getCountryCodeQuery = exports.getAppVersionQuery = exports.deletePrifinaSessionMutation = exports.createSystemNotificationMutation = exports.createNotificationMutation = exports.createClient = exports.cognitoCredentials = exports.checkUsernameQuery = exports.checkCognitoAttributeQuery = exports.addSystemNotificationMutation = exports.addSearchResultMutation = exports.addSearchKeyMutation = exports.addPrifinaSessionMutation = exports.addAppVersionMutation = void 0;

var _queries = require("./queries");

var _mutations = require("./mutations");

var _clientCognitoIdentity = require("@aws-sdk/client-cognito-identity");

var _awsAppsync = _interopRequireWildcard(require("aws-appsync"));

var _apolloLink = require("apollo-link");

var _apolloLinkHttp = require("apollo-link-http");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("apollo-link-context"),
    setContext = _require.setContext; //import Amplify, { Auth, API } from "aws-amplify";

/*
input SearchKeyInput {
	owner: String!
	searchKey: String
	role: String
}

input SearchResultInput {
	owner: String!
	searchKey: String!
	selectedResult: AWSJSON
}
*/


var cognitoCredentials = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(currentSession) {
    var token, userIdPool, provider, identityParams, idToken, cognitoClient, cognitoIdentity, credentialParams, cognitoIdentityCredentials, clientCredentials;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = currentSession.getIdToken().payload;
            userIdPool = localStorage.getItem("LastSessionIdentityPool"); //const provider='cognito-idp.'+userPoolRegion+'.amazonaws.com/'+userPoolId;

            provider = token["iss"].replace("https://", "");
            identityParams = {
              IdentityPoolId: userIdPool,
              Logins: {}
            };
            idToken = currentSession.getIdToken().getJwtToken();
            identityParams.Logins[provider] = idToken;
            cognitoClient = new _clientCognitoIdentity.CognitoIdentityClient({
              region: userIdPool.split(":")[0]
            }); //console.log(identityParams);

            _context.next = 9;
            return cognitoClient.send(new _clientCognitoIdentity.GetIdCommand(identityParams));

          case 9:
            cognitoIdentity = _context.sent;
            //console.log("COGNITO IDENTITY ", cognitoIdentity);
            credentialParams = {
              IdentityId: cognitoIdentity.IdentityId,
              Logins: {}
            };
            credentialParams.Logins[provider] = idToken; //console.log(credentialParams);

            _context.next = 14;
            return cognitoClient.send(new _clientCognitoIdentity.GetCredentialsForIdentityCommand(credentialParams));

          case 14:
            cognitoIdentityCredentials = _context.sent;
            console.log("COGNITO IDENTITY CREDS ", cognitoIdentityCredentials);
            clientCredentials = {
              identityId: cognitoIdentity.IdentityId,
              accessKeyId: cognitoIdentityCredentials.Credentials.AccessKeyId,
              secretAccessKey: cognitoIdentityCredentials.Credentials.SecretKey,
              sessionToken: cognitoIdentityCredentials.Credentials.SessionToken,
              expiration: cognitoIdentityCredentials.Credentials.Expiration,
              authenticated: true
            };
            return _context.abrupt("return", clientCredentials);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function cognitoCredentials(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.cognitoCredentials = cognitoCredentials;

var createClient = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(endpoint, region, currentSession) {
    var token, userIdPool, provider, identityParams, idToken, cognitoClient, cognitoIdentity, credentialParams, cognitoIdentityCredentials, clientCredentials, AppSyncConfig, client;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            /*
              // this is not authenticated credentials, because of amplify bug...
              Auth.currentCredentials().then(c => {
                console.log("HOME USER CLIENT ", c);
              });
              */
            console.log("CLIENT ", endpoint, region, currentSession);
            token = currentSession.getIdToken().payload;
            userIdPool = localStorage.getItem("LastSessionIdentityPool"); //const provider='cognito-idp.'+userPoolRegion+'.amazonaws.com/'+userPoolId;

            provider = token["iss"].replace("https://", "");
            identityParams = {
              IdentityPoolId: userIdPool,
              Logins: {}
            };
            idToken = currentSession.getIdToken().getJwtToken();
            identityParams.Logins[provider] = idToken;
            cognitoClient = new _clientCognitoIdentity.CognitoIdentityClient({
              region: userIdPool.split(":")[0]
            }); //console.log(identityParams);

            _context2.next = 10;
            return cognitoClient.send(new _clientCognitoIdentity.GetIdCommand(identityParams));

          case 10:
            cognitoIdentity = _context2.sent;
            //console.log("COGNITO IDENTITY ", cognitoIdentity);
            credentialParams = {
              IdentityId: cognitoIdentity.IdentityId,
              Logins: {}
            };
            credentialParams.Logins[provider] = idToken; //console.log(credentialParams);

            _context2.next = 15;
            return cognitoClient.send(new _clientCognitoIdentity.GetCredentialsForIdentityCommand(credentialParams));

          case 15:
            cognitoIdentityCredentials = _context2.sent;
            console.log("COGNITO IDENTITY CREDS ", cognitoIdentityCredentials);
            clientCredentials = {
              identityId: cognitoIdentity.IdentityId,
              accessKeyId: cognitoIdentityCredentials.Credentials.AccessKeyId,
              secretAccessKey: cognitoIdentityCredentials.Credentials.SecretKey,
              sessionToken: cognitoIdentityCredentials.Credentials.SessionToken,
              expiration: cognitoIdentityCredentials.Credentials.Expiration,
              authenticated: true
            };
            localStorage.setItem("PrifinaClientCredentials", JSON.stringify(clientCredentials)); //const clientCredentials = await cognitoCredentials(currentSession);

            AppSyncConfig = {
              url: endpoint,
              region: region,
              auth: {
                type: _awsAppsync.AUTH_TYPE.AWS_IAM,
                credentials: clientCredentials
              },
              disableOffline: true
            };
            client = new _awsAppsync["default"](AppSyncConfig, {
              link: new _awsAppsync.createAppSyncLink(_objectSpread(_objectSpread({}, AppSyncConfig), {}, {
                resultsFetcherLink: _apolloLink.ApolloLink.from([setContext(function (request, previousContext) {
                  //console.log("APOLLO ", previousContext, request);
                  return {
                    headers: _objectSpread(_objectSpread({}, previousContext.headers), {}, {
                      "prifina-user": idToken
                    })
                  };
                }), (0, _apolloLinkHttp.createHttpLink)({
                  uri: AppSyncConfig.url
                })])
              }))
            });
            return _context2.abrupt("return", Promise.resolve(client));

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createClient(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createClient = createClient;

var installWidgetMutation = function installWidgetMutation(API, id, widget) {
  return API.graphql({
    query: _mutations.installWidget,
    variables: {
      id: id,
      widget: widget
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.installWidgetMutation = installWidgetMutation;

var updateActivityMutation = function updateActivityMutation(API, id, app) {
  return API.graphql({
    query: _mutations.updateActivity,
    variables: {
      id: id,
      activeApp: app
    },
    authMode: "AWS_IAM"
  });
};

exports.updateActivityMutation = updateActivityMutation;

var createNotificationMutation = function createNotificationMutation(API, input) {
  return API.graphql({
    query: _mutations.createNotification,
    variables: {
      input: input
    },
    authMode: "AWS_IAM"
  });
};

exports.createNotificationMutation = createNotificationMutation;

var addSearchResultMutation = function addSearchResultMutation(API, input) {
  return API.graphql({
    query: _mutations.addSearchResult,
    variables: {
      input: input
    },
    authMode: "AWS_IAM"
  });
};

exports.addSearchResultMutation = addSearchResultMutation;

var addSearchKeyMutation = function addSearchKeyMutation(API, input) {
  return API.graphql({
    query: _mutations.addSearchKey,
    variables: {
      input: input
    },
    authMode: "AWS_IAM"
  });
};

exports.addSearchKeyMutation = addSearchKeyMutation;

var sendVerificationMutation = function sendVerificationMutation(API, subject, message) {
  return API.graphql({
    query: _mutations.sendVerification,
    variables: {
      subject: subject,
      message: message
    },
    authMode: "AWS_IAM"
  });
};

exports.sendVerificationMutation = sendVerificationMutation;

var verifyCodeMutation = function verifyCodeMutation(API, userCode) {
  return API.graphql({
    query: _mutations.verifyCode,
    variables: {
      user_code: userCode
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.verifyCodeMutation = verifyCodeMutation;

var getVerificationQuery = function getVerificationQuery(API, userCode) {
  return API.graphql({
    query: _queries.getVerification,
    variables: {
      user_code: userCode
    },
    authMode: "AWS_IAM"
  });
};

exports.getVerificationQuery = getVerificationQuery;

var getCountryCodeQuery = function getCountryCodeQuery(API) {
  return API.graphql({
    query: _queries.getCountryCode,
    authMode: "AWS_IAM"
  });
};

exports.getCountryCodeQuery = getCountryCodeQuery;

var getHeaderQuery = function getHeaderQuery(API) {
  return API.graphql({
    query: getHeader,
    authMode: "AWS_IAM"
  });
};

exports.getHeaderQuery = getHeaderQuery;

var checkUsernameQuery = function checkUsernameQuery(API, userName, poolID) {
  return API.graphql({
    query: _queries.checkCognitoAttribute,
    variables: {
      attrName: "username",
      attrValue: userName,
      poolID: poolID
    },
    authMode: "AWS_IAM"
  });
};

exports.checkUsernameQuery = checkUsernameQuery;

var checkCognitoAttributeQuery = function checkCognitoAttributeQuery(API, attrName, attrValue, poolID) {
  return API.graphql({
    query: _queries.checkCognitoAttribute,
    variables: {
      attrName: attrName,
      attrValue: attrValue,
      poolID: poolID
    },
    authMode: "AWS_IAM"
  });
};

exports.checkCognitoAttributeQuery = checkCognitoAttributeQuery;

var getInstalledAppsQuery = function getInstalledAppsQuery(API, userName) {
  return API.graphql({
    query: _queries.getInstalledApps,
    variables: {
      id: userName
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.getInstalledAppsQuery = getInstalledAppsQuery;

var getPrifinaAppsQuery = function getPrifinaAppsQuery(API, id) {
  return API.graphql({
    query: _queries.getPrifinaApps,
    variables: {
      id: id
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.getPrifinaAppsQuery = getPrifinaAppsQuery;

var getPrifinaWidgetsQuery = function getPrifinaWidgetsQuery(API, id) {
  return API.graphql({
    query: _queries.getPrifinaWidgets,
    variables: {
      id: id
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.getPrifinaWidgetsQuery = getPrifinaWidgetsQuery;

var getPrifinaUserQuery = function getPrifinaUserQuery(API, id) {
  //console.log("API ", id);
  return API.graphql({
    query: _queries.getPrifinaUser,
    variables: {
      id: id
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.getPrifinaUserQuery = getPrifinaUserQuery;

var addPrifinaSessionMutation = function addPrifinaSessionMutation(API, input) {
  return API.graphql({
    query: _mutations.addPrifinaSession,
    variables: {
      input: input
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.addPrifinaSessionMutation = addPrifinaSessionMutation;

var getPrifinaSessionQuery = function getPrifinaSessionQuery(API, tracker) {
  return API.graphql({
    query: _queries.getPrifinaSession,
    variables: {
      tracker: tracker
    },
    authMode: "AWS_IAM"
  });
};

exports.getPrifinaSessionQuery = getPrifinaSessionQuery;

var updateUserProfileMutation = function updateUserProfileMutation(API, id) {
  var profile = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return API.graphql({
    query: _mutations.updateUserProfile,
    variables: {
      id: id,
      profile: profile
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.updateUserProfileMutation = updateUserProfileMutation;

var listAppMarketQuery = function listAppMarketQuery(API, opts) {
  // AMAZON_COGNITO_USER_POOLS
  return API.graphql({
    query: _queries.listAppMarket,
    variables: {
      filter: opts.filter || {},
      limit: opts.limit || 100,
      sortDirection: opts.sortDirection || "DESC",
      nextToken: opts.nextToken || null
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.listAppMarketQuery = listAppMarketQuery;

var deletePrifinaSessionMutation = function deletePrifinaSessionMutation(API, tracker) {
  return API.graphql({
    query: _mutations.deletePrifinaSession,
    variables: {
      tracker: tracker
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.deletePrifinaSessionMutation = deletePrifinaSessionMutation;

var listDataSourcesQuery = function listDataSourcesQuery(API, opts) {
  // AMAZON_COGNITO_USER_POOLS
  return API.graphql({
    query: _queries.listDataSources,
    variables: {
      filter: opts.filter || {},
      limit: opts.limit || 100,
      sortDirection: opts.sortDirection || "DESC",
      nextToken: opts.nextToken || null
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.listDataSourcesQuery = listDataSourcesQuery;

var getLoginUserIdentityPoolQuery = function getLoginUserIdentityPoolQuery(API, username, poolID) {
  return API.graphql({
    query: _queries.getLoginUserIdentityPool,
    variables: {
      username: username,
      poolID: poolID
    },
    authMode: "AWS_IAM"
  });
};

exports.getLoginUserIdentityPoolQuery = getLoginUserIdentityPoolQuery;

var listAppsQuery = function listAppsQuery(API, opts) {
  // AMAZON_COGNITO_USER_POOLS
  return API.graphql({
    query: _queries.listApps,
    variables: {
      filter: opts.filter || {},
      limit: opts.limit || 100,
      sortDirection: opts.sortDirection || "DESC",
      nextToken: opts.nextToken || null
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.listAppsQuery = listAppsQuery;

var newAppVersionMutation = function newAppVersionMutation(API, id, prifinaId, opts) {
  return API.graphql({
    query: _mutations.newAppVersion,
    variables: {
      id: id,
      prifinaId: prifinaId,
      name: opts.name || null,
      title: opts.title || null,
      version: opts.version || null,
      appType: opts.appType || 1,
      identity: opts.identity || null,
      identityPool: opts.identityPool || null
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.newAppVersionMutation = newAppVersionMutation;

var addAppVersionMutation = function addAppVersionMutation(API, input) {
  return API.graphql({
    query: _mutations.addAppVersion,
    variables: {
      input: input
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.addAppVersionMutation = addAppVersionMutation;

var addSystemNotificationMutation = function addSystemNotificationMutation(API, input) {
  return API.graphql({
    query: _mutations.addSystemNotification,
    variables: {
      input: input
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.addSystemNotificationMutation = addSystemNotificationMutation;

var createSystemNotificationMutation = function createSystemNotificationMutation(API, input) {
  return API.graphql({
    query: _mutations.createSystemNotification,
    variables: {
      input: input
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.createSystemNotificationMutation = createSystemNotificationMutation;

var getSystemNotificationCountQuery = function getSystemNotificationCountQuery(API, id) {
  //console.log("API ", id);
  return API.graphql({
    query: _queries.getSystemNotificationCount,
    variables: {
      id: id
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.getSystemNotificationCountQuery = getSystemNotificationCountQuery;

var listSystemNotificationsQuery = function listSystemNotificationsQuery(API, opts) {
  // AMAZON_COGNITO_USER_POOLS
  return API.graphql({
    query: _queries.listSystemNotifications,
    variables: {
      filter: opts.filter || {},
      limit: opts.limit || 100,
      sortDirection: opts.sortDirection || "DESC",
      nextToken: opts.nextToken || null
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.listSystemNotificationsQuery = listSystemNotificationsQuery;

var listSystemNotificationsByDateQuery = function listSystemNotificationsByDateQuery(API, opts) {
  // AMAZON_COGNITO_USER_POOLS
  return API.graphql({
    query: _queries.listSystemNotificationsByDate,
    variables: {
      owner: opts.owner,
      filter: opts.filter || {},
      limit: opts.limit || 100,
      sortDirection: opts.sortDirection || "DESC",
      nextToken: opts.nextToken || null
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.listSystemNotificationsByDateQuery = listSystemNotificationsByDateQuery;

var updatePrifinaUserMutation = function updatePrifinaUserMutation(API, input) {
  return API.graphql({
    query: _mutations.updatePrifinaUser,
    variables: {
      input: input
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.updatePrifinaUserMutation = updatePrifinaUserMutation;

var getRequestTokenQuery = function getRequestTokenQuery(API, id, source, status) {
  return API.graphql({
    query: _queries.getRequestToken,
    variables: {
      id: id,
      source: source,
      status: status
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.getRequestTokenQuery = getRequestTokenQuery;

var getAppVersionQuery = function getAppVersionQuery(API, id) {
  return API.graphql({
    query: _queries.getAppVersion,
    variables: {
      id: id
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.getAppVersionQuery = getAppVersionQuery;