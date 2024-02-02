import {
  StyledHeader,
  Nav,
  Linkul,
  Logo,
  Buttons,
  Button,
  SignB,
  MobileScreen,
} from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="assets/logo.png" alt="Logo for School 4u" />
          <MobileScreen>
            <span></span>
            <span></span>
            <span></span>
          </MobileScreen>
          <Linkul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <Buttons>
              <Button>
                <NavLink to="/login">Log In</NavLink>
              </Button>
              <SignB>
                <NavLink to="/signup">Sign Up</NavLink>
              </SignB>
            </Buttons>
          </Linkul>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
