import { About } from "./about/about";
import { Central } from "./central/central";
import { Contacts } from "./contacts/contacts";
import { Education } from "./education/education";
import { Hobbies } from "./hobbies/hobbies";
import { Languages } from "./languages/languages";
import { Skills } from "./skills/skills";
import { FirstRow, MainContainer } from "./main.Styled";

export const Main = () => {
  return (
    <MainContainer>
      <div>
        <h1>ELIZAVETA MEDVEDEVA</h1>
        <h3>Frontend Developer</h3>
      </div>
      <FirstRow>
        <Skills />
        <About />
        <Contacts />
      </FirstRow>
      <Central />
      <Hobbies />
      <Languages />
      <Education />
    </MainContainer>
  );
};
