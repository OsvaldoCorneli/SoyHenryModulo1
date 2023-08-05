'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, 
  busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}


LinkedList.prototype.add = function (value){
  let nodo1 = new Node(value)
  let actual = this.head;
  if(actual === null){
    this.head = nodo1;
  }else{
  while(actual.next){
    actual = actual.next;
  }
  actual.next = nodo1
}
  this._length++;

}

LinkedList.prototype.remove = function(){ //Elimina el ultimo valor, no necesita parametro.
  let nodo1 = this.head;
  let prev = null;
  if(!nodo1){
    return null;
  }else{
while(nodo1.next != null){
  prev = nodo1
  nodo1 = nodo1.next;
  }
  let resultado = nodo1.value;
    if(prev != null){ 
    prev.next = null;}
    else{
      this.head = null;
    }
     return resultado;

  }
  
}

LinkedList.prototype.search = function (isEven){
  let nodo1 = this.head;
  if(typeof isEven === "function" ){
    
    while(nodo1){
      if(isEven(nodo1.value)){
        return nodo1.value;
       }
        nodo1 = nodo1.next;
        

        
    }
    return null;
  
  }else{
   
    while(nodo1){
       
        if(nodo1.value === isEven){
         return nodo1.value;
        }
         
        nodo1 = nodo1.next;
        
      }

      return null;

  }

}

function isEven(num){
   return num % 2 === 0;
}



/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros;
   es decir,posiciones posibles para almacenar la información), donde guardaremos datos en formato 
   clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 
(Luego de haber pasado todos los tests, a modo de ejercicio adicional,
   pueden modificar un poco la clase para que reciba la cantidad de buckets 
   por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. 
  Recibe un input alfabético, suma el código numérico de cada caracter del input
   (investigar el método charCodeAt de los strings) y calcula el módulo de ese 
   número total por la cantidad de buckets; de esta manera determina la posición
    de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea
   la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en
   el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado 
  en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero 
puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'
; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en
un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
}
HashTable.prototype.hash = function(input){
  // - hash: función hasheadora que determina en qué bucket se almacenará un dato. 
  //   Recibe un input alfabético, suma el código numérico de cada caracter del input
  //    (investigar el método charCodeAt de los strings) y calcula el módulo de ese 
  //    número total por la cantidad de buckets; de esta manera determina la posición
  //     de la tabla en la que se almacenará el dato.

  let valorBase =  _charCodeAt(input)
  let modulo = valorBase % this.numBuckets;
  return modulo;
  
}


HashTable.prototype.set = function(pass, value){
  // - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea
  //  la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  let hash = this.hash(pass);
  let objeto = {};
  objeto[pass] = value;
  this.buckets.splice(hash,0,value);

}

HashTable.prototype.get = function(clave){
  // - get: recibe una clave por parámetro, y busca el valor que le corresponde en
  //  el bucket correcto de la tabla.
 
  const valor = this.buckets.find((pass) => pass.clave === clave);
  
  return valor;

}

HashTable.prototype.hasKey = function(){

}


function _charCodeAt(str){
  let cadaUna = str.split("");
  let resultado = 0;
  for(let i=0; i<cadaUna.length; i++){
     let valor = str.charCodeAt(i);
     resultado = resultado + valor;
  }
  return resultado;

}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
