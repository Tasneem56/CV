import styles from './Projects.module.css';

const projectsData = [
  {
    title: 'My Grad. Project (منصة معا نتعلم)',
    description: `(React.js - BootStrap - CSS - API - Axios - AOS animation)`,
    image: './imgs/pro1.jpeg',
    link: 'https://graduation-project-doman.vercel.app/'
  },
  {
    title: 'Kasper',
    description: ' (HTML - CSS)',
    image: './imgs/pro2.jpeg',
    link: 'https://tasneem56.github.io/template/'
  },
  {
    title: 'Template',
    description: ' (HTML - CSS)',
    image: './imgs/pro3.jpeg',
    link: 'https://tasneem56.github.io/template1/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className="row">
        <h2 style={{ color: `var(--main-color)` }}>My Projects : </h2>
          {projectsData.map((project, index) => (
            <div key={index} className="col-sm-12 col-md-4">
              <div className={styles.project}>
                <div className={styles.box}>
                <img src={project.image} alt={project.title} />
                <div className={styles.caption}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                </div>
                </div>
                <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
