import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function App(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);

  function handleNameInput(e) {
    setName(e.target.value);
  }
  function handlePWInput(e) {
    setPassword(e.target.value);
  }
  function handleEmailInput(e) {
    setEmail(e.target.value);
  }
  function handleSubmit() {
    setSubmit(true);
  }
  //   axios
  //     .post("/adduser", {
  //       name,
  //       email,
  //       password,
  //     })
  //     .then((response) => console.log("성공"))
  //     .catch((error) => console.log("실패"))
  //     .finally(() => console.log("필수입력"));
  // }
  return (
    <Center>
      <Box w={"480px"}>
        <FormControl mb={5}>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={handleNameInput} />
          <FormHelperText>띄어쓰기 없이 입력해주세요.</FormHelperText>
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={handlePWInput} />
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={handleEmailInput} />
          <FormHelperText>이메일은 중복될 수 없습니다.</FormHelperText>
        </FormControl>

        <Button colorScheme="blue" onClick={handleSubmit} isLoading={submit}>
          가입
        </Button>
      </Box>
    </Center>
  );
}

export default App;
