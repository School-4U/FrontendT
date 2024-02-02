

import { StyledHeader, Nav, Linkul, StyledButtons, Button, SignB, Logo, MobileScreen} from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { NavLink } from 'react-router-dom';
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
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
              <StyledButtons>
                <>
           
              <Button>
                <NavLink to="/login">Log In</NavLink>
              </Button>
              <NavLink to="/popup">
                 <SignB>Sign up</SignB>
              </NavLink>

    </StyledButtons>
           
              </Linkul>
        
      </Nav>
>

      </Container>
    </StyledHeader>
  );
}
