function solve(input){
    let result = input.filter((e, i) => i % 2 == 0).join(' ');

    console.log(result);
}

solve(['20', '30', '40', '50', '60']);