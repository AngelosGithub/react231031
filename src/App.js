import React, { useState } from "react";
import { Box, Button, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const [foods, setFoods] = useState([]);

  function handleButtonClick(food) {
    setFoods([...foods, food]);
  }

  function handleRemoveClick(index) {
    console.log(index + "지우기");
    // const nextFoods = [...foods];
    // nextFoods.splice(index, 1);

    // const nextFoods = foods.filter((item, i) => i != index);
    // setFoods(nextFoods);

    setFoods(foods.filter((item, i) => i != index));
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("커피")}>커피</Button>
      <Button onClick={() => handleButtonClick("케이크")}>케이크</Button>
      <Button onClick={() => handleButtonClick("아이스")}>아이스</Button>
      <Box>
        <List>
          {foods.map((item, index) => (
            <ListItem key={index}>
              {item}{" "}
              <Button onClick={() => handleRemoveClick(index)}>지우기</Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default App;
