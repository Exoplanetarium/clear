import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <>
            <input className={styles.check} type="checkbox" id='menuToggle' onChange={toggleMenu}/>
            <label className={styles.menuLabel} htmlFor='menuToggle'>
                <span className={styles.menu}> <span className={styles.hamburger} ></span> </span>
                <ul className={styles.menuList} style={{pointerEvents: isOpen ? 'auto' : 'none'}}>
                    <li> 
                        <Link href="./index.js" className={styles.menuLink} style={{cursor: isOpen ? 'pointer' : 'default'}} >
                            Home 
                        </Link>
                    </li>
                    <li>
                        <Link href="./index.js" className={styles.menuLink} style={{cursor: isOpen ? 'pointer' : 'default'}}>
                            Stats
                        </Link>
                    </li>
                    <li> 
                        <Link href="./index.js" className={styles.menuLink} style={{cursor: isOpen ? 'pointer' : 'default'}}>
                            Settings
                        </Link>
                    </li>
                </ul>
            </label>
        </>
    )
}