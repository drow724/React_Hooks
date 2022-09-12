import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    }
    const handle = (event) => {
      const { clientY } = event;
      if (clientY <= 0) onBefore();
      //onBefore();
    };
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begForLife = () => console.log("please dont leave");
  useBeforeLeave(begForLife);
  return <div className="App"></div>;
};

export default App;
