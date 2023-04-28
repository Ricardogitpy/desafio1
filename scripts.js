const entrada = document.querySelector('.entrada');
const encriptarBtn = document.querySelector('.Encriptar');
const desencriptarBtn = document.querySelector('.Desencriptar');
const alerta = document.querySelector('.alert');

const copiarBtn = document.querySelector('.copiar');
const salidaTextarea = document.querySelector('.salida');

copiarBtn.addEventListener('click', () => {
    salidaTextarea.select();
    document.execCommand('copy');
});

encriptarBtn.addEventListener('click', encriptarTexto);
desencriptarBtn.addEventListener('click', desencriptarTexto);

function encriptarTexto() {
    
    const reemplazos = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };
    
    const texto = entrada.value;
    
    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        if (reemplazos[caracter]) {
            textoEncriptado += reemplazos[caracter];
        } else {
            textoEncriptado += caracter;
        }
    }

    document.querySelector('.salida').value = textoEncriptado;
}

function desencriptarTexto() {
    const reemplazos = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    const textoEncriptado = entrada.value;
    let textoDesencriptado = textoEncriptado;

    // Buscar cada palabra en el texto encriptado y reemplazarla con la correspondiente en el texto original
    for (const [clave, valor] of Object.entries(reemplazos)) {
        const expresionRegular = new RegExp(clave, "gi");
        textoDesencriptado = textoDesencriptado.replace(expresionRegular, valor);
    }

    document.querySelector('.salida').value = textoDesencriptado;
}



entrada.addEventListener('input', () => {
    const valor = entrada.value.trim();
    if (/[^a-z\s]/i.test(valor)) { // Verificar si el texto contiene caracteres no permitidos
        encriptarBtn.disabled = true;
        desencriptarBtn.disabled = true;
        alerta.style.color = 'red';
    } else {
        encriptarBtn.disabled = false;
        desencriptarBtn.disabled = false;
        alerta.style.color = '';
    }
});
