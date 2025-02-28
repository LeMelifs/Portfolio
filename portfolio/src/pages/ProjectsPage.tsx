import React, { useEffect, useMemo, useState, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Project } from "../types/Project";
import { PageContainer } from "../components/PageContainer";
import { Title } from "../components/Title";
import { FaSyncAlt } from "react-icons/fa";
import { AppDispatch, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { AddProjectForm } from "../forms/AddProjectsForm";
import { Modal } from "../components/Modal";
import { fetchProjectsFromGitHub } from "../store/projectsSlice";
import { ClipLoader } from "react-spinners";
import { ThemeContext } from "../context/ThemeContext";

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap
`;

const FilterButton = styled.button<{ active: boolean; theme: string }>`
  padding: 8px 16px;
  border: none;
  border-radius: 30px;
  background-color: ${({ active, theme }) =>
    active ? "#5F9EA0" : theme === "light" ? "#DCDCDC" : "#444"};
  color: ${({ active, theme }) =>
    active ? "#fff" : theme === "light" ? "#808080" : "#CCC"};
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  font-family: DejaVu Sans Mono, monospace;
  
  @media (max-width: 600px) {
    display: block; 
    width: 120px; 
    margin-bottom: 10px; 
  }

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? "#008B8B" : theme === "light" ? "#d0d0d0" : "#555"};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const ProjectCard = styled(motion.div)<{ theme: string }>`
  background-color: ${({ theme }) => (theme === "light" ? "#dcdcdc" : "#333")};
  border: 2px solid ${({ theme }) => (theme === "light" ? "#d0d0d0" : "#555")};
  border-radius: 30px;
  padding: 20px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  min-height: 120px;

  &:hover {
    transform: scale(1.03);
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectDescription = styled.p<{ theme: string }>`
  font-size: 0.9rem;
  margin-bottom: 40px;
  text-align: justify;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#DDD")};
  font-family: Courier New, monospace;
`;

const ProjectTechnologies = styled.div<{ theme: string }>`
  margin-top: -15px;
  font-size: 0.9rem;
  text-align: left;
  font-weight: bold;
  font-family: Courier New, monospace;
  color: ${({ theme }) => (theme === "light" ? "#696969" : "#e0e0e0")};
`;

const AddButton = styled(motion.button)`
  position: fixed;
  bottom: 15px;
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

const ReloadButton = styled(motion.button)<{ theme: string }>`
  position: fixed;
  bottom: 15px;
  right: 90px;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => (theme === "light" ? "#d0d0d0" : "#555")};
  color: white;
  font-size: 1.1rem;
  padding-top: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => (theme === "light" ? "#808080" : "#777")};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ErrorMessage = styled.div<{ theme: string }>`
  text-align: center;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#FFF")};
  font-size: 1rem;
  font-weight: lighter;
  margin-top: 20px;
  font-family: Courier New, monospace;
`;

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
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
    if (status === "idle") {
      dispatch(fetchProjectsFromGitHub("LeMelifs"));
    }
  }, [dispatch, status]);

  const handleReload = () => {
    dispatch(fetchProjectsFromGitHub("LeMelifs"));
  };

  const handleModalClose = () => setSelectedProject(null);

  return (
    <PageContainer justifyContent="normal" theme={theme}>
      <FilterContainer>
        <FilterButton active={selectedTech === "All"} theme={theme} onClick={() => setSelectedTech("All")}>
          All
        </FilterButton>
        {uniqueTechnologies.map((tech) => (
          <FilterButton
            key={tech}
            active={selectedTech === tech}
            theme={theme}
            onClick={() => setSelectedTech(tech)}
          >
            {tech}
          </FilterButton>
        ))}
      </FilterContainer>

      {status === "loading" ? (
        <ClipLoader size={50} color={theme === "light" ? "#DCDCDC" : "#FFF"} />
      ) : status === "failed" ? (
        <ErrorMessage theme={theme}>Не удалось загрузить проекты. Попробуйте снова позже.</ErrorMessage>
      ) : (
        <ProjectsGrid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              theme={theme}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
            >
              <Title theme={theme}>{project.title}</Title>
              <ProjectTechnologies theme={theme}>
                <span style={{ color: "#5F9EA0" }}>❤ </span>
                {project.technologies.join(", ")}
              </ProjectTechnologies>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      )}

      {selectedProject && (
        <Modal onClose={handleModalClose}>
          <Title theme={theme}>{selectedProject.title}</Title>
          <ProjectTechnologies theme={theme}>
            <span style={{ color: "#5F9EA0" }}>❤ </span>
            {selectedProject.technologies.join(", ")}
          </ProjectTechnologies>
          <ProjectDescription theme={theme}>{selectedProject.description}</ProjectDescription>
        </Modal>
      )}

      {isFormOpen && (
        <Modal onClose={() => setIsFormOpen(false)}>
          <AddProjectForm />
        </Modal>
      )}

      <AddButton
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsFormOpen(true)}
      >
        +
      </AddButton>
      <ReloadButton
        theme={theme}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={handleReload}
      >
        <FaSyncAlt />
      </ReloadButton>
    </PageContainer>
  );
};
