import React from 'react'
import { navbarStyles } from '../assets/dummyStyles'
const Navbar = () => {
  return (
    <header className={navbarStyles.header}>
        <nav className={navbarStyles.nav} role='navigations'>
            <div className={navbarStyles.container}>
                {/* BRAND LOGO */}
                <div className={navbarStyles.brandContainer}>
                    <div className={navbarStyles.logoContainer}>

                    </div>
                </div>
            </div>
        </nav>

    </header>
  )
}

export default Navbar