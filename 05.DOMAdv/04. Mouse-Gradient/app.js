function attachGradientEvents() {
    let divBarElement = document.getElementById('gradient');
    let result = document.getElementById('result');

    divBarElement.addEventListener('mousemove', (e) => {
        let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);
        //console.log(e);
        result.textContent = `${percent}%`;
    });
}