function attachEventsListeners() {

    let buttonElement = document.getElementById('convert');

    buttonElement.addEventListener('click', () => {

        let inputElement = document.getElementById('inputDistance').value;
        if (inputElement) {

            let valueInputElement = Number(inputElement);
            let selectOptionValueInputElement = document.getElementById('inputUnits').value;

            let rationToMeters = {
                'km': 1000,
                'm': 1,
                'cm': 0.01,
                'mm': 0.001,
                'mi': 1609.34,
                'yrd': 0.9144,
                'ft': 0.3048,
                'in': 0.0254
            };

            let meters = valueInputElement * rationToMeters[selectOptionValueInputElement];

            console.log(meters);

            let selectOptionValueOutPutElement = document.getElementById('outputUnits').value;

            let converted = meters / rationToMeters[selectOptionValueOutPutElement];

            console.log(converted);

            let outputElement = document.getElementById('outputDistance');
            outputElement.removeAttribute('disabled');
            outputElement.value = converted;
        }

    })
}