import styled from "styled-components"

export const Flex = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;

 @media screen and (min-width: 768px) and (max-width: 1200px){
    flex-direction: column;
 }

 @media screen and (min-width: 320px) and (max-width: 768px){
   flex-direction: column;
   }
 
`

