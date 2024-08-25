import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 style={{ color: `var(--main-color)` }}>Contact Me : </h2>
        <div className={styles.info}>
          <div className={styles.mail}>
          <p className={styles.label}> Feel free to contact me at: </p>
          <a href="mailto:tassnemm70@gmail.com?subject=Contact" class="link">tassnemm70@gmail.com</a>
          </div>
          <div className={styles.social}>
          <p>Find me on :</p>
            <a href="https://github.com/Tasneem56"><i className="fab fa-github" /></a>
            <a href="www.linkedin.com/in/tasneem-mohamed-1b781825b"><i className="fab fa-linkedin" /></a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
