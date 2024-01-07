import { API_URL } from '../constant';

export const getAccessToken = () => localStorage.getItem('accessToken');

const updateAccessToken = async () => {
  try {
    const at_response = await fetch(`${API_URL}/auth/refresh`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const new_token = await at_response.json();
    localStorage.setItem('accessToken', new_token.accessToken);
    return new_token.accessToken;
  } catch (error) {
    console.error('Error updating access token:', error);
    throw error;
  }
};

const searchArticlesWithToken = async (token, userInput) => {
  try {
    const response = await fetch(`${API_URL}/articles/search/${userInput}`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Response not OK');
    }
    const responseData = await response.clone().json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error('Error searching articles:', error);
    throw error;
  }
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
  try {
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
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
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

export const loginRequest = async ({ username, password }) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
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
