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

  width: 45%;
  max-height: 80%;
  aspect-ratio: 1/1.2;

  background-color: var(--color-green);
  background: ${(Props) => Props?.background || ""};
  ${({ styles }) => ({ ...styles })}

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 90%;
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
