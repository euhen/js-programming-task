// programming task
// Data processing logic module
//
// Copyright (C) 2019 Yevhen Stohniienko <yeuhen.stohniyenko@ukr.net>
//

'use strict';

exports.processGivenObject = processGivenObject;

const {isNumeric, deepMap, range} = require("./utils");

function processGivenObject(obj, altMode) {
  const conditiionalFun = !altMode? (x) => x+1: (x) => x+x;
  return range(2, 6).map((parameter) =>
    deepMap(obj, (xValue) => isNumeric(xValue) ?
      conditiionalFun(Number(xValue)) * parameter : xValue));
}
