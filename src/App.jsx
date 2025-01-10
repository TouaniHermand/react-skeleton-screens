import Articles from "./components/Articles";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Skeletons</h1>
      </header>
      <div className="content">
        <Articles id="ar" />
        <User id="us" />
      </div>
    </div>
  );
}

export default App;
