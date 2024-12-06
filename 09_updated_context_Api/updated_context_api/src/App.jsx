import React from "react";
import { ContextProvider } from "./context/UserContext";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <ContextProvider>
      <Login />
      <Profile />
    </ContextProvider>
  );
}

export default App;
