import {
  SignUp,
  Container,
  Title,
  Formgroup,
  StyledField,
  FormContainer,
  FormButton,
  ButtonLink,
  StyledP,
  Lines,
  Line,
} from "../components/styles/Signup.styled";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId =
  "193762191190-fgbm80sm4g6mam8pnjgs5fjvo6klcbik.apps.googleusercontent.com";

const onSuccess = (response) => {
  console.log("Google login success:", response);
  // Handle success (e.g., update state, authenticate user, etc.)
};

const onFailure = (error) => {
  console.error("Google login failure:", error);
  // Handle failure (e.g., display an error message)
};

export const Signup = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    // You can handle form submission logic here
    console.log("Form submitted with values:", values);
    setSubmitting(false);
  };

  return (
    <Container>
      <Title>
        School<span>4U</span>
      </Title>

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
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <ErrorMessage name="firstName" component="div" />
          </Formgroup>

          <Formgroup>
            <StyledField
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <ErrorMessage name="lastName" component="div" />
          </Formgroup>

          <Formgroup>
            <StyledField
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" />
          </Formgroup>

          <Formgroup>
            <StyledField
              type="password"
              id="password"
              name="password"
              placeholder="Password"
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

          <FormButton type="submit">Sign Up</FormButton>
          <StyledP>
            Already have an account? <ButtonLink to="/login">Log In</ButtonLink>
          </StyledP>
          {/*     
        <Lines>
          <Line />
          <p>Or</p>
          <Line />
        </Lines> */}

          <div id="SignInButton">
            <GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div>
        </FormContainer>
      </Formik>
    </Container>
  );
};
