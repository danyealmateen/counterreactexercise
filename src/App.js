
import { useState } from "react";

const App = () => {

  const [counter, setCounter] = useState(0)

  const addCounter = () => {
    setCounter(counter + 1)
    console.log("addCounter clicked")
  }

  const subtractCounter = () => {
    setCounter(counter - 1)
    console.log("subtractCounter clicked")
  }

  return (
    <div>
      <h1>Counter Exercise</h1>
      <h2>{counter}</h2>
      <button onClick={() => addCounter()}>+</button>
      <button onClick={() => subtractCounter()}>-</button>
    </div>
  )
}

export default App;