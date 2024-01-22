import {
  LanguageContainer,
  LanguageDiv,
  LanguagesList,
  LanguageTitle,
} from "./language.Styled";

export const Languages = () => {
  return (
    <LanguageContainer id="language_container">
      <LanguageTitle id="language_title">
        <h1>LANGUAGES</h1>
      </LanguageTitle>
      <LanguagesList id="language_list">
        <LanguageDiv id="language_div">
          <h3> English&nbsp;/&nbsp;</h3>
          <h4>B2</h4>
        </LanguageDiv>
        <LanguageDiv>
          <h3> Russian&nbsp;/&nbsp;</h3>
          <h4> Native</h4>
        </LanguageDiv>
      </LanguagesList>
    </LanguageContainer>
  );
};
