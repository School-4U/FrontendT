
import { Content, PopupButton, PopupContainer, Container, Popups} from "./styles/Container.styled";
import { SignB } from "./styles/Header.styled";

import { NavLink } from "react-router-dom";

export const Popup = () => {

  return (
        <>
        <Container>
    <PopupContainer>
      <Content>
      <p>Select Type of User </p>
      <Popups>
      <NavLink to="/Parent">
    <SignB>Parent</SignB>
    </NavLink>
    <NavLink to="/User">
      <PopupButton>School</PopupButton>
    </NavLink>
    
    
      </Popups>
      </Content>
  
    </PopupContainer>
        </Container>

    </>
    )}




    
