"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newWaiting = exports.newSystemNotification = exports.newNotification = exports.newConnectNotification = exports.getAthenaResults = void 0;
var newNotification = "subscription UserNotification($owner:String!) {\n    newNotification(owner: $owner) {\n      notificationId\n      owner\n    }\n  }";
exports.newNotification = newNotification;
var newWaiting = "subscription addWaiting($key:String!) {\n  Messaging(key: $key) {\n    createdAt\n    endpoint\n    name\n    senderKey\n  }\n}";
exports.newWaiting = newWaiting;
var newSystemNotification = "subscription systemNotification($owner:String!) {\n  newSystemNotification(owner: $owner) {\n    notificationId\n    owner\n  }\n}";
exports.newSystemNotification = newSystemNotification;
var newConnectNotification = "subscription connectStatusNotification($id:String!) {\n  connectStatusNotification(id: $id) {\n    data\n    id\n  }\n}";
exports.newConnectNotification = newConnectNotification;
var getAthenaResults = "subscription AthenaResults($id: String!) {\n  athenaResults(id: $id) {\n    data\n    appId\n    id\n  }\n}";
exports.getAthenaResults = getAthenaResults;