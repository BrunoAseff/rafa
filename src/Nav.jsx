import { Ear } from "@phosphor-icons/react";
import { FaAngleDown } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.sidebar}>
        <CiMenuBurger onClick={toggleSidebar} className={styles.menuIcon} />
        <Logo />
      </div>

      <nav className={styles.nav}>
        <Logo />
        <div className={styles.center}>
          <ul>
            <li>
              <Link to="#sobre-mim">Sobre mim</Link>
            </li>
            <li
              className={styles.depoimentos}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link to="#depoimentos">Exames pediatria</Link>
              <FaAngleDown className={styles.arrow} />
              {isDropdownOpen && (
                <div className={styles.dropdown}>
                  <button>Audiometria Infantil</button>
                  <button>Imitância Acústica</button>
                  <button>BERA / PEATE Pediátrico</button>
                </div>
              )}
            </li>

            <li>
              <Link to="#duvidas">Depoimentos</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className={styles.navButton}>ENTRAR EM CONTATO</button>
        </div>
      </nav>

      <nav
        ref={sidebarRef}
        className={`${styles.sideItems} ${isSidebarOpen ? styles.open : ""}`}
      >
        <IoCloseOutline onClick={toggleSidebar} className={styles.closeIcon} />
        <ul>
          <li>
            <Link to="#" onClick={() => setIsSidebarOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="#sobre-mim" onClick={() => setIsSidebarOpen(false)}>
              Sobre mim
            </Link>
          </li>
          <li>
            <div className={styles.depoimentos}>
              <Link to="#depoimentos" onClick={() => setIsSidebarOpen(false)}>
                Exames pediatria
              </Link>
            </div>
          </li>
          <li>
            <Link to="#contato" onClick={() => setIsSidebarOpen(false)}>
              Depoimentos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

function Logo() {
  return (
    <div className={styles.logo}>
      <Ear size={28} color="#242424" weight="thin" />
      <span>Fonoaudióloga Rafaela Duarte Alves</span>
    </div>
  );
}
