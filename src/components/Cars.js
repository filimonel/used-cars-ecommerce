import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Car from "./Car";

const Cars = () => {

  return (
    <CarsWrapper>
      <Car avatar='R'/>
      <Car avatar='L'/>
      <Car avatar='E'/>
      <Car avatar='F'/>
    </CarsWrapper>
  );
};

const CarsWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export default Cars;
