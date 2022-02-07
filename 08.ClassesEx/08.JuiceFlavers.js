function solve(arr) {

    class BottleCalculator {
        #juices;
        #bottles;
        constructor() {
            this.#juices = {};
            this.#bottles = {};
        }

        addJuice(name, quantity) {
            if (!this.#juices[name]) {
                this.#juices[name] = 0;
            }

            this.#juices[name] += quantity;

            if (this.#juices[name] >= 1000) {

                this.#bottles[name] = Math.trunc(this.#juices[name] / 1000);
            }
        }

        toString() {
            let result = Object.entries(this.#bottles).map(e => `${e[0]} => ${e[1]}`).join('\n');
            return result;
        }
    }

    let bottleCalc = new BottleCalculator();
    arr.map(e => e
        .split(' => '))
        .forEach(e => {
            bottleCalc.addJuice(e[0], Number(e[1]));
        });

    console.log(bottleCalc.toString());
}

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);