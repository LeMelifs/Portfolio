import axios from 'axios';
import {Project} from '../types/Project';

const GITHUB_API_URL = 'https://api.github.com';

export const fetchRepos = async (username: string): Promise<Project[]> => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
    return response.data.map((repo: any) => ({
      id: repo.id,
      title: repo.name,
      description: repo.description || 'Описание отсутствует',
      technologies: repo.language ? [repo.language] : [],
      link: repo.html_url
    }));
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw new Error('Не удалось выполнить запрос.');
  }
};
