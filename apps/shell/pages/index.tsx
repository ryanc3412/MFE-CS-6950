import dynamic from "next/dynamic";

const RemoteHelloWorld = dynamic(
  () => import("../components/RemoteHelloWorld"),
  { ssr: false }
);

export default function Home() {
  return <RemoteHelloWorld />;
}
