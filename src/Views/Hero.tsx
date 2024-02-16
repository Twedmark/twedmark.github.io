import Header from "../components/Header";
import Icons from "../components/Icons";
import Axel from "../photos/Axel.jpg";
import { Sections, HeadShot } from "./style";

import styled from "styled-components";

const boxSize = {
  width: 80,
  height: 45,
  transform: 11,
};

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: auto;

  max-width: 1000px;

  font-size: 1.2rem;

  height: ${boxSize.height}vh;
  /* width: ${boxSize.width}vw; */
  p {
    font-size: 1rem;
    font-weight: normal;
  }
`;

const HeroCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
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
  top: 25%;
  transform: translate(-50%, -50%) rotate(${boxSize.transform}deg);

  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-green);
  height: ${boxSize.height - 20}vh;
  width: ${boxSize.width * 3}vw;
  z-index: -2;
`;

const BioSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;

  p {
    font-size: 1.2rem;
  }
`;

const Hero = () => {
  const AboutMe = (
    <BioSection>
      {/* <p>
        Jag är en utvecklare från Göteborg. jag har studerat frontendutvecklare
        inriktning webbsäkerhet på Jensen yrkeshögskola.
      </p> */}
      <p>
        Nogrann, lättlärd och strävar ständigt efter att utvecklas och lära mig
        nya saker.
      </p>
    </BioSection>
  );

  return (
    <Sections>
      <HeadShot>
        <img src={Axel} alt="It's me!" />
      </HeadShot>
      <HeroCard>
        <TextBox>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Header fontSize={4}>Axel Twedmark</Header>
            <Header fontSize={2.08}>Göteborgsbaserad utvecklare</Header>
          </div>
          {AboutMe}
          <BackgroundBox />
        </TextBox>
        <Icons hero />
      </HeroCard>
    </Sections>
  );
};

export default Hero;
