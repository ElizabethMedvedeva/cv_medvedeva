import { About } from "./about/about";
import { Central } from "./central/central";
import { MainContainer, MainWrapper } from "./main.Styled";

export const Main = () => {
  return (
    <MainContainer id="main_container">
      <MainWrapper>
        <div>
          <About />
        </div>
        <div>
          <Central />
        </div>
      </MainWrapper>
    </MainContainer>
  );
};
