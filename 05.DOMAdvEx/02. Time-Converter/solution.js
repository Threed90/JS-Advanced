function attachEventsListeners() {

    let buttonElements = document.querySelectorAll('div input[value="Convert"]');

    for (let i = 0; i < buttonElements.length; i++) {
        buttonElements[i].addEventListener('click', calcTimeIntervals);
    }

    function calcTimeIntervals() {

        let daysInputElement = document.getElementById('days');
        let hoursInputElement = document.getElementById('hours');
        let minsInputElement = document.getElementById('minutes');
        let secsInputElement = document.getElementById('seconds');

        let days = 0;
        let hours = 0;
        let mins = 0;
        let secs = 0;

        if (daysInputElement.value) {
            days = Number(daysInputElement.value);
            hours = days * 24;
            mins = hours * 60;
            secs = mins * 60;
        } else if (hoursInputElement.value) {
            hours = Number(hoursInputElement.value);
            days = hours / 24;
            mins = hours * 60;
            secs = mins * 60;
        } else if (minsInputElement.value) {
            mins = Number(minsInputElement.value);
            secs = mins * 60;
            hours = mins / 60;
            days = hours / 24;
        } else if (secsInputElement.value) {
            secs = Number(secsInputElement.value);
            mins = secs / 60;
            hours = mins / 60;
            days = hours / 24;
        }

        daysInputElement.value = days;
        hoursInputElement.value = hours;
        minsInputElement.value = mins;
        secsInputElement.value = secs;
    }


}