function circleArea(num){
    let type = typeof num;

    if(type === 'number'){
        let area = Math.pow(num, 2) * Math.PI;

        console.log(area.toFixed(2));
    } else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}


circleArea(5);
circleArea('name');