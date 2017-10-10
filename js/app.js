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
       change.push((numAscii[i]-97+33)%26+97)
      }
}
//Convertiremos los nuevos numeros Ascii en letras y luego las juntamos
  var cipherDone=[];
    for (var i=0;i<change.length;i++){
        cipherDone.push(String.fromCharCode(change[i]));
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
for (var i=0; i<nums.length;i++){
  if (nums[i]<=90){
      change.push((nums[i]+65-33)%26+65);
      } else {
       change.push((nums[i]+97+33)%26+97)
      }
}
//Convetiremos los nuevos numeros en letras para luego juntarlas
  var decipherDone=[];
    for (var i=0;i<change.length;i++){
        decipherDone.push(String.fromCharCode(change[i]));
        var newCipher=[decipherDone.join("")];
    }
    return newCipher;
};
// Pedimos una frase al usuario
var sentence = [prompt("Ingrese su frase")];
var obj={
    "TEXTO ORIGINAL":sentence,
    "TEXTO CODIFICADO":cipher(sentence)
}
//Validamos que no ingrese números ni espacios
  for(var i=0; i<sentence[0].length;i++) {
    if (sentence[0].charCodeAt(i) === " ".charCodeAt()||isNaN(sentence[0][i]) === false) {
        alert("No ingrese números ni espacios en blanco");
        break
  // Una vez validado aplicamos la funcion cipher
      } else {
       document.write(obj);
    }
  }
