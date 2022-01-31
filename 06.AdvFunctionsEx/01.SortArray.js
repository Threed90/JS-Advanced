//pure function - is not changing array parameter
function solve(arr, sortCommand) {
    let arrCopy = JSON.parse(JSON.stringify(arr)); // deepcopy

    let library = {
        asc() {
            return arrCopy.sort((a, b) => a - b);
        },
        desc() {
            return arrCopy.sort((a, b) => b - a);
        }
    };

    return library[sortCommand]();
}

let checker = typeof function () { console.log('Hello world!'); };
console.log(typeof solve);
console.log(solve([14, 7, 17, 6, 8], 'asc'));