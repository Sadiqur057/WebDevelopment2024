/*
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burgerPrice = 340;
let totalBill;
let cokePrice;
if (burgerPrice > 500) {
  cokePrice = 0;
  console.log('Coke is free for you.');
} else {
  cokePrice = 30;
  console.log('Please pay 30tk for coke.');
}


totalBill = burgerPrice + cokePrice;
console.log("Your total bill is", totalBill)