import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { IoIosMenu } from "react-icons/io";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navRef = useRef(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Close sidebar if clicking outside of the nav
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <Router>
      <div className="App">
        <nav ref={navRef}>
          <div className="menu-icon" onClick={toggleSidebar}>
            <IoIosMenu color="#e63946" />
          </div>
          <ul className={sidebarOpen ? "active" : ""}>
            <li>
              <Link to="/" onClick={() => setSidebarOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/sobre-mim" onClick={() => setSidebarOpen(false)}>
                Sobre mim
              </Link>
            </li>
            <li>
              <Link to="/exames" onClick={() => setSidebarOpen(false)}>
                Exames
              </Link>
            </li>
            <li>
              <Link
                to="/aparelhos-auditivos"
                onClick={() => setSidebarOpen(false)}
              >
                Aparelhos Auditivos
              </Link>
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
