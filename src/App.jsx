import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter((counter) => counter + 1);
  }

  return (
    <div className="container">
      <h1>Webpack Playground</h1>

      <button type="button" onClick={increaseCounter}>
        Counter: {counter}
      </button>
    </div>
  );
}

export default App;
