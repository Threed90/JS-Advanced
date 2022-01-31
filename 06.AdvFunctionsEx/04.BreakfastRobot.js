function solution(){

    let mircoElements = {
        'protein' : 0,
        'carbohydrate' : 0,
        'fat' : 0,
        'flavour' : 0
    };

    let recipes = {
        apple(quantity){
            let carbohydrate = quantity;
            let flavour = quantity * 2;

            return {
                'carbohydrate' : carbohydrate,
                'flavour' : flavour
            };
        },
        lemonade(quantity){
            let carbohydrate = quantity * 10;
            let flavour = quantity * 20;

            return {
                'carbohydrate' : carbohydrate,
                'flavour' : flavour
            };
        },
        burger(quantity){
            let carbohydrate = quantity * 5;
            let fat = quantity * 7;
            let flavour = quantity * 3;

            return {
                'carbohydrate' : carbohydrate,
                'fat' : fat,
                'flavour' : flavour
            };
        },
        eggs(quantity){
            let protein = quantity * 5;
            let fat = quantity;
            let flavour = quantity;

            return {
                'protein' : protein,
                'fat' : fat,
                'flavour' : flavour
            };
        },
        turkey(quantity){
            let protein = quantity * 10;
            let carbohydrate = quantity * 10;
            let fat = quantity * 10;
            let flavour = quantity * 10;
            
            return {
                'protein' : protein,
                'carbohydrate' : carbohydrate,
                'fat' : fat,
                'flavour' : flavour
            };
        }
    }
    function manager(command){
        let commandTokens = command.split(' ');

        if(commandTokens[0] === 'restock'){
            mircoElements[commandTokens[1]] += Number(commandTokens[2]);
            return 'Success';
        } else if(commandTokens[0] === 'prepare'){
            let quantity = Number(commandTokens[2]);
            let ingredients = recipes[commandTokens[1]](quantity);

            for (const key in ingredients) {
                if(mircoElements[key] < ingredients[key]){
                    return `Error: not enough ${key} in stock`;
                }
            }

            for (const key in ingredients) {
                mircoElements[key] -= ingredients[key];
            }

            return 'Success';
        } else if(commandTokens[0] === 'report'){
            return Object.entries(mircoElements).map(e => `${e[0]}=${e[1]}`).join(' ');
        }
    }

    return manager;
}


let manager = solution (); 

console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));

