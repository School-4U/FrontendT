import React from "react";
import GlobalStyles from "../components/styles/Global";
import LoginForm from "./LoginForm";
import {
  ContainerDiv,
  LoginLeft,
  LoginWelcome,
  LoginRight,
} from "../components/styles/Login.styled";
import SVGLogo from "../../public/assets/SVGLogo";
import { GoogleOAuthProvider } from "@react-oauth/google";

const ClientId =
  "193762191190-fgbm80sm4g6mam8pnjgs5fjvo6klcbik.apps.googleusercontent.com";

export const Login = () => {
  return (
    <GoogleOAuthProvider clientId={ClientId}>
      <ContainerDiv>
        <GlobalStyles />
        <LoginLeft>
          <div>
            <SVGLogo />
            <LoginWelcome>Welcome Back!</LoginWelcome>
          </div>
        </LoginLeft>
        <LoginRight>
          <LoginForm />
        </LoginRight>
      </ContainerDiv>
    </GoogleOAuthProvider>
  );
};
