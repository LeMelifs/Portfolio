 import { configureStore } from '@reduxjs/toolkit';
 import projectsReducer from './projectsSlice';
 import contactFormReducer from './contactFormSlice'
 import projectsFormReducer from './projectFormSlice.tsx'

 export const store = configureStore({
     reducer: {
         projects: projectsReducer,
         contactForm: contactFormReducer,
         projectForm: projectsFormReducer
     },
 });

 store.subscribe(() => {
    localStorage.setItem('projects', JSON.stringify(store.getState().projects.items));
 })

 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;