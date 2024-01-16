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
      <MainWrapper>
        <div>
          <About />
          <Contacts />
        </div>
        <div>
          <Central />
        </div>
      </MainWrapper>
    </MainContainer>
  );
};
