/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
    <GymProgramCard
        title="Basic Fitness"
        desc="A perfect starting point for beginners looking to build endurance, strength, and flexibility in a structured way."
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="Designed for experienced individuals aiming to take muscle growth and strength training to the next level."
      />
      <GymProgramCard
        title="New Gym Training"
        desc="Stay ahead with the latest training techniques, combining functional movements and modern fitness strategies."
      />
      <GymProgramCard
        title="Yoga Training"
        desc="Improve flexibility, balance, and mental well-being with guided yoga sessions suitable for all levels."
      />
      <GymProgramCard
        title="Basic Muscle Course"
        desc="A fundamental strength-building course focusing on proper form, muscle activation, and progressive overload."
      />
      <GymProgramCard
        title="Body Building Course"
        desc="An intensive program tailored for serious lifters looking to sculpt their physique and enhance muscle definition."
      />
    </Container>

  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
