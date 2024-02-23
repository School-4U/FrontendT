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
import ForgotPassword from "./pages/ForgotPassword";
// import { AuthProvider } from './components/AuthContext';
import { Parentprofile } from "./components/Parentprofile";
import Courses from "./pages/Courses";
import { SchoolVerification } from "./pages/SchoolVerification";
import {CourseDetails} from "./pages/CourseDetails";


function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/dashboard";
  const isSchoolDashboardPage =
    location.pathname.toLowerCase().trim() === "/schooldashboard";
  const isParentProfile = location.pathname === "/Parentprofile";
  const isCourses = location.pathname === "/Courses";

  return (
    <>
      <GlobalStyles />
      {isDashboardPage ||
      isSchoolDashboardPage ||
      isParentProfile ||
      isCourses ? null : (
        <Header />
      )}
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
          <Route path="/schoolverification" element={<SchoolVerification />} />
          <Route path="/FindASchool" element={<FindASchool />} />
          <Route path="/Parentprofile" element={<Parentprofile />} />
          <Route path="/User" element={<User />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/SchoolDashboard" element={<SchoolDashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
