import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight({ pieces, updateArtPieceInfo }) {
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
  return (
    <>
      <Image
        src={randomPiece.imageSource}
        height={460}
        width={280}
        alt={`piece of art by ${randomPiece.artist}`}
      />
      <FavoriteButton updateArtPieceInfo={updateArtPieceInfo} />
      <h2>{randomPiece.artist}</h2>
    </>
  );
}
