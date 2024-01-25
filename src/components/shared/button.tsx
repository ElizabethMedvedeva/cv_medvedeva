import { Button, ButtonContainer } from "./button.Stylrd";

interface IDownloadButton {
  children?: string;
}

export const DownloadButton = ({ children }: IDownloadButton) => {
  return (
    <ButtonContainer>
      {children}
      <a
        href="https://drive.google.com/file/d/1V3iLhQ2BweMA1NT0_m-UrxMfrK8v0FNY/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>GET PDF</Button>
      </a>
    </ButtonContainer>
  );
};
