import React from "react";
import styled from "styled-components";

interface Props {
  background?: string;
  styles?: object;
  children?: React.ReactNode;
}

const Section = styled.div<Props>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  height: 80%;
  aspect-ratio: 1/1.41;
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.6);
  background: ${(Props) => Props?.background || ""};
  ${({ styles }) => ({ ...styles })}
`;

const Card: React.FC<Props> = ({ children, background, styles }) => {
  return (
    <Section styles={styles} background={background}>
      {children}
    </Section>
  );
};

export default Card;
