// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [Minuites, setMinuites] = useState(0);
  let [StartButtonStatus, setStartButtonStatus] = useState("Start");
  let [Seconds, setSeconds] = useState(55);
  let [Value, setValue] = useState(null);

  let startTimer = ()=>{
    setSeconds((prev)=>{
      if(prev < 59){
        return prev + 1;
      }else{
        setMinuites((prev)=>prev+1);
        return 0;
      }
    })
  }

  let handleStart = ()=>{
    if(StartButtonStatus === "Start"){
      setValue(setInterval(startTimer,1000));
      setStartButtonStatus("Stop");
    }else{
      clearInterval(Value);
      setStartButtonStatus("Start");
    }

  }
  let handleReset = ()=>{
    clearInterval(Value);
    setMinuites(0);
    setSeconds(0);
    setStartButtonStatus("Start");
    Value = null;
  } 

  let formatTime = (time)=>{
    if(time < 10){
      return `0${time}`;
    }
    return time;
  }


  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {Minuites}:{formatTime(Seconds)}</p>
      <button onClick={handleStart}>{StartButtonStatus}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
