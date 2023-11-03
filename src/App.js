import React from "react";
import { Input } from "@chakra-ui/react";

function App(props) {
  function handleChange(e) {
    console.log("input 값이 변경됨");
    console.log(e.target);
    console.log(e.target.value);
  }
  return (
    <div>
      <Input onChange={handleChange} />
      <Input onChange={handleChange} />
    </div>
  );
}

export default App;
