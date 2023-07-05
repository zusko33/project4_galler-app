import { ReactComponent as Heart } from "../../assets/heart.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  font-size: 2rem;
  background-color: gray;

  &:hover {
    background-color: red;
  }

  &:active {
    background-color: pink;
  }
`;
export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  // const slug = "orange-red-and-green";

  return (
    <StyledButton onClick={onToggleFavorite} isFavorite={isFavorite}>
      ♥️
    </StyledButton>
  );
}
