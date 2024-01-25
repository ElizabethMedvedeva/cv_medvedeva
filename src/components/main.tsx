import { About } from "./about/about";
import { Central } from "./central/central";
import { DownloadButton } from "./shared/button";
import { MainContainer, MainWrapper } from "./main.Styled";

export const Main = () => {
  return (
    <MainContainer id="main_container">
      <MainWrapper>
        <div>
          <About />
          <DownloadButton />
        </div>
        <div>
          <Central />
        </div>
      </MainWrapper>
    </MainContainer>
  );
};
