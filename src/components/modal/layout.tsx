import { ReactNode, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { ANIMATION_TIME } from "../const";

import animationStyles from "./animationModal.module.css";
import styles from "./styles.module.css";

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

const contentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
};

export const Layout = ({ opened, children, onClose }: ILayout) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [animationIn, setAnimationIn] = useState<boolean>(false);
  console.log(overlayRef, "overlay");
  console.log(contentRef, "content");
  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  return (
    <div className={styles.container}>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overLayAnimation}
      >
        <div
          ref={overlayRef}
          className={styles.overlay}
          onClick={onClose}
        ></div>
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};
