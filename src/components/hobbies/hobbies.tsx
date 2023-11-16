import {
  HobbiesContainer,
  HobbiesIconDiv,
  HobbiesInfoContainer,
  HobbiesInfoDiv,
  HobbiesPlantDiv,
  HobbiesSetDiv,
  HobbiesTitle,
  InvertImg,
  PlantImg,
} from "./hobbies.Styled";

export const Hobbies = () => {
  return (
    <HobbiesContainer id="hobbies_container">
      <HobbiesTitle id="hobbies_title">
        <h1>HOBBIES</h1>
      </HobbiesTitle>
      <HobbiesInfoContainer id="hobbies_info_container">
        <HobbiesSetDiv>
          <HobbiesInfoDiv>
            <img
              style={{ maxWidth: "50px" }}
              src="assets/movies.png"
              alt="movies"
            ></img>
            <h4>Movies</h4>
          </HobbiesInfoDiv>
          <HobbiesInfoDiv>
            <img
              style={{ maxWidth: "50px" }}
              src="assets/cooking.png"
              alt="cooking"
            ></img>
            <h4>Cooking</h4>
          </HobbiesInfoDiv>
          <HobbiesInfoDiv>
            <img
              style={{ maxWidth: "50px" }}
              src="assets/reading.png"
              alt="reading"
            ></img>
            <h4>Reading</h4>
          </HobbiesInfoDiv>
        </HobbiesSetDiv>
        <HobbiesSetDiv>
          <HobbiesInfoDiv>
            <InvertImg
              style={{ maxWidth: "50px" }}
              src="assets/travel.png"
              alt="travel"
            ></InvertImg>
            <h4>Travel</h4>
          </HobbiesInfoDiv>
          <HobbiesIconDiv>
            <img
              style={{ maxWidth: "50px" }}
              src="assets/skin_care.png"
              alt="skin_care"
            ></img>
            <h4>Enjoy learning about skin care</h4>
          </HobbiesIconDiv>
          <HobbiesPlantDiv>
            <PlantImg src="assets/plant.png" alt="plant"></PlantImg>
            <h4>Plant cultivation</h4>
          </HobbiesPlantDiv>
        </HobbiesSetDiv>
      </HobbiesInfoContainer>
    </HobbiesContainer>
  );
};
