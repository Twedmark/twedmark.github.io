import React, { useEffect } from "react";
import styled from "styled-components";
import nq1 from "../photos/nestquest/1.png";
import nq2 from "../photos/nestquest/2.png";
import nq3 from "../photos/nestquest/3.png";

const NestQuestCarousel = {
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
  height: 100%;
  object-fit: cover;
`;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide === NestQuestCarousel.slides.length - 1
          ? 0
          : currentSlide + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  });

  return (
    <CarouselSlides currentSlide={currentSlide}>
      {NestQuestCarousel.slides.map((slide) => (
        <CarouselImage key={slide.id} src={slide.src} alt={slide.alt} />
      ))}
    </CarouselSlides>
  );
};

export default Carousel;
