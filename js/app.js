var cipher= function(array) {
  var numAscii=[];
    for (var e=0;e<array[0].length;e++){
      numAscii.push(array[0].charCodeAt(e));
      }
    var change=[];
for (var i=0; i<numAscii.length;i++){
  if (numAscii[i]<=90){
      change.push((numAscii[i]-65+33)%26+65);
      } else {
       change.push((numAscii[i]-97+33)%26+97)
      }
}

  var cipherDone=[];
    for (var i=0;i<change.length;i++){
        cipherDone.push(String.fromCharCode(change[i]));
        var newCipher=[cipherDone.join("")];
    }
    return newCipher;
};
var decipher=function(array) {
    var nums=[];
    for (var i=0;i<array[0].length;i++){
      nums.push(array[0].charCodeAt(i));
      }
 var change=[];
for (var i=0; i<nums.length;i++){
  if (nums[i]<=90){
      change.push((nums[i]+65-33)%26+65);
      } else {
       change.push((nums[i]+97+33)%26+97)
      }
}
  var decipherDone=[];
    for (var i=0;i<change.length;i++){
        decipherDone.push(String.fromCharCode(change[i]));
        var newCipher=[decipherDone.join("")];
    }
    return newCipher;
};

var a = [prompt("Ingrese su frase")];
  for(var i=0; i<a[0].length;i++) {
    if (a[0].charCodeAt(i) === " ".charCodeAt()||isNaN(a[0][i]) === false) {
        alert("No ingrese números ni espacios en blanco");
        break
      } else {
       decipher(cipher(a));
    }
  }
