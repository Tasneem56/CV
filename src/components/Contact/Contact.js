import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
    <div className="container">
      <h2>Contact Me</h2>
      <form>
        <div className="form-group">
          <input type="text" className={`form-control ${styles.formControl}`} placeholder="Your Name" />
        </div>
        <div className="form-group">
          <input type="email" className={`form-control ${styles.formControl}`} placeholder="Your Email" />
        </div>
        <div className="form-group">
          <textarea className={`form-control ${styles.formControl}`} rows="5" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className={`btn ${styles.btnSubmit}`}>Send Message</button>
      </form>
    </div>
  </section>
  );
}

export default Contact;
