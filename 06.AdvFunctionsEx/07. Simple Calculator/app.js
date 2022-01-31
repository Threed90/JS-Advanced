function calculator() {
    let obj = {};

    return {
        init(selector1, selector2, resultSelector){
            let element1 = document.querySelector(selector1);
            let element2 = document.querySelector(selector2);
            let result = document.querySelector(resultSelector);

            obj['selector1'] = element1;
            obj['selector2'] = element2;
            obj['result'] = result;

            return obj;
        },
        add(){
            let num1 = Number(obj.selector1.value);
            let num2 = Number(obj.selector2.value);
            obj.result.value = num1+num2;
        },
        subtract() {
            let num1 = Number(obj.selector1.value);
            let num2 = Number(obj.selector2.value);
            obj.result.value = num1 - num2; //maybe num1 - num2
        }
    };
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 




