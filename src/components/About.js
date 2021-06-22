import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import "./../index.css";

const About = () => {
  return (
    <SearchFormSection>
      <div className="content-wrapper">
        <div className="content-card"></div>
        <div className="content-card"></div>
        <div className="content-card"></div>
      </div>
    </SearchFormSection>
  );
};

const SearchFormSection = styled.section`
  height: 70vh;
  width: 100%;
  background: white;
  display: flex;
  align-items; center;
  justify-content: center;
  .content-wrapper {
    width: 80vw;
    display flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .content-card {
    width: 350px;
    height: 400px;
    box-shadow: 0 3px 10px 0 rgb(0 0 0 / 8%);
  }
`;

export default About;
