import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 50px;
  padding: 50px;
  background: #2B40B4;

 
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
    

`
