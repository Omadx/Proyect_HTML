'use strict'


var number1 = parseInt(prompt("Introduce number 1", 0));
var number2 = parseInt(prompt("Introduce number 2", 0));


while(number1 < number2){
    number1++;

    if(number1%2 != 0){
        console.log("The " +number1+ " is impar");
    }
}