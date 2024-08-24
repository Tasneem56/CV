import style from "./About.module.css";
function About() {
    return (
        <section id="about" className={style.about}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <h2 style={{ color: `var(--main-color)` }}>About Me : </h2>
                        <i className={` ${style.react} fab fa-react`} style={{ color: `var(--main-color)` }}></i> 
                        <p className={style.aboutText}>
                            I am a dedicated and passionate front-end developer with experience in building responsive, interactive web applications. I specialize in React.js and have a strong foundation in HTML, CSS, and JavaScript. My goal is to create seamless user experiences with clean, efficient code.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;
