import {
  SkillContainer,
  SkillImg,
  SkillImgDiv,
  SkillsDiv,
  SkillsMain,
  TitleSkillsDiv,
} from "./skills.Styled";

export const Skills = () => {
  return (
    <SkillsMain id="skills">
      <TitleSkillsDiv>
        <h1>SKILLS</h1>
      </TitleSkillsDiv>
      <SkillsDiv>
        <SkillContainer id="skill-container">
          <SkillImgDiv id="skill-img_div">
            <SkillImg
              id="skill-img_react"
              src="assets/react.png"
              alt="react"
            ></SkillImg>
          </SkillImgDiv>
          <h3>React</h3>
        </SkillContainer>
        <SkillContainer id="skill-container">
          <SkillImgDiv id="skill-img_div">
            <SkillImg
              id="skill-img_redux"
              src="assets/redux.png"
              alt="redux"
            ></SkillImg>
          </SkillImgDiv>
          <h3>Redux</h3>
        </SkillContainer>
        <SkillContainer id="skill-container">
          <SkillImgDiv id="skill-img_div">
            <SkillImg
              id="skill-img_typescript"
              src="assets/ts.png"
              alt="typescript"
            ></SkillImg>
          </SkillImgDiv>
          <h3>Typescript</h3>
        </SkillContainer>
        <SkillContainer id="skill-container">
          <SkillImgDiv id="skill-img_div">
            <SkillImg
              id="skill-img_javascript"
              src="assets/js.png"
              alt="javascript"
            ></SkillImg>
          </SkillImgDiv>
          <h3>JavaScript</h3>
        </SkillContainer>
      </SkillsDiv>
    </SkillsMain>
  );
};
