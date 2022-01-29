function solution(num){

    function add(a, b){
        return a + b;
    }

    return add.bind(null, num);
}


let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
