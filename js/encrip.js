function alerta(){
  //alert("Prueba");
  var txt = document.getElementById("txtInput").value;
  var arrayIN = txt.split("");
  var abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
  var numeros = [13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38];
  //console.log(numeros.length);
  var encript =[]
  for (var j = 0; j < arrayIN.length; j++) {
    //console.log(abecedario[j]+numeros[j]);
    for (var i = 0; i < abecedario.length; i++) {
      if(arrayIN[j] == abecedario[i]){
        //console.log(arrayIN[j]+numeros[i])
        encript.push(numeros[i])
      }
    }
  }
  //console.log(encript.length);
  console.log(encript.join(""));
  document.getElementById("txtOutput").innerHTML = encript.join("");
}
function alerta2(){
  var txt = document.getElementById("txtInput2").value;
  var arrayIN = txt.split("");
  var arrayIN2 = []
  var desencript =[]
  var abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
  var numeros = [13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38];
  for (var i = 0; i < arrayIN.length; i=i+2) {
    //console.log(arrayIN[i]+arrayIN[i+1]);
    arrayIN2.push(""+arrayIN[i]+arrayIN[i+1]);
  }
  //console.log(arrayIN2.length);
  for (var i = 0; i < arrayIN2.length; i++) {
    //console.log(arrayIN2[i]);
    for (var j = 0; j < numeros.length; j++) {
      if(arrayIN2[i] == numeros[j]){
        //console.log(abecedario[j]);
        desencript.push(abecedario[j]);
      }
    }
  }
  console.log(desencript.join(""));
  document.getElementById("txtOutput2").innerHTML = desencript.join("");
}
