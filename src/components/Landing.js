import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

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
        <a href="#">Start</a>
      </div>
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
  .welcome-text {
    color: white;
    height: 50%;
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 3.5rem;
      font-weight: 500;
      text-shadow: #a59e98 0px 0px 5px;
    }
    a {
      
    }
  }
  .flex-form input[type="submit"] {
    background: #234546;
    border: 1px solid #234546;
    color: #fff;
    padding: 0 30px;
    cursor: pointer;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
  }
  .flex-form input[type="submit"]:hover {
    background: #336567;
    border: 1px solid #336567;
  }
  .flex-form {
    display: -webkit-box;
    display: flex;
    z-index: 10;
    position: relative;
    width: 351px;
    height: 40px;
    margin-top: 30px;
    opacity: 0.6;
    transition: 1s ease;
    &:hover {
      opacity: 1;
    }
  }
  .flex-form > * {
    border: 0;
    padding: 0 0 0 10px;
    background: #fff;
    font-size: 1rem;
    border-radius: 0;
    outline: 0;
    -webkit-appearance: none;
  }
  input[type="search"] {
    flex-basis: 500px;
  }
`;

const LandingTextWrapper = styled.div``;

export default Landing;
