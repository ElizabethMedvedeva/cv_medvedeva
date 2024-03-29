import styled from "styled-components";

import { HELIOTROPE_COLORS, WHITE_COLORS } from "../const";

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EducationTitle = styled.div`
  margin-bottom: 30px;
  h1 {
    color: ${HELIOTROPE_COLORS};
    font-family: "Caladea", serif;
    @media (max-width: 500px) {
      font-size: 25px;
    }
  }
`;
export const EducationContent = styled.div`
  color: ${WHITE_COLORS};
`;

export const Bookmark = styled.div`
  display: flex;
  margin-right: 20px;
`;
export const Rectangle = styled.div`
  width: 80px;
  height: 0;
  border-bottom: 30px solid ${HELIOTROPE_COLORS};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${WHITE_COLORS};
`;
export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 20px solid ${HELIOTROPE_COLORS};
`;

export const EducationStage = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 20px 10px;
`;

export const EducationPlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  h4 {
    margin-bottom: 2px;
    @media (max-width: 500px) {
      font-size: 12px;
      text-align: center;
    }
  }
  h5 {
    @media (max-width: 500px) {
      font-size: 10px;
      text-align: center;
    }
  }
`;
