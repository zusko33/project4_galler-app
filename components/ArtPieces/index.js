import ArtPiecesPreview from "../ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map(({ index, name, artist, imageSource }) => (
          <li key={index}>
            <ArtPiecesPreview
              image={imageSource}
              title={name}
              artist={artist}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
