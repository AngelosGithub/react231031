import React, { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);

  function handlePlusClick() {
    setNumber(number + 1);
  }
  function handleMinusClick() {
    setNumber(number - 1);
  }

  return (
    <div>
      <Input type="number" value={number} />
      <Box>
        <Button onClick={handlePlusClick}>+</Button>
        <Button onClick={handleMinusClick}>-</Button>
      </Box>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>+</Button>
        <Button onClick={() => setNumber(number - 1)}>-</Button>
      </Box>
    </div>
  );
}

export default App;
