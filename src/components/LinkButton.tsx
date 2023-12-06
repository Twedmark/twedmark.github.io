import React from "react";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";

interface LinkButtonProps {
  link: string;
  github?: boolean;
  livePage?: boolean;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  background-color: var(--color-yellow);
  border-radius: 5px;
  padding: 0.25rem 0.5;
  font-size: 1.2rem;
  color: var(--color-red);

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-red);
    color: var(--color-yellow);
  }
`;

const LinkButton: React.FC<LinkButtonProps> = ({ link, github, livePage }) => {
  return (
    <Button onClick={() => window.open(link, "_blank")}>
      {livePage && (
        <>
          <SiGithub />
          Live Page
        </>
      )}
      {github && (
        <>
          <SiGithub />
          Github
        </>
      )}
    </Button>
  );
};

export default LinkButton;
