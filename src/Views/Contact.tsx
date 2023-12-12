import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Sections } from "./style";
import { GrDocumentDownload } from "react-icons/gr";

import styled from "styled-components";
import LinkButton from "../components/LinkButton";

const CVContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-direction: row;
  margin: 0;
  padding: 0;

  cursor: pointer;

  p {
    margin: 0;
    padding: 0;
  }
`;

const Contact = () => {
  const [text, setText] = useState("Maila mig!");

  const download = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1aUKDP8VrInLcBhBv-rbmRXB8ETLtb0gx",
      "_blank"
    );
  };
  const CopyMail = () => {
    // navigator.clipboard.writeText("Axel.Twedmark@gmail.com");
    navigator.clipboard
      .writeText("Axel.Twedmark@gmail.com")
      .then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });

    setText("Mail kopierad!");

    setTimeout(() => {
      setText("Maila mig!");
    }, 2000);
  };

  return (
    <Sections>
      <ProjectCard>
        <CVContainer onClick={download}>
          <GrDocumentDownload size={40} />
          <p>Mitt CV</p>
        </CVContainer>
        <p>
          Är du på jakt efter en passionerad frontend-utvecklare som är redo att
          ta sig an nya utmaningar? Skicka ett meddelande nedan!
        </p>

        <LinkButton action={CopyMail}>{text}</LinkButton>
      </ProjectCard>
    </Sections>
  );
};

export default Contact;
