import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Cars from "./Cars";
const Search = () => {
  return (
    <SearchSection>
      <Fade bottom>
        <div className="title-wrapper">
          <h1>Browse car by body type</h1>
        </div>
      </Fade>

      <CarBodyWrapper>
        <Fade delay={200} duration={500}>
          <div className="car-body-card">
            <img src="/images/hatchback.png" alt="" />
            <p>Hatch</p>
          </div>
        </Fade>
        <Fade delay={400} duration={500}>
          <div className="car-body-card">
            <img src="/images/sedan.png" alt="" />
            <p>Sedan</p>
          </div>
        </Fade>
        <Fade delay={600} duration={500}>
          <div className="car-body-card">
            <img src="/images/convertible.png" alt="" />
            <p>Convertible</p>
          </div>
        </Fade>
        <Fade delay={800} duration={500}>
          <div className="car-body-card">
            <img src="/images/wagon.png" alt="" />
            <p>Wagon</p>
          </div>
        </Fade>
        <Fade delay={1000} duration={500}>
          <div className="car-body-card">
            <img src="/images/ute.png" alt="" />
            <p>Ute</p>
          </div>
        </Fade>
        <Fade delay={1200} duration={500}>
          <div className="car-body-card">
            <img src="/images/suv.png" alt="" />
            <p>Suv</p>
          </div>
        </Fade>
      </CarBodyWrapper>
      <Cars />
    </SearchSection>
  );
};

const SearchSection = styled.section`
  height: 93vh;
  width: 100vw;
  background: white;
  h1 {
    text-align: center;
    padding: 20px;
    color: #393c41;
    font-weight: 500;
  }
`;

const CarBodyWrapper = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  .car-body-card {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: ease 1s;
  }
  .car-body-card:hover {
    background: lightGray;
  }
  img {
    height: 50px;
    width: 130px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  p {
    color: #393c41;
  }
`;
export default Search;
