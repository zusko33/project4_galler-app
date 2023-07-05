import Image from "next/image";
import FavoriteButton from "../favButton/FavoriteButton";

export default function Spotlight({
  pieces,
  onToggleFavorite,
  isFavorite,
  slug,
  artPiecesInfo,
}) {
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
  return (
    <>
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <Image
        src={randomPiece.imageSource}
        height={460}
        width={300}
        alt={`piece of art by ${randomPiece.artist}`}
      />

      <h2>{randomPiece.artist}</h2>
    </>
  );
}
