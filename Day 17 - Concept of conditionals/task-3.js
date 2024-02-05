/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

function getGrade(score){
  let grade;
  if(score>=90 && score<=100){
    return grade = "A";
  }else if(score>=80 && score<=89){
    return grade = "B";
  }else if(score>=70 && score<=79){
    return grade = "C";
  }else if(score>=60 && score<=69){
    return grade = "D";
  }else if(score>=0 && score<=59){
    return grade = "F";
  }else{
    return "not a valid score";
  }
}

let grade = getGrade(75);
console.log(grade);