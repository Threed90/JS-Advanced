function extract(content) {
    let text = document.getElementById(content).textContent;

    let pattern = new RegExp(/(?<=\()([^\)]+)(?=\))/, 'g'); // this regex : (?<=\()([^\)]+) - also will work.

    let result = text.match(pattern).join('; ');

    return result;
}