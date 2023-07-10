'use client';

import Image from "next/image";

const NavbarLogo = () => {
    return (
        <div className="relative w-[40px] h-[40px] md:w-[45px] md:h-[45px]">
            <Image
                src="/images/lexica.svg"
                alt="Lexica"
                fill
                style={{
                    objectFit: 'contain',
                }}
            />
        </div>
    );
}
 
export default NavbarLogo;