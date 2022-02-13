window.addEventListener('load', solve);

function solve() {
    let modelElement = document.getElementById('model');
    let yearElement = document.getElementById('year');
    let descriptionElement = document.getElementById('description');
    let priceElement = document.getElementById('price');

    let tbodyElement = document.getElementById('furniture-list');
    let total = 0;
    let totalElement = document.querySelector('tfoot tr .total-price');

    let addButtonElement = document.getElementById('add');

    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let model = modelElement.value;
        let year = Number(yearElement.value);
        let description = descriptionElement.value;
        let price = Number(priceElement.value);

        if (model && Number.isInteger(year) && description && price && price >= 0 && year >= 0) {

            let mainTrElement = document.createElement('tr');
            mainTrElement.classList.add('info');

            let modelTdElement = document.createElement('td');
            modelTdElement.textContent = model;
            mainTrElement.appendChild(modelTdElement);

            let priceTdElement = document.createElement('td');
            priceTdElement.textContent = price.toFixed(2);
            mainTrElement.appendChild(priceTdElement);

            let buttonTdElement = document.createElement('td');

            let infoButton = document.createElement('button');
            infoButton.classList.add('moreBtn');
            infoButton.textContent = 'More Info';
            buttonTdElement.appendChild(infoButton);

            let buyButton = document.createElement('button');
            buyButton.classList.add('buyBtn');
            buyButton.textContent = 'Buy it';
            buttonTdElement.appendChild(buyButton);

            mainTrElement.appendChild(buttonTdElement);

            tbodyElement.appendChild(mainTrElement);

            let hideTdElement = document.createElement('tr');
            hideTdElement.classList.add('hide');

            let yearTdElement = document.createElement('td');
            yearTdElement.textContent = `Year: ${year}`;
            hideTdElement.appendChild(yearTdElement);

            let descTdElement = document.createElement('td');
            descTdElement.setAttribute('colspan', '3');
            descTdElement.textContent = `Description: ${description}`;
            hideTdElement.appendChild(descTdElement);

            tbodyElement.appendChild(hideTdElement);

            modelElement.value = '';
            yearElement.value = '';
            descriptionElement.value = '';
            priceElement.value = '';
        }
    });

    tbodyElement.addEventListener('click', (e) => {
        //maybe need e.preventDefault();
        if(e.target.tagName == 'BUTTON'){
            let currentInfoTr = e.target.parentNode.parentNode;
            let currentHideTr = currentInfoTr.nextSibling;
            if(e.target.className == 'buyBtn'){
                let price = currentInfoTr.querySelector('td:nth-of-type(2)').textContent;
                total += Number(price);
                currentInfoTr.remove();
                currentHideTr.remove();
                totalElement.textContent = total.toFixed(2);
            } else if (e.target.className == 'moreBtn'){

                if(e.target.textContent == 'More Info'){
                    currentHideTr.style.display = 'contents';
                    e.target.textContent = 'Less Info';
                } else if(e.target.textContent == 'Less Info'){
                    currentHideTr.style.display = 'none';
                    e.target.textContent = 'More Info';
                }
                
                
            }
        }
    });
}
