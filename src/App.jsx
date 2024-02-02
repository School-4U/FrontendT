
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import { Home, About, Contact } from "./pages/Main";
import { Routes, Route } from "react-router-dom";

import { Popup } from "./components/Popup";



function App() {
  return (
    <>
    <GlobalStyles />
    <Header />
    <Container>
    <Routes>
         <Route path="/"element={<Home/>} />
         <Route path="/About"element={<About/>} />
         <Route path="/Contact"element={<Contact/>} />
         <Route path="/popup" element={<Popup />} />
    </Routes>
    
    </Container>
  
    </> 
  );
}

export default App;
