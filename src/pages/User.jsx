import {
  Container,
  Formgroup,
  StyledField,
  FormContainer,
  FormButton,
  ButtonLink,
  StyledP,
  Lines,
  StyledSignInButton,
} from "../components/styles/Signup.styled";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

//   Form to be filled by School Owners

const clientId =
  "193762191190-fgbm80sm4g6mam8pnjgs5fjvo6klcbik.apps.googleusercontent.com";

export const User = () => {
  const onSuccess = (response) => {
    console.log("Google login success:", response);
    // Handle success (e.g., update state, authenticate user, etc.)
  };

  const onFailure = (error) => {
    console.error("Google login failure:", error);
    // Handle failure (e.g., display an error message)
  };

  const initialValues = {
    schoolName: "",
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    schoolName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    location: Yup.string().required("Location is Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    // Form submission logic here
    console.log("Form submitted with values:", values);
    setSubmitting(false);
  };
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name || !address || !password) {
      toast.error('Please fill out all fields');
      return;
    }

    try {
      const response = await axios.post("https://backend-production-b20a.up.railway.app/users/sendotpForSch", {
        email,
        name,
        address,
        password,
      });

      

      console.log(response.data);
      toast.success('Signup successful');

      // Navigate to the dashboard upon successful form submission
      navigate('/Verification');
    } catch (error) {
      // setError(error.message);
      console.error('Signup failed:', error);
    }
  };


  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <FormContainer>
            <h3>Sign up</h3>
            <p>Enter your details to register</p>
            <Formgroup>
              <StyledField
                type="text"
                id="schoolName"
                name="schoolName"
                placeholder="School Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <ErrorMessage name="schoolName" component="div" />
            </Formgroup>

            <Formgroup>
              <StyledField
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ErrorMessage name="email" component="div" />
            </Formgroup>
            <Formgroup>
              <StyledField
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <ErrorMessage name="location" component="div" />
            </Formgroup>

            <Formgroup>
              <StyledField
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ErrorMessage name="password" component="div" />
            </Formgroup>

            <Formgroup>
              <StyledField
                type="confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </Formgroup>

            <FormButton type="submit" onClick={handleSubmit}>Sign Up</FormButton>
            <ToastContainer />
            <StyledP>
              Already have an account?{" "}
              <ButtonLink to="/login">Log In</ButtonLink>
            </StyledP>
            <Lines>
              <svg
                width="252"
                height="1"
                viewBox="0 0 252 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="252" y2="0.5" stroke="#2F2F2F" />
              </svg>
              <p> OR </p>
              <svg
                width="252"
                height="1"
                viewBox="0 0 252 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="252" y2="0.5" stroke="#2F2F2F" />
              </svg>
            </Lines>

            <StyledSignInButton id="SignInButton">
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            </StyledSignInButton>
          </FormContainer>
        </Formik>
      </Container>
    </GoogleOAuthProvider>
  );
};
