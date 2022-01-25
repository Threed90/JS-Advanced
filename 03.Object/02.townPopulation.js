function solve(arr){
    let towns = {};

    for (const item of arr) {
        let tokens = item.split(' <-> ');

        if(!towns[tokens[0]]){
            towns[tokens[0]] = 0;
        }

        towns[tokens[0]] += Number(tokens[1]);
    }

    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);