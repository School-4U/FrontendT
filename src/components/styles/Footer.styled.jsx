import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 50px;
  padding: 50px;
  background: #2B40B4;

  @media screen and (min-width: 768px) and (max-width: 1024px){
    grid-template-columns: 1fr;
  }

  
  @media screen and (min-width: 320px) and (max-width: 768px){
   grid-template-columns: 1fr;
   padding: 20px;
   margin-top: 20px;
    }
  
`

export const FooterRight = styled.div`
display: flex;
flex-direction: column;

h5{
    color: white
}

`
export const FooterLeft = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);


ul li{
    padding-bottom: 20px;
    color: white
}

.link{
  color: white;
}

@media screen and (min-width: 320px) and (max-width: 768px){
grid-template-columns: 1fr;
  }

`
export const Copy = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: #2B40B4;
    padding: 50px 50px 0 50px ;
    color: white;

    p{
        flex: 1
    }
    @media screen and (min-width: 768px) and (max-width: 1200px){
 
    }
    
    @media screen and (min-width: 320px) and (max-width: 768px){
     padding: 10px 10px 0 10px;
      }
`;

export const FooterLogo = styled.div`
    max-width: 100px;
`;
