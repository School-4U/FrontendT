
import styled from "styled-components";
import { Logo } from "../components/styles/Header.styled";

const StyledDiv = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  margin-top: 100px;
  margin-bottom: 150px;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    gap: 100px;
    margin-top: 50px;
    flex-direction: column;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
  }

  @media screen and (max-width: 319px) {
    padding: 10px;
    flex-direction: column;
  }
`;

const StyledDivLogo = styled.div`
  max-width: 600px;
  padding: 20px;
  margin-left: 70px;

  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    margin-left: 10px;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-left: 0px;
  }
`;

const StyledDivPayment = styled.div`
  min-width: 550px;
  max-width: 650px;
  padding: 40px;
  margin-right: 70px;
  border-radius: 16px;
  background-color: rgba(245, 246, 248, 0.6);

  height: auto;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;

  h3 {
    font-size: 32px;
    font-weigh: bold;
    line-height: 32px;
  }

  h4 {
    font-size: 24px;
    font-weigh: normal;
  }

  h5 {
    font-size: 16px;
    font-weight: normal;
    text: center;
  }

  h6 {
    font-size: 18px;
    font-weight: normal;
  }

  button {
    margin-top: 20px;
    margin-bottom: 10px;

    width: 100%;
    font-size: 32px;
    font-weight: bold;
    border-radius: 25px;
    border: 1px solid rgba(110, 127, 215, 1);
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgba(110, 127, 215, 1);
  }

  input {
    margin-top: 5px;
    margin-bottom: 15px;

    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;

    width: 100%;
    font-size: 24px;
    border-radius: 25px;
    border: 1px solid rgba(110, 127, 215, 1);
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    margin-right: 20px;
    flex-direction: column;
    min-width: 450px;
    max-width: 550px;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-right: 0px;
    min-width: 300px;
    max-width: 450px;

    padding: 30px;
  }

  @media screen and (max-width: 319px) {
    width: 300px;
    padding: 10px;
    background-color: red;
    padding: 10px;
  }
`;

const StyledDivCheckout = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const StyledDivCardInput = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;

  margin-top: 10px;
`;

const StyledDivGrouped = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  gap: 28px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledCardType = styled.img`
  width: 163px;
  height: 80px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    height: 1.5rem;
  }
`;

const StyledDivCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

const StyledDivSecuirty = styled.div`
  margin-top: 10px;

  width: 100%;
  flex-direction: row;
  gap: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Payment = () => {
  return (
    <StyledDiv>
      <StyledDivLogo>
        <Logo src="assets/logo.png" alt="Logo for School 4u" />
      </StyledDivLogo>

      <StyledDivPayment>
        <StyledDivCheckout>
          <h3>Checkout</h3>
          <h5>Complete your payment by providing your payment details</h5>
        </StyledDivCheckout>

        <div>
          <h4>Card Type</h4>
          <StyledDivCards>
            <StyledCardType src="assets/visa.svg" alt="visa" />
            <StyledCardType src="assets/master_card.svg" alt="master_card" />
            <StyledCardType src="assets/verve.svg" alt="verve" />
          </StyledDivCards>
        </div>

        <StyledDivCardInput>
          <h4>Cardholder Name</h4>
          <input type="text" />
        </StyledDivCardInput>

        <StyledDivCardInput>
          <h4>Cardholder Number</h4>
          <input type="number" />
        </StyledDivCardInput>

        <StyledDivGrouped>
          <StyledDivCardInput>
            <h4>Expiration Date</h4>
            <input type="date" />
          </StyledDivCardInput>

          <StyledDivCardInput>
            <h4>CVV</h4>
            <input type="number" />
          </StyledDivCardInput>
        </StyledDivGrouped>

        <button>Pay</button>

        <StyledDivSecuirty>
          <img
            width={32}
            height={32}
            alt="security_lock"
            src="assets/mdi_security-lock.svg"
          />
          <h6>Payments are secured and encrypted</h6>
        </StyledDivSecuirty>
      </StyledDivPayment>
    </StyledDiv>
  );
};

export default Payment;
