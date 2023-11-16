import {
  CentralContainer,
  CentralLogo,
  CentralLogoWrapper,
  HeadphoneLogoWrapper,
  NotebookLogoWrapper,
  PolaroidImg,
  SetOfThreeIcons,
  SetOfTwoIcons,
  StackLogoWrapper,
} from "./central.Styled";

export const Central = () => {
  return (
    <CentralContainer id="central_container">
      <SetOfTwoIcons>
        <HeadphoneLogoWrapper id="headphone_logo_wrapper">
          <img src="assets/headphone.png" alt="headphone"></img>
        </HeadphoneLogoWrapper>
        <NotebookLogoWrapper id="notebook_logo_wrapper">
          <img src="assets/notebook.png" alt="notebook"></img>
        </NotebookLogoWrapper>
      </SetOfTwoIcons>
      <CentralLogo id="central_logo">
        <img src="assets/laptop.png" alt="laptop"></img>
      </CentralLogo>
      <SetOfThreeIcons>
        <StackLogoWrapper id="central_logo_wrapper">
          <img src="assets/stack.png" alt="stack"></img>
        </StackLogoWrapper>
        <CentralLogoWrapper id="central_logo_wrapper">
          <PolaroidImg src="assets/polaroid.png" alt="polaroid"></PolaroidImg>
        </CentralLogoWrapper>
        <CentralLogoWrapper id="central_logo_wrapper">
          <img id="polaroid" src="assets/phone.png" alt="phone"></img>
        </CentralLogoWrapper>
      </SetOfThreeIcons>
    </CentralContainer>
  );
};
