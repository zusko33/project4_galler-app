import Image from "next/image";

export default function ArtPiecesPreview({ image, title, artist }) {
  return (
    <>
      <h2>
        "{title}" : {artist}
      </h2>
      <Image
        src={image}
        height={230}
        width={140}
        alt={`piece of art title: ${title} by ${artist}`}
      />
    </>
  );
}
