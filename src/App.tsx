import React from "react";
import Hero from "./components/Views/Hero";
import Who from "./components/Views/Who";
import Portfolio from "./components/Views/Portfolio";
import Contact from "./components/Views/Contact";
import styled from "styled-components";
import ParticleBackground from "./components/ParticleBackground";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <div>
      <ParticleBackground />

      <Container>
        <Hero />
        <Who />
        <Portfolio />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
