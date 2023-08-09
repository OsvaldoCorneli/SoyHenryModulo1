'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en 
  cualquiera de sus variantes, según se indique por parámetro 
  ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro,
   hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png
  dentro del directorio homework.
*/
function BinarySearchTree(value)
 { this.value = value
   this.right = null;
   this.left = null;
   this.cont = 1;
 }

 BinarySearchTree.prototype.size = function (){
   return this.cont;
}



BinarySearchTree.prototype.insert = function (value) {
let subTree = new BinarySearchTree(value);

if (value < this.value) {
 if (this.left === null) {
   this.left = subTree;
   this.cont++;
   console.log(`se guardo ${subTree.value} a la izquierda de`, this.value);
 } else {
   this.cont++;
   this.left.insert(value);
 }
}

if (value >= this.value) {
 if (this.right === null) {
   this.right = subTree;
   this.cont++;
   console.log(`se guardo ${subTree.value} a la derecha de`, this.value);
   
   
 } else {
   this.cont++;
   this.right.insert(value);
 }
}
}
 BinarySearchTree.prototype.contains = function(value){
   // contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol

if(value === this.value) return true;
else{
   if(value > this.value){
     if(this.right != null){
       if(value === this.right.value){
        return true;} 
      else{return this.right.contains(value)}

     }
   }else{
     if(this.left != null){
         if(this.left.value === value){
          return true;} 
          else{
            return this.left.contains(value)}
     } 
   }
    

}
return false;


 }
 BinarySearchTree.prototype.depthFirstForEach = function(){
  // - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en 
  // cualquiera de sus variantes, según se indique por parámetro 
  // ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro,
  //  hará el recorrido "in-order" por defecto.
 


 }

 BinarySearchTree.prototype.breadthFirstForEach = function(){

 }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
