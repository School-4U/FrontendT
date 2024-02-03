import { useState } from "react";
import { Content, PopupButton, PopupContainer, PopupValue, Image} from "./styles/Container.styled";
import { SignB } from "./styles/Header.styled";


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
           <SignB>Parent</SignB>
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
