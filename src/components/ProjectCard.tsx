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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  /* text-align: justify; */

  background-color: var(--color-green);
  background: ${(Props) => Props?.background || ""};
  ${({ styles }) => ({ ...styles })}

  @media (max-width: 768px) {
    max-width: 85%;
    aspect-ratio: unset;
    font-size: 0.8rem;
  }
`;

const ProjectCard: React.FC<Props> = ({ children, background, styles }) => {
  return (
    <Section styles={styles} background={background}>
      {children}
    </Section>
  );
};

export default ProjectCard;
