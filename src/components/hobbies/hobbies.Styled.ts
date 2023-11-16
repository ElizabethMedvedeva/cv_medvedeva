import { styled } from "styled-components";

export const HobbiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;
export const HobbiesTitle = styled.div`
  margin-bottom: 30px;
  h1 {
    color: #a280ff;
  }
`;

export const HobbiesInfoContainer = styled.div`
  display: flex;
`;

export const HobbiesInfoDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  h4 {
    color: white;
    padding-top: 25px;
    padding-left: 15px;
  }
`;
export const InvertImg = styled.img`
  filter: invert(1);
`;

export const HobbiesIconDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  h4 {
    color: white;
  }
`;

export const HobbiesPlantDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  h4 {
    color: white;
    padding-top: 35px;
  }
`;

export const PlantImg = styled.img`
  max-width: 45px;
  filter: invert(1);
`;

export const HobbiesSetDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
