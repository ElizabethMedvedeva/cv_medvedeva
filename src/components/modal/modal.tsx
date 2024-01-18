import { ReactNode, useEffect, useState } from "react";

import { ANIMATION_TIME } from "../const";

import { Layout } from "./layout";
import { Portal } from "./portal";

interface IAnimatedModal {
  children: ReactNode;
  opened: boolean;
  contentMarker: string;
  contentName: string;
  onClose: () => void;
}

export const useMount = (opened: boolean) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME);
    }
  }, [opened]);
  return mounted;
};

export const AnimatedModal = ({
  children,
  opened,
  contentMarker,
  contentName,
  onClose,
}: IAnimatedModal) => {
  const mounted = useMount(opened && contentMarker === contentName);
  if (!mounted) {
    return null;
  }
  return (
    <Portal>
      <Layout onClose={onClose} opened={opened}>
        {children}
      </Layout>
    </Portal>
  );
};
