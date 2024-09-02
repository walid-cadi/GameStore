import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  const counter = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  // components did mount
  useEffect(() => {
    console.log("Hellooooo");
  }, []);

  // components did update
  useEffect(() => {
    console.log("update");
    //return clearInterval(timer);
  }, [count]);
  const [time, setTime] = useState(new Date());
  let timer = null;
  // components will unmount
  useEffect(() => {
    timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return clearInterval(timer);
  }, []);

  return (
    <div>
      <button onClick={() => counter()}>counter </button> : {count} <br />
      {time.toLocaleString()}
    </div>
  );
};
