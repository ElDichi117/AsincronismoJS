/* Un callback es enviar una función como parametro de otra función */

function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1,num2);//retornamos la ejecución de la función (sum)
}

console.log(calc(5, 7, sum));

/* setTimeout es ya en sí un callback */

setTimeout(function(){
    console.log('Hola JavaScript');
}, 2000/* Tiempo en el que se va ejecutar esta función anónima */)

function gretting(name){
    console.log('Hola ' + name);
}

setTimeout(gretting /* Función que se va a ejecutar */, 2000 /* Tiempo que va a tardar en ejecutar */, 
        'Ricardo'/* Argumentos de la función */);