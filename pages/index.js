import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import Link from "next/link";

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(URL);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>Hello in Gallery App</h1>
      <ArtPieces pieces={data} />
    </div>
  );
}
