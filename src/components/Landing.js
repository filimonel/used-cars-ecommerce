import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";

const Landing = () => {
  return (
    <LandingSection>
      <FormWrapper></FormWrapper>
    </LandingSection>
  );
};

const LandingSection = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: url("/images/sunset.jpg");
  background-size: cover;
  background-postion: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div``;

export default Landing;
