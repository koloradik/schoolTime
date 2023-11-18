import Header from "@/components/header/Header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App(props: AppProps) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  return (
    <>
      <SessionProvider session={session}>
        <div className="h-screen" style={{ background: "url('/bg1.jpg')" }}>
          <Header />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </>
  );
}
