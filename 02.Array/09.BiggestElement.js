function solve(matrix){
    let result = matrix.reduce((acc, elements) => {
        let max = Math.max(...elements);
        if(acc < max){
            acc = max;
        }
        return acc;
    }, Number.NEGATIVE_INFINITY); // number.Max_Value does not work for negative numbers

    //console.log(result);
    return result;
}

solve([[20, 50, 10],
    [8, 33, 145]]
   );

   solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )