var phrase = [prompt("Ingrese su frase")];
  for(var i=0; i<phrase[0].length;i++) {
    if (phrase[0].charCodeAt(i) === " ".charCodeAt()) {
      alert("No ingrese espacios en blanco");
      } else if (isNaN(phrase[0][i]) === false) {
      alert ("No ingrese números");
    }
  }

var cipher= function(array) {
  var numAscii=[];
    for (var e=0;e<array[0].length;e++){
      numAscii.push(array[0].charCodeAt(e));
      }

    for (var b=0;b<numAscii.length;b++){
      var change=[];
      if (array[0].charCodeAt(b)<=90){
        numAscii[b]=(numAscii[b]-65+33)%26+65;
        change.push(String.fromCharCode(numAscii[b]))
      } else {
        numAscii[b]=(numAscii[b]-97+33)%26+97;
        change.push(String.fromCharCode(numAscii[b]));
      }
    var cipherDone=[];
    for (var j=0;j<numAscii.length;j++){
        cipherDone.push(String.fromCharCode(numAscii[j]));
        var newCipher=[cipherDone.join("")];
        return newCipher;
    }
  }
};

var decipher=function(array) {
    var nums=[];
    for (var e=0;e<array[0].length;e++){
      nums.push(array[0][e].charCodeAt());
      }
  var arrDes=[];
  var desc=[];
  for (var c=0;c<nums.length;c++){
      if (array[0].charCodeAt(c)<=90){
        desc=(nums[c]-33+65)%26+65;
        arrDes.push(String.fromCharCode(desc));
      } else {
        desc=(nums[c]-33+97)%26+(97-5);
        arrDes.push(String.fromCharCode(desc));
      }
        var decipherDone= [arrDes.join("")];
        return decipherDone;
  }
};
