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

export const RegisterAPI = async (user) => {
  try {
    const response = await api.post("/sign-up", {
      username: "bruno-umbelino",
      password: "123456789",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const ForgotPasswordAPI = async (username) => {
  try {
    const response = await api.get("/forgot-password/" + username);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const Feeds = async () => {
  const response = await api.get("/feeds");
  return response;
};

export const Feed = async (newPost) => {
  try {
    const response = await api.post("/feed", {
      content: newPost,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const Reaction = async ({ feedId, like, love }) => {
  console.log(feedId, like, love);
  const response = await api.post("/reaction", {
    feedId,
    like,
    love,
  });
  return response;
};
