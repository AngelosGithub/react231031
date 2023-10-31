function App() {
  let MyStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    height: "50px",
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
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        width: "20%",
        height: "100%",
        textAlign: "center",
        lineHeight: "50px",
      }}
    >
      {name}
    </div>
  );
}

export default App;
