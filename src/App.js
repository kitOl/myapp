import Ninjas from "./Ninjas";

function App() {
  const state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 },
    ],
  };
  return (
    <div className="App">
      <h1> My first React app </h1>
      <p>Welcome :)</p>
      <Ninjas ninjas={state.ninjas} />
    </div>
  );
}

export default App;
