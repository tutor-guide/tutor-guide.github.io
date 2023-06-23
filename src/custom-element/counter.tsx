import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function SetZero() {
      setCount(0)
  }
  return (
  <>
  <button className="border border-black p-2 rounded-lg m-5" onClick={handleClick}>Clicked {count} times</button>
  <button className="border border-black p-2 rounded-lg" onClick={SetZero}>Set 0</button>
  </>);
}
 