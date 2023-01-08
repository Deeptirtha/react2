import React from "react";
import { useState } from "react";
import axios from "axios";
import "../index.css";

function Price(props) {
  const [price, setPrice] = useState(0);
  const [coin, setCoin] = useState("set");

  const getprice = async function () {
    console.log(coin);

    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
    );

    console.log("response", response.data[`${coin}`]);

    setPrice(response.data);
  };

  return (
    <>
      <div className="container">
        <h1>
          {" "}
          <label>Choose a coin to get price:</label>{" "}
        </h1>
        <h4>
          <p onClick={() => setCoin("bitcoin")}>BTC</p>
          <p onClick={() => setCoin("ethereum")}>ETH</p>
          <p onClick={() => setCoin("shiba-inu")}>SHIB</p>
          <p onClick={() => setCoin("cardano")}>ADA</p>
          <p onClick={() => setCoin("usd-coin")}>USDC</p>
        </h4>
        <h2>
          <p>{JSON.stringify(price)}</p>
        </h2>
        <button onClick={() => getprice()} className="btn">
          GEt Price
        </button>
        <br />
        <a href="/">GO back to Home</a> <br />
      </div>
    </>
  );
}
export default Price;
