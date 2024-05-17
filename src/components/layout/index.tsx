import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MailDialog } from "../MailDialog";

interface Props {
    children: React.ReactNode;
}
const DefaultLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main className='min-h-screen py-8  '>{children}</main>
            <Footer />
        </>
    );
};

export default DefaultLayout;
