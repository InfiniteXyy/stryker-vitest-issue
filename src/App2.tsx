import { useState } from "react";

function App2() {
  const [count, setCount] = useState(0);

  return (
    <button
      data-testid="counter"
      onClick={() => setCount((count) => count + 1)}
    >
      count is {count}
    </button>
  );
}

export default App2;
