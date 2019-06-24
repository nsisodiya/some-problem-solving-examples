var assert = require('assert');

function RunTest(mainFunc, params) {
    describe('Array', function() {
        params.forEach(function (obj) {
           console.log('input', obj.input); 
            it('should work', function() {
            assert.equal(mainFunc.apply(null, obj.input), obj.exp);  
            });
        });
    });        
}
module.exports = RunTest;