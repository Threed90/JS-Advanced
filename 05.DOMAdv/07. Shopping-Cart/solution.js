function solve() {
   let productButtonElements = Array.from(document.querySelectorAll('.product .product-add .add-product'));
   let productsChecker = [];
   let total = 0;
   let textAreaElement = document.querySelector('textarea');
   let checkButton = document.querySelector('.checkout');

   productButtonElements.forEach(el => {

      let matches = el.parentNode.parentNode.textContent.match(/(?<=\s|^)(?:[^\s].+)/g);
      let productName = matches[0];
      let productPrice = Number(matches[matches.length - 1]);

      el.addEventListener('click', () => {
         if (!productsChecker.includes(productName)) {
            productsChecker.push(productName);
         }
         total += productPrice;
         textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      });
   });




   checkButton.addEventListener('click', () => {
      //if (textAreaElement.textContent) {
         textAreaElement.textContent += `You bought ${productsChecker.join(', ')} for ${total.toFixed(2)}.`;
      //}
      productButtonElements.forEach(el => {
         el.setAttribute('disabled', true)
      });
      checkButton.setAttribute('disabled', true);
   });


}