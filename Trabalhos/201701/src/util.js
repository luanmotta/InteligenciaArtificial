Array.prototype.mergeAll = function() {
    var results = [];
    this.forEach(function(subArray) {
        subArray.forEach(function( x ) {
            results.push( x );
        });
    });
    return results;
};