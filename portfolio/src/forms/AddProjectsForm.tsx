import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";
import {Project} from "../types/Project.tsx";
import {addProject} from "../store/projectsSlice.tsx";
import {StyledForm} from "../components/form/StyledForm.tsx";
import {StyledInput} from "../components/form/StyledInput.tsx";
import {StyledButton} from "../components/form/StyledButton.tsx";
import {StyledTextarea} from "../components/form/StyledTextarea.tsx";
import {Title} from "../components/Title.tsx";

export const AddProjectForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [link, setLink] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProject: Project = {
      id: Date.now(),
      title,
      description,
      technologies: technologies.split(',').map((tech) => tech.trim()),
      link,
    };

    dispatch(addProject(newProject));
    setSuccess(true);
    onClose();
    setSuccess(false);

  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Add project</Title>
      <StyledInput
        type="text"
        placeholder="*Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
        <br/>
      <StyledInput
        type="text"
        placeholder="*Технологии"
        value={technologies}
        onChange={(e) => setTechnologies(e.target.value)}
        required
      />
        <br/>
      <StyledInput
        type="url"
        placeholder="*Ссылка на репозиторий"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
      />
        <br/>
      <StyledTextarea
        type="text"
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
        <br/>

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};