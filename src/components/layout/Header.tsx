"use client";
import React from "react";
import { Button } from "../ui/button";
import { IoMdMail } from "react-icons/io";
import { DialogTrigger } from "../ui/dialog";
import { MailDialog } from "../MailDialog";
import Image from "next/image";
const Header = () => {
    const [showMailDialog, setShowMailDialog] = React.useState(false);
    console.log(showMailDialog);
    return (
        <header className='shadow-md bg-primary-foreground text-white py-4 sticky top-0 '>
            <div className='container mx-auto px-4 flex justify-between items-center'>
                <Image
                    src='/logo-no-background.png'
                    width={100}
                    height={100}
                    alt='Curating Technology'
                />
                <Button
                    onClick={() => setShowMailDialog(true)}
                    className=' rounded-[18px] px-3 flex gap-2'
                >
                    Get in touch <IoMdMail />
                </Button>

                {/* <Button className='h-[46px] rounded-[16px] px-3'>
                Get in touch
            </Button> */}
            </div>
            <MailDialog
                onClose={() => setShowMailDialog(false)}
                open={showMailDialog}
            />
        </header>
    );
};

export default Header;
