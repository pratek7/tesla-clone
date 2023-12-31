import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
const Section = ({
  title,
  description,
  backgroundimg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <Wrap bg={backgroundimg}>
      <Fade direction="up">
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade direction="up">
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DropDown src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-reapeat;
  background-image: ${(props) => `url("/images/${props.bg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-button: 30px;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: darkslategray;
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  color: black;
  background: white;
  opacity: 0.65;
`;
const DropDown = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
