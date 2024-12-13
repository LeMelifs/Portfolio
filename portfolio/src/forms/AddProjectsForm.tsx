import React, {useContext} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { addProject } from "../store/projectsSlice";
import { setTitle, setDescription, setTechnologies, setLink, resetForm } from "../store/projectFormSlice";
import { StyledForm } from "../components/form/StyledForm";
import { StyledInput } from "../components/form/StyledInput";
import { StyledButton } from "../components/form/StyledButton";
import { StyledTextarea } from "../components/form/StyledTextarea";
import { Title } from "../components/Title";
import { v4 as uuidv4 } from 'uuid';
import {ThemeContext} from "../context/ThemeContext.tsx";


export const AddProjectForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { theme } = useContext(ThemeContext);

  const { title, description, technologies, link } = useSelector((state: any) => state.projectForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProject: { technologies: any; link: any; description: any; id: string | Uint8Array; title: any } = {
      id: uuidv4(),
      title,
      description,
      technologies: technologies.split(',').map((tech) => tech.trim()),
      link,
    };

    dispatch(addProject(newProject));
    dispatch(resetForm());
    onClose();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title theme={theme}>Add project</Title>
      <StyledInput
        theme={theme}
        type="text"
        placeholder="*Название"
        value={title}
        onChange={(e) => dispatch(setTitle(e.target.value))}
        required
      />
      <br/>
      <StyledInput
        theme={theme}
        type="text"
        placeholder="*Технологии"
        value={technologies}
        onChange={(e) => dispatch(setTechnologies(e.target.value))}
        required
      />
      <br/>
      <StyledInput
        theme={theme}
        type="url"
        placeholder="*Ссылка на репозиторий"
        value={link}
        onChange={(e) => dispatch(setLink(e.target.value))}
        required
      />
      <br/>
      <StyledTextarea
        theme={theme}
        type="text"
        placeholder="Описание"
        value={description}
        onChange={(e) => dispatch(setDescription(e.target.value))}
      />
      <br/>

      <StyledButton theme={theme} type="submit">Submit</StyledButton>
    </StyledForm>
  );
};
