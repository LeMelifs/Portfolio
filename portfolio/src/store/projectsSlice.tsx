import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Project} from '../types/Project';
import {fetchRepos} from '../services/githubService';

interface ProjectsState {
  items: Project[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const preloadedState: ProjectsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchProjectsFromGitHub = createAsyncThunk(
  'projects/fetchFromGitHub',
  async (username: string, { rejectWithValue }) => {
    try {
        return await fetchRepos(username);
    }
    catch (error: any) {
      return rejectWithValue(error.response?.data || 'Неизвестная ошибка');
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectsFromGitHub.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProjectsFromGitHub.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProjectsFromGitHub.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setProjects, addProject } = projectsSlice.actions;
export default projectsSlice.reducer;
