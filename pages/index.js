import Spotlight from "../components/spotlight";

export default function HomePage({ data, updateArtPieceInfo }) {
  return (
    <>
      <div>
        <Spotlight pieces={data} updateArtPieceInfo={updateArtPieceInfo} />
      </div>
    </>
  );
}
