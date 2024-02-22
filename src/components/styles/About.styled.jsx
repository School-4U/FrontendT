import styled from "styled-components";


export const ImageContainer = styled.div`
background-image: url("assets/Aboutimg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
  width: 100%;
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) and (max-width: 1200px){
    background-size: contain;
    height: 400px;
       
}

@media screen and (min-width: 320px) and (max-width: 768px){
    background-size: cover;
    max-height: 400px;


}

`

export const Content = styled.div`
position: absolute;
top: 90px;
left: 190px;
display: flex;
flex-direction: column;
justify-content: start;
align-items: right;
height: 390px;
max-width: 748px;


p {
  font-size: 2em;
  padding-top: 30px;
  color: white;
}

@media screen and (min-width: 768px) and (max-width: 1200px){ 
top: 90px;
left: 30px;
max-width: 500px;

h1{
    font-size: 2em;

}

   p{
    font-size: 1.4em;
    padding-top: 15px;
   }
}
@media screen and (min-width: 320px) and (max-width: 768px){
    justify-items: center;
top: 30px;
left: 10px;
width: 100%;


h1{
    font-size: 1.2em;
    padding-top: 50px;
}

   p{
    font-size: 1em;
    padding-top: 10px;
   }

}
`
export const Blue = styled.span`
color: #5F6EBD;

`
export const Hero = styled.div`
h2{
    text-align: center;
    margin-top: 20px;
}

@media screen and (min-width: 768px) and (max-width: 1200px){ 
    h2{
        font-size: 1.8em
    }
}

    @media screen and (min-width: 320px) and (max-width: 768px){
        h2{
            margin-top: 10px;
            font-size: 1em;
        }
}

`
export const Flex = styled.div`
display: flex;
justify-content: space-between;
padding: 20px 90px;

@media screen and (min-width: 768px) and (max-width: 1200px){ 
padding: 10px 30px;

}

@media screen and (min-width: 320px) and (max-width: 768px){
    flex-direction: column;
    padding: 5px 10px;
}

`
export const Right = styled.div`
max-width: 482px;

@media screen and (min-width: 320px) and (max-width: 768px){
    width: 100%;
    margin: 30px;
}

`
export const Left = styled.div`
flex-direction: column;
max-width: 748px;

h3{
    font-size: 1.7em;

    @media screen and (min-width: 768px) and (max-width: 1200px){ 
        font-size: 1.2em;
        
}
@media screen and (min-width: 320px) and (max-width: 768px){
    font-size: 1em;
}

p{
    padding-top: 20px;
    font-size: 1.7em;
    text-align: justify;

    @media screen and (min-width: 768px) and (max-width: 1200px){ 
        padding-top: 10px;
        font-size: 1em;
    }

    @media screen and (min-width: 320px) and (max-width: 768px){
        font-size: 0.8em;
        padding-top: 10px;
    }
}
`
export const Team = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 10px;

@media screen and (min-width: 768px) and (max-width: 1200px){
grid-template-columns: repeat(3, 1fr);
gap: 10px;
       
}

@media screen and (min-width: 320px) and (max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

`
export const Mission = styled.div`
margin-top: 30px;
background-image: url("assets/Mission.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
  width: 100%;
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) and (max-width: 1200px){
    background-size: contain;
    height: 400px;
       
}

@media screen and (min-width: 320px) and (max-width: 768px){

    background-size: cover;
    max-height: 400px;
}



`
export const Flex2 = styled.div`
display: flex;
bacground-color: white;
justify-content: center;
align-items: center;
gap: 300px;
border-radius: 16px;
box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.3);
width: 1282px;
padding: 30px;
margin: 90px auto 10px;

@media screen and (min-width: 768px) and (max-width: 1200px){
    gap: 100px;
    margin: 20px auto 5px;
    width: 100%;
    padding: 10px;
       
}

@media screen and (min-width: 320px) and (max-width: 768px){
flex-direction: column;
width: 100%;
gaP: 20px;
padding: 10px;
margin: 50px auto 30px;
}


`
export const Contactleft = styled.div`
flex-direction: column;
margin-right: 1px solid black;

h3{
    font-size: 2.3em;

    @media screen and (min-width: 768px) and (max-width: 1200px){
       font-size: 1.8em
           
    }
    
    @media screen and (min-width: 320px) and (max-width: 768px){
        font-size: 1.4em
    }
    
   
}

p{
    font-size: 1.2em;
    text-align: center;

    
    @media screen and (min-width: 768px) and (max-width: 1200px){
        font-size: 1.2em
            
     }
     
     @media screen and (min-width: 320px) and (max-width: 768px){
         font-size: 0.8em
     }
     
    
}

`
export const Formgroup = styled.div`
border: 1px solid blue;
border-radius: 16px;
background: white;
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 15px;
font-size: 1.1rem;

input[type="text"], input[type="email"] {
  border: none;
  outline: none;
  margin-left: 9px; 
  padding: 10px;
  
}
.icon{
    color: orange
}

.textarea{
    padding: 10px;
    border: none;
    outline: none;
}

`
export const Buttonstyle = styled.button`
border: none;
border-radius: 10px;
cursor: pointer;
background:  #6E7FD7;
padding: 8px 20px;
margin: 10px 100px;


&:hover{
    background: white;
    color:  #6E7FD7;
    border: 1px solid #6E7FD7;
}

`