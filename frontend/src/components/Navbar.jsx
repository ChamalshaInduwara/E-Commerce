import React, { useState } from "react";
import { navbarStyles } from "../assets/dummyStyles";
import { Clock } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(location.pathname || "/");

  const handleNavClick = (href) => {
    setActive(href);
    setOpen(false);
  };
  return (
    <header className={navbarStyles.header}>
      <nav className={navbarStyles.nav} role="navigation">
        <div className={navbarStyles.container}>
          {/* BRAND LOGO */}
          <div className={navbarStyles.brandContainer}>
            <div className={navbarStyles.logoContainer}>
              <Clock className={navbarStyles.logoIcon} />
            </div>
            <Link
              to="/"
              onClick={() => handleNavClick("/")}
              className={navbarStyles.logoLink}
            >
              <span
                style={navbarStyles.logoTextStyle}
                className={navbarStyles.logoText}
              >
                ChoronoElite
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
