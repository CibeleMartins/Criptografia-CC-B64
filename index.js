var cifraC= document.querySelector("#seletor");
var inputNumber= document.querySelector("#inputN");
var inputDeslocamento= document.querySelector("#inputNumber");
var alfabeto= "abcdefghijklmnopqrstuvwxyzéáàèâêçìíòó";
var radioC= document.querySelector("#radioCodificar");
var radioD= document.querySelector("#radioDecodificar");
var button= document.querySelector("#button")
var resultado= document.querySelector("#inputResultado");

cifraC.addEventListener("click", function() {
   if (cifraC.value== "Cifra de César") {
      inputN.style.display= "flex";

   }else {
      inputN.style.display= "none"
   }
}

)

function codificaCesar() {
   var textoDigitado= document.querySelector("#inputMensagem").value;
   var textoMin= textoDigitado.toLowerCase();
   var textoCodificadoCC= '';

   for (var i= 0; i < textoMin.length; i++) {
      for (var j= 0; j < alfabeto.length; j++) {
         if (textoMin [i] == alfabeto [j]) {
            textoCodificadoCC += alfabeto[j + parseInt(inputDeslocamento.value)]
            break
         } else if (textoMin== ' ') {
            textoCodificadoCC=+ ' ';
            break
         }
      
      }
   }

   return textoCodificadoCC
}

function decodificarCesar() {
   var textoDigitado= document.querySelector("#inputMensagem").value;
   var textoMin= textoDigitado.toLowerCase();
   var textoCodificadoCC= '';

   for (var i= 0; i < textoMin.length; i++) {
      for (var j= alfabeto.length; j >= 0; j--) {
         if (textoMin [i] == alfabeto [j]) {
            textoCodificadoCC += alfabeto[j - parseInt(inputDeslocamento.value)]
            break
         } else if (textoMin== ' ') {
            textoCodificadoCC=+ ' ';
            break
         }
      
      }
   }
   return textoCodificadoCC
}


radioC.addEventListener("click", function() {

   button.value="Codificar";
}


)

radioD.addEventListener("click", function() {

   button.value="Decodificar";
}


)

button.addEventListener("click", function(event) {
   event.preventDefault();
   if (radioC.checked && cifraC.value== "Cifra de César") {
      resultado.value= codificaCesar();
   } else if (radioD.checked && cifraC.value== "Cifra de César") {
      resultado.value= decodificarCesar();
   } else if (radioC.checked && cifraC.value== "Base 64") {
      resultado.value= codificaBase64();
   }else {
      resultado.value= decodificaBase64();
   }
}

)


function codificaBase64 () {
   var textoDigitado= document.querySelector("#inputMensagem").value;
   var textoCodificadoB64= btoa(textoDigitado);

   return textoCodificadoB64

}

function decodificaBase64 () {
   var textoDigitado= document.querySelector("#inputMensagem").value;
   var textoCodificadoB64= atob(textoDigitado);

   return textoCodificadoB64

}