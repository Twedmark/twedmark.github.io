import styled from "styled-components";

import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Icons from "../components/Icons";
import Carousel from "../components/Carousel";
import LinkButton from "../components/LinkButton";

interface Props {
  length: number;
}

const Sections = styled.div<Props>`
  scroll-snap-align: start;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    scroll-snap-align: unset;
    flex-direction: column;
    height: ${(Props) => Props.length * 120}vh;
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

  height: auto;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  background: black;
`;

const TextArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;

const Portfolio = () => {
  const projectData = [NestQuest, Uptive];

  return (
    <Sections length={projectData.length}>
      {projectData.map((Project, index) => (
        <Project key={index} />
      ))}
    </Sections>
  );
};

const NestQuest = () => {
  return (
    <ProjectCard>
      <CarouselContainer>
        <Carousel nestQuest />
      </CarouselContainer>
      <TextArea>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header>Nest Quest</Header>

          <p>
            En Airbnb klon, gjord med hjälp av Next.js, TypeScript och TailWind.
            Jag ville testa den nya versionen av Next.js och se hur det
            fungerade med App Router, men även testa tailwind.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Section>
            <LinkButton link="https://github.com/Twedmark/nest-quest" github />
            <LinkButton
              link="https://nest-quest-twedmark.vercel.app/"
              livePage
            />
          </Section>
          <Icons iconSize={30} javascript typescript next axios tailWind />
        </div>
      </TextArea>
    </ProjectCard>
  );
};

const Uptive = () => {
  return (
    <ProjectCard>
      <CarouselContainer>
        <Carousel uptive />
      </CarouselContainer>
      <TextArea>
        <Header>Uptive</Header>

        <p>
          Under praktiken utvecklade jag och en klasskamrat ett CRM-system med
          hjälp av React, TypeScript och node. Detta gav företagetet en lättare
          överblick över konsulterna och deras uppdrag.
        </p>
        <p>
          Backend integrerades med MongoDB och Azure, med data hämtad från
          företagets tidsrapporteringssystem via ett API.
        </p>
        <Icons
          iconSize={30}
          javascript
          typescript
          react
          axios
          styledComponents
          node
          mongoDB
          google
        />
      </TextArea>
    </ProjectCard>
  );
};

export default Portfolio;
