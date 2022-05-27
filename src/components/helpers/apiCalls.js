const API_URL = process.env.REACT_APP_API_URL; //"http://localhost:5000";

export const loginApi = async (email, password) => {
  const credentials = { email, password };

  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", 
  });

  return response.json();
};

export const signupApi = async (name, email, password) => {
  // create object holding all data to send to the backend 
  const userData = { name, email, password };

  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    body: JSON.stringify(userData),  // convert JS object to JSON string
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // needed to STORE received cookie
  });

  return response.json();
};

export const logoutApi = async () => {
  const response = await fetch(`${API_URL}/users /logout`, {
    credentials: "include",
  });
  return response.json();
};

export const checkAuthStatusApi = async () => {
  const response = await fetch(`${API_URL}/users/me`, {
    credentials: "include", // needed to send cookie so that backend can verify us
  });
  return response.json();
};

export const fetchBooksApi = async () => {
  const response = await fetch(`${API_URL}/books`, {
    credentials: "include", // needed to send cookie so that backend can verify us
  });
  return response.json();
};
