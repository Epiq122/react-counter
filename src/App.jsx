import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import ResetButton from './components/ResetButton';

function App() {
  const [count, setCount] = useState(0);
  const increment = (step) => {
    setCount(count + step);
  };
  const decrement = (step) => {
    setCount(count - step);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className='App'>
      <h1>Counter: {count}</h1>
      <Button step={1} increment={increment} decrement={decrement} />
      <Button step={10} increment={increment} decrement={decrement} />
      <Button step={100} increment={increment} decrement={decrement} />
      <hr />
      <ResetButton reset={reset} />
    </div>
  );
}

export default App;
