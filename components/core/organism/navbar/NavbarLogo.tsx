'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const NavbarLogo = () => {
    const router = useRouter();
    return (
        <div 
        onClick={() => router.replace('/')}
        className="relative w-[40px] h-[40px] md:w-[45px] md:h-[45px] cursor-pointer">
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