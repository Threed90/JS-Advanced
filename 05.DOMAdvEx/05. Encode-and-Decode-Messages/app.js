function encodeAndDecodeMessages() {
    let mainElement = document.getElementById('main');

    mainElement.addEventListener('click', (e)=>{
        if(e.target.tagName === 'BUTTON'){

            let textInTheButton = e.target.textContent;
            let sendingTextareaElement = e.target.parentNode.querySelector('textarea');
            let textForEncode = sendingTextareaElement.value;
            let symbolChanger = 0;
            let acceptingTextareaElement;

            if(textInTheButton === 'Encode and send it'){

                symbolChanger = 1;
                acceptingTextareaElement = e.currentTarget.querySelector('#main div:nth-child(2) textarea');
                sendingTextareaElement.value = '';
                
            } else if(textInTheButton === 'Decode and read it'){

                symbolChanger = -1;
                acceptingTextareaElement = e.currentTarget.querySelector('#main div:nth-child(2) textarea');
            }

            let result = '';

            for (let i = 0; i < textForEncode.length; i++) {

                let asciiValue = (textForEncode.charCodeAt(i) + symbolChanger);
                result += String.fromCharCode(asciiValue);
            }

            acceptingTextareaElement.value = result;
            
        }
    })
}