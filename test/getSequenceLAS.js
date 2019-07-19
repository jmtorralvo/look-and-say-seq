var assert = require('assert');
var utils = require('../src/index.js')();



describe('Sequence', function() {
  describe('get correct number', function() {
    it('It should return 1', function() {
      assert.equal(utils.getSequenceLAS(1), 11)
    });

    it('It should return 21', function() {
      assert.equal(utils.getSequenceLAS(11), 21)
    });

    it('It should return 1211', function() {
      assert.equal(utils.getSequenceLAS(21), 1211)
    });

    it('It should return 312211', function() {
      assert.equal(utils.getSequenceLAS(111221), 312211)
    });

    it('It should return 31131211131221', function() {
      assert.equal(utils.getSequenceLAS(1113213211), 31131211131221);
    });

    it('It should return 311312111312511312111430', function() {
      assert.equal(utils.getSequenceLAS(11132132111113213211), 311312111312511312111430);
    });
  });
});