import Head from "next/head";
import Header from "./header";
import NextNProgress from "nextjs-progressbar";

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/assets/poke_logo_128x128.png" />
            </Head>
            <NextNProgress color="#00a9e2" height={3} showOnShallow={true} startPosition={0.7} stopDelayMs={200} />
            <Header />
            <main>
                <div>{children}</div>
            </main>
        </>
    );
}
