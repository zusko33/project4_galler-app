import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../favButton/FavoriteButton";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  console.log(image, title, artist);
  return (
    <article>
      <Image
        src={image}
        height={460}
        width={280}
        alt={`piece of art title: ${title} by ${artist}`}
      />
      <FavoriteButton />
      <h1>"{title}"</h1>
      <div>
        <p>{artist}</p>
        <p>{year}</p>
        <p>{genre}</p>
      </div>
      <Link href="/art-pieces">🔙 all pieces</Link>
    </article>
  );
}
