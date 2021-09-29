import Script from "next/script";
import { BaseProvider } from "baseui";
import { pageview } from "../lib/gtm";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../lib/styletron";
import { theme } from "../helpers/themeHelper";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // Watch for page changes needed for Google Tag Manager.
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Tag Manager - Global base code */}
      <Script id="show-banner" strategy="lazyOnload">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${process.env.GTM_ID}');`}
      </Script>
      <StyletronProvider value={styletron}>
        <BaseProvider theme={theme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    </>
  );
}
export default MyApp;
