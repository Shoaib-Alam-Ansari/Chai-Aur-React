import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";
import ThemeSwither from "./Components/ThemeSwither";

function App() {
  return (
    <div className="d-flex gap-4 flex-column justify-content-center align-items-center bg-secondary" style={{height: "100vh"}}>
      <UserContextProvider>
        <Login />
        <Profile />
        <ThemeSwither />
      </UserContextProvider>
    </div>
  );
}

export default App;
