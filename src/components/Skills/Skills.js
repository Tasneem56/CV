import style from './Skills.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Skills() {
  return (
    <section className="skills">
      <div className="row">
        <div className="col-sm-12 col-md-6">
        <div className={style.container}>
        <div className={style.img}>
            <img src="./imgs/screen.jpg" className={style.image}></img>
        </div>
        <div className={style.skills}>
          <h2>Skills</h2>
          <ul>
            <li><i className="fab fa-html5"></i> HTML</li>
            <li><i className="fab fa-css3-alt"></i> CSS</li>
            <li><i className="fab fa-js"></i> JavaScript</li>
            <li><i className="fab fa-react"></i> React</li>
          </ul>
          </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Skills;
