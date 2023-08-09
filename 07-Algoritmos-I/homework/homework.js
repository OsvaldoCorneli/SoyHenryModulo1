'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números
  //  primos
  // Tu código:
  let array = [1]; 
  if(num === 1){return array}
  while( num % 2 == 0 || num % 3 == 0){
   if( num % 2 === 0){
    num = num/2
   array.push(2);}
  else{
    num = num / 3;
  array.push(3);}
  
  }
  if(num != 1){
  array.push(num);}
  
   return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let j = 0;
  while(j<array.length){
  for(let i=0; i<array.length; i++){
    if(array[i]>array[i+1]){
     let aux = array[i+1]
     array[i+1] = array[i]
     array[i] = aux;
      }
      console.log(array);
       } 
       j++;}
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i<array.length; i++){
    let j = i-1;
    let box = array[i];
    while( j >= 0 && box<array[j]){
      array[j+1] = array[j]
      j--;
    }
    array[j+1] = box;
  
  }
  return array;


}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i<array.length; i++){
    let k=i;
     for(let j=i+1; j<array.length; j++){
        if(array[j] < array[k]){
          k = j;
        }
     }
   if(array[k]<array[i]){
     let aux = array[i];
     array[i] = array[k];
     array[k] = aux;
   } 
      k = i;  
}
 return array;
   


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
