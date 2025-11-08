import React from 'react';
import '../styles/Projects.css';
import type { Project } from '../types';
import { projectsData } from '../data/portfolioData';
import {
FaGithub
} from 'react-icons/fa';
import { techImages as techImages } from '../data/portfolioData';


// Componente para um único projeto
const ProjectItem: React.FC<Project> = ({ title, description, technologies, liveLink, githubLink, imageSrc, imageAlt }) => {
  return (
    <div className="projeto">
      <div className="descricao-projeto">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tecnologias-usadas">
          <p>tecnologias usadas:</p>
          <div className="icons-tecnologias">
            {technologies.map((tech, index) => {
              const key = tech.toLowerCase();
              const icon = techImages[key];

              return icon ? (
                <img
                  key={index}
                  src={icon}
                  alt={tech}
                  title={tech}
                  className="icone-tecnologia"
                />
              ) : (
                <span key={index}>{tech}</span>
              );
            })}
          </div>

        </div>
        <div className="botoes-projeto">
          <a className="visite-projeto" href={liveLink} target="_blank" rel="noopener noreferrer">Visitar o projeto</a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">{<FaGithub className='git_icon'/>}</a>
        </div>
      </div>
      <a className="imagem-projeto" target="_blank" href={liveLink}>
        <img className="demo-projeto" src={imageSrc} alt={imageAlt} />
      </a>
    </div>
  );
};

// Componente principal de Projetos
const Projects: React.FC = () => {
  return (
    <section className="projetos" id="projetos">
      <div className="projetos-container">
        <h2>Meus projetos</h2>
        <p>Aqui estão alguns dos projetos que desenvolvi</p>
        <div className="projeto-informacoes">
          {projectsData.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
