import Document, {
  Head,
  Html,
  Main,
  NextScript
  } from 'next/document';
import { GTM_ID } from '../lib/gtm';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../lib/styletron';
import type { DocumentContext } from "next/document";
import type { Key } from "react";
class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const renderPage = () =>
      context.renderPage({
        // eslint-disable-next-line react/display-name
        enhanceApp: (App) => (props) =>
          (
            <StyletronProvider value={styletron}>
              <App {...props} />
            </StyletronProvider>
          ),
      });

    const initialProps = await Document.getInitialProps({
      ...context,
      renderPage,
    });
    const stylesheets = styletron.getStylesheets() || [];
    return { ...initialProps, stylesheets };
  }

  render(): JSX.Element {
    const { stylesheets } = this.props as any;
    return (
      <Html>
        <Head></Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          {stylesheets.map(
            (
              sheet: {
                css: any;
                attrs: { [x: string]: any; media: string | undefined };
              },
              i: Key | null | undefined
            ) => (
              <style
                className="_styletron_hydrate_"
                dangerouslySetInnerHTML={{ __html: sheet.css }}
                media={sheet.attrs.media}
                data-hydrate={sheet.attrs["data-hydrate"]}
                key={i}
              />
            )
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
