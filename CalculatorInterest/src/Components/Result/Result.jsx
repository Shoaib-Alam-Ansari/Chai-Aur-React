import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import Chart from "../Chart";

function Result(props) {
  return (
    <>
      <div className="d-flex flex-column gap-2 border col-7 p-4 mt-3">
        <div className="">
          <h2 className="text-light">Interest Calculation For</h2>
        </div>
        <div className=" d-flex justify-content-between">
          <div className=" border-top col-6">
            <div className="">
              <span className="text-light">Future investment value</span>
              <h1 className="text-success">₹ {props.data.amount}</h1>
            </div>
            <div className="">
              <span className="text-light">Total interest earned</span>
              <h1 className="text-warning">₹ {props.data.ci}</h1>
            </div>
            <div className="">
              <span className="text-light">Initial balance</span>
              <h1 className="text-info">₹ {props.data.p}</h1>
            </div>
          </div>
          <div className="border-top col-6 ms-2">
            <div className="">
              <span className="text-light">
                Interest rate ({props.data.option})
              </span>
              <h1 className="text-light">{props.data.r}%</h1>
            </div>
            <div className="">
              <span className="text-light">All-time rate of Return (RoR)</span>
              <h1 className="text-light"> <FaArrowCircleUp className="text-info fs-2" /> {props.data.ror}%</h1>
            </div>
          </div>
        </div>
        <span className="border-top" ></span>
        <Chart data={props}/>
      </div>
    </>
  );
}

export default Result;
