/*
Write a function getTicketPrice(age, isMember) that returns the ticket price (as a number) based on the following rules:

• Age < 5 → free (0)
• Age 5–12 → $8, but $5 if member
• Age 13–17 → $12, but $9 if member
• Age 18–64 → $20, but $15 if member
• Age 65+ → $10, but $7 if member
*/
// function getTicketPrice(age, isMember) {
//  if(age < 5){
//     return "0"
//   } else if (age >= 5 && age <= 12){
//     return isMember === true ? "5" : "8"
//   } else if (age >= 13 && age <= 17){
//     return isMember === true ? "9" : "12"
//   } else if (age >= 18 && age <= 64){
//     return isMember === true ? "15" : "20"
//   } else if (age >= 65){
//     return isMember === true ? "7" : "10"
//   } else {
//     return "Invalid"
//   }
// }

// // Expected outputs:
// console.log(getTicketPrice(3, false)); // 0
// console.log(getTicketPrice(10, false)); // 8
// console.log(getTicketPrice(10, true)); // 5
// console.log(getTicketPrice(30, true)); // 15
// console.log(getTicketPrice(70, false)); // 10

/*
Group and sum orders
You have an array of order objects. Write a function summarizeOrders(orders) 
that returns an object where each key is a category and the value is the total
amount spent in that category. Sort the result by total (highest first) and
return it as an array of [category, total] pairs.
*/

// // Expected output:
// // [["tech", 200], ["food", 75], ["books", 45]]

const orders = [
  { category: "food", amount: 25 },
  { category: "tech", amount: 120 },
  { category: "food", amount: 40 },
  { category: "books", amount: 15 },
  { category: "tech", amount: 80 },
  { category: "books", amount: 30 },
  { category: "food", amount: 10 },
];

function summarizeOrders(orders) {

}

console.log(summarizeOrders(orders));
















// ANSWER IS HERE



// function summarizeOrder(orders) {
//   const grouped = orders.reduce((total, current) => {
//     const { category, amount } = current;

//     if (!total[category]) {
//       total[category] = 0;
//     }

//     total[category] += amount;

//     return total;
//   }, {});

//   return Object.entries(grouped).sort((a, b) => b[1] - a[1]);
// }