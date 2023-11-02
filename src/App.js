import React from "react";
import { Box, FormControl, Select } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl>
          <Select placeholder="선택하세요">
            <option value="value1">Lorem.</option>
            <option value="value2">Placeat.</option>
            <option value="value3">Provident!</option>
            <option value="value4">Beatae.</option>
            <option value="value5">Voluptatem.</option>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
