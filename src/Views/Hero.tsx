import Header from "../components/Header";
import Icons from "../components/Icons";

import { Sections } from "./style";

import styled from "styled-components";

const HeadShot = styled.div`
  position: absolute;
  top: -9vw;
  left: -9vw;
  width: 18vw;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0 0 10px;
  z-index: 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  background: white;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BackgroundBox = styled.div`
  position: absolute;
  top: -50%;
  left: 3%;
  width: 110%;
  aspect-ratio: 2.4/1;
  border: 0;
  background: #0c3b2e;
  z-index: -1;
  transform: rotate(5deg);
`;

const HeroCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 70vw;
  padding: 1rem;
  aspect-ratio: 2.4/1;
  border-bottom: 2px solid var(--color-primary);
`;

const TextBox = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0.5rem;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 1rem;
  z-index: 2;
  p {
    font-size: 1rem;
    font-weight: normal;
  }
`;

const Hero = () => {
  return (
    <Sections>
      <HeroCard>
        <BackgroundBox />
        <HeadShot>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a5/Donald_Duck_angry_transparent_background.png"
            alt="kalle"
          />
        </HeadShot>
        <TextBox>
          <Header color="white">Hej! Här är jag</Header>
          <div style={{ alignSelf: "Center", color: "white" }}>
            <p>
              Axel Twedmark, 33 år gammal, frontend-utvecklare från göteborg.{" "}
            </p>
            <p>
              Studerat på Jensen Yrkeshögskola i Göteborg där jag gick frontend
              inriktinge websäkerhet.
            </p>
            <p>
              Nogrann och lättlärd, förkärlet till Javascript samt strävar att
              utveklas till fullstack!
            </p>
          </div>
        </TextBox>
        <Icons iconText="Detta kan jag" hero />
      </HeroCard>
    </Sections>
  );
};

export default Hero;
