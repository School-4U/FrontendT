import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./components/AuthContext.jsx";


const clientId =
  "http://193762191190-fgbm80sm4g6mam8pnjgs5fjvo6klcbik.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientId}>
        <AuthProvider>
        <App />
        </AuthProvider>
        
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
