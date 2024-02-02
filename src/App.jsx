import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import { Home, About, Contact, Login, Signup, Verification } from "./pages/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
