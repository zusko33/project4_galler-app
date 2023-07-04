import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
// import Link from "next/link";
import Navigation from "../components/Navigation/Navigation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <header>ART Gallery</header>
        <Component {...pageProps} />
        <Navigation />
      </SWRConfig>
    </>
  );
}
