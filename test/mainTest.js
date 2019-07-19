var assert = require('assert');
var utils = require('../src/index.js')();



describe('Sequence', function() {
  describe('get correct number', function() {
    it('It should return 1', function() {
      assert.equal(utils.getSequence(1), 11)
    });

    it('It should return 21', function() {
      assert.equal(utils.getSequence(11), 21)
    });

    it('It should return 1211', function() {
      assert.equal(utils.getSequence(21), 1211)
    });

    it('It should return 312211', function() {
      assert.equal(utils.getSequence(111221), 312211)
    });
  });
});