function App() {
  return (
    <>
      <MyComp name="흥민" address="신촌" age={33} city="서울" />
      <MyComp address="강남" age={33} city="부산" />
      <MyComp address="강남" city="부산" />
    </>
  );
}

function MyComp({ name = "불명", address, city, age = 0 }) {
  return (
    <div>
      <p>
        {name}은 {age}살 이고 {address}, {city}에 산다
      </p>
    </div>
  );
}

export default App;
