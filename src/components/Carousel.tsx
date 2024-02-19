import React, { useEffect } from "react";
import styled from "styled-components";
import nq1 from "../photos/nestquest/1.png";
import nq2 from "../photos/nestquest/2.png";
import nq3 from "../photos/nestquest/3.png";
import u1 from "../photos/uptive/1.png";

const nestQuestSlides = {
  slides: [
    {
      id: 1,
      alt: "Nest Quest landing page",
      src: nq1,
    },
    {
      id: 2,
      alt: "cozy countryside cabin",
      src: nq2,
    },
    {
      id: 3,
      alt: "remote cabin in norway",
      src: nq3,
    },
  ],
};

const uptiveSlides = {
  slides: [
    {
      id: 1,
      alt: "Uptive",
      src: u1,
    },
  ],
};

interface CarouselProps {
  nestQuest?: boolean;
  uptive?: boolean;
}

interface Props {
  currentSlide: number;
}

const CarouselSlides = styled.div<Props>`
  display: flex;
  flex-direction: row;
  width: 100%;

  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ currentSlide }) => currentSlide * -100 + "%"});
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Carousel: React.FC<CarouselProps> = ({ uptive, nestQuest }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  let currentProject = nestQuest ? nestQuestSlides : uptiveSlides;

  useEffect(() => {
    if (currentProject.slides.length < 2) return;
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide === currentProject.slides.length - 1 ? 0 : currentSlide + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  });

  return (
    <CarouselSlides currentSlide={currentSlide}>
      {currentProject.slides.length > 1 ? (
        currentProject.slides.map((slide) => (
          <CarouselImage key={slide.id} src={slide.src} alt={slide.alt} />
        ))
      ) : (
        <CarouselImage
          key={currentProject.slides[0].id}
          src={currentProject.slides[0].src}
          alt={currentProject.slides[0].alt}
        />
      )}
    </CarouselSlides>
  );
};

export default Carousel;
