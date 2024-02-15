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
  justify-content: space-evenly;
  max-width: 75%;
  height: 100%;
  max-height: 50%;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;

  background-color: var(--color-green);
  background: ${(Props) => Props?.background || ""};
  ${({ styles }) => ({ ...styles })}

  @media (max-width: 768px) {
    max-width: 85%;
    max-height: 45%;
    aspect-ratio: unset;
  }
`;

const ContactCard: React.FC<Props> = ({ children, background, styles }) => {
  return (
    <Section styles={styles} background={background}>
      {children}
    </Section>
  );
};

export default ContactCard;
