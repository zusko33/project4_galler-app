import Spotlight from "../components/spotlight";

export default function HomePage({ data, artPiecesInfo, onToggleFavorite }) {
  return (
    <>
      <div>
        <Spotlight
          pieces={data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
    </>
  );
}
