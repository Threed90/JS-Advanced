function subtract() {
    let num1 = Number(document.getElementById("firstNumber").value);
    let num2 = Number(document.getElementById("secondNumber").value);

    let divElement = document.getElementById('result');
    divElement.textContent = num1 - num2;
}