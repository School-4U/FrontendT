import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  max-width: 100%;
  background-color: white;
  margin: 0 auto;
  padding: 10px;
`;
export const PopupContainer = styled.div`
  background-image: url("assets/placeholder.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9);

  p {
    font-size: 2.2em;
    font-weight: bold;
    color: black;
  }
`;
export const Popups = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

//   export const PopupValue = styled.div`
//   padding: 30px;

//   h4{
//       font-weight: 42px;
//       font-family: 'Inter Tight', sans-serif;
//       font-weight: 700;
//       padding-bottom: 15px;
//   }

//   .buttons {
//     display: flex;
//     gap: 20px;

// }

//   `

//   export const Image = styled.div`
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 0;
//   bottom: 0;
//   opacity:0.1;
//
//   `
export const PopupButton = styled.div`
  background: orange;
  color: white;
  padding: 10px;
  z-index: 2;
  border-radius: 10px;
  cursor: pointer;
  `;
