
import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalStyles from "../components/styles/Global";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 10rem 2rem;
  background-color: #F5F6F8;
  border-radius: 10px;
  border: 1px solid #333;
`;

const Head = styled.div`
  & h2 {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
    color: #000;
  }

  & h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #000;
  }

  & p {
    font-size: 1.3rem;
    color: #000;
  }
`;

const VerificationDigits = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;

  & input {
    width: 12%;
    height: 4rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    text-align: center;
    outline: none;
    border: 2px solid #6e7fd7;
  }
`;

const AfterDigits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  & button {
    width: 50%;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.5rem;
    color: #fff;
    background-color: #6e7fd7;
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }

`;

const EmailVerification = () => {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [verificationResult, setVerificationResult] = useState(null);

  const handleInputChange = (index, value) => {
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);
  };

  const handleKeyDown = (e, index) => {
    const { value } = e.target;
  
    // Limit input to a single numeric character
    if (value.length > 1 || Number.isNaN(value)) {
      e.preventDefault(); // Prevent invalid input
      return;
    }
  
    // Update state with the valid digit
    setVerificationCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });
  
    // Move focus to the next empty input on digit entry
    if (value.length === 1 && index < 5) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput.value === "") {
        nextInput.focus();
      }
    }
  
    // Move focus to the previous input on backspace
    if (value.length === 0 && index > 0) {
      const prevInput = document.getElementById(`input-${index - 1}`);
      prevInput.focus();
    }
  };


  const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const code = verificationCode.join("");
        const response = await axios.post("https://backend-production-b20a.up.railway.app/users/signup/parent/otpDetails", {
          code,
         
        });
  
        if (response.status === 200) {
          // Verification successful, you can handle the success logic here
          setVerificationResult("your verification is successful");
        } else {
          setVerificationResult("Verification failed");
        }
        navigate('/login');
      } catch (error) {
        console.log(`"Error occurred during verification:", ${error.message}`);
      }
    };
  

  return (
    <Container>
      <GlobalStyles />
      <Head>
        <h2>Email Verification</h2>
        <h3>Enter Code</h3>
        <p>
          Enter 6-digit code sent to <span style={{ color: "#fa9907"}}>{"someone@example.com"}</span>
        </p>
      </Head>
      <VerificationDigits>
        {verificationCode.map((digit, index) => (
          <input
            key={index}
            type="text"
            id={`input-${index}`}
            maxLength="1"
            value={digit}
            placeholder="_"
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </VerificationDigits>
      <AfterDigits>
        <button onClick={handleSubmit}>Continue</button>
        <p>
          Didn't receive a code?{" "}
          <span>
            <Link to="/popup" style={{ color: "#fa9907" }}>
              Resend Code
            </Link>
          </span>
        </p>
        {verificationResult && <div>{verificationResult}</div>}
      </AfterDigits>
    </Container>
  );
};

export default EmailVerification;
