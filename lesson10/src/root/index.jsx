import Table from "../components/Table/index";
import Navbar from "../components/Navbar/index";
import { useState } from "react";

export const Root = () => {
  const [state, setState] = useState(
    Number(localStorage.getItem("count") || 1)
  );

  const onPlus = () => {
    localStorage.setItem("count", state + 1);
    setState(state + 1);
  };

  const onMinus = () => {
    localStorage.setItem("count", state - 1);
    setState(state - 1);
  };

  return (
    <div>
      <h2>{state}</h2>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
      <button onClick={() => localStorage.removeItem("count")}>Remove</button>
      <button onClick={() => localStorage.clear()}>Clear</button>
      <Navbar />
      <Table />
    </div>
  );
};

export default Root;

//set
//get
//remove
//clear
