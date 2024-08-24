import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project">
        <img src="project-thumbnail.jpg" alt="Project Thumbnail" />
        <h3>Project Title</h3>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </section>
  );
}

export default Projects;
