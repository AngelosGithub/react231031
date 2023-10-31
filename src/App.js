function App() {
  const name = "흥민";
  return (
    <>
      <h1>이름은 {name}</h1>
      <h1>이름은 {"강인"}</h1>
      <h1>이름은 희찬</h1>

      {/* 아래 두개의 코드는 같음 */}
      <div className={"error"}>Lorem ipsum dolor.</div>
      <div className="error">Lorem ipsum dolor.</div>
    </>
  );
}

export default App;
