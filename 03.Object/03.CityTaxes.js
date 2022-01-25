function solve(city, population, treasury){

    let cityRecord = {
        name : city,
        population : population,
        treasury,
        taxRate : 10,
        collectTaxes : function(){
            this.treasury += (this.population * this.taxRate);
        },
        applyGrowth(percentage){
            let percent = 1 + (percentage/100);
            this.population *= percent;
        },
        applyRecession(percentage) {
            this.treasury *= (1 - (percentage/100));
        }
    };
    return cityRecord;
}

solve('Tortuga',
7000,
15000
);