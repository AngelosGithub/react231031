import React from "react";
import { Button } from "@chakra-ui/react";

function MyComp({ to, someProp }) {
  someProp();
  return (
    <>
      <a href={to}>link!!</a>
      <Button onClick={someProp}></Button>
    </>
  );
}

function App(props) {
  function func1() {
    console.log("func1 실행됨");
  }
  return (
    <div>
      <MyComp to={"https://www.naver.com"} someProp={func1}></MyComp>
    </div>
  );
}

export default App;
