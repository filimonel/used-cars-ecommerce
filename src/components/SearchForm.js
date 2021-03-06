import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const SearchForm = () => {
  return (
    <AdventureSection>
      <div className="banner">
        <form className="flex-form">
          <h1
            style={{
              color: "white",
              fontWeight: "500",
              letterSpacing: "0.5px",
            }}
          >
            Search
          </h1>
          <div>
            <select name="Make" id="" className="select">
              <option value="0">Make</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
              <option value="5">Honda</option>
              <option value="6">Jaguar</option>
              <option value="7">Land Rover</option>
              <option value="8">Mercedes</option>
              <option value="9">Mini</option>
              <option value="10">Nissan</option>
              <option value="11">Toyota</option>
              <option value="12">Volvo</option>
            </select>
          </div>
          <div>
            <select name="Model" id="" className="select">
              <option value="0">Model</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
              <option value="5">Honda</option>
              <option value="6">Jaguar</option>
              <option value="7">Land Rover</option>
              <option value="8">Mercedes</option>
              <option value="9">Mini</option>
              <option value="10">Nissan</option>
              <option value="11">Toyota</option>
              <option value="12">Volvo</option>
            </select>
          </div>
          <div>
            <select name="Location" id="" className="select">
              <option value="0">Location</option>
              <option value="1">Melbourne</option>
              <option value="2">Sydney</option>
              <option value="3">Brisbane</option>
              <option value="4">Darwin</option>
              <option value="5">Perth</option>
              <option value="6">Adelaide</option>
              <option value="7">Canberra</option>
            </select>
          </div>
          <div>
            <input type="text" className="select" placeholder="Keywords" />
          </div>

          <div>
            <input type="submit" value="Go" />
          </div>
        </form>
      </div>
    </AdventureSection>
  );
};

const AdventureSection = styled.section`
  height: 70vh;
  weight: 100%;
  .banner {
    height: 100%;
    background-image: url("/images/mazda-fleet.jpg");
    background-size: cover;
    background-postion: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    .flex-form {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;
      height: 450px;
      width: 450px;
      background: rgba(81, 163, 189, 0.6);
    }
    .select {
      height: 40px;
      width: 300px;
      font-weight: 400;
    }
    .flex-form input[type="submit"] {
      background: #48b9d3;
      border: 1px solid #48b9d3;
      color: #fff;
      height: 30px;
      width: 120px;
      border-radius: 2px;
      padding: 0 30px;
      cursor: pointer;
      -webkit-transition: all 0.2s;
      -moz-transition: all 0.2s;
      transition: all 0.2s;
      &:hover {
        background: #2f97af;
        border: 1px solid #2f97af;
      }
    }
  }
`;
export default SearchForm;
