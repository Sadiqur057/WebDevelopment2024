/*
Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var b = isNaN(2-10);

Explain your answers.
*/

var a = isNaN(2-10);
// isNaN returned false because 8 is a number
console.log(a);

var b = isNaN('11');
console.log(b);
// isNaN('11') returned false because '11' is a string but it can be converted into a number using parseInt or Number function 

var c = isNaN('abc');
// isNaN returned true because 'abc' is a string and it cannot be converted into a number
console.log(c);



