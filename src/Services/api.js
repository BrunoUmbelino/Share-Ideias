import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQsInVzZXJuYW1lIjoiYnJ1bm8tdW1iZWxpbm8iLCJpYXQiOjE2MjMyNzEzNDcsImV4cCI6MTYyMzI3NDk0N30.9f7UKcc-EEO6HO1szjosHuH3guC8vYmO1BV18WYj-II";

export const LoginAPI = async (user) => {
  try {
    const response = await api.post("/sign-in", {
      username: "bruno-umbelino",
      password: "123456789",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
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
  try {
    const response = await api.get("/feeds");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const Feed = async (postContent) => {
  try {
    const response = await api.post("/feed", {
      content: "Boa tarde",
    });
  } catch (error) {
    console.log(error);
  }
};

export const Reaction = async () => {
  try {
    const response = await api.post("/reaction", {
      feedId: 137,
      like: true,
      love: false,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
