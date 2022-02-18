window.addEventListener('load', solution);

function solution() {
  let fullNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneElement = document.getElementById('phone');
  let addressElement = document.getElementById('address');
  let codeElement = document.getElementById('code');

  let ulElement = document.getElementById('infoPreview');

  let submitButton = document.getElementById('submitBTN');
  let editButton = document.getElementById('editBTN');
  let continueButton = document.getElementById('continueBTN');

  let blockElement = document.getElementById('block');

  let fullName = '';
  let email = '';
  let phone = '';
  let address = '';
  let code = '';
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    fullName = fullNameElement.value;
    email = emailElement.value;
    phone = phoneElement.value;
    address = addressElement.value;
    code = codeElement.value;

    if (fullName && email) {

      let fullNameLi = document.createElement('li');
      fullNameLi.textContent = `Full Name: ${fullName}`;
      ulElement.appendChild(fullNameLi);

      let emailLi = document.createElement('li');
      emailLi.textContent = `Email: ${email}`;
      ulElement.appendChild(emailLi);

      let phoneLi = document.createElement('li');
      phoneLi.textContent = `Phone Number: ${phone}`;
      ulElement.appendChild(phoneLi);

      let addressLi = document.createElement('li');
      addressLi.textContent = `Address: ${address}`;
      ulElement.appendChild(addressLi);

      let codeLi = document.createElement('li');
      codeLi.textContent = `Postal Code: ${code}`;
      ulElement.appendChild(codeLi);



      fullNameElement.value = '';
      emailElement.value = '';
      phoneElement.value = '';
      addressElement.value = '';
      codeElement.value = '';

      e.target.setAttribute('disabled', true);
      editButton.removeAttribute('disabled');
      continueButton.removeAttribute('disabled');
    }
  });

  editButton.addEventListener('click', (e) => {
    e.preventDefault();

    let currentUl = e.target.parentNode.parentNode;
    let liElements = Array.from(currentUl.querySelectorAll('#infoPreview li'));

    fullNameElement.value = fullName;
    emailElement.value = email;
    phoneElement.value = phone;
    addressElement.value = address;
    codeElement.value = code;

    for (const li of liElements) {
      li.remove();
    }

    e.target.setAttribute('disabled', true);
    continueButton.setAttribute('disabled', true);
    submitButton.removeAttribute('disabled');
  });

  continueButton.addEventListener('click', (e) => {
    e.preventDefault();

    // let elementsForRemoving = Array.from(blockElement.children);

    // elementsForRemoving.forEach(el => {
    //   el.remove();
    // });

    blockElement.textContent = null;

    let h3Element = document.createElement('h3');
    h3Element.textContent = 'Thank you for your reservation!';
    blockElement.appendChild(h3Element);
  });
}
