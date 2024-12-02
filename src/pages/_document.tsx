import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="light">
      <Head>
        <meta charSet="utf-8" />
        <meta name="color-scheme" content="light" /> 
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval';
            style-src 'self' 'unsafe-inline';
            img-src 'self' data: blob:;
            font-src 'self';
            connect-src 'self';
            worker-src 'self' blob:;
            frame-ancestors 'none';
          `.replace(/\s+/g, ' ').trim()}
        />
      </Head>
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
