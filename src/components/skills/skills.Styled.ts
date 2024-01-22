import styled from "styled-components";

import { HELIOTROPE_COLORS, WHITE_COLORS } from "../const";
export const SkillsMain = styled.div``;

export const TitleSkillsDiv = styled.div`
  text-align: center;
  margin-bottom: 30px;
  h1 {
    font-family: "Caladea", serif;
    color: ${HELIOTROPE_COLORS};
  }
`;
export const SkillsDiv = styled.div`
  margin: 0 auto;
`;
export const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  h3 {
    margin: 0 0 0 30px;
    color: ${WHITE_COLORS};
  }
`;
export const SkillImgDiv = styled.div``;

export const SkillImg = styled.img`
  max-width: 40px;
  height: auto;
`;
