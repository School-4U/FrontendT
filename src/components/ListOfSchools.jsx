import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SchoolContainer = styled.div`
  display: flex;
  border-radius: 1rem;
  margin: 1rem auto;
  width: 100%;
  max-width: 750px;
  border: 1px solid #b4c2e0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  font-family: "Inter", sans-serif;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    /* margin: 0; */
  }
`;

const SchoolImg = styled.div`
  width: 40%;
  overflow: hidden;
  border-radius: 0;

  @media (max-width: 840px) and (min-width: 769px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;

    & img {
      border-radius: 1rem 1rem 0 0;
    }
  }

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;

    
    @media (max-width: 768px) {
      /* border-radius: 1rem 1rem 0 0; */
      margin: -1rem -1rem 0 0;
    }
  }
`;

const SchoolDetails = styled.div`
  width: 60%;
  padding: 0.5rem 1rem;

  @media (max-width: 840px) and (min-width: 769px) {
    width: 55%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }

  & h2 {
    font-size: 1.8rem;
    color: #6e7fd7;
    text-align: left;
  }

  & p {
    font-size: 0.8rem;
    margin: 0.6rem 0;
    text-align: justify;
  }
`;

const FlexApart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-right: 0.5rem;

  & button {
    display: flex;
    padding: 0.8rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    font-size: 1.2rem;
    background-color: #6e7fd7;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
    color: #fff;
    border: none;
    font-weight: bold;

    &:hover {
      background-color: #5c6ac4;
    }

    @media (max-width: 768px) {
      border-radius: 15px;
      font-size: 1rem;
    }
  }

  & img {
    max-width: 120px;
  }
`;

export const ListOfSchools = ({ data }) => {
  return (
    <Container>
      {data.map((school, index) => (
        <SchoolContainer key={index}>
          <SchoolImg>
            <img src={school.image} alt={`School ${index}`} />
          </SchoolImg>
          <SchoolDetails>
            <h2>{school.title}</h2>
            <p>{school.content}</p>
            <p>
              <span style={{ color: "#6e7fd7", fontWeight: "bold" }}>
                Location:{" "}
              </span>
              {school.location}
            </p>
            <p>
              <span style={{ color: "#6e7fd7", fontWeight: "bold" }}>
                Price:{" "}
              </span>
              {school.price}
            </p>
            <FlexApart>
              <img src={school.ratings} alt="Ratings" />
              <button>{school.button}</button>
            </FlexApart>
          </SchoolDetails>
        </SchoolContainer>
      ))}
    </Container>
  );
};

ListOfSchools.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      ratings: PropTypes.string.isRequired,
      button: PropTypes.string.isRequired,
    })
  ).isRequired,
};
