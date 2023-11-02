import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      {/*Card*30>CardHeader>Heading[size="md"]>lorem2^^CardBody>lorem15*/}
      {/*Card*30>CardHeader>Heading[size="md"]>lorem2^^CardBody>lorem15^CardFooter>Button>lorem1*/}
      <SimpleGrid gap={3} columns={{ base: 1, md: 3, xl: 5 }}>
        <Card>
          <CardHeader>
            <Heading size="md">Lorem ipsum.</Heading>
          </CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ea
            eligendi facilis possimus quia quo.
          </CardBody>
          <CardFooter>
            <Button>Lorem.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Dicta, id!</Heading>
          </CardHeader>
          <CardBody>
            Alias amet asperiores consequatur exercitationem expedita, labore
            quisquam unde vitae? A eligendi harum hic nam.
          </CardBody>
          <CardFooter>
            <Button>Reiciendis?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Praesentium, ratione.</Heading>
          </CardHeader>
          <CardBody>
            Aspernatur, beatae blanditiis corporis ipsam laboriosam mollitia
            natus nulla odio, quia, quis sed tempore voluptatem.
          </CardBody>
          <CardFooter>
            <Button>Iusto.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Impedit, quo?</Heading>
          </CardHeader>
          <CardBody>
            Consectetur dolorum ea est eum fugiat, ipsam odit possimus, quas qui
            ratione, sed soluta veniam.
          </CardBody>
          <CardFooter>
            <Button>Eos.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Commodi, vitae?</Heading>
          </CardHeader>
          <CardBody>
            Amet deserunt distinctio magni numquam perspiciatis quas quidem
            quisquam rem sequi veritatis. Nam, officiis, quasi!
          </CardBody>
          <CardFooter>
            <Button>Iste.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Ducimus, nostrum?</Heading>
          </CardHeader>
          <CardBody>
            Animi eos ex explicabo nesciunt sint tenetur ullam vitae? Cumque eos
            fuga labore magnam quod!
          </CardBody>
          <CardFooter>
            <Button>Ipsam.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Minima, vitae.</Heading>
          </CardHeader>
          <CardBody>
            Accusamus aperiam aspernatur earum fugiat impedit inventore odit
            omnis porro quam, soluta tempora tenetur ullam.
          </CardBody>
          <CardFooter>
            <Button>Magnam!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Cupiditate, inventore!</Heading>
          </CardHeader>
          <CardBody>
            Alias architecto eum expedita libero magni molestiae non, odit optio
            perspiciatis, possimus, quod suscipit veritatis?
          </CardBody>
          <CardFooter>
            <Button>Quod?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Ad, neque.</Heading>
          </CardHeader>
          <CardBody>
            A aliquam aliquid corporis delectus deleniti dicta eum
            exercitationem laudantium sunt. Adipisci corporis neque quo.
          </CardBody>
          <CardFooter>
            <Button>Voluptatum.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Possimus, ullam!</Heading>
          </CardHeader>
          <CardBody>
            Autem harum laudantium, nisi pariatur perferendis quaerat quas
            sapiente similique sunt vitae? Cupiditate quas, voluptatem.
          </CardBody>
          <CardFooter>
            <Button>Quaerat!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Et, illo!</Heading>
          </CardHeader>
          <CardBody>
            Alias consequuntur est eum hic mollitia nulla quasi quo quos
            similique voluptate. Aliquid doloribus, expedita.
          </CardBody>
          <CardFooter>
            <Button>At.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Ipsa, sequi.</Heading>
          </CardHeader>
          <CardBody>
            Animi aperiam beatae consectetur, dolor eius est id inventore ipsam
            laborum molestiae obcaecati ratione tempore!
          </CardBody>
          <CardFooter>
            <Button>Doloremque.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Placeat, rem?</Heading>
          </CardHeader>
          <CardBody>
            Architecto aut corporis dignissimos doloremque ea illo, magnam,
            magni natus nihil qui reiciendis repellendus tempora.
          </CardBody>
          <CardFooter>
            <Button>Maiores.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Neque, rem!</Heading>
          </CardHeader>
          <CardBody>
            At, aut distinctio earum labore laborum obcaecati quae quasi quos,
            rem rerum similique veritatis voluptates.
          </CardBody>
          <CardFooter>
            <Button>Ducimus?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Dolorum, exercitationem!</Heading>
          </CardHeader>
          <CardBody>
            Consectetur error exercitationem facilis ipsa itaque, labore
            necessitatibus nostrum, omnis perferendis placeat quae, sapiente
            voluptatum.
          </CardBody>
          <CardFooter>
            <Button>Culpa.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Dolorem, obcaecati.</Heading>
          </CardHeader>
          <CardBody>
            A ab accusantium animi distinctio dolores ea esse excepturi fugiat,
            fugit iure laboriosam neque, quas.
          </CardBody>
          <CardFooter>
            <Button>Delectus?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">A, illum?</Heading>
          </CardHeader>
          <CardBody>
            Aliquam, architecto, doloremque est expedita hic libero molestiae
            mollitia, non numquam quaerat quibusdam sit sunt.
          </CardBody>
          <CardFooter>
            <Button>Deserunt?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Aspernatur, obcaecati!</Heading>
          </CardHeader>
          <CardBody>
            Assumenda eius enim esse excepturi fugit iure, minus qui sed
            suscipit ut. Deserunt, nulla obcaecati.
          </CardBody>
          <CardFooter>
            <Button>At!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Iure, quia.</Heading>
          </CardHeader>
          <CardBody>
            Adipisci beatae culpa, cupiditate eos, exercitationem explicabo
            minima officiis perspiciatis quia reiciendis, rerum sed ullam.
          </CardBody>
          <CardFooter>
            <Button>Quaerat?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Similique, voluptate?</Heading>
          </CardHeader>
          <CardBody>
            Ipsa officiis quia quo repellendus ullam? Accusantium dignissimos
            est, et inventore placeat sapiente voluptates voluptatibus!
          </CardBody>
          <CardFooter>
            <Button>Quasi!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Dolores, doloribus!</Heading>
          </CardHeader>
          <CardBody>
            Beatae consequatur fuga iusto laboriosam natus necessitatibus odit,
            perferendis quibusdam rem unde veniam, vero voluptas.
          </CardBody>
          <CardFooter>
            <Button>Nesciunt.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Dolores, esse!</Heading>
          </CardHeader>
          <CardBody>
            Accusantium alias dolore dolores enim eos excepturi in laboriosam,
            magnam odit quam reiciendis, rem vero.
          </CardBody>
          <CardFooter>
            <Button>Magnam.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Provident, repudiandae.</Heading>
          </CardHeader>
          <CardBody>
            Amet, corporis dignissimos doloremque dolorum eaque ipsam libero
            optio placeat quam ratione, ut vero. Qui.
          </CardBody>
          <CardFooter>
            <Button>Vitae!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Repudiandae, sunt?</Heading>
          </CardHeader>
          <CardBody>
            Accusantium adipisci aliquam consequatur illo in, labore minus
            necessitatibus nemo nostrum nulla odit praesentium vitae?
          </CardBody>
          <CardFooter>
            <Button>Excepturi.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Inventore, nam?</Heading>
          </CardHeader>
          <CardBody>
            Atque consectetur cupiditate doloribus esse harum, magni nihil,
            nobis nostrum recusandae, rem sit veniam vero.
          </CardBody>
          <CardFooter>
            <Button>Perspiciatis.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">In, quasi!</Heading>
          </CardHeader>
          <CardBody>
            Asperiores, assumenda deserunt dignissimos dolores dolorum eius
            necessitatibus neque optio ratione reiciendis repudiandae saepe
            voluptate!
          </CardBody>
          <CardFooter>
            <Button>Animi!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Laudantium, quia!</Heading>
          </CardHeader>
          <CardBody>
            Ad deserunt, ex fuga, illo impedit laboriosam maxime mollitia nam
            non quae repellat repudiandae voluptas.
          </CardBody>
          <CardFooter>
            <Button>Sunt.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Odit, placeat?</Heading>
          </CardHeader>
          <CardBody>
            Consectetur consequatur ipsam mollitia perferendis placeat suscipit
            totam ullam! Ad illo impedit incidunt molestias suscipit.
          </CardBody>
          <CardFooter>
            <Button>Numquam.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Libero, optio!</Heading>
          </CardHeader>
          <CardBody>
            Adipisci aliquam, at dolor eius error, ipsa laborum molestiae
            numquam pariatur quidem, saepe tempora voluptate.
          </CardBody>
          <CardFooter>
            <Button>Voluptatibus!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Eaque, perferendis!</Heading>
          </CardHeader>
          <CardBody>
            A accusamus aliquid animi architecto cupiditate distinctio enim
            maiores, nam nulla odio, quis quisquam veritatis.
          </CardBody>
          <CardFooter>
            <Button>Numquam!</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
}

export default App;
