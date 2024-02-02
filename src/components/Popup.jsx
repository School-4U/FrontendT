import { useState } from "react";
import { Content, PopupContainer} from "./styles/Container.styled";
// import {Header} from "./Header";

export const Popup = () => {
    const [Open, SetOpen] = useState(true)

    const togglePopup = () => {
        SetOpen(false);
    }
  return (
    <>
    {Open &&(
      <>
      {/* <Header /> */}
        <PopupContainer>
         <Content>
        <h4>Select Type of User</h4>
        <button>Parent</button>
        <button>Student</button>
        <button onClick={togglePopup}>Close</button>
        </Content>
        </PopupContainer>
        </>
    )}
    </>
  )
}
