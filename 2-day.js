// 2620. Counter

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let value = n
  return function () {
    console.log(value)
    return value++
  };

};