var option=prompt("Elija una de las opciones de cifrado "+"\n" + "1. Cifrar "+"\n" + "2. Decifrar");
//validamos que ingrese la opcion correcta, si es correcta evaluamos la frase que no contenga números ni espacios
for (var m=0; m<option.length;m++) {
   if (option!=="1" && option!=="2") {
       alert("Solo ingrese el número 1 o 2 para continuar");
       break;
       } else {
         var phrase = prompt("Ingrese su frase por favor");
           }
       }
       for(var i=0; i<phrase.length;i++) {
           if (phrase.charCodeAt(i) === " ".charCodeAt()||isNaN(phrase[i]) === false) {
             alert("No ingrese números ni espacios en blanco");
             var option=null;
             break;
             }
       }
       //Una vez validado todo pasamos a realizar la opcion que el usuario haya escogido y lo mostramos por medio de un alert()
   if(option=== "1"){
        alert("Texto Original : "+phrase+"\n"+"Texto Cifrado : "+cipher(phrase));
    } else if(option==="2"){
        alert("Texto Original : "+phrase+"\n"+"Texto Descifrado : "+decipher(phrase));
    }

                                     //FUNCION PARA CIFRAR
function cipher(phrase){
   var StrLet ="";                                  //Creamos el string vacio donde se almacenara losnuevos valores.
   
   for(i=0;i<phrase.length;i++){                    //Recorremosla frase ingresada,Si esta en el rango de MAYUSCULA.
       var Asc = phrase.charCodeAt(i)               //Obtenemos el codigo ASCII de cada letra
       if(Asc<=90){                      //Rango para solo las mayusculas
          var NewAsc = (Asc-65 +33)%26 + 65;        // Aplicamos la formula para obtener la nueva position ASCII.
          var Newlet= String.fromCharCode(NewAsc);  //Desciframos  ese nuevo codigo a letra.
          StrLet += Newlet;                         //Almacenamos letra por letra dentro del nuevo String.
       }                                            //en caso contrario si es MINUSCULA.
       else {
         var NewAscm = (Asc-97 +33)%26 +97;         //en este caso la formula cambia porque el rango es otro.
         var NewLetm = String.fromCharCode(NewAscm);//Desciframos  ese nuevo codigo a letra.
           StrLet += NewLetm;                      //Almacenamos letra por letra dentro del nuevo String.
       }  
   } return StrLet;                                  //Retornamos el nuevo string con las letras enncriptadas.
}

                                        //FUNCION PARA DESCIFRAR

function decipher(phrase){
   var StrLet ="";                                  //Creamos el string vacio donde se almacenara losnuevos valores.
   for(i=0;i<phrase.length;i++){                    //Recorremosla frase ingresada,Si esta en el rango de MAYUSCULA.
       var Asc = phrase.charCodeAt(i)               //Obtenemos el codigo ASCII de cada letra
       if(Asc<=90){                      //Rango para solo las mayusculas
          var NewAsc = (Asc+65 -33)%26 + 65;        // Aplicamos la formula para obtener la nueva position ASCII.
          var Newlet= String.fromCharCode(NewAsc);  //Desciframos  ese nuevo codigo a letra.
          StrLet += Newlet;                         //Almacenamos letra por letra dentro del nuevo String.      
       }                                            //en caso contrario si es MINUSCULA.
       else {
         var NewAscm = (Asc+97 +33)%26 +97;         //en este caso la formula cambia porque el rango es otro.
         var NewLetm = String.fromCharCode(NewAscm);//Desciframos  ese nuevo codigo a letra.
           StrLet += NewLetm;                      //Almacenamos letra por letra dentro del nuevo String.
       }
   }return StrLet;                                  //Retornamos el nuevo string con las letras enncriptadas.
}
