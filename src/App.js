import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Sidebar from "./components/Sidebar";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="9657031051-8ke7ajjfff0fcon555pqjvvsggvbrajr.apps.googleusercontent.com">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
