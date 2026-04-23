import { useEffect, useState } from "react";
const apiKey = import.meta.env.CURRENCY_FREAKS_API_KEY;
const apiCurrencyFreaks = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`;

function App() {
  const [currency, setCurrency] = useState([]);
  const currencies = ["CAD", "EUR", "IDR", "JPY", "CHF", "GBP"]

  const currenciesMap = currencies.map((curr)=>{
    const parseCurr = parseFloat(currency.rates?.[curr])

    const numNaN = Number.isNaN(parseCurr)

    function toLS(value) {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: `${curr}`,
        maximumFractionDigits: 6
      })
    }

    return(
        <tr>
          <td>{curr}</td>
          <td>{numNaN ? "Loading" : toLS(parseCurr * 0.95)}</td>
          <td>{numNaN ? "Loading" : toLS(parseCurr)}</td>
          <td>{numNaN ? "Loading" : toLS(parseCurr * 1.05)}</td>
        </tr>
    )
  })

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${apiCurrencyFreaks}`,
      );
      const data = await response.json();
      setCurrency(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Currency Table</h1>
      <table>
        <tbody>
        <tr>
          <td>Currency</td>
          <td>We Buy</td>
          <td>Exchange Rate</td>
          <td>We Sell</td>
        </tr>
        {currenciesMap}
        </tbody>
      </table>
      <p>Rates are based from 1 USD</p>
      <p>This application uses API from <a href="https://currencyfreaks.com/">currencyfreaks</a>.</p>
    </>
  );
}
export default App;

// https://www.kode.id/courses/take/copy-of-private-gunawan-react-and-react-native-basics/texts/73944058-assignment-2










// EXAMPLE AND ANSWER IS BELOW



// import { useEffect, useState } from "react";
// const apiKey = import.meta.env.CURRENCY_FREAKS_API_KEY;
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
// const apiKey = import.meta.env.CURRENCY_FREAKS_API_KEY;
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