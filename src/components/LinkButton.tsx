import React from "react";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";

interface LinkButtonProps {
  link: string;
  github?: boolean;
  livePage?: boolean;
}

const Test = styled.button`
  position: relative;
  display: block;
  width: 35%;
  max-width: 150px;
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
    transition: transform 0.2s ease-in-out 0s;

    cursor: pointer;
    &:hover {
      transform: translate3d(2px, 2px, 0);
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

// const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 0.25rem;
//   background-color: var(--color-dark-green);
//   border-radius: 5px;
//   padding: 0.25rem 0.5;
//   font-size: 1.2rem;
//   color: var(--color-green);

//   box-shadow: 2px 2px 2px rgba(0, 0, 0, 1);

//   border: solid 2px black;
//   transform: translate3d(-8px, -8px, 0px) scale3d(1, 1, 1) rotateX(0deg)
//     rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
//   transition: transform 0.2s ease-in-out 0s;
//   z-index: 1;

//   cursor: pointer;
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     transform: translate3d(-8px, -8px, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg)
//       rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
//     background-color: var(--color-light-text);
//   }
// `;

// const Border = styled.div`
//   z-index: 0;
//   border: 2px solid rgb(18, 30, 39);
//   position: absolute;
//   color: transparent;
//   border-radius: 5px;
// `;

const LinkButton: React.FC<LinkButtonProps> = ({ link, github, livePage }) => {
  return (
    // <Button onClick={() => window.open(link, "_blank")}>
    //   {livePage && (
    //     <>
    //       <SiGithub />
    //       <div />
    //     </>
    //   )}
    //   {github && (
    //     <>
    //       <SiGithub />
    //       Github
    //     </>
    //   )}
    // </Button>

    <Test onClick={() => window.open(link, "_blank")}>
      <a>
        {github ? (
          <>
            <SiGithub /> <p>Github</p>
          </>
        ) : (
          <>
            <SiGithub />
            <p>Live</p>{" "}
          </>
        )}
      </a>
      <div />
    </Test>
  );
};

export default LinkButton;
