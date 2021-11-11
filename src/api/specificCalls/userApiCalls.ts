import { User } from "../../redux/reducers/user/types";
import { apiRequest, apiRequestId } from "../httpApiClient";

export const getAllUsers = async (token: string): Promise<Array<User>> => {
  return await apiRequest("user", token, "GET");
};

export const getSingleUserById = async (
  id: string,
  token: string
): Promise<User> => {
  return await apiRequestId("user", token, "GET", id);
};

export const deleteSingleUserById = async (
  id: string,
  token: string
): Promise<User> => {
  return await apiRequestId("user", token, "DELETE", id);
};

export const createUser = async (user: User, token: string): Promise<User> => {
  return await apiRequest("user", token, "POST", user);
};

export const updateSingleUserById = async (
  id: string,
  user: User,
  token: string
): Promise<User> => {
  return await apiRequestId("User", token, "PATCH", id, user);
};
