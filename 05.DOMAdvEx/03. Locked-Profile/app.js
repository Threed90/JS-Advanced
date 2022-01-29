function lockedProfile() {
    let mainElement = document.getElementById('main');

    mainElement.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON'){
            let divElement = e.target.parentNode;
            let radioButtonElement = divElement.querySelector('input[value="unlock"]');
            let divUserInfoElement = divElement.querySelector('.profile div')

            if(radioButtonElement.checked){
                if(e.target.textContent === 'Show more'){
                    divUserInfoElement.style.display = 'block';
                    e.target.textContent = 'Hide it';
                } else{
                    e.target.textContent = 'Show more';
                    divUserInfoElement.style.display = 'none';
                }
            }
        }
    }, true);

    mainElement.addEventListener('change', (e) => {
        let clickedElement = e.target;
        let divElement = e.target.parentNode;
        let buttonElement = divElement.querySelector('.profile button');

        if(clickedElement.value === 'lock'){
            buttonElement.setAttribute('disabled', true);
        } else{
            buttonElement.removeAttribute('disabled');
        }
    }, true);
}