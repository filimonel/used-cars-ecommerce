import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Landing = () => {
  return (
    <LandingSection className="landing">
      <Fade bottom cascade>
        <div className="welcome-text">
          <h1>Find your next car</h1>
          {/* <form className="flex-form">
          <input type="search" placeholder="Dream Car?" />
          <input type="submit" value="Go" />
        </form> */}
        </div>
      </Fade>
      <Fade top>
        <a href="#">
          <ExpandMoreIcon fontSize="inherit" />
        </a>
      </Fade>
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
  postion: relative;
  .welcome-text {
    color: white;
    height: 60%;
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 3rem;
      font-weight: 500;
      text-shadow: #a59e98 0px 0px 5px;
    }
  }
  a {
    position: absolute;
    bottom: 0vh;
  }
  svg {
    font-size: 60px;
    color: white;
    transition: ease 0.5s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export default Landing;
