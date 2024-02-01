
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import { Home, About, Contact } from "./pages/Main";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <GlobalStyles />
    <Header />
    <Container>
    <Routes>
         <Route path="/Home"element={<Home/>} />
         <Route path="/About"element={<About/>} />
         <Route path="/Contact"element={<Contact/>} />
    </Routes>
    
    </Container>
  
    </> 
  );
}

export default App;
