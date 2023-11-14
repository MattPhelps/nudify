import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/devil.webp" />
          <meta
            name="description"
            content="Remove clothes from any image."
          />
          <meta property="og:site_name" content="Blur Remover" />
          <meta
            property="og:description"
            content="Remove clothes from any image."
          />
          <meta property="og:title" content="Blur Remover" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Blur Remover" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
