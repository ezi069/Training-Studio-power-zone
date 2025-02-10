/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/classOne.jpg";
import ClassTwoBg from "../Image/classTwo.jpg";
import ClassThreeBg from "../Image/classThree.jpg";
import ClassFourBg from "../Image/classFour.jpg";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output
        title="Strength & Conditioning"
        info="Build your strength and endurance with our expertly designed workouts. This class focuses on improving overall fitness through weight training, bodyweight exercises, and high-intensity movements."
        img={ClassOneBg}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="Cardio & Endurance"
        info="Boost your stamina and cardiovascular health with dynamic exercises that get your heart pumping. From HIIT to steady-state cardio, this class is perfect for those looking to enhance endurance."
        img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Functional Training"
        info="Improve mobility, balance, and coordination through functional movements designed for real-life strength. Perfect for athletes and everyday fitness enthusiasts alike."
        img={ClassThreeBg}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="Mind & Body Wellness"
        info="Unwind and recharge with a mix of yoga, stretching, and mindfulness techniques. Strengthen your body while promoting mental clarity and relaxation."
        img={ClassFourBg}
      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media(max-width: 900px){
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px){
    max-width: 62%;
  }
`;

export default Results;
