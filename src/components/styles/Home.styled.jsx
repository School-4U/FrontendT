import { AccordionItemButton } from "react-accessible-accordion";
import styled from "styled-components";

export const StyledHome = styled.div``;

export const SearchB = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  background: white;
  padding: 0 0 0 20px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  input[type="text"] {
    border: none;
    outline: none;
    flex: 1;
    margin-left: 9px;
  }
  button {
    border: none;
    background: #6e7fd7;
    color: white;
    padding: 10px 12px;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 300px;
    input[type="text"] {
      flex: 1;
      margin: 5px auto;
    }
    button {
      padding: 5px 9px;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 90px;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    padding: 20px 15px;
  }
`;

export const Middle = styled.div`
  flex: 1;
  border-right: 2px solid #6e7fd7;
  margin-top: 120px;
  text-align: center;
  padding: 70px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-top: 10px;
    padding: 20px;
  }
`;
export const Left = styled.div`
  padding: 0 90px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    padding: 0 30px;
  }
`;
export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
  }
`;

export const Right2 = styled.div`
  flex: 1;
  border-right: 2px solid #6e7fd7;
  text-align: center;
  margin-top: 120px;
  padding: 70px;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-top: 20px;
    padding: 20px;
  }
`;

export const Left2 = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 120px;
  padding: 70px;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-top: 20px;
    padding: 20px;
  }
`;

export const WhyContainer = styled.div`
  font-size: 52px;
  text-align: center;
  margin-top: 90px;
  font-family: "Inter Tight", sans-serif;
  font-weight: 700;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    font-size: 26px;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;
export const SubHeading = styled.div`
  text-align: center;
  margin-top: 20px;
  font-family: "Inter Tight", sans-serif;
  font-weight: 400;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
  margin-top: 90px;
  padding: 0 90px;



  @media screen and (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 30px;
    margin-top: 30px;
  }
`;

export const WhatContainer = styled.div`
  background: #6e7fd7;
  margin-top: 50px;
  padding: 50px;

  P {
    color: white;
    font-size: 62px;
    text-align: center;
    margin-top: 30px;
    font-family: "Inter Tight", sans-serif;
    font-weight: 700;

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      font-size: 26px;
      margin-top: 10px;
    }

    @media screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 20px;
    }
  }

  h3 {
    color: white;
    text-align: center;
    margin-top: 50px;
    font-size: 18px;

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      font-size: 16px;
      margin-top: 20px;
    }

    @media screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 16px;
      margin-top: 10px;
    }
  }
`;
export const Comments = styled.div`
  display: flex;
  padding: 40px;
  font-size: 26px;
  margin: 20px;
  border: 1px solid #ccc;
  background: white;
  color: black;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    margin-top: 20px;
    font-size: 18px;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-top: 10px;
    font-size: 16px;
    padding: 20px;
  }
`;

export const Comments2 = styled.div`
  display: flex;
  padding: 40px;
  font-size: 26px;
  margin-top: 190px;
  border: 1px solid #ccc;
  background: #7685f6;
  color: white;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    margin-top: 20px;
    font-size: 18px;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 16px;
    padding: 20px;
    margin-top: 20px;
  }
`;
export const CommentImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const AccordionStyle = styled.div`
  margin-top: 40px;
`;
export const StyledFAQ = styled.div`
  padding: 0 90px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    padding: 0 30px;
  }
`;
export const StyledSection = styled(AccordionItemButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  background-color: transparent;
`;

export const Text = styled.p`
  margin-top: 9px;
  text-align: center;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Newsletter = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  background: white;
  padding: 0 0 0 20px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  font-size: 1.1rem;

  input[type="email"] {
    border: none;
    outline: none;
    flex: 1;
    margin-left: 9px;
  }

  button {
    border: none;
    background: #6e7fd7;
    color: white;
    padding: 10px 12px;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    padding: 0 0 0 10px;
    margin: 10px 30px;
    width: 300px;

    input[type="email"] {
      margin-left: 5px;
    }
  }
`;
export const Center = styled.div`
  width: 500px;
  margin: 30px auto;
  
  @media screen and (min-width: 768px) and (max-width: 1200px) {

  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;

export const SchoolLink = styled.div`
  margin-top: 15px;
`;
