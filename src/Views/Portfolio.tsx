import React from "react";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Icons from "../components/Icons";

import { Sections } from "./style";
import Carousel from "../components/Carousel";
import LinkButton from "../components/LinkButton";

import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

const Portfolio = () => {
  return (
    <Sections>
      <ProjectCard>
        <Carousel />
        <Header>Nest Quest</Header>
        <p>
          Ett projekt jag gjorde för att få mer insikt i Next 13 och testa lite
          TailWind
        </p>
        <Section>
          <LinkButton link="https://github.com/Twedmark/nest-quest" github />
          <LinkButton link="https://nest-quest-twedmark.vercel.app/" livePage />
        </Section>
        <Icons
          iconText="Gjordes med hjälp av"
          javascript
          typescript
          next
          axios
          tailWind
        />
      </ProjectCard>
      <ProjectCard />
    </Sections>
  );
};

export default Portfolio;
