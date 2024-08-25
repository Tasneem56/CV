import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <h1 className={styles.title}>Tasneem Mohamed</h1>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <nav>
                            <div className={styles.links}>
                                <span className={styles.icons}>
                                    <span />
                                    <span />
                                    <span />
                                </span>
                                <ul>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#edu">Education</a></li>
                                    <li><a href="#courses">Courses</a></li>
                                    <li><a href="#skills">Skills</a></li>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
