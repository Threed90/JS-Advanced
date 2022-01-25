function aggregate(arr){
    let sum = 0;
    let reverseSum = 0;
    let str = "";

    arr.forEach(element => {
        sum += element;
        reverseSum += (1/element);
        str += element;
    });

    console.log(sum);
    console.log(reverseSum);
    console.log(str);
}


aggregate([1, 2, 3]);