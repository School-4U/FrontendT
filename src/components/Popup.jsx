import { useState } from "react";
import { Content, PopupButton, PopupContainer, PopupValue, Image} from "./styles/Container.styled";
import { SignB } from "./styles/Header.styled";

import { Link } from "react-router-dom";


export const Popup = () => {
    const [Open, SetOpen] = useState(true)

    const togglePopup = () => {
        SetOpen(false);
    }
  return (
    <>
    {Open &&(
      <>
        <PopupContainer>
         <Content>
          <PopupValue>
            <Image />
            
          <h4>Select Type of User</h4>
           <div className="buttons">
           <Link to="/parent">
           <SignB>Parent</SignB>
           </Link>
        <PopupButton>School Owner</PopupButton>
        <button onClick={togglePopup}>Close</button>
           </div>

          </PopupValue>
       
       
        </Content>
        </PopupContainer>
        </>
    )}
    </>
  )
}
