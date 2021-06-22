import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Car from "./Car";

const Cars = () => {
  return (
    <CarsWrapper>
      <div>
        <h1>Featured</h1>
      </div>
      <div className="cars-cards">
        <Car
          avatar="R"
          title="Mazda 6"
          img="/images/mazda6.jpeg"
          location="Fitzroy, VIC"
        />
        <Car
          avatar="L"
          title="Jeep Wrangler"
          img="/images/jeep.jpeg"
          location="Sydney, NSW"
        />
        <Car
          avatar="F"
          title="Volkswagen Golf"
          img="/images/golf.jpeg"
          location="Toorak, VIC"
        />
        <Car
          avatar="E"
          title="Suzuki Jimny"
          img="/images/Jimny.jpeg"
          location="Adelaide, SA"
        />
      </div>
    </CarsWrapper>
  );
};

const CarsWrapper = styled.div`
  height: 600px;
  background: #f3f8fb;
  h1 {
    font-weight: 500;
  }
  .cars-cards {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export default Cars;
