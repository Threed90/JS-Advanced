function solve() {
  let divElement = document.getElementById('exercise');

  divElement.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {

      if (e.target.textContent === 'Generate') {

        let textareaInputElement = e.currentTarget.querySelector('textarea:nth-of-type(1)');

        let productsTokens = JSON.parse(textareaInputElement.value);

        let thElements = e.currentTarget.querySelectorAll('table > thead > tr > th');

        let tbodyElement = e.currentTarget.querySelector('table > tbody');

        for (const item of productsTokens) {
          let newTrElement = document.createElement('tr');

          for (const th of thElements) {

            let newTdElement = document.createElement('td');

            if (th.textContent === 'Image') {

              let imgElement = document.createElement('img');
              imgElement.setAttribute('src', item.img)
              newTdElement.appendChild(imgElement);

            } else if(th.textContent === 'Decoration factor'){

              let pElement = document.createElement('p');
              pElement.textContent = item.decFactor;
              newTdElement.appendChild(pElement);

            } else if(th.textContent === 'Mark'){
              let inputElement = document.createElement('input');
              inputElement.setAttribute('type', 'checkbox');
              newTdElement.appendChild(inputElement);
            } else{
              let pElement = document.createElement('p');
              pElement.textContent = item[th.textContent.toLowerCase()];
              newTdElement.appendChild(pElement);
            }

            newTrElement.appendChild(newTdElement);
          }

          tbodyElement.appendChild(newTrElement);
        }

      } else if (e.target.textContent === 'Buy') {
        let products = [];
        let totalPrice = 0;
        let totalDecor = 0;
        let trElements = document.querySelectorAll('tbody > tr');
        console.log(trElements);
        for (const row of trElements) {
          let isChecked = row.cells[4].children[0];

          if(isChecked.checked){
            let productName = row.cells[1].textContent.trim();
            totalPrice += Number(row.cells[2].textContent.trim());
            totalDecor += Number(row.cells[3].textContent.trim());
            products.push(productName);
          }
        }

        let textareaOutputElement = e.currentTarget.querySelector('textarea:last-of-type');
        let result = `Bought furniture: ${products.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${totalDecor/products.length}`;

        textareaOutputElement.value = result;
      }
    }
  });
}