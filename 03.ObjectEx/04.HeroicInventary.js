function solve(arr){
    let heroTokens = arr.map(e => {
        let elements = e.split(/\s*(?:\/|,)\s{1}/);
        return elements;//.filter(e => e != '/' && e!=',');
    });
    let heroes = [];

    for (const [name, level, ...items] of heroTokens) {
        let obj = {
            name : name,
            level : Number(level),
            items : items
        };
        heroes.push(obj);
    }

    let json = JSON.stringify(heroes);

    console.log(json);
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);