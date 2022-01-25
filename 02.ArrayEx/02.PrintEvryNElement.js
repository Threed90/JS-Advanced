function solve(arr, step){
    let currentArr = arr.filter((e, i) => i % step == 0);

    //console.log(currentArr);
    return currentArr;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);