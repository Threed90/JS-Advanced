function gcd(num1, num2){

    let min = Math.min(Math.abs(num1), Math.abs(num2));
    let bestResult = 1;
    for (let i = min; i > 1; i--) {
        if(num1 % i == 0 && num2 % i == 0){
            bestResult = i;
            break;
        }
    }

    console.log(bestResult);
}


gcd(15, 5);
gcd(2154, 458);