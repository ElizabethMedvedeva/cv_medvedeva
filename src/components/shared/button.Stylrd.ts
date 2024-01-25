import styled from "styled-components";

import { HELIOTROPE_COLORS, WHITE_COLORS } from "../const";

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 50px;
  width: 70px;
  height: 70px;
  background-color: transparent;
  border: 5px solid ${HELIOTROPE_COLORS};
  color: ${WHITE_COLORS};
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
