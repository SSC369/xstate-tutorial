import React from "react";
import { useMachine } from "@xstate/react";
import counterMachine from "../machines/counterMachine";

const Counter: React.FC = () => {
  const [state, send] = useMachine(counterMachine);

  return (
    <div>
      <h1>Count: {state.context.count}</h1>
      <button onClick={() => send({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => send({ type: "DECREMENT" })}>Decrement</button>

      <button onClick={() => send({ type: "return" })}>Return to Active</button>
    </div>
  );
};

export default Counter;
