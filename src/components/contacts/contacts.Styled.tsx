import styled from "styled-components";

import { WHITE_COLORS } from "../const";
export const ContactsDiv = styled.div``;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ContactTitle = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    color: #a280ff;
    font-family: "Caladea", serif;
  }
`;
export const ContactImgDiv = styled.div`
  margin: 20px;
`;
export const ContactContent = styled.div`
  margin-top: 30px;
  color: ${WHITE_COLORS};
`;

export const ContactImg = styled.img`
  max-width: 40px;
  height: auto;
`;
export const ContactLinkDiv = styled.div`
  a {
    color: inherit;
  }
`;
