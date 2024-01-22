import styled from "styled-components";

import { HELIOTROPE_COLORS } from "../const";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgDiv = styled.div`
  max-width: 250px;
  height: auto;
  margin: 0 auto;
`;

export const Photo = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

export const AboutTextDiv = styled.div`
  max-width: 300px;
  margin-top: 20px;
  h4 {
    color: ${HELIOTROPE_COLORS};
  }
`;
