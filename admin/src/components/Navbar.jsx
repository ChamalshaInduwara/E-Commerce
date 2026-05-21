import React from "react";
import { NavLink } from "react-router-dom";
import { navbarStyles } from "../assets/dummyStyles";
import { Clock } from "lucide-react";

const Navbar = () => {
  return (
    <header className={navbarStyles.header}>
      <div className={navbarStyles.container}>
        <div className={navbarStyles.mainBar}>
          <div className={navbarStyles.brandContainer}>
            <div className={navbarStyles.brandLogo}>
              <Clock className={navbarStyles.brandIcon} />
            </div>
            <NavLink
              to="/"
              className={navbarStyles.brandText}
              style={{
                fontFamily:
                  'Poppins, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
              }}
            >
              ChronoElite
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
