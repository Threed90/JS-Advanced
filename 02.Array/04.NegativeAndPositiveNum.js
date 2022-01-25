function solve(arr){
    // let resultArr = [];
    // for (let i = 0; i < arr.length; i++) {

    //     if(arr[i] < 0){
    //         resultArr.unshift(arr[i]);
    //     } else{
    //         resultArr.push(arr[i]);
    //     }
    // }

    // for (const item of resultArr) {
    //     console.log(item);
    // }

    arr.sort(a => {
        if(a < 0){
            return -1;
        }
        else{
            return 1;
        }
    })

    for (const item of arr) {
        console.log(item);
    }
}

solve([7, -2, 8, 9]);