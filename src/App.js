import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function App(props) {
  let [number, setNumber] = useState(0);

  // let number = 0;
  function handleClick() {
    // number++;
    // console.log(number);
    setNumber(number + 1);
  }
  return (
    <div>
      <Button onClick={handleClick}>바꾸기</Button>
      <Text>{number}</Text>
    </div>
  );
}

export default App;
