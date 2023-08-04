'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, 
su factorial (representado como n!) es el producto de n por todos los números naturales
 menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, 
respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento 
que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la 
secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  let factor = n;
  if(factor === 0){
  let producto = 1;
  return producto;
 }
 let multiplo = n;
 let factor1 = n-1;
 let producto = multiplo * nFactorial(factor1);
 return producto;
}

function nFibonacci(n) {
  if(n === 0 || n < 0){
    return 0;
  }
  else if(n === 1){
    return 1;
  }

  let f1 = nFibonacci(n-1);
  let f2 = nFibonacci(n-2);
  let resultado = f1 + f2;
  return resultado;
  // esto es igual a return nfibonacci(n-1) + nfibonacci(n-2);

}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer
 elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está 
  vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue(elemento) {
  this.pila = [];
}

Queue.prototype.enqueue = function(elemento){
     return this.pila.unshift(elemento);
}

Queue.prototype.dequeue = function(){
  if (this.pila === []){
    return undefined;
  }
 return this.pila.pop();
}

Queue.prototype.size = function(){
   if (this.pila.length === 0){
    return 0
   }  
   return this.pila.length;
}



let miQueue = new Queue();


/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
