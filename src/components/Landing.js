import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";

const Landing = () => {
  return <LandingSection></LandingSection>;
};

const LandingSection = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: url("/images/sunset.jpg");
  background-size: cover;
  background-postion: center;
  background-repeat: no-repeat;
`;

export default Landing;
