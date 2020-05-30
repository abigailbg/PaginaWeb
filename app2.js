var nombre = document.getElementById('nombre');
var direccion = document.getElementById('direccion');
var telefono = document.getElementById('telefono');
var email = document.getElementById('email');
var mensaje = document.getElementById('mensaje');
var check = document.getElementById("check");


function enviarFormulario(){
    console.log('Enviar formulario...');
     var mensajesError=[];

     if (nombre.value == null || nombre.value ==''){
       alert('Ingresa nombre...!');
     }else if (nombre.value.length > 80){
         alert.push('El nombre no debe exceder 80 caracteres.')
     }
     if (direccion.value == null || direccion.value ==''){
       alert('Ingrese su dirección...!');
    }else if (nombre.value.length > 100){
         alert('La dirección no debe exceder de 100 palabras')
      }
     if(email.value ==null || email.value ==''){
         alert('Escribir Email');
     }else  if (validarEmail(email.value)==0){
         alert('El email no es valido')
     }
     if(telefono.value ==null || telefono.value ==''){
      alert('Escribir un telefono');
     }
    if(mensaje.value ==null || mensaje.value ==''){
      alert('Debes de escribir un mensaje para nosotros');
    }else if (mensaje.value.length > 100){
      alert('El nombre no debe exceder 100 caracteres.')
    }
 
   if( !check.checked ) {
    alert('Tienes que seleccionar una opción')
   }
     return false;
}

//Devuelve 0 si no se encuenta 1 si se encuentra
var numeros="0123456789";
function tiene_numeros(texto){
    for(i=0; i<texto.length; i++){
       if (numeros.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 }

//Devuelve 0 si no contiene letra
 var letras="abcdefghyjklmnñopqrstuvwxyz";

function tiene_letras(texto){
   texto = texto.toLowerCase();
   for(i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}

var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

function tiene_mayusculas(texto){
   for(i=0; i<texto.length; i++){
      if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}

//Validar Email
function validarEmail(texto) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(texto)){
     return 1;
    } else {
     return 0;
    }
  }
