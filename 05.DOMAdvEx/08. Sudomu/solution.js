function solve() {

    let divContainerElement = document.getElementById('exercise');

    divContainerElement.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            let trElements = document.querySelectorAll('tbody tr');
            let tableElement = e.currentTarget.querySelector('table');
            let resultPElement = document.querySelector('#check p');

            if (e.target.textContent === 'Quick Check') {

                let isSolved = isMatrixSolved(trElements);

                if (isSolved) {
                    tableElement.style.border = '2px solid green';
                    resultPElement.style.color = 'green';
                    resultPElement.textContent = 'You solve it! Congratulations!';
                } else {
                    tableElement.style.border = '2px solid red';
                    resultPElement.style.color = 'red';
                    resultPElement.textContent = 'NOP! You are not done yet...';
                }
            } else if (e.target.textContent === 'Clear') {
                cleanMatrixValues();
                tableElement.style.border = 'none';
                resultPElement.textContent = '';
            }
        }
    })

    function cleanMatrixValues() {
        let inputElements = Array.from(document.querySelectorAll('input[type="number"]'));

        inputElements.forEach(el => {
            el.value = '';
        });
    }


    function isMatrixSolved(rows) {
        let matrixValues = [];

        //fill matrix and check for same numbers per row
        for (let i = 0; i < rows.length; i++) {

            let inputElementsPerRow = rows[i].querySelectorAll('input[type="number"]');
            let singleRow = [];
            for (let j = 0; j < inputElementsPerRow.length; j++) {
                if (!inputElementsPerRow[j].value) {
                    return false;
                }

                let value = Number(inputElementsPerRow[j].value);
                if (singleRow.includes(value)) {
                    return false;
                }

                singleRow.push(value);
            }
            matrixValues.push(singleRow);
        }

        //check for same number per col and for num as single digit, also check if num is bigger than matrix.length
        let pattern = /^\d{1}$/;
        let valueSizeChecker = matrixValues.length;
        for (let col = 0; col < matrixValues[0].length; col++) {
            let colChecker = [];
            for (let row = 0; row < matrixValues.length; row++) {
                let value = matrixValues[row][col];

                if (!pattern.test(value.toString())) {
                    return false;
                }

                if (value > valueSizeChecker) {
                    return false;
                }

                if (colChecker.includes(value)) {
                    return false;
                }
                colChecker.push(value);
            }
        }

        return true;
        //maybe need to check for evry submatrix 3x3
    }
}