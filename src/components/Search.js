import React from "react";
import styled from "styled-components";

const Search = () => {
  return (
    <SearchSection>
      <div className="title-wrapper">
        <h1>Choose Body</h1>
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
  }
`;

const CarBodyWrapper = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  border: 1px solid black;
  .car-body-card {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid black;
  }
  img {
    height: 50px;
    margin-bottom: 10px;
  }
`;
export default Search;
