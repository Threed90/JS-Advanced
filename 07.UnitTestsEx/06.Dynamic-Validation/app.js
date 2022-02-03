function validate() {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', (e) => {
        let emailText = e.target.value;

        if(!pattern.test(emailText)){
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    })
}