function colorize() {
    let trElements = document.querySelectorAll('table tr:nth-of-type(2n)');

    let arr = Array.from(trElements);

    arr.forEach(e => {
        e.style.backgroundColor = 'Teal';
    });
}