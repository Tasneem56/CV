import style from './Skills.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Skills() {
  return (
    <section id="skills" className={style.skills}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className={style.skill}>
              <h2 style={{ color: `var(--main-color)` }}>Technical Skills : </h2>
              <ul>
                <li><i className="fab fa-html5" style={{ color: `var(--secondary-color)` }}></i> HTML5</li>
                <li><i className="fab fa-css3-alt" style={{ color: `var(--main-color)` }}></i> CSS3</li>
                <li><i className="fab fa-js" style={{ color: `#ffd600` }}></i> JavaScript / ES6</li>
                <li><i className="fab fa-bootstrap" style={{ color: `#7c18f8` }}></i> Bootstrap5</li>
                <li><i className="fab fa-react" style={{ color: `var(--main-color)` }}></i> React.js</li>
                <li><i className="fas fa-gear" style={{ color: `#4c8bb8` }}></i> APIs: [Axios, Fetch API]</li>
                <li><i className="fas fa-mobile-screen" style={{ color: `#1e3050` }}></i> Responsive designs</li>
                <li><i className="fab fa-github" style={{ color: `#777` }}></i> Git / Github</li>
                <li><i className="fas fa-file-word" style={{ color: `#4c8bb8` }}></i> Documentation: Word</li>
                <li><i className="fas fa-file-excel" style={{ color: `green` }}></i> Data-Management: Excel</li>

              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className={style.skill}>
              <h2 style={{ color: `var(--main-color)` }}>Soft Skills : </h2>
              <ul>
                <li><i className="fas fa-lightbulb" style={{ color: `#ffd600` }}></i> Problem-Solving</li>
                <li><i className="fas fa-people-arrows" style={{ color: `var(--main-color)` }}></i> Communication</li>
                <li><i className="fas fa-magnifying-glass" style={{ color: `#333` }}></i> Attention to Detail</li>
                <li><i className="fas fa-clock" style={{ color: `#98a2a8` }}></i> Time Management</li>
                <li><i className="fas fa-hand-holding-hand" style={{ color: `#c4a47a` }}></i> Collaboration</li>
                <li><i className="fas fa-puzzle-piece" style={{ color: `var(--secondary-color)` }}></i> Adaptability</li>
                <li><i className="fas fa-brain" style={{ color: `#d7ae8e` }}></i> Creativity</li>
                <li><i className="fas fa-book" style={{ color: `#4c8bb8` }}></i> Rapid Learning</li>
              </ul>
          </div>
          </div>
          <div className='col-sm-12 col-md-4'>
                    <h2 style={{ color: `var(--main-color)` }}>Language Skills : </h2>
                        <div>
                            <div className={style.progHolder}>
                                <h4>Arabic</h4>
                                <div className={style.prog}>
                                    <span style={{ width: '100%' }} data-progress="100%" />
                                </div>
                            </div>
                            <div className={style.progHolder}>
                                <h4>English</h4>
                                <div className={style.prog}>
                                    <span style={{ width: '80%' }} data-progress="80%" />
                                </div>
                            </div>
                        </div>
                    </div>


      </div>
      </div>

    </section>

  );
}

export default Skills;
