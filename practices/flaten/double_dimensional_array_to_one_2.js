'use strict';

function double_to_one(collection) {
  var arr = [];
  var result = [], hash = {};

  var c =collection.join(",").split(",");
  for(var i = 0; i < c.length; i++){
    arr.push(Number.parseInt(c[i]));
  }

  for (var j = 0, elem; (elem = arr[j]) != undefined; j++) {
    if (!hash[elem]) {
      result.push(elem);
      hash[elem] = true;
    }
  }
  return result;
}

module.exports = double_to_one;
