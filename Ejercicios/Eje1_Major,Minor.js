'use strict'

var number1 = parseInt(prompt('number nº 1', 0));
var number2 = parseInt(prompt('number nº 2', 0));

console.log(number1, number2);

while (number1 <= 0 ||number2 <= 0 || isNaN(number1) || isNaN(number2)){
    number1 = parseInt(prompt('number nº 1', 0));
    number2 = parseInt(prompt('number nº 2', 0));
}
if(number1 == number2){
    alert("equals numbers");
}else if(number1 > number2){
    alert("major number is: " + number1);
}else if(number2 > number1){
    alert("major number is: " + number2);
}else{
    alert("Introduce correct numbers: ");
}