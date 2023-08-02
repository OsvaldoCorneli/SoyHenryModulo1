'use strict';

function BinarioADecimal(num) {
   var string2 = [];
    var string = num.split("").reverse();
    for(let i=0; i<string.length; i++){
        var resultado = (2**[i]*string[i]);
        if(resultado != 0){
            string2.push(resultado);
        }
        
    }
    if(string2 != []){
        var resu = 0;
        for(let h=0; h<string2.length; h++){
            resu = resu + string2[h];
        }
    }
    return resu;
}

function DecimalABinario(num) {
   var resultado = [];

   while (num >= 1){
      var resto = num % 2;
      var num = Math.trunc(num / 2);
       resultado.unshift(resto)}
  
    var resultadoFinal = resultado.join("");
    return resultadoFinal;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
