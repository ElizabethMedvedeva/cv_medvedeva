import { ContactContainer, ContactImg, ContactImgDiv } from "./contacts.Styled";

export const Contacts = () => {
  return (
    <div>
      <div>
        <h1>CONTACTS</h1>
      </div>
      <div>
        <ContactContainer id="skill-container">
          <ContactImgDiv id="skill-img_div">
            <ContactImg
              id="skill-img_mail"
              src="assets/mail.png"
              alt="react"
            ></ContactImg>
          </ContactImgDiv>
          <a>elizabeth.medvedeva12@gmail.com</a>
        </ContactContainer>
        <ContactContainer id="skill-container">
          <ContactImgDiv id="skill-img_div">
            <ContactImg
              id="skill-img_github"
              src="assets/github.png"
              alt="react"
            ></ContactImg>
          </ContactImgDiv>
          <a>/ElizabethMedvedeva</a>
        </ContactContainer>
        <ContactContainer id="skill-container">
          <ContactImgDiv id="skill-img_div">
            <ContactImg
              id="skill-img_react"
              src="assets/linkedin.png"
              alt="react"
            ></ContactImg>
          </ContactImgDiv>
          <a>linkidin</a>
        </ContactContainer>
      </div>
    </div>
  );
};
