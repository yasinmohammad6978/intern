import React, { useState } from "react";

const Home = () => {
  return (
    <div className="bg-home">
      <Count />
    </div>
  );
};

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div style={{}}>
        <h1>
          <span className="count">COUNT: ({count})</span>
        </h1>
        <div>
          <button style={{margin:100}} className="on-btn" onClick={() => setCount(count + 1)}>
            Increase
          </button>
          <button className="on-btn" onClick={() => setCount(count - 1)}>
            Decrease
          </button>
        </div>
      </div>
    </>
  );
};



export default Home;
