import { RootState } from "../../store";
import { UserState } from "./types";

export const userSelector = (state: RootState): UserState => state.userState;
