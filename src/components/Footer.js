import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <FooterSection>
      <div className="socials">
        <h4>Connect with us</h4>
        <div className="social-icons">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className="contacts">
        <div className="contact-card">
          <h4>Phone:</h4>
          <p>(03) 1234 5678</p>
        </div>
        <div className="contact-card">
          <h4>Email:</h4>
          <p>contact@driven.com</p>
        </div>
        <div className="contact-card">
          <h4>Address:</h4>
          <p>123 Car Street, Richmond, VIC</p>
        </div>
      </div>
    </FooterSection>
  );
};

const FooterSection = styled.section`
  height: 8vh;
  width: 100%;
  background: #f3f8fb;
  display: flex;
  .socials {
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    h4 {
      font-weight: 400;
      letter-spacing: 1px;
      font-size: 1.2rem;
      color: gray;
    }
    svg {
      margin: 0px 5px;
      height: 25px;
      width: 25px;
      color: gray;
      cursor: pointer;
      transition: 0.5s ease;
      &:hover {
        color: black;
      }
    }
  }
  .contacts {
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    .contact-card {
      height: 33%;
      width: 33%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      h4 {
        font-weight: 400;
        font-size: 1rem;
        color: gray;
      }
      p {
        font-weight: 300;
        font-size: 0.8rem;
        color: gray;
        margin-top: 5px;
      }
    }
  }
`;
export default Footer;
