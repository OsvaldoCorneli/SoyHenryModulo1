# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; 
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // Imprime 10
   console.log(a); // Imprime a que es igual a 8 ya que es el valor enviado por parametro
   var f = function (a, b, c) {
      b = a;
      console.log(b); // imprime 8 ya que a "b" se le designo el valor de "a"
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // Imprime 9 ya que es el valor pasado por parametro
};
c(8, 9, 10);
console.log(b); // imprime 10 ya que esta declarado de forma global
console.log(x); // Imprime 1 ya que esta definido de forma global
```

```javascript
console.log(bar); //imprime no definido porque bar esta declarado abajo y el console.log no es hoisting
console.log(baz); // imprime error porque la variable esta declarado abajo
foo();
function foo() {
   console.log('Hola!');// imprime Hola!.
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // imprime Franco ya que en el condicional if cambia la variable
```

```javascript
var instructor = 'Tony';
console.log(instructor); //Imprime Tony ya que es la variable declarada arriba.
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);//Imprime Franco pero no modifica el valor del instructor ya que esta declarado de nuevo el instructor de forma local.
   }
})();
console.log(instructor); //imprime Tony ya que no se cambio el valor de instructor.
```

```javascript
var instructor = 'Tony'; 
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); //Imprime The Flash porque se reasigna un nuevo valor a la variable
   console.log(pm);//Imprime Reverse Flash ya que esta declarada nuevamente de manera local
}
console.log(instructor); //Imprime The Flash porque esta declarado con var y afecta al ambito global
console.log(pm);// Imprime Franco porque el bloque if no lo modifico
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //El resultado seria 2
"2" * "3" //El resultado seria 6
4 + 5 + "px"// El resultado seria 9px
"$" + 4 + 5 // el resultado seria $9
"4" - 2 //el resultado seria 2
"4px" - 2 //El resultado daria error
7 / 0 // El resultado sería Infinity, ya que en en JavaScript, dividir cualquier número por 0 da eso
{}[0] //resultado undefined
parseInt("09") //Resultado 9
(5 && 2) //Resultado 2 
2 && 5 //resultado 5
5 || 0 //resultado 5

0 || 5 // El resultado es 5. La expresión 0 || 5 se evalúa de izquierda a derecha y devuelve el valor del primer operando evaluado que se evalúa como verdadero, en este caso, 5.

[3]+[3]-[10] //Resultado es -1 (El resultado es false. En este caso, la expresión 3>2 se evalúa como true y luego se compara true>1, que se evalúa como false. Por lo tanto, el resultado final es false. corregido chat GPT)

3>2>1 //Resultado es true

[] == ![] //Resultado true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a); // imprime Undefined
  console.log(foo()); //imprime 2 ya que la funcion foo() esta declarada con fuction

  var a = 1;
  function foo() {
     return 2;
  }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); //Aqui Retorna "Meow Mix" ya que no entra por el condicional If entonces no se cumple la nueva asignacion a la variable Snack
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); //Imprime Natalia Nerea ya que en el this apunta a la propiedad fullname del objeto
//a la propiedad fullname del objeto
//Se llama a obj.prop.getFullname(). Dentro del método getFullname(), 
//el this se refiere al objeto prop, ya que el método se está ejecutando 
//en el contexto de ese objeto. Por lo tanto, this.fullname dentro del método getFullname() 
//apunta a "Aurelio De Rosa". Por lo tanto, el resultado de la primera llamada es "Aurelio 
//De Rosa".Se llama a obj.prop.getFullname(). Dentro del método getFullname(), 
// el this se refiere al objeto prop, ya que el método se está ejecutando en el contexto de ese o
// bjeto. Por lo tanto, this.fullname dentro del método getFullname() apunta a 
// "Aurelio De Rosa". Por lo tanto, el resultado de la primera llamada es "Aurelio De Rosa".
var test = obj.prop.getFullname;

console.log(test()); //Imprime Aurelio de Rosa ya que utiliza el fullname declarado en la propiedad de prop
// Se llama a test(). En este caso, la función se invoca sin un contexto específico 
// (sin un objeto al que this pueda referirse). Cuando se invoca de esta manera, this apunta al objeto
//  global (window en el navegador o global en Node.js). Como resultado, this.fullname no está definido
//   en el objeto global, y por lo tanto, se obtiene undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // primero porque esta al principio del codigo
   setTimeout(function () {
      console.log(2); //cuarto porque tiene un setTimeout de 1 segundo
   }, 1000);
   setTimeout(function () {
      console.log(3); // tercero porque tiene un setTimeout que hace saltar al siguiente 
   }, 0);
   console.log(4); // segundo porque esta despues de los setTimeout
}

printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
