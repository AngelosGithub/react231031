import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100px"}
        bg={"black"}
        gap={5}
        align={"center"}
        justify={"space-evenly"}
      >
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"blue"}>Fugiat?</Box>
        <Box bg={"yellow"}>Tempora!</Box>
        <Box bg={"white"}>Harum!</Box>
        <Box bg={"gray"}>Officia.</Box>
      </Flex>
    </>
  );
}

export default App;
