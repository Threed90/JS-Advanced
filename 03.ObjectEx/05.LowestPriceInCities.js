function solve(arr){
    let tokens = arr.map(e => e.split(' | '));

    let products = {};

    for (const [town, product, price] of tokens) {
        if(!products[product]){
            products[product] = {
                town : town,
                price : Number(price)
            };
            continue;
        }

        if(products[product].price > Number(price)){
            products[product].price = Number(price);
            products[product].town = town;
        }
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']
)