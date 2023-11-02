import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg="gold" border={"1px solid purple"}>
        Lorem ipsum.
      </Box>
      <Box bg="gray" borderTop={"3px dotted pink"}>
        Iste, veniam!
      </Box>
      <Box borderY={"5px solid blue"}>Aliquam, nemo.</Box>
      <Box border={"5px solid gray"} borderRadius={"10px"}>
        Aperiam, cum!
      </Box>
      <Box border={"5px solid gold"} borderRadius={"50%"}>
        Eum, quo?
      </Box>
      <Box border={"5px solid green"} borderRadius={20}>
        Dolorem, vero!
      </Box>
      <Box boxShadow={"10px 5px 5px green"}>Dolores, quibusdam.</Box>
      <Box shadow={"lg"}>Doloribus, est?</Box>
      <Box shadow={"dark-lg"}>Numquam, omnis.</Box>
      <Box bg={"blue.300"} m={"10px"}>
        Aut, laboriosam.
      </Box>
      <Box bg={"gold"} mx={"100px"}>
        Est, sed?
      </Box>
      <Box bg={"gray"} mx={150} my={50}>
        Hic, incidunt?
      </Box>
      <Box bg={"pink"} p={"50px"}>
        Facere, impedit.
      </Box>
      <Box bg={"skyblue"} px={10}>
        Cumque, eligendi!
      </Box>
      <Box bg={"purple"} py={15}>
        Alias, dignissimos!
      </Box>
      <Box bg={"red"} pl={"30px"}>
        Eum, ut?
      </Box>
      <Box>Laudantium, rerum!</Box>
      <Box>Corporis, nemo.</Box>
      <Box>Accusantium, iusto?</Box>
      <Box>Dolorem, sint.</Box>
    </>
  );
}

export default App;
