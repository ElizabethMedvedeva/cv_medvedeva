import {
  ProjectLink,
  ProjectsContainer,
  ProjectTitle,
} from "./projects.Styled";

export const Projects = () => {
  return (
    <div>
      <ProjectTitle>
        <h1>PET PROJECTS</h1>
      </ProjectTitle>
      <ProjectsContainer>
        <ProjectLink>
          <h3>🐄</h3>
          <a
            href="https://elizabethmedvedeva.github.io/weather_forecast/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weather Forecast
          </a>
        </ProjectLink>
        <ProjectLink>
          <h3>🐓</h3>
          <a
            href="https://elizabethmedvedeva.github.io/mogo-project/dist/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Layout Project MoGo
          </a>
        </ProjectLink>
        <ProjectLink>
          <h3>🦆</h3>
          <a
            href="https://elizabethmedvedeva.github.io/mogo-project/dist/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV_Medvedeva
          </a>
        </ProjectLink>
      </ProjectsContainer>
    </div>
  );
};
