import Navbar from "@/components/navigation/Navbar";
import ThemeSwitch from "../ThemeSwitch";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <a
            href="#inicio"
            className="header__brand-link"
            aria-label="Voltar para o início"
          >
            <span className="header__brand-icon" aria-hidden="true">
              <img src="/ava-danieli.png" alt="" />
            </span>

            <span className="header__brand-name">
              CREATIVE <span>SPACE</span>
            </span>
          </a>
        </div>

        <Navbar />

        <div className="header__actions">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export default Header;