function solve(arr){
    let cars = {};

    let carTokens = arr.map(e => e.split(' | ')
                                  .map((el, i) => {
                                    if(i === 2){
                                        return Number(el);
                                    }
                                    return el;
                                  }));
    
    for (const item of carTokens) {
        if(!cars[item[0]]){
            cars[item[0]] = {};
        }

        if(!cars[item[0]][item[1]]){
            cars[item[0]][item[1]] = 0;
        }

        cars[item[0]][item[1]] += item[2];
    }

    let result = '';
    for (const key in cars) {
        result += `${key}\n`;
        for (const nestedKey in cars[key]) {
            result += `###${nestedKey} -> ${cars[key][nestedKey]}\n`;
        }
    }

    console.log(result);
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);