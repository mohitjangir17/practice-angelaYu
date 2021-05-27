import React, { useState } from "react";

function Time() {
  const statetime = new Date().toLocaleString();
  const [time, setTime] = useState(statetime);

  const updateTime = () => {
    const newTime = new Date().toLocaleString();

    setTime(newTime);

    setInterval(updateTime, 1000);
  };
  return (
    <div>
      {/* <h1>Time</h1> */}

      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}
export default Time;
