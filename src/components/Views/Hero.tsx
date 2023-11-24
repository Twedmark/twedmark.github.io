import React from "react";
import Card from "../Card";
import { Sections } from "../style";
import Header from "../Header";

const Hero = () => {
  return (
    <Sections>
      <Card background={"black"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a5/Donald_Duck_angry_transparent_background.png"
          alt="kalle"
          style={{ width: "100%" }}
        />
      </Card>
      <Card background="#c7bfc4">
        <Header>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Header>
      </Card>
    </Sections>
  );
};

export default Hero;
