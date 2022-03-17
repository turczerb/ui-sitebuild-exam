import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card-container">
        <Cards data={data} />
      </div>
    </div>
  );
}

export default App;
