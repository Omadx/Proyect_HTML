'use strict'

/* bucle con suma y media de numeros introducidos*/

var sum = 0;
var cont = 0;

do{
    var number = parseInt(prompt('Introduce number to negative number', 0));

    if(isNaN(number)){
        number = 0;
    }else if (number >= 0){
        sum += number;
        cont++;
    }

    console.log(sum);
    console.log(cont);

}while(number >= 0)
    alert("the sum is: "+ sum);
    alert("the average is: "+ (sum/cont));