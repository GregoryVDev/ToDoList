import "./App.css";
import React, { useState } from "react";

export function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)} className="button-off-on">
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Décrémenter</button>
    </div>
  );
}
