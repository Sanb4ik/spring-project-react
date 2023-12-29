import { API_URL } from '../constant';

export const fetchArticles = async () => {
  try {
    const response = await fetch(`${API_URL}/articles`, {});

    if (response.ok) {
      const result = response.json();
      return result;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const searchArticles = async (userInput) => {
  try {
    const response = await fetch(`${API_URL}/articles/search/${userInput}`, {});

    if (response.ok) {
      const result = response.json();
      return result;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
