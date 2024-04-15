
import './App.css';
import {useState} from "react"

function App() {
  const [height,setHeight]=useState("")
  const [weight,setWeight]=useState("")
  const [bmi,setBmi]=useState("")
  const [bmiState,setBmiState]=useState("")
  const [errormessage,setErrormessage]=useState("")

  const calBmi=()=>{
    const isValiedHeight=/^\d+$/.test(height)
    const isValiedWeight=/^\d+$/.test(weight)
    if (isValiedHeight && isValiedWeight){
      const heightInmeters=height/100
      const bmiValue=weight/(heightInmeters*heightInmeters)
      setBmi(bmiValue.toFixed(2))
      if (bmiValue<18.5){
        setBmiState("Underweight")
      }
      else if(bmiValue>=18.5 &&  bmiValue<24.9){
        setBmiState("Normal Weight")
      }
      else if(bmiValue>=25 &&  bmiValue<29.9){
        setBmiState("Overweight")
      }
      else{
        setBmiState("obese")
      }
      setErrormessage("")

    }else{
      setBmi(null);
      setBmiState("")
      setErrormessage("Please enter valied numeric values for height and weight")
    }

  }
  const clearAll=()=>{
    setHeight("")
    setWeight("")
    setBmi(null);
      setBmiState("")

  }

  return (
    <>
    <div className="bmi-cal">
      <div className="box"></div>
      <div className="data">
        <h1>BMI Calculator</h1>
        {errormessage &&<p className='error'>{errormessage}</p>}
        <div className="input-container">
          <label htmlFot="height">Height (cm):</label>
          <input type="text" id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
        </div>
        <div className="input-container">
          <label htmlFot="weight">Weight (kg):</label>
          <input type="text" id="weight" value={weight}  onChange={(e)=>setWeight(e.target.value)}/>
        </div>
        <button onClick={calBmi}>Calculate BMI</button>
        <button className='clear' onClick={clearAll}>Clear</button>
         {bmi!==null &&(
             <div className="result">
             <p>Your BMI is :{bmi}</p>
             <p>Status: {bmiState}</p>
   
           </div>
         )}
      </div>
    </div>
    </>
  );
}

export default App;
