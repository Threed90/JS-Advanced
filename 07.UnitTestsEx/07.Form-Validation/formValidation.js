function validate() {
    // validation variables:
    let namePattern = /^[a-zA-Z0-9]{3,20}$/;
    let passPattern = /^\w{5,15}$/;
    let mailPattern = /^[^@]+@[^@]*\.{1,}[^@]*$/; //maybe need to be diffrend pattern
    let companyNumPattern = /^[1-9][0-9]{3}$/;

    //HTML elements:
    let usernameElement = document.getElementById('username');
    let emailElement = document.getElementById('email');
    let passElement = document.getElementById('password');
    let confirmPassElement = document.getElementById('confirm-password');
    let companyNumElement = document.getElementById('companyNumber');
    let fieldSetElement = document.getElementById('companyInfo');
    let resultDivElement = document.getElementById('valid');
    let checkBoxElement = document.getElementById('company');
    let buttonElement = document.getElementById('submit');

    //checkbox event:

    checkBoxElement.addEventListener('change', (e) => {
        if(e.target.checked){
            fieldSetElement.style.display = 'inline-block';
        } else {
            fieldSetElement.style.display = 'none';
        }
    });

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();
        let name = usernameElement.value;
        let email = emailElement.value;
        let pass = passElement.value;
        let confPass = confirmPassElement.value;
        let companyNum = companyNumElement.value;

        let isCorrectName = namePattern.test(name);
        let isEmailCorrect = mailPattern.test(email);
        let isPassCorrect = passPattern.test(pass);
        let isPassConfirmSameValue = confPass === pass;
        let isCompanyNumCorrect = companyNumPattern.test(companyNum);

        if(!isCorrectName){
            usernameElement.style.border = '';
            usernameElement.style.borderColor = 'red';
        } else {
            usernameElement.style.border = 'none';
        }

        if(!isEmailCorrect){
            emailElement.style.border = '';
            emailElement.style.borderColor = 'red';
        } else {
            emailElement.style.border = 'none';
        }

        if(!isPassCorrect || !isPassConfirmSameValue){
            passElement.style.border = '';
            confirmPassElement.style.border = '';
            passElement.style.borderColor = 'red';
            confirmPassElement.style.borderColor = 'red';
        } else {
            passElement.style.border = 'none';
            confirmPassElement.style.border = 'none';
        }

        // if(!isPassConfirmSameValue){
        //     confirmPassElement.style.border = '';
        //     confirmPassElement.style.borderColor = 'red';
        // } else {
        //     confirmPassElement.style.border = 'none';
        // }

        if(!isCompanyNumCorrect && checkBoxElement.checked){
            companyNumElement.style.border = '';
            companyNumElement.style.borderColor = 'red';
        } else {
            companyNumElement.style.border = 'none';
        }

        if(checkBoxElement.checked && isCorrectName && isEmailCorrect && isPassCorrect && isPassConfirmSameValue && isCompanyNumCorrect){
            resultDivElement.style.display = 'inline-block';
        } else if(!checkBoxElement.checked && isCorrectName && isEmailCorrect && isPassCorrect && isPassConfirmSameValue){
            resultDivElement.style.display = 'inline-block';
        } else {
            resultDivElement.style.display = 'none';
        }
    })
}
