import React from 'react';
import '../styles/Projects.css';
import type { Project } from '../types';
import { projectsData, techImages, techLabels } from '../data/portfolioData';
import { FaGithub } from 'react-icons/fa';

const ProjectItem: React.FC<Project> = ({
  title,
  description,
  technologies,
  liveLink,
  githubLink,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="projeto">
      <div className="descricao-projeto">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="tecnologias-usadas">
          <p>Tecnologias usadas:</p>
          <div className="icons-tecnologias">
            {technologies.map((tech) => (
              <img
                key={tech}
                src={techImages[tech]}
                alt={techLabels[tech]}
                title={techLabels[tech]}
                className="icone-tecnologia"
              />
            ))}
          </div>
        </div>

        <div className="botoes-projeto">
          <a
            className="visite-projeto"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar o projeto
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Repositório no GitHub"
          >
            <FaGithub className="git_icon" />
          </a>
        </div>
      </div>

      <a
        className="imagem-projeto"
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="demo-projeto" src={imageSrc} alt={imageAlt} />
      </a>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="projetos" id="projetos">
      <div className="projetos-container">
        <h2>Meus projetos</h2>
        <p>Aqui estão alguns dos projetos que desenvolvi</p>

        <div className="projeto-informacoes">
          {projectsData.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
