import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../favButton/FavoriteButton";
import styled from "styled-components";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  onToggleFavorite,
  slug,
  isFavorite,
}) {
  console.log(image, title, artist);
  return (
    <article>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        isFavorite={isFavorite}
      />
      <Image
        src={image}
        height={460}
        width={300}
        alt={`piece of art title: ${title} by ${artist}`}
      />

      <h1>"{title}"</h1>
      <div>
        <p>{artist}</p>
        <p>{year}</p>
        <p>{genre}</p>
      </div>
      <StyledLink href="/art-pieces">🔙 all pieces</StyledLink>
    </article>
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
