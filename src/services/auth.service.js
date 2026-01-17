import { api } from "./api";
export const register = async (userData) => {
  return api.post("users", {
    ...userData,
    createdAt: new Date().toISOString(),
  });
};
export const login = async (email, password) => {
  const users = await api.get(`users?email=${email}&password=${password}`);
  return users.length ? users[0] : null;
};
