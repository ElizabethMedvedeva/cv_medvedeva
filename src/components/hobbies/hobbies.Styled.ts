import { styled } from "styled-components";

import { HELIOTROPE_COLORS, WHITE_COLORS } from "../const";

export const HobbiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

export const HobbiesTitle = styled.div`
  margin-bottom: 30px;
  h1 {
    color: ${HELIOTROPE_COLORS};
    font-family: "Caladea", serif;
  }
`;

export const HobbiesInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HobbiesSetDiv = styled.div`
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
`;

export const Hobby = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 20px 10px;
`;

export const HobbyR = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 20px;
  margin-right: 26px;
  margin-left: 0px;
`;

export const InvertImg = styled.img`
  filter: invert(1);
`;

export const HobbyImgWrapper = styled.div`
  max-width: 50px;
  min-width: 50px;
  margin: 5px;
`;

export const HobbyName = styled.div`
  h4 {
    color: ${WHITE_COLORS};
  }
`;

export const HobbyNameSkin = styled.div`
  h4 {
    color: ${WHITE_COLORS};
    font-size: 14px;
  }
`;

export const PlantImg = styled.img`
  max-width: 40px;
  filter: invert(1);
`;
