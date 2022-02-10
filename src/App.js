import Navbar from "./components/Navbar";
import "./css/app.css";
import Homepage from "./components/Homepage";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
