import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const AdventureBanner = () => {
  return (
    <AdventureSection>
      <div className='banner'></div>
    </AdventureSection>
  );
};

const AdventureSection = styled.section`
  height: 60vh;
  weight: 100%;
  .banner {
    height: 100%;
    background-image: url("/images/mazda-fleet.jpg");
    background-size: cover;
    background-postion: center;
    background-repeat: no-repeat;
  }
`;
export default AdventureBanner;
