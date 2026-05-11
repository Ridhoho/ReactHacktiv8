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
  const grouped = orders.reduce((acc, total)=>{
    const {category, amount} = total

    if(!acc[category]){
      acc[category] = 0
    }

    acc[category] += amount

    return acc
  }, {})
  return Object.entries(grouped).sort((a, b)=> b[1] - a[1])
}

console.log(summarizeOrders(orders));