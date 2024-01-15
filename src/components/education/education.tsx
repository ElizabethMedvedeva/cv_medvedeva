import {
  EducationContainer,
  EducationContent,
  EducationTitle,
} from "./education.Styled";

export const Education = () => {
  return (
    <EducationContainer id="education_container">
      <EducationTitle id="education_title">
        <h1>EDUCATION</h1>
      </EducationTitle>
      <EducationContent>
        <div>
          <img></img>
          <h4>TeachMeSkills</h4>
          <h5>Frontend Developer</h5>
        </div>
        <div>
          <img></img>
          <h4>
            Graduate School of the National Academy of Sciences of Belarus
          </h4>
          <h5>Master degree of Chemistry</h5>
        </div>
        <div>
          <img></img>
          <h4>Mogilev State University named by A. A. Kuleshova</h4>
          <h5>Bachelor’s degree</h5>
          <h5>Faculty of Math and Natural Sciences</h5>
        </div>
      </EducationContent>
    </EducationContainer>
  );
};
