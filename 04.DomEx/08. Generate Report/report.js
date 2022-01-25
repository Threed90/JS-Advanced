function generateReport() {
    let checkboxElements = document.querySelectorAll('input[type="checkbox"]');
    let checkedElements = [];

    for (let i = 0; i < checkboxElements.length; i++) {
        if(checkboxElements[i].checked == true){
            checkedElements.push([checkboxElements[i].name, i]);
        }
    }

    let arr = [];

    let trElements = document.querySelectorAll('tbody tr');

    for (let i = 0; i < trElements.length; i++) {
        let obj = {};
        
        for (let j = 0; j < checkedElements.length; j++) {
            obj[checkedElements[j][0]] = trElements[i].cells[checkedElements[j][1]].textContent;
        }

        arr.push(obj);
    }

    let json = JSON.stringify(arr, null, 4);
    if(checkedElements.length){
        document.getElementById('output').textContent = json;
    } else{
        document.getElementById('output').textContent = "";
    }
    
}