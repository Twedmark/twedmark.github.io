import styled from "styled-components";

import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Icons from "../components/Icons";
import Carousel from "../components/Carousel";
import LinkButton from "../components/LinkButton";

export const Sections = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: auto;
  width: 100%;
`;

const CarouselContainer = styled.div`
  transform: translateY(-25%);
  overflow: hidden;
  width: 80%;
  max-height: 100%;
  box-shadow: 6px 8px 6px rgba(0, 0, 0, 0.5);
  background: black;

  @media (max-width: 768px) {
    width: 40%;
    transform: translate(50%, -40%);
    box-shadow: 5px 6px 5px rgba(0, 0, 0, 0.5);
  }
`;

const MobileDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0%, -180%);
  }
`;

// TESTA ATT FLYTTA HEADER TILL VÄNSTR I MOBIL LÄGE

const TextArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 100%;
`;

const Portfolio = () => {
  return (
    <Sections>
      <ProjectCard>
        <CarouselContainer>
          <Carousel />
        </CarouselContainer>
        <TextArea>
          <MobileDiv>
            <Header>Nest Quest</Header>
          </MobileDiv>
          <p>
            En Airbnb clone, gjord med hjälp av Next.js, TypeScript och TailWind
          </p>
          <Section>
            <LinkButton link="https://github.com/Twedmark/nest-quest" github />
            <LinkButton
              link="https://nest-quest-twedmark.vercel.app/"
              livePage
            />
          </Section>
          <Icons iconSize={30} javascript typescript next axios tailWind />
        </TextArea>
      </ProjectCard>
    </Sections>
  );
};

export default Portfolio;
