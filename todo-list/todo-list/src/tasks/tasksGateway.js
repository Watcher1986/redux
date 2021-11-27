const baseUrl = 'https://614785ed65467e0017384b96.mockapi.io/api/v1/tasks';

export const createTask = async taskData => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    throw new Error('Failed to create task');
  }
};

export const fetchTasksList = async () => {
  const res = await fetch(baseUrl);
  if (res.ok) {
    return res.json();
  }
};

export const updateTask = async (taskId, taskData) => {
  const response = await fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    throw new Error('Failed to update task');
  }
};

export const deleteTask = async taskId => {
  const response = await fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete task');
  }
};
