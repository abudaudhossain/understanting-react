import { useState, useEffect } from 'react';
import './App.css';
import Device from './components/Device/Device';

function App() {
  const [steps, setSteps] = useState(0);

  const hendleStepsCount = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
  }

  useEffect(() =>{
    console.log(steps)
  },[steps])


  return (
    <div className="App">
      <h2>Your steps: {steps}</h2>
      <button onClick={hendleStepsCount}>Steps</button>
      <Device name="Laptop" price="30200" steps = {steps}></Device>
    </div>
  );
}

export default App;
