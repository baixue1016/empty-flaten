'use strict';

function double_to_one(collection) {
  var arr = [];
  var c =collection.join(",").split(",");
  for(var i = 0; i < c.length; i++){
    arr.push(Number.parseInt(c[i]));
  }

  return arr;
}

module.exports = double_to_one;
