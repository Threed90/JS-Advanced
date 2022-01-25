function toggle() {
    let spanElement = document.querySelector('div span.button');
    let spanText = spanElement.textContent;
    let divElement = document.getElementById('extra');

    if(spanText === 'More'){
        spanElement.textContent = 'Less';
        divElement.style.display = 'block';
    } else if(spanText === 'Less') {
        spanElement.textContent = 'More';
        divElement.style.display = 'none';
    }
}