 import { createSlice, PayloadAction } from '@reduxjs/toolkit';
 import { Project } from '../types/Project';
 import { projects as projectsData } from "../data/Projects";

 interface ProjectsState {
     items: Project[];
 }

 const preloadedState: ProjectsState = {
     items: JSON.parse(localStorage.getItem('projects')) || projectsData,
 };

 const projectsSlice = createSlice({
     name: 'projects',
     initialState: preloadedState,
     reducers: {
         setProjects(state, action: PayloadAction<Project[]>) {
             state.items = action.payload;
         },
         addProject(state, action: PayloadAction<Project>) {
             state.items.push(action.payload);
         },
     },
 });

 export const { setProjects, addProject } =
     projectsSlice.actions;

 export default projectsSlice.reducer;