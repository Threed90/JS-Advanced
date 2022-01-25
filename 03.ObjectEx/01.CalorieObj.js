function solve(arr){
    let object = arr.filter((e, i) => i%2 == 0).reduce((acc, e, i) => {
        
            acc[e] = Number(arr[i*2+1]);
            
        return acc;
    }, {});

    console.log(object);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);