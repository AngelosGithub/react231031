import { Input } from "@chakra-ui/react";

function App() {
  let result = 0;
  return (
    <>
      <Input type="number" /> +
      <Input type="number" />= {result};
    </>
  );
}

export default App;
