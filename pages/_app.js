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
    { defaultValue: [] }
  );

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
          artPiecesInfo={artPiecesInfo}
          updateArtPiecesInfo={updateArtPiecesInfo}
        />
        <Layout />
      </SWRConfig>
    </>
  );
}
