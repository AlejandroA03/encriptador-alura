function encrypt() {
    const textArea = document.querySelector('.text-area');
    let text = textArea.value;

    if (!validateText(text)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos.");
        return;
    }

    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    displayMessage(encryptedText);
}

function decrypt() {
    const textArea = document.querySelector('.text-area');
    let text = textArea.value;

    if (!validateText(text)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos.");
        return;
    }

    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    displayMessage(decryptedText);
}

function copyText() {
    const messageTextArea = document.querySelector('.mensaje');
    navigator.clipboard.writeText(messageTextArea.value).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}

function displayMessage(message) {
    const messageTextArea = document.querySelector('.mensaje');
    const muñeco = document.querySelector('.img-muñeco');
    const primerTexto = document.querySelector('.primer-texto');
    const segundoTexto = document.querySelector('.segundo-texto');
    const copyButton = document.querySelector('.boton-copiar');

    muñeco.style.display = 'none';
    primerTexto.style.display = 'none';
    segundoTexto.style.display = 'none';
    messageTextArea.value = message;
    copyButton.style.visibility = 'visible';
}

function validateText(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}