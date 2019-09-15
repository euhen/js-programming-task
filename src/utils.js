// programming task
// Support utils module
//
// Copyright (C) 2019 Yevhen Stohniienko <yeuhen.stohniyenko@ukr.net>
//

'use strict';

module.exports = exports = {
	isNumeric: isNumeric,
	deepMap: deepMap,
	range: range};

const isArray = arg => arg instanceof Array,
  isObject = arg => arg instanceof Object;

function isNumeric(data) {
  return (isFinite(data) && (data !== null));
}

if (!Object.fromEntries) // if no ES2019
  Object.fromEntries = arr =>
    Object.assign({}, ...arr.map( ([k, v]) => ({[k]: v}) ));

function ObjectMap(obj, callback) {
  return Object.fromEntries(Object.entries(obj).map( ([key, value]) =>
    [key, callback(value)] ));
}

function deepMap(obj, callback) {
  const baseMap = (value) => 
    isArray(value) ? mapArray(value) :
    isObject(value) ? mapObject(value) :
    callback(value);
  const mapArray = (arr) => arr.map((value) => baseMap(value));
  const mapObject = (obj) => ObjectMap(obj, (value) => baseMap(value));
  return baseMap(obj);
}

function range(start, end) {
  return Array.from({length: end}, (v, i) => i+start);
}
