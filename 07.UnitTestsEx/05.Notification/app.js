function notify(message) {
  let buttonElement = document.querySelector('#content button');
  let divMsgElement = document.getElementById('notification');

  divMsgElement.textContent = message;
  divMsgElement.style.display = 'block';

  divMsgElement.addEventListener('click', (e) => {
    e.currentTarget.style.display = 'none';
  });
}