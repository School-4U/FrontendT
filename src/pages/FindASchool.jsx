
import { Container } from "../components/styles/Container.styled";
import GlobalStyles from "../components/styles/Global";
import {Top, Middle} from "../components/styles/School.styled";
import { Footer } from "../components/Footer";
import { ListOfSchools } from "../components/ListOfSchools";
import {data} from "../components/RegisteredSchools";


export const FindASchool = () => {
  return (
    <>
    <GlobalStyles />
    <Container>
        <Top>
       
        <div>
          <h1>Find A School</h1>
          <p>School4u will help you find the right school for your kid</p>
          </div>
        </Top>
        <Middle>
        <h3>Here are schools that might meets your <span> desired criteria from </span>your <span>choices selected</span></h3>
        </Middle>
       <ListOfSchools data={data} />
      
        <Footer/>
    </Container>
    </>
  
  )
}
