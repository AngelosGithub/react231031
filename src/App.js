import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function ChildComp({ onClick }) {
  return <Button onClick={onClick}>클릭!</Button>;
}

function SomeComp({ onClick }) {
  return <ChildComp onClick={onClick} />;
}

function OtherChildComp({ text2 }) {
  return <Text>{text2}</Text>;
}

function OtherComp({ text }) {
  return <OtherChildComp text2={text} />;
}

function App(props) {
  const [message, setMessage] = useState("dd");

  return (
    <div>
      <SomeComp onClick={() => setMessage("bb")} />
      <OtherComp text={message} />
    </div>
  );
}

export default App;
