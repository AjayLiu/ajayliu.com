import type { AppProps } from "next/app";

import "@styles/globals.scss";
import "@styles/faq.scss";
function Application({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Application;
