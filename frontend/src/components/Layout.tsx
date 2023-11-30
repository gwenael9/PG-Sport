import Head from "next/head";
import { ReactNode } from "react";
import Nav from "./Nav";

interface LayoutProps {
    children: ReactNode;
    title: string;
}

export default function Layout({ children, title }: LayoutProps) {
    return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="sport" />
            <meta name="viewport" content="width=device-width, initial-scale-1"/>
            <link rel="icon" href="favicon.ico" />
        </Head>
        <main className="flex bg-fond bg-cover bg-center min-h-screen">
            <Nav />
            <div className="grow p-4 ml-5">{children}</div>
        </main>
    </>
    );
}