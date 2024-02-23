import {
  StyledHeader,
  Nav,
  StyledButtons,
  Button,
  SignB,
  Logo,
  Linkul,
  StyledFontAwesomeIcon,
} from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./AuthContext";


export default function Header() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [active, setActive] = useState(false);
  const close = () => {
    setActive(false);
  };


  const handleLogout = () => {
    // Implement logout functionality
    setIsLoggedIn(false);
  };

  return (
    
      <StyledHeader>
        <Container>
          <Nav>
            {/* <NavLink to={"/"}> */}
            <Logo src="assets/logo.png" alt="Logo for School 4u" />
            {/* </NavLink> */}
            <StyledFontAwesomeIcon
              icon={faBars}
              onClick={() => setActive(!active)}
            />
            <Linkul active={active}>
              <li>
                <NavLink to="/" onClick={close}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={close}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories" onClick={close}>
                  Categories
                </NavLink>
              </li>

              {isLoggedIn ? (

                <StyledButtons>
                  <>
                    <Button>
                      <NavLink to="/dashboard" onClick={close}>
                        Dashboard
                      </NavLink>
                    </Button>
                  </>
                  {/* onClick={() => {  handleClick2(); }} */}
                  <NavLink to="/" onClick={() => { close(); handleClick(); }}>
                    <SignB>Logout</SignB>
                  </NavLink>
                </StyledButtons>


              ) : (
                <StyledButtons>
                  <>
                    <Button>
                      <NavLink to="/login" onClick={close}>
                        Log In
                      </NavLink>
                    </Button>
                  </>
                  <NavLink to="/popup" onClick={close}>
                    <SignB>Sign up</SignB>
                  </NavLink>
                </StyledButtons>
              )}

            </Linkul>
          </Nav>
        </Container>
      </StyledHeader>
  );
}
