import styled from "styled-components";

import { HELIOTROPE_COLORS, WHITE_COLORS } from "../const";

export const ProjectTitle = styled.div`
  color: ${HELIOTROPE_COLORS};
  font-family: "Caladea", serif;
  padding-bottom: 30px;
  text-align: center;
`;
export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${WHITE_COLORS};
`;
export const ProjectLink = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  a {
    color: inherit;
  }
  h3 {
    font-size: 40px;
    margin-right: 20px;
  }
`;
