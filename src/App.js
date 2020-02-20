import React from 'react';
import A from './A';

function App() {
  const [counter, setCounter] = React.useState(0);

  console.log("Component App re-render");

  function increaseCount() {
    setCounter(c => c + 1);
  }

  return (
    <div>
      {counter}
      <button onClick={increaseCount}>Increment</button>
      <A />
    </div>
  )
}

export default App;
