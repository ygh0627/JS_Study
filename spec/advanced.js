/* globals expect, _, beforeEach, sinon, setTimeout, clock  */
(function () {
  "use strict";

  const checkForNativeMethods = function (runVanillaUtilsFunction) {
    it("should not use the native version of any utils methods in its implementation", function () {
      // These spies are set up in testSupport.js
      runVanillaUtilsFunction();
      expect(Array.prototype.map.called).to.equal(false);
      expect(Array.prototype.indexOf.called).to.equal(false);
      expect(Array.prototype.forEach.called).to.equal(false);
      expect(Array.prototype.filter.called).to.equal(false);
      expect(Array.prototype.reduce.called).to.equal(false);
      expect(Array.prototype.every.called).to.equal(false);
      expect(Array.prototype.some.called).to.equal(false);
      expect(Array.prototype.flat.called).to.equal(false);
      expect(Array.prototype.includes.called).to.equal(false);
      expect(Array.prototype.find.called).to.equal(false);
    });
  };

  describe("Advanced", function () {
    describe("once", function () {
      checkForNativeMethods(function () {
        let num = 0;
        const increment = _.once(function () {
          num += 1;
        });
      });

      it("should be a function", function () {
        expect(_.once).to.be.an.instanceOf(Function);
      });

      it("should return a function", function () {
        // noop is short for `no-operation` and is pronounced `no-op`
        const noop = _.once(function () {});

        expect(noop).to.be.an.instanceOf(Function);
      });

      it("should only run a user-defined function if it has not been run before", function () {
        let num = 0;
        const increment = _.once(function () {
          num++;
        });

        increment();
        increment();
        increment();

        expect(num).to.equal(1);
      });

      it("should apply arguments to the user-defined function", function () {
        const add = _.once(function (x, y, z) {
          return x + y + z;
        });

        expect(add(1, 2, 3)).to.equal(6);
      });

      it("should return the result of the first call for every subsequent call", function () {
        const add = _.once(function (x, y, z) {
          return x + y + z;
        });

        expect(add(1, 2, 3)).to.equal(6);
        expect(add(4, 5, 6)).to.equal(6);
        expect(add(7, 8, 9)).to.equal(6);
      });
    });

    describe("flatten", function () {
      checkForNativeMethods(function () {
        _.flatten([1, [2], [3, [[[4]]]]]);
      });

      it("can flatten nested arrays", function () {
        const nestedArray = [1, [2], [3, [[[4]]]]];

        expect(_.flatten(nestedArray)).to.eql([1, 2, 3, 4]);
      });
    });
  });
})();
