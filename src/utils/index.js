import { API_URL } from '../constant';

export const getAccessToken = () => localStorage.getItem('accessToken');

const updateAccessToken = async () => {
  const response = await fetch(`${API_URL}/auth/refresh`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const new_token = await response.json();
  localStorage.setItem('accessToken', new_token.accessToken);
  return new_token.accessToken;
};

const searchArticlesWithToken = async (token, userInput) => {
  const response = await fetch(`${API_URL}/articles/search/${userInput}`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Response not OK');
  }
  return response.clone().json();
};

export const searchArticles = async (userInput) => {
  const token = getAccessToken();

  try {
    return await searchArticlesWithToken(token, userInput);
  } catch (error) {
    const newToken = await updateAccessToken();
    return searchArticlesWithToken(newToken, userInput);
  }
};

const fetchArticlesWithToken = async (token) => {
  const response = await fetch(`${API_URL}/articles`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Response not OK');
  }

  return response.json();
};

export const fetchArticles = async () => {
  const token = getAccessToken();
  try {
    return await fetchArticlesWithToken(token);
  } catch (error) {
    const newToken = await updateAccessToken();
    return fetchArticlesWithToken(newToken);
  }
};
