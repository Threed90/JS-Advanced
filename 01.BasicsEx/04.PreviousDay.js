function getPreviouslyDay(year, month, day){
    let currentDate = new Date(year, month, day);

    if(day == 1){
        currentDate.setDate(-1);
    }else{
        currentDate.setDate(currentDate.getDate() - 1);
    }
    

    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`);
}


getPreviouslyDay(2016, 10, 1)