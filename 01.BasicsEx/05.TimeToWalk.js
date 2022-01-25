function walkingTime(steps, stepSize, speed){
    let passedMeters = steps * stepSize;
    let breakTime = Math.trunc(passedMeters / 500);
    let passedKm = passedMeters / 1000;
    let time = (passedKm / speed) * 3600;

    let secs = time % 60;
    time = Math.trunc(time / 60);
    let mins = time % 60;
    mins += breakTime;
    time = Math.trunc(time / 60);

    if(mins > 59){
        time += Math.trunc(mins / 60)
        mins %= 60;
    }

    console.log(`${String(time).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(Math.round(secs)).padStart(2, '0')}`);
}
walkingTime(2564, 0.70, 5.5);