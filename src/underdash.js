/* globals window, _ */

/*
 *
 * ✅작성되어 있지 않은 함수들의 내용을 완성해 주세요!
 *
 * ⛔️이미 작성이 완료된 함수의 내용은 수정/삭제하지 마세요.
 * ⛔️이미 작성이 완료된 함수의 내용은 반드시 이해하셔야 합니다.
 *
 */

(function () {
  ("use strict");

  window._ = {};

  /**
   *
   * "identity"
   *
   * Returns whatever value is passed as the argument. This function doesn't
   * seem very useful, but remember it - if a function needs to provide an
   * iterator when the user does not pass one in, this will be handy.
   *
   */
  _.identity = function (val) {};

  /**
   *
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values;
   *
   *
   * IMPORTANT NOTE!
   * ===========
   *
   * The .first function is implemented for you, to help guide you toward success
   * in your work on the following functions. Whenever you see a portion of the
   * assignment pre-completed, be sure to read and understand it fully before
   * you proceed. Skipping this step will lead to considerably more difficulty
   * implementing the sections you are responsible for.
   *
   */

  /**
   *
   * [DO NOT MODIFY] "first"
   *
   * Returns an array of the first n elements of an array. If n is undefined,
   * return just the first element.
   *
   */
  _.first = function (array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  /**
   *
   * "last"
   *
   * Like "first", but for the last elements. If n is undefined, return just the
   * last element.
   *
   */
  _.last = function (array, n) {};

  /**
   *
   * "each"
   *
   * Call iterator(value, key, collection) for each element of collection.
   * Accepts both arrays and objects.
   *
   * Note: _.each does not have a return value, but rather simply runs the
   * iterator function over each item in the input collection.
   *
   */
  _.each = function (collection, iterator) {};

  /**
   *
   * [DO NOT MODIFY] "indexOf"
   *
   * Returns the index at which value can be found in the array, or -1 if value
   * is not present in the array.
   *
   */
  _.indexOf = function (array, target) {
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    let result = -1;

    _.each(array, function (item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  /**
   *
   * "filter"
   *
   * Returns all elements of an array that pass a truth test.
   *
   */
  _.filter = function (collection, test) {};

  /**
   *
   * "reject"
   *
   * Returns all elements of an array that don't pass a truth test.
   *
   */
  _.reject = function (collection, test) {};

  /**
   *
   * "map"
   *
   * Returns the results of applying an iterator to each element.
   *
   * map() is a useful primitive iteration function that works a lot
   * like each(), but in addition to running the operation on all
   * the members, it also maintains an array of results.
   *
   */
  _.map = function (collection, iterator) {};

  /**
   *
   * "reduce"
   *
   * Reduces an array or object to a single value by repetitively calling
   * iterator(accumulator, item) for each item. accumulator should be
   * the return value of the previous iterator call.
   *
   * You can pass in a starting value for the accumulator as the third argument
   * to reduce. If no starting value is passed, the first element is used as
   * the accumulator, and is never passed to the iterator. In other words, in
   * the case where a starting value is not passed, the iterator is not invoked
   * until the second element, with the first element as its second argument.
   *
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   *
   */
  _.reduce = function (collection, iterator, accumulator) {};

  /**
   *
   * [DO NOT MODIFY] "contains"
   *
   * Determine if the array or object contains a given value (using `===`).
   *
   * 만약 `contains` 테스트가 실패한다면, `reduce`에 작성한 로직이 잘못 되었을 수 있습니다.
   *
   */
  _.contains = function (collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    return _.reduce(
      collection,
      function (wasFound, item) {
        if (wasFound) {
          return true;
        }
        return item === target;
      },
      false
    );
  };

  /**
   *
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   *
   */

  /**
   *
   * "extend"
   *
   * Extend a given object with all the properties of the passed in
   * object(s).
   *
   * Example:
   *
   *       var obj1 = {key1: "something"};
   *
   *       _.extend(obj1, {
   *         key2: "something new",
   *         key3: "something else new"
   *       }, {
   *         bla: "even more stuff"
   *       });
   *
   *  obj1 now contains key1, key2, key3 and bla.
   */

  _.extend = function (obj) {};

  /**
   *
   * "defaults"
   *
   * Like extend, but doesn't ever overwrite a key that already exists in obj
   *
   */
  _.defaults = function (obj) {};

  /**
   *
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   *
   */

  /**
   *
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   *
   */

  /**
   *
   * [DO NOT MODIFY] "once"
   *
   * Return a function that can be called at most one time. Subsequent calls
   * should return the previously returned value.
   *
   */
  _.once = function (func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    let alreadyCalled = false;
    let result;

    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function () {
      if (!alreadyCalled) {
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // information from one function call to another.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }

      // The new function always returns the originally computed result.
      return result;
    };
  };

  /**
   *
   * "flatten"
   *
   * Takes a multidimensional array and converts it to a one-dimensional array.
   * The new array should contain all elements of the multidimensional array.
   *
   */
  _.flatten = function (nestedArray) {
    // Hint: Use Array.isArray to check if something is an array
  };
})();
