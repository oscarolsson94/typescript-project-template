// eslint-disable-next-line import/named
import { AnyAction, Reducer } from "redux";
import { UserState } from "./user/types";
import userReducer from "./user/userReducer";

interface RootReducer {
  //add all reducers to interface
  userState: Reducer<UserState, AnyAction>;
}

//add all reducers to export as one
export const rootReducer: RootReducer = {
  userState: userReducer,
};
