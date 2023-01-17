/* Un generador en JavaScript consta de una función generadora que muestra un objeto iterable Generator. 
La palabra reservada yield se usa para pausar y reanudar una función generadora. 

Para crear una función generadora agregamos un '*' al lado de la palabra reservada function*/

function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

//Expresión de la función generadora

const g = gen();

//Llamada del método next en el objeto del Generador

console.log(g.next());//Imprime el primer yield: {value: 1, done: false} 
console.log(g.next());
console.log(g.next());
console.log(g.next());

/* next() permite acceder a la función del generador y obtener con yield dos valores: value y el estado de done, es decir si tenemos yield 1; 
y mandamos a imprimir el resultado con next() obtenemos `{value: 1, done: false}’:

El 1 por el valor al lado derecho del primer yield.
Y done es false porque mientras haya otro yield por operar será falso.
Será true cuando se ejecute cuatro veces next() y la salida mostrará {value: undefined, done: true}. 
Ésto se debe a que ya no hay mas nada que mostrar, porque se mandó a imprimir un cuarto elemento y el generador solo tiene 3 yield. */

//Llamada del método next en el objeto del Generador
console.log(g.next().value); //Imprime el primer yield: 1
console.log(g.next().value); //Imprime el segundo yield: 2
console.log(g.next().value); 
console.log(g.next().value); //Si se coloca un cuarto console, la consola indica "Undefined"



//Declaración de la función del Generador pasando un argumento
function* iterate(array){
    for(let value of array){ //El loop del for revisa cada elemento del array
        yield value; //value es asignado en cada ciclo
    }
}

const it = iterate(['Oscar', 'Omar', 'Ana', 'Lucia', 'Juan']); 

//la diferencia con el ejemplo anterior es que el iterador se le pasa un argumento
console.log(it.next().value); //Imprime el primer elemento del array: Oscar
console.log(it.next().value); //Imprime el segundo elemento del array: Omar
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); //Si se coloca un sexto console, la consola indica "Undefined"
