import React from "react";
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


export const AddProjectForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();

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
      <Title>Add project</Title>
      <StyledInput
        type="text"
        placeholder="*Название"
        value={title}
        onChange={(e) => dispatch(setTitle(e.target.value))}  // Update Redux state on input change
        required
      />
      <br/>
      <StyledInput
        type="text"
        placeholder="*Технологии"
        value={technologies}
        onChange={(e) => dispatch(setTechnologies(e.target.value))}  // Update Redux state on input change
        required
      />
      <br/>
      <StyledInput
        type="url"
        placeholder="*Ссылка на репозиторий"
        value={link}
        onChange={(e) => dispatch(setLink(e.target.value))}  // Update Redux state on input change
        required
      />
      <br/>
      <StyledTextarea
        type="text"
        placeholder="Описание"
        value={description}
        onChange={(e) => dispatch(setDescription(e.target.value))}  // Update Redux state on input change
      />
      <br/>

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};
