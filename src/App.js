import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (e) => {
    e.preventDefault();

    // Check if weight and height are valid numbers
    if (isNaN(weight) || isNaN(height)) {
      setMessage("Please enter a valid weight and height");
      return;
    }

    // Check if weight and height are positive
    if (weight <= 0 || height <= 0) {
      setMessage("Please enter a positive weight and height");
      return;
    }

    const upHeight = height * 0.0254;
    const bmi = weight / (upHeight * upHeight);
    setBmi(bmi.toFixed(1));

    if (bmi < 18.5) {
      setMessage('You are Underweight');
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage('You are Normal')
    } else if (bmi >= 25 && bmi < 30) {
      setMessage('You are Overweight')
    } else {
      setMessage('You are Obese')
    }
  }

  // Reload
  const reload = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="container">
        <h2> BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (Kgs)</label>
            <input
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (Inches)</label>
            <input
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" id="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
