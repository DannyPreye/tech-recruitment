import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className='bg-primary text-secondary text-center font-montserrat '>
            <div className='container mx-auto flex flex-col  px-4 py-8'>
                <Link href='mailto:info@curatingtechnology.org'>
                    info@curatingtechnology.org
                </Link>
                <span>
                    &copy; {new Date().getFullYear()} All rights reserved.
                </span>
            </div>
        </div>
    );
};

export default Footer;
