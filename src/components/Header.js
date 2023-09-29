import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/carSclice/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const cars = useSelector(selectCars);
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a
        href="
  "
      >
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}

        <li>
          <a href="#">existing inventory</a>
        </li>
        <li>
          <a href="#">used inventory</a>
        </li>
        <li>
          <a href="#">trade-in</a>
        </li>
        <li>
          <a href="#">cybertruck</a>
        </li>
        <li>
          <a href="#">roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    text-transform: uppercase;
    font-weight: 600;
    padding: 0 10px;
    flex: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
    flex: nowrap;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  background: white;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  list-style: none;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};
  transition: transform 0.3s ease-in;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid gray;
    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
