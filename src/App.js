import { MyElem, city } from "./component/MyElem";
import age123 from "./component/MyElem";
import MyBox123, { person, country } from "./component/MyBox";
// 꼭 따로 적을 필요는 없음
// import {person, country} from "./component/MyBox"

function App() {
  return (
    <>
      <h1>{city}</h1>
      <h1>{age123}</h1>
      <MyBox123 />
      <h1>
        {person.age}, {person.name}
      </h1>
      <h1>{country}</h1>
    </>
  );
}

export default App;
