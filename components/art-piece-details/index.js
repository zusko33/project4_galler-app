import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ data }) {
  const { imageSource, name, artist, year, genre } = data;
  return (
    <article>
      <Image src={imageSource} height={460} width={280} alt={name} />
      <h1>{name}</h1>
      <div>
        <p>{artist}</p>
        <p>{year}</p>
        <p>{genre}</p>
      </div>
      <Link href="/art-pieces">🔙 all pieces</Link>
    </article>
  );
}
