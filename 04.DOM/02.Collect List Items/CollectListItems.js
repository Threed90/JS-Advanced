function extractText() {
    let ulElement = document.getElementById('items');
    let liContent = ulElement.textContent
    while (liContent.includes(' ')) {
        liContent = liContent.replace(' ',  "");
    }
    
    document.getElementById('result').textContent = liContent.trim();
}