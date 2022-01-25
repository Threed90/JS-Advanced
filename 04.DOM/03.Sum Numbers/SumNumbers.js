function calc() {
    let num1 = Number(document.getElementById('num1').value);
    //console.log(num1);
    let num2 = Number(document.getElementById('num2').value);
    //console.log(num2);
    let sum = num1 + num2;
    //console.log(sum);
    document.getElementById('sum').value = sum;
}
