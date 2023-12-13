import React from "react";
import styled from "styled-components";

interface Props {
  hr?: boolean;
  children?: React.ReactNode;
  color?: string;
}

const HeaderStyle = styled.h1<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.7rem;
  align-self: center;
  margin: 0;

  color: ${({ color }) => color || "var(--color-dark-text)"};
`;

const ZIndex = styled.div`
  position: relative;
  z-index: 2;
`;

export const BackgroundBox = styled.div`
  position: absolute;
  bottom: 0;
  left: calc(50% + 0.5rem);
  transform: translateX(-50%);

  width: 98%;
  height: 45%;
  background: var(--color-yellow);
  z-index: 1;
`;

const Header: React.FC<Props> = ({ children, hr, color }) => {
  return (
    <HeaderStyle color={color}>
      <ZIndex>{children}</ZIndex>
      <BackgroundBox></BackgroundBox>

      {hr && <hr color="black" style={{ opacity: "0.4" }} />}
    </HeaderStyle>
  );
};

export default Header;
