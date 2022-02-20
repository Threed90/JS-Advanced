function solve() {
    let fnameElement = document.getElementById('fname');
    let lnameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');

    let hireButtonElement = document.getElementById('add-worker');

    let budget = 0;

    let totalSalaryElement = document.getElementById('sum');
    let tbodyElement = document.getElementById('tbody');

    hireButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let fname = fnameElement.value;
        let lname = lnameElement.value;
        let email = emailElement.value;
        let birth = birthElement.value;
        let position = positionElement.value;
        let salary = Number(salaryElement.value);

        if (fname && lname && email && birth && position && salary) {

            budget += salary;

            let trElement = document.createElement('tr');

            let firstNameTd = document.createElement('td');
            firstNameTd.textContent = fname;
            trElement.appendChild(firstNameTd);

            let lastNameTd = document.createElement('td');
            lastNameTd.textContent = lname;
            trElement.appendChild(lastNameTd);

            let emailTd = document.createElement('td');
            emailTd.textContent = email;
            trElement.appendChild(emailTd);

            let birthNameTd = document.createElement('td');
            birthNameTd.textContent = birth;
            trElement.appendChild(birthNameTd);

            let positionTd = document.createElement('td');
            positionTd.textContent = position;
            trElement.appendChild(positionTd);

            let salaryTd = document.createElement('td');
            salaryTd.textContent = salary;
            trElement.appendChild(salaryTd);

            let buttonsTd = document.createElement('td');

            let firedButton = document.createElement('button');
            firedButton.classList.add('fired');
            firedButton.textContent = 'Fired';
            buttonsTd.appendChild(firedButton);

            let editButton = document.createElement('button');
            editButton.classList.add('edit');
            editButton.textContent = 'Edit';
            buttonsTd.appendChild(editButton);

            trElement.appendChild(buttonsTd);

            tbodyElement.appendChild(trElement);


            fnameElement.value = '';
            lnameElement.value = '';
            emailElement.value = '';
            birthElement.value = '';
            positionElement.value = '';
            salaryElement.value = '';
            totalSalaryElement.textContent = budget.toFixed(2);
        }
    });

    tbodyElement.addEventListener('click', (e) => {
        if (e.target.tagName == 'BUTTON') {
            let rowElement = e.target.parentNode.parentNode;
            if (e.target.className == 'fired') {
                let salaryValue = Number(rowElement.querySelector('td:nth-last-child(2)').textContent);
                budget -= salaryValue;
                rowElement.remove();
                totalSalaryElement.textContent = budget.toFixed(2);
            } else if (e.target.className == 'edit') {
                let tds = Array.from(rowElement.children);

                fnameElement.value = tds[0].textContent;
                lnameElement.value = tds[1].textContent;
                emailElement.value = tds[2].textContent;
                birthElement.value = tds[3].textContent;
                positionElement.value = tds[4].textContent;
                salaryElement.value = tds[5].textContent;

                budget -= Number(tds[5].textContent);
                totalSalaryElement.textContent = budget.toFixed(2);
                rowElement.remove();
            }
        }
    })
}
solve()