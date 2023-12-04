import React from "react";
import styled from "styled-components";

interface Props {
  hr?: boolean;
  children?: React.ReactNode;
  color?: string;
}

const HeaderStyle = styled.h1<Props>`
  width: 90%;
  text-align: center;
  font-size: 1.7rem;
  align-self: center;
  color: ${({ color }) => color || ""};
`;

const Header: React.FC<Props> = ({ children, hr, color }) => {
  return (
    <HeaderStyle color={color}>
      {children}
      {hr && <hr color="black" style={{ opacity: "0.4" }} />}
    </HeaderStyle>
  );
};

export default Header;
