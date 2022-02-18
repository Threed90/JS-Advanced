class Restaurant{
    constructor(budgetMoney){
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
        this._mealCount = 0;
    }

    loadProducts(products){
        let currentActions = [];

        for (const product of products) {
            let productTokens = product.split(' ');
            let name = productTokens[0];
            let quantity = Number(productTokens[1]);
            let total = Number(productTokens[2]);

            if(this.budgetMoney >= total){

                if(!this.stockProducts[name]){
                    this.stockProducts[name] = 0;
                }

                this.stockProducts[name] += quantity;
                this.budgetMoney -= total;
                this.history.push(`Successfully loaded ${quantity} ${name}`);
                currentActions.push(`Successfully loaded ${quantity} ${name}`);
            } else{
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
                currentActions.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }

        return currentActions.join('\n');
    }

    addToMenu(meal, neededProducts, price){

        if(this.menu[meal]){
            return `The ${meal} is already in the our menu, try something different.`
        } else {
            this._mealCount++;

            this.menu[meal] = {
                products : neededProducts.map(e => e.split(' ').map((el, i) => {
                    if(i == 1){
                        return Number(el);
                    }

                    return el;
                })),
                price : Number(price)
            };

            if(this._mealCount === 1){
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${this._mealCount} meals in the menu, other ideas?`;
            }
        }
    }

    showTheMenu(){
        let keys = Object.keys(this.menu);

        if(keys.length == 0){
            return "Our menu is not ready yet, please come later...";
        } else {
            return keys.map(e => `${e} - $ ${this.menu[e].price}`).join('\n');
        }
    }

    makeTheOrder(meal){
        if(this.menu[meal]){
            let hasNeededProducts = true;
            for (const product of this.menu[meal].products) {

                if(!this.stockProducts[product[0]]){
                    hasNeededProducts = false;
                    break;
                }
                if(this.stockProducts[product[0]] < product[1]){
                    hasNeededProducts = false;
                    break;
                }
            }

            if(hasNeededProducts){
                for (const product of this.menu[meal].products) {
                    this.stockProducts[product[0]] -= product[1];
                }
                this.budgetMoney += this.menu[meal].price;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        } else {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
    }
}


let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
