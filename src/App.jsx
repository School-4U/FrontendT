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
import Payment from "./pages/Payment";
import { Dashboard } from "./pages/Dashboard";
import { SchoolDashboard } from "./pages/SchoolDashboard";
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation();
  const isDashboardPage = location.pathname === "/dashboard";
  const isSchoolDashboardPage = location.pathname === "/SchoolDashboard";
  // const SchoolDashboardPage = location.pathname === "/schoolDashboard";
  return (
    <>
      <GlobalStyles />
      {isDashboardPage || isSchoolDashboardPage ? null : <Header />}
      {/* {SchoolDashboardPage ? null : <Header />} */}
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
          <Route path="/payment" element={<Payment />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Schooldashboard" element={<SchoolDashboard />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
