import { useState } from "react";

import "./App.css";
import Chat from "../src/components/chat/Chat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-[60px]">
          Welcome to Uttarakhand Teaching Project 2025{" "}
        </h1>
        <Chat />
      </div>
    </>
  );
}

export default App;
