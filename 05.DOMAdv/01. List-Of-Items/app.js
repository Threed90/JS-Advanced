function addItem() {
    let ulElement = document.getElementById('items');
    let liElement = document.createElement('li');
    let textInputElement = document.getElementById('newItemText');

    if(textInputElement.value){
        liElement.textContent = textInputElement.value;
        ulElement.appendChild(liElement);
        textInputElement.textContent = '';
    }
}