import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DefaultLayout from "@/components/layout";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Curating Technology",
    description:
        "We're a global network of elite product and technology experts poised to advance your key software projects.",
    icons: {
        icon: "/logo-white.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <Head>
                <link rel='icon' href='/logo-white.png' />
            </Head>

            <body className={"font-montserrat  bg-white"}>
                <DefaultLayout>{children}</DefaultLayout>
                <Toaster data-swipe-direction='up' />
            </body>
        </html>
    );
}
