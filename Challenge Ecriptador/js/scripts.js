function validateInput(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function showError(message) {
    const errorMessageElement = document.getElementById("error-message");
    errorMessageElement.innerText = message;
    errorMessageElement.style.display = "block";
}

function clearError() {
    const errorMessageElement = document.getElementById("error-message");
    errorMessageElement.innerText = "";
    errorMessageElement.style.display = "none";
}

function hidePlaceholder() {
    document.getElementById("placeholder").style.display = "none";
}

function ShowOutputText() {
    document.getElementById("output-text").style.display = "grid";
}

function ShowCopyButton() {
    document.getElementById("copy-button").style.display = "block";
}

function checkOutputText() {
    let outputText = document.getElementById("output-text").value;
    if (outputText === "") {
        document.getElementById("placeholder").style.display = "flex";
    }
}

function encrypt() {
    let text = document.getElementById("input-text").value;
    
    if (!validateInput(text)) {
        showError("El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    clearError();

    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("output-text").value = encryptedText;
    hidePlaceholder();
    ShowOutputText();
    ShowCopyButton();
}

function decrypt() {
    let text = document.getElementById("output-text").value;
    
    if (!validateInput(text)) {
        showError("El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    clearError();

    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("output-text").value = decryptedText;
    hidePlaceholder();
    ShowOutputText();
    ShowCopyButton();
}

function copyText() {
    let outputText = document.getElementById("output-text");
    
    if (!outputText.value) {
        showError("No hay texto para copiar.");
        return;
    }

    clearError();

    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

document.getElementById("output-text").addEventListener('input', checkOutputText);
