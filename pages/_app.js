import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useImmer } from "use-immer";
import Layout from "../components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPiecesInfo, updateArtPiecesInfo] = useImmer({
    ...data,
  });
  const updateArtPieceInfo = (slug, updatedInfo) => {
    console.log(slug, updatedInfo);
    updateArtPiecesInfo((draft) => {
      draft[slug] = { ...draft[slug], ...updatedInfo };
    });
  };

  if (error) {
    return <div>Error loading...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  function handleToggleFavorite(slug) {
    updateArtPieceInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);
      console.log(info);
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }
  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <header>ART Gallery</header>
        <Component
          {...pageProps}
          data={data}
          artPiecesInfo={artPiecesInfo}
          updateArtPieceInfo={updateArtPieceInfo}
          onToggleFavorite={handleToggleFavorite}
        />
        <Layout />
      </SWRConfig>
    </>
  );
}
