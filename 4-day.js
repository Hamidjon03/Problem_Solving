// 2665. Counter II

var createCounter = function (init) {
  let value = init;

  function increment() {
    value++
    return value
  }

  function decrement() {
    value--
    return value
  }

  function reset() {
    value = init
    return value
  }

  return {
    increment,
    decrement,
    reset
  }
};


const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
