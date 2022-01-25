function solve(arr){
    let tokens = arr.map(e => e.split(/\s*(?:\|)\s*/).filter(Boolean))

    let containerArr = [];
    for (let i = 1; i < tokens.length; i++) {
        let obj = {
            Town : tokens[i][0],
            Latitude : +Number(tokens[i][1]).toFixed(2),
            Longitude : +Number(tokens[i][2]).toFixed(2)
        };
        
        containerArr.push(obj);
    }
    let json = JSON.stringify(containerArr);
    console.log(json);
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);