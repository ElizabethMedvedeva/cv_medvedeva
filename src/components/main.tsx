import { About } from "./about/about";
import { Contacts } from "./contacts/contacts";
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
    </MainContainer>
  );
};
