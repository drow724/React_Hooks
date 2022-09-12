import React, { useEffect, useRef, useState } from "react";

const useClick = (onClick) => {
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
    };
  }, []);
  const element = useRef();
  return element;
};
const App = () => {
  const sayHello = () => {
    console.log("say Hello");
  };
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
