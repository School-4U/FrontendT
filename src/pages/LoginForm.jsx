import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../components/AuthContext"

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Login = styled.h2`
  color: #000;
  font-style: 3rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled(Field)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3rem;
  padding: 1.8rem 1.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #6e7fd7;
  outline: none;
  font-size: 1rem;
  align-items: center;
  border-radius: 1.2rem;
  gap: 24px;
  flex-shrink: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
  }
`;

const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const Button = styled.button`
  display: flex;
  width: 65%;
  height: 3.5rem;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  border-radius: 25px;
  font-size: 1.2rem;
  background: linear-gradient(0deg, #6e7fd7 0%, #6e7fd7 100%), #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  color: #fff;
  outline: none;
  border: none;
  font-weight: bold;
  margin-inline: auto;
`;

const CustomCheckbox = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  left: 2rem;

  input {
    opacity: 0;
    position: absolute;
  }

  span {
    position: absolute;
    top: 0;
    left: -2rem;
    height: 20px;
    width: 20px;
    border: 2px solid #fa9907;
    background-color: #fff;
  }

  input:checked + span::after {
    content: "\u2713"; // Unicode character for checkmark
    font-size: 1rem;
    color: #fa9907;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const RememberMeLink = styled(Link)`
  font-size: 12px;
  margin-left: 5px;
  color: #fa9907;
  float: right;
`;

const SignUp = styled.div`
  font-size: 0.8rem;
  margin-top: 1rem;
  text-align: center;
  color: #000;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;

  & a {
    color: #fa9907;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #2f2f2f;

  & span {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Auth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #2f2f2f;
  width: 100%;
`;

const StyledGoogleLogin = styled(GoogleLogin)`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid #6e7fd7;
  outline: none;
  font-size: 1rem;
  align-items: center;
  border-radius: 1.2rem;
  gap: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  color: #1e1e1e;
  background: linear-gradient(
      0deg,
      rgba(254, 254, 255, 0.42) 0%,
      rgba(254, 254, 255, 0.42) 100%
    ),
    #fff;
`;

// Validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

// Dummy authentication function (replace with actual API call)

const LoginForm = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (response) => {
    console.log("Google Login Success:", response);
    // Handle the successful login, authenticate the user, etc.
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google Login Error:", error);
    // Handle the login failure, show an error message, etc.
  };


  const authenticateUser = async (values) => {
    console.log("User credentials:", values);

    try{
      const response = await axios.post(
        "https://backend-production-b20a.up.railway.app/users/login",
        {
          email: values.email,
          password: values.password
        }
      );

      const getData = await axios.get(
        `https://backend-production-b20a.up.railway.app/users/getUser/?email=${values.email}&password=${values.password}`
        
      );

      console.log(getData);
      // toast.success("Login successful");

      setIsLoggedIn(true);
      if(getData.data.data.type === "parent"){
        navigate("/dashboard",
        { 
          state: getData.data.data
        }
    );
      }

    if(getData.data.data.type === "school"){
      navigate("/Schooldashboard",
      { 
        state: getData.data.data
      }
  );
    }
     
    } catch (error) {
      // setError(error.message);
      console.error("Signup failed:", error);
    }
  };

  return (
    <>
      <Login>Log In</Login>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          authenticateUser(values);
          setSubmitting(false);
        }}
      >
        <Form>
          <FormGroup>
            {/* <Label htmlFor="email">Email</Label> */}
            <Input type="email" id="email" name="email" placeholder="Email" />
            <ErrorMessageStyled name="email" component="div" />
          </FormGroup>

          <FormGroup>
            {/* <Label htmlFor="password">Password</Label> */}
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessageStyled name="password" component="div" />
          </FormGroup>

          <FormGroup>
            <CustomCheckbox>
              <Input type="checkbox" id="rememberMe" name="rememberMe" />
              <span>{"  "}</span>
              <Label htmlFor="rememberMe">Remember me</Label>
            </CustomCheckbox>

            <RememberMeLink to="/forgot-password">
              Forgot Password?
            </RememberMeLink>
          </FormGroup>

          <Button type="submit">Log In</Button>

          <SignUp>
            Dont have an account? <Link to="/popup">Sign Up</Link>
          </SignUp>

          <Divider>
            <svg
              width="252"
              height="1"
              viewBox="0 0 252 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="252" y2="0.5" stroke="#2F2F2F" />
            </svg>
            <span>OR</span>
            <svg
              width="254"
              height="1"
              viewBox="0 0 254 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="254" y2="0.5" stroke="#2F2F2F" />
            </svg>
          </Divider>
          <Auth>
            <StyledGoogleLogin
              className="google-login-button"
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </Auth>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
