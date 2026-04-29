import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_CURRENCY_FREAKS_API_KEY;
const apiCurrencyFreaks = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`;

function App() {

  return (
    <>
      <h1>Currency Table</h1>
      <></>
      <p>Rates are based from 1 USD</p>
      <p>This application uses API from <a href="https://currencyfreaks.com/">currencyfreaks</a>.</p>
    </>
  );
}
export default App;

// https://www.kode.id/courses/take/copy-of-private-gunawan-react-and-react-native-basics/texts/73944058-assignment-2

// PSEUDOCODE
// CREATE state for currency data
// CREATE array of target currencies
// WHEN component loads:
//   FETCH currency API
//   CONVERT response to JSON
//   SAVE result to state
// FOR EACH currency in currencies:
//   GET rate from API result
//   CONVERT rate to number
//   IF rate is not ready:
//     DISPLAY "Loading"
//   ELSE:
//     DISPLAY calculated buy, rate, and sell values
// RENDER table

// TODO LIST:
// 1. Create state
// - Store the API result.
// - Start with empty data.

// 2. Create currency list
// - Make an array: CAD, EUR, IDR, JPY, CHF, GBP.
// - This will become the table rows.

// 3. Fetch data
// - Use useEffect when the component loads.
// - Fetch the API, convert to JSON, save to state.

// 4. Map the rows
// - Loop through the currency list.
// - For each currency, get its rate.
// - Convert the rate into a number.
// - Handle the loading state.

// 5. Calculate columns
// - We Buy = rate with 5% adjustment.
// - Exchange Rate = original rate.
// - We Sell = rate with 5% adjustment.

// 6. Render table
// - Add table headers.
// - Insert the mapped rows.
// - Keep the USD and API notes.










// EXAMPLE AND ANSWER IS BELOW

// import { useEffect, useState } from "react";
// const apiKey = import.meta.env.VITE_CURRENCY_FREAKS_API_KEY;
// const apiCurrencyFreaks = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`;

// function App() {
//   const [currency, setCurrency] = useState([]);
//   const currencies = ["CAD", "EUR", "IDR", "JPY", "CHF", "GBP"]

//   const currenciesMap = currencies.map((curr)=>{
//     const parseCurr = parseFloat(currency.rates?.[curr])

//     const numNaN = Number.isNaN(parseCurr)

//     function toLS(value) {
//       return value.toLocaleString("en-US", {
//         style: "currency",
//         currency: `${curr}`,
//         maximumFractionDigits: 6
//       })
//     }

//     return(
//         <tr>
//           <td>{curr}</td>
//           <td>{numNaN ? "Loading" : toLS(parseCurr * 0.95)}</td>
//           <td>{numNaN ? "Loading" : toLS(parseCurr)}</td>
//           <td>{numNaN ? "Loading" : toLS(parseCurr * 1.05)}</td>
//         </tr>
//     )
//   })

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(
//         `${apiCurrencyFreaks}`,
//       );
//       const data = await response.json();
//       setCurrency(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <>
//       <h1>Currency Table</h1>
//       <table>
//         <tbody>
//         <tr>
//           <td>Currency</td>
//           <td>We Buy</td>
//           <td>Exchange Rate</td>
//           <td>We Sell</td>
//         </tr>
//         {currenciesMap}
//         </tbody>
//       </table>
//       <p>Rates are based from 1 USD</p>
//       <p>This application uses API from <a href="https://currencyfreaks.com/">currencyfreaks</a>.</p>
//     </>
//   );
// }
// export default App;

// STARTING CODE

// import { useEffect, useState } from "react";
// const apiKey = import.meta.env.VITE_CURRENCY_FREAKS_API_KEY;
// const apiCurrencyFreaks = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`;

// function App() {

//   return (
//     <>
//       <h1>Currency Table</h1>
//       <></>
//       <p>Rates are based from 1 USD</p>
//       <p>This application uses API from <a href="https://currencyfreaks.com/">currencyfreaks</a>.</p>
//     </>
//   );
// }
// export default App;