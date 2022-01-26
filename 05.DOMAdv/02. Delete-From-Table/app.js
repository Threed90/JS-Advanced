function deleteByEmail() {
    let textInputElement = document.querySelector('input[name="email"]');
    let tdElements = document.querySelectorAll('tbody > tr > td:nth-of-type(2)');

    let result = 'Not found.';
    for (let i = 0; i < tdElements.length; i++) {
        if(tdElements[i].textContent === textInputElement.value){
            tdElements[i].parentNode.remove();
            result = 'Deleted.';
            break;
        }
    }

    let divOutputElement = document.getElementById('result');
    divOutputElement.textContent = result;
}