import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/art-piece-details";

export default function ArtPieceDetailsPage({ data }) {
  const router = useRouter();

  const { slug } = router.query;
  const piece = data.find((piece) => piece.slug === slug);
  if (!piece) {
    return <p>Error</p>;
  }
  return (
    <ArtPieceDetails
      image={piece.imageSource}
      title={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
    />
  );
}
