import styled from "styled-components";

export const CentralContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SetOfTwoIcons = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-between;
`;
export const ModalDiv = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

export const CentralLogoWrapper = styled.div`
  max-width: 80px;
  margin: 0 auto;
`;

export const CentralLogo = styled.div`
  max-width: 400px;
  margin: 0 50px;
`;
export const SetOfThreeIcons = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-around;
`;

export const PolaroidImg = styled.img`
  filter: invert(1);
`;

export const HeadphoneLogoWrapper = styled.div`
  max-width: 150px;
`;
export const NotebookLogoWrapper = styled.div`
  max-width: 125px;
  margin: 0 auto;
`;

export const StackLogoWrapper = styled.div`
  max-width: 125px;
`;
