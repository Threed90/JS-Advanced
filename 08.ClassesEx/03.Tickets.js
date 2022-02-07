function solve(tickets, order) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let ticketsArr = tickets
        .map(e => e.split('|'))
        .map(e => {
            let [destination, price, status] = e;

            return new Ticket(destination, Number(price), status);
        })
        .sort((a, b) => {
            if (order == 'price') {
                return a.price - b.price;
            } else if (order == 'status') {
                return a.status.localeCompare(b.status);
            } else if (order == 'destination') {
                return a.destination.localeCompare(b.destination);
            }
        });

        return ticketsArr;
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));