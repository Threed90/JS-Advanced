function dayOfWeek(day){
    let days = [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    let currentDay = day.toLowerCase();

    if(days.includes(currentDay)){
        console.log(days.indexOf(currentDay) + 1);
    } else{
        console.log('error');
    }

    
}

dayOfWeek('Monday');