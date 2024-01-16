import { ReactNode, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { ANIMATION_TIME } from "../const";

import animationStyles from "./animationModal.css";

interface ILayout {
  opened: boolean;
  children: ReactNode;
  onClose: () => void;
}
const overLayAnimation = {
  enter: animationStyles.overlayEnter,
  enterActive: animationStyles.overlayEnterActive,
  exit: animationStyles.overlayExit,
  exitActive: animationStyles.overlayExitActive,
};

export const Layout = ({ opened, children, onClose }: ILayout) => {
  const overlayRef = useRef();
  const contentRef = useRef();
  const [animationIn, setAnimationIn] = useState<boolean>(false);

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  return (
    <div>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overLayAnimation}
      >
        <div ref={overlayRef} className={styled.overlay} onClick={onClose}></div>
      </CSSTransition>
    </div>
  );
};
