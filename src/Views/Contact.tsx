import { useState } from "react";
import styled from "styled-components";

import { GrDocumentDownload } from "react-icons/gr";
import { Sections } from "./style";

import ContactCard from "../components/ContactCard";
import LinkButton from "../components/LinkButton";

const CVContainer = styled.div`
  display: flex;
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
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const download = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1aUKDP8VrInLcBhBv-rbmRXB8ETLtb0gx",
      "_blank"
    );
  };

  const CopyMail = () => {
    navigator.clipboard
      .writeText("Axel.Twedmark@gmail.com")
      .then(() => {
        setText("Mail kopierad!");
      })
      .catch(() => {
        // TODO gör en input under som man kan kopiera från
        console.log("Något gick fel!");
      });

    if (timerId) {
      clearTimeout(timerId);
    }
    const newTimerId = setTimeout(() => {
      setText("Maila mig!");
    }, 2000);
    setTimerId(newTimerId);
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  };

  return (
    <Sections>
      <ContactCard>
        <CVContainer onClick={download}>
          <GrDocumentDownload size={40} />
          <p>Mitt CV</p>
        </CVContainer>
        <p>
          Är du på jakt efter en passionerad frontend-utvecklare som är redo att
          ta sig an nya utmaningar? Skicka ett meddelande!
        </p>

        <LinkButton action={CopyMail}>{text}</LinkButton>
        <LinkButton linkedin link="https://www.linkedin.com/in/axeltwedmark/">
          LinkedIn
        </LinkButton>
        <LinkButton github link="https://github.com/Twedmark">
          Github
        </LinkButton>
      </ContactCard>
    </Sections>
  );
};

export default Contact;
