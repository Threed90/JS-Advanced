function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let searchElement = document.getElementById('searchField');

        let rowElements = Array.from(document.querySelectorAll('tbody tr'));

        for (let i = 0; i < rowElements.length; i++) {
            if(searchElement.value && rowElements[i].innerHTML.includes(searchElement.value)){
                rowElements[i].className = 'select';
            } else {
                rowElements[i].classList.remove('select');
            }
        }

        searchElement.value = "";

    }
}