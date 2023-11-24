import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const HeaderStyle = styled.h1`
  height: 100vh;
  margin: 5%;
  font-size: 3rem;
`;

const Header: React.FC<Props> = ({ children }) => {
  return (
    <HeaderStyle>
      {children}
      <hr color="black" style={{ opacity: "0.4" }} />
    </HeaderStyle>
  );
};

export default Header;
