function solve() {
    document.querySelector('#container button').addEventListener('click', onClick);
    let selectElement = document.getElementById('selectMenuTo');
    selectElement.insertAdjacentHTML('beforeend', '<option selected value="hexadecimal">Hexadecimal</option>');
    selectElement.insertAdjacentHTML('beforeend', '<option selected value="binary">Binary</option>');
    function onClick(){
        let convertTo = {
            binary(num){
                return num.toString(2);
            },
            hexadecimal(num){
                return num.toString(16).toUpperCase();
            }
        };
    
        let selectValue = document.getElementById('selectMenuTo').value;
        let num = Number(document.getElementById('input').value);
        if(num && selectValue){
            document.getElementById('result').value = convertTo[selectValue](num);
        }
    }
   
}