import React from "react";
import styled from "styled-components";
import Cars from "./Cars";
const Search = () => {
  return (
    <SearchSection>
      <div className="title-wrapper">
        <h1>Browse car by body type</h1>
      </div>
      <CarBodyWrapper>
        <div className="car-body-card">
          <img src="/images/hatchback.png" alt="" />
          <p>Hatch</p>
        </div>
        <div className="car-body-card">
          <img src="/images/sedan.png" alt="" />
          <p>Sedan</p>
        </div>
        <div className="car-body-card">
          <img src="/images/convertible.png" alt="" />
          <p>Convertible</p>
        </div>
        <div className="car-body-card">
          <img src="/images/wagon.png" alt="" />
          <p>Wagon</p>
        </div>
        <div className="car-body-card">
          <img src="/images/ute.png" alt="" />
          <p>Ute</p>
        </div>
        <div className="car-body-card">
          <img src="/images/suv.png" alt="" />
          <p>Suv</p>
        </div>
      </CarBodyWrapper>
      <Cars />
    </SearchSection>
  );
};

const SearchSection = styled.section`
  height: 100vh;
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
    margin-bottom: 10px;
    cursor: pointer;
  }
  p {
    color: #393c41;
  }
`;
export default Search;
