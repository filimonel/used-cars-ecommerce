import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import "./../index.css";

const About = () => {
  return (
    <SearchFormSection>
      <div className="content-wrapper">
        <div className="content-card">
          <img src="/images/marketplace.svg" alt="" />
          <h3>Saftey first</h3>
          <div className="text-wrapper">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quam accusamus, odio magnam laboriosam fugiat animi inventore.
            </p>
          </div>
        </div>
        <div className="content-card">
          <img src="/images/confidence.svg" alt="" />
          <h3>Buy with confidence</h3>
          <div className="text-wrapper">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quam accusamus, odio magnam laboriosam fugiat animi inventore.
            </p>
          </div>
        </div>
        <div className="content-card">
          <img src="/images/search.svg" alt="" />
          <h3>Powerful research tools</h3>
          <div className="text-wrapper">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quam accusamus, odio magnam laboriosam fugiat animi inventore.
            </p>
          </div>
        </div>
      </div>
    </SearchFormSection>
  );
};

const SearchFormSection = styled.section`
  height: 60vh;
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
    height: 300px;
    box-shadow: 0 3px 10px 0 rgb(0 0 0 / 8%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 10px;
    h3 {
      letter-spacing: 0.5px;
      color: #14377d;
    }
  }
  img {
    height: 100px;
    width: 100px;
  }
  .text-wrapper {
    width: 60%;
    p {
      font-weight: 300;
      color: gray;
    }
  }
`;

export default About;
