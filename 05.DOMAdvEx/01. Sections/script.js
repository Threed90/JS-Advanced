function create(words) {
   let divs = [];
   let divElement = document.getElementById('content');
   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.setAttribute('style', 'display:none;');
      div.appendChild(p)
      divElement.appendChild(div);
   }

   divElement.addEventListener('click', (e) => {
      if (e.target.tagName === 'DIV' && !e.target.getAttribute('id')) {
         let el = e.target.querySelector('p');
         el.style.display = 'block';
      }
   });
}