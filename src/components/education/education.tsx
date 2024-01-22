import {
  Bookmark,
  EducationContainer,
  EducationContent,
  EducationTitle,
  Rectangle,
  Triangle,
} from "./education.Styled";

export const Education = () => {
  return (
    <EducationContainer id="education_container">
      <EducationTitle id="education_title">
        <h1>EDUCATION</h1>
      </EducationTitle>
      <EducationContent>
        <div>
          <Bookmark>
            <Rectangle>
              <h6>Jun 2023 -</h6>
              <h6>Oct 2023</h6>
            </Rectangle>
            <Triangle></Triangle>
          </Bookmark>
          <h4>TeachMeSkills</h4>
          <h5>Frontend Developer</h5>
        </div>
        <div>
          <Bookmark>
            <Rectangle>
              <h6>2018 -</h6>
              <h6>2020</h6>
            </Rectangle>
            <Triangle></Triangle>
          </Bookmark>
          <h4>
            Graduate School of the National Academy of Sciences of Belarus
          </h4>
          <h5>Master degree of Chemistry</h5>
        </div>
        <div>
          <Bookmark>
            <Rectangle>
              <h6>2014 -</h6>
              <h6>2018</h6>
            </Rectangle>
            <Triangle></Triangle>
          </Bookmark>
          <h4>Mogilev State University named by A. A. Kuleshova</h4>
          <h5>Bachelor’s degree</h5>
          <h5>Faculty of Math and Natural Sciences</h5>
        </div>
      </EducationContent>
    </EducationContainer>
  );
};
