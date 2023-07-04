import Image from "next/image";

export default function ArtPiecesPreview({ index, image, title, artist }) {
  return (
    <>
      <Image
        src={image}
        height={230}
        width={140}
        alt={`piece of art title: ${title} by ${artist}`}
      />
      <h2 key={index}>
        "{title}" : {artist}
      </h2>
    </>
  );
}
