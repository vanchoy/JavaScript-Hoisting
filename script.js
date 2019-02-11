//hoisting works only with function declarations!
calculateAge(1965);

function calculateAge (year) {           //function declaration
    console.log(2016 - year);
}


//hoisting doesn't work with function expressions
// retirement(1956);

var retirement = function(year) {        //function expression
    console.log(65 - (2016 - year));
}



// Hoisting also work with Variables
console.log(age);  //undefined
var age = 23;
console.log(age);

function foo() {
    console.log(age);      //undefined
    var age = 65-3;
    console.log(age);      //65
}
foo();                     //65
console.log(age);          //23
