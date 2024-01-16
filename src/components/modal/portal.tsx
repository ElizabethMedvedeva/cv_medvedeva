import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
interface IPortal {
  children: ReactNode;
}
export const Portal = ({ children }: IPortal) => {
  console.log(children, "Portal children");
  const [container] = useState(() => document.createElement("div"));
  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);
  return ReactDOM.createPortal(children, container);
};
