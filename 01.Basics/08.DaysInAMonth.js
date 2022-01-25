function getNumberOfDays(month, year){
    let days = new Date(year, month, 0).getDate();

    console.log(days);
}

getNumberOfDays(2, 2021);