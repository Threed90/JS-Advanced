function solve(arr){
    
    let resultArr = arr.slice().sort((a, b) => a-b).splice(Math.floor(arr.length / 2));

    return resultArr;
}

solve([3, 19, 14, 7, 2, 19, 6]);