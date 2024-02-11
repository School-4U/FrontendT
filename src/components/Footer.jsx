import {
  StyledFooter,
  FooterRight,
  FooterLeft,
  Copy,
  FooterLogo,
} from "./styles/Footer.styled";
import SVGLogo from "../../public/assets/SVGLogo";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <FooterRight>
          <FooterLogo><SVGLogo /></FooterLogo>
          <h5 style={{ marginTop: "1rem" }}>Follow us</h5>
          <div style={{ fontSize: "2rem", marginTop: "1rem" }}>
            <Link href="https://www.facebook.com/school4u" target="_blank">
              <FaFacebook style={{ marginRight: "1rem", color: "#fff" }} />
            </Link>
            <Link href="https://www.instagram.com/school4u" target="_blank">
              <FaInstagram style={{ marginRight: "1rem", color: "#fff" }} />
            </Link>
            <Link href="https://www.twitter.com/school4u" target="_blank">
              <FaTwitter style={{ marginRight: "1rem", color: "#fff" }} />
            </Link>
            <Link href="https://www.linkedin.com/school4u" target="_blank">
              <FaLinkedinIn style={{ marginRight: "1rem", color: "#fff" }} />
            </Link>
          </div>
        </FooterRight>
        <FooterLeft>
          <ul>
            <li>
              <h4>Company</h4>
            </li>
            <li>Schools</li>
            <li>About Us</li>
            <li> <Link to="#contact" className="link">Contact Us</Link></li>
          </ul>

          <ul>
            <li>
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
