import {
  ContactContainer,
  ContactContent,
  ContactImg,
  ContactImgDiv,
  ContactLinkDiv,
  ContactsDiv,
  ContactTitle,
} from "./contacts.Styled";

export const Contacts = () => {
  return (
    <ContactsDiv>
      <ContactTitle>
        <h1>CONTACTS</h1>
      </ContactTitle>
      <ContactContent>
        <ContactContainer>
          <ContactImgDiv>
            <ContactImg src="assets/mail.png" alt="react"></ContactImg>
          </ContactImgDiv>
          <ContactLinkDiv>
            <a
              href="mailto:elizabeth.medvedeva12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              elizabeth.medvedeva12@gmail.com
            </a>
          </ContactLinkDiv>
        </ContactContainer>
        <ContactContainer>
          <ContactImgDiv>
            <ContactImg src="assets/github.png" alt="react"></ContactImg>
          </ContactImgDiv>
          <ContactLinkDiv>
            <a
              href="https://github.com/ElizabethMedvedeva"
              target="_blank"
              rel="noopener noreferrer"
            >
              /ElizabethMedvedeva
            </a>
          </ContactLinkDiv>
        </ContactContainer>
        <ContactContainer>
          <ContactImgDiv>
            <ContactImg src="assets/linkedin.png" alt="react"></ContactImg>
          </ContactImgDiv>
          <ContactLinkDiv>
            <a
              href="https://www.linkedin.com/in/elizabeth-medvedeva12/"
              target="_blank"
              rel="noopener noreferrer"
            >
              /elizabeth-medvedeva12/
            </a>
          </ContactLinkDiv>
        </ContactContainer>
      </ContactContent>
    </ContactsDiv>
  );
};
