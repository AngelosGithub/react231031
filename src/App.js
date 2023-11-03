import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  function handleClick1() {
    console.log("1번 버튼 클릭됨");
  }
  function handleClick2() {
    console.log("2번 버튼 클릭됨");
  }
  function handleClickButton(number) {
    console.log(number + "번 버튼 클릭됨");
  }
  return (
    <div>
      <Button onClick={handleClick1}>첫번째 버튼</Button>
      <Button onClick={handleClick2}>두번째 버튼</Button>
      <Button onClick={() => handleClickButton(3)}>세번째 버튼</Button>
      <Button onClick={() => handleClickButton(4)}>네번째 버튼</Button>
    </div>
  );
}

export default App;
