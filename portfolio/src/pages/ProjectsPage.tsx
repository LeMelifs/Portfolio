import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import { projects } from '../data/projects';
import { Project } from '../types/Project';
import PageContainer from "../components/PageContainer.tsx";
import Title from "../components/Title.tsx";
import { FaGithub } from 'react-icons/fa';

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 30px;
  background-color: ${({active}) => (active ? '#5F9EA0' : '#DCDCDC')};
  color: ${({active}) => (active ? '#fff' : '#808080')};
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  font-family: DejaVu Sans Mono, monospace;

  &:hover {
    background-color: ${({active}) => (active ? '#008B8B' : '#d0d0d0')};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const ProjectCard = styled.div`
  background-color: #DCDCDC;
  border: 2px solid #d0d0d0;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  justify-content: space-between; 
  min-height: 120px;

  &:hover {
    transform: scale(1.03);
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  text-align: justify;
  color: black;
  font-family: Courier New, monospace;
`;

const ProjectTechnologies = styled.div`
  margin-top: -15px;
  font-size: 0.9rem;
  text-align: left;
  font-weight: bold;
  font-family: Courier New, monospace;
  color: #696969;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  position: relative;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #DC143C;
  }
`;

const GitHubIcon = styled.a`
  position: absolute;
  bottom: 10px;
  right: 37px;
  font-size: 2rem;
  color: #5F9EA0;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #008B8B;
    transform: scale(1.1);
  }
`;

export const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const uniqueTechnologies = useMemo(() => {
    return Array.from(new Set(projects.flatMap((project) => project.technologies)));
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
    );
  }, [selectedTech]);

  const handleModalClose = () => setSelectedProject(null);

  return (
    <PageContainer>
      <FilterContainer>
        <FilterButton
          active={selectedTech === 'All'}
          onClick={() => setSelectedTech('All')}
        >
          All
        </FilterButton>
        {uniqueTechnologies.map((tech) => (
          <FilterButton
            key={tech}
            active={selectedTech === tech}
            onClick={() => setSelectedTech(tech)}
          >
            {tech}
          </FilterButton>
        ))}
      </FilterContainer>

      <ProjectsGrid>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >
            <Title>{project.title}</Title>
            <ProjectTechnologies>
                <span style={{ color: "#5F9EA0" }}>❤ </span>{project.technologies.join(', ')}
            </ProjectTechnologies>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {selectedProject && (
        <ModalOverlay onClick={handleModalClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={handleModalClose}>&times;</ModalCloseButton>
            <Title>{selectedProject.title}</Title>
            <ProjectTechnologies>
                <span style={{ color: "#5F9EA0" }}>❤ </span>{selectedProject.technologies.join(', ')}
            </ProjectTechnologies>
            <ProjectDescription>{selectedProject.description}</ProjectDescription>
            <br></br>
            <GitHubIcon
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaGithub />
            </GitHubIcon>
            </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default Projects;
