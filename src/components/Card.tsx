import React from "react";
import styled from "styled-components";

interface Props {
  background?: string;
  children?: React.ReactNode;
}

const Section = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  aspect-ratio: 1/1.41;
  border-radius: 5%;
  box-shadow: 0 0 10px #ffffff;
  background: ${(Props) => Props?.background || ""};
`;

const Card: React.FC<Props> = ({ children, background }) => {
  return <Section background={background}>{children}</Section>;
};

export default Card;
