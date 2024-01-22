import {
  HobbiesContainer,
  HobbiesInfoContainer,
  HobbiesSetDiv,
  HobbiesTitle,
  Hobby,
  HobbyImgWrapper,
  HobbyName,
  HobbyNameSkin,
  HobbyR,
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
        <HobbiesSetDiv id="hobbies_set">
          <Hobby id="movies">
            <HobbyImgWrapper>
              <img src="assets/movies.png" alt="movies"></img>
            </HobbyImgWrapper>
            <HobbyName>
              <h4>Movies</h4>
            </HobbyName>
          </Hobby>

          <Hobby id="skin_care">
            <HobbyImgWrapper>
              <img src="assets/skin_care.png" alt="skin_care"></img>
            </HobbyImgWrapper>
            <HobbyNameSkin>
              <h4>Enjoy learning about skin care</h4>
            </HobbyNameSkin>
          </Hobby>
        </HobbiesSetDiv>
        <HobbiesSetDiv id="hobbies_set">
          <Hobby id="cooking">
            <HobbyImgWrapper>
              <img src="assets/cooking.png" alt="cooking"></img>
            </HobbyImgWrapper>
            <HobbyName>
              <h4>Cooking</h4>
            </HobbyName>
          </Hobby>
          <HobbyR id="reading">
            <HobbyImgWrapper>
              <img src="assets/reading.png" alt="reading"></img>
            </HobbyImgWrapper>
            <HobbyName>
              <h4>Reading</h4>
            </HobbyName>
          </HobbyR>
        </HobbiesSetDiv>
        <HobbiesSetDiv id="hobbies_set">
          <Hobby id="travel">
            <HobbyImgWrapper>
              <InvertImg src="assets/travel.png" alt="travel"></InvertImg>
            </HobbyImgWrapper>
            <HobbyName>
              <h4>Travel</h4>
            </HobbyName>
          </Hobby>
          <Hobby id="planting">
            <HobbyImgWrapper>
              <PlantImg src="assets/plant.png" alt="plant"></PlantImg>
            </HobbyImgWrapper>
            <HobbyName>
              <h4>Plant cultivation</h4>
            </HobbyName>
          </Hobby>
        </HobbiesSetDiv>
      </HobbiesInfoContainer>
    </HobbiesContainer>
  );
};
