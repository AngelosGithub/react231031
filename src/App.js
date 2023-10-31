function App() {
  let MyStyle = {
    display: "flex",
    justifyContent: "space-evenly",
  };
  return (
    <div style={MyStyle}>
      <MyComp />
      <MyComp />
      <MyComp />
    </div>
  );
}

function MyComp() {
  const name = "흥민";
  return <div style={{ backgroundColor: "black", color: "white" }}>{name}</div>;
}

export default App;
