function search() {
   let liElements = document.querySelectorAll('#towns li');
   let searchText = document.getElementById('searchText').value;

   let counter = 0;
   for (let i = 0; i < liElements.length; i++) {

      if (searchText && liElements[i].textContent.includes(searchText)) {
         liElements[i].style.textDecoration = 'underline';
         liElements[i].style.fontWeight = 'bold';
         counter++;
      } else {
         liElements[i].style.textDecoration = 'none';
         liElements[i].style.fontWeight = 'normal';
      }
   }

   let resultElement = document.getElementById('result');

   if(counter){
      resultElement.textContent = `${counter} matches found`;
   } else {
      resultElement.textContent = '';
   }
}
