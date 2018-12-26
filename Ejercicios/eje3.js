'use strict'


var number1 = parseInt(prompt('Introduce numero 1:', 0));
var number2 = parseInt(prompt('Introduce numero 2:', 0));


document.write("<h1>Numbers</h1>")

for(var i = number1; i < number2; i++ ){
    document.write(i);
    
}

