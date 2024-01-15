import { About } from "./about/about";
import { Central } from "./central/central";
import { Contacts } from "./contacts/contacts";
import { Education } from "./education/education";
import { Hobbies } from "./hobbies/hobbies";
import { Languages } from "./languages/languages";
import { Skills } from "./skills/skills";
import {
  FirstRow,
  FirstSRowContainer,
  MainContainer,
  MainTitle,
  MainWrapper,
  SecondRow,
} from "./main.Styled";

export const Main = () => {
  return (
    <MainContainer id="main_container">
      <MainWrapper id="main_wrapper">
        <MainTitle>
          <h1>ELIZAVETA MEDVEDEVA</h1>
          <h3>Frontend Developer</h3>
        </MainTitle>
        <FirstRow id="first_row">
          <FirstSRowContainer id="first_row_container">
            <Skills />
            <About />
            <Contacts />
          </FirstSRowContainer>
        </FirstRow>
        <Central />
        <SecondRow id="second_row">
          <Hobbies />
          <Education />
          <Languages />
        </SecondRow>
      </MainWrapper>
    </MainContainer>
  );
};
