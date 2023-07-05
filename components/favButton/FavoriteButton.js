// import { ReactComponent as Heart } from "../../assets/heart.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  font-size: 2rem;
  color: ${(props) => (props.isFavorite ? "red" : "black")};
  background-color: darkgray;

  &:hover {
    color: red;
  }
`;
export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <StyledButton
      onClick={onToggleFavorite}
      isFavorite={isFavorite}
      slug={slug}
    >
      ♥️
    </StyledButton>
  );
}
