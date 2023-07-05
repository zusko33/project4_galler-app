import Image from "next/image";
import FavoriteButton from "../favButton/FavoriteButton";

export default function ArtPiecesPreview({ data, onToggleFavorite }) {
  const { imageSource, name, artist, index } = data;
  return (
    <>
      <Image
        src={imageSource}
        height={230}
        width={140}
        alt={`piece of art title: ${name} by ${artist}`}
      />
      <FavoriteButton onClick={onToggleFavorite} />
      <p key={index}>
        "{name}" : {artist}
      </p>
    </>
  );
}
