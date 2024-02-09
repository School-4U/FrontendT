import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import {
  Home,
  About,
  Contact,
  Login,
  Verification,
  User,
  Categories,
} from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Popup } from "./components/Popup";
import { FindASchool } from "./pages/FindASchool";
import { Parent } from "./pages/Parent";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/popup" element={<Popup />} />
          <Route path="/Parent" element={<Parent />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/FindASchool" element={<FindASchool />} />
          <Route path="/User" element={<User />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
