import style from './Skills.module.css';
import {useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Skills() {
  const [hovered, setHovered] = useState(false);
  return (
    <section id="skills" className={style.skills}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className={style.skill}>
              <h2 style={{ color: `var(--main-color)` }}>Skills : </h2>
              <ul>
                <li><i className="fab fa-html5" style={{ color: `var(--secondary-color)` }}></i> HTML5</li>
                <li><i className="fab fa-css3-alt" style={{ color: `var(--main-color)` }}></i> CSS3</li>
                <li><i className="fab fa-js" style={{ color: `#ffd600` }}></i> JavaScript</li>
                <li><i className="fab fa-bootstrap" style={{ color: `#7c18f8` }}></i> Bootstrap5</li>
                <li><i className="fab fa-react" style={{ color: `var(--main-color)` }}></i> React js</li>

              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className={style.box}>
            <div
      className={style.shape}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className={style.code}>{hovered ? '>_<' : '>_'}</p>
    </div>

            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Skills;
