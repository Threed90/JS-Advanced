function focused() {
    let bodyElement = document.querySelector('body');

    bodyElement.addEventListener('focus', (e) => {
        e.target.parentNode.classList.add('focused');
    }, true);

    bodyElement.addEventListener('blur', (e) => {
        e.target.parentNode.removeAttribute('class');
    }, true);
}