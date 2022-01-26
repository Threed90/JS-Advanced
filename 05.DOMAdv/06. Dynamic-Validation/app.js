function validate() {
    let inputElement = document.getElementById('email');

    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    inputElement.addEventListener('change', () => {
        if(!pattern.test(inputElement.value)){
            inputElement.classList.add('error');
        } else{
            inputElement.removeAttribute('class');
        }
    }, true);
    
}