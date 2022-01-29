function addItem() {
    let textInputElement = document.getElementById('newItemText');
    let valueInputElement = document.getElementById('newItemValue');

    let selectElement = document.getElementById('menu');

    if(textInputElement.value && valueInputElement.value){
        let optionElement = document.createElement('option');
        optionElement.setAttribute('value', valueInputElement.value);
        optionElement.textContent = textInputElement.value;
        selectElement.appendChild(optionElement);
    }

    textInputElement.value = '';
    valueInputElement.value = '';
}