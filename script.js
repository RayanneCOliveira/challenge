document.addEventListener('DOMContentLoaded', function() {
    
    const encryptButton = document.getElementById('encrypt');
    const decryptButton = document.getElementById('decrypt');
    const copyButton = document.getElementById('copyButton');
    const inputMessage = document.querySelector('.content__input__message');
    const resultMessage = document.getElementById('resultMessage');
    const outputSection = document.querySelector('.content__output');
    const resultSection = document.querySelector('.content__result__output');

    outputSection.style.display = 'block';
    resultSection.style.display = 'none';

    if (encryptButton) {
        encryptButton.addEventListener('click', function() {
            if (validateInput(inputMessage.value)) {
                const encryptedMessage = encrypt(inputMessage.value);
                resultMessage.value = encryptedMessage;
                toggleVisibility(true);
                resetInput();
            }
        });
    }

    if (decryptButton) {
        decryptButton.addEventListener('click', function() {
            if (validateInput(inputMessage.value)) {
                const decryptedMessage = decrypt(inputMessage.value);
                resultMessage.value = decryptedMessage;
                toggleVisibility(true);
                resetInput();
            }
        });
    }

    if (copyButton) {
        copyButton.addEventListener('click', function() {
            resultMessage.select();
            document.execCommand('copy');
        });
    }

    function encrypt(message) {
        return message
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function decrypt(message) {
        return message
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    function toggleVisibility(showResult) {
        if (showResult) {
            outputSection.style.display = 'none';
            resultSection.style.display = 'block';
        } else {
            outputSection.style.display = 'block';
            resultSection.style.display = 'none';
        }
    }

    function resetInput() {
        inputMessage.value = "";
        inputMessage.placeholder = "Digite seu texto";
    }

    function validateInput(text) {
        const isValid = /^[a-z\s]*$/.test(text);
        if (!isValid) {
            alert('Apenas letras minúsculas e sem acento são permitidas.');
            inputMessage.value = text.replace(/[^a-z\s]/g, ''); 
        }
        return isValid;
    }
});