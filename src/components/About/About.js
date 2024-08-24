import style from "./About.module.css";
function About() {
    return (
        <section className={style.about}>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className={style.img}>
                        <img src="./imgs/avatar.jpg"></img>
                    </div>
                    <div className={style.text}>
                        <h1>About Me</h1>
                        <h3>Front-End Developer</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;
