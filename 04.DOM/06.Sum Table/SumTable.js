function sumTable() {
    let numElements = document.querySelectorAll('tbody tr td:not(#sum):last-child');
    let sumElement = document.getElementById('sum');

    let sum = 0;

    for (let i = 0; i < numElements.length; i++) {
        sum += Number(numElements[i].textContent);
    }

    sumElement.textContent = sum;
}