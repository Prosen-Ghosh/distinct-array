const distinct = (function(){
    'use strict';
    const unique = function(arr){
        return [... new Set(arr)];
    }
    return unique;
})();

if (typeof module === 'object' && module.exports) {
    module.exports = distinct;
}