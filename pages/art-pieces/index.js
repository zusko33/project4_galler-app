import ArtPiecesPreview from "../art-pieces-preview";
import useSWR from "swr";

export default function ArtPieces() {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(URL);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <ul>
        {data.map(({ index, name, artist, imageSource }) => (
          <li key={index}>
            <ArtPiecesPreview
              image={imageSource}
              title={name}
              artist={artist}
              index={index}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
