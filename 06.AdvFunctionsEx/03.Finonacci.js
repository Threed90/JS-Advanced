function getFibonator(){
    let sequence = [];
    let index = 0;

    return function fib(){
        if(index === 0 || index === 1){
            sequence.push(1);
            index++;
            return 1;
        } else{
            let value = sequence[index-1] + sequence[index-2];
            sequence.push(value);
            index++;
            return value;
        }
    };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
