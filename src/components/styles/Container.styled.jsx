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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('assets/placeholder.svg');
    background-size: cover; 
    background-position: center center; 
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    
  `
  
  export const Content = styled.div`
  background-color:  rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  `
  
 