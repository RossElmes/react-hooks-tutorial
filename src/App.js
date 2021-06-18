import React , {useState} from "react"
import './App.css';

function App() {

  // build out a function to set the state so it's only called on inital render
  function expensiveInitalState(v){
    return v; 
  }

  const [count,setCount] = useState(()=> expensiveInitalState(10)); 
  const [count2,setCount2] = useState(()=> expensiveInitalState(20)); 

  return (
    <div className="App">
      <button onClick={() => {
        setCount(c => c+1)
        setCount2(c => c+1)
      }}>+</button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
    </div>
  );
}

export default App;
