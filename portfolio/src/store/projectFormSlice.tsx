import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProjectFormState {
  title: string;
  description: string;
  technologies: string;
  link: string;
}

const initialState: ProjectFormState = {
  title: '',
  description: '',
  technologies: '',
  link: '',
};

const projectFormSlice = createSlice({
  name: 'projectForm',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setTechnologies: (state, action: PayloadAction<string>) => {
      state.technologies = action.payload;
    },
    setLink: (state, action: PayloadAction<string>) => {
      state.link = action.payload;
    },
    resetForm: (state) => {
      state.title = '';
      state.description = '';
      state.technologies = '';
      state.link = '';
    },
  },
});

export const { setTitle, setDescription, setTechnologies, setLink, resetForm } = projectFormSlice.actions;

export default projectFormSlice.reducer;
