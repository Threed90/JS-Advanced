function solve(...args){
    let agsTypeCounter = {};

    for (let arg of args) {

        let type = typeof arg;
        console.log(`${typeof arg}: ${arg}`);

        if(!agsTypeCounter[type]){
            agsTypeCounter[type] = 0;
        }

        agsTypeCounter[type]++;
    }

    for (const [type, count] of Object.entries(agsTypeCounter).sort((a, b) => b[1] - a[1])) {
        console.log(`${type} = ${count}`);
    }
}

solve('cat', 42, function () { console.log('Hello world!'); }, 45, 'dog');
