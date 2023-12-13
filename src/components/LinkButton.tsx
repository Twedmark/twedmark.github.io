import React from "react";
import styled from "styled-components";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";

interface LinkButtonProps {
  link?: string;
  action?: () => void;
  text?: string;
  github?: boolean;
  livePage?: boolean;
  linkedin?: boolean;
  children?: React.ReactNode;
}

const Container = styled.button`
  position: relative;
  display: block;
  width: 40%;
  max-width: 160px;
  height: 40px;
  padding-bottom: 2rem;
  border: none;
  background: transparent;

  a {
    position: absolute;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;

    width: 100%;
    height: 100%;

    top: 0px;
    left: 0px;

    background: var(--color-dark-text);
    color: var(--color-green);
    z-index: 100;
    transform: translate3d(-6px, -6px, 0px);
    transition: transform 0.15s ease-in-out 0s;

    cursor: pointer;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        transform: translate3d(2px, 2px, 0);
      }
    }

    @media (hover: none) and (pointer: coarse) {
      &:active {
        transform: translate3d(2px, 2px, 0);
      }
    }

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    flex-direction: row;
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;

    z-index: 0;
    border: 2px solid rgb(18, 30, 39);
    position: absolute;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    width: 30%;
    height: 35px;
  }
`;

const LinkButton: React.FC<LinkButtonProps> = ({
  action,
  link,
  github,
  livePage,
  linkedin,
  children,
}) => {
  return (
    <Container onClick={action ? action : () => window.open(link, "_blank")}>
      <a>
        {github ? (
          <>
            <SiGithub />
            <p>{children ? children : "Github"}</p>
          </>
        ) : livePage ? (
          <>
            <SlGlobe />
            <p>Live</p>
          </>
        ) : linkedin ? (
          <>
            <SiLinkedin />
            <p>{children ? children : "Linkedin"}</p>
          </>
        ) : (
          <p>{children}</p>
        )}
      </a>
      <div />
    </Container>
  );
};

export default LinkButton;
