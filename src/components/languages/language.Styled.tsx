import styled from "styled-components";

import { HELIOTROPE_COLORS, WHITE_COLORS } from "../const";

export const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LanguageTitle = styled.div`
  margin-bottom: 30px;
  align-items: center;
  h1 {
    color: ${HELIOTROPE_COLORS};
    font-family: "Caladea", serif;
    @media (max-width: 390px) {
      font-size: 25px;
      margin-top: 10px;
    }
  }
`;
export const LanguagesList = styled.div`
  margin-bottom: 30px;
`;
export const LanguageDiv = styled.div`
  display: flex;
  align-items: center;
  h3 {
    color: ${WHITE_COLORS};
    @media (max-width: 390px) {
      font-size: 15px;
    }
  }
  h4 {
    color: ${WHITE_COLORS};
    @media (max-width: 390px) {
      font-size: 15px;
    }
  }
`;
