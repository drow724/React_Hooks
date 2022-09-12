import { useEffect, useRef, useState } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
  }, []);
  return status;
};

const App = () => {
  const handleNetworkCahnge = (onLine) => {
    console.log(onLine ? "We just went online" : "We are Offline");
  };
  const onLine = useNetwork(handleNetworkCahnge);
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;
