import { useState } from "react";
import styled from "styled-components";

import { GrDocumentDownload } from "react-icons/gr";
import { Sections } from "./style";

import ContactCard from "../components/ContactCard";
import LinkButton from "../components/LinkButton";
import AxelJuno from "../photos/AxelJuno.jpeg";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: auto;

  p {
    /* width: 60%; */
    width: 90%;
  }
`;

const ImageDiv = styled.div`
  width: 30%;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;

    // flip the image and make it black and white
    filter: grayscale(100%) contrast(1) brightness(90%);
    transform: scaleX(-1);

    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.4);
    /// crop in on the image
  }
  /* 
  @media (max-width: 768px) {
    width: 150px;
    height: 200px;
  }

  @media (max-width: 425px) {
    width: 100px;
    height: 150px;
  } */
`;

const CVContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-direction: row;
  margin: 0;
  padding: 0;

  cursor: pointer;
  &:hover {
    a {
      text-decoration: underline var(--color-yellow);
    }
  }

  &:active {
    a {
      color: var(--color-green);
    }
  }

  &:focus {
    a {
      outline: none;
    }
  }

  &:focus-visible {
    a {
      outline: 2px solid var(--color-green);
    }
  }
`;

const LinkText = styled.a`
  color: var(--color-primary);
  text-decoration: underline;
  font-weight: bold;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CVSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: auto;
`;

const Text = styled.p`
  font-weight: bold;

  @media (max-width: 768px) {
    max-width: 70%;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  gap: 0.5rem;
  margin: 1rem;
  width: 100%;
`;

const Contact = () => {
  const [text, setText] = useState("Maila mig");
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
        setText("Mail kopierad");
      })
      .catch(() => {
        // TODO gör en input under som man kan kopiera från
        console.log("Något gick fel!");
      });

    if (timerId) {
      clearTimeout(timerId);
    }
    const newTimerId = setTimeout(() => {
      setText("Maila mig");
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
        <Header>
          {/* <ImageDiv>
            <img src={AxelJuno} alt="Me and a doggo" />
          </ImageDiv> */}
          <Text>
            Är du på jakt efter en passionerad frontend-utvecklare som är redo
            att ta sig an nya utmaningar? då kanske det är mig du letar efter!
          </Text>
        </Header>
        <CVSection>
          <Text>
            Vill du veta mer om mig? <br />
            ladda ner mitt CV eller skicka ett meddelande!
          </Text>
          <CVContainer onClick={download}>
            <GrDocumentDownload size={24} />
            <LinkText>Mitt CV</LinkText>
          </CVContainer>
        </CVSection>

        <Links>
          <LinkButton action={CopyMail}>{text}</LinkButton>
          <LinkButton linkedin link="https://www.linkedin.com/in/axeltwedmark/">
            LinkedIn
          </LinkButton>
          <LinkButton github link="https://github.com/Twedmark">
            Github
          </LinkButton>
        </Links>
      </ContactCard>
    </Sections>
  );
};

export default Contact;
