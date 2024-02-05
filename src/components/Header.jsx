

import { StyledHeader, Nav, StyledButtons, Button, SignB, Logo, Linkul, StyledFontAwesomeIcon } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default function Header() {
  const [active, setActive] = useState(false);
  const close = () =>{
    setActive(false);
  };
  return (
   <StyledHeader>
    <Container>
      <Nav>
      <Logo src="assets/logo.png" alt="Logo for School 4u" />
     <StyledFontAwesomeIcon icon={faBars} onClick={() => setActive(!active)} />
            <Linkul active={active}>
              <li><NavLink to="/" onClick={close}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={close}>About Us</NavLink></li>
              <li><NavLink to="/contact" onClick={close}>Contact Us</NavLink></li>
              <StyledButtons>
                <>
           
              <Button>
                <NavLink to="/login" onClick={close}>Log In</NavLink>
              </Button>
               </>
              <NavLink to="/popup" onClick={close}>
                 <SignB>Sign up</SignB>
              </NavLink>

          </StyledButtons>
           
              </Linkul>
        
      </Nav>

      </Container>
    </StyledHeader>
  );
}

