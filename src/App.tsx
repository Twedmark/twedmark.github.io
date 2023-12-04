import React from "react";
import Hero from "./Views/Hero";
import Who from "./Views/Who";
import Portfolio from "./Views/Portfolio";
import Contact from "./Views/Contact";
import styled from "styled-components";

const ViewContainer = styled.div`
  height: 100vh;
  -webkit-scroll-snap-type: y mandatory;
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
      <ViewContainer>
        <Hero />
        {/* <Who /> */}
        <Portfolio />
        <Contact />
      </ViewContainer>
    </div>
  );
}

export default App;
