import { MainTitle } from "../main.Styled";

import { AboutContainer, AboutTextDiv, ImgDiv, Photo } from "./about.Styled";

export const About = () => {
  return (
    <AboutContainer>
      <MainTitle>
        <h1>ELIZAVETA MEDVEDEVA</h1>
        <ImgDiv>
          <Photo src="assets/photo.png" alt="photo"></Photo>
        </ImgDiv>
        <h3>Frontend Developer</h3>
      </MainTitle>

      <AboutTextDiv>
        <h4>
          Hey there! I&apos;m a Junior Frontend Developer on the lookout for a
          cool company in the frontend development space. I&apos;m eager to join
          a forward-thinking team where I can learn and grow both personally and
          professionally. Let&apos;s build awesome things together!
        </h4>
      </AboutTextDiv>
    </AboutContainer>
  );
};
