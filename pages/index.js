import useSWR from "swr";
import ArtPieces from "./art-pieces";
import Spotlight from "./spotlight";
import Link from "next/link";

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(URL);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const piece = data[Math.floor(Math.random() * data.length)];
  return (
    <>
      <div>
        <Spotlight artist={piece.artist} image={piece.imageSource} />
      </div>
    </>
  );
}
