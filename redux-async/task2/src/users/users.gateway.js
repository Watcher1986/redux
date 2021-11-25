const baseUrl = 'https://api.github.com/users';

export const getUserData = USERNAME =>
  fetch(`${baseUrl}/${USERNAME}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
