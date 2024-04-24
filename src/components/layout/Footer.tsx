import React from "react";

const Footer = () => {
    return (
        <div className='bg-primary text-secondary text-center font-montserrat '>
            <div className='container mx-auto px-4 py-8'>
                &copy; {new Date().getFullYear()} All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
