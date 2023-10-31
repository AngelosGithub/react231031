
function App() {
  return (
    <div>
        <MyComponent1 />
        {/*
        <div>
            <h1>Hello Component</h1>
        </div>
        */}
        <MyComponent2 />
        {/*
            <>
                <p>Lorem ipsum dolor sit.</p>
                <ul>
                    <li>Lorem.</li>
                    <li>Excepturi?</li>
                    <li>Voluptates.</li>
                </ul>
            </>
        */}
    </div>
  );
}

function MyComponent1() {
    return (
        <div>
            <h1>Hello Component</h1>
        </div>
    )
}

function MyComponent2() {
    return(
        <>
            <p>Lorem ipsum dolor sit.</p>
            <ul>
                <li>Lorem.</li>
                <li>Excepturi?</li>
                <li>Voluptates.</li>
            </ul>
        </>
    )
}

export default App;
