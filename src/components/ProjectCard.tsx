import React from "react";
import styled from "styled-components";

interface Props {
  background?: string;
  styles?: object;
  children?: React.ReactNode;
}

const Section = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 40%;
  max-height: 60%;
  aspect-ratio: 1/1.2;
  padding: 0 1rem 1rem 1rem;

  background-color: var(--color-green);
  background: ${(Props) => Props?.background || ""};
  ${({ styles }) => ({ ...styles })}

  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    max-width: 85%;
    aspect-ratio: unset;
  }
`;

const Card: React.FC<Props> = ({ children, background, styles }) => {
  return (
    <Section styles={styles} background={background}>
      {children}
    </Section>
  );
};

export default Card;
