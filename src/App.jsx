import { useState } from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

function Page() {
  return <h1>Inicio</h1>;
}

function SobreMim() {
  return <h1>Sobre mim</h1>;
}

function Exames() {
  return <h1>Exames</h1>;
}

function AparelhosAuditivos() {
  return <h1>Aparelhos Auditivos</h1>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Hello Vite + React!</p>
          <p>
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre-mim">Sobre mim</Link>
            </li>
            <li>
              <Link to="/exames">Exames</Link>
            </li>
            <li>
              <Link to="/aparelhos-auditivos">Aparelhos Auditivos</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/sobre-mim" element={<SobreMim />} />
            <Route path="/exames" element={<Exames />} />
            <Route
              path="/aparelhos-auditivos"
              element={<AparelhosAuditivos />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
