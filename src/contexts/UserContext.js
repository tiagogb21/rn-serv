import React, { createContext, userReducer } from "react";
import { initialState, UserReducer } from "../reducers/UserReducer";

export const userContext = createContext();

export default ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
