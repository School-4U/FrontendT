import styled from "styled-components";

export const Container = styled.div`
    width: 1440px;
    max-width: 100%;
    background-color: white;
    margin: 0 auto;
    padding: 10px
`
export const PopupContainer = styled.div`
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  `
  
  export const Content = styled.div`
  height: 80%;
  width: 90%;
  max-width: 1318px;
  max-height: 1132px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  `

  export const PopupValue = styled.div`
  padding: 30px;

  h4{
      font-weight: 42px;
      font-family: 'Inter Tight', sans-serif;
      font-weight: 700;
      padding-bottom: 15px;
  }

  .buttons {
    display: flex;
    gap: 20px;

 
}
  
  `

  export const Image = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  bottom: 0;
  opacity:0.1;
  background-image: url('assets/placeholder.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  `
  export const PopupButton = styled.div`
  background: orange;
  color: white;
  padding: 10px; 20px;
  border-radius: 10px;
  `
  
 