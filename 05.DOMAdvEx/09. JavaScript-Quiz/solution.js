function solve() {
  let answears = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let divElement = document.getElementById('quizzie');
  let count = 0;
  let elementCounter = 0;

  divElement.addEventListener('click', (e) => {

    if (e.target.tagName === 'P' && e.target.className === 'answer-text') {

      let selectElements = Array.from(e.currentTarget.querySelectorAll('section'));

      let currentSelectionElement = selectElements[elementCounter];
      currentSelectionElement.style.display = 'block';

      if(elementCounter === selectElements.length - 1){
        if (answears.includes(e.target.textContent)) {
          count++;
        }
        currentSelectionElement.style.display = 'none';
        let resultElement = e.currentTarget.querySelector('#results > .results-inner > h1');
          let resultUlHolderElement = e.currentTarget.querySelector('#results');
          resultUlHolderElement.style.display = 'block';
          if(count === selectElements.length){
            resultElement.textContent = 'You are recognized as top JavaScript fan!';
          } else{
            resultElement.textContent = `You have ${count} right answers`;
          }

      } else{
        if (answears.includes(e.target.textContent)) {
          count++;
        }

        currentSelectionElement.style.display = 'none';
        selectElements[elementCounter+1].style.display = 'block';
      }

      elementCounter++;

    }
  });

}
