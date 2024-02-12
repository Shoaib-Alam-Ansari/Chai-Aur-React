import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Result from "../Result/Result";

function CompoundInterest() {
  const [data, setdata] = useState([]);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("₹");
  const [pAmount, setPAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [option, setOption] = useState("monthly");
  const [year, setYear] = useState();
  const [month, setMonth] = useState("");
  const [result, setResult] = useState("");
  const [ci, setCi] = useState("");

  const clickHandler = () => {
    let p = pAmount;
    let r = interestRate;
    let t = year;

    if (p !== "" && r !== "" && t !== "") {
      const yearlyCompound = () => {
        let amount = p * Math.pow(1 + r / 100, t );
        let totalAmount = amount.toFixed(2);
        let ci = totalAmount - p;
        let totalCi = ci.toFixed(2);
        let Ror = ((totalAmount - p) / p) * 100;
        let totalRor = Ror.toFixed(2);
        // setRor(Ror)
        setResult(totalAmount);
        setCi(totalCi);
        setdata({
          ci: totalCi,
          ror: totalRor,
          p: p,
          r: r,
          t: t,
          option: option,
          amount: totalAmount,
        });
      };

      const monthlyCompound = () => {
        let amount = p * Math.pow(1 + r / 100, 12 * t);
        let totalAmount = amount.toFixed(2);
        let ci = totalAmount - p;
        let totalCi = ci.toFixed(2);
        let Ror = ((totalAmount - p) / p) * 100;
        let totalRor = Ror.toFixed(2);
        setResult(totalAmount);
        setCi(totalCi);
        setdata({
          ci: totalCi,
          ror: totalRor,
          p: p,
          r: r,
          t: t,
          amount: totalAmount,
          option: option,
        });
      };

      const quarterlyCompound = () => {
        let amount = p * Math.pow(1 + r / 100, 4 * t);
        let totalAmount = amount.toFixed(2);
        let ci = totalAmount - p;
        let totalCi = ci.toFixed(2);
        let Ror = ((totalAmount - p) / p) * 100;
        let totalRor = Ror.toFixed(2);
        setResult(totalAmount);
        setCi(totalCi);
        setdata({
          ci: totalCi,
          p: p,
          ror: totalRor,
          r: r,
          t: t,
          option: option,
          amount: totalAmount,
        });
      };

      const weeklyCompound = () => {
        let amount = p * Math.pow(1 + r / 100, 52 * t);
        let totalAmount = amount.toFixed(2);
        let ci = totalAmount - p;
        let totalCi = ci.toFixed(2);
        let Ror = ((totalAmount - p) / p) * 100;
        let totalRor = Ror.toFixed(2);
        setResult(totalAmount);
        setCi(totalCi);
        setdata({
          ci: totalCi,
          p: p,
          ror: totalRor,
          r: r,
          t: t,
          option: option,
          amount: totalAmount,
        });
      };

      const dailyCompound = () => {
        let amount = p * Math.pow(1 + r / 100, 365 * t);
        let totalAmount = amount.toFixed(2);
        let ci = totalAmount - p;
        let totalCi = ci.toFixed(2);
        let Ror = ((totalAmount - p) / p) * 100;
        let totalRor = Ror.toFixed(2);
        setResult(totalAmount);
        setCi(totalCi);
        setdata({
          ci: totalCi,
          p: p,
          ror: totalRor,
          r: r,
          t: t,
          option: option,
          amount: totalAmount,
        });
      };

      if (option == "yearly") {
        yearlyCompound();
      } else if (option == "monthly") {
        monthlyCompound();
      } else if (option == "quarterly") {
        quarterlyCompound();
      } else if (option == "weekly") {
        weeklyCompound();
      } else if (option == "daily") {
        dailyCompound();
      }
    } else {
      alert("All input field required");
    }
  };

  const radios = [
    { name: "₹", value: "₹" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
    { name: "4", value: "4" },
    { name: "5", value: "5" },
  ];

  return (
    <div className="d-flex col-12 justify-content-between">
      <div
        className="card bg-black p-3 mt-3 col-sm-4"
        style={{ height: "25rem" }}
      >
        <label className="text-light mb-1">Currency:</label>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={checked ? "outline-success" : "outline-light"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>

        <div class="mt-2">
          <label for="amount" class="form-label text-light">
            Initial amount:
          </label>
          <div class="input-group">
            <span class="input-group-text text-bg-secondary" id="basic-addon3">
              {radioValue}
            </span>
            <input
              required
              type="number"
              value={pAmount}
              class="form-control"
              placeholder="Amount..."
              id="amount"
              onChange={(e) => setPAmount(Number(e.target.value))}
            />
          </div>
        </div>
        <div class="mt-2 d-flex flex-column">
          <div className="">
            <label for="amount" class="form-label text-light">
              Interest rate:
            </label>
          </div>
          <div className=" d-flex gap-2">
            <div class="input-group ">
              <input
                required
                type="number"
                value={interestRate}
                class="form-control"
                placeholder="Amount..."
                id="amount"
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
              <span
                class="input-group-text text-bg-secondary"
                id="basic-addon3"
              >
                %
              </span>
            </div>
            <select
              value={option}
              id=""
              className=""
              onChange={(e) => setOption(e.target.value)}
            >
              <option value="daily">daily</option>
              <option value="weekly">weekly</option>
              <option value="monthly">monthly</option>
              <option value="quarterly">quarterly</option>
              <option value="yearly">yearly</option>
            </select>
          </div>
        </div>

        <div class="mt-2 d-flex gap-2">
          <div className="">
            <label for="amount" class="form-label text-light">
              Years:
            </label>
            <div className=" d-flex gap-2">
              <div class="input-group">
                <input
                  required
                  type="number"
                  class="form-control"
                  placeholder="Years..."
                  id="amount"
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
          <div className="">
            <label for="amount" class="form-label text-light">
              Months:
            </label>
            <div className=" d-flex gap-2">
              <div class="input-group ">
                <input
                  required
                  type="number"
                  class="form-control"
                  placeholder="Months"
                  id="amount"
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <button className="btn btn-success" onClick={clickHandler}>
            Calculate
          </button>
        </div>
      </div>
      <Result data={data} />
    </div>
  );
}

export default CompoundInterest;
