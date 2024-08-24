import React from 'react';
import styles from './Header.module.css';

function Header(){
    return (
        <header className={styles.header}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <h1 className={styles.title}>Tasneem Mohamed</h1>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <nav>
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a href="#about" className={`nav-link ${styles.navLink}`}>About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#skills" className={`nav-link ${styles.navLink}`}>Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#portfolio" className={`nav-link ${styles.navLink}`}>Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#Projects" className={`nav-link ${styles.navLink}`}>Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" className={`nav-link ${styles.navLink}`}>Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
