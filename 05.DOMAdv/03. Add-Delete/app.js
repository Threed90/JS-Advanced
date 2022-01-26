function addItem() {
    let ulElement = document.getElementById('items');
    let liElement = document.createElement('li');
    let textInputElement = document.getElementById('newItemText');

    if(textInputElement.value){

        liElement.textContent = textInputElement.value;

        let aElement = document.createElement('a');
        aElement.href = '#';
        aElement.textContent = '[Delete]';
        liElement.appendChild(aElement);

        aElement.addEventListener('click', (e) => {
            e.currentTarget.parentNode.remove();
        });

        ulElement.appendChild(liElement);
        
    }
    textInputElement.value = '';
}