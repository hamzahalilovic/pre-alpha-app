"use strict";

var _react = _interopRequireDefault(require("react"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

it("Test email validation, valid email ", function () {
  expect.assertions(1);
  var result = (0, _utils.validEmail)("tero@prifina.com");
  expect(result).toBe(true);
});
it("Test email validation, invalid email", function () {
  expect.assertions(1);
  var result = (0, _utils.validEmail)("tero#prifina.com");
  expect(result).toBe(false);
});
it("Test lower case chars validation, invalid string", function () {
  expect.assertions(1);
  var result = (0, _utils.lowerCaseChars)("BBBBB");
  expect(result).toBe(false);
});
it("Test lower case chars validation, valid string", function () {
  expect.assertions(1);
  var result = (0, _utils.lowerCaseChars)("BBaaaaaBB");
  expect(result).toBe(true);
});
it("Test upper case chars validation, invalid string", function () {
  expect.assertions(1);
  var result = (0, _utils.upperCaseChars)("aaaaa");
  expect(result).toBe(false);
});
it("Test upper case chars validation, valid string", function () {
  expect.assertions(1);
  var result = (0, _utils.upperCaseChars)("BBBB");
  expect(result).toBe(true);
});
it("Test digit chars validation, invalid string", function () {
  expect.assertions(1);
  var result = (0, _utils.digitChars)("aaaaa");
  expect(result).toBe(false);
});
it("Test digit chars validation, valid string", function () {
  expect.assertions(1);
  var result = (0, _utils.digitChars)("BBBB1232");
  expect(result).toBe(true);
});
it("Test space chars validation, invalid string", function () {
  expect.assertions(1);
  var result = (0, _utils.hasSpaces)("aaaaa");
  expect(result).toBe(false);
});
it("Test space chars validation, valid string", function () {
  expect.assertions(1);
  var result = (0, _utils.hasSpaces)("BBBB 1232");
  expect(result).toBe(true);
});
it("Test non-chars validation, invalid string", function () {
  expect.assertions(1);
  var result = (0, _utils.hasNonChars)("aaaaa");
  expect(result).toBe(false);
});
it("Test non-chars validation, valid string", function () {
  expect.assertions(1);
  var result = (0, _utils.hasNonChars)("BBBB#1232");
  expect(result).toBe(true);
});
it("Test password list validation, invalid string", function () {
  expect.assertions(1);
  var result = (0, _utils.checkPwList)("tero");
  expect(result).toBe(false);
});
it("Test password list validation, valid string", function () {
  expect.assertions(1);
  var result = (0, _utils.checkPwList)("password");
  expect(result).toBe(true);
});
it("Test password validation, valid string", function () {
  expect.assertions(2);
  var result = (0, _utils.checkPassword)("qqWW11==22!!", 10, ["tero", "test"]); //console.log(result);

  expect(_typeof(result)).toBe("object");
  expect(result).toEqual([true, true, true, true, true]);
  /*
  expect(result).toEqual(
    expect.arrayContaining([true])
  );
  */
});
it("Test password validation, invalid string", function () {
  expect.assertions(2);
  var result = (0, _utils.checkPassword)("password", 10, ["tero", "test"]); //console.log(result);

  expect(_typeof(result)).toBe("object");
  expect(result).toEqual([false, false, false, false, false]);
});
it("Test phone number validation, valid number", function () {
  expect.assertions(2);
  var result = (0, _utils.isValidNumber)("+358407077102");
  console.log(result); //expect(typeof result).toBe("object");

  expect(_typeof(result)).toEqual("object");
  expect(Object.keys(result).length).toBeGreaterThan(0);
});
it("Test phone number validation, invalid number", function () {
  expect.assertions(2);
  var result = (0, _utils.isValidNumber)("0407077102");
  console.log(result); //expect(typeof result).toBe("object");

  expect(_typeof(result)).toEqual("object");
  expect(Object.keys(result).length).toBe(0);
}); //const { validEmail } = require("../src/lib/utils");

/*
test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  */

/*
it("Test email validation", () => {
  expect.assertions(1);
  const result = validEmail("tero@prifina.com");

  expect(result).toBe(true);
});
*/

/*
it('Test faker function,transaction ', async () => {
    expect.assertions(1);
    const {getData} = require('./get/FakerData');
    const random = await getData('transaction');
    //console.log(random);
    expect(typeof random).toBe('object');
});
*/

/*
describe("NewsContent", () => {
  it.todo("Should render a normal string"); // This will show up as a todo in our test suite! Woohoo!
});
*/