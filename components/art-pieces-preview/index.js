import Image from "next/image";
import FavoriteButton from "../favButton/FavoriteButton";

export default function ArtPiecesPreview({
  data,
  onToggleFavorite,
  slug,
  isFavorite,
  artPiecesInfo,
}) {
  const { imageSource, name, artist, index } = data;
  return (
    <>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        isFavorite={isFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <Image
        src={imageSource}
        height={230}
        width={140}
        alt={`piece of art title: ${name} by ${artist}`}
      />

      <p key={index}>
        "{name}" : {artist}
      </p>
    </>
  );
}
