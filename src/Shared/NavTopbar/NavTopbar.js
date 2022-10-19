import React from 'react';

const NavTopbar = () => {
    return (
        <div className='bg-primary p-2 text-base-100'>
            <div className='max-w-7xl mx-auto px-12'>
                <div className='flex items-center gap-4'>
                    <p>Hotline: +60 102455305</p>
                    <span className="seperator h-3 w-[1px] bg-[#fff]"></span>
                    <p>Email: admin@ureducation.com</p>
                </div>
            </div>
        </div>
    );
};

export default NavTopbar;