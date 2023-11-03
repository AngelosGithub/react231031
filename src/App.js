import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  // 브라우저는 이벤트 핸들러 메소드에 event(e) 객체를 매개값으로 넣어줌
  function handleClick(event) {
    // console.log(event);
    console.log(event.target);
    // console.log(event.target.className);
    // console.log(event.target.type);
  }
  return (
    <div>
      <Button onClick={handleClick} colorScheme="orange">
        button1
      </Button>
      <Button onClick={handleClick} colorScheme="blue">
        button2
      </Button>
    </div>
  );
}

export default App;
