import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Hero from "./Hero";
import "./App.css";
import ExamesPediatria from "./ExamesPediatria";

function Page() {
  return (
    <>
      {" "}
      <Hero />
      <ExamesPediatria />
    </>
  );
}

function Item1() {
  return <h1>Item 1</h1>;
}

function Item2() {
  return <h1>Item 2</h1>;
}

function Item3() {
  return <h1>Item 3</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/item1" element={<Item1 />} />
            <Route path="/item2" element={<Item2 />} />
            <Route path="/item3" element={<Item3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
