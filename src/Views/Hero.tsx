import Header from "../components/Header";
import Icons from "../components/Icons";
import Axel from "../photos/Axel.jpg";
import { Sections, HeadShot } from "./style";

import styled from "styled-components";

const boxSize = {
  width: 80,
  height: 45,
  transform: 14,
};

const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: auto;
  padding: 0;
  gap: 0.5rem;

  font-size: 1.2rem;
  font-weight: bold;

  height: ${boxSize.height}vh;
  width: ${boxSize.width}vw;

  p {
    font-size: 1rem;
    font-weight: normal;
  }
`;

const HeroCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 70vw;
  height: 90vh;
  padding: 1rem;
  aspect-ratio: 2.4/1;
  border-bottom: 2px solid var(--color-primary);

  @media (max-width: 768px) {
    width: 90vw;
    height: 90vh;
    aspect-ratio: unset;
  }
`;

const BackgroundBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(${boxSize.transform}deg);

  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-green);
  height: ${boxSize.height - 20}vh;
  width: ${boxSize.width * 3}vw;

  z-index: -2;
  /* overflow: hidden; */
`;

const CounterRotate = styled.div`
  position: absolute;
  transform: rotate(-${boxSize.transform}deg);
  height: ${boxSize.height}vh;
  width: ${boxSize.width}vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
`;

// const TextBehind = styled.div`
//   position: absolute;
//   height: ${boxSize.height}vh;
//   width: ${boxSize.width}vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   z-index: -3;
// `;

const Hero = () => {
  const AboutMe = (
    <>
      <Header>Hej! Här är jag</Header>
      <div style={{ alignSelf: "Center" }}>
        <p>Axel Twedmark, 33 år gammal, frontend-utvecklare från göteborg.</p>
        <p>
          Studerat på Jensen Yrkeshögskola i Göteborg där jag gick frontend
          inriktinge websäkerhet.
        </p>
        <p>
          Nogrann och lättlärd, förkärlet till Javascript samt strävar att
          utveklas till fullstack!
        </p>
      </div>
    </>
  );

  return (
    <Sections>
      <HeadShot>
        <img src={Axel} alt="It's me!" />
      </HeadShot>
      <HeroCard>
        <TextBox>
          <BackgroundBox>
            <CounterRotate>{AboutMe}</CounterRotate>
          </BackgroundBox>
          {/* <TextBehind>{AboutMe}</TextBehind> */}
        </TextBox>
        <Icons hero />
      </HeroCard>
    </Sections>
  );
};

export default Hero;
