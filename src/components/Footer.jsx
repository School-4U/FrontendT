import {
  StyledFooter,
  FooterRight,
  FooterLeft,
  Copy,
} from "./styles/Footer.styled";
import { FaCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <FooterRight>
          <h1>
            School<span>4U</span>
          </h1>
          <h5>Follow us</h5>
        </FooterRight>
        <FooterLeft>
          <ul>
            <li>
              <h4>Company</h4>
            </li>
            <li>Schools</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>

          <ul>
            <li>
              {" "}
              <h4>Community</h4>
            </li>
            <li>Refer a friend</li>
            <li>Location</li>
            <li>Our Partners</li>
          </ul>

          <ul>
            <li>
              <h4>Services</h4>
            </li>
            <li>Faqs</li>
            <li>Newsletter</li>
          </ul>
        </FooterLeft>
      </StyledFooter>
      <Copy>
        <h5>
          <FaCopyright />
          2024 Capstone services. All rights reserved
        </h5>
        <>
          <h5>Privacy Policy</h5>
        </>
        <>
          {" "}
          <h5>Terms and Condition</h5>
        </>
      </Copy>
    </>
  );
};
