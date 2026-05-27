import { useState } from "react";
import "./App.css";

function App() {
  const [errors, setErrors] = useState({});
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(10);
  const [people, setPeople] = useState(1);

  // Calculations
  const tipAmount = (bill * tip) / 100;
  const totalAmount = Number(bill) + tipAmount;
  const perPerson = totalAmount / people;

  // Reset function
  const resetCalculator = () => {
    setBill("");
    setTip(10);
    setPeople(1);
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
            onChange={(e) => setBill(e.target.value)}
          />
        </div>

        {/* Tip Buttons */}
        <div className="input-group">
          <label>Select Tip %</label>

          <div className="tip-buttons">

            <button
              className={tip === 10 ? "active" : ""}
              onClick={() => setTip(10)}
            >
              10%
            </button>

            <button
              className={tip === 15 ? "active" : ""}
              onClick={() => setTip(15)}
            >
              15%
            </button>

            <button
              className={tip === 20 ? "active" : ""}
              onClick={() => setTip(20)}
            >
              20%
            </button>

          </div>
        </div>

        {/* Custom Tip */}
        <div className="input-group">
          <label>Custom Tip %</label>

          <input
            type="number"
            placeholder="Enter custom tip"
            onChange={(e) => setTip(Number(e.target.value))}
          />
        </div>

        {/* People */}
        <div className="input-group">
          <label>Number of People</label>

          <input
            type="number"
            min="1"
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
          />
        </div>

        {/* Results */}
        <div className="results">

          <div className="result-box">
            <h3>Total Tip</h3>
            <p>Rs {tipAmount.toFixed(2)}</p>
          </div>

          <div className="result-box">
            <h3>Grand Total</h3>
            <p>Rs {totalAmount.toFixed(2)}</p>
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