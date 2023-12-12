import styled from "styled-components";

export const Sections = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const HeadShot = styled.div`
  position: absolute;
  top: 1.5%;
  left: 1.5%;
  width: 250px;
  height: 250px;

  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0 0 10px;
  z-index: 3;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    top: 2%;
    left: 2%;
    width: 150px;
    height: 150px;
  }

  @media (max-width: 425px) {
    top: 1%;
    left: 1%;
    width: 100px;
    height: 100px;
  }
`;
