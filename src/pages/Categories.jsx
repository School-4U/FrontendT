import styled from "styled-components";
import Select from "react-select";
import { Container } from "../components/styles/Container.styled";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 1rem;

  @media screen and (max-width: 420px){
      padding: 0.5rem;
    } 
`;

const Top = styled.div`
  width: 100%;
  height: 450px;
  background-image: url('../../assets/categories-top-image.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    height: 250px;
  }

  

  & div {
    text-align: center;
    color: #fff;
    background-image: url('../../assets/categories-top-cover.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        height: 250px;
      }

    & p {
      font-size: 1.5rem;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`;

const SelectContainer = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: 2rem auto;
    border-radius: 1.5rem;
    border: 2px solid #6E7FD7;
    box-shadow: 0px 8px 4px 0px rgba(0, 0, 0, 0.05);


    
    @media screen and (max-width: 420px){
      padding: 0.5rem;
    } 

    
    
`
export const Button = styled.button`
border: none;
border-radius: 10px;
cursor: pointer;
background:  #6E7FD7;
padding: 0.7rem 1.5rem;
margin: 0.6rem auto;
color: white;
white-space: nowrap;
font-size: 1rem;


&:hover{
    background: white;
    color:  #6E7FD7;
    border: 1px solid #6E7FD7;
}

@media screen and (min-width: 768px) and (max-width: 1200px){
  margin: 10px auto;
}

@media screen and (min-width: 320px) and (max-width: 768px){
margin: 10px auto;

}
`

export const Categories = () => {
  const institutions = [
    { value: "primary", label: "Primary Institution" },
    { value: "secondary", label: "Secondary Institution" },
  ];

  const location = [
    { value: "abia", label: "Abia" },
    { value: "adamawa", label: "Adamawa" },
    { value: "akwa-ibom", label: "Akwa Ibom" },
    { value: "anambra", label: "Anambra" },
    { value: "bauchi", label: "Bauchi" },
    { value: "bayelsa", label: "Bayelsa" },
    { value: "benue", label: "Benue" },
    { value: "borno", label: "Borno" },
    { value: "cross-river", label: "Cross River" },
    { value: "delta", label: "Delta" },
    { value: "ebonyi", label: "Ebonyi" },
    { value: "edo", label: "Edo" },
    { value: "ekiti", label: "Ekiti" },
    { value: "enugu", label: "Enugu" },
    { value: "gombe", label: "Gombe" },
    { value: "imo", label: "Imo" },
    { value: "jigawa", label: "Jigawa" },
    { value: "kaduna", label: "Kaduna" },
    { value: "kano", label: "Kano" },
    { value: "katsina", label: "Katsina" },
    { value: "kebbi", label: "Kebbi" },
    { value: "kogi", label: "Kogi" },
    { value: "kwara", label: "Kwara" },
    { value: "lagos", label: "Lagos" },
    { value: "nasarawa", label: "Nasarawa" },
    { value: "niger", label: "Niger" },
    { value: "ogun", label: "Ogun" },
    { value: "ondo", label: "Ondo" },
    { value: "osun", label: "Osun" },
    { value: "oyo", label: "Oyo" },
    { value: "plateau", label: "Plateau" },
    { value: "rivers", label: "Rivers" },
    { value: "sokoto", label: "Sokoto" },
    { value: "taraba", label: "Taraba" },
    { value: "yobe", label: "Yobe" },
    { value: "zamfara", label: "Zamfara" },
    { value: "fct", label: "FCT" },
  ];

  const budget = [
    { value: "0-100000", label: "Below 100,000" },
    { value: "100000-300000", label: "100,000 - 300,000" },
    { value: "300000-500000", label: "300,000 - 500,000" },
    { value: "500000-1000000", label: "500,000 - 700,000" },
    { value: "1000000-2000000", label: "700,000 - 900,000" },
    { value: "2000000-5000000", label: "1.100,000 - 1,300,000" },
    { value: "5000000-10000000", label: "1,300,000 - 1,500,000" },
    { value: "5000000-10000000", label: "1,500,000 - 1,700,000" },
    { value: "5000000-10000000", label: "1,700,000 - 2,000,000" },
  ];


  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: 300,
      borderRadius: 0,
      border: "1px solid #000",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #000",
      },


    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      background: state.isSelected ? "black" : "white",
      "&:hover": {
        background: "black",
        color: "white",
      },
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  };

  return (
    <Container>

      <Top>
        <div>
          <h1>Select Your Preference</h1>
          <p>Choose the preference most suitable for you</p>
        </div>
      </Top>
      <Wrapper>
        <SelectContainer>
          <h2>Category</h2>
          <br />
          <p>Select Prefered Institution</p>
          <Select options={institutions} styles={customStyles} />
          <br />
          <p>Select Prefered Location</p>
          <Select options={location} styles={customStyles} />
          <br />
          <p>Choose Preferred Budget</p>
          <Select options={budget} styles={customStyles} />
          <br />
          <Link to="/findASchool"> <Button type="submit" Link to="">Search Schools</Button></Link>
        </SelectContainer>

      </Wrapper>
      <Footer />

    </Container>
  );
};
