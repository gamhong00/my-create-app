import React, { useState, useCallback } from "react";

const storeSet = new Set();

function Counter3() {
  const [count, setCount] = useState(0);
  const [countOther, setCountOther] = useState(0);

  const increase = useCallback(() => setCount(prevCount => prevCount + 1), []);
  const decrease = useCallback(() => setCount(prevCount => prevCount - 1), []);

  const increaseOther = useCallback(() => setCountOther(prevCountOther => prevCountOther + 1), []);
  const decreaseOther = useCallback(() => setCountOther(prevCountOther => prevCountOther - 1), []);


  storeSet.add(increase);
  storeSet.add(decrease);
  storeSet.add(increaseOther);
  storeSet.add(decreaseOther);

  console.log(storeSet);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>

      <div>Count other: {countOther}</div>
      <button onClick={increaseOther}>+</button>
      <button onClick={decreaseOther}>-</button>
    </>
  );
}

export default Counter3;