function subSum(arr, start, end) {

    if (!Array.isArray(arr)) {
        return NaN;
    }

    if(arr.length === 0){
        return 0;
    }
    
    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, arr.length);
    let result = arr.slice(startIndex, endIndex + 1).map(Number).reduce((a, e) => a + e);

    return result;
}

console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([], 1, 2));