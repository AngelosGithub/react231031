// style 적용 방법
// 보통 css 파일
// css module 사용
// chakra ui css library

import { MyBox } from "./component/MyBox";
import { MyComp } from "./component/MyComp";
import { MyComponent } from "./component/MyComponent";

function App() {
  return (
    <>
      <MyComp />
      <MyBox />
      <MyComponent />
    </>
  );
}

export default App;
