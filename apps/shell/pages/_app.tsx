import "../styles/globals.css";

export default function App({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any>;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}
