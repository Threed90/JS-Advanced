function solve(arr){
    let catalogue = {};

    for (const item of arr) {
        if(!catalogue[item[0]]){
            catalogue[item[0]] = [];
        }
        catalogue[item[0]].push(item);
    }

    let keys = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (const key of keys) {
        console.log(key);
        catalogue[key].sort((a,b)=> a.localeCompare(b));
        for (const item of catalogue[key]) {
            let [name, value] = item.split(' : ');
            console.log(`  ${name}: ${value}`);
        }
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)