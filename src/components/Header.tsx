import React from "react";
import styled from "styled-components";

interface Props {
  hr?: boolean;
  children?: React.ReactNode;
  color?: string;
}

const HeaderStyle = styled.h1<Props>`
  position: relative;
  text-align: center;
  font-size: 1.7rem;
  align-self: center;
  margin: 0;

  color: ${({ color }) => color || "var(--color-dark-text)"};
  z-index: 1;
`;

const BackgroundBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 53%;
  transform: translateX(-50%);

  width: 98%;
  height: 45%;
  background: var(--color-yellow);
  z-index: -1;
`;

const Header: React.FC<Props> = ({ children, hr, color }) => {
  return (
    <HeaderStyle color={color}>
      {children}
      <BackgroundBox></BackgroundBox>

      {hr && <hr color="black" style={{ opacity: "0.4" }} />}
    </HeaderStyle>
  );
};

export default Header;
