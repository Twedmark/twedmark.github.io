import React from "react";
import styled from "styled-components";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiMongodb,
  SiRedux,
  SiStyledcomponents,
  SiAxios,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

interface IconsProps {
  iconText?: string;
  iconSize?: number;
  hero?: boolean;
  javascript?: boolean;
  typescript?: boolean;
  react?: boolean;
  next?: boolean;
  node?: boolean;
  styledComponents?: boolean;
  mongoDB?: boolean;
  axios?: boolean;
  redux?: boolean;
  git?: boolean;
  tailWind?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: auto;
  align-items: flex-start;

  p {
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

const Icons: React.FC<IconsProps> = ({
  iconText,
  iconSize,
  hero,
  javascript,
  typescript,
  react,
  next,
  node,
  styledComponents,
  mongoDB,
  axios,
  redux,
  git,
  tailWind,
}) => {
  const size = iconSize ? iconSize : 40;
  return (
    <Container>
      {iconText && <p>{iconText}</p>}
      <Grid>
        {/* <div>
        <SiHtml5
          title="HTML5"
          size={size}
          style={{ color: "rgb(219,54,30)" }}
        />

        <p>HTML5</p>
      </div>
      <div>
        <SiCss3 title="CSS3" size={size} style={{ color: "rgb(13,98,173)" }} />
        <p>CSS3</p>
      </div> */}
        {(javascript || hero) && (
          <div>
            <SiJavascript
              title="Javascript"
              size={size}
              style={{ color: "rgb(255, 255, 0)", background: "rgb(0, 0, 0)" }}
            />
            <p>Javascript</p>
          </div>
        )}
        {(typescript || hero) && (
          <div>
            <SiTypescript
              title="Typescript"
              size={size}
              style={{
                color: "rgb(0, 122, 204)",
                background: "rgb(255, 255, 255)",
              }}
            />
            <p>Typescript</p>
          </div>
        )}
        {(react || hero) && (
          <div>
            <SiReact
              title="React"
              size={size}
              style={{ color: "rgb(0,255,255)" }}
            />
            <p>React</p>
          </div>
        )}
        {(next || hero) && (
          <div>
            <SiNextdotjs title="Next.js" size={size} />
            <p>Next.js</p>
          </div>
        )}
        {(node || hero) && (
          <div>
            <SiNodedotjs
              title="Node.js"
              style={{ color: "rgb(79, 146, 61)" }}
              size={size}
            />
            <p>Node.js</p>
          </div>
        )}
        {(styledComponents || hero) && (
          <div>
            <SiStyledcomponents title="Styled Components" size={size * 1.5} />
            <p>Styled Components</p>
          </div>
        )}
        {(mongoDB || hero) && (
          <div>
            <SiMongodb
              title="MongoDB"
              size={size}
              style={{ color: "rgb(1, 23, 32)" }}
            />
            <p>MongoDB</p>
          </div>
        )}
        {(axios || hero) && (
          <div>
            <SiAxios
              title="Axios"
              size={size}
              style={{ color: "rgb(82,12,215)" }}
            />
            <p>Axios</p>
          </div>
        )}
        {(redux || hero) && (
          <div>
            <SiRedux
              title="Redux"
              size={size}
              style={{ color: "rgb(98,49,174)" }}
            />
            <p>Redux</p>
          </div>
        )}
        {(git || hero) && (
          <div>
            <SiGit
              title="Git"
              size={size}
              style={{ color: "rgb(223,55,38)" }}
            />
            <p>Git</p>
          </div>
        )}
        {tailWind && (
          <div>
            <SiTailwindcss
              title="Tailwind CSS"
              size={size}
              style={{ color: "rgb(0, 157, 255)" }}
            />
            <p>Tailwind CSS</p>
          </div>
        )}
      </Grid>
    </Container>
  );
};

export default Icons;
