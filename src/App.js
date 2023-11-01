function App() {
  return (
    <>
      <h1
        className="note"
        style={{ backgroundColor: "blue", color: "white" }}
        title="제목요소"
      >
        Lorem.
      </h1>
      <p title="문단요소">Lorem.</p>
      <MyComp title="내 컴포넌트" name="흥민" />
      <MyComp title="My 컴포넌트에요" name="강인" />
    </>
  );
}

// 함수인자로 사용한 곳에서 넘긴 property들이 객체형태로 담김
// 예) title="내 컴포넌트" => {title="내 컴포넌트"}
// 예) title="내 컴포넌트" name="흥민" => {title="내 컴포넌트" name="흥민"}
function MyComp(props) {
  // properties 줄임말
  console.log("받은 property", props);
  return (
    <div>
      <h1 title={props.title}>hello {props.name}</h1>
    </div>
  );
}

export default App;
