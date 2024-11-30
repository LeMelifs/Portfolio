import axios from 'axios';
import {Project} from '../types/Project';


const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});


export const fetchRepos = async (username: string): Promise<Project[]> => {
  try {
    const response = await apiClient.get<Project[]>(`/users/${username}/repos`);
    return response.data.map((project: Project) => ({
      id: project.id,
      title: project.name,
      description: project.description || 'Описание отсутствует',
      technologies: project.language ? [project.language] : [],
      link: project.html_url
    }));
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw new Error('Не удалось выполнить запрос.');
  }
};
