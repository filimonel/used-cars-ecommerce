import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Car from "./Car";

const Cars = () => {
  return (
    <CarsWrapper>
      <Car avatar="R" title='Mazda 6'  />
      <Car avatar="L" title='Jeep Wrangler'/>
      <Car avatar="E" title='Suzuki Jimney'/>
      <Car avatar="F" title='Toyota Hilux'/>
    </CarsWrapper>
  );
};

const CarsWrapper = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #f3f8fb;
`;

export default Cars;
