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

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CarouselSlides = styled.div<Props>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ currentSlide }) => currentSlide * -100 + "%"});
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselDots = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem;
`;

const CarouselDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  margin: 0.5rem;
  cursor: pointer;
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
    }, 5000);
    return () => clearInterval(interval);
  });

  const goToSlide = (id: number) => {
    setCurrentSlide(id);
  };

  return (
    <CarouselContainer>
      <CarouselSlides currentSlide={currentSlide}>
        {NestQuestCarousel.slides.map((slide) => (
          <CarouselImage key={slide.id} src={slide.src} alt={slide.alt} />
        ))}
      </CarouselSlides>

      <CarouselDots>
        {NestQuestCarousel.slides.map((slide) => (
          <CarouselDot
            key={slide.id}
            onClick={() => goToSlide(slide.id - 1)}
            style={{
              background:
                currentSlide === slide.id - 1
                  ? "darkgray"
                  : "rgba(0, 0, 0, 0.1)",
            }}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

export default Carousel;
