import React from 'react'
import { navbarStyles } from '../assets/dummyStyles';
import { Clock } from 'lucide-react';

const Navbar = () => {
  return (
    <header className={navbarStyles.header}>
        <div className={navbarStyles.container}>
            <div className={navbarStyles.mainBar}>
                <div className={navbarStyles.brandContainer}>
                    <div className={navbarStyles.brandLogo}>
                        <Clock className={navbarStyles.brandIcon} />
                    </div>
                    
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar