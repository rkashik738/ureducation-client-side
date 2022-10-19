import React from 'react';
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

const NavTopbar = () => {
    return (
        <div className='bg-primary py-2 text-base-100'>
            <div className='max-w-7xl mx-auto px-12 flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <p>Hotline: +60 102455305</p>
                    <span className="seperator h-3 w-[1px] bg-[#fff]"></span>
                    <p>Email: admin@ureducation.com</p>
                </div>
                <div className='flex items-center gap-4'>
                    <p>Book Appointment</p>
                    <span className="seperator h-3 w-[1px] bg-[#fff]"></span>
                    <FaWhatsapp className='h-6' />
                    <FaFacebook className='h-6' />
                </div>
            </div>
        </div>
    );
};

export default NavTopbar;