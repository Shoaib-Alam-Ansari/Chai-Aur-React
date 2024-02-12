import React, { useState } from "react";

function Chart({ data }) {
  const [breakdown, setBreakdown] = useState("monthly");

  let p = data.data.p;
  let r = data.data.r;
  let t = data.data.t;
  let opt = data.data.option;

  let amount = p;
  let compoundInterest = 0;
  let interest = 0;
  let month = t * 12;
  let quarter = month / 4;
  let week = t * 52;
  let day = t * 365;
  const tableData = [];

  if (opt == "yearly") {
    if (breakdown == "monthly") {
      for (let i = 1; i <= month; i++) {
        interest = (amount * r) / 100 / 12;
        amount = amount * Math.pow(1 + r / 100, t / month);
        compoundInterest = amount - p;
        tableData.push([i, interest, compoundInterest, amount]);
      }
    } else {
      for (let i = 1; i <= t; i++) {
        interest = (amount * r) / 100;
        amount = amount * Math.pow(1 + r / 100, 1);
        compoundInterest = amount - p;
        tableData.push([i, interest, compoundInterest, amount]);
      }
    }
  } else if (opt == "quarterly") {
    if (breakdown == "monthly") {
      for (let i = 1; i <= month; i++) {
        interest = (amount * r) / 100 / 3;
        amount = amount * Math.pow(1 + r / 100, t / quarter);
        compoundInterest = amount - p;
        tableData.push([i, interest, compoundInterest, amount]);
      }
    } else {
      for (let i = 1; i <= t; i++) {
        interest = (amount * r * 4) / 100;
        amount = amount * Math.pow(1 + r / 100, 4);
        compoundInterest = amount - p;
        tableData.push([i, interest, compoundInterest, amount]);
      }
    }
  } else if (opt == "monthly") {
    if (breakdown == "monthly") {
      for (let i = 1; i <= month; i++) {
        interest = (amount * r) / 100;
        amount = amount * Math.pow(1 + r / 100, t / t);
        compoundInterest = amount - p;
        tableData.push([i, interest, compoundInterest, amount]);
      }
    } else {
      for (let i = 1; i <= t; i++) {
        interest = (((amount * r) / 100) * month) / t;
        amount = amount * Math.pow(1 + r / 100, month / t);
        compoundInterest = amount - p;
        tableData.push([i, interest, compoundInterest, amount]);
      }
    }
  } else if (opt == "weekly") {
    if (breakdown == "monthly") {
      for (let i = 1; i <= month; i++) {
        interest = (amount * r) / 100;
        amount = amount * Math.pow(1 + r / 100, week / month);
        compoundInterest = amount - p;
        tableData.push([i, interest, compoundInterest, amount]);
      }
    } else {
      for (let i = 1; i <= t; i++) {
        interest = (((amount * r) / 100) * month) / t;
        amount = amount * Math.pow(1 + r / 100, month / t);
        compoundInterest = amount - p;
        tableData.push([i, interest, compoundInterest, amount]);
      }
    }
  } else if (opt == "daily") {
    if (breakdown == "monthly") {
      for (let i = 1; i <= month; i++) {
        interest = (amount * r) / 100; //(((amount * r) / 100) * month) / t ; // P (1 + r / n)nt – P
        amount = amount * Math.pow(1 + r / 100, 365 / month);
        compoundInterest = amount - p;
        tableData.push([i, interest, compoundInterest, amount]);
      }
    } else {
      for (let i = 1; i <= t; i++) {
        // amount = amount * Math.pow(1 + r / 100, 365);
        compoundInterest = amount - p;
        tableData.push([i, interest, compoundInterest, amount]);
      }
    }
  }


  const handleBreakdownChange = (event) => {
    setBreakdown(event.target.value);
  };

  return (
    <>
      <span className="text-light">Breakdown choice</span>
      <div
        className="btn-group col-3"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          value="monthly"
          checked={breakdown === "monthly"}
          onChange={handleBreakdownChange}
        />
        <label className="btn btn-outline-info" htmlFor="btnradio1">
          Monthly
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          value="yearly"
          checked={breakdown === "yearly"}
          onChange={handleBreakdownChange}
        />
        <label className="btn btn-outline-info" htmlFor="btnradio2">
          Yearly
        </label>
      </div>
      <h5 className="text-warning mb-0 mt-2">
        {breakdown === "monthly" ? "Monthly" : "Yearly"} breakdown
      </h5>
      <table className="table table-secondary table-striped">
        <thead>
          <tr>
            <th scope="col">{breakdown == "yearly" ? "Year" : "Month"}</th>
            <th scope="col">Interest</th>
            <th scope="col">Accrued Interest</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>0</td>
            <td>--</td>
            <td>--</td>
            <td>{p}</td>
          </tr>
          {tableData.map((el, idx) => (
            <tr key={idx}>
              <td>{el[0]}</td>
              <td>{el[1].toFixed(2)}</td>
              <td>{el[2].toFixed(2)}</td>
              <td>{el[3].toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Chart;
