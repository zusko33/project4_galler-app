import ArtPiecesPreview from "../art-pieces-preview";

export default function Favorite({
  data,
  handleToggleFavorite,
  artPiecesInfo,
  slug,
  isFavorite,
}) {
  return (
    <>
      <ul>
        {data.map((piece) => {
          return (
            artPiecesInfo.includes(piece.slug) && (
              <ArtPiecesPreview
                key={piece.slug}
                data={piece}
                handleToggleFavorite={handleToggleFavorite}
                artPiecesInfo={artPiecesInfo}
                slug={slug}
                isFavorite={isFavorite}
              />
            )
          );
        })}
      </ul>
    </>
  );
}
