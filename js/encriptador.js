//-------Selección de Elementos-------//
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

const imgMuneco1 = document.querySelector(".img-muneco");
const titulo1 = document.querySelector(".titulo-uno");
const titulo2 = document.querySelector(".titulo-dos");

/*primera imagen, encriptar palabra*/
const imagen1 = document.createElement("img");
imagen1.src = "./assets/top-secret.svg";
imagen1.alt = "Encriptando Palabra";
imagen1.className = "img-encriptar";
imagen1.style.opacity = "0.4";

//-------Boton de Encriptar-------//
btnEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if (texto !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        imgMuneco1.remove();
        imagen2.remove();
        titulo2.remove();

        titulo1.textContent = "Se ha encriptado tu palabra";        
        contenido.prepend(imagen1);
        contenido.append(titulo1);        
    }
});

/*segunda imagen, desencriptar palabra*/
const imagen2 = document.createElement("img");
imagen2.src = "./assets/search-bro.svg";
imagen2.alt = "Encriptando Palabra";
imagen2.className = "img-desencriptar";
imagen2.style.opacity = "0.4";

//-------Boton de Desencriptar-------//
btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == "") {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if (texto !== txt) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        //contenido.remove();
        imgMuneco1.remove();
        imagen1.remove();
        titulo2.remove();

        titulo1.textContent = "Se ha desencriptado tu palabra";        
        contenido.prepend(imagen2);
        contenido.append(titulo1);        
    }
});

//-------Boton de Copiar-------//
btnCopiar.addEventListener("click", e => {
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});