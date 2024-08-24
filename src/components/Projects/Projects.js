import styles from './Projects.module.css';

const projectsData = [
  {
    title: 'Project One',
    description: 'bla bla bla bla',
    image: 'project-one.jpg',
    link: 'https://github.com/yourusername/project-one'
  },
  {
    title: 'Project Two',
    description: 'bla bla bla bla',
    image: 'project-two.jpg',
    link: 'https://github.com/yourusername/project-two'
  },
  {
    title: 'Project Three',
    description: 'bla bla bla bla',
    image: 'project-three.jpg',
    link: 'https://github.com/yourusername/project-three'
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2>My Projects</h2>
        <div className="row">
          {projectsData.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className={styles.project}>
                <img src={project.image} alt={project.title} />
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
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
