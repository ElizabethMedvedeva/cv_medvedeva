import { useState } from "react";

import { AnimatedModal } from "../modal/modal";

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
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <CentralContainer id="central_container">
      <SetOfTwoIcons>
        <div>
          <HeadphoneLogoWrapper
            id="headphone_logo_wrapper"
            onClick={() => setOpened(true)}
          >
            <img src="assets/headphone.png" alt="headphone"></img>
          </HeadphoneLogoWrapper>
          <AnimatedModal opened={opened} onClose={() => setOpened(false)}>
            <div>
              <h3>jncksjnvn</h3>
            </div>
          </AnimatedModal>
        </div>
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
