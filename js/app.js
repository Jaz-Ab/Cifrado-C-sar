// Cifra el array recibido
var cipher= function(array) {
//almacenaremos el codigo Ascii de cada letra en numAscii
  var numAscii=[];
    for (var e=0;e<array[0].length;e++){
      numAscii.push(array[0].charCodeAt(e));
      }
//aplicaremos la formula del cifrado de Cesar
    var change=[];
for (var i=0; i<numAscii.length;i++){
  if (numAscii[i]<=90){
      change.push((numAscii[i]-65+33)%26+65);
      } else {
       change.push((numAscii[i]-97+33)%26+97);
      }
}
//Convertiremos los nuevos numeros Ascii en letras y luego las juntamos
  var cipherDone=[];
  //var newCipher=[];
    for (var a=0;a<change.length;a++){
        cipherDone.push(String.fromCharCode(change[a]));
        var newCipher=[cipherDone.join("")];
    }
    return newCipher;
};
//descifraremos el array
var decipher=function(array) {
//Convertimos las letras en números Ascii
    var nums=[];
    for (var i=0;i<array[0].length;i++){
      nums.push(array[0].charCodeAt(i));
      }
//Aplicamos la formula y lo almacenamos en var change
 var change=[];
for (var u=0; u<nums.length;u++){
  if (nums[u]<=90){
      change.push((nums[u]+65-33)%26+65);
      } else {
       change.push((nums[u]+97+33)%26+97);
      }
}
//Convetiremos los nuevos numeros en letras para luego juntarlas
  var decipherDone=[];
  //var newCipher=[];
    for (var e=0;e<change.length;e++){
        decipherDone.push(String.fromCharCode(change[e]));
        var newCipher=[decipherDone.join("")];
    }
    return newCipher;
};
// Pedimos al usuario que elija una opcion
var option=[prompt("Elija una de las opciones de cifrado "+"\n" + "1. Cifrar "+"\n" + "2. Decifrar")];
//validamos que ingrese la opcion correcta, si es correcta evaluamos la frase que no contenga números ni espacios
for (var m=0; m<option[0].length;m++) {
    if (option[0]!=="1"&& option[0]!=="2") {
        alert("Solo ingrese el número 1 o 2 para continuar");
        break;
        } else {
          var sentence = [prompt("Ingrese su frase por favor")];
          for(var i=0; i<sentence[0].length;i++) {
            if (sentence[0].charCodeAt(i) === " ".charCodeAt()||isNaN(sentence[0][i]) === false) {
              alert("No ingrese números ni espacios en blanco");
              break}
            }
          }
        }
//Una vez validado todo pasamos a realizar la opcion que el usuario haya escogido y lo mostramos por medio de un alert()
 if(option[0] === "1"){
  alert("Texto Original : "+sentence+"\n"+"Texto Cifrado : "+cipher(sentence));
} else if (option[0]==="2"){
  alert("Texto Original : "+sentence+"\n"+"Texto Descifrado : "+decipher(sentence));
}
