const distinct = require('../distinct');
const assert = require('chai').assert;
describe('Unique Array',function(){
    it('Function Shuld Return An Array',function(){
        assert.equal(Object.prototype.toString.call(distinct([1,2,3,1])).toLowerCase(), '[object array]');
    });
    it('Function Shuld Return A Unique Array',function(){
        assert.deepEqual(distinct([1,2,3,1,1]),[1,2,3]);
    });

})