import { useState } from "react";

import "./App.css";
import useCurrency from "./hook/useCurrencyInfo";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import InputBox from "./Component";

function App() {
  const [amount, setAmonut] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertAmount, setConvertAmount] = useState(0);

  const currencyInfo = useCurrency(from);

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            height: "100vh",
            backgroundImage: `URL(https://images.pexels.com/photos/4968384/pexels-photo-4968384.jpeg) `,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
          }}
        >
          <div className=" d-flex flex-column gap-2 p-3 rounded bg-opacity-50 bg-light col-4">
            <InputBox
              label={"From"}
              amount={amount}
              selectCurrency={from}
              currencyOptions={options}
              onChangeCurrency={(currency) => setFrom(currency)}
              onChangeAmount={(amount) => setAmonut(amount)}
            />

            <InputBox
              label={"To"}
              amount={convertAmount}
              selectCurrency={to}
              currencyOptions={options}
              onChangeCurrency={(currency) => setTo(currency)}
              onChangeAmount={(amount) => setAmonut(amount)}
              amountDisable
            />
            <button type="submit" className="btn btn-primary">
              {" "}
              Convert {from.toUpperCase()} TO {to.toUpperCase()}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
