'use client';

import Image from "next/image";

const NavbarLogo = () => {
    return (
        <div className="relative w-[40px] h-[40px]">
            <Image
                src="/images/lexica.png"
                alt="Lexica"
                fill
                style={{
                    objectFit: 'cover',
                }}
            />
            {/* <h4 className="font-base text-white font-normal text-base">Logo</h4> */}
        </div>
    );
}
 
export default NavbarLogo;