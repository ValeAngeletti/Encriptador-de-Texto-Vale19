const textarea = document.getElementById("primer-textarea");
const botonEncriptar = document.getElementById("btnEncriptar");
const caracteresEspeciales = /[áéíóúÁÉÍÓÚñÑüÜ¡¿[\]()\d+%$@\-*\/]/;
const botonDesencriptar = document.getElementById("btnDesencriptar")
const mostarMensaje = document.getElementById("exibidor-mensaje");
const parrafosExibidor = document.getElementById("parrafo-exibidor");
 const imagen = document.getElementById("imagen")


botonEncriptar.onclick=obtenerContenido;
botonDesencriptar.onclick=desencriptar;

function obtenerContenido(){
    var contenido = textarea.value; 

        if(comprobarTexto(contenido)){
            alert("TEXTO INVÁLIDO");
            alert("Por favor verifique que su texto no contenga símbolos especiales, números y/o mayúsculas")
            limpiartextarea()
        }else if(contenido === contenido.toUpperCase()){
            alert("TEXTO INVÁLIDO");
            alert("Por favor verifique que su texto no contenga símbolos especiales, números y/o mayúsculas")
            limpiartextarea()
        }else{
            encriptar(contenido);
            limpiartextarea()
        }
}

function comprobarTexto(contenidoAComprobar){
    return caracteresEspeciales.test(contenidoAComprobar);
}

function mostrarMensaje(texto){
    mostarMensaje.value = texto;
    borrarElementos()
}

function encriptar(textoAEncriptar){

    var textoEncriptado = textoAEncriptar.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
    
    mostrarMensaje(textoEncriptado)
}

function desencriptar(){
    var textoDesencriptado = textarea.value.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")

    mostrarMensaje(textoDesencriptado)
    limpiartextarea()
}

function limpiartextarea(){
    return textarea.value = ""
}


//BOTON COPIAR

const botonCopiar = document.getElementById("btn-copiar")

botonCopiar.onclick=copiarAlPortapapeles

function copiarAlPortapapeles() {
    navigator.clipboard.writeText(mostarMensaje.value)
      .then(() => {
        alert('Texto copiado al portapapeles');
      })
      .catch((error) => {
        alert('Error al copiar al portapapeles:', error);
      });
      mostrarElementos();
      return mostarMensaje.value = ""
    
}

//FUNCIONES PARA ELIMINAR Y MOSTRAR ELEMENTOS DE TEXTAREA EXIBIDOR 

function borrarElementos(){
    parrafosExibidor.style.display = 'none';
    imagen.style.display = 'none';
}

function mostrarElementos(){
    parrafosExibidor.style.display = '';
    imagen.style.display = '';
}

  