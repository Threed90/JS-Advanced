function solve(arr){
    let increasingArr = arr.reduce((acc, e) => {
        if(acc.length === 0){
            acc.push(e)
        }
        else{
            if(acc[acc.length-1] <= e){
                acc.push(e);
            }
        }
        return acc;
    }, []);

    //console.log(increasingArr);
    return increasingArr;
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );