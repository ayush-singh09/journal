import { useEffect, useMemo } from "react";
import io from "socket.io-client";

const App = () => {
  const socket = useMemo(() => io("http://localhost:8002"), []);

  useEffect(() => {
    
  }, [socket]);

  return (
    <div className="">
      <button
        className="btn"
        onClick={() => socket.emit("message", { number: 8317070867  })}
      >
        Send
      </button>
    </div>
  );
};

export default App;
