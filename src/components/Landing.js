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
          <form className="flex-form">
            <input type="search" placeholder="I'm looking for.." />
            <input type="submit" value="Go" />
          </form>
        </div>
      </Fade>
      <Fade top>
        <a href="#body-car-section">
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
    .flex-form input[type="submit"] {
      background: #48b9d3;
      border: 0.5px solid #48b9d3;
      color: #fff;
      padding: 0 30px;
      cursor: pointer;
      -webkit-transition: all 0.2s;
      -moz-transition: all 0.2s;
      transition: all 0.2s;
    }

    .flex-form input[type="submit"]:hover {
      background: #69cbe0;
      border: 1px solid #69cbe0;
    }

    .flex-form {
      display: -webkit-box;
      display: flex;
      z-index: 10;
      position: relative;
      width: 351px;
      height: 40px;
      margin-top: 20px;
    }

    .flex-form > * {
      border: 0;
      padding: 0 0 0 10px;
      background: #fff;
      font-size: 1rem;
      border-radius: 0;
      outline: 0;
      -webkit-appearance: none;
      transition: 0.5s ease;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }

    input[type="search"] {
      flex-basis: 500px;
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
