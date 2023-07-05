import ArtPiecesPreview from "../../components/art-pieces-preview";

export default function Favorites({
  data,
  updateArtPiecesInfo,
  artPiecesInfo,
}) {
  const favorite = artPiecesInfo
    .filter((piece) => piece.isFavorite)
    .map((piece) => piece.slug);

  const favoritePieces = data.filter((piece) => favorite.includes(piece.slug));

  return (
    <>
      <h1>Favorite Art Pieces</h1>
      <ul>
        {favoritePieces.map((piece) => (
          <ArtPiecesPreview
            key={piece.slug}
            pieces={[piece]}
            handleToggleFavorite={updateArtPiecesInfo}
            artPiecesInfo={artPiecesInfo}
          />
        ))}
      </ul>
    </>
  );
}
