function solve(num){
    let arr = [];
    let sum = 0;
    while(num != 0){
        let digit = num % 10;
        sum += digit;
        num  = Math.trunc(num/10);
        arr.push(digit);
    }

    if(sum == arr[0] * arr.length){
        console.log(true);
    } else{
        console.log(false);
    }

    console.log(sum);
}


solve(12345);