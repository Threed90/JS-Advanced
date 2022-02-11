(function solve(){
 Array.prototype.last = function() {
     return this[this.length-1];
 };
 Array.prototype.skip = function(n){
     let newArr = JSON.parse(JSON.stringify(this.slice(n)));

     return newArr;
 };

 Array.prototype.take = function(n){
    let newArr = JSON.parse(JSON.stringify(this.slice(0, n)));

    return newArr;
};

Array.prototype.sum = function(){
    return this.reduce((acc, e) => acc + e, 0);
};

Array.prototype.average = function(){
    return this.sum() / this.length;
};
})();