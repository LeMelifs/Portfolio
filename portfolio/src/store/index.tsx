 import { configureStore } from '@reduxjs/toolkit';
 import projectsReducer from './projectsSlice';

 export const store = configureStore({
     reducer: {
         projects: projectsReducer,
     },
 });

 store.subscribe(() => {
    localStorage.setItem('projects', JSON.stringify(store.getState().projects.items));
 })

 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;