import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";
import Layout from "../components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(URL, fetcher);

  const dataUpdate = data?.map((element) => ({
    ...element,
    isFavorite: false,
  }));
  const [artPiecesInfo, updateArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    { defaultValue: dataUpdate }
  );

  function handleToggleFavorite(slug) {
    const info = artPiecesInfo.find((info) => info.slug === slug) ?? {
      isFavorite: false,
    };
    updateArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);
      console.log("info", info);
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  if (error) {
    return <div>Error loading...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
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
          data={dataUpdate}
          artPiecesInfo={artPiecesInfo ? artPiecesInfo : []}
          onToggleFavorite={handleToggleFavorite}
        />
        <Layout />
      </SWRConfig>
    </>
  );
}
