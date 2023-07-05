import ArtPiecesPreview from "../../components/art-pieces-preview";
import Link from "next/link";
import styled from "styled-components";

export default function ArtPieces({ data, onToggleFavorite, artPiecesInfo }) {
  return (
    <>
      <ul>
        {data.map((piece) => (
          <li key={piece.slug}>
            <StyledLink href={`/art-pieces/${piece.slug}`}>
              {" "}
              <ArtPiecesPreview
                data={piece}
                onToggleFavorite={onToggleFavorite}
                artPiecesInfo={artPiecesInfo}
              />
            </StyledLink>
          </li>
        ))}
      </ul>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 5%;
  width: fit-content;
  height: fit-content;

  &:hover {
    color: violet;
  }
`;
