import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onChangeAmount,
  selectCurrency,
  onChangeCurrency = "usd",
  currencyOptions = [],
  amountDisable = false,
  currencyDisable = false,
}) {
  const inputID = useId();
  return (
    <>
        <div className="d-flex flex-column gap-2 bg-light rounded p-2">
          <div className="d-flex justify-content-between">
            <label htmlFor="">{label}</label>

            <label htmlFor="">Currency Type</label>

          </div>
          <div className="d-flex gap-2">
          <input
              type="number"
              className="form-control border-0 bg-transparent"
              value={amount}
              onChange={(e) => onChangeAmount(Number(e.target.value))}
              disabled={amountDisable}
              id={inputID}
              placeholder="0"
            />
            <select
            className=" border-0 bg-body-secondary rounded"
              value={selectCurrency}
              onChange={(e) => onChangeCurrency(e.target.value)}
              disabled={currencyDisable}
            >
              {currencyOptions.map((currency) => (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
    </>
  );
}

export default InputBox;
