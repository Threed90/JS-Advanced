function sum(from, to){
    let result = 0;
    let start = Number(from);
    let end = Number(to);
    for (let i = start; i <= end; i++) {
        result += i;
    }

    console.log(result);
}

sum('-8', '20');