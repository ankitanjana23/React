import { createContext, useContext, useState } from "react";

const UserContext = createContext();

//Context Provider and wrap up file like App.jsx or main.jsx
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("There is no context Api exist");
  return context;
};

// this is function so we need this many time so need default

//if anyone call UserData it have access to user and setUser
// by using context provider you get access of UserContext.Provider
