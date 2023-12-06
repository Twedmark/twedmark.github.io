import React from "react";
import ProjectCard from "../components/ProjectCard";

import { Sections } from "./style";
import { GrDocumentDownload } from "react-icons/gr";

import styled from "styled-components";

const ContactMe = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0;
  padding: 0;
  width: 8rem;
  height: 1.5rem;
  overflow: hidden;
`;

const TextOne = styled.p`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 1;
  transform: translateX(0%);
  background-color: transparent;

  transition: all 0.3s ease-in-out;

  ${ContactMe}:hover & {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const TextTwo = styled.p`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translateX(-100%);
  background-color: transparent;

  transition: all 0.3s ease-in-out;

  ${ContactMe}:hover & {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const Contact = () => {
  const download = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1aUKDP8VrInLcBhBv-rbmRXB8ETLtb0gx",
      "_blank"
    );
  };

  const CopyMail = () => {
    const copy = "Axel.Twedmark@gmail.com";
    navigator.clipboard.writeText(copy);
  };

  return (
    <Sections>
      <ProjectCard>
        <p>Vill du veta mer eller kontakta mig?</p>

        <section>
          <GrDocumentDownload onClick={download} size={40} />
          <p>Mitt CV</p>
        </section>

        <ContactMe onClick={CopyMail}>
          <TextOne className="one">Kontakta mig</TextOne>
          <TextTwo className="two">Kopiera mail</TextTwo>
        </ContactMe>
      </ProjectCard>
    </Sections>
  );
};

export default Contact;
