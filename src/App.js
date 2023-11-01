import { MyBox, MyElem, MyContainer, name, person } from "./component/MyBox";

function App() {
  console.log(name, "name");
  console.log(person, "person");
  return (
    <>
      <MyBox />
      <MyElem />
      <MyContainer />
    </>
  );
}

export default App;
