import styled from "styled-components";

export const Top = styled.div`
  width: 100%;
  height: 450px;
  background-image: url('../../public/assets/categories-top-image.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    height: 250px;
  }

  

  & div {
    text-align: center;
    color: #fff;
    background-image: url('../../public/assets/categories-top-cover.png');
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

export const Middle = styled.div`
h3{
    padding: 20px 90px;
}

`