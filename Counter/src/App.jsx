import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  let addValue = () => {
    if( counter != 20){
      setCounter(counter + 1)
    }else{
      alert("Not Allowed more then 20 Value");
    }
  };

  let removeValue = () =>{
    if( counter != 0){
      setCounter(counter - 1)
    }else{
      alert("You can't remove Negative");
    }

  }

  return (
    <>

      <h1>Counter App</h1>
      <div className="card">
      <button onClick={addValue}>Add Value</button>
        <p>{counter}</p>
        <button onClick={removeValue}>Remove Value</button>
      </div>


    </>
  )
}

export default App
