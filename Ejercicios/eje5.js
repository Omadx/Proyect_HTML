'use strict'


var number1 = parseInt(prompt("Introduce number: ", 0));

for (var i = 1; i < number1; i++ ){

    if(number1%i == 0){
        console.log("Divisor number" + i);
    }
}