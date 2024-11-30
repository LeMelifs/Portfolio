import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Project } from "../types/Project";
import { PageContainer } from "../components/PageContainer";
import { Title } from "../components/Title";
import {FaGithub, FaSyncAlt} from "react-icons/fa";
import {AppDispatch, RootState} from "../store";
import { useSelector, useDispatch } from "react-redux";
import { AddProjectForm } from "../forms/AddProjectsForm";
import { Modal } from "../components/Modal";
import { fetchProjectsFromGitHub } from "../store/projectsSlice";
import {BounceLoader, ClipLoader} from "react-spinners";
import {BiRefresh} from "react-icons/bi";

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
  background-color: ${({ active }) => (active ? "#5F9EA0" : "#DCDCDC")};
  color: ${({ active }) => (active ? "#fff" : "#808080")};
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  font-family: DejaVu Sans Mono, monospace;

  &:hover {
    background-color: ${({ active }) => (active ? "#008B8B" : "#d0d0d0")};
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
  background-color: #dcdcdc;
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
  margin-bottom: 40px;
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

const AddButton = styled.button`
  position: fixed;
  bottom: 55px;
  right: 20px;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: #5f9ea0;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #008b8b;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const GitHubIcon = styled.a`
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 2rem;
  color: #5f9ea0;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #008b8b;
    transform: scale(1.1);
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: black;
  font-size: 1rem;
  font-weight: lighter;
  margin-top: 20px;
  font-family: Courier New, monospace;
`;

const ReloadButton = styled.button`
  position: fixed;
  bottom: 55px;
  right: 90px; 
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: #d0d0d0;
  color: white;
  font-size: 1.1rem;
  padding-top: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #808080;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Projects = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector((state: RootState) => state.projects.items);
  const status = useSelector((state: RootState) => state.projects.status);
  const [selectedTech, setSelectedTech] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const uniqueTechnologies = useMemo(() => {
    return Array.from(new Set(projects.flatMap((project) => project.technologies)));
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (project) =>
        selectedTech === "All" ? true : project.technologies.includes(selectedTech)
    );
  }, [selectedTech, projects]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjectsFromGitHub('LeMelifs'));
    }
  }, [dispatch, status]);

  const handleReload = () => {
    dispatch(fetchProjectsFromGitHub('LeMelifs'));
  };

  const handleModalClose = () => setSelectedProject(null);

  return (
    <PageContainer>
      <FilterContainer>
        <FilterButton active={selectedTech === "All"} onClick={() => setSelectedTech("All")}>
          All
        </FilterButton>
        {uniqueTechnologies.map((tech) => (
          <FilterButton key={tech} active={selectedTech === tech} onClick={() => setSelectedTech(tech)}>
            {tech}
          </FilterButton>
        ))}
      </FilterContainer>

      {status === 'loading' ? (
        <ClipLoader size={50} color='#DCDCDC' />
      ) : status === 'failed' ? (
        <ErrorMessage>Не удалось загрузить проекты. Попробуйте снова позже.</ErrorMessage>
      ) : (
        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} onClick={() => setSelectedProject(project)}>
              <Title>{project.title}</Title>
              <ProjectTechnologies>
                <span style={{ color: "#5F9EA0" }}>❤ </span>{project.technologies.join(", ")}
              </ProjectTechnologies>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      )}

      {selectedProject && (
        <Modal onClose={handleModalClose}>
          <Title>{selectedProject.title}</Title>
          <ProjectTechnologies>
            <span style={{ color: "#5F9EA0" }}>❤ </span>{selectedProject.technologies.join(", ")}
          </ProjectTechnologies>
          <ProjectDescription>{selectedProject.description}</ProjectDescription>
          <br />
          <GitHubIcon href={selectedProject.link} target="_blank" rel="noopener noreferrer">
            <BiRefresh />
          </GitHubIcon>
        </Modal>
      )}

      {isFormOpen && (
        <Modal background="#DCDCDC" onClose={() => setIsFormOpen(false)}>
          <AddProjectForm />
        </Modal>
      )}

      <AddButton onClick={() => setIsFormOpen(true)}>+</AddButton>
      <ReloadButton onClick={handleReload}>
        <FaSyncAlt />
      </ReloadButton>
    </PageContainer>
  );
};
