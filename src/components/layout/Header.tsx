import React from "react";
import { Button } from "../ui/button";
import { IoMdMail } from "react-icons/io";
const Header = () => {
    return (
        <header className='shadow-md bg-primary-foreground text-white py-4 sticky top-0 '>
            <div className='container mx-auto px-4 flex justify-end items-center'>
                <Button className=' rounded-[18px] px-3 flex gap-2'>
                    Get in touch <IoMdMail />
                </Button>
                {/* <Button className='h-[46px] rounded-[16px] px-3'>
                Get in touch
            </Button> */}
            </div>
        </header>
    );
};

export default Header;
