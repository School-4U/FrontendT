import styled from "styled-components";

export const StyledDashboard = styled.div`
padding: 0 90px;
display: flex;
gap: 100px;

@media screen and (min-width: 768px) and (max-width: 1200px){
    padding: 0 40px;
    gap: 50px;
        
 }
 
 @media screen and (min-width: 320px) and (max-width: 768px){
     gap: 10px;
     padding: 0;
 }
 
`
export const Sidebar = styled.div`
max-width: 155px;
background: #5468D2;
padding-top: 150px;
text-align: center;
color: white;

h3{
    text-align: center;
    font-size: 1em;
    padding: 0 30px 20px;
}
 
 @media screen and (min-width: 320px) and (max-width: 768px){
     width: 100px;

     h3{
        padding: 0 15px 10px;
        font-size: 0.8em;
     }
 }
 
`
export const Active = styled.div`
    color: orange;
`
export const Main = styled.div`
display: flex;
flex-direction: column;
max-width: 1290;
padding-top: 50px;

@media screen and (min-width: 768px) and (max-width: 1200px){
  width: 100%
        
 }
 
 @media screen and (min-width: 320px) and (max-width: 768px){
    width: 100%;
    padding-right: 20px;
 }
 

`
export const Top = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1290;

@media screen and (min-width: 768px) and (max-width: 1200px){
    width: 100%
        
 }
 
 @media screen and (min-width: 320px) and (max-width: 768px){
     width: 100%
 }
 

`
export const Right = styled.div`
img{
    width: auto;
    height: 2.5rem;
}
@media screen and (min-width: 768px) and (max-width: 1200px){
  
        
 }
 
 @media screen and (min-width: 320px) and (max-width: 768px){
     img{
        width: auto;
        height: 1rem;
     }
 }
 
`
export const Left = styled.div`
display: flex;



`
export const Home = styled.div`
display: flex;
gap: 10px;
align-items: center;

@media screen and (min-width: 768px) and (max-width: 1200px){
  
        
 }
 
 @media screen and (min-width: 320px) and (max-width: 768px){
    gap: 10px;
    flex-direction: column;
    h3{
        font-size: 0.6em;
    } 
 }
 
`
export const User = styled.div`
display: flex;
gap: 10px;
align-items: center;
margin-left: 30px;

@media screen and (min-width: 768px) and (max-width: 1200px){
    
        
 }
 
 @media screen and (min-width: 320px) and (max-width: 768px){
    margin-left: 10px;
    flex-direction: column;
    h3{
        font-size: 0.6em;
    } 
 }
 
`
export const Middle = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 90px;
align-items: start;

@media screen and (min-width: 768px) and (max-width: 1200px){
    gap: 40px;
        
 }
 
 @media screen and (min-width: 320px) and (max-width: 768px){
     grid-template-columns: 1fr;
     gap: 20px;
 }
 

`
export const Card = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
margin-top: 20px;
border: 1px solid #ccc;
border-radius: 10px;
background: #F5F6F899;
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
max-width: 497px;
@media screen and (min-width: 768px) and (max-width: 1200px){
    
        
 }
 
 @media screen and (min-width: 320px) and (max-width: 768px){
    padding: 10px;
    margin-top: 10px;
    width: 100% 
 }


`
export const FirstCard = styled.div`
display: flex;
justify-content: space-between;

img{
    width: 145px;
    height: 145px;
   
}
@media screen and (min-width: 768px) and (max-width: 1200px){
 
   flex-direction: column; 
        
 }
 
 @media screen and (min-width: 320px) and (max-width: 768px){
     img{
        width: 50px;
        height: 50px;
     }
 }
 

`
export const Messages = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 0;

.bottom{
    color: white;
    background: #5468D2;
    
}
@media screen and (min-width: 768px) and (max-width: 1200px){
    flex-direction: column;
        
 }
 
 @media screen and (min-width: 320px) and (max-width: 768px){
    flex-direction: column;
 }
 

`
export const StyledButtons = styled.div`
border: none;
border-radius: 10px;
cursor: pointer;
background:  #6E7FD7;
padding: 8px 20px;

&:hover{
    background: white;
    color:  #6E7FD7;
    border: 1px solid #6E7FD7;
}

@media screen and (min-width: 768px) and (max-width: 1200px){
    width: 90px;
    margin-top: 5px;
        
 }
 
 @media screen and (min-width: 320px) and (max-width: 768px){
   width: 70px;
   padding: 5px 10px;
 }
 
`
export const ImageContainer = styled.div`
width: 100%;
height: 159px;
background-image: url('assets/brown.jpg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
border-radius: 14px;
margin-bottom: 30px;

.top{
    display: flex;
    justify-content: space-between;
    padding: 10px;

    p{
        color: white;
        font-size: 1.2em;
    }
}

@media screen and (min-width: 768px) and (max-width: 1200px){
    
 }
 
 @media screen and (min-width: 320px) and (max-width: 768px){
     
 }
 


`
export const ImageContainer2 = styled.div`
width: 100%;
height: 159px;
background-image: url('assets/Rock.jpg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
border-radius: 14px;

.top{
    display: flex;
    justify-content: space-between;
    padding: 10px;

    p{
        color: white;
        font-size: 1.2em;
    }
}

@media screen and (min-width: 768px) and (max-width: 1200px){
    
        
 }
 
 @media screen and (min-width: 320px) and (max-width: 768px){
     
 }
 
`
export const Calender = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
 
`
export const History = styled.div`
.top{
    margin: 20px 0;

    p{
        font-size: 1.5em;
        
    }

}
@media screen and (min-width: 768px) and (max-width: 1200px){
    
        
 }
 
 @media screen and (min-width: 320px) and (max-width: 768px){
    p{
        1.2em;
    } 
 }
 

`