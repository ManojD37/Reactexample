import { useState } from 'react'

const Hooks = () => {
    const [counter, setCounter] = useState(0);
  
    const decrement = () => {
      setCounter(counter - 1);
    };
  
    const increment = () => {
      setCounter(counter + 1);
    };
  
    return (
      <div>
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
      </div>
    );
  };
  
  export default Hooks;