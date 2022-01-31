function solve() {
    let nameInputElement = document.querySelector('#container input:nth-of-type(1)');
    let hallInputElement = document.querySelector('#container input:nth-of-type(2)');
    let priceInputElement = document.querySelector('#container input:nth-of-type(3)');

    let addMovieButtonElement = document.querySelector('#container button');
    let clearButtonElement = document.querySelector('#archive > button');

    let ulElement = document.querySelector('#movies ul');
    let ulArchiveElement = document.querySelector('#archive ul');

    addMovieButtonElement.addEventListener('click', addMovie);
    clearButtonElement.addEventListener('click', clearAllArchiveMovies);

    function addMovie(event) {
        event.preventDefault();
        let movieName = nameInputElement.value;
        let hall = hallInputElement.value;
        let price = priceInputElement.value;

        if (movieName && hall && (Number(price) || price === '0')) {
            let liElement = document.createElement('li');

            let spanElement = document.createElement('span');
            spanElement.textContent = movieName;
            liElement.appendChild(spanElement);

            let strongElement = document.createElement('strong');
            strongElement.textContent = `Hall: ${hall}`;
            liElement.appendChild(strongElement);

            let divElement = document.createElement('div');
            let priceStrongElement = document.createElement('strong');
            priceStrongElement.textContent = Number(price).toFixed(2);
            divElement.appendChild(priceStrongElement);
            let inputElement = document.createElement('input');
            inputElement.setAttribute('placeholder', 'Tickets Sold');
            divElement.appendChild(inputElement);
            let buttonElement = document.createElement('button');
            buttonElement.textContent = 'Archive';
            buttonElement.addEventListener('click', archiveMovie)
            divElement.appendChild(buttonElement);
            liElement.appendChild(divElement);

            ulElement.appendChild(liElement);
            console.log(ulElement);
            nameInputElement.value = '';
            hallInputElement.value = '';
            priceInputElement.value = '';
        }
    }

    function archiveMovie(event) {
        event.preventDefault();
        let liContainerElement = event.target.parentNode.parentNode;

        let name = liContainerElement.querySelector('span').textContent;
        let price = Number(liContainerElement.querySelector('div > strong').textContent);
        let quantity = liContainerElement.querySelector('div > input').value;
        let pattern = /^\d+(\.{1}?\d+){0,1}$/
        if (pattern.test(quantity)){
            

            let liElement = document.createElement('li');

            let spanElement = document.createElement('span');
            spanElement.textContent = name;
            liElement.appendChild(spanElement);
            let strongElement = document.createElement('strong');
            strongElement.textContent = `Total amount: ${(price*Number(quantity)).toFixed(2)}`;
            liElement.appendChild(strongElement);
            let button = document.createElement('button');
            button.textContent = 'Delete';
            button.addEventListener('click', deleteMovie)
            liElement.appendChild(button);
            ulArchiveElement.appendChild(liElement);

            liContainerElement.remove();
        }
    }

    function deleteMovie(event){
        event.preventDefault();

        let liElement = event.target.parentNode;
        liElement.remove();
    }

    function clearAllArchiveMovies(event){
        event.preventDefault();
        let ulElement = event.target.parentNode;

        ulArchiveElement.innerHTML = null;
    }
}