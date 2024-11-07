import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BMI from './assets/bmi_01.png'

function App() {
  const[height,setHeight]=useState("")
  const[weight,setWeight]=useState("")
  const[status,setStatus]=useState("")
  const[bmi,setBmi]=useState(null)
  const[errorMessage,setErrorMessage]=useState("")

  
  function bmiCalculate(){
    const isValidHeight=/^\d+$/.test(height);
    const isValidWeight=/^\d+$/.test(weight);
    if(isValidHeight && isValidWeight){
      const heightInMeter = height / 100;
      const bmiValue = weight / (heightInMeter * heightInMeter);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue < 18.5){
        setStatus("Underweight")
      }
      else if(bmiValue >= 18.5 && bmiValue <24.9){
        setStatus("Normal Weight")
      }
      else if (bmiValue >= 25 && bmiValue < 29.9){
        setStatus("Overweight")
      }
      else{
        setStatus("Obese")
      }
      setErrorMessage("");
    }
    else{
      setBmi(null);
      setStatus("");
      setErrorMessage("Please enter valid numeric values for height and weight. ")
    }
  }

  function clearAll(){
    setBmi(null);
    setStatus("");
    setHeight("")
    setWeight("")
  }

  return (
    <>
     
        <div className="bmi-calculator">
          <div className="image">
            <img src={BMI} alt="" />
          </div>

          <div className="data">
            <h3>BMI CALCULATOR</h3>
        
            

            <div className="height">

            {errorMessage && <p className='error'>{errorMessage}</p>}
              <label htmlFor="height">Height(cm)</label>
            <input type="text"  id='height' value={height} onChange={(e)=>setHeight(e.target.value)}/></div>

            <div className="weight">
              <label htmlFor="weight">Weight(kg)</label>
            <input type="text" name="" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)} /></div>

            <div className="buttons">
              <button onClick={bmiCalculate}>Calculate BMI</button>
              <button onClick={clearAll}>Clear</button>
              </div>

            {bmi !== null && (
              <div className="result">
              <div className="value">Your BMI is: {bmi}</div>
              <div className="status">Status: {status}</div>
                 </div>
                )}
          </div>
         
        </div>
    </>
  )
}

export default App
