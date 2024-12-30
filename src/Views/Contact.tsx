import { useState } from "react";
import styled from "styled-components";

import { GrDocumentDownload } from "react-icons/gr";
import { Sections } from "./style";

import ContactCard from "../components/ContactCard";
import LinkButton from "../components/LinkButton";
import AxelJuno from "../photos/AxelJuno.jpeg";
import Axel2 from "../photos/Axel2.jpeg";

const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 95%;
`;

const SecondarySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ImageDiv = styled.div`
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scaleX(-1);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.4);
    border-radius: 0.2rem;
  }

  @media (max-width: 830px) {
    display: none;
  }
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
      color: var(--color-yellow);
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

const Text = styled.p`
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 70%;
  }
`;

const TextTemp = styled.h3`
  font-weight: bold;
  text-align: center;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  gap: 0.5rem;
  margin: 1rem 0;
  width: 100%;
`;

const Contact = () => {
  const [text, setText] = useState("Maila mig");
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const download = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1TMNq2QcLaQVqNLi9EtjCkP0rNAo3iPzr",
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
        <MainSection>
          <ImageDiv>
            // <img src={AxelJuno} alt="Me and a doggo" />
            <img src={Axel2} alt="me foraging some mushrooms" />
          </ImageDiv>
          <SecondarySection>
            <TextTemp>
              Letar du efter en utvecklare som är redo att ta sig an nya
              utmaningar? <br />
              {/* Då kanske det är mig du letar efter! */}
            </TextTemp>

            <Text>
              Vill du veta mer om mig? <br />
              Ladda ner mitt CV eller skicka ett meddelande!
            </Text>
            <CVContainer onClick={download}>
              <GrDocumentDownload size={24} />
              <LinkText>Mitt CV</LinkText>
            </CVContainer>

            <Links>
              <LinkButton action={CopyMail}>{text}</LinkButton>
              <LinkButton
                linkedin
                link="https://www.linkedin.com/in/axeltwedmark/"
              >
                LinkedIn
              </LinkButton>
              <LinkButton github link="https://github.com/Twedmark">
                Github
              </LinkButton>
            </Links>
          </SecondarySection>
        </MainSection>
      </ContactCard>
    </Sections>
  );
};

export default Contact;
