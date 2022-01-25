function solve() {
  let sentences = document.getElementById('input').value.split('.').filter(e => e.length >= 1);

  let textPerParagraphs = [];
  let counter = -1;
  for (let i = 0; i < sentences.length; i++) {
    if (i % 3 == 0) {
      counter++;
      textPerParagraphs[counter] = '';
    }
    textPerParagraphs[counter] += sentences[i] + '.'; // dot is IMPORTANT
  }

  let outputElement = document.getElementById('output');
  textPerParagraphs.forEach(e => {
    outputElement.insertAdjacentHTML('beforeend', `<p>${e.trimStart()}</p>`);
  });
}