function solve(arr, start, end){
    let startIndex = arr.indexOf(start);
    let endIndex = arr.indexOf(end);
    let resultArr = [];

    if(startIndex !== -1 && endIndex !== -1 && startIndex <= endIndex){
        resultArr = arr.slice(startIndex, endIndex+1)
    }

    return resultArr;
}

solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);