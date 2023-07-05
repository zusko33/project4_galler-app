// import { ReactComponent as Heart } from "../../assets/heart.svg";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

const StyledButton = styled.button`
  border: none;
  font-size: 3rem;
  color: ${(props) => (props.isFavorite ? "red" : "white")};
  background-color: transparent;
  position: absolute;

  &:hover {
    color: red;
  }
`;
export default function FavoriteButton({ slug }) {
  const [artPiecesInfo, updateArtPiecesInfo] = useLocalStorageState(
    "art-piece-info",
    { defaultValue: [] }
  );

  function handleToggleFavorite(slug) {
    updateArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);
      // console.log("info", info);
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  return (
    <StyledButton
      onClick={() => {
        handleToggleFavorite(slug);
      }}
      // isFavorite={isFavorite}
    >
      ♥️
    </StyledButton>
  );
}
