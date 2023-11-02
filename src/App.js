import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="blue">Lorem.</Button>
      <Button colorScheme="yellow">Lorem.</Button>
      <Button colorScheme="orange">Mollitia!</Button>
      <Button size={"sm"} colorScheme="green">
        Fugiat.
      </Button>
      <Button size={"lg"} colorScheme="teal">
        Dolore.
      </Button>
      <Button colorScheme="telegram" variant={"outline"}>
        Ut.
      </Button>
      <Button colorScheme="blackAlpha" variant={"ghost"}>
        Exercitationem?
      </Button>
      <Button variant={"link"}>Quibusdam?</Button>
      <Button leftIcon={<EmailIcon />}>Quam.</Button>
      <Button rightIcon={<ArrowRightIcon />}>Consectetur!</Button>
      <Button isLoading>Voluptatem!</Button>
      <Button isLoading loadingText={"전송중"}>
        Ad.
      </Button>
      <Button>Facere.</Button>
      <Button>Recusandae?</Button>
      <Button>Eligendi.</Button>
      <Button>Animi!</Button>
      <Button>Nostrum?</Button>
      <Button>Velit.</Button>
      <Button>Quo.</Button>
      <Button>Nisi.</Button>
      <Button>Ullam!</Button>
      <Button>Molestiae.</Button>
      <Button>Delectus.</Button>
      <Button>At.</Button>
      <Button>Ipsam.</Button>
      <Button>Minima.</Button>
      <Button>Blanditiis?</Button>
      <Button>Eligendi.</Button>
      <Button>Aliquam.</Button>
      <Button>Placeat.</Button>
      <Button>Ex!</Button>
    </>
  );
}

export default App;
