import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";
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
        <main className="flex">
            <Nav />
            <div className="grow p-4 bg-secondary ml-5">{children}</div>
        </main>
    </>
    );
}