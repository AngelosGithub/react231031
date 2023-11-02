import { Box, Center, Circle, Square } from "@chakra-ui/react";
import { HamburgerIcon, PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Center bg={"pink"} h={"200px"}>
        <Square bg={"blue.300"} w={"100px"} h={"100px"}>
          <HamburgerIcon />
        </Square>
      </Center>

      <Center bg={"red.200"} h={"200px"}>
        <Circle bg={"blue.400"} w={"100px"} h={"100px"}>
          <PhoneIcon />
        </Circle>
      </Center>
    </>
  );
}

export default App;
