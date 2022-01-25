function solve(requiredCar){

    let engineParams = {
        90 : 1800,
        120 : 2400,
        200 : 3500
    };
    let key = Object.keys(engineParams).filter(x => x >= requiredCar.power)[0];
    let wheelSize = requiredCar.wheelsize % 2 == 0 ? requiredCar.wheelsize - 1 : requiredCar.wheelsize;

    let car = {
        model : requiredCar.model,
        engine : {
            power : Number(key),
            volume : engineParams[key]
        },
        carriage : {
            type : requiredCar.carriage,
            color : requiredCar.color
        }, 
        wheels : [wheelSize, wheelSize, wheelSize, wheelSize]
    }

    return car
}

solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)