const apiUrl = 'https://jimohkolawole.xyz/api/v1';

export const emailLogin = async (data) => {
  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response;
  } catch (error) {
    console.error('Failed to login:', error.message);
    throw error;
  }
};

export const isLoggedIn = () => {
  if (localStorage.getItem('token')) {
    return true;
  }

  return false;
};
