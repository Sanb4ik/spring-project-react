import { API_URL } from '../constant';

export const fetchArticles = async () => {
  try {
    const response = await fetch(`${API_URL}/articles`, {});

    if (response.ok) {
      const result = response.json();
      return result;
    }
  } catch (error) {
    console.error('Error fetching articles:', error);
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
    console.error('Error searching articles:', error);
  }
};

export const createUserRequest = async ({ userName, password }) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
