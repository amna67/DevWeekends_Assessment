import { useState } from "react";
import "./App.css";

function App() {
  const [errors, setErrors] = useState({});
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(10);
  const [people, setPeople] = useState(1);

  const billValue = Number(bill) || 0;
  const peopleValue = Number(people) || 1;
  const tipValue = Number(tip) || 0;
  // Calculations
  const tipAmount = (billValue * tipValue) / 100;
  const total = billValue + tipAmount;
  const perPerson = peopleValue > 0 ? total / peopleValue : 0;

  // Reset function
  const resetCalculator = () => {
    setBill("");
    setTip(10);
    setPeople(1);
    setErrors({});
  };
  //Validates input
  const validate = (billValue, peopleValue, tipValue) => {
  let newErrors = {};

  if (!billValue || billValue <= 0) {
    newErrors.bill = "Bill must be greater than 0";
  }

  if (!peopleValue || peopleValue < 1) {
    newErrors.people = "People must be at least 1";
  }

  if (tipValue < 0 || tipValue > 100) {
    newErrors.tip = "Tip must be between 0 and 100";
  }

  setErrors(newErrors);
};

  return (
    <div className="container">
      <div className="calculator">

        <h1>Tip Calculator</h1>

        {/* Bill Input */}
        <div className="input-group">
          <label>Bill Amount (Rs)</label>

          <input
            type="number"
            placeholder="Enter bill amount"
            value={bill}
            onChange={(e) => {
              const value = e.target.value;
              setBill(value);
              validate(Number(value), people, tip);
            }}
          />
          {errors.bill && <p className="error">{errors.bill}</p>}
        </div>

        {/* Tip Buttons */}
        <div className="input-group">
          <label>Select Tip %</label>

          <div className="tip-buttons">

            <button
              className={tip === 10 ? "active" : ""}
              onClick={() => {
                setTip(10);
                validate(Number(bill), people, 10);
              }}
            >
              10%
            </button>

            <button
              className={tip === 15 ? "active" : ""}
              onClick={() =>  {              
                setTip(15)
                validate(Number(bill), people, 15);
              }}
            >
              15%
            </button>

            <button
              className={tip === 20 ? "active" : ""}
              onClick={() =>   {              
                setTip(20)
                validate(Number(bill), people, 20);
              }}
            >
              20%
            </button>
          </div>
        </div>
        {errors.tip && <p className="error">{errors.tip}</p>}

        {/* Custom Tip */}
        <div className="input-group">
          <label>Custom Tip %</label>

          <input
            type="number"
            placeholder="Enter custom tip"
            onChange={(e) => {
              const value = Number(e.target.value);
              setTip(value);
              validate(Number(bill), people, value);
            }}
          />
        </div>

        {/* People */}
        <div className="input-group">
          <label>Number of People</label>

          <input
            type="number"
            min="1"
            value={people}
            onChange={(e) => {
              const value = Number(e.target.value);
              setPeople(value);
              validate(Number(bill), value, tip);
            }}
          />
          {errors.people && <p className="error">{errors.people}</p>}
        </div>

        {/* Results */}
        <div className="results">

          <div className="result-box">
            <h3>Total Tip</h3>
            <p>Rs {tipAmount.toFixed(2)}</p>
          </div>

          <div className="result-box">
            <h3>Grand Total</h3>
            <p>Rs {total.toFixed(2)}</p>
          </div>

          <div className="result-box">
            <h3>Per Person</h3>
            <p>Rs {perPerson.toFixed(2)}</p>
          </div>

        </div>

        {/* Reset Button */}
        <button className="reset-btn" onClick={resetCalculator}>
          Reset
        </button>

      </div>
    </div>
  );
}

export default App;