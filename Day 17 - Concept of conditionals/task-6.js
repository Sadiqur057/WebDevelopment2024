/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

function getTicket(age){
  let discount;
  let ticketPrice = 800;
  if(age<10){
    ticketPrice = 0;
  }else if(age>=10 && age<=24){
    discount= ticketPrice * 50 / 100;
    ticketPrice = 800 - discount;
  } else if(age>=60){
    discount = ticketPrice * 15 / 100;
    ticketPrice = 800 - discount
  } else{
    ticketPrice = 800;
  }
  return ticketPrice;
}

let ticketPrice = getTicket(67);
console.log("Your ticket price is", ticketPrice)