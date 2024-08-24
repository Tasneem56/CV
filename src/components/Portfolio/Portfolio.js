import styles from './Portfolio.module.css';

function Portfolio() {
    return (
        <section className={styles.portfolio}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <h2>Hello, I'm <span className={styles.highlight}>Tasneem</span></h2>
                        <p>A passionate Front-End Developer</p>
                        <a href="#contact" className={`btn btn-primary ${styles.btnPrimary}`}>Contact Me</a>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <img src="./imgs/avatar.jpg" alt="Your Name" className="img-fluid rounded-circle" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
