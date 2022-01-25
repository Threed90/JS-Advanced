function solve(matrix){
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            let left = j -1;
            let right = j + 1;
            let top = i -1;
            let bot = i +1;

            if(matrix[i][j] === ''){
                continue;
            }

            if(left >= 0 && matrix[i][left] === matrix[i][j]){
                counter++;
            }

            if(right < matrix[i].length && matrix[i][right] === matrix[i][j]){
                counter++;
            }

            if(top >= 0 && matrix[top][j] === matrix[i][j]){
                counter++;
            }

            if(bot < matrix.length && matrix[bot][j] === matrix[i][j]){
                counter++;
            }

            matrix[i][j] = '';
        }
    }

    //console.log(counter);
    return counter;
}

solve([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]);

