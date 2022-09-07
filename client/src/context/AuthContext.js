import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("userOfFacebook")) || null,
  isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  useEffect(()=>{
    localStorage.setItem("userOfFacebook", JSON.stringify(state.user));
    if (state.user !== null) {
      const previousAccounts =JSON.parse(localStorage.getItem("userAccounts")) || [];

      if (
        previousAccounts.some(
          (account) =>
            account._id === state.user._id 
        )
      ) {
        return;
      }
      
      localStorage.setItem(
        "userAccounts",
        JSON.stringify([...previousAccounts, state.user])
      );
      

      
    }
  },[state.user])
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
