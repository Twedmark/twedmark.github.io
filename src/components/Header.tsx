import React from "react";
import styled from "styled-components";

interface Props {
  fontSize?: number;
  children?: React.ReactNode;
  color?: string;
}

const HeaderStyle = styled.h1<Props>`
  position: relative;
  font-size: ${({ fontSize }) => fontSize + "rem" || "1.7rem"};
  align-self: center;
  margin: 0;

  color: ${({ color }) => color || "var(--color-dark-text)"};

  @media (max-width: 768px) {
    font-size: ${({ fontSize }) =>
      fontSize ? fontSize / 1.6 + "rem" : "1.3rem"};
  }
`;

const ZIndex = styled.div`
  position: relative;
  z-index: 2;
`;

export const BackgroundBox = styled.div`
  position: absolute;
  bottom: 0;
  left: calc(51% + 0.5rem);
  transform: translateX(-50%);

  width: 98%;
  height: 40%;
  background: var(--color-yellow);
  z-index: 1;
`;

const Header: React.FC<Props> = ({ children, fontSize, color }) => {
  return (
    <HeaderStyle color={color} fontSize={fontSize}>
      <ZIndex>{children}</ZIndex>
      <BackgroundBox></BackgroundBox>
    </HeaderStyle>
  );
};

export default Header;
