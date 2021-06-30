import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Car from "./Car";

const Cars = () => {
  return (
    <CarsWrapper>
      <Fade duration={1000}>
        <div>
          <h1>Featured</h1>
        </div>
      </Fade>
      <div className="cars-cards">
        <Fade left delay={100} duration={1000}>
          <Car
            avatar="R"
            title="Mazda 6"
            img="/images/mazda6.jpeg"
            location="Fitzroy, VIC"
          />
        </Fade>
        <Fade left duration={1000}>
          <Car
            avatar="L"
            title="Jeep Wrangler"
            img="/images/jeep.jpeg"
            location="Sydney, NSW"
          />
        </Fade>

        <Fade right duration={1000}>
          <Car
            avatar="F"
            title="Volkswagen Golf"
            img="/images/golf.jpeg"
            location="Toorak, VIC"
          />
        </Fade>

        <Fade right delay={100} duration={1000}>
          <Car
            avatar="E"
            title="Suzuki Jimny"
            img="/images/Jimny.jpeg"
            location="Adelaide, SA"
          />
        </Fade>
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
