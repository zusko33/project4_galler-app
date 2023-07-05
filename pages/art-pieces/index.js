import ArtPiecesPreview from "../../components/art-pieces-preview";
import Link from "next/link";

export default function ArtPieces({ data }) {
  return (
    <>
      <ul>
        {data.map((piece) => (
          <li key={piece.slug}>
            <Link href={`/art-pieces/${piece.slug}`}>
              {" "}
              <ArtPiecesPreview data={piece} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
