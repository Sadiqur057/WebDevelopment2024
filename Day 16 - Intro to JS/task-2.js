/*
Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
*/

const mathMarks = 75.25;
const biologyMarks = 65;
const chemistryMarks = 80;
const physicsMarks = 35.45;
const banglaMarks = 99.50;

let avgMarks = (mathMarks+biologyMarks+chemistryMarks+physicsMarks+banglaMarks)/5;
avgMarks = avgMarks.toFixed(2);
console.log(avgMarks);
