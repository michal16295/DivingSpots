import React, { createContext, useState, useEffect } from "react";
import globalConstants from "../constants/global";

export const UserContext = createContext({
  user: null,
  loggedIn: false,
  loading: true,
});

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    loggedIn: false,
    loading: true,
  });

  useEffect(() => {
    const token = localStorage.getItem(globalConstants.LOCAL_STR_TOKEN);
    if (token) {
      setState({
        user: token,
        loggedIn: true,
        loading: false,
      });
    } else {
      setState({
        user: null,
        loggedIn: false,
        loading: false,
      });
    }
  }, []);

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};
export default UserProvider;
