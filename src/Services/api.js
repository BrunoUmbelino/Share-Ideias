import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const LoginAPI = async (username, password) => {
  const response = await api.post("/sign-in", {
    username: username,
    password: password,
  });
  return response.data;
};

export const RegisterAPI = async ({ username, password }) => {
  const response = await api.post("/sign-up", {
    username,
    password,
  });
  return response;
};

export const ForgotPasswordAPI = async (username) => {
  try {
    const response = await api.get("/forgot-password/" + username);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const FeedsAPI = async () => {
  const response = await api.get("/feeds");
  return response;
};

export const FeedAPI = async (newPost) => {
  const response = await api.post("/feed", {
    content: newPost,
  });
  return response;
};

export const ReactionAPI = async ({ feedId, like, love }) => {
  const response = await api.post("/reaction", {
    feedId,
    like,
    love,
  });
  return response;
};
