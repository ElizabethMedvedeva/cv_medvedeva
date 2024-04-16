import { Button, ButtonContainer } from "./button.Stylrd";

interface IDownloadButton {
  children?: string;
}

export const DownloadButton = ({ children }: IDownloadButton) => {
  return (
    <ButtonContainer>
      {children}
      <a
        href="https://drive.google.com/file/d/1zJrIu3m8OaK5rAiOWn42UuG7WvymiFnP/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>GET PDF</Button>
      </a>
    </ButtonContainer>
  );
};
