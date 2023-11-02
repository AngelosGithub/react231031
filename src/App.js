import {
  Box,
  Center,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Center>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>이름</FormLabel>
            {/*<Input></Input>*/}
            <Input />
            <FormHelperText>띄어쓰기 없이 입력하세요!</FormHelperText>
          </FormControl>
        </Box>
      </Center>

      <Center>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>하나만 선택하세요</FormLabel>
            <RadioGroup>
              <Flex gap={5}>
                <Radio value="value1">Lorem.</Radio>
                <Radio value="value2">Lorem.</Radio>
                <Radio value="value3">Perspiciatis.</Radio>
                <Radio value="value4">Odio.</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>
        </Box>
      </Center>

      <Center>
        <Box w={"480px"}>
          <FormControl>
            <CheckboxGroup>
              <Flex gap={5}>
                <Checkbox>Lorem.</Checkbox>
                <Checkbox>Et.</Checkbox>
                <Checkbox>Ex!</Checkbox>
              </Flex>
            </CheckboxGroup>
          </FormControl>
        </Box>
      </Center>
    </>
  );
}

export default App;
