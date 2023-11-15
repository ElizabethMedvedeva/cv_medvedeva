import { AboutContainer, AboutTextDiv, ImgDiv, Photo } from "./about.Styled";

export const About = () => {
  return (
    <AboutContainer>
      <ImgDiv>
        <Photo src="assets/photo.png" alt="photo"></Photo>
      </ImgDiv>
      <AboutTextDiv>
        <h4>
          I am a highly motivated team player with strong communication skills
          and a proven ability to meet deadlines. I am actively seeking
          employment with a forward-thinking company in the field of frontend
          development to grow as a professional, develop my hard skills, and
          become an expert in frontend development.
        </h4>
      </AboutTextDiv>
    </AboutContainer>
  );
};
