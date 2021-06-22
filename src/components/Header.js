import { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [burgerStatus, setBurgerOpen] = useState(false);

  return (
    <Container id="header">
      <Fade top duration={2000}>
        <a href="#">Driven</a>
      </Fade>
      <Fade top duration={2000}>
        <RightMenu id="headerRight">
          <a href="#">Buy</a>
          <a href="#">Sell</a>
          <CustomMenu onClick={() => setBurgerOpen(true)} />
        </RightMenu>
      </Fade>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerOpen(false)} />
        </CloseWrapper>

        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Finance</a>
        </li>
        <li>
          <a href="#">Research</a>
        </li>
        <li>
          <a href="#">Dealers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90;

  a {
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    letter-spacing: 1px;
    color: white;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 500;
    text-transform: uppercase;
    margin: 10px;
    color: white;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  color: white;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in;
  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 500;
      color: #393c41;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
