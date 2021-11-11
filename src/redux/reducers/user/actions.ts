import { signInUser } from "../../../api/specificCalls/authenticateApiCall";
import {
  UserCredentials,
  UserSignIn,
} from "../../../api/specificCalls/Interfaces/IAuthenticate";
// import { deleteSingleUserById, getAllUsers, getSingleUserById, updateSingleUserById, createUser } from "../../../api/specificCalls/userApiCall";
import { AppThunk } from "../../store";
import { AddUser, UserState } from "./types";
import { userSlice } from "./userReducer";

//add all future actions for the userReducer in here:
export const { setLoading, setErrors, setUser, resetUser } = userSlice.actions;

// SET SIGNED IN USER
export const setSignedInUser = (user: UserCredentials): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const request = await signInUser(user);
      dispatch(setUser(request));
      dispatch(setLoading(false));
      localStorage.setItem("user", JSON.stringify(request));
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        dispatch(setErrors(error.message));
        dispatch(setLoading(false));
      }
    }
  };
};

export const setUserAction = (user: UserSignIn): AppThunk => {
  return async (dispatch) => {
    dispatch(setUser(user));
  };
};

export const resetUserAction = (): AppThunk => {
  return async (dispatch) => {
    dispatch(resetUser());
  };
};
//GETALL
// export const getUsers = (): AppThunk => {
//     return async dispatch => {
//         dispatch(setLoading(true))
//         try{
//             const data = await getAllUsers();
//             dispatch(setUsers(data))
//             dispatch(setLoading(false))
//         } catch(error){
//             if(error instanceof Error){
//                 console.log(error.message)
//                 dispatch(setErrors(error.message))
//                 dispatch(setLoading(false))
//             }
//         }
//     }
// }

//GETBYID
// export const getUserById = (id: string): AppThunk => {
//     return async dispatch => {
//         dispatch(setLoading(true))
//         try{
//             const data = await getSingleUserById(id);
//             dispatch(setUsers(data))
//             dispatch(setLoading(false))

//         } catch(error){
//             if(error instanceof Error){
//                 console.log(error.message)
//                 dispatch(setErrors(error.message))
//                 dispatch(setLoading(false))
//             }
//         }
//     }
// }

//DELETEBYID
// export const deleteUserById = (id: string): AppThunk => {
//     return async dispatch => {
//         dispatch(setLoading(true));
//         try{
//             const data = await deleteSingleUserById(id);
//             console.log(data)
//             dispatch(setUsers(data))
//             dispatch(setLoading(false))

//         } catch(error){
//             if(error instanceof Error){
//                 console.log(error.message)
//                 dispatch(setErrors(error.message))
//                 dispatch(setLoading(false))
//             }
//         }
//     }
// }

//CREATEUSER
// export const addUser = (newObj: AddUser): AppThunk => {
//     return async dispatch => {
//         dispatch(setLoading(true));
//         try{
//             const data = await createUser(newObj);
//             dispatch(setUsers(data))
//             dispatch(setLoading(false))
//         } catch(error){
//             if(error instanceof Error){
//                 console.log(error.message)
//                 dispatch(setErrors(error.message))
//                 dispatch(setLoading(false))
//             }
//         }
//     }
// }

//UPDATEEUSERBYID
// export const updateUserById = (id: string, newObj: AddUser): AppThunk => {
//     return async dispatch => {
//         dispatch(setLoading(true));
//         try{
//             const data = await updateSingleUserById(id, newObj);
//             dispatch(setUsers(data))
//             dispatch(setLoading(false))
//         } catch(error){
//             if(error instanceof Error){
//                 console.log(error.message)
//                 dispatch(setErrors(error.message))
//                 dispatch(setLoading(false))
//             }
//         }
//     }
// }
