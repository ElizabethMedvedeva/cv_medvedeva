import { useState } from "react";

import { Contacts } from "../contacts/contacts";
import { Education } from "../education/education";
import { Hobbies } from "../hobbies/hobbies";
import { Languages } from "../languages/languages";
import { AnimatedModal } from "../modal/modal";
import { Skills } from "../skills/skills";

import {
  CentralContainer,
  CentralLogo,
  CentralLogoWrapper,
  HeadphoneLogoWrapper,
  NotebookLogoWrapper,
  SetOfThreeIcons,
  SetOfTwoIcons,
  StackLogoWrapper,
} from "./central.Styled";

export const Central = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [contentMarker, setContentMarker] = useState<string>("");
  return (
    <CentralContainer id="central_container">
      <SetOfTwoIcons>
        <div id="hobbies_modal">
          <HeadphoneLogoWrapper
            id="headphone_logo_wrapper"
            onClick={() => {
              setContentMarker("hobbies");
              setOpened(true);
            }}
          >
            <img src="assets/headphone.png" alt="headphone"></img>
          </HeadphoneLogoWrapper>
          <AnimatedModal
            contentMarker={contentMarker}
            contentName="hobbies"
            opened={opened}
            onClose={() => {
              setOpened(false);
            }}
          >
            <div>
              <Hobbies />
            </div>
          </AnimatedModal>
        </div>
        <div id="education_modal">
          <NotebookLogoWrapper
            id="notebook_logo_wrapper"
            onClick={() => {
              setContentMarker("education");
              setOpened(true);
            }}
          >
            <img src="assets/notebook.png" alt="notebook"></img>
          </NotebookLogoWrapper>
          <AnimatedModal
            contentMarker={contentMarker}
            contentName="education"
            opened={opened}
            onClose={() => {
              setOpened(false);
            }}
          >
            <div>
              <Languages />
              <Education />
            </div>
          </AnimatedModal>
        </div>
      </SetOfTwoIcons>
      <CentralLogo id="central_logo">
        <div>
          <div
            onClick={() => {
              setContentMarker("projects");
              setOpened(true);
            }}
          >
            <img src="assets/laptop.png" alt="laptop"></img>
          </div>
          <AnimatedModal
            contentMarker={contentMarker}
            contentName="projects"
            opened={opened}
            onClose={() => {
              setOpened(false);
            }}
          >
            <div>
              <h2>Projects</h2>
            </div>
          </AnimatedModal>
        </div>
      </CentralLogo>
      <SetOfThreeIcons>
        <div>
          <StackLogoWrapper
            id="central_logo_wrapper"
            onClick={() => {
              setContentMarker("skills");
              setOpened(true);
            }}
          >
            <img src="assets/stack.png" alt="stack"></img>
          </StackLogoWrapper>
          <AnimatedModal
            contentMarker={contentMarker}
            contentName="skills"
            opened={opened}
            onClose={() => {
              setOpened(false);
            }}
          >
            <div>
              <Skills />
            </div>
          </AnimatedModal>
        </div>
        <div>
          <CentralLogoWrapper
            id="central_logo_wrapper"
            onClick={() => {
              setContentMarker("contacts");
              setOpened(true);
            }}
          >
            <img id="polaroid" src="assets/phone.png" alt="phone"></img>
          </CentralLogoWrapper>
          <AnimatedModal
            contentMarker={contentMarker}
            contentName="contacts"
            opened={opened}
            onClose={() => {
              setOpened(false);
            }}
          >
            <div>
              <Contacts />
            </div>
          </AnimatedModal>
        </div>
      </SetOfThreeIcons>
    </CentralContainer>
  );
};
