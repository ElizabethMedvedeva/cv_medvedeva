import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #1c2120;
  max-width: 1170px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const MainWrapper = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  @media (max-width: 915px) {
    flex-direction: column;
  }
`;
export const MainTitle = styled.div`
  color: #ffffff;
  h1 {
    font-size: 30px;
    padding: 15px 0;
    @media (max-width: 1030px) {
      font-size: 25px;
    }
    @media (max-width: 915px) {
      font-size: 30px;
    }
    @media (max-width: 915px) {
      font-size: 25px;
    }
  }
  h3 {
    font-size: 20px;
  }
`;

export const FirstRow = styled.div`
  padding-top: 35px;
  width: 100%;
`;
export const FirstSRowContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
`;
export const SecondRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
