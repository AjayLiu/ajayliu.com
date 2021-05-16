import type { AppProps } from "next/app";

import "@styles/globals.scss";
import "@styles/faq.scss";
import GoogleAnalyticsHook from "@components/GoogleAnalyticsHook";
function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalyticsHook />
      <Component {...pageProps} />
    </>
  );
}

export default Application;
