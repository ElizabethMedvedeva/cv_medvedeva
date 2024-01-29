import styled from "styled-components";

export const CentralContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 915px) {
    flex-direction: column;
  }
`;

export const SetOfTwoIcons = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-between;
  @media (max-width: 1090px) {
    height: 350px;
  }
  @media (max-width: 1030px) {
    height: 300px;
  }
  @media (max-width: 915px) {
    flex-direction: row;
    height: auto;
    margin-bottom: 20px;
    justify-content: space-around;
    width: 100%;
  }
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
  @media (max-width: 1030px) {
    max-width: 60px;
  }
  @media (max-width: 915px) {
    max-width: 50px;
  }
`;

export const CentralLogo = styled.div`
  max-width: 400px;
  margin: 0 50px;
  @media (max-width: 1090px) {
    max-width: 350px;
  }
  @media (max-width: 1030px) {
    max-width: 300px;
  }
  @media (max-width: 915px) {
    max-width: 270px;
  }
  @media (max-width: 415px) {
    max-width: 250px;
  }
  @media (max-width: 390px) {
    max-width: 230px;
  }
`;
export const SetOfThreeIcons = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-around;
  @media (max-width: 1090px) {
    height: 350px;
  }
  @media (max-width: 1030px) {
    height: 300px;
  }
  @media (max-width: 915px) {
    flex-direction: row;
    margin-top: 30px;
    width: 100%;
    height: auto;
    justify-content: space-around;
    align-items: center;
  }
`;

export const PolaroidImg = styled.img`
  filter: invert(1);
`;

export const HeadphoneLogoWrapper = styled.div`
  max-width: 150px;
  @media (max-width: 1090px) {
    max-width: 120px;
  }
  @media (max-width: 1030px) {
    max-width: 100px;
  }
  @media (max-width: 915px) {
    max-width: 80px;
  }
`;
export const NotebookLogoWrapper = styled.div`
  max-width: 125px;
  margin: 0 auto;
  @media (max-width: 1090px) {
    max-width: 100px;
  }
  @media (max-width: 1030px) {
    max-width: 80px;
  }
  @media (max-width: 915px) {
    max-width: 70px;
  }
`;

export const StackLogoWrapper = styled.div`
  max-width: 125px;
  @media (max-width: 1090px) {
    max-width: 100px;
  }
  @media (max-width: 1030px) {
    max-width: 80px;
  }
  @media (max-width: 915px) {
    max-width: 70px;
  }
`;
