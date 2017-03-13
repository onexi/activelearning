var should = require('chai').should();
var ex = require('../exercise.js');

describe('activelearning', function() {
    it('should pass', function() {
        ex.check().should.equal(true);
    });
});